
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Use a timeout to add a small delay for the animation
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div 
          className="bg-gradient-to-br from-edubridge-blue to-edubridge-purple p-5 rounded-2xl shadow-lg inline-block mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut" 
          }}
        >
          <h1 className="text-5xl font-bold text-white">EduBridge</h1>
        </motion.div>
        <motion.p 
          className="text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Empowering rural education in India
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-12 h-12 border-t-4 border-edubridge-purple border-solid rounded-full animate-spin"></div>
      </motion.div>
    </div>
  );
};

export default Index;
