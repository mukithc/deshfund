import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

        {/* Video Tutorial */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                Watch How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get a quick overview of DeshFund's platform in this comprehensive video tutorial
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <video
                    className="absolute inset-0 w-full h-full"
                    controls
                    preload="metadata"
                  >
                    <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663333578426/awgVUXWIsJdxVmUt.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                    Complete Platform Walkthrough
                  </h3>
                  <p className="text-muted-foreground">
                    Learn how to create campaigns, invest in businesses, track your portfolio, and leverage AI-powered insights. This 5-minute tutorial covers everything you need to get started on DeshFund.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about using DeshFund
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                    How do I start investing on DeshFund?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Getting started is simple! First, create a free account by clicking "Get Started" and completing the registration form. Once registered, browse active campaigns, review their details and AI risk assessments, and choose campaigns that align with your interests. You can invest using bKash, Nagad, Rocket, or international credit cards. Your investment will be tracked in your dashboard.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                    What is the minimum investment amount?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The minimum investment amount varies by campaign, but typically starts from ৳5,000 (5 thousand taka). Each campaign sets its own minimum investment threshold based on their funding structure and equity offering. You'll see the minimum amount clearly displayed on each campaign page.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                    How does DeshFund ensure campaign quality and security?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We have a rigorous multi-step verification process. All campaigns undergo manual review by our team to verify business legitimacy, financial projections, and founder credentials. Additionally, our AI-powered fraud detection system analyzes campaign descriptions and patterns to flag suspicious activity. We also provide risk assessments for each campaign to help you make informed decisions. All transactions are encrypted and processed through secure payment gateways.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                    What fees does DeshFund charge?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    For investors, there are no fees to browse campaigns or create an account. We charge a small transaction fee (typically 2-3%) when you make an investment, which covers payment processing costs. For entrepreneurs, we charge a platform fee of 5% on successfully funded campaigns. This fee helps us maintain the platform, provide AI-powered tools, and support the community.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                    How long does it take for a campaign to get funded?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Campaign duration varies, but most campaigns run for 30-60 days. The funding timeline depends on factors like campaign quality, marketing efforts, funding goal size, and investor interest. Our data shows that campaigns with compelling stories, clear financial projections, and active founder engagement tend to reach their goals faster. You can track real-time progress on each campaign page.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                    What happens if a campaign doesn't reach its funding goal?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    DeshFund operates on an "all-or-nothing" model for most campaigns. If a campaign doesn't reach its funding goal by the deadline, all investor funds are automatically refunded to their original payment method within 5-7 business days. This protects both investors and entrepreneurs by ensuring businesses only launch with adequate capital. Some campaigns may offer flexible funding options, which will be clearly indicated on the campaign page.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                    How do I track my investments and returns?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Your personal dashboard provides comprehensive investment tracking. You'll see your total invested amount, current portfolio value, individual campaign performance, and estimated returns. Entrepreneurs are required to provide quarterly updates on business progress, which you'll receive via email and can view in your dashboard. You can also see real-time funding progress and investor activity for all your investments.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                    Is DeshFund regulated and compliant with Bangladesh laws?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, DeshFund operates in compliance with Bangladesh Securities and Exchange Commission (BSEC) regulations for crowdfunding platforms. We follow all applicable financial regulations, data protection laws, and consumer protection guidelines. Our platform implements KYC (Know Your Customer) procedures and maintains transparent records of all transactions. We work closely with regulatory authorities to ensure a safe and legal investment environment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">
                  Still have questions? We're here to help!
                </p>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="font-accent">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
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
        <section className="py-20">
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
        <section className="py-20 bg-muted/30">
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
