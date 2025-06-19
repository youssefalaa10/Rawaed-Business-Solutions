import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Building2, TrendingUp, Users, Lightbulb, Target, Award, Play, CheckCircle, Star, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // Parallax effect
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    // Canvas animation
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const shapes = [];
      const numShapes = 15;

      // Create floating shapes
      for (let i = 0; i < numShapes; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 60 + 20,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          type: Math.floor(Math.random() * 4), // 0: circle, 1: triangle, 2: square, 3: hexagon
          opacity: Math.random() * 0.3 + 0.1
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        shapes.forEach(shape => {
          ctx.save();
          ctx.globalAlpha = shape.opacity;
          ctx.translate(shape.x, shape.y);
          ctx.rotate(shape.rotation);

          // Create gradient
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size);
          gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
          gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.3)');
          gradient.addColorStop(1, 'rgba(6, 182, 212, 0.2)');
          ctx.fillStyle = gradient;
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 2;

          // Draw different shapes
          ctx.beginPath();
          switch (shape.type) {
            case 0: // Circle
              ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
              break;
            case 1: // Triangle
              ctx.moveTo(0, -shape.size / 2);
              ctx.lineTo(-shape.size / 2, shape.size / 2);
              ctx.lineTo(shape.size / 2, shape.size / 2);
              ctx.closePath();
              break;
            case 2: // Square
              ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
              break;
            case 3: // Hexagon
              for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI) / 3;
                const x = Math.cos(angle) * shape.size / 2;
                const y = Math.sin(angle) * shape.size / 2;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              }
              ctx.closePath();
              break;
          }

          ctx.fill();
          ctx.stroke();
          ctx.restore();

          // Update position
          shape.x += shape.speedX;
          shape.y += shape.speedY;
          shape.rotation += shape.rotationSpeed;

          // Wrap around screen
          if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
          if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
          if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
          if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        });

        requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        observer.disconnect();
      };
    }
  }, []);

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'تأسيس الشركات',
      description: 'نساعدك في تأسيس شركتك وإنهاء جميع الإجراءات الحكومية بسهولة ويسر',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'التسويق الاستراتيجي',
      description: 'استراتيجيات تسويقية مبتكرة لتحقيق أهدافك ونمو أعمالك',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'الاستشارات المالية',
      description: 'استشارات مالية متخصصة لتحسين أداء شركتك وتحقيق الربحية',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'عميل راضٍ', icon: <Users className="w-6 h-6" /> },
    { number: '100+', label: 'مشروع مكتمل', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '10+', label: 'سنوات خبرة', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'دعم متواصل', icon: <Zap className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'الابتكار والإبداع',
      description: 'نقدم حلولاً مبتكرة تواكب أحدث التطورات في عالم الأعمال',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'التركيز على النتائج',
      description: 'نركز على تحقيق أهدافك بكفاءة عالية وضمان النجاح',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'رؤية عالمية',
      description: 'نجمع بين الخبرة المحلية والمعايير العالمية',
      gradient: 'from-blue-400 to-purple-500'
    }
  ];

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section with Animated Canvas Background */}
      <section ref={heroRef} className="relative min-h-screen flex items-center">
        {/* Animated Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        />
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080" 
            alt="Business Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-blue-900/80"></div>
        </div>
        
        {/* Floating Geometric Elements */}
        <div ref={parallaxRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
          {/* Large floating shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 transform rotate-45 blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 transform rotate-12 blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
          
          {/* Geometric wireframe shapes */}
          <div className="absolute top-32 right-1/4 w-20 h-20 border-2 border-blue-400/30 transform rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-12 h-12 border-2 border-cyan-400/30 transform rotate-12 animate-bounce" style={{animationDuration: '3s'}}></div>
          
          {/* Hexagonal patterns */}
          <div className="absolute top-40 left-1/2 w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 transform rotate-45 animate-pulse" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
          <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 transform rotate-12 animate-pulse" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 4 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
                <Star className="w-4 h-4 ml-2" />
                الرائدون في الحلول التجارية
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  روائد الحلول
                </span>
                <br />
                <span className="text-2xl md:text-3xl text-blue-300 font-normal">القيادة في الحلول</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                نحن شركة متخصصة في تمكين الشركات في كل مرحلة من مراحل نموها وتطويرها، 
                مع تركيز استراتيجي على تطوير الأعمال والحلول التقنية والمالية
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2 space-x-reverse">
                    <span>اكتشف خدماتنا</span>
                    <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
                <Link 
                  to="/contact" 
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Play className="w-5 h-5" />
                  <span>تواصل معنا</span>
                </Link>
              </div>
            </div>
            
            {/* Hero Image with Geometric Overlay */}
            <div className="animate-on-scroll scale-in relative">
              <div className="relative">
                {/* Geometric frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl transform rotate-1"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl transform -rotate-1"></div>
                
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Business Team"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl z-20"></div>
                
                {/* Floating geometric elements around image */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg transform rotate-45 animate-pulse z-30"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce z-30"></div>
                <div className="absolute top-1/2 -right-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-teal-400 transform rotate-12 animate-pulse z-30" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
                
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">نجاح مضمون</p>
                        <p className="text-gray-300 text-sm">مع أكثر من 500 عميل راضٍ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Geometric Design */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
              linear-gradient(45deg, transparent 40%, rgba(6, 182, 212, 0.1) 50%, transparent 60%)
            `
          }}></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400/20 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-purple-400/20 transform rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 transform -translate-x-1/2 -translate-y-1/2 rotate-12 animate-bounce" style={{animationDuration: '4s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center animate-on-scroll scale-in hover:scale-105 transition-all duration-300 relative" 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Geometric background for each stat */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
                    <div className="relative text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Visual Elements */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        {/* Enhanced background with geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
          
          {/* Geometric grid overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-4 border border-blue-500/20">
              <Zap className="w-4 h-4 ml-2" />
              خدماتنا المتميزة
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              حلول <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">متكاملة</span> لنجاحك
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              نقدم مجموعة شاملة من الخدمات المصممة لتمكين شركتك من تحقيق أهدافها
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative animate-on-scroll slide-up hover:scale-105 transition-all duration-500"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Enhanced geometric frame */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600/50 group-hover:border-blue-500/50 transition-all duration-300">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    
                    {/* Geometric overlay on image */}
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <div className="relative text-white">{service.icon}</div>
                      </div>
                    </div>
                    
                    {/* Floating geometric elements */}
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/20 transform rotate-45 animate-bounce" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Decorative corner element */}
                    <div className="absolute bottom-2 right-2 w-8 h-8 border-2 border-blue-400/20 rounded-full transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
                  </div>
                  
                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <Link 
              to="/services" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 space-x-2 space-x-reverse relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
              <span className="relative">عرض جميع الخدمات</span>
              <ArrowLeft className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Diagonal Layout */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
        {/* Enhanced geometric background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.05) 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(147, 51, 234, 0.05) 50%, transparent 60%)
            `
          }}></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-blue-400/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-400/20 transform rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-lg transform rotate-12 animate-bounce" style={{animationDuration: '3s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-on-scroll slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
                <Award className="w-4 h-4 ml-2" />
                لماذا نحن مختلفون؟
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                نحن لا نقدم خدمات
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  نبني شراكات
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                نتميز بخبرتنا العميقة ورؤيتنا المستقبلية لتطوير أعمالك في السوق السعودي المزدهر
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="group flex items-start space-x-4 space-x-reverse animate-on-scroll scale-in relative"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    {/* Enhanced geometric background for each feature */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
                      <div className="relative text-white">{feature.icon}</div>
                    </div>
                    <div className="flex-1 relative">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Image with Enhanced Geometric Frame */}
            <div className="animate-on-scroll scale-in relative">
              <div className="relative">
                {/* Multiple geometric frames */}
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl transform rotate-2"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl transform -rotate-1"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl transform rotate-1"></div>
                
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team Collaboration"
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl z-20"></div>
                
                {/* Enhanced floating cards with geometric elements */}
                <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-pulse z-30">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/20 transform scale-0 animate-pulse transition-transform duration-300"></div>
                      <CheckCircle className="w-5 h-5 text-white relative" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">معدل النجاح</p>
                      <p className="text-green-300 text-lg font-bold">98%</p>
                    </div>
                  </div>
                  {/* Decorative corner */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-pulse z-30" style={{animationDelay: '1s'}}>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/20 transform scale-0 animate-pulse transition-transform duration-300"></div>
                      <Star className="w-5 h-5 text-white relative" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">تقييم العملاء</p>
                      <p className="text-blue-300 text-lg font-bold">4.9/5</p>
                    </div>
                  </div>
                  {/* Decorative corner */}
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 transform rotate-45"></div>
                </div>
                
                {/* Additional floating geometric elements */}
                <div className="absolute top-1/4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-bounce z-30" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-1/4 -right-4 w-6 h-6 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 transform rotate-45 animate-pulse z-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Split Design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080" 
            alt="Success Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/80 to-purple-900/90"></div>
        </div>
        
        {/* Enhanced geometric overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-400/30 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-orange-400/30 transform rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-lg transform rotate-12 animate-bounce" style={{animationDuration: '4s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                هل أنت مستعد لبدء
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  رحلة النجاح؟
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                تواصل معنا اليوم واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك التجارية وتحويل رؤيتك إلى واقع ملموس
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="group px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                  <span className="relative">ابدأ الآن</span>
                  <ArrowLeft className="relative w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link 
                  to="/about" 
                  className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                >
                  تعرف علينا أكثر
                </Link>
              </div>
            </div>
            
            <div className="animate-on-scroll scale-in">
              <div className="relative">
                {/* Enhanced geometric frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl transform rotate-2"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl transform -rotate-1"></div>
                
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/20 transform scale-0 animate-pulse transition-transform duration-300"></div>
                      <CheckCircle className="w-10 h-10 text-white relative" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">استشارة مجانية</h3>
                    <p className="text-gray-300">احجز استشارتك المجانية الآن</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 space-x-reverse text-gray-300 group">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="group-hover:text-white transition-colors duration-300">تحليل مجاني لوضعك الحالي</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse text-gray-300 group">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="group-hover:text-white transition-colors duration-300">خطة عمل مخصصة</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse text-gray-300 group">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="group-hover:text-white transition-colors duration-300">توجيه من خبراء متخصصين</span>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-green-400/20 to-emerald-500/20 transform rotate-45 animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;