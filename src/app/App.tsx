import { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { BookingDialog } from './components/BookingDialog';
import { ServiceDetailDialog } from './components/ServiceDetailDialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Badge } from './components/ui/badge';
import { Hammer, Wrench, Lightbulb, PaintBucket, Droplets, Zap, Package, CheckCircle2, Clock, Mail, Phone, MapPin, Shield, SparklesIcon, ArrowRight, Star, Award, Users, ThumbsUp, TrendingUp, BookOpen, Gift, X } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from './components/ui/sonner';
import logoImg from '../imports/image.png';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [serviceDetailOpen, setServiceDetailOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [showPromoBanner, setShowPromoBanner] = useState(true);

  const services = [
    {
      icon: Hammer,
      title: 'Repairs & Maintenance',
      description: 'From small fixes to complete home maintenance projects',
      image: 'https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      fullDescription: 'Keep your home in top condition with our comprehensive repair and maintenance services. We handle everything from minor fixes to major repairs, ensuring your home remains safe, functional, and beautiful.',
      features: [
        'Door and window repairs',
        'Drywall patching and repair',
        'Trim and molding fixes',
        'Hardware replacement',
        'Weather stripping',
        'Caulking and sealing',
        'Minor roof repairs',
        'Gutter cleaning and repair'
      ],
      images: [
        'https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        'https://images.unsplash.com/photo-1774977863604-59f4e6d37a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        'https://images.unsplash.com/photo-1760571327612-8ab776dcd462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
      ],
      pricing: 'Hourly rate: $65/hour. Most small repairs completed in 1-2 hours.'
    },
    {
      icon: Package,
      title: 'Assembly & Installation',
      description: 'Professional assembly for furniture, fixtures, and appliances',
      image: 'https://images.unsplash.com/photo-1772338537689-056082f100a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      fullDescription: 'Save time and avoid frustration with our expert assembly and installation services. From furniture to complex fixtures, we handle it all with precision and care.',
      features: [
        'Furniture assembly (IKEA, etc.)',
        'TV mounting and setup',
        'Shelving installation',
        'Light fixture installation',
        'Ceiling fan installation',
        'Cabinet hardware installation',
        'Pool and outdoor equipment setup',
        'Smart home device installation'
      ],
      images: [
        'https://images.unsplash.com/photo-1772338537689-056082f100a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        'https://images.unsplash.com/photo-1590635023142-73c3d34f2805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        'https://images.unsplash.com/photo-1623043453741-11aef9cb59b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
      ],
      pricing: 'Starting at $75 for basic furniture assembly. Complex installations priced per project.'
    },
    {
      icon: PaintBucket,
      title: 'Painting & Finishing',
      description: 'Transform your space with professional painting and refinishing',
      image: 'https://images.unsplash.com/photo-1747227590487-001890c65865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      fullDescription: 'Give your home a fresh new look with our professional painting and refinishing services. We pay attention to every detail to deliver flawless results that will last for years.',
      features: [
        'Interior room painting',
        'Accent wall painting',
        'Trim and molding painting',
        'Cabinet refinishing',
        'Door and window painting',
        'Touch-up and repair work',
        'Color consultation',
        'Preparation and cleanup included'
      ],
      images: [
        'https://images.unsplash.com/photo-1747227590487-001890c65865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        'https://images.unsplash.com/photo-1747227567987-c1e414b1634d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        'https://images.unsplash.com/photo-1666179861891-db5155e290c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
      ],
      pricing: 'Room painting from $250. Cabinet refinishing from $400. Free estimates provided.'
    },
    {
      icon: Wrench,
      title: 'Plumbing & Electrical',
      description: 'Safe, professional work for plumbing and electrical needs',
      image: 'https://images.unsplash.com/photo-1760571327612-8ab776dcd462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      fullDescription: 'Trust our experienced team for light plumbing and electrical work. We handle common household issues quickly and safely, ensuring everything is up to code.',
      features: [
        'Faucet repair and replacement',
        'Toilet repair and installation',
        'Drain cleaning and unclogging',
        'Outlet installation and repair',
        'Light switch replacement',
        'GFCI outlet installation',
        'Light fixture wiring',
        'Minor leak repairs'
      ],
      images: [
        'https://images.unsplash.com/photo-1760571327612-8ab776dcd462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        'https://images.unsplash.com/photo-1774977863604-59f4e6d37a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        'https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
      ],
      pricing: 'Service call: $85. Most repairs completed during initial visit.'
    },
    {
      icon: CheckCircle2,
      title: 'Custom Projects & Honey-Do Lists',
      description: 'Your complete project solution from planning to completion',
      image: 'https://images.unsplash.com/photo-1619759247130-4e7a70f2fe27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      fullDescription: 'Have a long list of tasks or a special project in mind? We specialize in tackling those honey-do lists and custom woodworking projects that have been sitting on your to-do list for too long.',
      features: [
        'Raised garden beds',
        'Custom shelving units',
        'Small outdoor structures',
        'Deck repairs',
        'Fence installation and repair',
        'Multiple task completion',
        'Weekend project assistance',
        'Custom woodworking'
      ],
      images: [
        'https://images.unsplash.com/photo-1619759247130-4e7a70f2fe27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        'https://images.unsplash.com/photo-1620388639854-6e23776162f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        'https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
      ],
      pricing: 'Project-based pricing. Half-day (4 hours): $260. Full-day (8 hours): $480.'
    },
    {
      icon: SparklesIcon,
      title: 'Cleaning Services',
      description: 'Refresh your home and reclaim your valuable time',
      image: 'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      fullDescription: 'Our professional cleaning services are designed to give you back valuable time in your day while ensuring your home sparkles. Whether you need a one-time deep clean or regular maintenance, we customize our approach to fit your lifestyle and budget.',
      features: [
        'One-time deep cleaning',
        'Weekly cleaning packages',
        'Bi-weekly maintenance',
        'Monthly touch-ups',
        'Move-in/move-out cleaning',
        'Eco-friendly products available',
        'Customizable cleaning checklists',
        'Satisfaction guaranteed'
      ],
      images: [
        'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        'https://images.unsplash.com/photo-1620563671147-979557991e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        'https://images.unsplash.com/photo-1649073005971-37babef31983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
      ],
      pricing: 'Custom packages starting at $89. Contact us for a personalized quote based on your home size and frequency.'
    }
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setServiceDetailOpen(true);
  };

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      image: 'https://images.unsplash.com/photo-1616377230292-97f202692d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
      rating: 5,
      text: 'Felix did an amazing job installing our new light fixtures and assembling our patio furniture. Professional, on time, and cleaned up perfectly. Highly recommend!',
      service: 'Installation & Assembly'
    },
    {
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1606383446421-d0f8bdd1e5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
      rating: 5,
      text: 'We had a long honey-do list that kept getting pushed off. Felix knocked it all out in one day! Fixed our squeaky doors, patched drywall, and even helped with some painting. Worth every penny.',
      service: 'Honey-Do List'
    },
    {
      name: 'Jessica Thompson',
      image: 'https://images.unsplash.com/photo-1730575959795-c55aba81e703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
      rating: 5,
      text: 'The bi-weekly cleaning service has been a game changer for our family. Our house has never looked better and we actually have time for weekend activities now!',
      service: 'Cleaning Services'
    },
    {
      name: 'David Rodriguez',
      image: 'https://images.unsplash.com/photo-1545947313-93c756069e69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
      rating: 5,
      text: 'Felix built us beautiful raised garden beds for our backyard. The craftsmanship is excellent and he was great about working within our budget. Will definitely use again!',
      service: 'Custom Woodwork'
    }
  ];

  const portfolioItems = [
    {
      type: 'before-after',
      before: 'https://images.unsplash.com/photo-1749001157641-08113d7313e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      after: 'https://images.unsplash.com/photo-1731557482469-35cd8c3a378b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Living Room Refresh',
      description: 'Complete painting and fixture updates'
    },
    {
      type: 'single',
      image: 'https://images.unsplash.com/photo-1584677191047-38f48d0db64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Professional Tools',
      description: 'Quality tools for quality work'
    },
    {
      type: 'before-after',
      before: 'https://images.unsplash.com/photo-1768321902047-2296fd495fa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      after: 'https://images.unsplash.com/photo-1747227590487-001890c65865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Hallway Renovation',
      description: 'Drywall repair, painting, and new lighting'
    },
    {
      type: 'single',
      image: 'https://images.unsplash.com/photo-1533780898421-b118c81ac26b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Tool Organization',
      description: 'Well-maintained equipment'
    },
    {
      type: 'single',
      image: 'https://images.unsplash.com/photo-1606676539940-12768ce0e762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Power Tools',
      description: 'Professional grade equipment'
    },
    {
      type: 'before-after',
      before: 'https://images.unsplash.com/photo-1673648068157-b35556bc25ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      after: 'https://images.unsplash.com/photo-1753977725475-41b221add2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      title: 'Exterior Transformation',
      description: 'Siding repair and fresh paint'
    },
    {
      type: 'single',
      image: 'https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Hand Tools Collection',
      description: 'Every job needs the right tool'
    },
    {
      type: 'single',
      image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Carpentry Work',
      description: 'Custom woodworking projects'
    },
    {
      type: 'single',
      image: 'https://images.unsplash.com/photo-1763798816055-9a03df62bd65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Workshop Setup',
      description: 'Organized and ready to work'
    }
  ];

  const faqs = [
    {
      question: 'Do you provide your own materials and tools?',
      answer: 'Yes! I bring all necessary tools for the job. For materials, we can discuss whether you\'d like to provide them or have me source them. I\'m happy to work either way based on your preference.'
    },
    {
      question: 'How do you charge for services?',
      answer: 'Pricing varies by service type. Some services like cleaning are package-based, while repairs are typically hourly ($65/hour). Larger projects are quoted individually. I always provide a clear estimate before starting any work.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, I am fully insured with general liability coverage. I take safety and professionalism seriously and ensure all work meets local code requirements.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'I primarily serve the greater metro area, but I\'m happy to travel for larger projects. Contact me and we can discuss your location!'
    },
    {
      question: 'How far in advance do I need to book?',
      answer: 'It depends on the season and my current schedule. I often have availability within a few days, but for larger projects or specific dates, booking 1-2 weeks ahead is recommended. I also offer same-day service when available!'
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'Your satisfaction is my top priority. If you\'re not happy with anything, let me know immediately and I\'ll make it right. I stand behind all my work 100%.'
    },
    {
      question: 'Can you help me figure out what needs to be done?',
      answer: 'Absolutely! I offer free consultations where we can walk through your space together, discuss your needs, and create a plan. Sometimes homeowners aren\'t sure what\'s possible or how to prioritize - I\'m here to help!'
    },
    {
      question: 'Do you work on weekends?',
      answer: 'Yes, I offer weekend appointments to accommodate your schedule. Weekend slots fill up quickly, so booking in advance is recommended.'
    }
  ];

  const blogTips = [
    {
      title: '5 Home Maintenance Tasks You Shouldn\'t Skip',
      image: 'https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      excerpt: 'Regular maintenance can save you thousands in repairs. Here are the essential tasks every homeowner should prioritize.',
      category: 'Maintenance'
    },
    {
      title: 'DIY vs. Hiring a Pro: When to Call for Help',
      image: 'https://images.unsplash.com/photo-1584677191047-38f48d0db64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      excerpt: 'Not every project needs a professional, but some definitely do. Learn when it\'s worth tackling yourself and when to call in an expert.',
      category: 'Tips'
    },
    {
      title: 'Preparing Your Home for Spring: A Checklist',
      image: 'https://images.unsplash.com/photo-1619759247130-4e7a70f2fe27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      excerpt: 'Spring is the perfect time to tackle outdoor projects and home maintenance. Use this checklist to get your home ready for the warmer months.',
      category: 'Seasonal'
    }
  ];

  const features = [
    { icon: Clock, text: 'Same-Day Service Available' },
    { icon: Shield, text: 'Insured & Experienced' },
    { icon: CheckCircle2, text: 'Satisfaction Guaranteed' }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Toaster />

      {/* Promotional Banner */}
      {showPromoBanner && (
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-3 px-4 relative">
          <div className="container mx-auto text-center">
            <p className="text-sm sm:text-base font-medium">
              <Gift className="inline w-4 h-4 mr-2" />
              Spring Special: Get 15% off your first cleaning service! Use code SPRING2026
            </p>
          </div>
          <button
            onClick={() => setShowPromoBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Fix This Felix Logo" className="h-12 sm:h-14" />
            </div>
            <nav className="hidden md:flex items-center gap-6 mr-auto ml-8">
              <a href="#services" className="text-slate-700 hover:text-teal-600 transition-colors">Services</a>
              <a href="#gallery" className="text-slate-700 hover:text-teal-600 transition-colors">Gallery</a>
              <a href="#about" className="text-slate-700 hover:text-teal-600 transition-colors">About</a>
              <a href="#contact" className="text-slate-700 hover:text-teal-600 transition-colors">Contact</a>
            </nav>
            <Button onClick={() => setBookingOpen(true)} size="sm" className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-teal-50 via-emerald-50 to-lime-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Saving the world.<br />One project at a time.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Expert home maintenance and repair services. We handle your honey-do list so you don't have to.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button onClick={() => setBookingOpen(true)} size="lg" className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-lg px-8">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-teal-500 text-teal-600 hover:bg-teal-50" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Us
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pt-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <feature.icon className="w-5 h-5 text-teal-600" />
                  <span className="text-sm sm:text-base text-slate-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 px-4" id="services">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Click any service to see details, pricing, and photos of our work
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-xl transition-all hover:border-teal-300 overflow-hidden cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg mb-1 group-hover:text-teal-600 transition-colors">{service.title}</CardTitle>
                      <CardDescription className="text-sm">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service);
                    }}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-teal-50 via-emerald-50 to-lime-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-teal-600 mb-1">Licensed</h3>
              <p className="text-sm text-slate-600">Fully Insured</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-teal-600 mb-1">500+</h3>
              <p className="text-sm text-slate-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-teal-600 mb-1">5+ Years</h3>
              <p className="text-sm text-slate-600">Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-teal-600 mb-1">100%</h3>
              <p className="text-sm text-slate-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Felix Section */}
      <section className="py-12 sm:py-20 px-4 bg-white" id="about">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1461938337379-4b537cd2db74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Felix - Professional Handyman"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Meet Felix</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Hi, I'm Felix! For over 5 years, I've been helping homeowners in our community tackle their to-do lists and transform their spaces. What started as helping friends and neighbors has grown into a passion for making homes better, one project at a time.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                I believe every home deserves attention to detail and quality workmanship. Whether it's a small repair or a complete project list, I approach each job with the same level of care and professionalism. My goal isn't just to check items off your list—it's to exceed your expectations and build lasting relationships.
              </p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                When I'm not fixing things, you can find me spending time with my family, working on woodworking projects, or helping out at local community events. I'm proud to serve this community and grateful for every opportunity to help make your house feel more like home.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1">Licensed & Insured</Badge>
                <Badge variant="secondary" className="px-3 py-1">Background Checked</Badge>
                <Badge variant="secondary" className="px-3 py-1">5+ Years Experience</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex gap-1 my-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-xs text-teal-600">{testimonial.service}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-teal-50 via-emerald-50 to-lime-50" id="gallery">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From transformations to the tools and techniques that make it happen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all group border-2 hover:border-teal-300">
                {item.type === 'before-after' ? (
                  <>
                    <div className="relative bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-2 px-4">
                      <p className="text-xs font-semibold uppercase tracking-wide">Transformation</p>
                    </div>
                    <div className="relative">
                      <div className="grid grid-cols-2">
                        <div className="relative aspect-square">
                          <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                          <div className="absolute bottom-2 left-2 bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded">
                            Before
                          </div>
                        </div>
                        <div className="relative aspect-square">
                          <img src={item.after} alt="After" className="w-full h-full object-cover" />
                          <div className="absolute bottom-2 right-2 bg-teal-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded">
                            After
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                        <ArrowRight className="w-5 h-5 text-teal-600" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1 text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">
              Got questions? We've got answers!
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Tips/Blog Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-teal-50 via-emerald-50 to-lime-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Helpful Tips & Guides</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Expert advice to help you maintain and improve your home
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogTips.map((tip, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{tip.category}</Badge>
                  <CardTitle className="text-lg group-hover:text-teal-600 transition-colors">
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{tip.excerpt}</p>
                  <Button variant="link" className="px-0 mt-3 text-teal-600">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Program Section */}
      <section className="py-12 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-50">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Love Our Service? Share the Love!</h2>
              <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
                Refer a friend or family member to Fix This Felix and you'll both receive <span className="font-bold text-teal-600">$25 off</span> your next service. It's our way of saying thank you for spreading the word!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setBookingOpen(true)} size="lg" className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
                  Refer a Friend
                </Button>
                <Button variant="outline" size="lg" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                  Learn More
                </Button>
              </div>
              <p className="text-xs text-slate-600 mt-6">
                *Discount applied after referred customer completes their first service
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-teal-50 via-emerald-50 to-lime-50" id="contact">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-teal-100">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:719-229-2564" className="text-slate-600 hover:text-teal-600">719-229-2564</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:letfelixfixit@gmail.com" className="text-slate-600 hover:text-teal-600 break-all">letfelixfixit@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Service Area</p>
                        <p className="text-slate-600">Greater Metro Area</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Hours</p>
                        <p className="text-slate-600">Mon-Fri: 8AM-6PM</p>
                        <p className="text-slate-600">Sat: 9AM-3PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Tell us about your project and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell us about the work you need done..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <img src={logoImg} alt="Fix This Felix Logo" className="h-10" />
            <p className="text-slate-600 text-sm">&copy; 2026 Fix This Felix. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
      <ServiceDetailDialog
        open={serviceDetailOpen}
        onOpenChange={setServiceDetailOpen}
        service={selectedService}
        onBookNow={() => setBookingOpen(true)}
      />
    </div>
  );
}