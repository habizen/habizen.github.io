import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-gold">
            <span className="text-2xl font-bold text-white">H</span>
          </div>
          <span className="text-xl font-bold gradient-gold-text">HABİZEN</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="/challenges" className="text-sm font-medium transition-colors hover:text-primary">
            Challenges
          </Link>
          <Link href="/badges" className="text-sm font-medium transition-colors hover:text-primary">
            Badges
          </Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <button className="hidden sm:inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
            Sign In
          </button>
          <button className="inline-flex h-9 items-center justify-center rounded-md gradient-gold px-4 text-sm font-medium text-white transition-opacity hover:opacity-90">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}