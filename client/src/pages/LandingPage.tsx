import { CtaButton } from "@/components/CtaButton";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CountdownTimer } from "@/components/CountdownTimer";
import { 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  ShieldCheck, 
  BrainCircuit, 
} from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function LandingPage() {
  const { toast } = useToast();

  const handleNegativeCta = () => {
    toast({
      title: "Are you sure?",
      description: "This system has helped many graduate students break the cycle. Dont give up!",
      variant: "default",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      
      {/* Navigation / Header */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 hidden md:block">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight">
          </div>
          <a href="#offer" className="block text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            Get the Free Ebook
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-20 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground border border-accent/20 mb-8 font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Limited Time Free Offer
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-[1.4] mb-6 text-foreground px-2">
                Are You Ready to <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Take Back Control</span> of Your Time?
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-6">
                A proven framework to write, research, and submit without burning out.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground flex items-center justify-center gap-6">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Proven System</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> 95% Success Rate</span>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <ReasonCard 
              icon={<ShieldCheck className="w-8 h-8 text-primary" />}
              title="You’re Getting a $100 Value For $0"
              description="Books and courses teaching these same systems cost $100+. For a limited time, you get this framework completely free. Save money and save months of stress."
              delay={0}
            />
            <ReasonCard 
              icon={<Clock className="w-8 h-8 text-blue-500" />}
              title="Short, Practical & Made for Students"
              description="Not a 300-page theory book. It’s straight to the point. Finish within a week and start applying it today—even if you’re overwhelmed."
              delay={1}
            />
            <ReasonCard 
              icon={<BrainCircuit className="w-8 h-8 text-purple-500" />}
              title="A Real Solution to a Real Problem"
              description="65% of grad students struggle with procrastination. You’re not lazy; you just need a system. This book gives you the better system you need."
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
            <div className="bg-[#1A2B48] text-background p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Stop Paying with Stress</h3>
              <p className="mb-6 opacity-80">You’re already paying for procrastination. Right now, fixing it costs nothing.</p>
              <CtaButton 
                variant="primary" 
                className="w-full"
                onClick={() => {
                  document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
                }}
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
              <div className="bg-slate-50 flex items-center justify-center relative overflow-hidden group">
                <div className="relative z-10 w-full h-full">
                  <img 
                    src="https://images.gaiusjimedits.com/ebook.png" 
                    alt="Practical Ways To Defeat Procrastination in 2026" 
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>

              <div className="p-6 md:p-12 flex flex-col justify-center">
                <div className="mb-8 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 font-display">Get Full Access Today</h3>
                  <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                    <span className="text-3xl md:text-4xl font-bold text-destructive line-through opacity-50 decoration-2">$100.00</span>
                    <span className="text-4xl md:text-5xl font-bold text-primary">$0.00</span>
                  </div>
                </div>

                <div className="mb-8 w-full">
                  <p className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2 text-center md:text-left">Offer Ends In:</p>
                  <CountdownTimer />
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => window.location.href = "https://ebook.gaiusjimedits.com/b/hoREr/af697751fa02bf6"}
                    className="w-full min-h-[56px] py-3 px-6 text-center text-xs font-medium bg-gradient-to-br from-[hsl(142,76%,45%)] to-[hsl(142,76%,35%)] text-white border-b-4 border-green-800 rounded-xl shadow-none active:scale-[0.98] transition-all"
                  >
                    save me 10-15 hours a week
                  </button>
                  
                  <button 
                    onClick={handleNegativeCta}
                    className="w-full min-h-[56px] py-3 px-6 text-center text-xs font-medium text-muted-foreground hover:text-destructive transition-colors border border-border rounded-xl active:scale-[0.98]"
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
              What People Are Saying
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of students reclaiming their time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
      <footer className="py-12 bg-[#1A2B48] text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="font-display font-bold text-2xl text-white mb-6">
            <a href="https://gaiusjimedits.com" className="hover:text-primary transition-colors">
              Gaiusjimedits
            </a>
          </div>
          <p className="mb-8 max-w-md mx-auto">
            Helping graduate students present their research with clarity and confidence. Professional academic editing services you can trust.
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay * 0.05 }}
      className="bg-background p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="mb-4 md:mb-6 p-3 bg-muted w-fit rounded-xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-3 font-display">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
