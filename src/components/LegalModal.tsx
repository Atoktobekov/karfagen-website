import { Dialog, DialogContent } from './ui/dialog';
/*import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';*/
import { ScrollArea } from './ui/scroll-area';
import { X } from 'lucide-react';

interface LegalModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    children: React.ReactNode;
}

export function LegalModal({ open, onOpenChange, title, children }: LegalModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="
        w-[90vw]
        h-[90vh]
        max-w-none sm:max-w-none
        bg-[#2F3B50] border-[#C48A52]/30 p-0 gap-0 flex flex-col
    "
            >

            {/* Custom Header */}
                <div className="flex-shrink-0 bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] border-b border-[#C48A52]/20 px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl text-white mb-2">{title}</h2>
                            <p className="text-white/60">Последнее обновление: 6 декабря 2025</p>
                        </div>
                        <button
                            onClick={() => onOpenChange(false)}
                            className="w-10 h-10 bg-[#C48A52]/20 hover:bg-[#C48A52]/30 rounded-lg flex items-center justify-center transition-all group"
                        >
                            <X className="w-5 h-5 text-white/70 group-hover:text-white" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-hidden">
                    <ScrollArea className="h-full px-8 py-6">
                        <div className="prose prose-invert max-w-none pb-4">
                            {children}
                        </div>
                    </ScrollArea>
                </div>

                {/* Footer */}
                <div className="flex-shrink-0 bg-gradient-to-br from-[#3d4a61] to-[#2F3B50] border-t border-[#C48A52]/20 px-8 py-4">
                    <button
                        onClick={() => onOpenChange(false)}
                        className="px-8 py-3 bg-gradient-to-r from-[#C48A52] to-[#FF9E76] text-white rounded-lg hover:shadow-lg hover:shadow-[#C48A52]/30 transition-all"
                    >
                        Я ознакомлен
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
