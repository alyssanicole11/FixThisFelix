import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Gift, CheckCircle2 } from 'lucide-react';

interface LearnMoreModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LearnMoreModal({ open, onOpenChange }: LearnMoreModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <DialogTitle>How the Referral Program Works</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-teal-900 mb-2">Share the Love, Save Together!</h3>
            <p className="text-teal-800">
              When you refer a friend or family member to Fix This Felix, you'll both receive <span className="font-bold text-teal-600">$25 off</span> your next service.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">How It Works:</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">
                  1
                </div>
                <div>
                  <h5 className="font-medium">Refer Your Friend</h5>
                  <p className="text-sm text-slate-600">Fill out the referral form with your friend's information, or have them mention your name when they book.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">
                  2
                </div>
                <div>
                  <h5 className="font-medium">They Complete Their First Service</h5>
                  <p className="text-sm text-slate-600">Your friend books and completes any service from our full range of handyman solutions.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">
                  3
                </div>
                <div>
                  <h5 className="font-medium">You Both Save!</h5>
                  <p className="text-sm text-slate-600">After their service is complete, you'll both receive a $25 discount code for your next booking.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-3">Program Benefits:</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm">No limit on referrals - refer as many friends as you'd like!</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm">Discount can be applied to any service we offer</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm">Help your friends and family while saving money yourself</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm">Discount codes are valid for 6 months from issue date</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-xs text-slate-600">
              <span className="font-semibold">Terms & Conditions:</span> Discount applied after referred customer completes their first service. Not valid with other promotions. Service must be a minimum of $100 before discount is applied. Referrer and referee must be different households.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
