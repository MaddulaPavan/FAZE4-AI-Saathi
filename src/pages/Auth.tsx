
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { RoleSelection } from '@/components/auth/RoleSelection';
import { LoginForm } from '@/components/auth/LoginForm';
import { UserRole } from '@/types';

const Auth = () => {
  const [step, setStep] = useState<'role' | 'login'>('role');
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const { user } = useAuth();
  
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  
  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setStep('login');
  };
  
  const handleBack = () => {
    setStep('role');
    setSelectedRole(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-edubridge-purple mb-2">EduBridge</div>
          <p className="text-muted-foreground">Empowering rural education in India</p>
        </div>
        
        <div className="bg-white p-6 shadow-lg rounded-xl border">
          {step === 'role' ? (
            <RoleSelection onRoleSelect={handleRoleSelect} />
          ) : selectedRole ? (
            <LoginForm selectedRole={selectedRole} onBack={handleBack} />
          ) : (
            <Navigate to="/" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
