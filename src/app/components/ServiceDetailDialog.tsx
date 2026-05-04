import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { CheckCircle2, X } from 'lucide-react';

interface ServiceDetail {
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  images: string[];
  pricing?: string;
}

interface ServiceDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: ServiceDetail | null;
  onBookNow: () => void;
}

export function ServiceDetailDialog({ open, onOpenChange, service, onBookNow }: ServiceDetailDialogProps) {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{service.title}</DialogTitle>
          <DialogDescription className="text-base">{service.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-3">
            {service.images.map((img, idx) => (
              <div key={idx} className="aspect-video overflow-hidden rounded-lg bg-slate-100">
                <img src={img} alt={`${service.title} ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Full Description */}
          <div>
            <p className="text-slate-700 leading-relaxed">{service.fullDescription}</p>
          </div>

          {/* Features List */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">What We Offer:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          {service.pricing && (
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-teal-900 mb-1">Pricing</p>
              <p className="text-slate-700">{service.pricing}</p>
            </div>
          )}

          {/* CTA */}
          <div className="flex gap-3 pt-4 border-t">
            <Button
              onClick={() => {
                onOpenChange(false);
                onBookNow();
              }}
              className="flex-1 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
            >
              Book This Service
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
