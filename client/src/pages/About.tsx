import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Heart, Target, Users, Globe, ArrowRight } from "lucide-react";
import { Link } from "wouter";

/* Bangladesh Heritage Fusion Design - About Page */

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of community to drive meaningful change. Every campaign on DeshFund represents a story, a dream, and a commitment to building a better Bangladesh.",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Trust is the foundation of investment. We maintain complete transparency in all transactions, campaign progress, and platform operations to ensure confidence for all stakeholders.",
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "We empower entrepreneurs to access capital and investors to support businesses they believe in. Together, we're democratizing access to funding and investment opportunities.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We leverage cutting-edge technology including AI-powered insights and secure payment systems to create the most advanced crowdfunding platform in Bangladesh.",
    },
  ];

  const stats = [
    { value: "৳45 Crore", label: "Total Funded" },
    { value: "127", label: "Active Campaigns" },
    { value: "12,500+", label: "Investors" },
    { value: "89%", label: "Success Rate" },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Platform Launch",
      description: "DeshFund officially launched, connecting the first wave of entrepreneurs with investors across Bangladesh.",
    },
    {
      year: "2025",
      title: "AI Integration",
      description: "Introduced AI-powered recommendations, risk assessment, and fraud detection to enhance decision-making.",
    },
    {
      year: "2025",
      title: "Mobile Payments",
      description: "Integrated bKash, Nagad, and Rocket to make investing accessible to millions of Bangladeshis.",
    },
    {
      year: "2026",
      title: "Growing Impact",
      description: "Reached ৳45 crore in total funding, supporting over 200 campaigns and creating thousands of jobs.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Building Bangladesh's Future, Together
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                DeshFund is more than a crowdfunding platform. We're a community of dreamers, builders, and believers working together to transform ideas into thriving businesses that create jobs, solve problems, and drive economic growth across Bangladesh.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We exist to democratize access to capital for entrepreneurs and investment opportunities for everyday Bangladeshis. Traditional funding channels often exclude promising businesses due to lack of connections or collateral. We're changing that.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  By leveraging technology and community trust, we enable anyone with a great idea to raise capital, and anyone with belief in Bangladesh's future to become an investor. This is how we build an inclusive, prosperous economy where opportunity is accessible to all.
                </p>
                <Link href="/campaigns">
                  <Button size="lg" className="font-accent">
                    See Our Impact
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-5_1770704720000_na1fn_aW52ZXN0bWVudC1zdWNjZXNz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTVfMTc3MDcwNDcyMDAwMF9uYTFmbl9hVzUyWlhOMGJXVnVkQzF6ZFdOalpYTnoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nZToFMjrjnYd6988rzHwX0kY9CgrV8k3mHT85~0nX3i77hchidVqmlkL397hTz-~sZ~nAux7dVqRLzKsHVwywruIe~QqCsBuuWtl4BMCyuBAOf5usatEbjuYUA3L3mT26zyXvWUxVXbGaQ8HTNUxceTaLrtR5mCCLlBJ3KbkzumOlUAo7i7oKj~d~4OR1mrTvMf2-RaU7MqmxTj1V6Be5Dh6z7AbUN11CUQ~uCMcChVJ3p2JtOX~XOoJEiArqGbjbYiQJTK66i3W6ZUvHDPA~0f8s~mf-6JB6~cmUj617e9zpv7GX49SNd3VlPkryXg1~L~s168OGLCPnY9dqmeSFA__"
                  alt="Investment Success"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at DeshFund
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-display">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in building Bangladesh's premier crowdfunding platform
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-xl font-display font-bold text-primary-foreground">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    <Card className="flex-1">
                      <CardHeader>
                        <CardTitle className="text-xl font-display">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                  alt="Technology"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                  Powered by Technology
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  DeshFund is built on a robust technology stack combining Java Spring Boot backend with modern React frontend. Our platform leverages artificial intelligence for personalized recommendations, risk assessment, and fraud detection.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We integrate with Bangladesh's most popular payment systems including bKash, Nagad, and Rocket, making it easy for anyone to invest. Our security infrastructure uses industry-standard encryption and authentication to protect your data and transactions.
                </p>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="font-accent">
                    Learn How It Works
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                Join Our Community
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're an entrepreneur with a vision or an investor seeking opportunities, DeshFund is your platform. Together, we're building the future of Bangladesh's economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" className="font-accent">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="font-accent">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
