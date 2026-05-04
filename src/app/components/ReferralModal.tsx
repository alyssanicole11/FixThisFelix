import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { useState } from 'react';
import { Gift } from 'lucide-react';

interface ReferralModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReferralModal({ open, onOpenChange }: ReferralModalProps) {
  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    friendName: '',
    friendEmail: '',
    friendPhone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! Your referral has been submitted. You\'ll both receive $25 off!');
    onOpenChange(false);
    setFormData({ yourName: '', yourEmail: '', friendName: '', friendEmail: '', friendPhone: '' });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle>Refer a Friend</DialogTitle>
              <DialogDescription>You'll both get $25 off!</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-teal-800">
              When your friend completes their first service, you'll both receive <span className="font-bold">$25 off</span> your next booking. It's our way of saying thank you!
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Your Information</h4>
            <div className="space-y-2">
              <Label htmlFor="yourName">Your Name</Label>
              <Input
                id="yourName"
                required
                value={formData.yourName}
                onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="yourEmail">Your Email</Label>
              <Input
                id="yourEmail"
                type="email"
                required
                value={formData.yourEmail}
                onChange={(e) => setFormData({ ...formData, yourEmail: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Friend's Information</h4>
            <div className="space-y-2">
              <Label htmlFor="friendName">Friend's Name</Label>
              <Input
                id="friendName"
                required
                value={formData.friendName}
                onChange={(e) => setFormData({ ...formData, friendName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="friendEmail">Friend's Email</Label>
              <Input
                id="friendEmail"
                type="email"
                required
                value={formData.friendEmail}
                onChange={(e) => setFormData({ ...formData, friendEmail: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="friendPhone">Friend's Phone</Label>
              <Input
                id="friendPhone"
                type="tel"
                required
                value={formData.friendPhone}
                onChange={(e) => setFormData({ ...formData, friendPhone: e.target.value })}
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
            Send Referral
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
