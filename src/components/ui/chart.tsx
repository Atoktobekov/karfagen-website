import * as React from "react";
import * as Recharts from "recharts";
import { cn } from "./utils";

// --- Типы для конфигурации чарта ---
export const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfigItem = {
    label?: React.ReactNode;
    icon?: React.ComponentType;
} & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
    );

export type ChartConfig = Record<string, ChartConfigItem>;

// --- Tooltip / Legend данные ---
export interface TooltipItem {
    value?: number | string;
    name?: string;
    dataKey?: string;
    payload?: Record<string, unknown>;
    color?: string;
    [key: string]: unknown;
}

export type TooltipPayload = TooltipItem[];

// --- Контекст чарта ---
interface ChartContextProps {
    config: ChartConfig;
}
const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
    const context = React.useContext(ChartContext);
    if (!context) throw new Error("useChart must be used within <ChartContainer>");
    return context;
}

// --- ChartContainer ---
interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    config: ChartConfig;
    id?: string;
    children: React.ReactNode;
}

export function ChartContainer({ id, className, children, config, ...props }: ChartContainerProps) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const uniqueId = React.useId ? React.useId() : Math.random().toString(36).slice(2, 9);
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

    return (
        <ChartContext.Provider value={{ config }}>
            <div
                data-slot="chart"
                data-chart={chartId}
                className={cn(
                    "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
                    className,
                )}
                {...props}
            >
                <ChartStyle id={chartId} config={config} />
                <Recharts.ResponsiveContainer>{children}</Recharts.ResponsiveContainer>
            </div>
        </ChartContext.Provider>
    );
}

// --- ChartStyle ---
interface ChartStyleProps {
    id: string;
    config: ChartConfig;
}

const ChartStyle = ({ id, config }: ChartStyleProps) => {
    const colorConfig = Object.entries(config).filter(
        ([, item]) => item.theme || item.color
    );

    if (!colorConfig.length) return null;

    return (
        <style
            dangerouslySetInnerHTML={{
                __html: Object.entries(THEMES)
                    .map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
                        .map(([key, item]) => {
                            const color = item.theme?.[theme as keyof typeof item.theme] || item.color;
                            return color ? `  --color-${key}: ${color};` : "";
                        })
                        .join("\n")}
}
` )
                    .join("\n"),
            }}
        />
    );
};

// --- ChartTooltipContent ---
interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    payload?: TooltipPayload;
    indicator?: "line" | "dot" | "dashed";
    hideLabel?: boolean;
    hideIndicator?: boolean;
    label?: string;
    labelFormatter?: (value: unknown, payload?: TooltipPayload) => React.ReactNode;
    labelClassName?: string;
    formatter?: (value: unknown, name?: string, item?: TooltipItem, index?: number, payload?: unknown) => React.ReactNode;
    color?: string;
    nameKey?: string;
    labelKey?: string;
}

export function ChartTooltipContent({
                                        active,
                                        payload,
                                        className,
                                        indicator = "dot",
                                        hideLabel = false,
                                        hideIndicator = false,
                                        label,
                                        labelFormatter,
                                        labelClassName,
                                        formatter,
                                        color,
                                        nameKey,
                                        labelKey,
                                    }: ChartTooltipContentProps) {
    const { config } = useChart();
    const safePayload = payload || [];

    if (!active || !safePayload.length) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const tooltipLabel = React.useMemo(() => {
        if (hideLabel || !safePayload.length) return null;

        const [item] = safePayload;
        const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
        const itemConfig = config[key];
        const value = !labelKey && typeof label === "string" ? itemConfig?.label || label : itemConfig?.label;

        if (labelFormatter) return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, safePayload)}</div>;
        if (!value) return null;
        return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, safePayload, hideLabel, labelClassName, config, labelKey]);

    const nestLabel = safePayload.length === 1 && indicator !== "dot";

    return (
        <div
            className={cn(
                "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
                className
            )}
        >
            {!nestLabel ? tooltipLabel : null}
            <div className="grid gap-1.5">
                {safePayload.map((item: TooltipItem, index: number) => {
                    const key = `${nameKey || item.name || item.dataKey || "value"}`;
                    const itemConfig = config[key];
                    const indicatorColor = color || item.payload?.fill || item.color;

                    return (
                        <div
                            key={index}
                            className={cn(
                                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                                indicator === "dot" && "items-center"
                            )}
                        >
                            {formatter && item?.value !== undefined && item.name
                                ? formatter(item.value, item.name, item, index, item.payload)
                                : <>
                                    {itemConfig?.icon && !hideIndicator ? <itemConfig.icon /> : !hideIndicator && (
                                        <div
                                            className={cn(
                                                "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                                                {
                                                    "h-2.5 w-2.5": indicator === "dot",
                                                    "w-1": indicator === "line",
                                                    "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                                                    "my-0.5": nestLabel && indicator === "dashed"
                                                }
                                            )}
                                            style={{ "--color-bg": indicatorColor, "--color-border": indicatorColor } as unknown as React.CSSProperties}
                                        />
                                    )}
                                    <div className={cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center")}>
                                        <div className="grid gap-1.5">{nestLabel ? tooltipLabel : null}<span className="text-muted-foreground">{itemConfig?.label || item.name}</span></div>
                                        {item.value && <span className="text-foreground font-mono font-medium tabular-nums">{item.value.toLocaleString()}</span>}
                                    </div>
                                </>
                            }
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// --- ChartLegendContent ---
interface ChartLegendContentProps extends React.HTMLAttributes<HTMLDivElement> {
    payload?: TooltipPayload;
    verticalAlign?: "top" | "bottom";
    hideIcon?: boolean;
    nameKey?: string;
}

export function ChartLegendContent({
                                       payload,
                                       verticalAlign = "bottom",
                                       hideIcon = false,
                                       nameKey,
                                       className,
                                       ...divProps
                                   }: ChartLegendContentProps) {
    const { config } = useChart();
    if (!payload?.length) return null;

    return (
        <div {...divProps} className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}>
            {payload.map((item: TooltipItem, idx: number) => {
                const key = `${nameKey || item.dataKey || "value"}`;
                const itemConfig = config[key];

                return (
                    <div key={idx} className={cn("[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3")}>
                        {itemConfig?.icon && !hideIcon ? <itemConfig.icon /> : <div className="h-2 w-2 shrink-0 rounded-[2px]" style={{ backgroundColor: item.color }} />}
                        {itemConfig?.label}
                    </div>
                );
            })}
        </div>
    );
}

// --- Экспорт ---
export const ChartTooltip = Recharts.Tooltip;
export const ChartLegend = Recharts.Legend;
export { ChartStyle };
