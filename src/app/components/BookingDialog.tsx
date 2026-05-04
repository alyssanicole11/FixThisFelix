import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    issue: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking request submitted! We\'ll contact you shortly.');
    onOpenChange(false);
    setFormData({ name: '', email: '', phone: '', device: '', issue: '', time: '' });
    setDate(undefined);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book a Service</DialogTitle>
          <DialogDescription>
            Tell us about your project and we'll get back to you shortly to schedule your appointment.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Service Type</Label>
            <Select required value={formData.device} onValueChange={(value) => setFormData({ ...formData, device: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cleaning">Cleaning Services</SelectItem>
                <SelectItem value="maintenance">Home Maintenance & Repair</SelectItem>
                <SelectItem value="assembly">Assembly Services</SelectItem>
                <SelectItem value="fixture">Fixture & Appliance Install</SelectItem>
                <SelectItem value="plumbing">Light Plumbing</SelectItem>
                <SelectItem value="electrical">Light Electrical</SelectItem>
                <SelectItem value="painting">Painting & Refinishing</SelectItem>
                <SelectItem value="woodwork">Wood Building Projects</SelectItem>
                <SelectItem value="honeydoo">Honey-Do List</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="issue">Project Description</Label>
            <Input
              id="issue"
              required
              value={formData.issue}
              onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
              placeholder="Describe the work needed..."
            />
          </div>
          <div className="space-y-2">
            <Label>Preferred Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : 'Pick a date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time</Label>
            <Select required value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9am">9:00 AM</SelectItem>
                <SelectItem value="10am">10:00 AM</SelectItem>
                <SelectItem value="11am">11:00 AM</SelectItem>
                <SelectItem value="12pm">12:00 PM</SelectItem>
                <SelectItem value="1pm">1:00 PM</SelectItem>
                <SelectItem value="2pm">2:00 PM</SelectItem>
                <SelectItem value="3pm">3:00 PM</SelectItem>
                <SelectItem value="4pm">4:00 PM</SelectItem>
                <SelectItem value="5pm">5:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Submit Booking Request</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
