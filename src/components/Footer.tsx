import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-gold">
                <span className="text-2xl font-bold text-white">H</span>
              </div>
              <span className="text-xl font-bold gradient-gold-text">HABİZEN</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Build lasting habits and achieve your goals through challenges and community.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/challenges" className="hover:text-foreground transition-colors">Challenges</Link></li>
              <li><Link href="/badges" className="hover:text-foreground transition-colors">Badges</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">Download</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">iOS App</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Android App</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 HABİZEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
