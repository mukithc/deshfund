import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { 
  TrendingUp, 
  Wallet, 
  Target, 
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  AlertCircle
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";

/* Bangladesh Heritage Fusion Design - Dashboard Page */

export default function Dashboard() {
  const { isAuthenticated, user } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation("/login");
    }
  }, [isAuthenticated, setLocation]);

  if (!isAuthenticated) {
    return null;
  }

  // Mock data - replace with API calls
  const portfolioStats = {
    totalInvested: 850000,
    currentValue: 920000,
    totalReturn: 70000,
    returnPercentage: 8.24,
    activeCampaigns: 5,
    completedInvestments: 3,
  };

  const myInvestments = [
    {
      id: 1,
      campaignTitle: "TechBridge Bangladesh",
      category: "Technology",
      investedAmount: 250000,
      currentValue: 275000,
      returnPercentage: 10.0,
      status: "active",
      progress: 64,
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-2_1770704715000_na1fn_dGVjaC1zdGFydHVwLWNhbXBhaWdu.png?x-oss-process=image/resize,w_400,h_400/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTJfMTc3MDcwNDcxNTAwMF9uYTFmbl9kR1ZqYUMxemRHRnlkSFZ3TFdOaGJYQmhhV2R1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwMCxoXzQwMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aN8qzLAVchtQmRQ50P~8OTm~R0B9KOD-bVY~4OIMsV1pJ9swEiRIv2oHaBUmMHz87q3hyw0~AuB72xkHOcYGnWejXutIIkWDMrcart9ULnIfe34RgUiAaUNWkLuDJl9l4sXB-kANwWrzTMYSxA73ceikr-5VLHw7QemEyl10QaS1Rw3yfkzfzH8aJ14UTB-s3A6S6BJLqVndI8h9RiLHzjmI8DBhhH9irkmrg2D0m9mzPWEeyrjUoHf~4JEF4hvL9Uyyg1uLrUC48jm~zG0HosusudsKzIFWYBl5qUeHCnTRjCEf-BqbHZn6uH4scCAilbqDRrTQqW2a3EjYH7Fw7A__",
    },
    {
      id: 2,
      campaignTitle: "GreenHarvest Initiative",
      category: "Agriculture",
      investedAmount: 200000,
      currentValue: 210000,
      returnPercentage: 5.0,
      status: "active",
      progress: 70,
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-3_1770704713000_na1fn_YWdyaWN1bHR1cmUtY2FtcGFpZ24.png?x-oss-process=image/resize,w_400,h_400/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTNfMTc3MDcwNDcxMzAwMF9uYTFmbl9ZV2R5YVdOMWJIUjFjbVV0WTJGdGNHRnBaMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfNDAwLGhfNDAwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AKlKL~E7rDUViGhAMzwIiUCKLSZGFG4w-npDaG8hiTKMnwux4s-5VFRYRc1sF55yP1k9CMjTu49k9frk8KHu7hTzvv4wL3kMBMJ9SVcrUDAuahUfQMn8pluCW6mnDvrskcWQTuUWCNu7Q8MrXso7XFj8VgjVH5GNLY2L4b8t6pK2kDVdWezf~wWq-SUVxlyplUP74kFyWIzy57cYdv4DoyxRwAKv6OUeMGUWRm18OwyuX0p7TKMKMi-n6KBpzZMyvjZPYVYwU1SEGfS6EPvhyNVfiuC2F4KnXnKK3raFPAFlrbL04blFf6WI5KPaXSpKLyVSiinyvJWiKaED9S1cZg__",
    },
    {
      id: 3,
      campaignTitle: "Shakti Collective",
      category: "Social Enterprise",
      investedAmount: 150000,
      currentValue: 165000,
      returnPercentage: 10.0,
      status: "active",
      progress: 75,
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-4_1770704718000_na1fn_c29jaWFsLWVudGVycHJpc2UtY2FtcGFpZ24.png?x-oss-process=image/resize,w_400,h_400/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTRfMTc3MDcwNDcxODAwMF9uYTFmbl9jMjlqYVdGc0xXVnVkR1Z5Y0hKcGMyVXRZMkZ0Y0dGcFoyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd180MDAsaF80MDAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bguJ5GqwMe0DjqxZWcBx3KwYOBzd~xuu-STBk8iNYLBIb6AF57zfKTRDa5KDlCYX0bjzaInW7jUMtNz0wOgtnrmzDBdbYn3farlHmADTJxzphMcqIguZKQUCUP2V-FE5fB0J4WbtexQaLCOaIyfOGTUAdjE8U4yi2JOxtrkMZhLv6~1buFHE-4fjRxjS2fANjyOdWgD9xjv8J2tKf9MCt2yp9sfzx19Tqrf4x5XbwDH1ZfyyU176Q8nesaZ6H58p-iCVm6bNoUbQE8Bm~LmsDjP2LDl5W0anHKH3GBrohFrHMw7jV3~TLrrX5L-nzkdvEauQoLKNKhApq6dR-SKDoQ__",
    },
    {
      id: 4,
      campaignTitle: "EduTech Bangladesh",
      category: "Education",
      investedAmount: 150000,
      currentValue: 160000,
      returnPercentage: 6.67,
      status: "active",
      progress: 70,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
    },
    {
      id: 5,
      campaignTitle: "HealthConnect",
      category: "Healthcare",
      investedAmount: 100000,
      currentValue: 110000,
      returnPercentage: 10.0,
      status: "completed",
      progress: 100,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    },
  ];

  const aiRecommendations = [
    {
      id: 6,
      title: "Smart Logistics BD",
      category: "Technology",
      description: "AI-powered logistics platform optimizing delivery routes across Bangladesh",
      fundingGoal: 7000000,
      amountRaised: 3500000,
      riskScore: "LOW",
      matchScore: 95,
      reason: "Matches your interest in technology and has strong growth potential",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80",
    },
    {
      id: 7,
      title: "Organic Farming Co-op",
      category: "Agriculture",
      description: "Community-driven organic farming collective serving urban markets",
      fundingGoal: 4000000,
      amountRaised: 2800000,
      riskScore: "MEDIUM",
      matchScore: 88,
      reason: "Similar to your successful GreenHarvest investment",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80",
    },
    {
      id: 8,
      title: "Women's Craft Network",
      category: "Social Enterprise",
      description: "Empowering rural women artisans through digital marketplace access",
      fundingGoal: 3000000,
      amountRaised: 1800000,
      riskScore: "LOW",
      matchScore: 92,
      reason: "Aligns with your social impact investment preferences",
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-muted/30">
        {/* Header */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Welcome back, {user?.fullName || "Investor"}
            </h1>
            <p className="text-muted-foreground">
              Track your investments and discover new opportunities
            </p>
          </div>
        </section>

        {/* Portfolio Overview */}
        <section className="py-8">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Invested
                  </CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-display font-bold text-foreground">
                    ৳{(portfolioStats.totalInvested / 100000).toFixed(1)}L
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Across {portfolioStats.activeCampaigns} campaigns
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Current Value
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-display font-bold text-foreground">
                    ৳{(portfolioStats.currentValue / 100000).toFixed(1)}L
                  </div>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +{portfolioStats.returnPercentage}% overall
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Return
                  </CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-display font-bold text-green-600">
                    +৳{(portfolioStats.totalReturn / 1000).toFixed(0)}K
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Unrealized gains
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Active Campaigns
                  </CardTitle>
                  <Sparkles className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-display font-bold text-foreground">
                    {portfolioStats.activeCampaigns}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {portfolioStats.completedInvestments} completed
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-12">
          <div className="container">
            <Tabs defaultValue="portfolio" className="space-y-6">
              <TabsList className="bg-background">
                <TabsTrigger value="portfolio" className="font-accent">My Portfolio</TabsTrigger>
                <TabsTrigger value="recommendations" className="font-accent">
                  AI Recommendations
                  <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground">
                    {aiRecommendations.length}
                  </Badge>
                </TabsTrigger>
              </TabsList>

              {/* Portfolio Tab */}
              <TabsContent value="portfolio" className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground">
                      My Investments
                    </h2>
                    <p className="text-muted-foreground">
                      Track performance and manage your portfolio
                    </p>
                  </div>
                  <Link href="/campaigns">
                    <Button className="font-accent">
                      Discover More
                    </Button>
                  </Link>
                </div>

                <div className="grid gap-6">
                  {myInvestments.map((investment) => (
                    <Card key={investment.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-48 h-48 md:h-auto">
                          <img
                            src={investment.image}
                            alt={investment.campaignTitle}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {investment.category}
                                </Badge>
                                <Badge 
                                  variant={investment.status === "active" ? "default" : "secondary"}
                                  className="text-xs"
                                >
                                  {investment.status}
                                </Badge>
                              </div>
                              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                                {investment.campaignTitle}
                              </h3>
                            </div>
                            <Link href={`/campaigns/${investment.id}`}>
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </Button>
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div>
                              <div className="text-xs text-muted-foreground mb-1">Invested</div>
                              <div className="text-sm font-semibold text-foreground">
                                ৳{(investment.investedAmount / 1000).toFixed(0)}K
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground mb-1">Current Value</div>
                              <div className="text-sm font-semibold text-foreground">
                                ৳{(investment.currentValue / 1000).toFixed(0)}K
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground mb-1">Return</div>
                              <div className="text-sm font-semibold text-green-600 flex items-center">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                +{investment.returnPercentage}%
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground mb-1">Progress</div>
                              <div className="text-sm font-semibold text-foreground">
                                {investment.progress}%
                              </div>
                            </div>
                          </div>

                          <Progress value={investment.progress} className="h-2" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* AI Recommendations Tab */}
              <TabsContent value="recommendations" className="space-y-6">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground mb-2">
                        AI-Powered Recommendations
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Based on your investment history, preferences, and risk profile, our AI has identified these campaigns that match your interests. Each recommendation includes a match score and risk assessment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aiRecommendations.map((campaign) => {
                    const progress = (campaign.amountRaised / campaign.fundingGoal) * 100;
                    return (
                      <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={campaign.image}
                              alt={campaign.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-primary text-primary-foreground font-accent">
                              {campaign.matchScore}% Match
                            </Badge>
                          </div>
                        </div>
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="text-xs">
                              {campaign.category}
                            </Badge>
                            <Badge 
                              variant={campaign.riskScore === "LOW" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {campaign.riskScore} Risk
                            </Badge>
                          </div>
                          <CardTitle className="text-xl font-display">{campaign.title}</CardTitle>
                          <CardDescription>{campaign.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                              <div className="flex items-start gap-2">
                                <AlertCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-muted-foreground">
                                  {campaign.reason}
                                </p>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-muted-foreground">Raised</span>
                                <span className="font-semibold text-foreground">
                                  ৳{(campaign.amountRaised / 100000).toFixed(1)}L / ৳{(campaign.fundingGoal / 100000).toFixed(1)}L
                                </span>
                              </div>
                              <Progress value={progress} className="h-2" />
                            </div>

                            <Link href={`/campaigns/${campaign.id}`}>
                              <Button className="w-full font-accent">
                                View Campaign
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
