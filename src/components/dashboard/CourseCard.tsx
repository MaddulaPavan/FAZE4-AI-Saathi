import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Course } from "@/types";
import { motion } from "framer-motion";
import { PlayCircle, BookOpen, Clock, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const progressColor = course.progress >= 80 ? "bg-green-500" : 
                       course.progress >= 50 ? "bg-blue-500" : "bg-yellow-500";

  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 group">
        <CardHeader className="p-0 relative overflow-hidden">
          <div className="h-48 w-full relative">
            <img 
              src={course.thumbnail} 
              alt={course.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Play button overlay */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
                <PlayCircle className="h-12 w-12 text-white" />
              </div>
            </motion.div>
            
            {/* Progress badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30">
                {course.progress}% Complete
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <motion.h3 
            className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {course.title}
          </motion.h3>
          <motion.p 
            className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {course.description}
          </motion.p>
          
          <div className="space-y-4">
            {/* Progress section */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Progress</span>
                <span className="font-bold">{course.progress}%</span>
              </div>
              <div className="relative">
                <Progress value={course.progress} className="h-3" />
                <div 
                  className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ${progressColor}`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {course.completed} of {course.modules} modules completed
              </div>
            </div>
            
            {/* Course stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <BookOpen className="h-5 w-5 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-medium block">{course.modules}</span>
                <span className="text-xs text-gray-500">Modules</span>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <Clock className="h-5 w-5 mx-auto mb-1 text-green-600 dark:text-green-400" />
                <span className="text-xs font-medium block">20h</span>
                <span className="text-xs text-gray-500">Duration</span>
              </div>
              <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
                <Award className="h-5 w-5 mx-auto mb-1 text-yellow-600 dark:text-yellow-400" />
                <span className="text-xs font-medium block">Yes</span>
                <span className="text-xs text-gray-500">Certificate</span>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-6 pt-0">
          <motion.button 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Continue Learning
          </motion.button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}