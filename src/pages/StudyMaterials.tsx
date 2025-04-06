
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, BookOpen, FileText, Download, BookmarkPlus, Filter, ArrowUpDown, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { motion } from "framer-motion";

const StudyMaterials = () => {
  const [activeTab, setActiveTab] = useState("textbooks");
  const [searchQuery, setSearchQuery] = useState("");
  const [classFilter, setClassFilter] = useState("all");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  
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
  
  const textbooks = [
    {
      id: 1,
      title: "Mathematics - Class X",
      description: "NCERT Mathematics textbook for Class 10",
      subject: "Mathematics",
      class: "Class X",
      source: "NCERT",
      fileSize: "15 MB",
      format: "PDF"
    },
    {
      id: 2,
      title: "Science - Class X",
      description: "NCERT Science textbook covering Physics, Chemistry and Biology for Class 10",
      subject: "Science",
      class: "Class X",
      source: "NCERT",
      fileSize: "18 MB",
      format: "PDF"
    },
    {
      id: 3,
      title: "English - Class X",
      description: "NCERT English textbook with literature and grammar for Class 10",
      subject: "English",
      class: "Class X",
      source: "NCERT",
      fileSize: "12 MB",
      format: "PDF"
    },
    {
      id: 4,
      title: "Social Science - Class X",
      description: "NCERT Social Science textbook covering History, Geography, Political Science and Economics for Class 10",
      subject: "Social Science",
      class: "Class X",
      source: "NCERT",
      fileSize: "20 MB",
      format: "PDF"
    }
  ];
  
  const questionPapers = [
    {
      id: 5,
      title: "Mathematics - Class X - 2024",
      description: "CBSE Class 10 Mathematics question paper with solutions",
      subject: "Mathematics",
      class: "Class X", 
      year: "2024",
      fileSize: "5 MB",
      format: "PDF"
    },
    {
      id: 6,
      title: "Science - Class X - 2024",
      description: "CBSE Class 10 Science question paper with solutions",
      subject: "Science",
      class: "Class X",
      year: "2024",
      fileSize: "6 MB",
      format: "PDF"
    },
    {
      id: 7,
      title: "Mathematics - Class X - 2023",
      description: "CBSE Class 10 Mathematics question paper with solutions",
      subject: "Mathematics",
      class: "Class X",
      year: "2023",
      fileSize: "5 MB",
      format: "PDF"
    },
    {
      id: 8,
      title: "Science - Class X - 2023",
      description: "CBSE Class 10 Science question paper with solutions",
      subject: "Science",
      class: "Class X",
      year: "2023",
      fileSize: "6 MB",
      format: "PDF"
    }
  ];
  
  const resourceGuides = [
    {
      id: 9,
      title: "NEET Preparation Guide",
      description: "Complete guide for NEET preparation with study plan and tips",
      subject: "Multiple",
      category: "Competitive Exam",
      fileSize: "8 MB",
      format: "PDF"
    },
    {
      id: 10,
      title: "JEE Main Preparation Guide",
      description: "Complete guide for JEE Main preparation with sample problems",
      subject: "Multiple",
      category: "Competitive Exam",
      fileSize: "10 MB",
      format: "PDF"
    },
    {
      id: 11,
      title: "Government Scholarship Guide",
      description: "Comprehensive guide to government scholarships available for students",
      subject: "Career",
      category: "Scholarship",
      fileSize: "4 MB",
      format: "PDF"
    }
  ];
  
  const getCurrentData = () => {
    switch (activeTab) {
      case "textbooks":
        return textbooks;
      case "questionPapers":
        return questionPapers;
      case "resourceGuides":
        return resourceGuides;
      default:
        return textbooks;
    }
  };
  
  const filteredData = getCurrentData().filter(item => 
    (classFilter === "all" || item.class === classFilter) &&
    (subjectFilter === "all" || item.subject === subjectFilter) &&
    (searchQuery === "" || 
     item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Study Materials</h1>
            <p className="text-muted-foreground">Access textbooks, question papers, and resources</p>
          </div>
          <Button variant="outline">
            <BookmarkPlus className="mr-2 h-4 w-4" />
            View Bookmarks
          </Button>
        </div>
      </motion.div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 w-full md:w-[500px]">
          <TabsTrigger value="textbooks">Textbooks</TabsTrigger>
          <TabsTrigger value="questionPapers">Question Papers</TabsTrigger>
          <TabsTrigger value="resourceGuides">Resource Guides</TabsTrigger>
        </TabsList>
        
        <div className="my-4">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center justify-between">
              <div className="relative flex-grow">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search study materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8"
                />
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="ml-2">
                  <Filter className="h-4 w-4 mr-1" />
                  Filters
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Select value={classFilter} onValueChange={setClassFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Classes</SelectItem>
                      <SelectItem value="Class IX">Class IX</SelectItem>
                      <SelectItem value="Class X">Class X</SelectItem>
                      <SelectItem value="Class XI">Class XI</SelectItem>
                      <SelectItem value="Class XII">Class XII</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={subjectFilter} onValueChange={setSubjectFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Subjects</SelectItem>
                      <SelectItem value="Mathematics">Mathematics</SelectItem>
                      <SelectItem value="Science">Science</SelectItem>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Social Science">Social Science</SelectItem>
                      <SelectItem value="Multiple">Multiple</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" onClick={() => {
                  setClassFilter("all");
                  setSubjectFilter("all");
                  setSearchQuery("");
                }}>
                  Clear Filters
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        
        <TabsContent value="textbooks">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {filteredData.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="module-card card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant="outline" className="bg-edubridge-blue/10 text-edubridge-blue border-edubridge-blue/30">
                        {item.subject}
                      </Badge>
                      <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">
                        {item.source}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 h-fit">
                        <BookOpen className="h-6 w-6 text-edubridge-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {item.class}
                          </span>
                          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {item.format}
                          </span>
                          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {item.fileSize}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <BookmarkPlus className="h-4 w-4" />
                    </Button>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
        
        <TabsContent value="questionPapers">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {filteredData.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="module-card card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant="outline" className="bg-edubridge-blue/10 text-edubridge-blue border-edubridge-blue/30">
                        {item.subject}
                      </Badge>
                      <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30">
                        {item.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 h-fit">
                        <FileText className="h-6 w-6 text-edubridge-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {item.class}
                          </span>
                          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {item.format}
                          </span>
                          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {item.fileSize}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <BookmarkPlus className="h-4 w-4" />
                    </Button>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
        
        <TabsContent value="resourceGuides">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {filteredData.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="module-card card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant="outline" className="bg-edubridge-purple/10 text-edubridge-purple border-edubridge-purple/30">
                        {item.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 h-fit">
                        <BookOpen className="h-6 w-6 text-edubridge-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {item.subject}
                          </span>
                          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {item.format}
                          </span>
                          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {item.fileSize}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <BookmarkPlus className="h-4 w-4" />
                    </Button>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyMaterials;
