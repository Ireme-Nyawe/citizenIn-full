import { useState } from "react";
import { Code } from "lucide-react";
import authService from "../database/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const VerifyLoginOtp = ({ switchToLogin, userId }: any) => {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    setOTP(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await authService.verifyOTP({ otp, userId });
    if (res.status === 200) {
      toast.success(res.message);
      const token = res.data.token;
      const profile = res.data.user;

      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("profile", JSON.stringify(profile));
      if (profile.role === "admin") {
        navigate("/dashboard/admin");
      }
      else if (profile.role === "agency"){
        navigate("/dashboard/agency");
      } 
      else if (profile.role === "citizen"){
        navigate("/dashboard/citizen");
      } 
      else {
        navigate("/get-started");
      }
    } else {
      toast.error(res.message.message);
    }
  };

  return (
    <div className="bg-gray-50 md:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Verify Login with OTP
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your security OTP to access the portal
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                OTP
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Code className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="login_otp"
                  name="login_otp"
                  type="text"
                  autoComplete="otp"
                  required
                  className="appearance-none rounded-md relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your OTP"
                  value={otp}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Verify
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <p>
            Didn't got an OTP?{" "}
            <button
              type="button"
              className="font-medium text-blue-600 hover:text-blue-500"
              onClick={switchToLogin}
            >
              Try Again
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyLoginOtp;
