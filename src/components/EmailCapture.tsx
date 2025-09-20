import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you!",
      description: "We'll notify you when we launch. Get ready for something amazing!",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 px-4 text-base border-2 border-muted focus:border-gold transition-colors"
          required
        />
        <Button 
          type="submit" 
          variant="premium" 
          size="lg"
          disabled={isSubmitting}
          className="h-12 px-8 font-semibold tracking-wide"
        >
          {isSubmitting ? "Joining..." : "Notify Me"}
        </Button>
      </form>
      <p className="text-sm text-muted-foreground mt-3 text-center">
        Be the first to know when we launch. No spam, ever.
      </p>
    </div>
  );
};