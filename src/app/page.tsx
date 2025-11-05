"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden">
        {/* Hero Section with Parallax */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background pt-20 pb-32">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
              animate={{
                x: mousePosition.x * 0.02,
                y: mousePosition.y * 0.02,
              }}
              transition={{ type: "spring", stiffness: 50 }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
              animate={{
                x: mousePosition.x * -0.015,
                y: mousePosition.y * -0.015,
              }}
              transition={{ type: "spring", stiffness: 50 }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-2 text-sm shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                126+ Badges • XP System • Social Features
              </motion.div>
              
              <motion.h1
                className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Build Habits,<br />
                <span className="gradient-gold-text">Achieve Goals</span>
              </motion.h1>
              
              <motion.p
                className="mb-8 text-xl text-muted-foreground sm:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Join the gamified challenge platform where every check-in counts. 
                Track progress, earn badges, and compete with friends through 30/60/90-day challenges.
              </motion.p>
              
              <motion.div
                className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.button
                  className="group inline-flex h-12 items-center justify-center rounded-lg gradient-gold px-8 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Start Your Journey</span>
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </motion.button>
                <Link href="/features">
                  <motion.div
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card/50 backdrop-blur-sm px-8 text-base font-semibold transition-all hover:bg-accent hover:shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Features
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Animated Stats */}
            <motion.div
              className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {[
                { value: "126+", label: "Unique Badges" },
                { value: "16", label: "Categories" },
                { value: "3", label: "Challenge Types" },
                { value: "∞", label: "Possibilities" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="text-4xl font-bold gradient-gold-text group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating Badge Elements */}
          <motion.div
            className="absolute top-1/4 left-[10%] text-4xl opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🏆
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-[15%] text-3xl opacity-20"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            🏅
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 left-[20%] text-3xl opacity-20"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            ⭐
          </motion.div>
        </section>

        {/* Features Overview with Scroll Animations */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="mx-auto max-w-2xl text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-lg text-muted-foreground">
                A complete gamification platform designed to keep you motivated
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "🏆",
                  title: "Challenge System",
                  description: "Choose from 30, 60, or 90-day challenges across 16 categories. Track your progress daily with photo check-ins."
                },
                {
                  icon: "🏅",
                  title: "Badge Collection",
                  description: "Earn from 126+ unique badges across 6 types: achievement, level, streak, social, special, and bug hunter."
                },
                {
                  icon: "⭐",
                  title: "XP & Leveling",
                  description: "Gain experience points for every action. Level up your profile and unlock exclusive rewards as you progress."
                },
                {
                  icon: "👥",
                  title: "Social Features",
                  description: "Connect with friends, see their activities, compete on leaderboards, and invite them to join your challenges."
                },
                {
                  icon: "✅",
                  title: "Daily Check-ins",
                  description: "Upload photos to prove your progress. Build consistency with streak tracking and earn bonus rewards."
                },
                {
                  icon: "🔔",
                  title: "Smart Notifications",
                  description: "Stay on track with timely reminders, friend activity updates, badge unlocks, and milestone celebrations."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-2xl hover:border-primary/50 cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Background Gradient on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                  
                  <motion.div
                    className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-gold shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </motion.div>
                  <h3 className="relative mb-3 text-xl font-semibold group-hover:gradient-gold-text transition-all">
                    {feature.title}
                  </h3>
                  <p className="relative text-muted-foreground">
                    {feature.description}
                  </p>
                  
                  {/* Arrow indicator on hover */}
                  <motion.div
                    className="absolute bottom-8 right-8 text-primary opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    →
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Glassmorphism */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
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
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Ready to Transform Your Life?
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Start your first challenge today and join thousands building better habits
              </motion.p>
              <motion.div
                className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  className="group inline-flex h-12 items-center justify-center rounded-lg gradient-gold px-8 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">📱</span>
                  Download for iOS
                </motion.button>
                <motion.button
                  className="group inline-flex h-12 items-center justify-center rounded-lg gradient-gold px-8 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">🤖</span>
                  Download for Android
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}