import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-20 pb-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                126+ Badges • XP System • Social Features
              </div>
              
              <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Build Habits,<br />
                <span className="gradient-gold-text">Achieve Goals</span>
              </h1>
              
              <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
                Join the gamified challenge platform where every check-in counts. 
                Track progress, earn badges, and compete with friends through 30/60/90-day challenges.
              </p>
              
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <button className="inline-flex h-12 items-center justify-center rounded-lg gradient-gold px-8 text-base font-semibold text-white transition-opacity hover:opacity-90">
                  Start Your Journey
                </button>
                <Link href="/features" className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-8 text-base font-semibold transition-colors hover:bg-accent">
                  Explore Features
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-gold-text">126+</div>
                <div className="mt-2 text-sm text-muted-foreground">Unique Badges</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-gold-text">16</div>
                <div className="mt-2 text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-gold-text">3</div>
                <div className="mt-2 text-sm text-muted-foreground">Challenge Types</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-gold-text">∞</div>
                <div className="mt-2 text-sm text-muted-foreground">Possibilities</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-lg text-muted-foreground">
                A complete gamification platform designed to keep you motivated
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-gold">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Challenge System</h3>
                <p className="text-muted-foreground">
                  Choose from 30, 60, or 90-day challenges across 16 categories. Track your progress daily with photo check-ins.
                </p>
              </div>
              
              <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-gold">
                  <span className="text-2xl">🏅</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Badge Collection</h3>
                <p className="text-muted-foreground">
                  Earn from 126+ unique badges across 6 types: achievement, level, streak, social, special, and bug hunter.
                </p>
              </div>
              
              <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-gold">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">XP & Leveling</h3>
                <p className="text-muted-foreground">
                  Gain experience points for every action. Level up your profile and unlock exclusive rewards as you progress.
                </p>
              </div>
              
              <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-gold">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Social Features</h3>
                <p className="text-muted-foreground">
                  Connect with friends, see their activities, compete on leaderboards, and invite them to join your challenges.
                </p>
              </div>
              
              <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-gold">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Daily Check-ins</h3>
                <p className="text-muted-foreground">
                  Upload photos to prove your progress. Build consistency with streak tracking and earn bonus rewards.
                </p>
              </div>
              
              <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-gold">
                  <span className="text-2xl">🔔</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Smart Notifications</h3>
                <p className="text-muted-foreground">
                  Stay on track with timely reminders, friend activity updates, badge unlocks, and milestone celebrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to Transform Your Life?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start your first challenge today and join thousands building better habits
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <button className="inline-flex h-12 items-center justify-center rounded-lg gradient-gold px-8 text-base font-semibold text-white transition-opacity hover:opacity-90">
                  Download for iOS
                </button>
                <button className="inline-flex h-12 items-center justify-center rounded-lg gradient-gold px-8 text-base font-semibold text-white transition-opacity hover:opacity-90">
                  Download for Android
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}