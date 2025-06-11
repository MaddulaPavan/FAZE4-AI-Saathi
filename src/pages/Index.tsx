import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-blob"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-300/20 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-300/15 rounded-full animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-300/20 rounded-full animate-blob animation-delay-6000"></div>
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        <motion.div 
          className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/30 mb-8"
          animate={{ 
            y: [0, -10, 0],
            rotateY: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut" 
          }}
        >
          <motion.h1 
            className="text-7xl font-bold text-white mb-4"
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0.1em", opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            AI Saathi
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="space-y-4"
        >
          <motion.p 
            className="text-2xl text-white/90 font-light"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Empowering rural education in India
          </motion.p>
          
          <motion.p 
            className="text-lg text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Connecting students, mentors, and opportunities
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-x-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <div className="flex space-x-1">
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0 }}
              />
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
              />
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
              />
            </div>
            <span className="text-white/80 ml-3">Loading your learning journey</span>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Floating educational icons */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
      >
        <div className="text-6xl">📚</div>
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-1/4"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ repeat: Infinity, duration: 4, delay: 1 }}
      >
        <div className="text-5xl">🎓</div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 left-1/6"
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ repeat: Infinity, duration: 3.5, delay: 1.5 }}
      >
        <div className="text-5xl">💡</div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-1/6"
        animate={{ 
          y: [0, -18, 0],
          rotate: [0, -12, 0]
        }}
        transition={{ repeat: Infinity, duration: 4.5, delay: 2 }}
      >
        <div className="text-5xl">🌟</div>
      </motion.div>
    </div>
  );
};

export default Index;