
import { useState, useEffect } from "react";
import { ArrowRight, Play, Star, Users, Zap, Palette, Code, Sparkles, ChevronDown, Menu, X, Camera, Layers, Brush, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const services = [
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Digital Art",
      description: "Creating stunning digital illustrations, concept art, and visual masterpieces that capture imagination.",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "UX/UI Design",
      description: "Designing user-centered interfaces that are both beautiful and functional for digital products.",
      color: "from-mint-500 to-mint-600"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Professional photography services including product, portrait, and creative conceptual shoots.",
      color: "from-flame-500 to-flame-600"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Comprehensive brand design including logos, color systems, and visual identity guidelines.",
      color: "from-violet-400 to-mint-500"
    }
  ];

  const portfolio = [
    {
      title: "Neon Dreams",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      description: "Cyberpunk-inspired digital art series"
    },
    {
      title: "EcoApp Interface",
      category: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      description: "Sustainable living mobile app design"
    },
    {
      title: "Urban Portraits",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop",
      description: "Street photography capturing city life"
    },
    {
      title: "Wavelength Branding",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      description: "Music streaming platform visual identity"
    },
    {
      title: "Abstract Fusion",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
      description: "Experimental digital composition series"
    },
    {
      title: "FinTech Dashboard",
      category: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "Financial management interface design"
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Created" },
    { number: "80+", label: "Happy Clients" },
    { number: "4+", label: "Years Creating" },
    { number: "15+", label: "Awards Won" }
  ];

  const team = [
    {
      name: "Maya Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c83c?w=150&h=150&fit=crop",
      expertise: "Digital Art & Creative Strategy"
    },
    {
      name: "Alex Rivera",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      expertise: "User Experience & Interface Design"
    },
    {
      name: "Jordan Park",
      role: "Visual Artist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      expertise: "Illustration & Brand Design"
    },
    {
      name: "Sam Torres",
      role: "Photographer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      expertise: "Commercial & Creative Photography"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-mint-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-violet-100 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-mint-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-violet-900">VibeStudio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-violet-700 hover:text-mint-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-violet-700 hover:text-mint-600 transition-colors font-medium">Services</a>
              <a href="#portfolio" className="text-violet-700 hover:text-mint-600 transition-colors font-medium">Portfolio</a>
              <a href="#team" className="text-violet-700 hover:text-mint-600 transition-colors font-medium">Team</a>
              <Button className="bg-flame-500 hover:bg-flame-600 text-white font-semibold">
                Start Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-violet-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-violet-100 bg-white/95 backdrop-blur-md">
              <div className="px-4 py-6 space-y-4">
                <a href="#home" className="block text-violet-700 hover:text-mint-600 transition-colors font-medium">Home</a>
                <a href="#services" className="block text-violet-700 hover:text-mint-600 transition-colors font-medium">Services</a>
                <a href="#portfolio" className="block text-violet-700 hover:text-mint-600 transition-colors font-medium">Portfolio</a>
                <a href="#team" className="block text-violet-700 hover:text-mint-600 transition-colors font-medium">Team</a>
                <Button className="w-full bg-flame-500 hover:bg-flame-600 text-white font-semibold">
                  Start Project
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" data-section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" style={{ minHeight: '100vh' }}>
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-violet-900 mb-6 leading-tight">
              Where Creativity
              <span className="text-transparent bg-gradient-to-r from-mint-600 to-flame-600 bg-clip-text">
                {" "}Meets Innovation
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-violet-600 mb-8 max-w-2xl mx-auto">
              We're a collective of digital artists, designers, and creative visionaries crafting 
              extraordinary visual experiences that inspire and captivate audiences worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 font-semibold">
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-mint-300 text-mint-700 hover:bg-mint-50 px-8 py-3 font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Watch Showreel
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-violet-900 mb-2">{stat.number}</div>
                <div className="text-violet-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-violet-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section - Maintains LG breakpoint card layout */}
      <section id="services" data-section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-900 mb-4">
              Creative Services
            </h2>
            <p className="text-lg text-violet-600 max-w-2xl mx-auto">
              From digital art to brand identity, we offer comprehensive creative solutions 
              tailored for the modern digital landscape.
            </p>
          </div>

          {/* LG Breakpoint Layout - Maintaining exact spacing and card sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-violet-50/30">
                <CardContent className="p-6 lg:p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-violet-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-violet-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" data-section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-mint-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-900 mb-4">
              Featured Portfolio
            </h2>
            <p className="text-lg text-violet-600 max-w-2xl mx-auto">
              Explore our latest creative projects and see how we transform ideas into 
              stunning visual experiences across multiple disciplines.
            </p>
          </div>

          {/* Responsive Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-mint-500/20 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-violet-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-flame-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-violet-900 mb-2">{project.title}</h3>
                  <p className="text-violet-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" data-section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-900 mb-4">
              Creative Team
            </h2>
            <p className="text-lg text-violet-600 max-w-2xl mx-auto">
              Meet the passionate artists and designers who bring creative visions to life 
              with expertise, innovation, and artistic flair.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-violet-900 mb-1">{member.name}</h3>
                  <div className="text-mint-600 font-medium mb-2">{member.role}</div>
                  <p className="text-sm text-violet-600">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-900 to-violet-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-lg text-violet-200 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your creative vision to life with innovative design, 
            artistic excellence, and digital mastery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-flame-500 hover:bg-flame-600 text-white px-8 py-3 font-semibold">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-900 px-8 py-3 font-semibold">
              View All Work
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-mint-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold">VibeStudio</span>
              </div>
              <p className="text-violet-300">
                Crafting digital experiences that inspire creativity and engage audiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-violet-300">
                <li><a href="#" className="hover:text-mint-400 transition-colors">Digital Art</a></li>
                <li><a href="#" className="hover:text-mint-400 transition-colors">UX/UI Design</a></li>
                <li><a href="#" className="hover:text-mint-400 transition-colors">Photography</a></li>
                <li><a href="#" className="hover:text-mint-400 transition-colors">Brand Identity</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Studio</h4>
              <ul className="space-y-2 text-violet-300">
                <li><a href="#" className="hover:text-mint-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-mint-400 transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-mint-400 transition-colors">Process</a></li>
                <li><a href="#" className="hover:text-mint-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-violet-300">
                <li><a href="#" className="hover:text-mint-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-mint-400 transition-colors">Behance</a></li>
                <li><a href="#" className="hover:text-mint-400 transition-colors">Dribbble</a></li>
                <li><a href="#" className="hover:text-mint-400 transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-violet-800 mt-12 pt-8 text-center text-violet-400">
            <p>&copy; 2024 VibeStudio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
