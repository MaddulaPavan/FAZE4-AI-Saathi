import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ModuleCard as ModuleCardType } from "@/types";
import { LucideIcon } from "lucide-react";
import { 
  Book, 
  MessageCircle, 
  FileText, 
  BarChart2, 
  Video, 
  HelpCircle, 
  Award, 
  Trophy, 
  Gift, 
  BookOpen, 
  Lightbulb, 
  Briefcase, 
  Coins, 
  Layout 
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Map of module IDs to Lucide icons
const moduleIcons: Record<string, LucideIcon> = {
  lms: Book,
  communication: MessageCircle,
  assessments: FileText,
  results: BarChart2,
  liveClasses: Video,
  doubtSystem: HelpCircle,
  skillDevelopment: Award,
  leaderboard: Trophy,
  rewards: Gift,
  studyMaterial: BookOpen,
  research: Lightbulb,
  employment: Briefcase,
  scholarships: Coins,
  workspace: Layout
};

interface ModuleCardProps {
  module: ModuleCardType;
}

export function ModuleCard({ module }: ModuleCardProps) {
  const IconComponent = moduleIcons[module.icon] || Book;
  
  const cardColorClasses: Record<string, string> = {
    blue: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:from-blue-100 hover:to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 dark:border-blue-800',
    purple: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:from-purple-100 hover:to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20 dark:border-purple-800',
    green: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:from-green-100 hover:to-green-200 dark:from-green-900/20 dark:to-green-800/20 dark:border-green-800',
    yellow: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:from-yellow-100 hover:to-yellow-200 dark:from-yellow-900/20 dark:to-yellow-800/20 dark:border-yellow-800',
    red: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:from-red-100 hover:to-red-200 dark:from-red-900/20 dark:to-red-800/20 dark:border-red-800'
  };
  
  const iconColorClasses: Record<string, string> = {
    blue: 'text-blue-600 dark:text-blue-400',
    purple: 'text-purple-600 dark:text-purple-400',
    green: 'text-green-600 dark:text-green-400',
    yellow: 'text-yellow-600 dark:text-yellow-400',
    red: 'text-red-600 dark:text-red-400'
  };
  
  const bgColor = cardColorClasses[module.color] || cardColorClasses.blue;
  const iconColor = iconColorClasses[module.color] || iconColorClasses.blue;
  
  return (
    <Link to={module.path}>
      <motion.div
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          rotateX: 5
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className={`h-full card-hover border-2 ${bgColor} relative overflow-hidden group`}>
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <CardHeader className="pb-3 relative z-10">
            <div className="flex justify-between items-start">
              <motion.div 
                className={`p-3 rounded-2xl ${bgColor} shadow-lg`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <IconComponent className={`h-8 w-8 ${iconColor}`} />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-3 h-3 bg-green-400 rounded-full shadow-lg animate-pulse"
              />
            </div>
          </CardHeader>
          
          <CardContent className="relative z-10">
            <motion.h3 
              className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {module.title}
            </motion.h3>
            <motion.p 
              className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {module.description}
            </motion.p>
          </CardContent>
          
          <CardFooter className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge 
                variant="outline" 
                className={`${iconColor} border-current bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm font-semibold px-4 py-2 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-200`}
              >
                Explore →
              </Badge>
            </motion.div>
          </CardFooter>
          
          {/* Decorative elements */}
          <div className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-2 left-2 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-lg"></div>
        </Card>
      </motion.div>
    </Link>
  );
}