import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-accent font-semibold text-xl">DF</span>
              </div>
              <span className="text-2xl font-display font-bold">DeshFund</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering Bangladesh's entrepreneurs and connecting them with investors who believe in their vision.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-accent font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/campaigns"><a className="hover:text-primary transition-colors">Browse Campaigns</a></Link></li>
              <li><Link href="/how-it-works"><a className="hover:text-primary transition-colors">How It Works</a></Link></li>
              <li><Link href="/start-campaign"><a className="hover:text-primary transition-colors">Start a Campaign</a></Link></li>
              <li><Link href="/invest"><a className="hover:text-primary transition-colors">Invest</a></Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-accent font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
              <li><Link href="/team"><a className="hover:text-primary transition-colors">Team</a></Link></li>
              <li><Link href="/careers"><a className="hover:text-primary transition-colors">Careers</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-accent font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy"><a className="hover:text-primary transition-colors">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="hover:text-primary transition-colors">Terms of Service</a></Link></li>
              <li><Link href="/security"><a className="hover:text-primary transition-colors">Security</a></Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DeshFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
