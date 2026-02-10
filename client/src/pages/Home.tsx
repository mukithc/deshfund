import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRight, TrendingUp, Shield, Users, Sparkles } from "lucide-react";
import { Link } from "wouter";

/* Bangladesh Heritage Fusion Design
 * Diagonal-flow asymmetric layout with cultural authenticity
 * Warm, community-focused aesthetic with emerald green and terracotta
 */

export default function Home() {
  const featuredCampaigns = [
    {
      id: 1,
      title: "TechBridge Bangladesh",
      description: "Building the next generation of software solutions for local businesses",
      category: "Technology",
      fundingGoal: 5000000,
      amountRaised: 3200000,
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-2_1770704715000_na1fn_dGVjaC1zdGFydHVwLWNhbXBhaWdu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTJfMTc3MDcwNDcxNTAwMF9uYTFmbl9kR1ZqYUMxemRHRnlkSFZ3TFdOaGJYQmhhV2R1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aN8qzLAVchtQmRQ50P~8OTm~R0B9KOD-bVY~4OIMsV1pJ9swEiRIv2oHaBUmMHz87q3hyw0~AuB72xkHOcYGnWejXutIIkWDMrcart9ULnIfe34RgUiAaUNWkLuDJl9l4sXB-kANwWrzTMYSxA73ceikr-5VLHw7QemEyl10QaS1Rw3yfkzfzH8aJ14UTB-s3A6S6BJLqVndI8h9RiLHzjmI8DBhhH9irkmrg2D0m9mzPWEeyrjUoHf~4JEF4hvL9Uyyg1uLrUC48jm~zG0HosusudsKzIFWYBl5qUeHCnTRjCEf-BqbHZn6uH4scCAilbqDRrTQqW2a3EjYH7Fw7A__",
    },
    {
      id: 2,
      title: "GreenHarvest Initiative",
      description: "Sustainable agriculture technology empowering rural farmers",
      category: "Agriculture",
      fundingGoal: 3000000,
      amountRaised: 2100000,
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-3_1770704713000_na1fn_YWdyaWN1bHR1cmUtY2FtcGFpZ24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTNfMTc3MDcwNDcxMzAwMF9uYTFmbl9ZV2R5YVdOMWJIUjFjbVV0WTJGdGNHRnBaMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AKlKL~E7rDUViGhAMzwIiUCKLSZGFG4w-npDaG8hiTKMnwux4s-5VFRYRc1sF55yP1k9CMjTu49k9frk8KHu7hTzvv4wL3kMBMJ9SVcrUDAuahUfQMn8pluCW6mnDvrskcWQTuUWCNu7Q8MrXso7XFj8VgjVH5GNLY2L4b8t6pK2kDVdWezf~wWq-SUVxlyplUP74kFyWIzy57cYdv4DoyxRwAKv6OUeMGUWRm18OwyuX0p7TKMKMi-n6KBpzZMyvjZPYVYwU1SEGfS6EPvhyNVfiuC2F4KnXnKK3raFPAFlrbL04blFf6WI5KPaXSpKLyVSiinyvJWiKaED9S1cZg__",
    },
    {
      id: 3,
      title: "Shakti Collective",
      description: "Empowering women artisans through modern marketplace access",
      category: "Social Enterprise",
      fundingGoal: 2000000,
      amountRaised: 1500000,
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-4_1770704718000_na1fn_c29jaWFsLWVudGVycHJpc2UtY2FtcGFpZ24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTRfMTc3MDcwNDcxODAwMF9uYTFmbl9jMjlqYVdGc0xXVnVkR1Z5Y0hKcGMyVXRZMkZ0Y0dGcFoyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bguJ5GqwMe0DjqxZWcBx3KwYOBzd~xuu-STBk8iNYLBIb6AF57zfKTRDa5KDlCYX0bjzaInW7jUMtNz0wOgtnrmzDBdbYn3farlHmADTJxzphMcqIguZKQUCUP2V-FE5fB0J4WbtexQaLCOaIyfOGTUAdjE8U4yi2JOxtrkMZhLv6~1buFHE-4fjRxjS2fANjyOdWgD9xjv8J2tKf9MCt2yp9sfzx19Tqrf4x5XbwDH1ZfyyU176Q8nesaZ6H58p-iCVm6bNoUbQE8Bm~LmsDjP2LDl5W0anHKH3GBrohFrHMw7jV3~TLrrX5L-nzkdvEauQoLKNKhApq6dR-SKDoQ__",
    },
  ];

  const stats = [
    { label: "Total Funded", value: "৳45 Crore", icon: TrendingUp },
    { label: "Active Campaigns", value: "127", icon: Sparkles },
    { label: "Investors", value: "12,500+", icon: Users },
    { label: "Success Rate", value: "89%", icon: Shield },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section - Diagonal composition */}
        <section 
          className="relative min-h-[600px] flex items-center overflow-hidden"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-1_1770704723000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTFfMTc3MDcwNDcyMzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bdGT-RbnZE3CQsR1iuxK3g3b5ebl-dUFIvR4-WUtJwHFmFFCz6GugeQ76Yn9WUEYrP3lO~-TexGpyUPIxVPe7pNqGKZIRRtHy~1QsyVNKEi9odxNRSIhJCOj811bTB5h0AbdQF8vsunqzgtWj-kQeQmhw-OsT9HxnWcaRkbiYuo5o~6tYLOJhY4QnA1ekWirK7kK-imGixYNrciSYOq1DelyezV-xnzT8JWunZBM2TiuQTz2s5LgcfaUHNqlDPmPEADIisp-24Nnt2GKXHAC2Cr10r4GoX9clE~vRAT1TIbCmdNPaJH4oFO4AERJEf9QMaRxajBrjVXOjmDLxT6ruA__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          
          <div className="container relative z-10">
            <div className="max-w-2xl diagonal-slide-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-foreground">
                Fund Bangladesh's Future
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Connect with innovative startups and small businesses across Bangladesh. Invest in ideas that matter, support entrepreneurs who are building tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/campaigns">
                  <Button size="lg" className="font-accent text-base group">
                    Explore Campaigns
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/start-campaign">
                  <Button size="lg" variant="outline" className="font-accent text-base">
                    Start Your Campaign
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <stat.icon className="w-8 h-8 mx-auto text-primary" />
                  <div className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Campaigns */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">Featured Campaigns</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover innovative projects from entrepreneurs across Bangladesh who are making a difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCampaigns.map((campaign) => {
                const progress = (campaign.amountRaised / campaign.fundingGoal) * 100;
                return (
                  <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="text-xs font-accent font-semibold text-primary mb-2">{campaign.category}</div>
                      <CardTitle className="text-xl font-display">{campaign.title}</CardTitle>
                      <CardDescription>{campaign.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Raised</span>
                            <span className="font-semibold text-foreground">
                              ৳{(campaign.amountRaised / 100000).toFixed(1)}L / ৳{(campaign.fundingGoal / 100000).toFixed(1)}L
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${Math.min(progress, 100)}%` }}
                            />
                          </div>
                        </div>
                        <Link href={`/campaigns/${campaign.id}`}>
                          <Button className="w-full font-accent">View Campaign</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link href="/campaigns">
                <Button size="lg" variant="outline" className="font-accent">
                  View All Campaigns
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent, and secure crowdfunding for Bangladesh
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-display font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">Create Campaign</h3>
                <p className="text-muted-foreground">
                  Share your business idea, set your funding goal, and tell your story to potential investors
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-display font-bold text-secondary-foreground">2</span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">Get Funded</h3>
                <p className="text-muted-foreground">
                  Investors discover your campaign, assess the opportunity, and contribute to your success
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-display font-bold text-accent-foreground">3</span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">Build Together</h3>
                <p className="text-muted-foreground">
                  Receive funding, grow your business, and share your journey with your investor community
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/how-it-works">
                <Button size="lg" className="font-accent">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground overflow-hidden">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Join thousands of entrepreneurs and investors building Bangladesh's future together
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/register">
                    <Button size="lg" variant="secondary" className="font-accent">
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="font-accent bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Contact Us
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
