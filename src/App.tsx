import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, ChevronRight, ShieldCheck, Database, Globe, Users, 
  Lock, LayoutDashboard, ArrowRight, CheckCircle2, Scale, HeartHandshake,
  BookOpen, FileText, Settings, Activity, Info, Map, BarChart3,
  Search, CreditCard, Share2, AlertTriangle, Zap, Cpu, Server, Network,
  Target, Lightbulb, TrendingUp, Landmark, Quote, Sparkles, Layers
} from 'lucide-react';
import { cn } from './lib/utils';

const NavItem = ({ icon: Icon, label, isActive, onClick }: any) => (
  <div 
    onClick={onClick}
    className={cn("nav-item", isActive ? "nav-item-active" : "nav-item-inactive")}
  >
    <Icon size={18} className={cn(isActive ? "text-white" : "text-slate-400")} />
    <span className="truncate">{label}</span>
  </div>
);

const SlideLayout = ({ children, title, subtitle, visual }: { children: React.ReactNode, title?: string, subtitle?: string, visual?: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }} 
    animate={{ opacity: 1, x: 0 }} 
    exit={{ opacity: 0, x: -20 }}
    className="h-full w-full flex flex-col lg:flex-row p-6 lg:p-10 gap-8"
  >
    <div className="flex-1 flex flex-col justify-start overflow-y-auto custom-scrollbar pr-4 py-2">
      {subtitle && <span className="section-label mb-2">{subtitle}</span>}
      {title && <h2 className="display-title text-3xl lg:text-5xl mb-4">{title}</h2>}
      <div className="space-y-4">
        {children}
      </div>
    </div>
    {visual && (
      <div className="hidden lg:flex items-center justify-center w-full lg:w-[450px] shrink-0">
        <div className="w-full">
          {visual}
        </div>
      </div>
    )}
  </motion.div>
);

const SlideCover = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="h-full flex flex-col items-center justify-center text-center p-12 relative overflow-hidden"
  >
    <div className="gradient-blob w-[500px] h-[500px] bg-blue-100 -top-48 -left-48" />
    <div className="gradient-blob w-[600px] h-[600px] bg-gold-100 -bottom-48 -right-48" />
    
    <div className="space-y-8 max-w-4xl relative z-10">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-2xl shadow-brand-blue/20">L</div>
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-blue">Strategic Presentation</span>
      </div>
      
      <h1 className="display-title text-6xl lg:text-7xl mb-4">
        Hệ sinh thái<br />
        <span className="text-brand-blue">Tri thức số</span> <span className="gold-accent">Quốc gia</span>
      </h1>
      
      <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
        Giải pháp Nền tảng Thư viện số - Hạt nhân liên thông thực thi Luật Thư viện 2019
      </p>
      
      <div className="pt-12 flex items-center justify-center gap-4">
        <div className="w-12 h-0.5 bg-brand-blue/30 rounded-full" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-navy-900">Báo cáo Lãnh đạo MOET • 2026</span>
        <div className="w-12 h-0.5 bg-brand-blue/30 rounded-full" />
      </div>
    </div>
  </motion.div>
);

const Slide1 = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="h-full w-full p-8 lg:p-20 overflow-y-auto custom-scrollbar"
  >
    <div className="max-w-6xl mx-auto w-full min-h-full flex flex-col justify-center py-12">
      <div className="space-y-16">
        <div className="space-y-4">
          <span className="section-label">01. Bối cảnh Chiến lược</span>
          <h2 className="display-title text-5xl lg:text-6xl">Động lực Chuyển đổi</h2>
          <p className="text-slate-500 text-lg max-w-2xl font-medium">
            Sự giao thoa giữa hành lang pháp lý, định hướng quốc gia và xu thế công nghệ toàn cầu tạo nên tính cấp thiết của dự án.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              t: "Pháp lý vững chắc", 
              d: "Luật Thư viện 2019 là nền tảng pháp lý cao nhất, quy định rõ vai trò hạt nhân của TVQG trong việc liên thông và dẫn dắt mạng lưới thư viện số.", 
              i: Scale, 
              c: "bg-blue-50 text-brand-blue" 
            },
            { 
              t: "Định hướng Quốc gia", 
              d: "Chương trình Chuyển đổi số Quốc gia xác định Tri thức số là tài sản chiến lược, là hạ tầng thiết yếu để phát triển kinh tế số và xã hội số.", 
              i: Zap, 
              c: "bg-gold-50 text-gold-600" 
            },
            { 
              t: "Kỷ nguyên AI", 
              d: "Sự bùng nổ của Trí tuệ nhân tạo đòi hỏi một hệ sinh thái tri thức số được chuẩn hóa, có khả năng kết nối và cung cấp dữ liệu sạch cho AI.", 
              i: Cpu, 
              c: "bg-emerald-50 text-emerald-600" 
            }
          ].map((x, i) => (
            <div key={i} className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 opacity-50" />
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10", x.c)}>
                <x.i size={32} />
              </div>
              <h4 className="font-black text-navy-900 text-xl mb-4 relative z-10">{x.t}</h4>
              <p className="text-slate-500 leading-relaxed text-sm relative z-10">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Slide2 = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="h-full w-full p-8 lg:p-20 overflow-y-auto custom-scrollbar"
  >
    <div className="max-w-6xl mx-auto w-full min-h-full flex flex-col justify-center py-12">
      <div className="space-y-16">
        <div className="space-y-4">
          <span className="section-label">02. Thực trạng & Thách thức</span>
          <h2 className="display-title text-5xl lg:text-6xl">Nút thắt Hệ thống</h2>
          <p className="text-slate-500 text-lg max-w-2xl font-medium">
            Hạ tầng tri thức số ngành giáo dục đang đối mặt với những rào cản mang tính hệ thống, làm chậm tiến trình chuyển đổi số toàn diện.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { 
              t: "Cát cứ & Phân mảnh", 
              d: "Phần lớn thư viện trường học hiện nay hoạt động biệt lập. Thiếu cơ chế liên thông khiến tài nguyên số bị đóng băng trong từng cơ sở, khó khăn trong việc chia sẻ dùng chung.", 
              i: Database, 
              c: "text-red-600 bg-red-50",
              s: "Thực trạng phổ biến"
            },
            { 
              t: "Lãng phí nguồn lực", 
              d: "Đầu tư dàn trải, thiếu tập trung dẫn đến việc mua sắm trùng lặp học liệu số giữa các đơn vị, gây áp lực lớn lên ngân sách đầu tư công hàng năm.", 
              i: BarChart3, 
              c: "text-orange-600 bg-orange-50",
              s: "Vấn đề cấp bách"
            },
            { 
              t: "Nguy cơ mất an toàn", 
              d: "Nhiều đơn vị chưa có hệ thống lưu trữ đạt chuẩn bảo tồn vĩnh viễn. Dữ liệu tri thức quý giá đối mặt với rủi ro hư hỏng hoặc mất mát do sự cố kỹ thuật.", 
              i: AlertTriangle, 
              c: "text-brand-blue bg-blue-50",
              s: "Rủi ro hệ thống"
            }
          ].map((x, i) => (
            <div key={i} className="flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="p-10 space-y-6 flex-1">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-2", x.c)}>
                  <x.i size={28} />
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-navy-900 text-xl">{x.t}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">{x.d}</p>
                </div>
              </div>
              <div className={cn("px-10 py-6 border-t border-slate-50 flex items-center justify-between", x.c.split(' ')[1])}>
                <span className={cn("text-xs font-black uppercase tracking-wider", x.c.split(' ')[0])}>{x.s}</span>
                <ArrowRight size={16} className="opacity-20 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Slide3 = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="h-full w-full p-8 lg:p-20 overflow-y-auto custom-scrollbar"
  >
    <div className="max-w-6xl mx-auto w-full min-h-full flex flex-col justify-center py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="section-label">03. Nhu cầu & Tầm nhìn</span>
            <h2 className="display-title text-5xl lg:text-6xl">Yêu cầu Chiến lược</h2>
            <p className="text-slate-500 text-lg font-medium">
              Để giải quyết các nút thắt hiện tại, ngành Giáo dục cần một cuộc cách mạng về hạ tầng và tư duy quản trị tri thức số.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { 
                t: "Hợp nhất Tài nguyên", 
                d: "Xây dựng kho học liệu số tập trung, chuẩn hóa dữ liệu theo tiêu chuẩn quốc tế (Dublin Core, MARC21) để bảo tồn vĩnh viễn.", 
                i: Layers, 
                c: "bg-blue-500" 
              },
              { 
                t: "Trục liên thông Tri thức", 
                d: "Thiết lập hạ tầng kết nối thời gian thực giữa Thư viện Quốc gia và mạng lưới thư viện các cấp, xóa bỏ rào cản địa lý.", 
                i: Globe, 
                c: "bg-gold-500" 
              },
              { 
                t: "Cá nhân hóa trải nghiệm", 
                d: "Ứng dụng AI để thấu hiểu nhu cầu người học, cung cấp đúng tri thức vào đúng thời điểm cho từng đối tượng cụ thể.", 
                i: Sparkles, 
                c: "bg-emerald-500" 
              }
            ].map((x, i) => (
              <div key={i} className="flex gap-6 group">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg transition-transform group-hover:scale-110", x.c)}>
                  <x.i size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-navy-900 text-lg">{x.t}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-brand-blue/5 rounded-[3rem] -rotate-3 scale-105" />
          <div className="relative bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl flex flex-col items-center text-center gap-10">
            <div className="w-40 h-40 rounded-full bg-brand-blue flex items-center justify-center shadow-2xl shadow-brand-blue/40 relative">
              <Target className="text-white" size={80} />
              <div className="absolute inset-0 rounded-full border-4 border-brand-blue/20 animate-ping" />
            </div>
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue">Mục tiêu cốt lõi</span>
              <h3 className="text-4xl font-black text-navy-900 leading-tight">Hạ tầng Tri thức số<br/>Quốc gia</h3>
              <p className="text-slate-400 text-sm max-w-[280px] mx-auto italic">
                "Biến tri thức thành sức mạnh nội sinh cho sự phát triển bền vững của giáo dục Việt Nam."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Slide4 = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="h-full w-full p-8 lg:p-20 overflow-y-auto custom-scrollbar"
  >
    <div className="max-w-6xl mx-auto w-full min-h-full flex flex-col justify-center py-12">
      <div className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-slate-100 pb-12 items-center">
          <div className="lg:col-span-2 space-y-4">
            <span className="section-label">04. Giải pháp Đề xuất</span>
            <h2 className="text-5xl lg:text-6xl font-black text-navy-900 leading-[1.1] tracking-tight">
              Hệ sinh thái Tri thức số Quốc gia
            </h2>
          </div>
          <div className="lg:col-span-1">
            <p className="text-slate-500 text-base font-medium leading-relaxed italic border-l-4 border-brand-blue pl-6">
              Lấy Thư viện Quốc gia làm hạt nhân liên thông điều phối toàn mạng lưới.
            </p>
          </div>
        </div>

          <div className="flex flex-col gap-3">
            {[
              { 
                t: "Cổng Tri thức", 
                role: "Điểm chạm số cho Người dân",
                benefit: "Tìm kiếm thông minh (AI Search), cá nhân hóa lộ trình học tập, tích hợp VNeID truy cập mọi lúc mọi nơi.", 
                i: Globe, 
                c: "text-blue-500 bg-blue-50",
                label: "PORTAL"
              },
              { 
                t: "Lõi Quản trị", 
                role: "Hệ điều hành cho Cán bộ",
                benefit: "Tự động hóa 90% quy trình nghiệp vụ, quản lý tài nguyên tập trung theo chuẩn quốc tế (MARC21, RDA).", 
                i: Database, 
                c: "text-gold-500 bg-gold-50",
                label: "CORE"
              },
              { 
                t: "Kho Bảo tồn", 
                role: "Két sắt số Di sản Quốc gia",
                benefit: "Lưu trữ an toàn chuẩn OAIS, cơ chế kiểm soát toàn vẹn dữ liệu chống giả mạo, bảo tồn vĩnh viễn tài liệu quý hiếm.", 
                i: ShieldCheck, 
                c: "text-emerald-500 bg-emerald-50",
                label: "VAULT"
              },
              { 
                t: "Trục Liên thông", 
                role: "Xương sống kết nối Mạng lưới",
                benefit: "Phá bỏ rào cản dữ liệu, mượn trả liên thư viện toàn quốc, tối ưu hóa 40% chi phí bản quyền số.", 
                i: LayoutDashboard, 
                c: "text-purple-500 bg-purple-50",
                label: "HUB"
              }
            ].map((x, i) => (
              <div key={i} className="bg-white p-5 lg:p-6 rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-500 group flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                <div className="flex items-center gap-5 lg:w-1/3">
                  <div className={cn("w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", x.c)}>
                    <x.i size={28} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-black tracking-[0.2em] opacity-30">{x.label}</span>
                    <h4 className="font-black text-navy-900 text-xl">{x.t}</h4>
                  </div>
                </div>
                
                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 lg:pl-8 lg:border-l border-slate-50">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-brand-blue uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-blue" />
                      Vai trò
                    </span>
                    <p className="text-navy-900 text-[14px] font-bold leading-tight">{x.role}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-600" />
                      Lợi ích chiến lược
                    </span>
                    <p className="text-slate-500 text-[13px] leading-relaxed font-medium">{x.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-navy-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-8">
              <div className="space-y-2">
                <span className="text-gold-400 font-black text-xs uppercase tracking-[0.3em]">Triết lý vận hành</span>
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                  "Tập trung dữ liệu - Phân tán dịch vụ - Liên thông toàn diện"
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {["Chuẩn quốc tế", "An toàn cao", "Mở rộng linh hoạt"].map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 blur-[100px] rounded-full -mr-32 -mt-32" />
          </div>
          
          <div className="bg-gold-500 rounded-[3rem] p-12 flex flex-col justify-between shadow-2xl shadow-gold-500/20">
            <Zap className="text-navy-900" size={48} />
            <div className="space-y-2">
              <h4 className="text-navy-900 font-black text-2xl">Sẵn sàng triển khai</h4>
              <p className="text-navy-900/60 text-sm font-medium">Hạ tầng đám mây, quy mô toàn quốc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Slide5 = () => (
  <SlideLayout 
    title="Giá trị mang lại" 
    subtitle="05. Value Proposition"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
      {/* Stakeholder 1: Nhà nước - Large Card */}
      <div className="md:col-span-2 bg-navy-900 rounded-[2rem] p-6 lg:p-7 text-white relative overflow-hidden group">
        <div className="relative z-10 flex flex-col lg:flex-row gap-5 lg:items-center">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500">
            <Landmark size={28} className="text-gold-400" />
          </div>
          <div className="space-y-2 flex-grow">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-[8px] font-black text-gold-400 tracking-widest uppercase">Quản trị Chiến lược</span>
              <h4 className="text-xl font-black">Đối với Nhà nước</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                "Khẳng định chủ quyền tri thức số quốc gia trên không gian mạng.",
                "Công cụ điều hành mạng lưới thư viện toàn quốc thời gian thực.",
                "Tối ưu hóa nguồn lực đầu tư công thông qua mô hình dùng chung."
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <div className="w-1 h-1 rounded-full bg-gold-400" />
                  <p className="text-[11px] text-white/70 leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/10 blur-[80px] rounded-full -mr-24 -mt-24" />
      </div>

      {/* Stakeholder 2: Thư viện - Medium Card */}
      <div className="bg-white rounded-[2rem] p-6 lg:p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group">
        <div className="space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600 group-hover:rotate-6 transition-transform">
            <BookOpen size={20} />
          </div>
          <div className="space-y-1">
            <span className="text-[8px] font-black text-gold-600 tracking-widest uppercase opacity-60">Nghiệp vụ số</span>
            <h4 className="text-lg font-black text-navy-900">Đối với Thư viện</h4>
          </div>
          <ul className="space-y-2">
            {[
              "Chuẩn hóa nghiệp vụ theo các tiêu chuẩn quốc tế hiện đại.",
              "Xóa bỏ rào cản địa lý trong việc phục vụ và chia sẻ tài nguyên.",
              "Nâng tầm vị thế và vai trò của thư viện trong kỷ nguyên số."
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <CheckCircle2 size={14} className="text-gold-500 shrink-0 mt-0.5" />
                <p className="text-slate-500 text-[11px] leading-relaxed font-medium">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stakeholder 3: Người dân - Medium Card */}
      <div className="bg-brand-blue rounded-[2rem] p-6 lg:p-7 text-white shadow-2xl shadow-brand-blue/20 flex flex-col justify-between group">
        <div className="space-y-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:-rotate-6 transition-transform">
            <Users size={20} />
          </div>
          <div className="space-y-1">
            <span className="text-[8px] font-black text-white/60 tracking-widest uppercase">Thụ hưởng dịch vụ</span>
            <h4 className="text-lg font-black">Đối với Người dân</h4>
          </div>
          <ul className="space-y-2">
            {[
              "Bình đẳng trong quyền tiếp cận tri thức chất lượng cao.",
              "Trải nghiệm đọc thông minh, cá nhân hóa theo nhu cầu thực tế.",
              "Kết nối cộng đồng học tập suốt đời trên nền tảng số quốc gia."
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <div className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-1 h-1 rounded-full bg-white" />
                </div>
                <p className="text-white/80 text-[11px] leading-relaxed font-medium">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Slide6 = () => (
  <SlideLayout 
    title="Sơ đồ Hệ thống" 
    subtitle="06. System Architecture"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
      {/* Hệ thống 1 */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-3">
          <span className="px-2 py-1 rounded-lg bg-gold-50 text-[8px] font-black text-gold-600 uppercase tracking-wider border border-gold-100">Người dùng / NXB</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center text-white shadow-lg shadow-gold-500/20">
              <Globe size={20} />
            </div>
            <h4 className="font-black text-navy-900 text-sm uppercase tracking-tight">Hệ thống 1: Cổng dịch vụ</h4>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { id: "UC1", t: "Đăng nhập tập trung VNeID/SSO" },
              { id: "UC2", t: "Tra cứu tri thức Discovery" },
              { id: "UC3", t: "Dịch vụ hỗ trợ TTS/Braille" },
              { id: "UC4", t: "Thanh toán trực tuyến" }
            ].map((uc, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-gold-200 transition-colors">
                <span className="text-[9px] font-black text-gold-600 w-8">{uc.id}</span>
                <p className="text-[11px] text-navy-900 font-bold">{uc.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hệ thống 2 */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-3">
          <span className="px-2 py-1 rounded-lg bg-blue-50 text-[8px] font-black text-brand-blue uppercase tracking-wider border border-blue-100">Cán bộ Nghiệp vụ</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/20">
              <Database size={20} />
            </div>
            <h4 className="font-black text-navy-900 text-sm uppercase tracking-tight">Hệ thống 2: Quản trị (Core)</h4>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { id: "UC5", t: "Tiếp nhận Lưu chiểu & Luận án" },
              { id: "UC8", t: "Biên mục & Metadata chuẩn" },
              { id: "UC9", t: "Kiểm soát bản quyền DRM" },
              { id: "UC10", t: "Phân loại & Cấp quyền" }
            ].map((uc, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-blue-200 transition-colors">
                <span className="text-[9px] font-black text-brand-blue w-8">{uc.id}</span>
                <p className="text-[11px] text-navy-900 font-bold">{uc.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hệ thống 3 */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-3">
          <span className="px-2 py-1 rounded-lg bg-red-50 text-[8px] font-black text-red-600 uppercase tracking-wider border border-red-100">Quản trị / Lãnh đạo</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/20">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-black text-navy-900 text-sm uppercase tracking-tight">Hệ thống 3: Lưu trữ & Bảo quản</h4>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { id: "UC11", t: "Lưu trữ đa lớp 3-2-1" },
              { id: "UC12", t: "Kiểm tra toàn vẹn & Tự phục hồi" },
              { id: "UC13", t: "Di trú định dạng bảo quản lâu dài" }
            ].map((uc, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-red-200 transition-colors">
                <span className="text-[9px] font-black text-red-600 w-8">{uc.id}</span>
                <p className="text-[11px] text-navy-900 font-bold">{uc.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hệ thống 4 */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-3">
          <span className="px-2 py-1 rounded-lg bg-emerald-50 text-[8px] font-black text-emerald-600 uppercase tracking-wider border border-emerald-100">Liên kết Hệ thống</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Network size={20} />
            </div>
            <h4 className="font-black text-navy-900 text-sm uppercase tracking-tight">Hệ thống 4: Liên thông & Giám sát</h4>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { id: "UC14", t: "Chia sẻ dữ liệu & API địa phương" },
              { id: "UC15", t: "Điều phối mượn liên thư viện số" },
              { id: "UC16", t: "Thống kê Big Data & Báo cáo" },
              { id: "UC17", t: "Giám sát ATTT & SOC" }
            ].map((uc, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-emerald-200 transition-colors">
                <span className="text-[9px] font-black text-emerald-600 w-8">{uc.id}</span>
                <p className="text-[11px] text-navy-900 font-bold">{uc.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Slide7 = () => (
  <SlideLayout 
    title="Hệ thống 1: Portal" 
    subtitle="07. The Interface (BFD)"
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
      {/* Nhóm 1.1 */}
      <div className="bg-yellow-50/50 rounded-3xl p-5 border border-yellow-100 shadow-sm flex flex-col group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center text-navy-900 shadow-lg shadow-yellow-400/20">
              <Users size={20} />
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-black text-yellow-700 uppercase tracking-widest">Nhóm 1.1</span>
              <h4 className="font-black text-navy-900 text-xs uppercase leading-tight">Định danh & Quản trị Người dùng</h4>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "1.1.1 Đăng ký & Xác thực (SSO/VNeID)",
              "1.1.2 Hồ sơ cá nhân & Lịch sử nghiên cứu",
              "1.1.3 Quản lý thẻ TV & Phân loại đối tượng",
              "1.1.4 Thông báo & Tương tác người dùng",
              "1.1.5 Bảo mật & Quản lý quyền riêng tư"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-yellow-100/50 group-hover:border-yellow-200 transition-colors">
                <div className="w-1 h-1 rounded-full bg-yellow-500 shrink-0" />
                <p className="text-[10px] text-navy-900 font-bold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nhóm 1.2 */}
      <div className="bg-blue-50/50 rounded-3xl p-5 border border-blue-100 shadow-sm flex flex-col group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/20">
              <Search size={20} />
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-black text-brand-blue uppercase tracking-widest">Nhóm 1.2</span>
              <h4 className="font-black text-navy-900 text-xs uppercase leading-tight">Tra cứu, Khai thác & Cá nhân hóa</h4>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "1.2.1 Tra cứu thông minh (Discovery Service)",
              "1.2.2 Lọc kết quả đa chiều (Faceted Search)",
              "1.2.3 Đọc trực tuyến & Mượn số (DRM)",
              "1.2.4 Quản lý giá sách ảo & Bộ sưu tập",
              "1.2.5 Gợi ý cá nhân hóa (AI Recommendation)"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-blue-100/50 group-hover:border-blue-200 transition-colors">
                <div className="w-1 h-1 rounded-full bg-brand-blue shrink-0" />
                <p className="text-[10px] text-navy-900 font-bold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nhóm 1.3 */}
      <div className="bg-pink-50/50 rounded-3xl p-5 border border-pink-100 shadow-sm flex flex-col group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
              <CreditCard size={20} />
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-black text-pink-700 uppercase tracking-widest">Nhóm 1.3</span>
              <h4 className="font-black text-navy-900 text-xs uppercase leading-tight">Dịch vụ đặc thù & Thanh toán</h4>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "1.3.1 Hỗ trợ Accessibility (TTS/Braille)",
              "1.3.2 Khai thác tài liệu định dạng đặc biệt",
              "1.3.3 Thanh toán trực tuyến (Ví/QR/Bank)",
              "1.3.4 Tra cứu & Xuất hóa đơn điện tử",
              "1.3.5 Sự kiện & Triển lãm số trực tuyến"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-pink-100/50 group-hover:border-pink-200 transition-colors">
                <div className="w-1 h-1 rounded-full bg-pink-500 shrink-0" />
                <p className="text-[10px] text-navy-900 font-bold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Slide8 = () => (
  <SlideLayout 
    title="Hệ thống 2: Core" 
    subtitle="08. The Engine (BFD)"
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
      {/* Nhóm 2.1 */}
      <div className="bg-emerald-50/50 rounded-3xl p-5 border border-emerald-100 shadow-sm flex flex-col group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <FileText size={20} />
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-black text-emerald-700 uppercase tracking-widest">Nhóm 2.1</span>
              <h4 className="font-black text-navy-900 text-xs uppercase leading-tight">Tiếp nhận & Tạo lập Tài nguyên</h4>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "2.1.1 Tiếp nhận Lưu chiểu điện tử (NXB)",
              "2.1.2 Tiếp nhận Luận án Tiến sĩ số (NCS)",
              "2.1.3 Quản lý dự án Số hóa tài liệu vật thể",
              "2.1.4 Thu thập tài nguyên số mở (OER)",
              "2.1.5 Tiếp nhận tài liệu tài trợ/tặng cho"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-emerald-100/50 group-hover:border-emerald-200 transition-colors">
                <div className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                <p className="text-[10px] text-navy-900 font-bold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nhóm 2.2 */}
      <div className="bg-sky-50/50 rounded-3xl p-5 border border-sky-100 shadow-sm flex flex-col group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
              <Cpu size={20} />
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-black text-sky-700 uppercase tracking-widest">Nhóm 2.2</span>
              <h4 className="font-black text-navy-900 text-xs uppercase leading-tight">Xử lý Nghiệp vụ & Tinh chế</h4>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "2.2.1 Biên mục & Metadata (MARC21/DC)",
              "2.2.2 Kiểm soát Bản quyền số (DRM)",
              "2.2.3 Phân loại & Cấp quyền (Điều 7)",
              "2.2.4 Hậu kỳ ảnh quét & Nhận dạng OCR",
              "2.2.5 Gán mã định danh duy nhất (PID/DOI)"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-sky-100/50 group-hover:border-sky-200 transition-colors">
                <div className="w-1 h-1 rounded-full bg-sky-500 shrink-0" />
                <p className="text-[10px] text-navy-900 font-bold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nhóm 2.3 */}
      <div className="bg-orange-50/50 rounded-3xl p-5 border border-orange-100 shadow-sm flex flex-col group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
              <Settings size={20} />
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-black text-orange-700 uppercase tracking-widest">Nhóm 2.3</span>
              <h4 className="font-black text-navy-900 text-xs uppercase leading-tight">Quản trị, Kiểm soát & Phê duyệt</h4>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "2.3.1 Quản lý quy trình phê duyệt (Workflow)",
              "2.3.2 Kiểm soát chất lượng dữ liệu (QC)",
              "2.3.3 Quản trị Tổng mục lục Việt Nam",
              "2.3.4 Quản lý chính sách mượn trả (License)",
              "2.3.5 Tra cứu & Kiểm soát nội bộ (Staff)"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-orange-100/50 group-hover:border-orange-200 transition-colors">
                <div className="w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                <p className="text-[10px] text-navy-900 font-bold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Slide9 = () => (
  <SlideLayout 
    title="Hệ thống 3: Vault" 
    subtitle="09. The Storage (BFD)"
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
      {/* Nhóm 3.1 */}
      <div className="bg-indigo-50/50 rounded-3xl p-5 border border-indigo-100 shadow-sm flex flex-col group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Database size={20} />
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-black text-indigo-700 uppercase tracking-widest">Nhóm 3.1</span>
              <h4 className="font-black text-navy-900 text-xs uppercase leading-tight">Lưu trữ & Quản trị Hạ tầng</h4>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "3.1.1 Đóng gói bảo quản chuẩn OAIS (AIP)",
              "3.1.2 Quản lý lưu trữ đa lớp (Disk/Tape/Cloud)",
              "3.1.3 Thực thi chính sách sao lưu 3-2-1",
              "3.1.4 Đồng bộ dữ liệu dự phòng (DR Site)",
              "3.1.5 Quản lý dung lượng & Tối ưu hóa"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-indigo-100/50 group-hover:border-indigo-200 transition-colors">
                <div className="w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                <p className="text-[10px] text-navy-900 font-bold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nhóm 3.2 */}
      <div className="bg-cyan-50/50 rounded-3xl p-5 border border-cyan-100 shadow-sm flex flex-col group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <Activity size={20} />
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-black text-cyan-700 uppercase tracking-widest">Nhóm 3.2</span>
              <h4 className="font-black text-navy-900 text-xs uppercase leading-tight">Bảo quản số & Duy trì Toàn vẹn</h4>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "3.2.1 Kiểm tra tính toàn vẹn (Checksum)",
              "3.2.2 Tự động phục hồi dữ liệu (Self-healing)",
              "3.2.3 Quản lý vòng đời định dạng tệp tin",
              "3.2.4 Thực hiện di trú định dạng (Migration)",
              "3.2.5 Khôi phục dữ liệu theo yêu cầu"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-cyan-100/50 group-hover:border-cyan-200 transition-colors">
                <div className="w-1 h-1 rounded-full bg-cyan-500 shrink-0" />
                <p className="text-[10px] text-navy-900 font-bold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nhóm 3.3 */}
      <div className="bg-rose-50/50 rounded-3xl p-5 border border-rose-100 shadow-sm flex flex-col group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center text-white shadow-lg shadow-rose-500/20">
              <ShieldCheck size={20} />
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-black text-rose-700 uppercase tracking-widest">Nhóm 3.3</span>
              <h4 className="font-black text-navy-900 text-xs uppercase leading-tight">An toàn & Giám sát Kho dữ liệu</h4>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "3.3.1 Mã hóa dữ liệu (AES-256 Encryption)",
              "3.3.2 Quản lý khóa giải mã bảo mật (KMS)",
              "3.3.3 Ghi nhật ký truy xuất (Audit Logs)",
              "3.3.4 Giám sát trạng thái thiết bị vật lý",
              "3.3.5 Kiểm soát quyền truy cập nội bộ (ACL)"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-rose-100/50 group-hover:border-rose-200 transition-colors">
                <div className="w-1 h-1 rounded-full bg-rose-500 shrink-0" />
                <p className="text-[10px] text-navy-900 font-bold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Slide10 = () => (
  <SlideLayout 
    title="Hệ thống 4: Hub" 
    subtitle="10. The Hub (BFD)"
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
      {/* Nhóm 4.1 */}
      <div className="bg-teal-50/50 rounded-3xl p-5 border border-teal-100 shadow-sm flex flex-col group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
              <Share2 size={20} />
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-black text-teal-700 uppercase tracking-widest">Nhóm 4.1</span>
              <h4 className="font-black text-navy-900 text-xs uppercase leading-tight">Liên thông & Chia sẻ Tài nguyên</h4>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "4.1.1 Quản lý trục kết nối API liên thông (National Hub)",
              "4.1.2 Đồng bộ & Quản trị Tổng mục lục Việt Nam (Union Catalog)",
              "4.1.3 Điều phối mượn liên thư viện số toàn quốc (Digital ILL)",
              "4.1.4 Chia sẻ Metadata & Tài nguyên số dùng chung",
              "4.1.5 Quản trị chính sách & Thỏa thuận liên thông (SLA)"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-teal-100/50 group-hover:border-teal-200 transition-colors">
                <div className="w-1 h-1 rounded-full bg-teal-500 shrink-0" />
                <p className="text-[10px] text-navy-900 font-bold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nhóm 4.2 */}
      <div className="bg-amber-50/50 rounded-3xl p-5 border border-amber-100 shadow-sm flex flex-col group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
              <BarChart3 size={20} />
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-black text-amber-700 uppercase tracking-widest">Nhóm 4.2</span>
              <h4 className="font-black text-navy-900 text-xs uppercase leading-tight">Giám sát & Báo cáo chiến lược</h4>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "4.2.1 Dashboard thống kê văn hóa đọc thời gian thực",
              "4.2.2 Phân tích xu hướng & Dự báo hành vi (Big Data/AI)",
              "4.2.3 Báo cáo đánh giá hoạt động thư viện (Điều 37)",
              "4.2.4 Tổng hợp báo cáo quản lý nhà nước (Bộ VHTTDL)",
              "4.2.5 Giám sát hiệu quả khai thác tài nguyên số đầu tư công"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-amber-100/50 group-hover:border-amber-200 transition-colors">
                <div className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                <p className="text-[10px] text-navy-900 font-bold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nhóm 4.3 */}
      <div className="bg-rose-50/50 rounded-3xl p-5 border border-rose-100 shadow-sm flex flex-col group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center text-white shadow-lg shadow-rose-500/20">
              <ShieldCheck size={20} />
            </div>
            <div className="space-y-0.5">
              <span className="text-[8px] font-black text-rose-700 uppercase tracking-widest">Nhóm 4.3</span>
              <h4 className="font-black text-navy-900 text-xs uppercase leading-tight">An toàn thông tin & Trung tâm SOC</h4>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "4.3.1 Giám sát an ninh mạng tập trung (SOC Monitoring)",
              "4.3.2 Cảnh báo & Ứng phó sự cố xâm nhập (Incident Response)",
              "4.3.3 Kiểm soát an toàn lưu lượng & Chống tấn công (DDoS)",
              "4.3.4 Quản trị nhật ký hệ thống toàn diện (Centralized Logs)",
              "4.3.5 Kiểm tra & Đánh giá an ninh hệ thống định kỳ"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-rose-100/50 group-hover:border-rose-200 transition-colors">
                <div className="w-1 h-1 rounded-full bg-rose-500 shrink-0" />
                <p className="text-[10px] text-navy-900 font-bold leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const Slide11 = () => (
  <SlideLayout 
    title="Lộ trình Triển khai Đề xuất" 
    subtitle="11. Proposed Roadmap"
  >
    <div className="h-full flex flex-col justify-between pt-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[
          {
            phase: "01",
            label: "Giai đoạn 1",
            title: "Xây dựng Nền tảng & Bảo tồn",
            color: "text-brand-blue",
            bg: "bg-blue-50/50",
            borderColor: "border-blue-100",
            items: [
              "Triển khai Hệ thống Vault (Lưu trữ & Bảo quản số)",
              "Thiết lập Hệ thống Core (Quản trị nghiệp vụ)",
              "Số hóa tài nguyên & Tạo lập kho dữ liệu dùng chung"
            ]
          },
          {
            phase: "02",
            label: "Giai đoạn 2",
            title: "Kết nối & Phổ cập Dịch vụ",
            color: "text-gold-600",
            bg: "bg-amber-50/50",
            borderColor: "border-amber-100",
            items: [
              "Ra mắt Cổng tri thức số tích hợp VNeID/SSO",
              "Triển khai dịch vụ AI (Search, TTS, OCR AI)",
              "Mở rộng học liệu số đến giáo dục & người dân"
            ]
          },
          {
            phase: "03",
            label: "Giai đoạn 3",
            title: "Liên thông & Giám sát Chiến lược",
            color: "text-emerald-600",
            bg: "bg-emerald-50/50",
            borderColor: "border-emerald-100",
            items: [
              "Vận hành Trục liên thông quốc gia (Hub) toàn diện",
              "Dashboard Big Data & AI phân tích văn hóa đọc",
              "Hoàn thiện Trung tâm điều hành an ninh mạng SOC"
            ]
          }
        ].map((x, i) => (
          <div key={i} className={cn("group relative flex flex-col rounded-[2.5rem] p-8 border transition-all hover:shadow-xl hover:-translate-y-1", x.bg, x.borderColor)}>
            <div className="flex justify-between items-start mb-8">
              <span className={cn("text-6xl font-black opacity-20 italic font-serif", x.color)}>{x.phase}</span>
              <div className={cn("px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border text-[10px] font-black uppercase tracking-widest", x.borderColor, x.color)}>
                {x.label}
              </div>
            </div>
            
            <h4 className="text-xl font-black text-navy-900 mb-6 leading-tight min-h-[3rem]">
              {x.title}
            </h4>
            
            <div className="space-y-4 mt-auto">
              {x.items.map((item, j) => (
                <div key={j} className="flex gap-3 items-start group/item">
                  <div className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-transform group-hover/item:scale-150", x.color.replace('text-', 'bg-'))} />
                  <p className="text-[11px] text-slate-600 leading-relaxed font-bold">{item}</p>
                </div>
              ))}
            </div>

            {/* Connecting Arrow (Desktop only) */}
            {i < 2 && (
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-md">
                  <ArrowRight size={14} className="text-slate-400" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-8 bg-navy-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="relative z-10 space-y-2 text-center md:text-left">
          <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em]">Tầm nhìn chiến lược</p>
          <p className="text-2xl font-black text-white leading-tight">
            Kiến tạo hạ tầng tri thức số <span className="text-brand-blue">hiện đại</span>
          </p>
          <p className="text-xs text-slate-400 font-medium italic">Thực thi triệt để các điều khoản Luật Thư viện 2019</p>
        </div>
        
        <div className="relative z-10 flex items-center gap-8 mt-6 md:mt-0">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-white tracking-tighter">03</span>
            <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Giai đoạn</span>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-brand-blue tracking-tighter">24</span>
            <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Tháng</span>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { l: "Trang bìa", i: Info, c: <SlideCover />, hideMenu: true },
    { l: "1. Bối cảnh", i: Scale, c: <Slide1 /> },
    { l: "2. Thực trạng", i: AlertTriangle, c: <Slide2 /> },
    { l: "3. Nhu cầu", i: Target, c: <Slide3 /> },
    { l: "4. Giải pháp", i: Lightbulb, c: <Slide4 /> },
    { l: "5. Giá trị", i: TrendingUp, c: <Slide5 /> },
    { l: "6. Sơ đồ hệ thống", i: Network, c: <Slide6 /> },
    { l: "7. Hệ thống 1", i: Globe, c: <Slide7 /> },
    { l: "8. Hệ thống 2", i: Database, c: <Slide8 /> },
    { l: "9. Hệ thống 3", i: ShieldCheck, c: <Slide9 /> },
    { l: "10. Hệ thống 4", i: LayoutDashboard, c: <Slide10 /> },
    { l: "11. Lộ trình", i: ArrowRight, c: <Slide11 /> }
  ];

  const menuSlides = slides.filter(s => !s.hideMenu);

  return (
    <div className="flex h-screen w-screen bg-[#f8fafc] font-sans selection:bg-brand-blue selection:text-white antialiased">
      <div className="bg-pattern" />
      
      {/* Sidebar (Left) */}
      <aside className="left-sidebar">
        <div className="flex items-center gap-4 mb-12 px-2">
          <div className="w-12 h-12 bg-navy-900 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl shadow-navy-900/20">L</div>
          <div className="flex flex-col">
            <span className="text-navy-900 font-black tracking-tighter text-lg leading-none uppercase">Library</span>
            <span className="text-[8px] text-slate-400 font-black uppercase tracking-[0.3em] mt-1">Strategic Ecosystem</span>
          </div>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar pr-2">
          {menuSlides.map((s, i) => {
            const actualIndex = slides.indexOf(s);
            return (
              <NavItem 
                key={i} 
                icon={s.i} 
                label={s.l} 
                isActive={currentSlide === actualIndex} 
                onClick={() => setCurrentSlide(actualIndex)} 
              />
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area (Right) */}
      <main className="main-content-area">
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide} className="h-full w-full">
            {slides[currentSlide].c}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
