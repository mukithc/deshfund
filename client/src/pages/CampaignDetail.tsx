import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { toast } from "sonner";
import { 
  TrendingUp, Users, Calendar, Target, Shield, Sparkles, 
  CheckCircle2, ArrowRight, Building2, MapPin, Globe, Linkedin,
  LineChart as LineChartIcon
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

/* Bangladesh Heritage Fusion Design - Campaign Detail Page */

interface CampaignData {
  id: number;
  title: string;
  tagline: string;
  category: string;
  description: string;
  fundingGoal: number;
  amountRaised: number;
  minInvestment: number;
  investorCount: number;
  daysLeft: number;
  equityOffered: number;
  image: string;
  
  // Business Details
  businessModel: string;
  targetMarket: string;
  competitiveAdvantage: string;
  useOfFunds: string[];
  
  // Traction
  traction: {
    revenue: string;
    customers: string;
    growth: string;
    milestone: string;
  };
  
  // Founder
  founder: {
    name: string;
    title: string;
    bio: string;
    image: string;
    linkedin?: string;
  };
  
  // Team
  teamSize: number;
  
  // AI Risk Assessment
  aiRiskScore: number;
  aiRiskLevel: "LOW" | "MEDIUM" | "HIGH";
  aiInsights: string[];
}

// Mock campaign data - replace with API call
const campaignDatabase: Record<string, CampaignData> = {
  "1": {
    id: 1,
    title: "TechBridge Bangladesh",
    tagline: "Building the next generation of software solutions for local businesses",
    category: "Technology",
    description: "TechBridge Bangladesh is revolutionizing how local businesses in Bangladesh adopt technology. We provide affordable, localized software solutions that help SMEs digitize their operations, manage inventory, track sales, and reach customers online. Our platform is built specifically for the Bangladesh market with Bengali language support, local payment integration, and mobile-first design.",
    fundingGoal: 5000000,
    amountRaised: 3200000,
    minInvestment: 10000,
    investorCount: 87,
    daysLeft: 23,
    equityOffered: 12,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-2_1770704715000_na1fn_dGVjaC1zdGFydHVwLWNhbXBhaWdu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTJfMTc3MDcwNDcxNTAwMF9uYTFmbl9kR1ZqYUMxemRHRnlkSFZ3TFdOaGJYQmhhV2R1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aN8qzLAVchtQmRQ50P~8OTm~R0B9KOD-bVY~4OIMsV1pJ9swEiRIv2oHaBUmMHz87q3hyw0~AuB72xkHOcYGnWejXutIIkWDMrcart9ULnIfe34RgUiAaUNWkLuDJl9l4sXB-kANwWrzTMYSxA73ceikr-5VLHw7QemEyl10QaS1Rw3yfkzfzH8aJ14UTB-s3A6S6BJLqVndI8h9RiLHzjmI8DBhhH9irkmrg2D0m9mzPWEeyrjUoHf~4JEF4hvL9Uyyg1uLrUC48jm~zG0HosusudsKzIFWYBl5qUeHCnTRjCEf-BqbHZn6uH4scCAilbqDRrTQqW2a3EjYH7Fw7A__",
    businessModel: "SaaS subscription model with tiered pricing. We offer three plans: Basic (৳2,999/month), Professional (৳5,999/month), and Enterprise (৳12,999/month). Revenue streams include monthly subscriptions, implementation fees, training services, and premium support packages.",
    targetMarket: "Our primary target is the 500,000+ SMEs in Bangladesh across retail, manufacturing, and service sectors. We focus on businesses with 5-50 employees who are currently using manual processes or outdated software. The total addressable market is estimated at ৳1,200 crore annually.",
    competitiveAdvantage: "Unlike international SaaS platforms, we offer: (1) Full Bengali language interface and support, (2) Integration with local payment systems (bKash, Nagad, Rocket), (3) Offline-first architecture for unreliable internet, (4) 10x lower pricing than competitors, (5) Local customer support team understanding Bangladesh business culture.",
    useOfFunds: [
      "40% - Product Development: Enhance mobile app, add AI features, build integrations",
      "30% - Sales & Marketing: Expand sales team, digital marketing, partnerships",
      "20% - Customer Success: Training programs, support team expansion, documentation",
      "10% - Operations: Office expansion, infrastructure, legal & compliance"
    ],
    traction: {
      revenue: "৳42 Lakh ARR (Annual Recurring Revenue)",
      customers: "380+ active paying customers",
      growth: "25% month-over-month growth for last 6 months",
      milestone: "Recently signed partnership with Bangladesh Chamber of Commerce"
    },
    founder: {
      name: "Rafiq Ahmed",
      title: "Founder & CEO",
      bio: "Rafiq is a software engineer with 12 years of experience, including 6 years at Google Singapore working on enterprise solutions. He returned to Bangladesh in 2022 with a mission to democratize technology for local businesses. Rafiq holds a B.Sc. in Computer Science from BUET and an MBA from IBA, Dhaka University.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/rafiqahmed"
    },
    teamSize: 18,
    aiRiskScore: 88,
    aiRiskLevel: "LOW",
    aiInsights: [
      "Strong product-market fit evidenced by 25% MoM growth",
      "Experienced founder with relevant technical background",
      "Clear monetization strategy with proven revenue",
      "Large addressable market with limited competition",
      "Risk: Customer concentration - top 10 customers represent 35% of revenue"
    ]
  },
  "2": {
    id: 2,
    title: "GreenHarvest Initiative",
    tagline: "Sustainable agriculture technology empowering rural farmers",
    category: "Agriculture",
    description: "GreenHarvest is transforming agriculture in Bangladesh through IoT sensors, AI-powered crop recommendations, and direct market access. Our platform connects smallholder farmers with buyers, eliminates middlemen, provides real-time weather and soil data, and offers micro-loans for seeds and equipment. We're making farming more profitable and sustainable.",
    fundingGoal: 3000000,
    amountRaised: 2100000,
    minInvestment: 5000,
    investorCount: 142,
    daysLeft: 15,
    equityOffered: 15,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-3_1770704713000_na1fn_YWdyaWN1bHR1cmUtY2FtcGFpZ24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTNfMTc3MDcwNDcxMzAwMF9uYTFmbl9ZV2R5YVdOMWJIUjFjbVV0WTJGdGNHRnBaMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AKlKL~E7rDUViGhAMzwIiUCKLSZGFG4w-npDaG8hiTKMnwux4s-5VFRYRc1sF55yP1k9CMjTu49k9frk8KHu7hTzvv4wL3kMBMJ9SVcrUDAuahUfQMn8pluCW6mnDvrskcWQTuUWCNu7Q8MrXso7XFj8VgjVH5GNLY2L4b8t6pK2kDVdWezf~wWq-SUVxlyplUP74kFyWIzy57cYdv4DoyxRwAKv6OUeMGUWRm18OwyuX0p7TKMKMi-n6KBpzZMyvjZPYVYwU1SEGfS6EPvhyNVfiuC2F4KnXnKK3raFPAFlrbL04blFf6WI5KPaXSpKLyVSiinyvJWiKaED9S1cZg__",
    businessModel: "Multi-revenue model: (1) Transaction fees (3%) on marketplace sales, (2) Subscription fees for premium features (৳500/month per farmer), (3) Commission on micro-loans (2% origination fee), (4) Data licensing to agribusinesses and government. We also generate revenue from IoT sensor sales and installation.",
    targetMarket: "Bangladesh has 15 million smallholder farmers managing plots under 2 acres. Our initial focus is on 2 million farmers in high-value crop regions (vegetables, fruits, spices). The agriculture sector contributes ৳3.5 lakh crore to GDP, with significant inefficiencies we can address.",
    competitiveAdvantage: "(1) Proprietary AI trained on Bangladesh-specific crop data and weather patterns, (2) Partnership with Bangladesh Agricultural Research Institute for credibility, (3) Voice-based interface in Bengali for low-literacy farmers, (4) Offline capability via SMS and USSD, (5) Integrated financial services eliminating need for separate loan applications.",
    useOfFunds: [
      "35% - Technology: IoT sensor production, AI model improvement, mobile app development",
      "30% - Field Operations: Hire agricultural extension officers, farmer training programs",
      "20% - Market Expansion: Enter 10 new districts, onboard 50,000 farmers",
      "15% - Partnerships: Integrate with banks, cooperatives, and buyers"
    ],
    traction: {
      revenue: "৳18 Lakh monthly GMV (Gross Merchandise Value)",
      customers: "12,500 registered farmers across 8 districts",
      growth: "Farmers using our platform see 35% average income increase",
      milestone: "Awarded 'Best AgriTech Startup' by Bangladesh Startup Summit 2025"
    },
    founder: {
      name: "Dr. Nasrin Sultana",
      title: "Founder & CEO",
      bio: "Dr. Nasrin holds a PhD in Agricultural Economics from Cornell University and worked with the World Bank on rural development projects across South Asia. She grew up in a farming family in Bogra and witnessed firsthand the challenges farmers face. Her research on technology adoption in agriculture has been published in leading journals. She's passionate about using technology to improve farmers' livelihoods.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/nasrinsultana"
    },
    teamSize: 24,
    aiRiskScore: 82,
    aiRiskLevel: "LOW",
    aiInsights: [
      "Strong social impact with measurable farmer income improvement",
      "Founder has deep domain expertise and academic credentials",
      "Multiple revenue streams reduce dependency risk",
      "Government support and research partnerships add credibility",
      "Risk: Seasonal revenue fluctuations tied to harvest cycles"
    ]
  },
  "3": {
    id: 3,
    title: "Shakti Collective",
    tagline: "Empowering women artisans through modern marketplace access",
    category: "Social Enterprise",
    description: "Shakti Collective is a social enterprise connecting rural women artisans with urban and international markets. We provide training in contemporary design, quality control, fair pricing, and direct market access through our e-commerce platform and retail partnerships. Our mission is to preserve traditional crafts while creating sustainable livelihoods for women artisans across Bangladesh.",
    fundingGoal: 2000000,
    amountRaised: 1500000,
    minInvestment: 5000,
    investorCount: 95,
    daysLeft: 18,
    equityOffered: 18,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-4_1770704718000_na1fn_c29jaWFsLWVudGVycHJpc2UtY2FtcGFpZ24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTRfMTc3MDcwNDcxODAwMF9uYTFmbl9jMjlqYVdGc0xXVnVkR1Z5Y0hKcGMyVXRZMkZ0Y0dGcFoyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bguJ5GqwMe0DjqxZWcBx3KwYOBzd~xuu-STBk8iNYLBIb6AF57zfKTRDa5KDlCYX0bjzaInW7jUMtNz0wOgtnrmzDBdbYn3farlHmADTJxzphMcqIguZKQUCUP2V-FE5fB0J4WbtexQaLCOaIyfOGTUAdjE8U4yi2JOxtrkMZhLv6~1buFHE-4fjRxjS2fANjyOdWgD9xjv8J2tKf9MCt2yp9sfzx19Tqrf4x5XbwDH1ZfyyU176Q8nesaZ6H58p-iCVm6bNoUbQE8Bm~LmsDjP2LDl5W0anHKH3GBrohFrHMw7jV3~TLrrX5L-nzkdvEauQoLKNKhApq6dR-SKDoQ__",
    businessModel: "B2C and B2B revenue model: (1) Direct sales through our e-commerce platform with 40% margin, (2) Wholesale to boutiques and department stores (25% margin), (3) Corporate gifting and bulk orders (30% margin), (4) Export sales to USA and Europe (45% margin). We also earn from design consultation and training programs.",
    targetMarket: "Primary: Urban middle and upper-middle class consumers in Bangladesh seeking authentic, handcrafted products. Secondary: International markets (diaspora communities, ethical fashion buyers). The handcrafted goods market in Bangladesh is worth ৳800 crore and growing 15% annually. Export potential is ৳2,000+ crore.",
    competitiveAdvantage: "(1) Direct relationships with 450+ artisans ensuring quality and authenticity, (2) Modern designs blending traditional crafts with contemporary aesthetics, (3) Fair trade certification and transparent supply chain, (4) Strong brand story resonating with conscious consumers, (5) Omnichannel presence (online + 3 retail stores + wholesale partnerships).",
    useOfFunds: [
      "35% - Artisan Development: Training centers, design workshops, quality improvement programs",
      "25% - Marketing & Branding: Digital marketing, influencer partnerships, brand campaigns",
      "20% - Retail Expansion: Open 5 new stores in Dhaka, Chittagong, and Sylhet",
      "20% - Export Development: International certifications, trade shows, export logistics"
    ],
    traction: {
      revenue: "৳65 Lakh quarterly revenue (growing 40% YoY)",
      customers: "8,200+ customers, 2,800 repeat buyers (34% repeat rate)",
      growth: "Featured in Vogue India, BBC, and The Daily Star",
      milestone: "Received Fair Trade certification and B-Corp pending status"
    },
    founder: {
      name: "Ayesha Rahman",
      title: "Founder & Creative Director",
      bio: "Ayesha is a fashion designer and social entrepreneur with a degree from London College of Fashion. She worked with luxury brands in London before returning to Bangladesh to create Shakti Collective. Her vision is to make Bangladeshi handicrafts globally competitive while ensuring artisans receive fair compensation. Ayesha has been recognized as one of Forbes 30 Under 30 Asia.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/ayesharahman"
    },
    teamSize: 15,
    aiRiskScore: 85,
    aiRiskLevel: "LOW",
    aiInsights: [
      "Strong brand differentiation and customer loyalty (34% repeat rate)",
      "Founder has relevant industry experience and international exposure",
      "Diversified revenue streams across B2C, B2B, and export",
      "Positive media coverage and brand recognition",
      "Risk: Dependency on artisan network - need robust training and retention programs"
    ]
  }
};

export default function CampaignDetail() {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/campaigns/:id");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [isInvesting, setIsInvesting] = useState(false);

  const campaign = params?.id ? campaignDatabase[params.id] : null;

  if (!campaign) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold mb-2">Campaign Not Found</h1>
            <p className="text-muted-foreground mb-4">The campaign you're looking for doesn't exist.</p>
            <Button onClick={() => setLocation("/campaigns")}>Browse Campaigns</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const fundingProgress = (campaign.amountRaised / campaign.fundingGoal) * 100;
  const valuation = (campaign.fundingGoal / campaign.equityOffered) * 100;

  const handleInvest = async () => {
    if (!isAuthenticated) {
      toast.error("Please log in to invest");
      setLocation("/login");
      return;
    }

    const amount = parseInt(investmentAmount);
    if (!amount || amount < campaign.minInvestment) {
      toast.error(`Minimum investment is ৳${campaign.minInvestment.toLocaleString()}`);
      return;
    }

    setIsInvesting(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Investment successful! Check your dashboard.");
      setIsInvesting(false);
      setLocation("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url('${campaign.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="container relative h-full flex items-end pb-12">
            <div className="max-w-3xl">
              <Badge className="mb-4">{campaign.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
                {campaign.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {campaign.tagline}
              </p>
            </div>
          </div>
        </section>

        <div className="container py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display">Campaign Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    {campaign.description}
                  </p>
                </CardContent>
              </Card>

              {/* Tabs */}
              <Tabs defaultValue="business" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="business">Business</TabsTrigger>
                  <TabsTrigger value="projections">Projections</TabsTrigger>
                  <TabsTrigger value="traction">Traction</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="ai">AI Insights</TabsTrigger>
                </TabsList>

                <TabsContent value="business" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-display">Business Model</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{campaign.businessModel}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-display">Target Market</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{campaign.targetMarket}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-display">Competitive Advantage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{campaign.competitiveAdvantage}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-display">Use of Funds</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {campaign.useOfFunds.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="projections" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-display flex items-center gap-2">
                        <LineChartIcon className="h-5 w-5 text-primary" />
                        Investment Growth Projection
                      </CardTitle>
                      <CardDescription>
                        Estimated value of ৳1,00,000 investment over 5 years based on conservative growth assumptions
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={[
                              { year: "Year 0", value: 100000, conservative: 100000, optimistic: 100000 },
                              { year: "Year 1", value: 125000, conservative: 115000, optimistic: 140000 },
                              { year: "Year 2", value: 165000, conservative: 135000, optimistic: 210000 },
                              { year: "Year 3", value: 225000, conservative: 165000, optimistic: 320000 },
                              { year: "Year 4", value: 320000, conservative: 205000, optimistic: 480000 },
                              { year: "Year 5", value: 450000, conservative: 260000, optimistic: 720000 },
                            ]}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                          >
                            <defs>
                              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                            <XAxis 
                              dataKey="year" 
                              tick={{ fontSize: 12 }}
                              stroke="hsl(var(--muted-foreground))"
                            />
                            <YAxis 
                              tick={{ fontSize: 12 }}
                              stroke="hsl(var(--muted-foreground))"
                              tickFormatter={(value) => `৳${(value/1000).toFixed(0)}K`}
                            />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: 'hsl(var(--card))', 
                                border: '1px solid hsl(var(--border))',
                                borderRadius: '8px'
                              }}
                              formatter={(value: number) => [`৳${value.toLocaleString()}`, 'Value']}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="optimistic" 
                              stroke="hsl(var(--primary))" 
                              strokeWidth={1}
                              strokeDasharray="5 5"
                              fill="none"
                              name="Optimistic"
                            />
                            <Area 
                              type="monotone" 
                              dataKey="value" 
                              stroke="hsl(var(--primary))" 
                              strokeWidth={3}
                              fill="url(#colorValue)"
                              name="Expected"
                            />
                            <Area 
                              type="monotone" 
                              dataKey="conservative" 
                              stroke="hsl(var(--primary))" 
                              strokeWidth={1}
                              strokeDasharray="5 5"
                              fill="none"
                              name="Conservative"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-muted/50 rounded-lg p-4 space-y-1">
                          <p className="text-xs text-muted-foreground">Conservative (5 years)</p>
                          <p className="text-2xl font-display font-bold text-foreground">৳2.6L</p>
                          <p className="text-xs text-green-600">+160% ROI</p>
                        </div>
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-1">
                          <p className="text-xs text-muted-foreground">Expected (5 years)</p>
                          <p className="text-2xl font-display font-bold text-primary">৳4.5L</p>
                          <p className="text-xs text-green-600">+350% ROI</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4 space-y-1">
                          <p className="text-xs text-muted-foreground">Optimistic (5 years)</p>
                          <p className="text-2xl font-display font-bold text-foreground">৳7.2L</p>
                          <p className="text-xs text-green-600">+620% ROI</p>
                        </div>
                      </div>

                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary" />
                          Growth Assumptions
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span><strong>Year 1-2:</strong> 25-30% annual growth as company scales operations and expands market reach</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span><strong>Year 3-4:</strong> 35-50% growth through new product launches and market expansion</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span><strong>Year 5:</strong> Potential exit event (acquisition or IPO) or continued dividend payments</span>
                          </li>
                        </ul>
                        <p className="text-xs text-muted-foreground mt-3 italic">
                          Note: These projections are estimates based on market analysis and company performance. Actual returns may vary. Past performance does not guarantee future results.
                        </p>
                      </div>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base font-display">Interactive ROI Calculator</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="calc-amount">Your Investment Amount (৳)</Label>
                              <Input
                                id="calc-amount"
                                type="number"
                                placeholder="100000"
                                defaultValue="100000"
                                min={campaign.minInvestment}
                                onChange={(e) => {
                                  const amount = parseInt(e.target.value) || 0;
                                  const year5Value = amount * 4.5;
                                  const roi = ((year5Value - amount) / amount * 100).toFixed(0);
                                  const equityPercent = ((amount / campaign.fundingGoal) * campaign.equityOffered).toFixed(4);
                                  
                                  const resultDiv = document.getElementById('calc-result');
                                  if (resultDiv) {
                                    resultDiv.innerHTML = `
                                      <div class="grid md:grid-cols-2 gap-4">
                                        <div>
                                          <p class="text-sm text-muted-foreground">Equity Stake</p>
                                          <p class="text-2xl font-bold text-primary">${equityPercent}%</p>
                                        </div>
                                        <div>
                                          <p class="text-sm text-muted-foreground">Expected Value (5Y)</p>
                                          <p class="text-2xl font-bold text-foreground">৳${year5Value.toLocaleString()}</p>
                                        </div>
                                        <div class="md:col-span-2">
                                          <p class="text-sm text-muted-foreground">Expected Return on Investment</p>
                                          <p class="text-3xl font-bold text-green-600">+${roi}%</p>
                                        </div>
                                      </div>
                                    `;
                                  }
                                }}
                              />
                            </div>
                            <div id="calc-result" className="bg-muted/50 rounded-lg p-4">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-muted-foreground">Equity Stake</p>
                                  <p className="text-2xl font-bold text-primary">{((100000 / campaign.fundingGoal) * campaign.equityOffered).toFixed(4)}%</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Expected Value (5Y)</p>
                                  <p className="text-2xl font-bold text-foreground">৳4,50,000</p>
                                </div>
                                <div className="md:col-span-2">
                                  <p className="text-sm text-muted-foreground">Expected Return on Investment</p>
                                  <p className="text-3xl font-bold text-green-600">+350%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="traction" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-display">Key Metrics & Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-primary">
                            <TrendingUp className="h-5 w-5" />
                            <span className="font-semibold">Revenue</span>
                          </div>
                          <p className="text-2xl font-display font-bold text-foreground">{campaign.traction.revenue}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-primary">
                            <Users className="h-5 w-5" />
                            <span className="font-semibold">Customers</span>
                          </div>
                          <p className="text-2xl font-display font-bold text-foreground">{campaign.traction.customers}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-primary">
                            <Target className="h-5 w-5" />
                            <span className="font-semibold">Growth</span>
                          </div>
                          <p className="text-2xl font-display font-bold text-foreground">{campaign.traction.growth}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-primary">
                            <Sparkles className="h-5 w-5" />
                            <span className="font-semibold">Milestone</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{campaign.traction.milestone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="team" className="space-y-6 mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <img 
                          src={campaign.founder.image} 
                          alt={campaign.founder.name}
                          className="w-32 h-32 rounded-lg object-cover"
                        />
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="text-xl font-display font-bold text-foreground">{campaign.founder.name}</h3>
                            <p className="text-primary font-medium">{campaign.founder.title}</p>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{campaign.founder.bio}</p>
                          {campaign.founder.linkedin && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={campaign.founder.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-4 w-4 mr-2" />
                                LinkedIn Profile
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-display">Team Size</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3">
                        <Users className="h-8 w-8 text-primary" />
                        <div>
                          <p className="text-3xl font-display font-bold text-foreground">{campaign.teamSize}</p>
                          <p className="text-sm text-muted-foreground">Team Members</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="ai" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-display flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        AI Risk Assessment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className={`text-5xl font-display font-bold ${
                            campaign.aiRiskLevel === "LOW" ? "text-green-600" :
                            campaign.aiRiskLevel === "MEDIUM" ? "text-yellow-600" :
                            "text-red-600"
                          }`}>
                            {campaign.aiRiskScore}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Risk Score</p>
                        </div>
                        <div className="flex-1">
                          <Badge variant={
                            campaign.aiRiskLevel === "LOW" ? "default" :
                            campaign.aiRiskLevel === "MEDIUM" ? "secondary" :
                            "destructive"
                          }>
                            {campaign.aiRiskLevel} RISK
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-2">
                            Based on business model, traction, market opportunity, and team analysis
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Key Insights</h4>
                        <ul className="space-y-3">
                          {campaign.aiInsights.map((insight, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm">{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Investment Card */}
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle className="font-display">Investment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Progress */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Raised</span>
                      <span className="font-semibold text-foreground">
                        ৳{(campaign.amountRaised / 100000).toFixed(1)}L / ৳{(campaign.fundingGoal / 100000).toFixed(1)}L
                      </span>
                    </div>
                    <Progress value={fundingProgress} className="h-3" />
                    <p className="text-xs text-muted-foreground">{fundingProgress.toFixed(0)}% funded</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Investors</p>
                      <p className="text-2xl font-display font-bold text-foreground">{campaign.investorCount}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Days Left</p>
                      <p className="text-2xl font-display font-bold text-foreground">{campaign.daysLeft}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Min. Investment</p>
                      <p className="text-lg font-semibold text-foreground">৳{campaign.minInvestment.toLocaleString()}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Equity Offered</p>
                      <p className="text-lg font-semibold text-foreground">{campaign.equityOffered}%</p>
                    </div>
                  </div>

                  {/* Valuation */}
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-medium text-foreground">Company Valuation</p>
                    <p className="text-2xl font-display font-bold text-primary">
                      ৳{(valuation / 10000000).toFixed(1)} Crore
                    </p>
                  </div>

                  {/* Investment Dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full font-accent text-base" size="lg">
                        Invest Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="font-display">Invest in {campaign.title}</DialogTitle>
                        <DialogDescription>
                          Enter your investment amount (minimum ৳{campaign.minInvestment.toLocaleString()})
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label htmlFor="amount">Investment Amount (৳)</Label>
                          <Input
                            id="amount"
                            type="number"
                            placeholder={campaign.minInvestment.toString()}
                            value={investmentAmount}
                            onChange={(e) => setInvestmentAmount(e.target.value)}
                            min={campaign.minInvestment}
                          />
                        </div>
                        {investmentAmount && parseInt(investmentAmount) >= campaign.minInvestment && (
                          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-1">
                            <p className="text-sm text-muted-foreground">You will receive approximately</p>
                            <p className="text-xl font-display font-bold text-primary">
                              {((parseInt(investmentAmount) / campaign.fundingGoal) * campaign.equityOffered).toFixed(4)}% equity
                            </p>
                          </div>
                        )}
                        <Button 
                          className="w-full font-accent" 
                          onClick={handleInvest}
                          disabled={isInvesting}
                        >
                          {isInvesting ? "Processing..." : "Confirm Investment"}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
