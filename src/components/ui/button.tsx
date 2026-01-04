import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium font-body tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm shadow-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground rounded-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-sm",
        ghost: 
          "text-foreground hover:bg-accent hover:text-accent-foreground rounded-sm",
        link: 
          "text-primary underline-offset-4 hover:underline",
        // Premium variants for Flofen
        hero: 
          "bg-gold text-white hover:bg-gold/90 shadow-glow uppercase tracking-[0.2em] font-semibold rounded-sm hover:-translate-y-0.5",
        "hero-outline":
          "border-2 border-warm-white bg-transparent text-warm-white hover:bg-warm-white/10 uppercase tracking-[0.2em] font-semibold rounded-sm hover:-translate-y-0.5",
        premium:
          "bg-charcoal text-warm-white hover:bg-charcoal/90 uppercase tracking-[0.15em] font-semibold shadow-sm rounded-sm hover:-translate-y-0.5",
        "premium-outline":
          "border border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-warm-white uppercase tracking-[0.15em] font-medium rounded-sm hover:-translate-y-0.5",
        gold:
          "bg-gradient-to-r from-gold to-gold-muted text-white hover:opacity-90 shadow-glow uppercase tracking-[0.15em] font-semibold rounded-sm hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
