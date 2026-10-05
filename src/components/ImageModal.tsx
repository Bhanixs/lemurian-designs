import { X, ZoomIn } from "lucide-react";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption?: string;
}

export function ImageModal({ isOpen, onClose, imageSrc, title, caption }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[92vh] flex flex-col items-center justify-center p-2 rounded-lg bg-black/40 border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-black text-white/90 hover:text-white border border-white/20 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="relative overflow-hidden rounded max-h-[78vh] flex items-center justify-center">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[78vh] max-w-full object-contain rounded select-none"
          />
        </div>

        <div className="mt-3 text-center px-4">
          <h3 className="text-white text-base font-serif font-medium tracking-wide">{title}</h3>
          {caption && <p className="text-white/70 text-xs mt-1 max-w-xl mx-auto">{caption}</p>}
        </div>
      </div>
    </div>
  );
}
