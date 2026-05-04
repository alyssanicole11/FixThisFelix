import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProjectGalleryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: any;
  initialImageIndex?: number;
}

export function ProjectGalleryModal({ open, onOpenChange, project, initialImageIndex = 0 }: ProjectGalleryModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const [sliderPosition, setSliderPosition] = useState(50);

  // Reset slider position when modal opens
  useEffect(() => {
    if (open) {
      setSliderPosition(50);
      setCurrentImageIndex(initialImageIndex);
    }
  }, [open, initialImageIndex]);

  if (!project) return null;

  const images = project.type === 'before-after'
    ? project.images || []
    : project.image
      ? [project.image]
      : [];

  const totalImages = images.length;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (project.type === 'before-after' && project.before && project.after) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (project.type === 'before-after' && project.before && project.after) {
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full"
          onClick={() => onOpenChange(false)}
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="relative overflow-y-auto max-h-[90vh]">
          {project.type === 'before-after' && project.before && project.after ? (
            <div className="relative w-full bg-slate-900" onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
              <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.after}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={project.before}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="flex gap-0.5">
                      <ChevronLeft className="w-4 h-4" />
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 bg-slate-900/90 text-white text-base font-semibold px-5 py-3 rounded">
                  Before
                </div>
                <div className="absolute bottom-6 right-6 bg-teal-600/90 text-white text-base font-semibold px-5 py-3 rounded">
                  After
                </div>
              </div>
            </div>
          ) : totalImages > 0 ? (
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt={project.title}
                className="w-full max-h-[75vh] object-contain bg-slate-900"
              />
              {totalImages > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                    {currentImageIndex + 1} / {totalImages}
                  </div>
                </>
              )}
            </div>
          ) : null}

          <div className="p-6 bg-white">
            <h3 className="text-2xl font-bold mb-2 text-slate-900">{project.title}</h3>
            <p className="text-slate-600">{project.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
