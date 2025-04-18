import React, { useState } from 'react';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for class names
const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

// Button Component
const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105";

  const variants = {
    default: "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 shadow-lg hover:shadow-purple-500/40",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "h-10 px-6 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-12 rounded-md px-8 text-lg",
    icon: "h-9 w-9",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  );
});

// Input Component
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border border-purple-500/20 bg-white/5 px-4 py-2 text-base shadow-lg backdrop-blur-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:border-purple-500/50 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

// Card Component
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-purple-500/20 bg-black/40 shadow-xl backdrop-blur-sm",
      className
    )}
    {...props}
  />
));

// Main Dashboard Component
const Dashboard = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStartInterview = async () => {
    if (!name.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/vapi/generate-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      });

      const data = await response.json();
      console.log("API Response:", data); // You can use this to update state and show it
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              PrepWise
            </h1>
          </div>

          {/* Interview Generation Section */}
          <div className="mb-12">
            <h2 className="text-2xl text-center mb-12 font-semibold text-gray-200">
              Interview Generation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AI Interviewer Card */}
              <Card className="p-8 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center mb-6 shadow-lg overflow-hidden">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3.75H6.75a3 3 0 0 0-3 3v2.25M9 20.25H6.75a3 3 0 0 1-3-3V15M20.25 3.75h-2.25a3 3 0 0 0-3 3v2.25M20.25 20.25h-2.25a3 3 0 0 1-3-3V15M3.75 9h16.5M3.75 15h16.5M12 3.75v16.5M8.25 6.75h1.5M8.25 16.5h1.5M14.25 6.75h1.5M14.25 16.5h1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200">AI Interviewer</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
              </Card>

              {/* User Card */}
              <Card className="p-8 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mb-6 shadow-lg overflow-hidden">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200">You</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              </Card>
            </div>

            {/* Input Section */}
            <div className="mt-12 max-w-xl mx-auto">
              <div className="backdrop-blur-sm bg-black/20 rounded-2xl p-6 shadow-xl">
                <Input
                  type="text"
                  placeholder="My name is John Doe, nice to meet you!"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-6"
                />
                <div className="flex justify-center">
                  <Button size="lg" onClick={handleStartInterview} disabled={loading}>
                    {loading ? "Starting..." : "Start Interview"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add display names for components
Button.displayName = "Button";
Input.displayName = "Input";
Card.displayName = "Card";

export default Dashboard;
