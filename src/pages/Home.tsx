
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  
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
      ]
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
      ]
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
      ]
    },
    {
      id: 'admin',
      title: 'Admin',
      icon: <ShieldCheck className="h-12 w-12 text-edubridge-blue-bright" />,
      description: 'Manage platform content, users, and analytics',
      benefits: [
        'Comprehensive analytics',
        'User management',
        'Content moderation',
        'System administration'
      ]
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-edubridge-purple to-edubridge-blue py-20 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Welcome to AI Saathi
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8"
              >
                Bridging the educational gap in rural India through technology and mentorship.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-edubridge-purple hover:bg-gray-100"
                  onClick={() => navigate('/auth')}
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-edubridge-purple"
                  onClick={() => {
                    const featuresSection = document.getElementById('features');
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                src="/placeholder.svg" 
                alt="Rural education illustration" 
                className="max-w-full h-auto rounded-lg shadow-2xl"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6"
              >
                <p className="text-3xl md:text-4xl font-bold text-edubridge-purple">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-900" id="about">
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
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A future where every student in rural India has equal access to quality education and opportunities, enabling them to reach their full potential regardless of location or socioeconomic background.
              </p>
              
              <Button 
                variant="outline" 
                className="mt-2"
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
                src="/placeholder.svg" 
                alt="Rural students learning" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800" id="features">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
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
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Join Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Role</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you're a student, mentor, parent, or administrator, AI Saathi offers tailored features to support your educational journey.
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
                <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-2 hover:border-edubridge-purple"
                  onClick={() => handleRoleSelect(role.id)}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4">
                        {role.icon}
                      </div>
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
                      
                      <Button className="mt-auto w-full">
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
      <section className="py-20 bg-gradient-to-br from-edubridge-blue to-edubridge-purple text-white">
        <div className="container mx-auto px-4 text-center">
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">AI Saathi</h2>
              <p className="text-sm text-gray-400">Empowering rural education in India</p>
            </div>
            <div className="flex space-x-8">
              <div>
                <h3 className="font-medium mb-2">Platform</h3>
                <ul className="text-sm text-gray-400">
                  <li className="mb-1">Features</li>
                  <li className="mb-1">Community</li>
                  <li className="mb-1">Support</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Resources</h3>
                <ul className="text-sm text-gray-400">
                  <li className="mb-1">Blog</li>
                  <li className="mb-1">FAQs</li>
                  <li className="mb-1">Contact</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Legal</h3>
                <ul className="text-sm text-gray-400">
                  <li className="mb-1">Privacy</li>
                  <li className="mb-1">Terms</li>
                  <li className="mb-1">Policies</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400 text-center">
            <p>&copy; 2023 AI Saathi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
