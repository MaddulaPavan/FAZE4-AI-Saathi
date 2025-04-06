
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HelpCircle,
  Search,
  Clock,
  CheckCircle2,
  MessageSquare,
  Filter,
  ChevronDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Doubt {
  id: string;
  title: string;
  question: string;
  subject: string;
  status: "answered" | "pending";
  date: string;
  attachments?: number;
  answers?: {
    id: string;
    user: {
      name: string;
      avatar?: string;
    };
    text: string;
    date: string;
    isVerified?: boolean;
  }[];
}

const Doubts = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAskForm, setShowAskForm] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  // Sample doubts data
  const doubts: Doubt[] = [
    {
      id: "1",
      title: "How do I solve quadratic equations?",
      question:
        "I'm struggling with solving quadratic equations. Can someone explain the step-by-step process to solve equations like x² + 5x + 6 = 0?",
      subject: "Mathematics",
      status: "answered",
      date: "2023-12-10",
      attachments: 1,
      answers: [
        {
          id: "a1",
          user: {
            name: "Priya Sharma",
            avatar: "/placeholder.svg",
          },
          text: "To solve a quadratic equation like x² + 5x + 6 = 0, you can use factoring. First, find two numbers that multiply to give 6 and add up to 5. Those numbers are 2 and 3. So we can rewrite the equation as (x + 2)(x + 3) = 0. Therefore, x = -2 or x = -3.",
          date: "2023-12-11",
          isVerified: true,
        },
      ],
    },
    {
      id: "2",
      title: "What is photosynthesis?",
      question:
        "Can someone explain the process of photosynthesis in simple terms? What are the inputs and outputs?",
      subject: "Science",
      status: "answered",
      date: "2023-12-08",
      answers: [
        {
          id: "a2",
          user: {
            name: "Rahul Verma",
            avatar: "/placeholder.svg",
          },
          text: "Photosynthesis is the process by which plants create their own food. They use sunlight, water, and carbon dioxide to create glucose (sugar) and oxygen. The sunlight is captured by chlorophyll in the plant's leaves. The equation is: 6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ + 6O₂",
          date: "2023-12-09",
          isVerified: true,
        },
      ],
    },
    {
      id: "3",
      title: "How to analyze a poem?",
      question:
        "I need to analyze a poem for my English class but I'm not sure where to start. What elements should I focus on?",
      subject: "English",
      status: "pending",
      date: "2023-12-12",
    },
    {
      id: "4",
      title: "What caused World War I?",
      question:
        "I'm confused about the causes of World War I. Can someone explain the main factors that led to the war?",
      subject: "History",
      status: "answered",
      date: "2023-12-07",
      answers: [
        {
          id: "a3",
          user: {
            name: "Amit Kumar",
            avatar: "/placeholder.svg",
          },
          text: "World War I was caused by several interconnected factors: nationalism, militarism, imperialism, and alliance systems. The immediate trigger was the assassination of Archduke Franz Ferdinand of Austria-Hungary in June 1914. This set off a chain reaction due to the complex alliance systems in place at the time.",
          date: "2023-12-08",
          isVerified: false,
        },
      ],
    },
    {
      id: "5",
      title: "How does Newton's Third Law work?",
      question:
        "I'm having trouble understanding Newton's Third Law. Can someone provide examples?",
      subject: "Physics",
      status: "pending",
      date: "2023-12-11",
    },
  ];

  // Filter doubts based on search query and filters
  const filteredDoubts = doubts.filter((doubt) => {
    const matchesSearch =
      doubt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doubt.question.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus =
      !selectedStatus || 
      (selectedStatus === "answered" && doubt.status === "answered") || 
      (selectedStatus === "pending" && doubt.status === "pending");
    
    const matchesSubject =
      !selectedSubject || doubt.subject === selectedSubject;
    
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "answered" && doubt.status === "answered") ||
      (activeTab === "pending" && doubt.status === "pending");
    
    return matchesSearch && matchesStatus && matchesSubject && matchesTab;
  });

  // Get unique subjects for the filter
  const subjects = Array.from(new Set(doubts.map((doubt) => doubt.subject)));

  const renderDoubtCard = (doubt: Doubt) => {
    return (
      <motion.div
        key={doubt.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="mb-4 hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{doubt.title}</CardTitle>
                <CardDescription className="mt-1">
                  Posted on {new Date(doubt.date).toLocaleDateString()}
                </CardDescription>
              </div>
              <Badge variant={doubt.status === "answered" ? "success" : "outline"}>
                {doubt.status === "answered" ? (
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                ) : (
                  <Clock className="w-3 h-3 mr-1" />
                )}
                {doubt.status === "answered" ? "Answered" : "Pending"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <p className="mb-4">{doubt.question}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">{doubt.subject}</Badge>
                {doubt.attachments && (
                  <Badge variant="outline">
                    {doubt.attachments} attachment
                    {doubt.attachments > 1 ? "s" : ""}
                  </Badge>
                )}
              </div>
            </div>
            
            {doubt.answers && doubt.answers.length > 0 && (
              <div className="mt-6 border-t pt-4">
                <h4 className="font-medium mb-3 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Answer{doubt.answers.length > 1 ? "s" : ""}
                </h4>
                {doubt.answers.map((answer) => (
                  <div key={answer.id} className="flex gap-3 mb-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={answer.user.avatar} />
                      <AvatarFallback>
                        {answer.user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{answer.user.name}</span>
                        {answer.isVerified && (
                          <Badge variant="secondary" className="text-xs">
                            Verified Mentor
                          </Badge>
                        )}
                      </div>
                      <p className="mt-1">{answer.text}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(answer.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="border-t pt-4 pb-4">
            <Button variant="outline" className="w-full">
              {doubt.status === "answered" ? "View Discussion" : "Answer This Question"}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Doubt System</h1>
            <p className="text-muted-foreground">Ask questions and get answers from peers and mentors</p>
          </div>
          <Button
            onClick={() => setShowAskForm(!showAskForm)}
            className="mt-4 md:mt-0"
          >
            Ask a Question
          </Button>
        </div>

        {showAskForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Ask a New Question</CardTitle>
                <CardDescription>
                  Provide details about your question to get accurate answers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-2">
                      Question Title
                    </label>
                    <Input
                      id="title"
                      placeholder="Enter a clear, specific title for your question"
                    />
                  </div>
                  <div>
                    <label htmlFor="question" className="block text-sm font-medium mb-2">
                      Question Details
                    </label>
                    <Textarea
                      id="question"
                      placeholder="Describe your question in detail. Include what you've tried already."
                      className="min-h-[120px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="attachment" className="block text-sm font-medium mb-2">
                      Attachment (Optional)
                    </label>
                    <Input id="attachment" type="file" />
                    <p className="text-xs text-muted-foreground mt-1">
                      You can attach images, PDFs, or other files (max. 5MB)
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowAskForm(false)}>
                  Cancel
                </Button>
                <Button>Submit Question</Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row gap-4 my-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" />
                  Subject
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedSubject(null)}>
                  All Subjects
                </DropdownMenuItem>
                {subjects.map((subject) => (
                  <DropdownMenuItem
                    key={subject}
                    onClick={() => setSelectedSubject(subject)}
                  >
                    {subject}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" />
                  Status
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedStatus(null)}>
                  All Statuses
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("answered")}>
                  Answered
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("pending")}>
                  Pending
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Questions</TabsTrigger>
            <TabsTrigger value="answered">Answered</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {filteredDoubts.length === 0 ? (
              <div className="text-center py-10">
                <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No questions found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filters, or ask a new question
                </p>
              </div>
            ) : (
              filteredDoubts.map(renderDoubtCard)
            )}
          </TabsContent>

          <TabsContent value="answered">
            {filteredDoubts.filter((d) => d.status === "answered").length === 0 ? (
              <div className="text-center py-10">
                <CheckCircle2 className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No answered questions found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              filteredDoubts
                .filter((d) => d.status === "answered")
                .map(renderDoubtCard)
            )}
          </TabsContent>

          <TabsContent value="pending">
            {filteredDoubts.filter((d) => d.status === "pending").length === 0 ? (
              <div className="text-center py-10">
                <Clock className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No pending questions found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              filteredDoubts
                .filter((d) => d.status === "pending")
                .map(renderDoubtCard)
            )}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Doubts;
