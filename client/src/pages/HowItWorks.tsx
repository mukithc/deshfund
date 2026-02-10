import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { 
  FileText, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Target,
  Handshake,
  BarChart
} from "lucide-react";
import { Link } from "wouter";

/* Bangladesh Heritage Fusion Design - How It Works Page */

export default function HowItWorks() {
  const entrepreneurSteps = [
    {
      icon: Lightbulb,
      title: "Create Your Campaign",
      description: "Share your business idea, vision, and funding goals. Tell your story with compelling text, images, and videos that showcase your passion and potential.",
    },
    {
      icon: FileText,
      title: "Submit for Review",
      description: "Our team reviews your campaign to ensure quality and compliance. We provide feedback and guidance to help you create the most effective pitch.",
    },
    {
      icon: Target,
      title: "Launch & Promote",
      description: "Once approved, your campaign goes live. Share it with your network, engage with potential investors, and build momentum toward your funding goal.",
    },
    {
      icon: TrendingUp,
      title: "Receive Funding",
      description: "As investors contribute, funds are securely held until your campaign succeeds. Once you reach your goal, receive the funds to grow your business.",
    },
  ];

  const investorSteps = [
    {
      icon: Users,
      title: "Browse Campaigns",
      description: "Explore diverse investment opportunities across technology, agriculture, social enterprises, and more. Use filters to find campaigns that match your interests.",
    },
    {
      icon: BarChart,
      title: "Analyze Opportunities",
      description: "Review detailed campaign information, financial projections, and AI-powered risk assessments. Make informed decisions with comprehensive data.",
    },
    {
      icon: Handshake,
      title: "Invest Securely",
      description: "Choose your investment amount and complete the transaction through secure payment methods including bKash, Nagad, Rocket, or international cards.",
    },
    {
      icon: CheckCircle,
      title: "Track Progress",
      description: "Monitor your investments through your dashboard. Receive updates from entrepreneurs and watch your portfolio grow as businesses succeed.",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "All transactions are encrypted and secure. We maintain full transparency with regular updates and clear communication between entrepreneurs and investors.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a thriving community of entrepreneurs and investors building Bangladesh's future. Network, learn, and grow together.",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence for personalized campaign recommendations, risk assessment, and fraud detection to make smarter investment decisions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
              How DeshFund Works
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              DeshFund connects entrepreneurs with investors through a simple, transparent, and secure crowdfunding process. Whether you're raising capital or seeking investment opportunities, we make it easy.
            </p>
          </div>
        </section>

        {/* For Entrepreneurs */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                For Entrepreneurs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Turn your business idea into reality by raising capital from investors who believe in your vision
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {entrepreneurSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-xl font-display font-bold text-secondary-foreground">
                          {index + 1}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-display">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/start-campaign">
                <Button size="lg" className="font-accent">
                  Start Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* For Investors */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                For Investors
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover and invest in promising businesses while supporting Bangladesh's entrepreneurial ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {investorSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                        <step.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xl font-display font-bold text-primary-foreground">
                          {index + 1}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-display">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/campaigns">
                <Button size="lg" className="font-accent">
                  Browse Campaigns
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                Why Choose DeshFund
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built specifically for Bangladesh with features that matter most to our community
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-display">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                Flexible Payment Options
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Invest using your preferred payment method
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {["bKash", "Nagad", "Rocket", "Credit Cards"].map((method, index) => (
                <div key={index} className="flex items-center justify-center p-6 bg-muted rounded-lg">
                  <span className="text-lg font-accent font-semibold text-foreground">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container">
            <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Join thousands of entrepreneurs and investors building Bangladesh's future together
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/register">
                    <Button size="lg" variant="secondary" className="font-accent">
                      Create Account
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/campaigns">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="font-accent bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      Explore Campaigns
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
