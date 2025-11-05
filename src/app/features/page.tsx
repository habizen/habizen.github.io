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