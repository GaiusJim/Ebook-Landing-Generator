import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  category: string;
  delay?: number;
}

export function TestimonialCard({ quote, author, role, category, delay = 0 }: TestimonialProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative"
    >
      <div className="absolute -top-3 -left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
        {category}
      </div>
      
      <div className="flex gap-1 mb-4 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      
      <blockquote className="flex-grow mb-6">
        <p className="text-lg text-foreground/80 font-medium leading-relaxed italic">
          "{quote}"
        </p>
      </blockquote>
      
      <div className="mt-auto border-t border-border/50 pt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-display text-xl">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-foreground font-display">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}
