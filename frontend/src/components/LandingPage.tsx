import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  MessageSquare,
  Clock,
  GanttChart,
  Users,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <section className="min-h-screen bg-blue-700 text-white flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 py-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Complaints and Feedback Matters.
              </h1>
              <p className="text-xl mb-8">
                Submit, track, and resolve complaints or feedback with your
                government institution all in one place <span className="font-bold">#muturage ku isonga</span> .
              </p>
              <div>
                <Link to="/get-started">
                  <button className="cursor-pointer hover:border hover:border-white bg-white hover:bg-blue-700 hover:text-white text-blue-700 px-8 py-3 rounded-md font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What is CitizenIn?
          </h2>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <p className="text-lg mb-4">
                CitizenIn is a centralized platform designed to streamline
                communication between citizens and government agencies.
              </p>
              <p className="text-lg mb-4">
                Our system replaces fragmented complaint channels with a unified
                solution that ensures timely responses and transparent
                resolution processes.
              </p>
              <p className="text-lg">
                With CitizenIn, your concerns don't get lost in bureaucratic
                processes - they reach the right people and get the attention
                they deserve.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="text-blue-700 font-semibold mb-2">Submit</div>
                <p className="text-sm">
                  Easily submit complaints or feedback about city services
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <div className="text-green-700 font-semibold mb-2">Track</div>
                <p className="text-sm">
                  Monitor the status of your submission in real-time
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <div className="text-purple-700 font-semibold mb-2">
                  Resolve
                </div>
                <p className="text-sm">
                  Get timely responses and resolution from agencies
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <div className="text-amber-700 font-semibold mb-2">Engage</div>
                <p className="text-sm">
                  Participate in making your community better
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why CitizenIn?
          </h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Our platform addresses critical challenges in citizen-government
            communication
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Delayed Responses</h3>
              <p>
                We eliminate bottlenecks by routing complaints directly to
                responsible departments, reducing response times by up to 70%.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <GanttChart className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fragmented Systems</h3>
              <p>
                Our centralized platform replaces disconnected communication
                channels with a single point of contact for all citizen
                concerns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Low Satisfaction</h3>
              <p>
                Transparent tracking and timely updates keep citizens informed,
                building trust and improving satisfaction with government
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 relative">
                <MessageSquare className="text-blue-600" size={28} />
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit</h3>
              <p className="text-gray-600">
                File a complaint or feedback through our simple form or mobile
                app
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 relative">
                <GanttChart className="text-purple-600" size={28} />
                <div className="absolute -top-2 -right-2 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Route</h3>
              <p className="text-gray-600">
                Our system automatically categorizes and directs your issue to
                the right department
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 relative">
                <Clock className="text-amber-600" size={28} />
                <div className="absolute -top-2 -right-2 bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track</h3>
              <p className="text-gray-600">
                Follow the progress of your complaint with real-time status
                updates
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 relative">
                <CheckCircle className="text-green-600" size={28} />
                <div className="absolute -top-2 -right-2 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Resolve</h3>
              <p className="text-gray-600">
                Receive confirmation when your issue is addressed and provide
                feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where To Get Started Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Where To Get Started
          </h2>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button className="px-6 py-3 border-b-2 border-blue-600 font-medium text-blue-600">
                  Citizens
                </button>
                <button className="px-6 py-3 text-gray-500 font-medium">
                  Government Agencies
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold mb-4">For Citizens</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                        <CheckCircle size={20} />
                      </div>
                      <span className="ml-2">
                        Create a free account with your email
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                        <CheckCircle size={20} />
                      </div>
                      <span className="ml-2">
                        Verify your identity with a government ID
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                        <CheckCircle size={20} />
                      </div>
                      <span className="ml-2">
                        Submit your first complaint or suggestion
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                        <CheckCircle size={20} />
                      </div>
                      <span className="ml-2">
                        Download our mobile app for on-the-go access
                      </span>
                    </li>
                  </ul>
                  <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium flex items-center">
                    Create an Account
                    <ArrowRight className="ml-1" size={16} />
                  </button>
                </div>

                <div className="md:w-1/2">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="text-lg font-medium mb-3">
                      Available Platforms
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded border border-gray-200 flex items-center">
                        <div className="bg-blue-600 text-white p-2 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="16" height="20" x="4" y="2" rx="2" />
                            <path d="M9 22v-4h6v4" />
                            <path d="M12 18v-4" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">Web App</div>
                          <div className="text-xs text-gray-500">
                            CitizenIn.gov
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200 flex items-center">
                        <div className="bg-blue-600 text-white p-2 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              width="14"
                              height="20"
                              x="5"
                              y="2"
                              rx="2"
                              ry="2"
                            />
                            <path d="M12 18h.01" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">Mobile App</div>
                          <div className="text-xs text-gray-500">
                            iOS & Android
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="mb-6 border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <HelpCircle className="text-blue-500 mr-2" size={20} />
                How long does it take to get a response?
              </h3>
              <p className="text-gray-600">
                Most complaints receive an initial response within 24-48 hours.
                Complex issues may take longer depending on the department
                handling your case.
              </p>
            </div>

            <div className="mb-6 border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <HelpCircle className="text-blue-500 mr-2" size={20} />
                Can I submit anonymous complaints?
              </h3>
              <p className="text-gray-600">
                While you need to create an account to submit complaints, you
                can choose to keep your identity private from the responding
                agency. However, anonymous submissions may limit follow-up
                communication.
              </p>
            </div>

            <div className="mb-6 border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <HelpCircle className="text-blue-500 mr-2" size={20} />
                What types of issues can I report?
              </h3>
              <p className="text-gray-600">
                You can report a wide range of issues including infrastructure
                problems, public safety concerns, environmental issues,
                municipal service failures, and suggestions for community
                improvement.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <HelpCircle className="text-blue-500 mr-2" size={20} />
                How do I know which department is handling my complaint?
              </h3>
              <p className="text-gray-600">
                Once your complaint is processed, you'll receive a notification
                with the name of the department responsible for addressing your
                issue. You can track the status and see department information
                in your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
