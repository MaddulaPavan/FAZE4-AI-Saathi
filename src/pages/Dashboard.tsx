import { useState } from "react";
import { ModuleCard } from "@/components/dashboard/ModuleCard";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { ModuleCard as ModuleCardType, Course } from "@/types";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Clock, BookOpen, Star, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const [enrolledCourses] = useState<Course[]>([
    {
      id: "1",
      title: "Introduction to Computer Science",
      description: "Learn the basics of programming, algorithms, and data structures.",
      progress: 65,
      thumbnail: "https://images.unsplash.com/photo-1515879128891-407e95bc2196?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      modules: 10,
      completed: 6
    },
    {
      id: "2",
      title: "English Communication Skills",
      description: "Improve your spoken and written English skills for academic and professional success.",
      progress: 30,
      thumbnail: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      modules: 8,
      completed: 2
    },
    {
      id: "3",
      title: "Mathematics for Class X",
      description: "Comprehensive preparation for Class X mathematics with practice problems.",
      progress: 45,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      modules: 12,
      completed: 5
    }
  ]);

  const [modules] = useState<ModuleCardType[]>([
    {
      id: "lms",
      title: "Learning Management",
      description: "Access your courses and track your learning journey",
      icon: "lms",
      color: "blue",
      path: "/lms"
    },
    {
      id: "communication",
      title: "Communication Skills",
      description: "Improve your speaking and pronunciation",
      icon: "communication",
      color: "green",
      path: "/communication"
    },
    {
      id: "assessments",
      title: "Assessments",
      description: "Take tests and quizzes to evaluate your progress",
      icon: "assessments",
      color: "yellow",
      path: "/assessments"
    },
    {
      id: "results",
      title: "Results & Analytics",
      description: "Check your performance and improvement areas",
      icon: "results",
      color: "yellow",
      path: "/results"
    },
    {
      id: "liveClasses",
      title: "Live Classes",
      description: "Join scheduled live sessions with mentors",
      icon: "liveClasses",
      color: "yellow",
      path: "/live-classes"
    },
    {
      id: "doubtSystem",
      title: "Doubt System",
      description: "Post your questions and get answers from mentors",
      icon: "doubtSystem",
      color: "yellow",
      path: "/doubts"
    },
    {
      id: "skillDevelopment",
      title: "Skill Development",
      description: "Build practical skills for future career success",
      icon: "skillDevelopment",
      color: "red",
      path: "/skills"
    },
    {
      id: "leaderboard",
      title: "Leaderboard",
      description: "See where you stand among your peers",
      icon: "leaderboard",
      color: "purple",
      path: "/leaderboard"
    },
    {
      id: "rewards",
      title: "Rewards & Achievements",
      description: "Earn badges and certificates for your hard work",
      icon: "rewards",
      color: "red",
      path: "/rewards"
    },
    {
      id: "studyMaterial",
      title: "Study Materials",
      description: "Access textbooks, notes, and past papers",
      icon: "studyMaterial",
      color: "green",
      path: "/study-materials"
    },
    {
      id: "research",
      title: "Research & Development",
      description: "Explore scientific research updates and projects",
      icon: "research",
      color: "green",
      path: "/research"
    },
    {
      id: "employment",
      title: "Employment",
      description: "Find internship and job opportunities",
      icon: "employment",
      color: "green",
      path: "/employment"
    },
    {
      id: "scholarships",
      title: "Scholarships",
      description: "Discover scholarship and grant opportunities",
      icon: "scholarships",
      color: "green",
      path: "/scholarships"
    },
    {
      id: "workspace",
      title: "Personal Workspace",
      description: "Your unified space for all learning activities",
      icon: "workspace",
      color: "red",
      path: "/workspace"
    }
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="space-y-8 p-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 p-8 text-white"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <motion.h1
            className="text-4xl font-bold mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome back, Student! 🎓
          </motion.h1>
          <motion.p
            className="text-xl opacity-90"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Ready to continue your learning journey today?
          </motion.p>
        </div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-4 right-8 text-6xl"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          🚀
        </motion.div>
        <motion.div
          className="absolute bottom-4 right-20 text-4xl"
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ repeat: Infinity, duration: 4, delay: 1 }}
        >
          ⭐
        </motion.div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {[
          { icon: Trophy, label: "Achievements", value: "12", color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
          { icon: Target, label: "Goals Completed", value: "8/10", color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
          { icon: Clock, label: "Study Hours", value: "42h", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { icon: TrendingUp, label: "Progress", value: "85%", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" }
        ].map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="student-card hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-full ${stat.bg} mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Learning Journey Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold gradient-text flex items-center">
            <BookOpen className="mr-3 h-8 w-8" />
            My Learning Journey
          </h2>
          <Badge className="achievement-badge">
            <Star className="mr-1 h-4 w-4" />
            On Track!
          </Badge>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {enrolledCourses.map((course, index) => (
            <motion.div key={course.id} variants={itemVariants}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* AI Saathi Modules */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold gradient-text mb-6">AI Saathi Learning Modules</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {modules.map((module, index) => (
            <motion.div 
              key={module.id} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ModuleCard module={module} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Daily Motivation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 p-8 text-white text-center"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <motion.div
            className="text-6xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            💪
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">Daily Motivation</h3>
          <p className="text-lg opacity-90">
            "The expert in anything was once a beginner. Keep learning, keep growing!"
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;