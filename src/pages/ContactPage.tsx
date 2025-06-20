import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, User, Building, Star, Zap, Award, Globe } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'البريد الإلكتروني',
      info: 'info@rawaed-hulol.com',
      description: 'تواصل معنا عبر البريد الإلكتروني',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-900/20 to-cyan-900/20'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'الهاتف',
      info: '+966 50 123 4567',
      description: 'اتصل بنا مباشرة',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-900/20 to-emerald-900/20'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'العنوان',
      info: 'الرياض، المملكة العربية السعودية',
      description: 'موقعنا الرئيسي',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-900/20 to-pink-900/20'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'ساعات العمل',
      info: 'الأحد - الخميس: 9:00 ص - 6:00 م',
      description: 'أوقات العمل الرسمية',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-900/20 to-red-900/20'
    }
  ];

  const services = [
    'بناء شراكة مع رواد الأعمال',
    'التسويق الاستراتيجي', 
    'الاستشارات المالية',
    'دراسات الجدوى',
    'الهبوط الناعم للشركات الدولية',
    'الربط بين المستثمرين والمشاريع',
    'أخرى'
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'استشارة مجانية',
      description: 'احصل على استشارة مجانية لتحديد احتياجاتك',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'حلول مخصصة',
      description: 'نصمم حلولاً تناسب احتياجاتك الخاصة',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'رد سريع',
      description: 'نرد على استفساراتك خلال 24 ساعة',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'خبرة متخصصة',
      description: 'فريق من الخبراء في جميع المجالات',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080" 
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/80 to-purple-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
                <MessageSquare className="w-4 h-4 ml-2" />
                نحن هنا لمساعدتك
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                تواصل
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  معنا
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                هل أنت مستعد لتوسيع أعمالك في المملكة العربية السعودية؟ 
                اتصل بفريق الخبراء لدينا اليوم
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+966501234567"
                  className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-green-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Phone className="w-5 h-5" />
                  <span>اتصل الآن</span>
                </a>
                <a 
                  href="mailto:info@rawaed-hulol.com"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Mail className="w-5 h-5" />
                  <span>راسلنا</span>
                </a>
              </div>
            </div>
            
            <div className="animate-on-scroll scale-in">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Contact Team"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
                
                {/* Floating Contact Info */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">متاحون دائماً</p>
                      <p className="text-green-300 text-xs">24/7 دعم</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">رضا العملاء</p>
                      <p className="text-blue-300 text-xs">98% معدل الرضا</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-slate-800 relative">
        <div className="absolute inset-0 bg-[url('data:image/jpeg;base64,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')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group animate-on-scroll scale-in hover:scale-105 transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${info.bgColor} backdrop-blur-sm border border-white/10 p-6 text-center h-full`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <div className="text-white">{info.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">{info.info}</p>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {info.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Benefits */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/contact-us-communication-support-service-assistance-concept_53876-128103.jpg?semt=ais_hybrid&w=740')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll slide-up">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center ml-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">أرسل لنا رسالة</h2>
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">تم إرسال رسالتك بنجاح!</h3>
                    <p className="text-gray-400">سنتواصل معك قريباً</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          الاسم الكامل *
                        </label>
                        <div className="relative">
                          <User className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pr-10 pl-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                            placeholder="أدخل اسمك الكامل"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          البريد الإلكتروني *
                        </label>
                        <div className="relative">
                          <Mail className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pr-10 pl-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                            placeholder="أدخل بريدك الإلكتروني"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          اسم الشركة
                        </label>
                        <div className="relative">
                          <Building className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pr-10 pl-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                            placeholder="أدخل اسم شركتك"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          رقم الهاتف
                        </label>
                        <div className="relative">
                          <Phone className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pr-10 pl-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                            placeholder="أدخل رقم هاتفك"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        الخدمة المطلوبة
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      >
                        <option value="">اختر الخدمة</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        الرسالة *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-all duration-300"
                        placeholder="اكتب رسالتك هنا..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      <span>إرسال الرسالة</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Benefits & Additional Info */}
            <div className="animate-on-scroll slide-up space-y-8" style={{animationDelay: '0.2s'}}>
              {/* Benefits */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">لماذا تتواصل معنا؟</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="group flex items-start space-x-4 space-x-reverse">
                      <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1 group-hover:text-blue-300 transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">هل تحتاج لمساعدة فورية؟</h3>
                <p className="text-gray-300 mb-6">
                  تواصل معنا مباشرة عبر الهاتف للحصول على المساعدة الفورية
                </p>
                <div className="flex flex-col gap-4">
                  <a 
                    href="tel:+966501234567"
                    className="group px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-green-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <Phone className="w-5 h-5" />
                    <span>اتصل الآن</span>
                  </a>
                  <a 
                    href="mailto:info@rawaed-hulol.com"
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <Mail className="w-5 h-5" />
                    <span>راسلنا</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">تابعنا على وسائل التواصل</h3>
                <p className="text-gray-300 mb-6">
                  ابق على اطلاع بآخر أخبارنا ومقالاتنا المفيدة
                </p>
                <div className="flex space-x-4 space-x-reverse">
                  <a href="#" className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <span className="text-white text-sm font-bold">ف</span>
                  </a>
                  <a href="#" className="group w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <span className="text-white text-sm font-bold">ت</span>
                  </a>
                  <a href="#" className="group w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <span className="text-white text-sm font-bold">لـ</span>
                  </a>
                  <a href="#" className="group w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <span className="text-white text-sm font-bold">إ</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm font-medium mb-4 border border-purple-500/20">
              <Globe className="w-4 h-4 ml-2" />
              موقعنا
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">زورونا في مكتبنا</h2>
            <p className="text-xl text-gray-300">يمكنك زيارتنا في مكتبنا الرئيسي في الرياض</p>
          </div>
          
          <div className="animate-on-scroll scale-in">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">الرياض، المملكة العربية السعودية</h3>
                  <p className="text-gray-400 mb-6">يمكنك تحديد موعد لزيارة مكتبنا</p>
                  <a 
                    href="tel:+966501234567"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 space-x-2 space-x-reverse"
                  >
                    <Phone className="w-5 h-5" />
                    <span>احجز موعد</span>
                  </a>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-6 left-6 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;