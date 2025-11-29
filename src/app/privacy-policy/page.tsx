"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useTranslations } from "@/lib/LanguageContext";

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacyPolicy');

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
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
                whileHover={{ scale: 1.05 }}
              >
                🔒 {t('lastUpdated')}: 2025-01-01
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
              {/* Section 1 */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section1_title')}</h2>
                <p className="text-muted-foreground mb-4">{t('section1_content')}</p>
                <ul className="space-y-2">
                  {['section1_item1', 'section1_item2', 'section1_item3', 'section1_item4', 'section1_item5', 'section1_item6'].map((key, index) => (
                    <motion.li
                      key={key}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-muted-foreground">{t(key)}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Section 2 */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section2_title')}</h2>
                <p className="text-muted-foreground mb-4">{t('section2_content')}</p>
                <ul className="space-y-2">
                  {['section2_item1', 'section2_item2', 'section2_item3', 'section2_item4', 'section2_item5', 'section2_item6', 'section2_item7'].map((key, index) => (
                    <motion.li
                      key={key}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-muted-foreground">{t(key)}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section3_title')}</h2>
                <p className="text-muted-foreground mb-4">{t('section3_content')}</p>
                <ul className="space-y-2">
                  {['section3_item1', 'section3_item2', 'section3_item3', 'section3_item4'].map((key, index) => (
                    <motion.li
                      key={key}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-muted-foreground">{t(key)}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Section 4 */}
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
                    🔐
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section4_title')}</h2>
                    <p className="text-muted-foreground">{t('section4_content')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Section 5 */}
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
                    🗄️
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section5_title')}</h2>
                    <p className="text-muted-foreground">{t('section5_content')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Section 6 */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section6_title')}</h2>
                <p className="text-muted-foreground mb-4">{t('section6_content')}</p>
                <ul className="space-y-2">
                  {['section6_item1', 'section6_item2', 'section6_item3', 'section6_item4', 'section6_item5', 'section6_item6'].map((key, index) => (
                    <motion.li
                      key={key}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-muted-foreground">{t(key)}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Section 7 */}
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
                    👶
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section7_title')}</h2>
                    <p className="text-muted-foreground">{t('section7_content')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Section 8 */}
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
                    📝
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section8_title')}</h2>
                    <p className="text-muted-foreground">{t('section8_content')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Section 9 - Contact */}
              <motion.div
                className="rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-12 text-center shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full gradient-gold shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <span className="text-3xl">📧</span>
                </motion.div>
                <h2 className="text-2xl font-bold mb-4 gradient-gold-text">{t('section9_title')}</h2>
                <p className="text-muted-foreground mb-6">{t('section9_content')}</p>
                <motion.a
                  href={`mailto:${t('contact_email')}`}
                  className="inline-flex h-12 items-center justify-center rounded-lg gradient-gold px-8 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('contact_email')}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
