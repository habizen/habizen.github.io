"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useTranslations } from "@/lib/LanguageContext";

export default function KVKKPage() {
  const t = useTranslations('kvkk');

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background via-muted/20 to-background pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
              animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
                whileHover={{ scale: 1.05 }}
              >
                🛡️ {t('lastUpdated')}: 2025-01-01
              </motion.div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="gradient-gold-text">{t('title')}</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('intro')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Section 1 - Data Controller */}
              <motion.div
                className="mb-12 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    🏢
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section1_title')}</h2>
                    <p className="text-muted-foreground">{t('section1_content')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Section 2 - Legal Basis */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section2_title')}</h2>
                <p className="text-muted-foreground mb-4">{t('section2_content')}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  {['section2_item1', 'section2_item2', 'section2_item3', 'section2_item4'].map((key, index) => (
                    <motion.div
                      key={key}
                      className="rounded-xl border border-border bg-card/30 p-6 hover:shadow-lg transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full gradient-gold text-xs text-white flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{t(key)}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Section 3 - Your Rights */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section3_title')}</h2>
                <p className="text-muted-foreground mb-6">{t('section3_content')}</p>
                <div className="space-y-4">
                  {['section3_item1', 'section3_item2', 'section3_item3', 'section3_item4', 'section3_item5', 'section3_item6', 'section3_item7'].map((key, index) => (
                    <motion.div
                      key={key}
                      className="rounded-xl border border-border bg-card/30 p-6 hover:shadow-lg transition-all cursor-pointer"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="flex h-10 w-10 items-center justify-center rounded-lg gradient-gold text-white font-bold"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {index + 1}
                        </motion.div>
                        <span className="text-muted-foreground flex-1">{t(key)}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Section 4 - International Transfers */}
              <motion.div
                className="mb-12 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    🌍
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section4_title')}</h2>
                    <p className="text-muted-foreground">{t('section4_content')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Section 5 - DPO Contact */}
              <motion.div
                className="mb-12 rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-8 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-full gradient-gold shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <span className="text-4xl">👤</span>
                  </motion.div>
                  <div className="text-center md:text-left flex-1">
                    <h2 className="text-2xl font-bold mb-2 gradient-gold-text">{t('section5_title')}</h2>
                    <p className="text-muted-foreground mb-4">{t('section5_content')}</p>
                    <motion.a
                      href={`mailto:${t('contact_email')}`}
                      className="inline-flex h-10 items-center justify-center rounded-lg gradient-gold px-6 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t('contact_email')}
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Section 6 - Supervisory Authority */}
              <motion.div
                className="mb-12 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    ⚖️
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section6_title')}</h2>
                    <p className="text-muted-foreground">{t('section6_content')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Section 7 - Cookies */}
              <motion.div
                className="mb-12 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    🍪
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section7_title')}</h2>
                    <p className="text-muted-foreground">{t('section7_content')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Section 8 - Data Breach */}
              <motion.div
                className="mb-12 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    🚨
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section8_title')}</h2>
                    <p className="text-muted-foreground">{t('section8_content')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-12 text-center shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 gradient-gold-text">Your Data, Protected</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { icon: "🔒", label: "Encrypted" },
                    { icon: "🛡️", label: "Secured" },
                    { icon: "✅", label: "Compliant" },
                    { icon: "🌐", label: "Global Standards" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className="text-4xl mb-2"
                        whileHover={{ rotate: 10 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
