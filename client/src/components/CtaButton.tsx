import { cn } from "@/lib/utils";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "xl";
  icon?: ReactNode;
  subtitle?: string;
  isExternal?: boolean;
  href?: string;
  isPayhip?: boolean;
}

export function CtaButton({
  className,
  variant = "primary",
  size = "default",
  children,
  icon,
  subtitle,
  isExternal,
  href,
  isPayhip,
  ...props
}: CtaButtonProps) {
  
  const baseStyles = "inline-flex flex-col items-center justify-center rounded-xl font-bold transition-all duration-300 transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-br from-[hsl(142,76%,45%)] to-[hsl(142,76%,35%)] text-white shadow-xl shadow-green-900/20 hover:shadow-2xl hover:shadow-green-900/30 hover:-translate-y-1 border-b-4 border-green-800",
    secondary: "bg-white text-destructive border-2 border-destructive hover:bg-destructive/5",
    outline: "bg-transparent border-2 border-foreground/20 hover:border-foreground/50 text-foreground",
  };

  const sizes = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg min-w-[200px]",
    xl: "px-10 py-5 text-xl w-full md:w-auto min-w-[280px]",
  };

  const content = (
    <>
      <div className="flex items-center gap-3 relative z-10">
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1 duration-300">{icon}</span>}
      </div>
      {subtitle && (
        <span className="text-xs font-medium opacity-90 mt-1 relative z-10 font-sans tracking-wide uppercase">
          {subtitle}
        </span>
      )}
      
      {/* Shine effect for primary buttons */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(baseStyles, variants[variant], sizes[size], className, isPayhip && "payhip-buy-button")}
        data-theme={isPayhip ? "green" : undefined}
        data-product={isPayhip ? href.split('/').pop() : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...(props as any)}
    >
      {content}
    </button>
  );
}
