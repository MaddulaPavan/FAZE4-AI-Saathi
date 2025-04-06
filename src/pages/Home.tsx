import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HomeNavbar } from '@/components/layout/HomeNavbar';
import { 
  GraduationCap, 
  Users, 
  User, 
  ShieldCheck, 
  BookOpen,
  Globe,
  MessageSquare,
  Award,
  UserCheck,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  useEffect(() => {
    // Ensure we start from the top of the page
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-edubridge-blue" />,
      title: "Interactive Learning",
      description: "Access personalized learning materials and interactive lessons designed for various learning styles"
    },
    {
      icon: <Globe className="h-8 w-8 text-edubridge-purple" />,
      title: "Offline Access",
      description: "Download content for offline learning in areas with limited internet connectivity"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-edubridge-blue-bright" />,
      title: "Mentor Connect",
      description: "Connect with experienced mentors and educators for guidance and support"
    },
    {
      icon: <Award className="h-8 w-8 text-edubridge-purple-secondary" />,
      title: "Skill Development",
      description: "Build practical skills with specialized courses and workshops"
    },
    {
      icon: <UserCheck className="h-8 w-8 text-edubridge-blue" />,
      title: "Parental Involvement",
      description: "Tools for parents to monitor and support their child's educational journey"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-edubridge-purple" />,
      title: "Research Access",
      description: "Connect with resources and research materials to expand knowledge"
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
      transition: { duration: 0.5 }
    }
  };

  const roles = [
    {
      id: 'student',
      title: 'Student',
      icon: <GraduationCap className="h-12 w-12 text-edubridge-purple" />,
      description: 'Access courses, tests, and learning resources',
      benefits: [
        'Personalized learning paths',
        'Interactive study materials',
        'Connect with mentors',
        'Track your progress'
      ],
      image: '/placeholder.svg'
    },
    {
      id: 'mentor',
      title: 'Mentor',
      icon: <Users className="h-12 w-12 text-edubridge-blue" />,
      description: 'Guide students, create content, and track progress',
      benefits: [
        'Create educational content',
        'Mentor students remotely',
        'Conduct live classes',
        'Impact rural education'
      ],
      image: '/placeholder.svg'
    },
    {
      id: 'parent',
      title: 'Parent',
      icon: <User className="h-12 w-12 text-edubridge-purple-secondary" />,
      description: 'Monitor your child\'s performance and achievements',
      benefits: [
        'Track academic progress',
        'Communicate with teachers',
        'Access resources for parents',
        'Support your child\'s learning'
      ],
      image: '/placeholder.svg'
    },
    {
      id: 'organization',
      title: 'Organization',
      icon: <ShieldCheck className="h-12 w-12 text-edubridge-blue-bright" />,
      description: 'Manage platform content, users, and analytics for your institution',
      benefits: [
        'Comprehensive analytics',
        'User and content management',
        'Collaborate with mentors and students',
        'Drive educational impact'
      ],
      image: '/placeholder.svg'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Students' },
    { value: '500+', label: 'Mentors' },
    { value: '100+', label: 'Rural Schools' },
    { value: '25+', label: 'Subjects' }
  ];

  const handleRoleSelect = (role: string) => {
    navigate('/auth', { state: { selectedRole: role } });
  };

  const achievements = [
    "Reached 10,000+ students across rural India",
    "Improved learning outcomes by 40% in partner schools",
    "Enabled 85% of students to continue education during pandemic",
    "Connected 500+ expert mentors with rural students",
    "Provided scholarships to 1,200+ deserving students"
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <HomeNavbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        {/* Background with pattern and gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-edubridge-purple/10 to-edubridge-blue/10 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Qjg3RjUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDR2MWgtNHYtMXptMCAyaDR2MWgtNHYtMXptLTIgLTFoNHYxaC00di0xem0tMiAyaDR2MWgtNHYtMXptMTYgLTExaDF2MmgtMXYtMnptMCAxaDF2MWgtMXYtMXptLTE2IC0yaDF2MmgtMXYtMnptMCAxaDF2MWgtMXYtMXptMCAtOGgxdjFoLTF2LTF6bTAgM2gxdjJoLTF2LTJ6bTAgMWgxdjFoLTF2LTF6bTAgNGgxdjJoLTF2LTJ6bTAgMWgxdjFoLTF2LTF6bS0xMiAyMGgxdjJoLTF2LTJ6bTAgMWgxdjFoLTF2LTF6bS0yIC0xaDF2MmgtMXYtMnptMCAxaDF2MWgtMXYtMnptMyA0aDF2MmgtMXYtMnptMCAxaDF2MWgtMXYtMXptMyAtOGgxdjJoLTF2LTJ6bTAgMWgxdjFoLTF2LTF6bTAgLThIMTF2MkgxMHYtMnptMCAySDF2MUgwdi0xem0yIC00aDF2MmgtMXYtMnptMCAxaDF2MWgtMXYtMXptLTQgLTJoMXYyaC0xdi0yem0wIDFoMXYxaC0xdi0xem0xNCAtaDF2MkgxNHYtMnptMCAxaDF2MUgxNHYtMXptNyA0aDF2Mkgwdi0yem0wIDFoMXYxSDB2LTF6bTAgLTJoMXYyaDB2LTJ6bTAgMWgxdjFIMHYtMXptNyAtMTJoMXYyaDB2LTJ6bTAgMWgxdjFIMHYtMXptLTcgLTJoMXYyaDI4di0yem0wIDFoMXYxaC0xdi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-70"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <Badge className="mb-4 bg-white/20 text-edubridge-purple dark:text-edubridge-purple-light backdrop-blur-sm">Empowering Rural Education</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-edubridge-purple to-edubridge-blue dark:from-white dark:to-gray-300">
                AI Saathi: Your Educational Companion
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-200">
                Bridging the educational gap in rural India through technology, mentorship, and innovation
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-edubridge-purple hover:bg-edubridge-purple-secondary text-white"
                  onClick={() => navigate('/auth')}
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-edubridge-purple text-edubridge-purple hover:bg-edubridge-purple/10 dark:border-white dark:text-white"
                  onClick={() => {
                    const featuresSection = document.getElementById('features');
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 flex justify-center relative"
            >
              <div className="relative w-full max-w-lg">
                {/* Main image with decorative elements */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-edubridge-purple-light rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-edubridge-blue rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-edubridge-purple rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
                
                <div className="relative">
                <img
  src="/images/aisaathi1.png"
  alt="Students learning through AI Saathi"
  className="rounded-2xl shadow-2xl w-full object-cover z-10 relative"
  style={{ minHeight: "350px" }}
/>


                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-20 animate-float">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Learning Progress</p>
                        <p className="text-xs text-gray-500">+40% improvement</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-20 animate-float animation-delay-1000">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-edubridge-purple" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Connected Mentors</p>
                        <p className="text-xs text-gray-500">500+ experts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-edubridge-purple dark:text-white opacity-70"
          >
            <ArrowRight className="h-6 w-6 transform rotate-90" />
          </motion.div>
          <span className="text-sm text-gray-600 dark:text-gray-300">Scroll to explore</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-3xl md:text-4xl font-bold text-edubridge-purple">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <Badge className="mb-4">About AI Saathi</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Rural Education Through Technology</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              AI Saathi is a comprehensive educational platform designed to address the unique challenges faced by students in rural India. By combining technology, mentorship, and accessible content, we aim to bridge the educational gap and provide equal opportunities for all.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To empower students in rural India by providing access to quality education, mentorship, and resources that bridge the urban-rural education divide.
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold mt-6 mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A future where every student in rural India has equal access to quality education and opportunities, enabling them to reach their full potential regardless of location or socioeconomic background.
              </p>
              
              <div className="space-y-3 mt-6">
                <h4 className="font-semibold text-lg">Key Achievements</h4>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="h-5 w-5 text-edubridge-purple mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Discover Our Features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
<img
  src="/images/aisaathi2.png"
  alt="Students learning through AI Saathi"
  className="rounded-2xl shadow-2xl w-full object-cover z-10 relative"
  style={{ minHeight: "350px" }}
/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-edubridge-purple opacity-10"></div>
          <div className="absolute -bottom-60 -left-40 w-96 h-96 rounded-full bg-edubridge-blue opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Our Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforming Education For Rural Communities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              AI Saathi offers a comprehensive suite of features designed specifically for the unique needs of rural education, making learning accessible, engaging, and effective.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 inline-block mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section id="roles" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Join Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Role</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you're a student, mentor, parent, or organization, AI Saathi offers tailored features to support your educational journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-2 hover:border-edubridge-purple overflow-hidden"
                  onClick={() => handleRoleSelect(role.id)}>
                  <div className="relative h-40 bg-gradient-to-br from-edubridge-blue/20 to-edubridge-purple/20">
                    <img 
                      src={role.image} 
                      alt={role.title} 
                      className="w-full h-full object-cover mix-blend-overlay opacity-70"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                        {role.icon}
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{role.description}</p>
                      
                      <ul className="text-sm space-y-2 mb-4 w-full">
                        {role.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-edubridge-purple mr-2"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="mt-auto w-full bg-edubridge-purple hover:bg-edubridge-purple-secondary">
                        Continue as {role.title}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-edubridge-blue to-edubridge-purple text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoNHYxaC00di0xem0wLTJoNHYxaC00di0xem0wIDJoNHYxaC00di0xem0tMiAtMWg0djFoLTR2LTF6bS0yIDJoNHYxaC00di0xem0xNiAtMTFoMXYyaC0xdi0yem0wIDFoMXYxaC0xdi0xem0tMTYgLTJoMXYyaC0xdi0yem0wIDFoMXYxaC0xdi0xem0wIC04aDF2MWgtMXYtMXptMCAzaDF2MmgtMXYtMnptMCAxaDF2MWgtMXYtMXptMCA0aDF2MmgtMXYtMnptMCAxaDF2MWgtMXYtMXptLTEyIDIwaDF2MmgtMXYtMnptMCAxaDF2MWgtMXYtMXptLTIgLTFoMXYyaC0xdi0yem0wIDFoMXYxaC0xdi0xem0zIDRoMXYyaC0xdi0yem0wIDFoMXYxaC0xdi0xem0zIC04aDF2MmgtMXYtMnptMCAxaDF2MWgtMXYtMXptMCAtOEgxMXYySDF2LTJ6bTAgMkgxdjFIMHYtMXptMiAtNGgxdjJoLTF2LTJ6bTAgMWgxdjFoLTF2LTF6bS00IC0yaDF2Mkgwdi0yem0wIDFoMXYxSDB2LTF6bTE0IC0zaDF2MkgxNHYtMnptMCAxaDF2MUgxNHYtMXptNyA0aDF2Mkgwdi0yem0wIDFoMXYxSDB2LTF6bTAgLTJoMXYyaDB2LTJ6bTAgMWgxdjFIMHYtMXptNyAtMTJoMXYyaDB2LTJ6bTAgMWgxdjFIMHYtMXptLTcgLTJoMXYyaDI4di0yem0wIDFoMXYxaC0xdi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8">
              Join AI Saathi today and be part of transforming rural education in India.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-edubridge-purple hover:bg-gray-100"
              onClick={() => navigate('/auth')}
            >
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0">
              <div class="flex items-center mb-2">
                <div class="bg-gradient-to-r from-edubridge-blue to-edubridge-purple rounded-lg p-2 mr-2">
                  <span class="text-white font-bold text-xl">AI</span>
                </div>
                <h2 class="text-2xl font-bold">Saathi</h2>
              </div>
              <p class="text-sm text-gray-400">Empowering rural education in India</p>
            </div>
            <div class="flex gap-12">
              <div>
                <h3 class="font-medium mb-2">Platform</h3>
                <ul class="text-sm text-gray-400">
                  <li class="mb-1 hover:text-white transition-colors cursor-pointer">Features</li>
                  <li class="mb-1 hover:text-white transition-colors cursor-pointer">Community</li>
                  <li class="mb-1 hover:text-white transition-colors cursor-pointer">Support</li>
                </ul>
              </div>
              <div>
                <h3 class="font-medium mb-2">Resources</h3>
                <ul class="text-sm text-gray-400">
                  <li class="mb-1 hover:text-white transition-colors cursor-pointer">Blog</li>
                  <li class="mb-1 hover:text-white transition-colors cursor-pointer">FAQs</li>
                  <li class="mb-1 hover:text-white transition-colors cursor-pointer">Contact</li>
                </ul>
              </div>
              <div>
                <h3 class="font-medium mb-2">Legal</h3>
                <ul class="text-sm text-gray-400">
                  <li class="mb-1 hover:text-white transition-colors cursor-pointer">Privacy</li>
                  <li class="mb-1 hover:text-white transition-colors cursor-pointer">Terms</li>
                  <li class="mb-1 hover:text-white transition-colors cursor-pointer">Policies</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400 text-center">
            <p>&copy; {new Date().getFullYear()} AI Saathi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
