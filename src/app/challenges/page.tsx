import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <section className="bg-gradient-to-b from-background to-muted/30 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Discover Your Next <span className="gradient-gold-text">Challenge</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose from hundreds of challenges across 16 categories. Start your transformation today.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-muted-foreground">
                16 diverse categories to match your goals and interests
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative z-10">
                    <div className="mb-4 text-5xl">{category.icon}</div>
                    <h3 className="mb-2 text-xl font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} active challenges
                    </p>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-5`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge Types */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Choose Your Duration
              </h2>
              <p className="text-lg text-muted-foreground">
                Pick the timeframe that works best for your goals
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl gradient-gold">
                  <span className="text-3xl font-bold text-white">30</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold">30-Day Challenges</h3>
                <p className="mb-6 text-muted-foreground">
                  Perfect for building new habits and testing the waters. Quick wins to build momentum.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Beginner-friendly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Fast results</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Low commitment</span>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-2xl border-2 border-primary bg-card p-8 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-gold px-4 py-1 text-xs font-semibold text-white">
                  MOST POPULAR
                </div>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl gradient-gold">
                  <span className="text-3xl font-bold text-white">60</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold">60-Day Challenges</h3>
                <p className="mb-6 text-muted-foreground">
                  The sweet spot for lasting change. Enough time to form solid habits and see real progress.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Balanced difficulty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Sustainable change</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Proven timeframe</span>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl gradient-gold">
                  <span className="text-3xl font-bold text-white">90</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold">90-Day Challenges</h3>
                <p className="mb-6 text-muted-foreground">
                  For serious transformations. Build deep-rooted habits that last a lifetime.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Expert level</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Life-changing results</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Maximum impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Example Challenges */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Popular Challenges
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of others on their journey
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {exampleChallenges.map((challenge, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {challenge.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {challenge.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-semibold group-hover:text-primary transition-colors">
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
                  
                  <button className="mt-6 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent">
                    View Challenge
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Create Your Own Challenge
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Don't see what you're looking for? Start a custom challenge and invite friends to join you.
              </p>
              <button className="inline-flex h-12 items-center justify-center rounded-lg gradient-gold px-8 text-base font-semibold text-white transition-opacity hover:opacity-90">
                Create Challenge
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
