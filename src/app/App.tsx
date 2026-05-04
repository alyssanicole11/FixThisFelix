import { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { BookingDialog } from './components/BookingDialog';
import { ServiceDetailDialog } from './components/ServiceDetailDialog';
import { ReferralModal } from './components/ReferralModal';
import { LearnMoreModal } from './components/LearnMoreModal';
import { ProjectGalleryModal } from './components/ProjectGalleryModal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Badge } from './components/ui/badge';
import { Hammer, Wrench, PaintBucket, Package, CheckCircle2, Clock, Mail, Phone, MapPin, Shield, SparklesIcon, ArrowRight, Star, Gift, X, Award, ThumbsUp } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from './components/ui/sonner';
import logoSvg from '../imports/image-2.png';
import felixPhoto from '../imports/image-4.png';
import stair1 from '../imports/662748912_122170810484859319_3543507322848373909_n.jpg';
import stair2 from '../imports/661252325_122170810580859319_6655024017485692952_n.jpg';
import stair3 from '../imports/663175339_122170810568859319_6837095142625851206_n.jpg';
import stair4 from '../imports/657108529_122170810556859319_9028591813388796478_n.jpg';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [serviceDetailOpen, setServiceDetailOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [showPromoBanner, setShowPromoBanner] = useState(true);
  const [referralOpen, setReferralOpen] = useState(false);
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

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
      text: 'The staircase renovation was absolutely stunning! Felix was meticulous with every detail and the transformation exceeded our expectations. True craftsmanship!',
      service: 'Renovation'
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
      before: stair1,
      after: stair4,
      images: [stair1, stair2, stair3, stair4],
      title: 'Staircase Renovation',
      description: 'Complete staircase refinishing from start to finish'
    },
    {
      type: 'single',
      image: 'https://images.unsplash.com/photo-1627795925931-9e112aefe8a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Custom Carpentry',
      description: 'Built-in shelving and woodwork'
    },
    {
      type: 'single',
      image: 'https://images.unsplash.com/photo-1639059790587-95625e6b764c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Living Room Refresh',
      description: 'Painting and trim work'
    },
    {
      type: 'single',
      image: 'https://images.unsplash.com/photo-1635348291497-8c28ef034996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Deck Repair',
      description: 'Restored and sealed outdoor deck'
    },
    {
      type: 'single',
      image: 'https://images.unsplash.com/photo-1634638415860-cef1aafb60c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Interior Paint Job',
      description: 'Fresh paint and modern colors'
    },
    {
      type: 'single',
      image: 'https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Furniture Assembly',
      description: 'Professional assembly services'
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white" lang="en">
      <Toaster />

      {/* Promotional Banner */}
      {showPromoBanner && (
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-3 px-4 relative" role="banner" aria-label="Promotional offer">
          <div className="container mx-auto text-center">
            <p className="text-sm sm:text-base font-medium">
              <SparklesIcon className="inline w-4 h-4 mr-2" aria-hidden="true" />
              Spring Refresh Special: Get 15% off home maintenance and repair projects! Use code SPRING2026
            </p>
          </div>
          <button
            onClick={() => setShowPromoBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
            aria-label="Close promotional banner"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoSvg} alt="Fix This Felix - Professional Handyman Services" className="h-12 sm:h-14" />
            </div>
            <nav className="hidden md:flex items-center gap-6 mr-auto ml-8" aria-label="Main navigation">
              <a href="#services" className="text-slate-100 hover:text-teal-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 focus:rounded px-2 py-1">Services</a>
              <a href="#gallery" className="text-slate-100 hover:text-teal-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 focus:rounded px-2 py-1">Gallery</a>
              <a href="#about" className="text-slate-100 hover:text-teal-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 focus:rounded px-2 py-1">About</a>
              <a href="#contact" className="text-slate-100 hover:text-teal-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 focus:rounded px-2 py-1">Contact</a>
            </nav>
            <Button
              onClick={() => setBookingOpen(true)}
              size="sm"
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-800"
              aria-label="Book a service appointment"
            >
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main id="main-content">
        <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-teal-50/30" aria-labelledby="hero-heading">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <h1 id="hero-heading" className="text-4xl sm:text-6xl font-bold text-slate-900">
                Saving the world.<br />One project at a time.
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto">
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
                    <feature.icon className="w-5 h-5 text-teal-600" aria-hidden="true" />
                    <span className="text-sm sm:text-base text-slate-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 px-4" id="services" aria-labelledby="services-heading">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Our Services</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Click any service to see details, pricing, and photos of our work
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-xl transition-all hover:border-teal-300 overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-teal-400"
                onClick={() => handleServiceClick(service)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${service.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleServiceClick(service);
                  }
                }}
              >
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg mb-1 group-hover:text-teal-600 transition-colors text-slate-900">{service.title}</CardTitle>
                      <CardDescription className="text-sm text-slate-700">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-teal-600 hover:text-teal-700 hover:bg-teal-50 focus:ring-2 focus:ring-teal-400"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service);
                    }}
                    aria-label={`View details for ${service.title}`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats Section */}
      <section className="py-12 sm:py-16 px-4 bg-slate-50/50 border-y border-slate-100">
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
                <Star className="w-8 h-8 text-white" />
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
      <section className="py-12 sm:py-20 px-4 bg-white" id="about" aria-labelledby="about-heading">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={felixPhoto}
                alt="Felix - Professional Handyman"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
            <div>
              <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">Meet Felix</h2>
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
      <section className="py-12 sm:py-20 px-4 bg-white" aria-labelledby="testimonials-heading">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">What Our Customers Say</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
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
                      alt={`${testimonial.name}, customer photo`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                      <div className="flex gap-1 my-1" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                        ))}
                      </div>
                      <p className="text-xs text-teal-700 font-medium">{testimonial.service}</p>
                    </div>
                  </div>
                  <p className="text-slate-800 leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-12 sm:py-20 px-4 bg-slate-50/50" id="gallery" aria-labelledby="gallery-heading">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Our Work</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Recent projects and transformations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-xl transition-all group border-2 hover:border-teal-300 cursor-pointer focus-within:ring-2 focus-within:ring-teal-400"
                onClick={() => {
                  setSelectedProject(item);
                  setGalleryOpen(true);
                }}
                tabIndex={0}
                role="button"
                aria-label={`View enlarged photo of ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(item);
                    setGalleryOpen(true);
                  }
                }}
              >
                {item.type === 'before-after' ? (
                  <>
                    <div className="relative bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-2 px-4">
                      <p className="text-xs font-semibold uppercase tracking-wide">Transformation</p>
                    </div>
                    <div className="relative">
                      <div className="grid grid-cols-2">
                        <div className="relative aspect-[3/4]">
                          <img src={item.before} alt={`Before ${item.title}`} className="w-full h-full object-cover" />
                          <div className="absolute bottom-2 left-2 bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded">
                            Before
                          </div>
                        </div>
                        <div className="relative aspect-[3/4]">
                          <img src={item.after} alt={`After ${item.title}`} className="w-full h-full object-cover" />
                          <div className="absolute bottom-2 right-2 bg-teal-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded">
                            After
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg" aria-hidden="true">
                        <ArrowRight className="w-5 h-5 text-teal-600" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={`${item.title} - ${item.description}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1 text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 bg-white" aria-labelledby="faq-heading">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-700">
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

      {/* Referral Program Section */}
      <section className="py-12 sm:py-20 px-4 bg-white" aria-labelledby="referral-heading">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-50">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h2 id="referral-heading" className="text-3xl font-bold mb-4 text-slate-900">Love Our Service? Share the Love!</h2>
              <p className="text-slate-800 mb-6 max-w-2xl mx-auto">
                Refer a friend or family member to Fix This Felix and you'll both receive <span className="font-bold text-teal-700">$25 off</span> your next service. It's our way of saying thank you for spreading the word!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setReferralOpen(true)}
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
                  aria-label="Open referral form to refer a friend"
                >
                  Refer a Friend
                </Button>
                <Button
                  onClick={() => setLearnMoreOpen(true)}
                  variant="outline"
                  size="lg"
                  className="border-teal-600 text-teal-700 hover:bg-teal-50 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
                  aria-label="Learn more about the referral program"
                >
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
      <section className="py-12 sm:py-20 px-4 bg-white" id="contact" aria-labelledby="contact-heading">
        <div className="container mx-auto max-w-6xl">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-teal-100">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center" aria-hidden="true">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:719-229-2564" className="text-slate-600 hover:text-teal-600" aria-label="Call 719-229-2564">719-229-2564</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center" aria-hidden="true">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:letfelixfixit@gmail.com" className="text-slate-600 hover:text-teal-600 break-all" aria-label="Email letfelixfixit@gmail.com">letfelixfixit@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center" aria-hidden="true">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Service Area</p>
                        <p className="text-slate-600">Greater Metro Area</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center" aria-hidden="true">
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

      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900" role="contentinfo">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <img src={logoSvg} alt="Fix This Felix - Professional Handyman Services" className="h-10" />
            <p className="text-slate-300 text-sm">&copy; 2026 Fix This Felix. All rights reserved.</p>
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
      <ReferralModal open={referralOpen} onOpenChange={setReferralOpen} />
      <LearnMoreModal open={learnMoreOpen} onOpenChange={setLearnMoreOpen} />
      <ProjectGalleryModal
        open={galleryOpen}
        onOpenChange={setGalleryOpen}
        project={selectedProject}
      />
    </div>
  );
}