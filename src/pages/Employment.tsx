
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Briefcase, MapPin, Building, Calendar, Clock, ExternalLink, Filter, Upload } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const Employment = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [showApplyDialog, setShowApplyDialog] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  
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
  
  const jobListings = [
    {
      id: 1,
      title: "Junior Software Developer",
      company: "TechSolutions India",
      location: "Bangalore",
      type: "Full-time",
      salary: "₹4,00,000 - ₹6,00,000 per annum",
      postedDate: "2 days ago",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      description: "Entry-level software developer position for fresh graduates with knowledge of web development technologies."
    },
    {
      id: 2,
      title: "Data Entry Operator",
      company: "ServiceNow BPO",
      location: "Delhi",
      type: "Part-time",
      salary: "₹12,000 - ₹15,000 per month",
      postedDate: "1 week ago",
      skills: ["MS Excel", "Typing", "Basic Computer Knowledge"],
      description: "Looking for data entry operators with good typing speed and accuracy. Flexible working hours available."
    },
    {
      id: 3,
      title: "Customer Support Executive",
      company: "Global Services Ltd",
      location: "Mumbai",
      type: "Full-time",
      salary: "₹2,50,000 - ₹3,50,000 per annum",
      postedDate: "3 days ago",
      skills: ["English Communication", "Problem Solving", "Customer Service"],
      description: "Customer support role requiring good communication skills and problem-solving abilities."
    },
    {
      id: 4,
      title: "Digital Marketing Intern",
      company: "CreativeMinds Agency",
      location: "Remote",
      type: "Internship",
      salary: "₹10,000 per month",
      postedDate: "5 days ago",
      skills: ["Social Media", "Content Creation", "Basic SEO"],
      description: "Digital marketing internship opportunity for students interested in social media marketing and content creation."
    }
  ];
  
  const internships = [
    {
      id: 5,
      title: "Web Development Intern",
      company: "CodeTech Solutions",
      location: "Pune",
      duration: "3 months",
      stipend: "₹10,000 per month",
      postedDate: "3 days ago",
      skills: ["HTML", "CSS", "JavaScript", "Basic PHP"],
      description: "Web development internship opportunity for college students to gain practical experience."
    },
    {
      id: 6,
      title: "Content Writing Intern",
      company: "Digital Media Hub",
      location: "Remote",
      duration: "2 months",
      stipend: "₹7,000 per month",
      postedDate: "1 week ago",
      skills: ["Content Writing", "Editing", "Research"],
      description: "Content writing internship for students with good writing skills and creativity."
    },
    {
      id: 7,
      title: "Graphic Design Intern",
      company: "CreativeWorks Studio",
      location: "Chennai",
      duration: "3 months",
      stipend: "₹8,000 per month",
      postedDate: "2 days ago",
      skills: ["Photoshop", "Illustrator", "Creative Design"],
      description: "Graphic design internship for students interested in visual communication and design."
    }
  ];
  
  const vocationalTraining = [
    {
      id: 8,
      title: "Mobile Phone Repair Course",
      provider: "Skill India Center",
      location: "Multiple Locations",
      duration: "2 months",
      fee: "Free under PMKVY scheme",
      startDate: "April 15, 2025",
      skills: ["Electronics", "Hardware Repair", "Troubleshooting"],
      description: "Vocational training program for mobile phone repair and maintenance."
    },
    {
      id: 9,
      title: "Beauty & Wellness Training",
      provider: "National Skill Development Corporation",
      location: "Delhi, Mumbai, Kolkata",
      duration: "3 months",
      fee: "Subsidized under government scheme",
      startDate: "May 1, 2025",
      skills: ["Cosmetology", "Hair Styling", "Makeup"],
      description: "Comprehensive beauty and wellness training program with certification."
    },
    {
      id: 10,
      title: "Electrical Wiring & Repair",
      provider: "Industrial Training Institute",
      location: "Multiple Locations",
      duration: "4 months",
      fee: "₹2,000 (Scholarships available)",
      startDate: "April 10, 2025",
      skills: ["Electrical Systems", "Wiring", "Safety Procedures"],
      description: "Hands-on training in electrical wiring, maintenance, and repair."
    }
  ];
  
  const getCurrentData = () => {
    switch (activeTab) {
      case "jobs":
        return jobListings;
      case "internships":
        return internships;
      case "vocational":
        return vocationalTraining;
      default:
        return jobListings;
    }
  };
  
  const filterData = (data: any[]) => {
    return data.filter(item => 
      (searchQuery === "" || 
       item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
       (item.skills && item.skills.some((skill: string) => 
         skill.toLowerCase().includes(searchQuery.toLowerCase())))) &&
      (locationFilter === "all" || item.location === locationFilter || 
       (locationFilter === "Remote" && item.location === "Remote")) &&
      (typeFilter === "all" || 
       (activeTab === "jobs" && item.type === typeFilter) || 
       activeTab !== "jobs")
    );
  };
  
  const filteredData = filterData(getCurrentData());
  
  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setShowApplyDialog(true);
  };
  
  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Employment Opportunities</h1>
            <p className="text-muted-foreground">Find jobs, internships, and vocational training</p>
          </div>
          <Button 
            className="bg-edubridge-blue"
            onClick={() => setShowUploadDialog(true)}
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Resume
          </Button>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <div className="relative mb-4">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder={`Search ${activeTab === "jobs" ? "jobs" : activeTab === "internships" ? "internships" : "training programs"}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 w-full md:w-[500px]">
              <TabsTrigger value="jobs">Jobs</TabsTrigger>
              <TabsTrigger value="internships">Internships</TabsTrigger>
              <TabsTrigger value="vocational">Vocational Training</TabsTrigger>
            </TabsList>
            
            <div className="my-4 flex flex-col md:flex-row gap-4">
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Chennai">Chennai</SelectItem>
                  <SelectItem value="Pune">Pune</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                </SelectContent>
              </Select>
              
              {activeTab === "jobs" && (
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <Clock className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
              )}
              
              <Button 
                variant="outline" 
                className="md:ml-auto"
                onClick={() => {
                  setLocationFilter("all");
                  setTypeFilter("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
            
            <TabsContent value="jobs">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {filteredData.length === 0 ? (
                  <div className="text-center py-12">
                    <Briefcase className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                    <h3 className="text-lg font-medium">No jobs found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters or search term</p>
                  </div>
                ) : (
                  filteredData.map((job) => (
                    <motion.div key={job.id} variants={itemVariants}>
                      <Card className="module-card card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{job.title}</h3>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <Building className="h-4 w-4 mr-1" />
                                {job.company}
                              </div>
                            </div>
                            <Badge variant="outline" className={
                              job.type === "Full-time" 
                                ? "bg-green-500/10 text-green-600 border-green-500/30" 
                                : job.type === "Part-time"
                                  ? "bg-blue-500/10 text-blue-600 border-blue-500/30"
                                  : "bg-yellow-500/10 text-yellow-600 border-yellow-500/30"
                            }>
                              {job.type}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-sm text-muted-foreground">{job.description}</p>
                            
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill: string, index: number) => (
                                <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>Posted {job.postedDate}</span>
                              </div>
                              <div className="flex items-center col-span-2">
                                <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{job.salary}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => handleApplyClick(job)}
                          >
                            Apply Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="internships">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {filteredData.length === 0 ? (
                  <div className="text-center py-12">
                    <Briefcase className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                    <h3 className="text-lg font-medium">No internships found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters or search term</p>
                  </div>
                ) : (
                  filteredData.map((internship) => (
                    <motion.div key={internship.id} variants={itemVariants}>
                      <Card className="module-card card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{internship.title}</h3>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <Building className="h-4 w-4 mr-1" />
                                {internship.company}
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-edubridge-purple/10 text-edubridge-purple border-edubridge-purple/30">
                              Internship
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-sm text-muted-foreground">{internship.description}</p>
                            
                            <div className="flex flex-wrap gap-2">
                              {internship.skills.map((skill: string, index: number) => (
                                <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{internship.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>Duration: {internship.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>Posted {internship.postedDate}</span>
                              </div>
                              <div className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{internship.stipend}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => handleApplyClick(internship)}
                          >
                            Apply Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="vocational">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {filteredData.length === 0 ? (
                  <div className="text-center py-12">
                    <Briefcase className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                    <h3 className="text-lg font-medium">No training programs found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters or search term</p>
                  </div>
                ) : (
                  filteredData.map((program) => (
                    <motion.div key={program.id} variants={itemVariants}>
                      <Card className="module-card card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{program.title}</h3>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <Building className="h-4 w-4 mr-1" />
                                {program.provider}
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-edubridge-blue/10 text-edubridge-blue border-edubridge-blue/30">
                              Training
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-sm text-muted-foreground">{program.description}</p>
                            
                            <div className="flex flex-wrap gap-2">
                              {program.skills.map((skill: string, index: number) => (
                                <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{program.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>Duration: {program.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>Starts: {program.startDate}</span>
                              </div>
                              <div className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>Fee: {program.fee}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => handleApplyClick(program)}
                          >
                            Enroll Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Your Profile</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm space-y-1">
                <div className="font-medium">Resume Status</div>
                <div className="flex items-center">
                  <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30">
                    Needs Update
                  </Badge>
                </div>
              </div>
              
              <div className="text-sm space-y-1">
                <div className="font-medium">Skills Profile</div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Completeness</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-edubridge-blue h-full rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="text-sm space-y-2">
                <div className="font-medium">Job Preferences</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pref-fulltime" />
                    <label htmlFor="pref-fulltime" className="text-sm">Full-time</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pref-parttime" />
                    <label htmlFor="pref-parttime" className="text-sm">Part-time</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pref-internship" checked />
                    <label htmlFor="pref-internship" className="text-sm">Internship</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pref-remote" checked />
                    <label htmlFor="pref-remote" className="text-sm">Remote</label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button 
                className="w-full"
                onClick={() => setShowUploadDialog(true)}
              >
                <Upload className="mr-2 h-4 w-4" />
                Update Resume
              </Button>
              <Button variant="outline" className="w-full">
                Edit Preferences
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      {/* Upload Resume Dialog */}
      <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Your Resume</DialogTitle>
            <DialogDescription>
              Upload your resume to apply for jobs and internships. Supported formats: PDF, DOC, DOCX.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop your resume here, or click to browse
              </p>
              <Button size="sm" variant="outline">
                Browse Files
              </Button>
            </div>
            <div className="text-xs text-muted-foreground">
              Maximum file size: 5MB. Your data is securely stored and only shared with employers when you apply.
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowUploadDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowUploadDialog(false)}>
              Upload Resume
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Apply Dialog */}
      <Dialog open={showApplyDialog} onOpenChange={setShowApplyDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {activeTab === "vocational" ? "Enroll in Program" : "Apply for Position"}
            </DialogTitle>
            <DialogDescription>
              {selectedJob?.title} at {selectedJob?.company || selectedJob?.provider}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            {activeTab !== "vocational" && (
              <div className="space-y-2">
                <div className="font-medium text-sm">Resume</div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>MyResume.pdf</span>
                  </div>
                  <Button size="sm" variant="ghost">
                    Change
                  </Button>
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <div className="font-medium text-sm">
                {activeTab === "vocational" ? "Why are you interested in this program?" : "Cover Letter (Optional)"}
              </div>
              <textarea 
                className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-edubridge-blue"
                placeholder={activeTab === "vocational" 
                  ? "Tell us why you want to join this program and how it will help your career goals..."
                  : "Briefly explain why you're a good fit for this position..."
                }
              ></textarea>
            </div>
            
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-xs">
                I agree to share my profile information and consent to being contacted about this opportunity.
              </label>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowApplyDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowApplyDialog(false)}>
              {activeTab === "vocational" ? "Submit Application" : "Apply Now"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Employment;
