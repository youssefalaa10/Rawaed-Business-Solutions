import React, { useEffect } from 'react';
import { Building2, TrendingUp, DollarSign, FileText, Globe, Users, ArrowLeft, CheckCircle, Star, Zap, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
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

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      icon: <Building2 className="w-12 h-12" />,
      title: 'تأسيس الشركات',
      description: 'خدمات شاملة لتأسيس وتسجيل الشركات في المملكة العربية السعودية',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'تأسيس جميع أنواع الشركات (ذات مسؤولية محدودة، مساهمة، تضامن)',
        'الحصول على جميع التراخيص والتصاريح المطلوبة',
        'فتح الحسابات المصرفية للشركات',
        'استخراج السجل التجاري والرقم الضريبي',
        'خدمات ما بعد التأسيس والدعم المستمر'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-900/20 to-cyan-900/20'
    },
    {
      id: 2,
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'التسويق الاستراتيجي',
      description: 'استراتيجيات تسويقية قوية مصممة حسب احتياجات كل عميل',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'بناء هوية تجارية متوافقة ثقافياً مع السوق المحلي',
        'تطوير استراتيجيات اختراق السوق المخصصة لقطاعك',
        'تصميم حملات تسويقية شاملة عبر القنوات الرقمية والتقليدية',
        'توفير معلومات استخباراتية عن السوق وتحليل المنافسين',
        'إنشاء شبكة علاقات تجارية محلية وشراكات قيمة'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-900/20 to-pink-900/20'
    },
    {
      id: 3,
      icon: <DollarSign className="w-12 h-12" />,
      title: 'الاستشارات المالية',
      description: 'دعم شامل لتحسين الأداء المالي وتقييم الأعمال',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'تحليل وتحسين البيانات المالية بالتفصيل',
        'وضع أهداف استراتيجية متوافقة مع واقع السوق',
        'توقعات القيمة المستقبلية ونمذجة النمو',
        'خدمات تقييم الشركات للاستثمار أو التوسع',
        'تقييم المخاطر المالية واستراتيجيات التخفيف منها',
        'تخطيط الميزانية وإدارة التدفق النقدي'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-900/20 to-emerald-900/20'
    },
    {
      id: 4,
      icon: <FileText className="w-12 h-12" />,
      title: 'دراسات الجدوى الشاملة',
      description: 'دراسات معمقة توفر الوضوح اللازم لاتخاذ قرارات واثقة',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'تحليل معمق للسوق وتقييم الفرص',
        'تقييم المشهد التنافسي',
        'التوقعات المالية وتحليل نقطة التعادل',
        'تحديد المخاطر واستراتيجيات التخفيف منها',
        'تخطيط متطلبات الموارد',
        'اعتبارات اللوائح والامتثال'
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-900/20 to-red-900/20'
    },
    {
      id: 5,
      icon: <Globe className="w-12 h-12" />,
      title: 'الهبوط الناعم للشركات الدولية',
      description: 'مساعدة المستثمرين الدوليين على تأسيس وجودهم في المملكة',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'استراتيجيات دخول السوق المخصصة',
        'التوجيه في اللوائح التنظيمية وإدارة الامتثال',
        'التوجيه في الثقافة والممارسات التجارية المحلية',
        'تسهيل الشراكات المحلية',
        'إعداد المكاتب والدعم التشغيلي',
        'توظيف الكوادر وتوجيه الامتثال للموارد البشرية'
      ],
      color: 'from-teal-500 to-blue-500',
      bgColor: 'from-teal-900/20 to-blue-900/20'
    },
    {
      id: 6,
      icon: <Users className="w-12 h-12" />,
      title: 'الربط بين المستثمرين والمشاريع',
      description: 'نربط بين الأفكار التجارية الواعدة وشركاء الاستثمار المناسبين',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'الوصول إلى شبكة واسعة من المستثمرين الملائكيين وشركات رأس المال الاستثماري',
        'إعداد وتحسين مقترحات الاستثمار',
        'دعم العناية الواجبة',
        'المساعدة في المفاوضات',
        'إدارة العلاقات ما بعد الاستثمار'
      ],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-900/20 to-purple-900/20'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'الاستشارة الأولية',
      description: 'نتفهم احتياجاتك وأهدافك التجارية',
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'وضع الخطة',
      description: 'نصمم استراتيجية مخصصة لحالتك',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'التنفيذ',
      description: 'ننفذ الخطة بدقة واحترافية عالية',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '04',
      title: 'المتابعة والدعم',
      description: 'نقدم الدعم المستمر لضمان النجاح',
      icon: <Award className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080" 
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/80 to-purple-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
                <Star className="w-4 h-4 ml-2" />
                خدمات متكاملة ومتخصصة
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                خدماتنا
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  المتميزة
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                نقدم مجموعة شاملة من الخدمات المتخصصة لتمكين شركتك من تحقيق أهدافها 
                ونموها في السوق السعودي المزدهر
              </p>
              <Link 
                to="/contact" 
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 space-x-2 space-x-reverse"
              >
                <span>احجز استشارتك المجانية</span>
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            
            <div className="animate-on-scroll scale-in">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional Services"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
                
                {/* Floating Stats */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">6</div>
                    <div className="text-gray-300 text-sm">خدمات متخصصة</div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm font-medium">نجاح مضمون</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800 relative">
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/contact-us-communication-support-service-assistance-concept_53876-128103.jpg?semt=ais_hybrid&w=740')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Service Image */}
                <div 
                  className={`animate-on-scroll scale-in ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-3xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                      
                      {/* Service Icon Overlay */}
                      <div className="absolute top-6 right-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                          <div className="text-white">{service.icon}</div>
                        </div>
                      </div>
                      
                      {/* Service Number */}
                      <div className="absolute bottom-6 left-6">
                        <div className="text-6xl font-bold text-white/20">
                          {service.id.toString().padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${service.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div 
                  className={`animate-on-scroll slide-up ${
                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                  style={{animationDelay: `${index * 0.2 + 0.1}s`}}
                >
                  <div className={`bg-gradient-to-br ${service.bgColor} backdrop-blur-sm rounded-3xl p-8 border border-white/10`}>
                    <div className="mb-6">
                      <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-gray-300 text-sm font-medium mb-4">
                        <span className="ml-2">خدمة رقم {service.id}</span>
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{service.description}</p>
                    </div>
                    
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3 space-x-reverse group">
                          <div className={`w-6 h-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/contact-us-communication-support-service-assistance-concept_53876-128103.jpg?semt=ais_hybrid&w=740')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm font-medium mb-4 border border-purple-500/20">
              <Zap className="w-4 h-4 ml-2" />
              منهجية العمل
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              كيف <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">نعمل</span> معك؟
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              نتبع منهجية واضحة ومنظمة لضمان تحقيق أفضل النتائج وتجاوز توقعاتك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="group animate-on-scroll scale-in relative"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-transparent z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className={`w-32 h-32 mx-auto bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                      <div className="text-white">{step.icon}</div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <span className="text-white text-sm font-bold">{step.number}</span>
                    </div>
                    <div className={`absolute -inset-4 bg-gradient-to-r ${step.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080" 
            alt="Team Success"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/80 to-purple-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              هل تحتاج لخدماتنا
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                المتخصصة؟
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              تواصل معنا اليوم واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك التجارية 
              وتحويل رؤيتك إلى نجاح ملموس
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 space-x-reverse"
              >
                <span>تواصل معنا الآن</span>
                <ArrowLeft className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link 
                to="/about" 
                className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                تعرف علينا أكثر
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;