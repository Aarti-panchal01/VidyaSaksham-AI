import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Phone, Mail } from "lucide-react";

export const FloatingSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Quick support via WhatsApp",
      action: () => window.open("https://wa.me/1234567890", "_blank"),
      color: "bg-success hover:bg-success/90"
    },
    {
      icon: Phone,
      title: "Call Support",
      description: "Speak with our team",
      action: () => window.open("tel:+911234567890"),
      color: "bg-primary hover:bg-primary/90"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email",
      action: () => window.open("mailto:support@vidyasaksham.ai"),
      color: "bg-secondary hover:bg-secondary/90"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Support Options Card */}
      {isOpen && (
        <Card className="lesson-card border-0 mb-4 w-72 animate-fade-in">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Need Help?</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Our support team is here to help you learn better!
            </p>
          </CardHeader>
          
          <CardContent className="space-y-3">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Button
                  key={index}
                  onClick={option.action}
                  className={`w-full justify-start ${option.color} text-white`}
                  variant="default"
                >
                  <Icon className="h-4 w-4 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">{option.title}</div>
                    <div className="text-xs opacity-90">{option.description}</div>
                  </div>
                </Button>
              );
            })}
            
            {/* Quick FAQ Link */}
            <div className="pt-2 border-t">
              <p className="text-xs text-muted-foreground text-center">
                Or check our{" "}
                <a href="#faq" className="text-primary hover:underline font-medium">
                  FAQ section
                </a>{" "}
                for instant answers
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg educational-button ${
          isOpen ? "bg-secondary hover:bg-secondary/90" : ""
        }`}
        size="lg"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
      
      {/* Pulsing animation when closed */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 rounded-full bg-primary/30 animate-ping"></div>
      )}
    </div>
  );
};