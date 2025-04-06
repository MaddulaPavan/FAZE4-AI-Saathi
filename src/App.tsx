
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { MainLayout } from "@/components/layout/MainLayout";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import LMS from "./pages/LMS";
import Communication from "./pages/Communication";
import NotFound from "./pages/NotFound";

// Import other pages as they are created

const queryClient = new QueryClient();

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem("edubridge_user") !== null;
  
  return isAuthenticated ? (
    <MainLayout>{element}</MainLayout>
  ) : (
    <Navigate to="/auth" />
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" />} />
            <Route path="/auth" element={<Auth />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/lms" element={<ProtectedRoute element={<LMS />} />} />
            <Route path="/communication" element={<ProtectedRoute element={<Communication />} />} />
            
            {/* Additional routes to be added as components are developed */}
            <Route path="/assessments" element={<ProtectedRoute element={<div className="p-4">Assessments Module (Coming Soon)</div>} />} />
            <Route path="/results" element={<ProtectedRoute element={<div className="p-4">Results Module (Coming Soon)</div>} />} />
            <Route path="/live-classes" element={<ProtectedRoute element={<div className="p-4">Live Classes Module (Coming Soon)</div>} />} />
            <Route path="/doubts" element={<ProtectedRoute element={<div className="p-4">Doubt System Module (Coming Soon)</div>} />} />
            <Route path="/skills" element={<ProtectedRoute element={<div className="p-4">Skill Development Module (Coming Soon)</div>} />} />
            <Route path="/leaderboard" element={<ProtectedRoute element={<div className="p-4">Leaderboard Module (Coming Soon)</div>} />} />
            <Route path="/rewards" element={<ProtectedRoute element={<div className="p-4">Rewards Module (Coming Soon)</div>} />} />
            <Route path="/study-materials" element={<ProtectedRoute element={<div className="p-4">Study Materials Module (Coming Soon)</div>} />} />
            <Route path="/research" element={<ProtectedRoute element={<div className="p-4">Research Module (Coming Soon)</div>} />} />
            <Route path="/employment" element={<ProtectedRoute element={<div className="p-4">Employment Module (Coming Soon)</div>} />} />
            <Route path="/scholarships" element={<ProtectedRoute element={<div className="p-4">Scholarships Module (Coming Soon)</div>} />} />
            <Route path="/workspace" element={<ProtectedRoute element={<div className="p-4">Workspace Module (Coming Soon)</div>} />} />
            
            {/* Mentor/Parent/Admin Routes */}
            <Route path="/students" element={<ProtectedRoute element={<div className="p-4">Students Module (Coming Soon)</div>} />} />
            <Route path="/create-content" element={<ProtectedRoute element={<div className="p-4">Content Creation Module (Coming Soon)</div>} />} />
            <Route path="/live-sessions" element={<ProtectedRoute element={<div className="p-4">Live Sessions Module (Coming Soon)</div>} />} />
            <Route path="/answer-doubts" element={<ProtectedRoute element={<div className="p-4">Answer Doubts Module (Coming Soon)</div>} />} />
            <Route path="/child-progress" element={<ProtectedRoute element={<div className="p-4">Child Progress Module (Coming Soon)</div>} />} />
            <Route path="/reports" element={<ProtectedRoute element={<div className="p-4">Reports Module (Coming Soon)</div>} />} />
            <Route path="/mentor-connect" element={<ProtectedRoute element={<div className="p-4">Mentor Connect Module (Coming Soon)</div>} />} />
            <Route path="/users" element={<ProtectedRoute element={<div className="p-4">Users Module (Coming Soon)</div>} />} />
            <Route path="/content" element={<ProtectedRoute element={<div className="p-4">Content Module (Coming Soon)</div>} />} />
            <Route path="/analytics" element={<ProtectedRoute element={<div className="p-4">Analytics Module (Coming Soon)</div>} />} />
            <Route path="/settings" element={<ProtectedRoute element={<div className="p-4">Settings Module (Coming Soon)</div>} />} />
            
            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
