"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const badgeTypes = [
  {
    id: 1,
    type: "Achievement",
    icon: "🏆",
    count: 40,
    color: "from-yellow-500 to-orange-500",
    description: "Earned by completing challenges and reaching milestones",
    examples: [
      { name: "First Steps", desc: "Complete your first challenge" },
      { name: "Marathon Runner", desc: "Complete 10 challenges" },
      { name: "Century Club", desc: "Complete 100 check-ins" },
    ]
  },
  {
    id: 2,
    type: "Level",
    icon: "⭐",
    count: 16,
    color: "from-blue-500 to-cyan-500",
    description: "Unlock as you level up your profile through XP gains",
    examples: [
      { name: "Novice", desc: "Reach Level 5" },
      { name: "Expert", desc: "Reach Level 10" },
      { name: "Master", desc: "Reach Level 15" },
    ]
  },
  {
    id: 3,
    type: "Streak",
    icon: "🔥",
    count: 22,
    color: "from-orange-500 to-red-500",
    description: "Awarded for maintaining consistency with daily check-ins",
    examples: [
      { name: "Week Warrior", desc: "7-day check-in streak" },
      { name: "Month Master", desc: "30-day check-in streak" },
      { name: "Unstoppable", desc: "100-day check-in streak" },
    ]
  },
  {
    id: 4,
    type: "Social",
    icon: "👥",
    count: 13,
    color: "from-purple-500 to-pink-500",
    description: "Earned through friend interactions and community engagement",
    examples: [
      { name: "Friendly", desc: "Add 5 friends" },
      { name: "Social Butterfly", desc: "Add 25 friends" },
      { name: "Team Player", desc: "Join 5 group challenges" },
    ]
  },
  {
    id: 5,
    type: "Special",
    icon: "💎",
    count: 25,
    color: "from-indigo-500 to-purple-500",
    description: "Rare badges for unique achievements and special events",
    examples: [
      { name: "Early Adopter", desc: "Join in the first month" },
      { name: "Perfect Score", desc: "100% completion on a challenge" },
      { name: "Night Owl", desc: "Check-in at midnight" },
    ]
  },
  {
    id: 6,
    type: "Bug Hunter",
    icon: "🐛",
    count: 10,
    color: "from-green-500 to-emerald-500",
    description: "Recognition for helping improve the platform",
    examples: [
      { name: "Spotter", desc: "Report your first bug" },
      { name: "Detective", desc: "Report 5 bugs" },
      { name: "Hero", desc: "Report 10 bugs" },
    ]
  },
];

const metaBadges = [
  {
    name: "Sertifikalı (Certified)",
    description: "Collect 30 unique badges",
    progress: 24,
    total: 30,
    icon: "📜"
  },
  {
    name: "Mezun (Graduate)",
    description: "Collect 60 unique badges",
    progress: 24,
    total: 60,
    icon: "🎓"
  },
  {
    name: "Efsane (Legend)",
    description: "Collect all 126 badges",
    progress: 24,
    total: 126,
    icon: "👑"
  },
];

export default function BadgesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background via-muted/20 to-background pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
              animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
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
                Collect <span className="gradient-gold-text">126+ Unique Badges</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Every achievement deserves recognition. Track your progress and build your collection.
              </p>
              
              <motion.div
                className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-card/50 backdrop-blur-sm px-8 py-6 shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { value: "24", label: "Earned" },
                  { value: "126", label: "Total" },
                  { value: "19%", label: "Progress" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className={`text-4xl font-bold ${index === 0 || index === 2 ? "gradient-gold-text" : "text-muted-foreground"}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    {index < 2 && <div className="h-12 w-px bg-border absolute right-0 top-1/2 -translate-y-1/2" />}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Badge Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                6 Badge Categories
              </h2>
              <p className="text-lg text-muted-foreground">
                Diverse ways to earn recognition for your efforts
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {badgeTypes.map((badgeType, index) => (
                <motion.div
                  key={badgeType.id}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-2xl cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative z-10 p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <motion.div
                        className="text-5xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {badgeType.icon}
                      </motion.div>
                      <motion.div
                        className="rounded-full bg-muted px-3 py-1 text-sm font-semibold"
                        whileHover={{ scale: 1.1 }}
                      >
                        {badgeType.count} badges
                      </motion.div>
                    </div>
                    
                    <h3 className="mb-3 text-2xl font-bold group-hover:gradient-gold-text transition-all">{badgeType.type}</h3>
                    <p className="mb-6 text-muted-foreground">
                      {badgeType.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="text-sm font-semibold mb-2">Examples:</div>
                      {badgeType.examples.map((example, i) => (
                        <motion.div
                          key={i}
                          className="rounded-lg bg-muted/50 p-3 hover:bg-muted transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="font-medium text-sm">{example.name}</div>
                          <div className="text-xs text-muted-foreground mt-1">{example.desc}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${badgeType.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    initial={false}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meta Badges */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-border) 1px, transparent 1px)`,
              backgroundSize: "40px 40px"
            }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-3xl">
              <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  👑 Meta Badges
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Ultimate Collection Rewards
                </h2>
                <p className="text-lg text-muted-foreground">
                  Special badges for the most dedicated collectors
                </p>
              </motion.div>
              
              <div className="space-y-6">
                {metaBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:shadow-2xl transition-all cursor-pointer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="flex h-16 w-16 items-center justify-center rounded-xl gradient-gold text-4xl shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {badge.icon}
                      </motion.div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-2xl font-bold group-hover:gradient-gold-text transition-all">{badge.name}</h3>
                          <span className="text-lg font-semibold text-muted-foreground">
                            {badge.progress}/{badge.total}
                          </span>
                        </div>
                        <p className="mb-4 text-muted-foreground">{badge.description}</p>
                        <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
                          <motion.div 
                            className="h-full gradient-gold"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(badge.progress / badge.total) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          />
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">
                          {Math.round((badge.progress / badge.total) * 100)}% complete
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Badge Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Why Collect Badges?
              </h2>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "🎯", title: "Track Progress", desc: "Visual representation of your achievements" },
                { icon: "⚡", title: "Stay Motivated", desc: "New goals to work towards daily" },
                { icon: "🏆", title: "Show Off", desc: "Display your collection on your profile" },
                { icon: "🎁", title: "Unlock Rewards", desc: "Special perks for rare badges" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group text-center cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-gold shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-3xl">{benefit.icon}</span>
                  </motion.div>
                  <h3 className="mb-2 text-lg font-semibold group-hover:gradient-gold-text transition-all">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Badges CTA */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-border) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              opacity: 0.3,
            }}
            animate={{
              backgroundPosition: ["0px 0px", "40px 40px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="mx-auto max-w-3xl text-center rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-12 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full gradient-gold shadow-xl"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <span className="text-4xl">👑</span>
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Unlock Gold Badges
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Upgrade to Gold membership and get access to exclusive premium badges
              </p>
              <motion.button
                className="inline-flex h-12 items-center justify-center rounded-lg gradient-gold px-8 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Upgrade to Gold
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}