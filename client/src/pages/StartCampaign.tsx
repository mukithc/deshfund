import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import { CheckCircle2, ArrowRight, ArrowLeft, Upload, Sparkles } from "lucide-react";
import api from "@/lib/api";

/* Bangladesh Heritage Fusion Design - Start Campaign Page */

interface CampaignFormData {
  // Step 1: Basic Information
  title: string;
  tagline: string;
  category: string;
  description: string;
  
  // Step 2: Funding Details
  fundingGoal: string;
  minInvestment: string;
  campaignDuration: string;
  equityOffered: string;
  
  // Step 3: Business Details
  businessModel: string;
  targetMarket: string;
  competitiveAdvantage: string;
  useOfFunds: string;
  
  // Step 4: Founder & Team
  founderName: string;
  founderBio: string;
  teamSize: string;
  linkedinUrl: string;
  websiteUrl: string;
}

export default function StartCampaign() {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const totalSteps = 4;

  const [formData, setFormData] = useState<CampaignFormData>({
    title: "",
    tagline: "",
    category: "",
    description: "",
    fundingGoal: "",
    minInvestment: "",
    campaignDuration: "30",
    equityOffered: "",
    businessModel: "",
    targetMarket: "",
    competitiveAdvantage: "",
    useOfFunds: "",
    founderName: "",
    founderBio: "",
    teamSize: "",
    linkedinUrl: "",
    websiteUrl: "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please log in to start a campaign");
      setLocation("/login");
    }
  }, [isAuthenticated, setLocation]);

  const updateFormData = (field: keyof CampaignFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.title || !formData.tagline || !formData.category || !formData.description) {
          toast.error("Please fill in all required fields");
          return false;
        }
        if (formData.description.length < 100) {
          toast.error("Description must be at least 100 characters");
          return false;
        }
        return true;
      
      case 2:
        if (!formData.fundingGoal || !formData.minInvestment || !formData.equityOffered) {
          toast.error("Please fill in all required fields");
          return false;
        }
        if (parseInt(formData.fundingGoal) < 100000) {
          toast.error("Funding goal must be at least ৳1,00,000");
          return false;
        }
        if (parseInt(formData.minInvestment) < 5000) {
          toast.error("Minimum investment must be at least ৳5,000");
          return false;
        }
        return true;
      
      case 3:
        if (!formData.businessModel || !formData.targetMarket || !formData.competitiveAdvantage || !formData.useOfFunds) {
          toast.error("Please fill in all required fields");
          return false;
        }
        return true;
      
      case 4:
        if (!formData.founderName || !formData.founderBio || !formData.teamSize) {
          toast.error("Please fill in all required fields");
          return false;
        }
        return true;
      
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsLoading(true);
    try {
      const response = await api.post("/campaigns", {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        fundingGoal: parseInt(formData.fundingGoal),
        minInvestment: parseInt(formData.minInvestment),
        campaignDuration: parseInt(formData.campaignDuration),
        equityOffered: parseFloat(formData.equityOffered),
        businessDetails: {
          tagline: formData.tagline,
          businessModel: formData.businessModel,
          targetMarket: formData.targetMarket,
          competitiveAdvantage: formData.competitiveAdvantage,
          useOfFunds: formData.useOfFunds,
          founderName: formData.founderName,
          founderBio: formData.founderBio,
          teamSize: parseInt(formData.teamSize),
          linkedinUrl: formData.linkedinUrl,
          websiteUrl: formData.websiteUrl,
        }
      });

      toast.success("Campaign submitted for review!");
      setLocation(`/campaigns/${response.data.id}`);
    } catch (error: any) {
      console.error("Campaign creation error:", error);
      toast.error(error.response?.data?.message || "Failed to create campaign. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  const categories = [
    { value: "technology", label: "Technology" },
    { value: "agriculture", label: "Agriculture" },
    { value: "social-enterprise", label: "Social Enterprise" },
    { value: "education", label: "Education" },
    { value: "healthcare", label: "Healthcare" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "retail", label: "Retail & E-commerce" },
    { value: "fintech", label: "Financial Technology" },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-muted/30 py-12">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Start Your Campaign
            </h1>
            <p className="text-muted-foreground">
              Share your vision and raise funds from investors across Bangladesh
            </p>
          </div>

          {/* Progress Bar */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">Step {currentStep} of {totalSteps}</span>
                  <span className="text-muted-foreground">{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`text-center p-2 rounded-lg text-xs font-medium transition-colors ${
                      step < currentStep
                        ? "bg-primary/10 text-primary"
                        : step === currentStep
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step < currentStep && <CheckCircle2 className="h-4 w-4 mx-auto mb-1" />}
                    {step === 1 && "Basic Info"}
                    {step === 2 && "Funding"}
                    {step === 3 && "Business"}
                    {step === 4 && "Team"}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Form Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-display">
                {currentStep === 1 && "Basic Information"}
                {currentStep === 2 && "Funding Details"}
                {currentStep === 3 && "Business Details"}
                {currentStep === 4 && "Founder & Team"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Tell us about your business and what makes it unique"}
                {currentStep === 2 && "Set your funding goals and investment terms"}
                {currentStep === 3 && "Explain your business model and market opportunity"}
                {currentStep === 4 && "Introduce yourself and your team"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="title">Campaign Title *</Label>
                      <Input
                        id="title"
                        placeholder="e.g., TechBridge Bangladesh - Software Solutions for Local Businesses"
                        value={formData.title}
                        onChange={(e) => updateFormData("title", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tagline">Tagline *</Label>
                      <Input
                        id="tagline"
                        placeholder="A short, catchy description (max 100 characters)"
                        value={formData.tagline}
                        onChange={(e) => updateFormData("tagline", e.target.value)}
                        maxLength={100}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => updateFormData("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.value} value={cat.value}>
                              {cat.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="description">Campaign Description *</Label>
                        <span className="text-xs text-muted-foreground">
                          {formData.description.length} / 100 min
                        </span>
                      </div>
                      <Textarea
                        id="description"
                        placeholder="Describe your business, the problem you're solving, and why investors should support you..."
                        value={formData.description}
                        onChange={(e) => updateFormData("description", e.target.value)}
                        rows={8}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Tip: Include your mission, target customers, and what makes your solution unique
                      </p>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-foreground mb-1">AI Writing Assistant</p>
                          <p className="text-muted-foreground">
                            Our AI can help improve your campaign description for better investor engagement. This feature will be available after you complete the form.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Step 2: Funding Details */}
                {currentStep === 2 && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fundingGoal">Funding Goal (৳) *</Label>
                        <Input
                          id="fundingGoal"
                          type="number"
                          placeholder="e.g., 5000000"
                          value={formData.fundingGoal}
                          onChange={(e) => updateFormData("fundingGoal", e.target.value)}
                          min="100000"
                          required
                        />
                        <p className="text-xs text-muted-foreground">Minimum: ৳1,00,000</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="minInvestment">Minimum Investment (৳) *</Label>
                        <Input
                          id="minInvestment"
                          type="number"
                          placeholder="e.g., 10000"
                          value={formData.minInvestment}
                          onChange={(e) => updateFormData("minInvestment", e.target.value)}
                          min="5000"
                          required
                        />
                        <p className="text-xs text-muted-foreground">Minimum: ৳5,000</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="campaignDuration">Campaign Duration (days) *</Label>
                        <Select 
                          value={formData.campaignDuration} 
                          onValueChange={(value) => updateFormData("campaignDuration", value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30 days</SelectItem>
                            <SelectItem value="45">45 days</SelectItem>
                            <SelectItem value="60">60 days</SelectItem>
                            <SelectItem value="90">90 days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="equityOffered">Equity Offered (%) *</Label>
                        <Input
                          id="equityOffered"
                          type="number"
                          placeholder="e.g., 10"
                          value={formData.equityOffered}
                          onChange={(e) => updateFormData("equityOffered", e.target.value)}
                          min="0.1"
                          max="49"
                          step="0.1"
                          required
                        />
                        <p className="text-xs text-muted-foreground">Maximum: 49%</p>
                      </div>
                    </div>

                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Valuation Calculation</h4>
                      {formData.fundingGoal && formData.equityOffered ? (
                        <div className="space-y-1 text-sm">
                          <p className="text-muted-foreground">
                            Pre-money valuation:{" "}
                            <span className="font-semibold text-foreground">
                              ৳{((parseInt(formData.fundingGoal) / parseFloat(formData.equityOffered)) * 100 - parseInt(formData.fundingGoal)).toLocaleString()}
                            </span>
                          </p>
                          <p className="text-muted-foreground">
                            Post-money valuation:{" "}
                            <span className="font-semibold text-foreground">
                              ৳{((parseInt(formData.fundingGoal) / parseFloat(formData.equityOffered)) * 100).toLocaleString()}
                            </span>
                          </p>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Enter funding goal and equity to see valuation
                        </p>
                      )}
                    </div>
                  </>
                )}

                {/* Step 3: Business Details */}
                {currentStep === 3 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="businessModel">Business Model *</Label>
                      <Textarea
                        id="businessModel"
                        placeholder="How does your business make money? Describe your revenue streams..."
                        value={formData.businessModel}
                        onChange={(e) => updateFormData("businessModel", e.target.value)}
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="targetMarket">Target Market *</Label>
                      <Textarea
                        id="targetMarket"
                        placeholder="Who are your customers? Describe your target market size and demographics..."
                        value={formData.targetMarket}
                        onChange={(e) => updateFormData("targetMarket", e.target.value)}
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="competitiveAdvantage">Competitive Advantage *</Label>
                      <Textarea
                        id="competitiveAdvantage"
                        placeholder="What makes you different from competitors? Why will customers choose you?"
                        value={formData.competitiveAdvantage}
                        onChange={(e) => updateFormData("competitiveAdvantage", e.target.value)}
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="useOfFunds">Use of Funds *</Label>
                      <Textarea
                        id="useOfFunds"
                        placeholder="How will you use the investment? Break down the allocation (e.g., 40% product development, 30% marketing, 20% hiring, 10% operations)"
                        value={formData.useOfFunds}
                        onChange={(e) => updateFormData("useOfFunds", e.target.value)}
                        rows={5}
                        required
                      />
                    </div>
                  </>
                )}

                {/* Step 4: Founder & Team */}
                {currentStep === 4 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="founderName">Founder Name *</Label>
                      <Input
                        id="founderName"
                        placeholder="Your full name"
                        value={formData.founderName}
                        onChange={(e) => updateFormData("founderName", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="founderBio">Founder Bio *</Label>
                      <Textarea
                        id="founderBio"
                        placeholder="Tell investors about your background, experience, and why you're the right person to build this business..."
                        value={formData.founderBio}
                        onChange={(e) => updateFormData("founderBio", e.target.value)}
                        rows={6}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="teamSize">Team Size *</Label>
                      <Input
                        id="teamSize"
                        type="number"
                        placeholder="Number of team members"
                        value={formData.teamSize}
                        onChange={(e) => updateFormData("teamSize", e.target.value)}
                        min="1"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="linkedinUrl">LinkedIn Profile (Optional)</Label>
                      <Input
                        id="linkedinUrl"
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.linkedinUrl}
                        onChange={(e) => updateFormData("linkedinUrl", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="websiteUrl">Company Website (Optional)</Label>
                      <Input
                        id="websiteUrl"
                        type="url"
                        placeholder="https://yourcompany.com"
                        value={formData.websiteUrl}
                        onChange={(e) => updateFormData("websiteUrl", e.target.value)}
                      />
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Upload className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-foreground mb-1">Document Upload</p>
                          <p className="text-muted-foreground mb-2">
                            After submission, you'll be able to upload supporting documents such as business plans, financial projections, and pitch decks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="font-accent"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="font-accent"
                    >
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="font-accent"
                    >
                      {isLoading ? "Submitting..." : "Submit Campaign"}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <h3 className="font-display font-semibold text-foreground mb-2">
                Need Help?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our team is here to support you through the campaign creation process. Check out our resources or contact us directly.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" onClick={() => setLocation("/how-it-works")}>
                  View Guide
                </Button>
                <Button variant="outline" size="sm" onClick={() => setLocation("/contact")}>
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
