import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[hsl(var(--primary-hover))] shadow-md hover:shadow-lg text-base font-semibold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 text-base font-semibold",
        outline:
          "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-all text-base font-semibold",
        secondary:
          "bg-background border-2 border-secondary text-secondary hover:bg-[hsl(var(--secondary-hover))] hover:text-secondary-foreground transition-all text-base font-semibold",
        ghost: "hover:bg-accent hover:text-accent-foreground text-base",
        link: "text-primary underline-offset-4 hover:underline text-base",
      },
      size: {
        default: "h-12 px-6 py-3 text-base", /* Increased for better accessibility */
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
