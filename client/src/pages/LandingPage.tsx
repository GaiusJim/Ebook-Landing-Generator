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
  X,
  Star
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
            Get the eBook
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground border border-accent/20 mb-6 font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Exclusive Offer
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight md:leading-[1.4] lg:leading-[1.2] mb-6 text-foreground px-2">
                Procrastinating Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Thesis Again?</span>
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-6 mb-8">
                A simple, practical system that helps graduate students stop delaying, start faster, and finally finish their thesis without burnout.
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl md:text-3xl font-bold text-red-600 line-through opacity-80 decoration-2">$100</span>
                  <span className="text-4xl md:text-5xl font-bold text-primary">$20</span>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground font-medium">
                    $20 one-time payment. Instant download. Yours forever.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    That’s less than one late submission fee.
                  </p>
                </div>
                <CtaButton 
                  variant="primary" 
                  size="lg"
                  className="w-full max-w-sm text-lg py-7"
                  onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Yes- I Want 7+ Hours Back
                </CtaButton>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-medium text-muted-foreground/80">
                  <span className="flex items-center gap-1">✔ Read in a weekend</span>
                  <span className="flex items-center gap-1">✔ Apply immediately</span>
                  <span className="flex items-center gap-1">✔ Instant download</span>
                </div>
                <button 
                  onClick={handleNegativeCta}
                  className="text-sm text-muted-foreground hover:text-destructive transition-colors underline underline-offset-4 mt-2"
                >
                  I’ll try to fix it on my own.
                </button>
                <p className="text-xs text-muted-foreground mt-2">
                  PDF + EPUB • Secure checkout • 7-day simple refund
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12 mb-4">
            <p className="text-sm text-muted-foreground italic opacity-80">
              Designed specifically for graduate students struggling with thesis procrastination and research delays.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Block */}
      <section className="py-16 bg-slate-50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Changes After You Apply This System
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100">
                <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600" /> Before
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-400 mt-1">•</span>
                    <span>You open your laptop… and avoid starting</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-400 mt-1">•</span>
                    <span>You don’t know what to work on first</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Deadlines create anxiety</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-400 mt-1">•</span>
                    <span>You start but don’t finish</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" /> After
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You know exactly what to work on daily</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You use short focus blocks</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You define clear finish lines</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You make visible weekly progress</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 px-4">
              Stop Paying With Stress
            </h2>
            <p className="text-lg text-muted-foreground font-light px-4">
              (While It’s Still Affordable)
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <ReasonCard 
              icon={<ShieldCheck className="w-8 h-8 text-primary" />}
              title="Low Risk, High Return"
              description="Get this framework at a fraction of its value. Save months of stress and avoid expensive delays in your graduation."
              delay={0}
            />
            <ReasonCard 
              icon={<Clock className="w-8 h-8 text-blue-500" />}
              title="Built for Real Graduate Life"
              description="Made for students juggling research, classes, and life. Start applying it today—even if your schedule is already packed."
              delay={1}
            />
            <ReasonCard 
              icon={<BrainCircuit className="w-8 h-8 text-purple-500" />}
              title="A Real Solution"
              description="Most students struggle with procrastination. You're not lazy; you just need a system that works with your brain, not against it."
              delay={2}
            />
            <ReasonCard 
              icon={<BookOpen className="w-8 h-8 text-orange-500" />}
              title="A Clear System, Not Motivation"
              description="Stop relying on willpower. Get a step-by-step plan for research and writing that turns 'I should' into 'I'm done'."
              delay={3}
            />
            <ReasonCard 
              icon={<CheckCircle2 className="w-8 h-8 text-teal-500" />}
              title="Short Enough to Finish"
              description="Not a 300-page theory book. Straight to the point so you can finish it in an afternoon and start seeing progress by tomorrow."
              delay={4}
            />
            
            {/* CTA in the grid */}
            <div className="bg-[#1A2B48] text-background p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Fix the System</h3>
              <p className="mb-6 opacity-80">Right now, fixing your procrastination costs less than a single late fee or a Netflix subscription.</p>
              <CtaButton 
                variant="primary" 
                className="w-full"
                onClick={() => {
                  document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get the Thesis System
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">This Is For You If…</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span>You delay writing until pressure forces you</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span>You struggle starting research work</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span>You want structure, not motivation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span>You’ve tried productivity advice but it didn’t stick</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 opacity-60">Not For You If…</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 opacity-60">
                  <X className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <span>You want hype instead of systems</span>
                </li>
                <li className="flex items-start gap-3 opacity-60">
                  <X className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <span>You won’t apply simple steps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-20 bg-muted/30 border-y border-border/50">
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
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 font-display">Start Saving 7+ Hours a Week</h3>
                  <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                    <span className="text-3xl md:text-4xl font-bold text-red-600 line-through opacity-80 decoration-2">$100.00</span>
                    <span className="text-4xl md:text-5xl font-bold text-primary">$20.00</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    One-time payment. Instant download.
                  </p>
                </div>

                <div className="mb-8 w-full">
                  <p className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-wide mb-1 text-center">Student Ratings</p>
                  <div 
                    className="flex flex-col items-center gap-1 py-4 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => {
                      document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="font-bold text-2xl text-muted-foreground">4.5</span>
                    <div className="flex gap-2 justify-center">
                      {[1, 2, 3, 4].map((i) => (
                        <Star key={i} className="w-8 h-8 fill-[#FFD700] text-[#FFD700] stroke-[3px]" />
                      ))}
                      <div className="relative w-8 h-8">
                        <Star className="w-8 h-8 text-[#FFD700] stroke-[3px]" />
                        <div className="absolute inset-0 overflow-hidden w-[50%]">
                          <Star className="w-8 h-8 fill-[#FFD700] text-[#FFD700] stroke-[3px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => window.location.href = "https://ebook.gaiusjimedits.com/b/hoREr/af697751fa02bf6"}
                    className="w-full min-h-[56px] py-3 px-6 text-center text-sm font-bold bg-gradient-to-br from-[hsl(142,76%,45%)] to-[hsl(142,76%,35%)] text-white border-b-4 border-green-800 rounded-xl shadow-none active:scale-[0.98] transition-all"
                  >
                    Start Saving 7+ Hours a Week
                  </button>
                  
                  <button 
                    onClick={handleNegativeCta}
                    className="w-full min-h-[56px] py-3 px-6 text-center text-xs font-medium text-muted-foreground hover:text-destructive transition-colors border border-border rounded-xl active:scale-[0.98]"
                  >
                    No, I'll be part of the 65% who struggle
                  </button>
                </div>
                
                <p className="mt-6 text-xs text-center text-muted-foreground">
                  Secure Download • Instant Access • 7-day refund
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">7-Day Simple Guarantee</h2>
          <p className="text-lg text-muted-foreground">
            Read it. Apply it. If it doesn’t help, email within 7 days for a full refund. No explanations needed.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
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
              author="Richardson"
              role="MSc Student, UK"
              delay={0}
            />
            <TestimonialCard 
              category="Mental Clarity"
              quote="I’d been stuck on my thesis for months. The system is simple but incredibly effective."
              author="Anthony"
              role="PhD Candidate, Canada"
              delay={1}
            />
            <TestimonialCard 
              category="Practicality"
              quote="Short, clear, and full of actionable steps. Most productivity books are too long, this one is perfect."
              author="Briggs"
              role="MA Researcher, Australia"
              delay={2}
            />
            <TestimonialCard 
              category="Progress"
              quote="This isn’t about pep talks. I finally broke the cycle of guilt and procrastination."
              author="Qui"
              role="PhD Student, USA"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#1A2B48] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You can keep procrastinating.<br />
            Or you can fix the system this week for $20.
          </h2>
          <CtaButton 
            variant="primary" 
            size="lg"
            className="w-full max-w-sm text-lg py-7 mb-4"
            onClick={() => window.location.href = "https://ebook.gaiusjimedits.com/b/hoREr/af697751fa02bf6"}
          >
            Yes- I'm Ready to Finish
          </CtaButton>
          <p className="text-slate-400">
            One-time payment. Instant download.
          </p>
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
