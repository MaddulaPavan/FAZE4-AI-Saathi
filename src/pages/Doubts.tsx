
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, MessageCircle, Search, Filter, PlusCircle, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Doubts = () => {
  const [activeTab, setActiveTab] = useState("browse");
  const [searchQuery, setSearchQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("all");
  
  const doubtQuestions = [
    {
      id: 1,
      question: "How do we solve quadratic equations using the discriminant?",
      subject: "Mathematics",
      topic: "Algebra",
      askedBy: "Rahul S.",
      date: "Today, 10:23 AM",
      replies: 2,
      status: "answered"
    },
    {
      id: 2,
      question: "What is the difference between velocity and acceleration?",
      subject: "Physics",
      topic: "Motion",
      askedBy: "Priya K.",
      date: "Yesterday",
      replies: 3,
      status: "answered"
    },
    {
      id: 3,
      question: "How do I properly structure a persuasive essay?",
      subject: "English",
      topic: "Writing",
      askedBy: "Amit R.",
      date: "April 3, 2025",
      replies: 1,
      status: "answered"
    },
    {
      id: 4,
      question: "What are the key features of object-oriented programming?",
      subject: "Computer Science",
      topic: "Programming",
      askedBy: "Neha P.",
      date: "April 2, 2025",
      replies: 0,
      status: "pending"
    }
  ];

  const myDoubts = [
    {
      id: 5,
      question: "How do I calculate the area of a triangle using vectors?",
      subject: "Mathematics",
      topic: "Vectors",
      date: "April 1, 2025",
      replies: 2,
      status: "answered"
    },
    {
      id: 6,
      question: "What is the process of photosynthesis?",
      subject: "Biology",
      topic: "Plant Physiology",
      date: "March 28, 2025",
      replies: 1,
      status: "answered"
    }
  ];
  
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

  const filteredDoubts = activeTab === "my-doubts" 
    ? myDoubts
    : doubtQuestions.filter(doubt => 
        (subjectFilter === "all" || doubt.subject === subjectFilter) &&
        (searchQuery === "" || 
         doubt.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
         doubt.topic.toLowerCase().includes(searchQuery.toLowerCase()))
      );
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Doubt System</h1>
          <p className="text-muted-foreground">Get your questions answered by mentors</p>
        </div>
        <Button className="bg-edubridge-blue">
          <PlusCircle className="mr-2 h-4 w-4" />
          Post New Doubt
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:w-[400px]">
          <TabsTrigger value="browse">Browse Questions</TabsTrigger>
          <TabsTrigger value="my-doubts">My Doubts</TabsTrigger>
        </TabsList>

        <div className="my-4 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
          <div className="flex gap-2">
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="Biology">Biology</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="browse">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {filteredDoubts.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                <h3 className="text-lg font-medium">No questions found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            ) : (
              filteredDoubts.map((doubt) => (
                <motion.div key={doubt.id} variants={itemVariants}>
                  <Card className="module-card card-hover">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <Badge variant="outline" className="bg-edubridge-blue/10 text-edubridge-blue border-edubridge-blue/30">
                          {doubt.subject}
                        </Badge>
                        <Badge variant={doubt.status === "answered" ? "outline" : "secondary"} className={
                          doubt.status === "answered" 
                            ? "bg-green-500/10 text-green-600 border-green-500/30" 
                            : "bg-yellow-500/10 text-yellow-600 border-yellow-500/30"
                        }>
                          {doubt.status === "answered" ? "Answered" : "Pending"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-medium text-lg">{doubt.question}</h3>
                      <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          <span>Topic: {doubt.topic}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Posted: {doubt.date}</span>
                        </div>
                        {'askedBy' in doubt && (
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>By: {doubt.askedBy}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-muted-foreground">
                        {doubt.replies} {doubt.replies === 1 ? "reply" : "replies"}
                      </div>
                      <Button variant="outline">View Thread</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            )}
          </motion.div>
        </TabsContent>

        <TabsContent value="my-doubts">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {myDoubts.map((doubt) => (
              <motion.div key={doubt.id} variants={itemVariants}>
                <Card className="module-card card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant="outline" className="bg-edubridge-blue/10 text-edubridge-blue border-edubridge-blue/30">
                        {doubt.subject}
                      </Badge>
                      <Badge variant={doubt.status === "answered" ? "outline" : "secondary"} className={
                        doubt.status === "answered" 
                          ? "bg-green-500/10 text-green-600 border-green-500/30" 
                          : "bg-yellow-500/10 text-yellow-600 border-yellow-500/30"
                      }>
                        {doubt.status === "answered" ? "Answered" : "Pending"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium text-lg">{doubt.question}</h3>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        <span>Topic: {doubt.topic}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Posted: {doubt.date}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-muted-foreground">
                      {doubt.replies} {doubt.replies === 1 ? "reply" : "replies"}
                    </div>
                    <Button variant="outline">View Thread</Button>
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

export default Doubts;
