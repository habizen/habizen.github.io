"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const categories = [
  { id: 1, name: "Health", icon: "🏥", color: "from-red-500 to-pink-500", count: 24 },
  { id: 2, name: "Sports", icon: "⚽", color: "from-blue-500 to-cyan-500", count: 32 },
  { id: 3, name: "Education", icon: "📚", color: "from-purple-500 to-indigo-500", count: 18 },
  { id: 4, name: "Nutrition", icon: "🥗", color: "from-green-500 to-emerald-500", count: 21 },
  { id: 5, name: "Mindfulness", icon: "🧘", color: "from-violet-500 to-purple-500", count: 15 },
  { id: 6, name: "Productivity", icon: "💼", color: "from-orange-500 to-amber-500", count: 27 },
  { id: 7, name: "Creativity", icon: "🎨", color: "from-pink-500 to-rose-500", count: 19 },
  { id: 8, name: "Finance", icon: "💰", color: "from-yellow-500 to-orange-500", count: 12 },
  { id: 9, name: "Social", icon: "👥", color: "from-cyan-500 to-blue-500", count: 16 },
  { id: 10, name: "Environment", icon: "🌱", color: "from-emerald-500 to-green-500", count: 14 },
  { id: 11, name: "Technology", icon: "💻", color: "from-indigo-500 to-blue-500", count: 22 },
  { id: 12, name: "Language", icon: "🗣️", color: "from-red-500 to-orange-500", count: 13 },
  { id: 13, name: "Music", icon: "🎵", color: "from-purple-500 to-pink-500", count: 11 },
  { id: 14, name: "Reading", icon: "📖", color: "from-amber-500 to-yellow-500", count: 17 },
  { id: 15, name: "Sleep", icon: "😴", color: "from-blue-500 to-indigo-500", count: 9 },
  { id: 16, name: "Career", icon: "🚀", color: "from-teal-500 to-cyan-500", count: 20 },
];

const exampleChallenges = [
  { 
    title: "30-Day Morning Routine", 
    category: "Health", 
    duration: "30 days", 
    participants: 1234,
    difficulty: "Beginner"
  },
  { 
    title: "60-Day Fitness Transformation", 
    category: "Sports", 
    duration: "60 days", 
    participants: 856,
    difficulty: "Intermediate"
  },
  { 
    title: "90-Day Learning Journey", 
    category: "Education", 
    duration: "90 days", 
    participants: 542,
    difficulty: "Advanced"
  },
  { 
    title: "30-Day Plant-Based Diet", 
    category: "Nutrition", 
    duration: "30 days", 
    participants: 723,
    difficulty: "Beginner"
  },
  { 
    title: "60-Day Meditation Practice", 
    category: "Mindfulness", 
    duration: "60 days", 
    participants: 445,
    difficulty: "Beginner"
  },
  { 
    title: "30-Day Side Project Sprint", 
    category: "Productivity", 
    duration: "30 days", 
    participants: 981,
    difficulty: "Intermediate"
  },
];

export default function ChallengesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background via-muted/20 to-background pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
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
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Discover Your Next <span className="gradient-gold-text">Challenge</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose from hundreds of challenges across 16 categories. Start your transformation today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-muted-foreground">
                16 diverse categories to match your goals and interests
              </p>
            </motion.div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="relative z-10">
                    <motion.div
                      className="mb-4 text-5xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="mb-2 text-xl font-semibold group-hover:gradient-gold-text transition-all">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} active challenges
                    </p>
                  </div>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    initial={false}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge Types */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
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
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Choose Your Duration
              </h2>
              <p className="text-lg text-muted-foreground">
                Pick the timeframe that works best for your goals
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  days: 30,
                  title: "30-Day Challenges",
                  desc: "Perfect for building new habits and testing the waters. Quick wins to build momentum.",
                  features: ["Beginner-friendly", "Fast results", "Low commitment"],
                  highlight: false
                },
                {
                  days: 60,
                  title: "60-Day Challenges",
                  desc: "The sweet spot for lasting change. Enough time to form solid habits and see real progress.",
                  features: ["Balanced difficulty", "Sustainable change", "Proven timeframe"],
                  highlight: true
                },
                {
                  days: 90,
                  title: "90-Day Challenges",
                  desc: "For serious transformations. Build deep-rooted habits that last a lifetime.",
                  features: ["Expert level", "Life-changing results", "Maximum impact"],
                  highlight: false
                }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  className={`rounded-2xl bg-card p-8 relative ${
                    challenge.highlight ? "border-2 border-primary shadow-2xl" : "border border-border"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {challenge.highlight && (
                    <motion.div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-gold px-4 py-1 text-xs font-semibold text-white shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      MOST POPULAR
                    </motion.div>
                  )}
                  <motion.div
                    className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl gradient-gold shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-3xl font-bold text-white">{challenge.days}</span>
                  </motion.div>
                  <h3 className="mb-3 text-2xl font-bold">{challenge.title}</h3>
                  <p className="mb-6 text-muted-foreground">
                    {challenge.desc}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {challenge.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Challenges */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Popular Challenges
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of others on their journey
              </p>
            </motion.div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {exampleChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-2xl hover:border-primary/50 cursor-pointer overflow-hidden relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center justify-between">
                      <motion.span
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        whileHover={{ scale: 1.05 }}
                      >
                        {challenge.category}
                      </motion.span>
                      <span className="text-xs text-muted-foreground">
                        {challenge.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="mb-3 text-xl font-semibold group-hover:gradient-gold-text transition-all">
                      {challenge.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <span>⏱️</span>
                        <span>{challenge.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>👥</span>
                        <span>{challenge.participants.toLocaleString()} joined</span>
                      </div>
                    </div>
                    
                    <motion.button
                      className="mt-6 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-all hover:bg-accent hover:shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Challenge
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Create Your Own Challenge
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Don't see what you're looking for? Start a custom challenge and invite friends to join you.
              </p>
              <motion.button
                className="inline-flex h-12 items-center justify-center rounded-lg gradient-gold px-8 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Create Challenge
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}