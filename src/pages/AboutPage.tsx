import React, { useEffect } from 'react';
import { Eye, Target, Heart, Shield, Lightbulb, Users } from 'lucide-react';

const AboutPage = () => {
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

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'الشفافية',
      description: 'نحافظ على التواصل والعمليات الواضحة والصادقة في جميع تعاملاتنا'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'النزاهة',
      description: 'نلتزم بأعلى المعايير الأخلاقية في ممارساتنا وعلاقاتنا التجارية'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'الكفاءة',
      description: 'نعمل على تحقيق أقصى النتائج مع تقليل الإجراءات غير الضرورية'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'التميز',
      description: 'نقدم باستمرار خدمة ونتائج متفوقة تتجاوز التوقعات'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'الشراكة',
      description: 'ننظر إلى علاقتنا مع العملاء كتعاون حقيقي نحو النجاح المشترك'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">نبذة عنا</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              نحن شركة مهتمة بنمو وتطوير الأعمال، لدينا رؤية مستقبلية متخصصة في تمكين الشركات 
              في كل مرحلة من مراحل نموها وتطويرها
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">من نحن</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  نحن شركة مهتمة بنمو وتطوير الأعمال لدينا رؤية مستقبلية متخصصة في تمكين الشركات في كل مرحلة 
                  من مراحل نموها وتطويرها في رحلتها. مع تركيز استراتيجي على دراسة المشروع وتطويره وتوفير الحلول 
                  التقنية والتمويلية المناسبة لاحتياجته والمساعدة في تأسيس الشركات والتراخيص الحكومية اللازمة.
                </p>
                <p>
                  نقدم التوجيه للشركات الناشئة والمؤسسات متوسطة الحجم والشركات الكبرى لتحقيق أهدافها الطموحة 
                  في السوق السعودي. يجمع نهجنا بين بناء استراتيجيات دقيقة، وتنفيذ خطط فعالة، وتكتيكات تحليلية 
                  قائمة على البيانات لضمان نجاح أعمالك في الاقتصاد المزدهر للمملكة.
                </p>
                <p>
                  كمتخصصين في نمو وتطوير الأعمال، نتفهم التحديات الفريدة التي يواجهها المستثمرين ورواد الأعمال 
                  عند البدء بمشروع جديد أو تطوير مشروع قائم. تكمن خبرتنا في تحويل العمليات التنظيمية المعقدة إلى 
                  مسارات مبسطة، مما يتيح لك التركيز على ما يهم أكثر.
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll scale-in">
              <div className="bg-gradient-to-br from-blue-900/20 to-slate-700/50 p-8 rounded-2xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">500+</div>
                    <div className="text-gray-400">عميل راضٍ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">100+</div>
                    <div className="text-gray-400">مشروع مكتمل</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">10+</div>
                    <div className="text-gray-400">سنوات خبرة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                    <div className="text-gray-400">دعم متواصل</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="animate-on-scroll slide-up">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl h-full">
                <div className="flex items-center mb-6">
                  <Target className="w-10 h-10 text-blue-400 ml-4" />
                  <h3 className="text-2xl font-bold text-white">رسالتنا</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  تسهيل دخول السوق ونمو الأعمال في المملكة العربية السعودية بأقصى قدر من الكفاءة وبأقل جهد ممكن، 
                  مع ضمان النجاح والازدهار طويل الأمد لمؤسسات عملائنا من خلال التوجيه الخبير والمعرفة المحلية 
                  والدعم الاستراتيجي.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="animate-on-scroll slide-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl h-full">
                <div className="flex items-center mb-6">
                  <Eye className="w-10 h-10 text-blue-400 ml-4" />
                  <h3 className="text-2xl font-bold text-white">رؤيتنا</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  تتوافق رؤيتنا تماماً مع رؤية المملكة 2030 - لتسريع وتسهيل وتمكين الشركات من تحقيق كامل إمكاناتها 
                  في اقتصاد المملكة الديناميكي. نسعى لأن نكون الميسر الرئيسي لنجاح الأعمال في المملكة العربية السعودية، 
                  مساهمين في التحول الاقتصادي للوطن من خلال تمكين الشركات من الازدهار والابتكار.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">قيمنا</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتحدد هويتنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-blue-900/20 to-slate-700/50 p-6 rounded-xl card-hover animate-on-scroll scale-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="service-icon mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Excellence */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">فريق متميز من الخبراء</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              يضم فريقنا نخبة من الخبراء والمستشارين المتخصصين في مختلف مجالات الأعمال والتمويل والتسويق، 
              مما يضمن حصولك على أفضل الخدمات والحلول المتطورة
            </p>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl inline-block">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">متخصصون</div>
                  <div className="text-gray-400">في جميع المجالات</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">معتمدون</div>
                  <div className="text-gray-400">من الجهات الرسمية</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">مؤهلون</div>
                  <div className="text-gray-400">بأعلى الشهادات</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;