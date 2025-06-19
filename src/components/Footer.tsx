import React from 'react';
import { Star, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">روائد الحلول</h3>
                <p className="text-sm text-blue-200">القيادة في الحلول</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              نحن شركة متخصصة في تمكين الشركات في كل مرحلة من مراحل نموها وتطويرها، 
              مع تركيز استراتيجي على تطوير الأعمال والحلول التقنية والمالية.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">الرئيسية</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">نبذة عنا</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">خدماتنا</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">خدماتنا</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">تأسيس الشركات</span></li>
              <li><span className="text-gray-400">التسويق الاستراتيجي</span></li>
              <li><span className="text-gray-400">الاستشارات المالية</span></li>
              <li><span className="text-gray-400">دراسات الجدوى</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@rawaed-hulol.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 روائد الحلول. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;