import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import MagneticButton from "./MagneticButton";
import { motion, AnimatePresence } from "framer-motion";

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-base shadow-lg backdrop-blur-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:border-zinc-700 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    whileHover={{ scale: 1.02, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={cn(
      "rounded-xl border h-80 border-zinc-800 bg-zinc-900/50 shadow-xl backdrop-blur-sm hover:border-zinc-700 transition-all duration-300",
      className
    )}
    {...props}
  />
));

const Dashboard = () => {
  const [item, setItem] = useState(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [robotActive, setRobotActive] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/database/items"
        );
        const data = await response.json();
        setItem(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load interview data. Please try again later.");
        setItem(null);
      }
    };
    fetchData();
  }, []);

  const handleStartInterview = () => {
    if (!name.trim()) {
      setError("Please enter your name to start the interview");
      return;
    }

    try {
      const startInterview = async () => {
        setCallStatus("CONNECTING");
        const vapi = getVapiInstance();
        await vapi.start(interviewer, {
          variableValues: { questions: formattedQuestions },
        });
      };
      // const response = await fetch(
      //   "https://m-ock-pro-backend.vercel.app/api/vapi/generate-text",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ name }),
      //   }
      // );
      // const data = await response.json();
      // console.log("API Response:", data);
      // setRobotActive(true);
      // setShowConfetti(true);
      // setInterviewStarted(true);
      // setCurrentStep(1);
      // setTimeout(() => {
      //   setRobotActive(false);
      //   setShowConfetti(false);
      // }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to start interview. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem]" />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/10 via-transparent to-zinc-900/50" />
      </div>

      {/* Confetti Effect */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
          >
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  y: -100,
                  x: Math.random() * window.innerWidth,
                  rotate: 0,
                }}
                animate={{
                  y: window.innerHeight + 100,
                  x: Math.random() * window.innerWidth,
                  rotate: 360,
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: 0,
                  ease: "linear",
                }}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: 0,
                  opacity: Math.random(),
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-5xl w-full p-8">
          {/* Interview Generation Section */}
          <div className="mb-12">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-900/20 border border-red-900/50 text-red-200 p-4 rounded-lg mb-6 text-center"
              >
                {error}
              </motion.div>
            )}

            {item ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-4 px-10 py-5 mt-8 bg-zinc-900/50 rounded-xl backdrop-blur-sm border border-zinc-800"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {item.role}
                    </h2>
                    <p className="text-sm text-zinc-400">{item.level}</p>
                  </div>
                  <span className="bg-zinc-800 rounded-lg px-4 py-2 border border-zinc-700">
                    {item.type}
                  </span>
                </div>
              </motion.div>
            ) : (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zinc-600"></div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* AI Interviewer Card */}
              <Card className="p-8 flex flex-col items-center justify-center group">
                <motion.div
                  className="w-40 h-40 object-fit rounded-full bg-zinc-800 flex items-center justify-center mb-6 overflow-hidden group-hover:bg-zinc-900 transition-all duration-300"
                  animate={
                    robotActive
                      ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                          transition: {
                            duration: 0.5,
                            times: [0, 0.2, 0.5, 1],
                          },
                        }
                      : {}
                  }
                >
                  <img
                    className="w-40 h-40 object-contain"
                    src="/src/assets/robo.png"
                    alt="AI Interviewer"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  AI Interviewer
                </h3>
                <div className="w-12 h-1 bg-zinc-700 rounded-full" />
              </Card>

              {/* User Card */}
              <Card className="p-8 flex flex-col items-center justify-center group">
                <div className="w-40 h-40 object-fit rounded-full bg-zinc-800 flex items-center justify-center mb-6 overflow-hidden group-hover:bg-zinc-700 transition-all duration-300">
                  <img
                    className="w-40 h-40 object-contain"
                    src="/src/assets/avatar.png"
                    alt="User Avatar"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">You</h3>
                <div className="w-12 h-1 bg-zinc-700 rounded-full" />
              </Card>
            </div>

            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 max-w-xl mx-auto"
            >
              <div className="backdrop-blur-sm bg-znc-900/50 rounded-xl p-6 shadow-xl  ">
                <Input
                  type="text"
                  placeholder="Enter your name to start the interview..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-6"
                  disabled={loading}
                />
                <div className="flex justify-center rounded-lg bg-blue-500 p-4">
                  <button
                    size="lg"
                    onClick={handleStartInterview}
                    disabled={loading || !name.trim()}
                    className={cn(
                      "transition-all duration-300",
                      (!name.trim() || loading) &&
                        "opacity-50 cursor-not-allowed"
                    )}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white "></div>
                        Starting...
                      </span>
                    ) : (
                      "Start Interview"
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

Input.displayName = "Input";
Card.displayName = "Card";

export default Dashboard;
