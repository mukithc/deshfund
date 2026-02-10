import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/* Bangladesh Heritage Fusion Design - Campaigns Page */

export default function Campaigns() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "technology", label: "Technology" },
    { value: "agriculture", label: "Agriculture" },
    { value: "social-enterprise", label: "Social Enterprise" },
    { value: "education", label: "Education" },
    { value: "healthcare", label: "Healthcare" },
    { value: "manufacturing", label: "Manufacturing" },
  ];

  const campaigns = [
    {
      id: 1,
      title: "TechBridge Bangladesh",
      description: "Building the next generation of software solutions for local businesses across Bangladesh",
      category: "Technology",
      fundingGoal: 5000000,
      amountRaised: 3200000,
      investors: 45,
      daysLeft: 23,
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-2_1770704715000_na1fn_dGVjaC1zdGFydHVwLWNhbXBhaWdu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTJfMTc3MDcwNDcxNTAwMF9uYTFmbl9kR1ZqYUMxemRHRnlkSFZ3TFdOaGJYQmhhV2R1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aN8qzLAVchtQmRQ50P~8OTm~R0B9KOD-bVY~4OIMsV1pJ9swEiRIv2oHaBUmMHz87q3hyw0~AuB72xkHOcYGnWejXutIIkWDMrcart9ULnIfe34RgUiAaUNWkLuDJl9l4sXB-kANwWrzTMYSxA73ceikr-5VLHw7QemEyl10QaS1Rw3yfkzfzH8aJ14UTB-s3A6S6BJLqVndI8h9RiLHzjmI8DBhhH9irkmrg2D0m9mzPWEeyrjUoHf~4JEF4hvL9Uyyg1uLrUC48jm~zG0HosusudsKzIFWYBl5qUeHCnTRjCEf-BqbHZn6uH4scCAilbqDRrTQqW2a3EjYH7Fw7A__",
    },
    {
      id: 2,
      title: "GreenHarvest Initiative",
      description: "Sustainable agriculture technology empowering rural farmers with modern tools and techniques",
      category: "Agriculture",
      fundingGoal: 3000000,
      amountRaised: 2100000,
      investors: 32,
      daysLeft: 15,
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-3_1770704713000_na1fn_YWdyaWN1bHR1cmUtY2FtcGFpZ24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTNfMTc3MDcwNDcxMzAwMF9uYTFmbl9ZV2R5YVdOMWJIUjFjbVV0WTJGdGNHRnBaMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AKlKL~E7rDUViGhAMzwIiUCKLSZGFG4w-npDaG8hiTKMnwux4s-5VFRYRc1sF55yP1k9CMjTu49k9frk8KHu7hTzvv4wL3kMBMJ9SVcrUDAuahUfQMn8pluCW6mnDvrskcWQTuUWCNu7Q8MrXso7XFj8VgjVH5GNLY2L4b8t6pK2kDVdWezf~wWq-SUVxlyplUP74kFyWIzy57cYdv4DoyxRwAKv6OUeMGUWRm18OwyuX0p7TKMKMi-n6KBpzZMyvjZPYVYwU1SEGfS6EPvhyNVfiuC2F4KnXnKK3raFPAFlrbL04blFf6WI5KPaXSpKLyVSiinyvJWiKaED9S1cZg__",
    },
    {
      id: 3,
      title: "Shakti Collective",
      description: "Empowering women artisans through modern marketplace access and sustainable livelihood",
      category: "Social Enterprise",
      fundingGoal: 2000000,
      amountRaised: 1500000,
      investors: 28,
      daysLeft: 30,
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Nip2sF2YsXYFUIglijP1O6/sandbox/ly8TyD1SqBDtmt0WY2Mu1S-img-4_1770704718000_na1fn_c29jaWFsLWVudGVycHJpc2UtY2FtcGFpZ24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmlwMnNGMllzWFlGVUlnbGlqUDFPNi9zYW5kYm94L2x5OFR5RDFTcUJEdG10MFdZMk11MVMtaW1nLTRfMTc3MDcwNDcxODAwMF9uYTFmbl9jMjlqYVdGc0xXVnVkR1Z5Y0hKcGMyVXRZMkZ0Y0dGcFoyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bguJ5GqwMe0DjqxZWcBx3KwYOBzd~xuu-STBk8iNYLBIb6AF57zfKTRDa5KDlCYX0bjzaInW7jUMtNz0wOgtnrmzDBdbYn3farlHmADTJxzphMcqIguZKQUCUP2V-FE5fB0J4WbtexQaLCOaIyfOGTUAdjE8U4yi2JOxtrkMZhLv6~1buFHE-4fjRxjS2fANjyOdWgD9xjv8J2tKf9MCt2yp9sfzx19Tqrf4x5XbwDH1ZfyyU176Q8nesaZ6H58p-iCVm6bNoUbQE8Bm~LmsDjP2LDl5W0anHKH3GBrohFrHMw7jV3~TLrrX5L-nzkdvEauQoLKNKhApq6dR-SKDoQ__",
    },
    {
      id: 4,
      title: "EduTech Bangladesh",
      description: "Digital learning platform connecting students with quality education across the country",
      category: "Education",
      fundingGoal: 4000000,
      amountRaised: 2800000,
      investors: 52,
      daysLeft: 18,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    },
    {
      id: 5,
      title: "HealthConnect",
      description: "Telemedicine platform bringing healthcare access to remote areas of Bangladesh",
      category: "Healthcare",
      fundingGoal: 6000000,
      amountRaised: 4200000,
      investors: 67,
      daysLeft: 25,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      id: 6,
      title: "Local Craft Manufacturing",
      description: "Modern manufacturing facility for traditional Bengali handicrafts with global reach",
      category: "Manufacturing",
      fundingGoal: 8000000,
      amountRaised: 5600000,
      investors: 43,
      daysLeft: 20,
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
    },
  ];

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           campaign.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Discover Campaigns
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore innovative startups and businesses seeking investment across Bangladesh. Find opportunities that align with your interests and values.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search campaigns..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Campaigns Grid */}
        <section className="py-12">
          <div className="container">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredCampaigns.length}</span> campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCampaigns.map((campaign) => {
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
                      <div className="text-xs font-accent font-semibold text-primary mb-2">
                        {campaign.category}
                      </div>
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
                        
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{campaign.investors} investors</span>
                          <span>{campaign.daysLeft} days left</span>
                        </div>

                        <Button 
                          className="w-full font-accent" 
                          onClick={() => window.location.href = `/campaigns/${campaign.id}`}
                        >
                          View Campaign
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredCampaigns.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No campaigns found matching your criteria. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
