import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Simulate a deadline 3 days from now for urgency
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 3);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center py-6">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-3xl font-bold text-foreground/20 mt-2">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-3xl font-bold text-foreground/20 mt-2">:</div>
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <div className="text-3xl font-bold text-foreground/20 mt-2">:</div>
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white shadow-inner border border-border/50 rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2">
        <span className="text-2xl md:text-4xl font-bold font-mono text-primary">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{label}</span>
    </div>
  );
}
