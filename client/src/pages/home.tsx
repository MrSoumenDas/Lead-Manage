import { Navbar, Footer } from "@/components/layout/landing-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Users, 
  Zap, 
  Globe2,
  ShieldCheck,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/modern_saas_dashboard_interface_visualization_with_charts_and_data.png";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium rounded-full border border-primary/20 bg-primary/10 text-primary">
                v2.0 is now live 🎉
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-6">
                Manage leads smarter, <br className="hidden md:block" />
                <span className="text-primary">close deals faster.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                The all-in-one CRM platform designed to help sales teams track, nurture, and convert leads into loyal customers with AI-driven insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/dashboard">
                  <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  View Demo
                </Button>
              </div>
            </div>

            <div className="relative mx-auto max-w-5xl rounded-xl border bg-background/50 p-2 shadow-2xl backdrop-blur-sm ring-1 ring-border/50">
              <img 
                src={heroImage} 
                alt="Dashboard Preview" 
                className="rounded-lg w-full h-auto object-cover shadow-sm border"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">Everything you need to grow</h2>
              <p className="text-muted-foreground">
                Powerful features built for modern sales teams. Streamline your workflow and focus on what matters most.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Advanced Analytics",
                  description: "Get real-time insights into your sales pipeline and team performance."
                },
                {
                  icon: Users,
                  title: "Lead Management",
                  description: "Centralize your leads and track every interaction in one place."
                },
                {
                  icon: Zap,
                  title: "Automation",
                  description: "Automate repetitive tasks and follow-ups to save valuable time."
                },
                {
                  icon: Globe2,
                  title: "Global Reach",
                  description: "Multi-currency and multi-language support for international teams."
                },
                {
                  icon: ShieldCheck,
                  title: "Enterprise Security",
                  description: "Bank-grade encryption and role-based access control."
                },
                {
                  icon: MessageSquare,
                  title: "Team Collaboration",
                  description: "Share notes, tasks, and deals with your team seamlessly."
                }
              ].map((feature, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 border-y bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
              Trusted by innovative companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              {/* Mock Logos */}
              <div className="font-display font-bold text-2xl">Acme Corp</div>
              <div className="font-display font-bold text-2xl">GlobalTech</div>
              <div className="font-display font-bold text-2xl">Nebula</div>
              <div className="font-display font-bold text-2xl">FoxRun</div>
              <div className="font-display font-bold text-2xl">Circle</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to scale your sales?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Join thousands of sales teams who have transformed their lead management process with LeadManage.
            </p>
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-primary font-semibold">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
