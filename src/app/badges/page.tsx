import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <section className="bg-gradient-to-b from-background to-muted/30 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Collect <span className="gradient-gold-text">126+ Unique Badges</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Every achievement deserves recognition. Track your progress and build your collection.
              </p>
              
              <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-card px-8 py-6">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-gold-text">24</div>
                  <div className="text-sm text-muted-foreground">Earned</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-muted-foreground">126</div>
                  <div className="text-sm text-muted-foreground">Total</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-gold-text">19%</div>
                  <div className="text-sm text-muted-foreground">Progress</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Badge Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                6 Badge Categories
              </h2>
              <p className="text-lg text-muted-foreground">
                Diverse ways to earn recognition for your efforts
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {badgeTypes.map((badgeType) => (
                <div
                  key={badgeType.id}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl"
                >
                  <div className="relative z-10 p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-5xl">{badgeType.icon}</div>
                      <div className="rounded-full bg-muted px-3 py-1 text-sm font-semibold">
                        {badgeType.count} badges
                      </div>
                    </div>
                    
                    <h3 className="mb-3 text-2xl font-bold">{badgeType.type}</h3>
                    <p className="mb-6 text-muted-foreground">
                      {badgeType.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="text-sm font-semibold mb-2">Examples:</div>
                      {badgeType.examples.map((example, index) => (
                        <div key={index} className="rounded-lg bg-muted/50 p-3">
                          <div className="font-medium text-sm">{example.name}</div>
                          <div className="text-xs text-muted-foreground mt-1">{example.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${badgeType.color} opacity-0 transition-opacity group-hover:opacity-5`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meta Badges */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                  👑 Meta Badges
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Ultimate Collection Rewards
                </h2>
                <p className="text-lg text-muted-foreground">
                  Special badges for the most dedicated collectors
                </p>
              </div>
              
              <div className="space-y-6">
                {metaBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-border bg-card p-8"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl gradient-gold text-4xl">
                        {badge.icon}
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-2xl font-bold">{badge.name}</h3>
                          <span className="text-lg font-semibold text-muted-foreground">
                            {badge.progress}/{badge.total}
                          </span>
                        </div>
                        <p className="mb-4 text-muted-foreground">{badge.description}</p>
                        <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
                          <div 
                            className="h-full gradient-gold transition-all duration-500"
                            style={{ width: `${(badge.progress / badge.total) * 100}%` }}
                          ></div>
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">
                          {Math.round((badge.progress / badge.total) * 100)}% complete
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Badge Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Why Collect Badges?
              </h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-gold">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Track Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Visual representation of your achievements
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-gold">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Stay Motivated</h3>
                <p className="text-sm text-muted-foreground">
                  New goals to work towards daily
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-gold">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Show Off</h3>
                <p className="text-sm text-muted-foreground">
                  Display your collection on your profile
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-gold">
                  <span className="text-3xl">🎁</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Unlock Rewards</h3>
                <p className="text-sm text-muted-foreground">
                  Special perks for rare badges
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Badges CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full gradient-gold">
                <span className="text-4xl">👑</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Unlock Gold Badges
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Upgrade to Gold membership and get access to exclusive premium badges
              </p>
              <button className="inline-flex h-12 items-center justify-center rounded-lg gradient-gold px-8 text-base font-semibold text-white transition-opacity hover:opacity-90">
                Upgrade to Gold
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
