"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background via-muted/20 to-background pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Powerful Features for <span className="gradient-gold-text">Lasting Change</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to build habits, achieve goals, and stay motivated
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 15, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
              animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="mx-auto max-w-4xl text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
                whileHover={{ scale: 1.05 }}
              >
                🚀 Hikayemiz
              </motion.div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Samsun'dan Dünyaya <span className="gradient-gold-text">Uzanan Bir Vizyon</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Yerel bir tutkuyla başlayan yolculuğumuz, güçlü bir ekip ve deneyimli insanlarla birlikte, bugün dünya çapında bir dönüşüme öncülük ediyor.
              </p>
            </motion.div>

            {/* Journey Path */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  city: "Samsun",
                  icon: "🌟",
                  title: "Başlangıç",
                  description: "Yerel bir vizyon ve tutkulu bir ekiple çıktığımız yolda, değişim yaratma hedefiyle ilk adımı attık."
                },
                {
                  city: "Ankara & İstanbul",
                  icon: "🚀",
                  title: "Büyüme",
                  description: "Başkent ve metropolde güçlenerek, Türkiye'nin dört bir yanından deneyimli profesyonellerle ekibimizi genişlettik."
                },
                {
                  city: "Dünya",
                  icon: "🌍",
                  title: "Küresel Açılım",
                  description: "Modern teknolojiler ve yapay zeka ile donatılmış platformumuzla, küresel bir topluluk oluşturuyoruz."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div
                    className="rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-8 text-center hover:shadow-2xl transition-all cursor-pointer h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <motion.div
                      className="text-6xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.icon}
                    </motion.div>
                    <div className="text-sm font-semibold text-primary mb-2">{step.city}</div>
                    <h3 className="text-2xl font-bold mb-3 gradient-gold-text">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                  
                  {/* Connection Arrow */}
                  {index < 2 && (
                    <motion.div
                      className="hidden md:block absolute top-1/2 -right-4 text-3xl text-primary/40"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Team Excellence */}
            <motion.div
              className="rounded-3xl border border-border bg-card/50 backdrop-blur-xl overflow-hidden shadow-2xl mb-16"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/42f964bf-64b0-4b46-947b-330222f81850/generated_images/modern-professional-team-working-togethe-5e6fdb5e-20251105211435.jpg"
                    alt="Güçlü ve deneyimli ekibimiz"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/80 to-transparent" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-bold mb-4">
                      Güçlü Ekip, <span className="gradient-gold-text">Deneyimli İnsanlar</span>
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Modern dünyanın tekniklerine ayak uyduran, yapay zeka teknolojilerini projelerine entegre eden ve her adımda yenilikçi çözümler üreten bir ekiple çalışıyoruz.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Deneyimli profesyonellerden oluşan güçlü kadro",
                        "Yapay zeka ve modern teknolojilerde uzmanlaşmış ekip",
                        "Sürekli öğrenen ve gelişen dinamik yapı",
                        "Kullanıcı odaklı çözüm yaklaşımı"
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <motion.div
                            className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white flex-shrink-0"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            ✓
                          </motion.div>
                          <span className="text-muted-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Ethics & AI Security */}
            <motion.div
              className="rounded-3xl border border-border bg-card/50 backdrop-blur-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-bold mb-4">
                      Etik Değerler ve <span className="gradient-gold-text">Güvenlik Önceliğimiz</span>
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      En önemlisi, etik değerlere derin bir saygı duyuyoruz. Kullanıcılarımızın verilerini güvenle saklıyor ve her adımda şeffaflığı esas alıyoruz.
                    </p>
                    <div className="space-y-6">
                      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="text-3xl"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                          >
                            🤖
                          </motion.div>
                          <div>
                            <h4 className="font-semibold mb-2">Yapay Zeka Destekli Kontrol</h4>
                            <p className="text-sm text-muted-foreground">
                              Her challenge oluşturulduğunda, yapay zeka sistemlerimiz etik değerleri otomatik olarak kontrol eder.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="text-3xl"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                          >
                            🛡️
                          </motion.div>
                          <div>
                            <h4 className="font-semibold mb-2">Fraud ve Güvenlik Koruması</h4>
                            <p className="text-sm text-muted-foreground">
                              Sahte hesaplar, ahlaksız davranışlar ve fraud girişimleri anlık olarak tespit edilir ve engellenir.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="text-3xl"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                          >
                            🔒
                          </motion.div>
                          <div>
                            <h4 className="font-semibold mb-2">Veri Gizliliği ve Güvenliği</h4>
                            <p className="text-sm text-muted-foreground">
                              Kullanıcı verileriniz en üst seviye güvenlik standartlarıyla korunur ve asla üçüncü taraflarla paylaşılmaz.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="relative h-64 md:h-auto overflow-hidden order-1 md:order-2">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/42f964bf-64b0-4b46-947b-330222f81850/generated_images/abstract-digital-illustration-of-ai-powe-c6e1dd10-20251105211433.jpg"
                    alt="Yapay zeka destekli güvenlik ve etik kontrol"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-card/80 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              className="mt-16 grid md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {[
                { icon: "💡", title: "Yenilikçilik", desc: "Modern teknolojilerle geleceği şekillendiriyoruz" },
                { icon: "🤝", title: "Güvenilirlik", desc: "Şeffaflık ve dürüstlük temel değerlerimiz" },
                { icon: "🎯", title: "Kullanıcı Odaklı", desc: "Her karar kullanıcı deneyimi önceliğiyle alınır" },
                { icon: "🌱", title: "Sürdürülebilirlik", desc: "Uzun vadeli değer ve etki yaratıyoruz" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl border border-border bg-card/30 hover:bg-card/70 transition-all cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.div
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mobile App Screenshots */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-border) 1px, transparent 1px)`,
              backgroundSize: "40px 40px"
            }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
                whileHover={{ scale: 1.05 }}
              >
                📱 Mobile Experience
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Beautiful Mobile App Design
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience seamless habit tracking on the go with our elegantly designed mobile interface
              </p>
            </motion.div>

            {/* Screenshots Grid */}
            <div className="relative">
              {/* Desktop: Horizontal scroll showcase */}
              <div className="hidden md:flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                {[
                  {
                    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/42f964bf-64b0-4b46-947b-330222f81850/generated_images/modern-mobile-app-screenshot-showing-hab-fd28368c-20251105210821.jpg",
                    title: "Challenge Tracking",
                    description: "Monitor your 30, 60, and 90-day challenges"
                  },
                  {
                    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/42f964bf-64b0-4b46-947b-330222f81850/generated_images/modern-mobile-app-screenshot-showing-bad-cc471eea-20251105210825.jpg",
                    title: "Badge Collection",
                    description: "Collect 126+ unique achievement badges"
                  },
                  {
                    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/42f964bf-64b0-4b46-947b-330222f81850/generated_images/modern-mobile-app-screenshot-of-daily-ch-7871f43a-20251105210823.jpg",
                    title: "Daily Check-ins",
                    description: "Document your progress with photo uploads"
                  },
                  {
                    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/42f964bf-64b0-4b46-947b-330222f81850/generated_images/modern-mobile-app-screenshot-showing-soc-1da3c819-20251105210823.jpg",
                    title: "Social Feed",
                    description: "Stay connected with friends and community"
                  },
                  {
                    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/42f964bf-64b0-4b46-947b-330222f81850/generated_images/modern-mobile-app-screenshot-displaying--d36f4bcf-20251105210823.jpg",
                    title: "Level Progress",
                    description: "Track your XP and level up your journey"
                  }
                ].map((screenshot, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 snap-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="group relative"
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative w-[280px] h-[560px] rounded-[2.5rem] overflow-hidden border-[8px] border-foreground/10 shadow-2xl bg-card">
                        <img
                          src={screenshot.url}
                          alt={screenshot.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <h3 className="text-white font-bold text-xl mb-2">{screenshot.title}</h3>
                          <p className="text-white/90 text-sm">{screenshot.description}</p>
                        </div>
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile: Stacked vertical layout */}
              <div className="md:hidden space-y-8">
                {[
                  {
                    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/42f964bf-64b0-4b46-947b-330222f81850/generated_images/modern-mobile-app-screenshot-showing-hab-fd28368c-20251105210821.jpg",
                    title: "Challenge Tracking",
                    description: "Monitor your 30, 60, and 90-day challenges with visual progress"
                  },
                  {
                    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/42f964bf-64b0-4b46-947b-330222f81850/generated_images/modern-mobile-app-screenshot-showing-bad-cc471eea-20251105210825.jpg",
                    title: "Badge Collection",
                    description: "Collect 126+ unique achievement badges across 6 categories"
                  },
                  {
                    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/42f964bf-64b0-4b46-947b-330222f81850/generated_images/modern-mobile-app-screenshot-of-daily-ch-7871f43a-20251105210823.jpg",
                    title: "Daily Check-ins",
                    description: "Document your progress with photo uploads and build streaks"
                  },
                  {
                    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/42f964bf-64b0-4b46-947b-330222f81850/generated_images/modern-mobile-app-screenshot-showing-soc-1da3c819-20251105210823.jpg",
                    title: "Social Feed",
                    description: "Stay connected with friends and see their achievements"
                  },
                  {
                    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/42f964bf-64b0-4b46-947b-330222f81850/generated_images/modern-mobile-app-screenshot-displaying--d36f4bcf-20251105210823.jpg",
                    title: "Level Progress",
                    description: "Track your XP and level up as you achieve your goals"
                  }
                ].map((screenshot, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative w-[280px] h-[560px] rounded-[2.5rem] overflow-hidden border-[8px] border-foreground/10 shadow-2xl bg-card mb-4">
                      <img
                        src={screenshot.url}
                        alt={screenshot.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center max-w-[280px]">
                      <h3 className="font-bold text-lg mb-2">{screenshot.title}</h3>
                      <p className="text-muted-foreground text-sm">{screenshot.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Download CTA */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground mb-6">Download now and start your transformation</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <motion.button
                  className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-6 py-3 font-medium hover:bg-black/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </motion.button>
                <motion.button
                  className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-6 py-3 font-medium hover:bg-black/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenge System */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  🏆 Challenge System
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  30, 60, & 90-Day Challenges
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Choose your timeframe and commit to lasting change. Whether you're building a new habit or breaking an old one, our flexible challenge system adapts to your goals.
                </p>
                <ul className="space-y-3">
                  {[
                    "Choose from personal or group challenges",
                    "Set public or private visibility",
                    "Create custom challenges or use templates",
                    "Track progress with visual calendars"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        ✓
                      </motion.div>
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-4">
                  {[
                    { days: 30, title: "Quick Start", progress: 75, completed: 22, total: 30 },
                    { days: 60, title: "Build Momentum", progress: 50, completed: 30, total: 60 },
                    { days: 90, title: "Transform", progress: 33, completed: 30, total: 90 }
                  ].map((challenge, index) => (
                    <motion.div
                      key={index}
                      className="group rounded-lg border border-border bg-muted/50 p-6 transition-all hover:shadow-lg hover:border-primary/50"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="mb-2 text-sm text-muted-foreground">{challenge.days}-Day Challenge</div>
                      <div className="text-2xl font-bold group-hover:gradient-gold-text transition-all">{challenge.title}</div>
                      <div className="mt-4 h-2 w-full rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className="h-full gradient-gold"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${challenge.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">{challenge.completed}/{challenge.total} days completed</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Badge System */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-border) 1px, transparent 1px)`,
              backgroundSize: "40px 40px"
            }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                className="order-2 lg:order-1 grid grid-cols-3 gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {[
                  { icon: "🏆", name: "Achievement", count: 40 },
                  { icon: "⭐", name: "Level", count: 16 },
                  { icon: "🔥", name: "Streak", count: 22 },
                  { icon: "👥", name: "Social", count: 13 },
                  { icon: "💎", name: "Special", count: 25 },
                  { icon: "🐛", name: "Bug Hunter", count: 10 }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    className="rounded-xl border border-border bg-card/70 backdrop-blur-sm p-6 text-center cursor-pointer hover:shadow-xl transition-all"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  >
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <div className="text-sm font-medium mb-1">{badge.name}</div>
                    <div className="text-xs text-muted-foreground">{badge.count} badges</div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                  🏅 Badge System
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  126+ Unique Badges to Collect
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Every achievement deserves recognition. Our comprehensive badge system rewards your progress, consistency, and community involvement with beautiful collectible badges.
                </p>
                <ul className="space-y-3">
                  {[
                    "6 badge categories with unique designs",
                    "Meta badges for collecting badge sets",
                    "Gold-exclusive premium badges",
                    "Real-time progress tracking"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Check-in System */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                ✅ Check-in System
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Prove Your Progress Daily
              </h2>
              <p className="text-lg text-muted-foreground">
                Upload photos to document your journey. Build accountability through visual proof and admin verification.
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: "📸", title: "Photo Upload", desc: "Capture and share your daily progress with the community" },
                { icon: "🔥", title: "Streak Tracking", desc: "Build momentum with consecutive daily check-ins" },
                { icon: "✅", title: "Admin Review", desc: "Quality assurance through manual verification" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group rounded-xl border border-border bg-card p-8 text-center hover:shadow-2xl transition-all cursor-pointer overflow-hidden relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div
                    className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-gold shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-3xl">{feature.icon}</span>
                  </motion.div>
                  <h3 className="relative mb-2 text-xl font-semibold group-hover:gradient-gold-text transition-all">{feature.title}</h3>
                  <p className="relative text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Friends & Social */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                  👥 Friends & Social
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Achieve More Together
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Connect with like-minded individuals, share your journey, and stay motivated through friendly competition and support.
                </p>
                <ul className="space-y-3">
                  {[
                    "Send and receive friend requests",
                    "View friend activity feeds",
                    "Compete on leaderboards",
                    "Invite friends to challenges",
                    "Smart friend suggestions"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
                  <div className="space-y-4">
                    {[
                      { initials: "JD", name: "John completed a challenge", time: "2 hours ago" },
                      { initials: "SM", name: "Sarah earned a new badge", time: "5 hours ago" },
                      { initials: "MK", name: "Mike reached level 10", time: "1 day ago" }
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 pb-4 border-b border-border last:border-0 group cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="h-10 w-10 rounded-full gradient-gold flex items-center justify-center text-white font-semibold"
                          whileHover={{ scale: 1.1 }}
                        >
                          {activity.initials}
                        </motion.div>
                        <div className="flex-1">
                          <div className="font-medium group-hover:text-primary transition-colors">{activity.name}</div>
                          <div className="text-sm text-muted-foreground">{activity.time}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* XP & Leveling */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                ⭐ XP & Leveling
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Level Up Your Life
              </h2>
              <p className="text-lg text-muted-foreground">
                Gain experience points for every action and watch yourself grow. Unlock new features and rewards as you level up.
              </p>
            </motion.div>
            <motion.div
              className="mx-auto max-w-2xl rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <motion.div
                    className="text-2xl font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    Level 15
                  </motion.div>
                  <div className="text-sm text-muted-foreground">2,450 / 3,000 XP</div>
                </div>
                <div className="h-4 w-full rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full gradient-gold"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { xp: "+10 XP", action: "Daily check-in" },
                  { xp: "+50 XP", action: "Complete challenge" },
                  { xp: "+25 XP", action: "Earn badge" },
                  { xp: "+5 XP", action: "Add friend" }
                ].map((reward, index) => (
                  <motion.div
                    key={index}
                    className="group rounded-lg border border-border bg-muted/50 p-4 hover:shadow-lg transition-all cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div className="text-2xl font-bold gradient-gold-text group-hover:scale-110 transition-transform">{reward.xp}</div>
                    <div className="text-sm text-muted-foreground">{reward.action}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}