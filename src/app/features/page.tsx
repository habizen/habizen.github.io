import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted/30 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Powerful Features for <span className="gradient-gold-text">Lasting Change</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to build habits, achieve goals, and stay motivated
              </p>
            </div>
          </div>
        </section>

        {/* Challenge System */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                  🏆 Challenge System
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  30, 60, & 90-Day Challenges
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Choose your timeframe and commit to lasting change. Whether you're building a new habit or breaking an old one, our flexible challenge system adapts to your goals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">Choose from personal or group challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">Set public or private visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">Create custom challenges or use templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">Track progress with visual calendars</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="space-y-4">
                  <div className="rounded-lg border border-border bg-muted/50 p-6">
                    <div className="mb-2 text-sm text-muted-foreground">30-Day Challenge</div>
                    <div className="text-2xl font-bold">Quick Start</div>
                    <div className="mt-4 h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-3/4 rounded-full gradient-gold"></div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">22/30 days completed</div>
                  </div>
                  <div className="rounded-lg border border-border bg-muted/50 p-6">
                    <div className="mb-2 text-sm text-muted-foreground">60-Day Challenge</div>
                    <div className="text-2xl font-bold">Build Momentum</div>
                    <div className="mt-4 h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-1/2 rounded-full gradient-gold"></div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">30/60 days completed</div>
                  </div>
                  <div className="rounded-lg border border-border bg-muted/50 p-6">
                    <div className="mb-2 text-sm text-muted-foreground">90-Day Challenge</div>
                    <div className="text-2xl font-bold">Transform</div>
                    <div className="mt-4 h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-1/3 rounded-full gradient-gold"></div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">30/90 days completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Badge System */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <div className="text-4xl mb-2">🏆</div>
                    <div className="text-sm font-medium mb-1">Achievement</div>
                    <div className="text-xs text-muted-foreground">40 badges</div>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <div className="text-4xl mb-2">⭐</div>
                    <div className="text-sm font-medium mb-1">Level</div>
                    <div className="text-xs text-muted-foreground">16 badges</div>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <div className="text-4xl mb-2">🔥</div>
                    <div className="text-sm font-medium mb-1">Streak</div>
                    <div className="text-xs text-muted-foreground">22 badges</div>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <div className="text-4xl mb-2">👥</div>
                    <div className="text-sm font-medium mb-1">Social</div>
                    <div className="text-xs text-muted-foreground">13 badges</div>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <div className="text-4xl mb-2">💎</div>
                    <div className="text-sm font-medium mb-1">Special</div>
                    <div className="text-xs text-muted-foreground">25 badges</div>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <div className="text-4xl mb-2">🐛</div>
                    <div className="text-sm font-medium mb-1">Bug Hunter</div>
                    <div className="text-xs text-muted-foreground">10 badges</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
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
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">6 badge categories with unique designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">Meta badges for collecting badge sets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">Gold-exclusive premium badges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">Real-time progress tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Check-in System */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                ✅ Check-in System
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Prove Your Progress Daily
              </h2>
              <p className="text-lg text-muted-foreground">
                Upload photos to document your journey. Build accountability through visual proof and admin verification.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-gold">
                  <span className="text-3xl">📸</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Photo Upload</h3>
                <p className="text-muted-foreground">Capture and share your daily progress with the community</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-gold">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Streak Tracking</h3>
                <p className="text-muted-foreground">Build momentum with consecutive daily check-ins</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-gold">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Admin Review</h3>
                <p className="text-muted-foreground">Quality assurance through manual verification</p>
              </div>
            </div>
          </div>
        </section>

        {/* Friends & Social */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
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
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">Send and receive friend requests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">View friend activity feeds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">Compete on leaderboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">Invite friends to challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full gradient-gold text-xs text-white">✓</div>
                    <span className="text-muted-foreground">Smart friend suggestions</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b border-border">
                      <div className="h-10 w-10 rounded-full gradient-gold flex items-center justify-center text-white font-semibold">JD</div>
                      <div className="flex-1">
                        <div className="font-medium">John completed a challenge</div>
                        <div className="text-sm text-muted-foreground">2 hours ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pb-4 border-b border-border">
                      <div className="h-10 w-10 rounded-full gradient-gold flex items-center justify-center text-white font-semibold">SM</div>
                      <div className="flex-1">
                        <div className="font-medium">Sarah earned a new badge</div>
                        <div className="text-sm text-muted-foreground">5 hours ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full gradient-gold flex items-center justify-center text-white font-semibold">MK</div>
                      <div className="flex-1">
                        <div className="font-medium">Mike reached level 10</div>
                        <div className="text-sm text-muted-foreground">1 day ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* XP & Leveling */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                ⭐ XP & Leveling
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Level Up Your Life
              </h2>
              <p className="text-lg text-muted-foreground">
                Gain experience points for every action and watch yourself grow. Unlock new features and rewards as you level up.
              </p>
            </div>
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl font-bold">Level 15</div>
                  <div className="text-sm text-muted-foreground">2,450 / 3,000 XP</div>
                </div>
                <div className="h-4 w-full rounded-full bg-muted">
                  <div className="h-full w-4/5 rounded-full gradient-gold"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <div className="text-2xl font-bold gradient-gold-text">+10 XP</div>
                  <div className="text-sm text-muted-foreground">Daily check-in</div>
                </div>
                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <div className="text-2xl font-bold gradient-gold-text">+50 XP</div>
                  <div className="text-sm text-muted-foreground">Complete challenge</div>
                </div>
                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <div className="text-2xl font-bold gradient-gold-text">+25 XP</div>
                  <div className="text-sm text-muted-foreground">Earn badge</div>
                </div>
                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <div className="text-2xl font-bold gradient-gold-text">+5 XP</div>
                  <div className="text-sm text-muted-foreground">Add friend</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
