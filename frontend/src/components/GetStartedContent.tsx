import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Users, Building, ChevronRight } from "lucide-react";
import LoginContent from "./LoginContent";
import RegisterContent from "./RegisterContent";
import VerifyLoginOtp from "./VerifyLoginOTP";

const GetStartedContent: React.FC = () => {
  const [view, setView] = useState<
    | "login"
    | "register"
    | "verifyLoginOtp"
    | "forgotPassword"
    | "resetPassword"
    | "verifyResetOtp"
  >("login");
  const [userId, setLogingUser] = useState<string>("");

  const switchToRegister = ():any => setView("register");
  const switchToLogin = () => setView("login");
  const switchToVerifyLoginOtp = (user: string) => {
    setView("verifyLoginOtp");
    setLogingUser(user);
  };
  const switchToForgotPassword = () => setView("forgotPassword");
  const switchToResetPassword = () => setView("resetPassword");
  const switchToVerifyResetOtp = () => setView("verifyResetOtp");

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="bg-blue-700 text-white md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Bridging Citizens and Public Services
          </h1>
          <p className="text-xl mb-8">
            Our platform addresses critical challenges in citizen engagement in
            public services.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-600 p-2 rounded-full mr-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Direct Communication</h3>
                <p className="text-blue-100">
                  Connect directly with government services and officials for
                  faster resolution.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 p-2 rounded-full mr-4">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Community Engagement</h3>
                <p className="text-blue-100">
                  Send complaints and feedback to contribute to community
                  initiatives.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 p-2 rounded-full mr-4">
                <Building className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Service Tracking</h3>
                <p className="text-blue-100">
                  Monitor the status of your complaints and public services in
                  real-time.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/features"
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Learn more about our platform
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {view === "login" && (
        <LoginContent
          switchToRegister={switchToRegister}
          switchToVerifyLoginOtp={switchToVerifyLoginOtp}
        />
      )}
      {view === "register" && <RegisterContent switchToLogin={switchToLogin} />}
      {view === "verifyLoginOtp" && (
        <VerifyLoginOtp switchToLogin={switchToLogin} userId={userId}/>
      )}
    </div>
  );
};

export default GetStartedContent;
