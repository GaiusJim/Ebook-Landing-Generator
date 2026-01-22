import { CtaButton } from "@/components/CtaButton";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CountdownTimer } from "@/components/CountdownTimer";
import { 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  ShieldCheck, 
  BrainCircuit, 
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function LandingPage() {
  const { toast } = useToast();

  const handleNegativeCta = () => {
    toast({
      title: "Are you sure?",
      description: "The system has helped 65% of students break the cycle. Don't give up!",
      variant: "default",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      
      {/* Navigation / Header */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight">
            <a href="https://gaiusjimedits.com" className="hover:text-primary transition-colors">
              Gaiusjimedits<span className="text-primary">.</span>
            </a>
          </div>
          <a href="#offer" className="hidden md:block text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            Get the Free Ebook
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground border border-accent/20 mb-8 font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Limited Time Free Offer
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground px-2">
                Are You Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Take Back Control</span> of Your Time?
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                A proven framework to write, research, and submit without burning out.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <CtaButton 
              size="xl" 
              href="https://payhip.com/b/hoREr" 
              isPayhip
              icon={<ArrowRight className="w-5 h-5" />}
              subtitle="Instant Access • No Credit Card"
              className="w-full sm:w-auto"
            >
              Save me 10-15 hours a week
            </CtaButton>
          </motion.div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground flex items-center justify-center gap-6">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Proven System</span>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 px-4">
              🔥 5 Reasons You Should Get This Book Today
            </h2>
            <p className="text-lg text-muted-foreground font-light px-4">
              (While It’s Still Free)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ReasonCard 
              icon={<ShieldCheck className="w-8 h-8 text-primary" />}
              title="You’re Getting a $20 Value For $0"
              description="Books and courses teaching these same systems cost $50+. For a limited time, you get this framework completely free. Save money and save months of stress."
              delay={0}
            />
            <ReasonCard 
              icon={<Clock className="w-8 h-8 text-blue-500" />}
              title="Short, Practical & Made for Students"
              description="Not a 300-page theory book. It’s straight to the point. Finish it in one sitting and start applying it today—even if you’re overwhelmed."
              delay={1}
            />
            <ReasonCard 
              icon={<BrainCircuit className="w-8 h-8 text-purple-500" />}
              title="A Real Solution to a Real Problem"
              description="65% of grad students struggle with procrastination. You're not lazy; you have a system problem. This book gives you the better system you need."
              delay={2}
            />
            <ReasonCard 
              icon={<BookOpen className="w-8 h-8 text-orange-500" />}
              title="A Clear System, Not Just Motivation"
              description="Stop relying on willpower. Get a step-by-step plan and simple daily structure for research, writing, and deadlines that actually sticks."
              delay={3}
            />
            <ReasonCard 
              icon={<CheckCircle2 className="w-8 h-8 text-teal-500" />}
              title="Nothing to Lose, Everything to Gain"
              description="It’s free, short, and practical. Worst case: you get a few ideas. Best case: you finally break the procrastination cycle for good."
              delay={4}
            />
            
            {/* CTA in the grid */}
            <div className="bg-foreground text-background p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Stop Paying with Stress</h3>
              <p className="mb-6 opacity-80">You’re already paying for procrastination. Right now, fixing it costs nothing.</p>
              <CtaButton 
                variant="primary" 
                className="w-full"
                href="https://payhip.com/b/hoREr"
                isPayhip
              >
                Get It Free Now
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-border/50">
            <div className="grid md:grid-cols-2">
              <div className="bg-slate-200 p-6 md:p-12 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-100 opacity-50" />
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                
                {/* 3D Book Mockup */}
                <div className="relative z-10 w-full max-w-[300px] perspective-1000">
                  <motion.div 
                    initial={{ rotateY: 20, rotateX: 5 }}
                    whileInView={{ rotateY: -15, rotateX: 2 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative z-10 shadow-[25px_25px_50px_-15px_rgba(0,0,0,0.4)] rounded-sm overflow-hidden border-r-4 border-slate-300"
                  >
                    <img 
                      src="/book-cover.png" 
                      alt="Practical Ways To Defeat Procrastination in 2026 Book Cover" 
                      className="w-full h-auto block"
                    />
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/5 pointer-events-none" />
                  </motion.div>
                  {/* Shadow beneath */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/20 blur-2xl rounded-[100%] z-0" />
                </div>
              </div>

              <div className="p-6 md:p-12 flex flex-col justify-center">
                <div className="mb-8 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 font-display">Get Full Access Today</h3>
                  <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                    <span className="text-3xl md:text-4xl font-bold text-destructive line-through opacity-50 decoration-2">$20.00</span>
                    <span className="text-4xl md:text-5xl font-bold text-primary">$0.00</span>
                  </div>
                </div>

                <div className="mb-8 w-full">
                  <p className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2 text-center md:text-left">Offer Ends In:</p>
                  <CountdownTimer />
                </div>

                <div className="space-y-4">
                  <CtaButton 
                    size="xl" 
                    className="w-full shadow-xl"
                    href="https://payhip.com/b/hoREr"
                    isPayhip
                    icon={<ArrowRight />}
                  >
                    save me 10-15 hours a week
                  </CtaButton>
                  
                  <button 
                    onClick={handleNegativeCta}
                    className="w-full py-4 text-center text-sm font-medium text-muted-foreground hover:text-destructive transition-colors border border-transparent hover:border-border rounded-xl"
                  >
                    No, I'll be part of the 65% who struggle
                  </button>
                </div>
                
                <p className="mt-6 text-xs text-center text-muted-foreground">
                  100% Free • Secure Download • Instant Access
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ⭐ What People Are Saying
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of students reclaiming their time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TestimonialCard 
              category="Time & Productivity"
              quote="This book helped me reclaim at least 7 hours a week. I finally have my weekends back."
              author="Sarah"
              role="Master’s Student"
              delay={0}
            />
            <TestimonialCard 
              category="Mental Clarity"
              quote="I’d been stuck on my thesis for months. The system is simple but incredibly effective."
              author="Rina"
              role="Grad Researcher"
              delay={1}
            />
            <TestimonialCard 
              category="Practicality"
              quote="Short, clear, and full of actionable steps. Most productivity books are too long, this one is perfect."
              author="Maria"
              role="Master’s Student"
              delay={2}
            />
            <TestimonialCard 
              category="Progress"
              quote="This isn’t about pep talks. I finally broke the cycle of guilt and procrastination."
              author="Alex"
              role="Research Assistant"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="font-display font-bold text-2xl text-white mb-6">
            <a href="https://gaiusjimedits.com" className="hover:text-primary transition-colors">
              Gaiusjimedits<span className="text-primary">.</span>
            </a>
          </div>
          <p className="mb-8 max-w-md mx-auto">
            Helping graduate students and researchers build better systems for work and life.
          </p>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Gaiusjimedits. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ReasonCard({ icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-background p-8 rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="mb-6 p-3 bg-muted w-fit rounded-xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
