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
              <li><Link href="/campaigns"><span className="hover:text-primary transition-colors cursor-pointer">Browse Campaigns</span></Link></li>
              <li><Link href="/how-it-works"><span className="hover:text-primary transition-colors cursor-pointer">How It Works</span></Link></li>
              <li><Link href="/start-campaign"><span className="hover:text-primary transition-colors cursor-pointer">Start a Campaign</span></Link></li>
              <li><Link href="/invest"><span className="hover:text-primary transition-colors cursor-pointer">Invest</span></Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-accent font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">About Us</span></Link></li>
              <li><Link href="/team"><span className="hover:text-primary transition-colors cursor-pointer">Team</span></Link></li>
              <li><Link href="/careers"><span className="hover:text-primary transition-colors cursor-pointer">Careers</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-accent font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy"><span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span></Link></li>
              <li><Link href="/terms"><span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span></Link></li>
              <li><Link href="/security"><span className="hover:text-primary transition-colors cursor-pointer">Security</span></Link></li>
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
