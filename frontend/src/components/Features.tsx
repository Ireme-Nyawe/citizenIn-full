import {
    MessageSquare,
    Clock,
    GanttChart,
    Users,
    ArrowRight,
    CheckCircle,
  } from "lucide-react";
import { Link } from "react-router-dom";
  
const Features = () => {
  return (
    <div>
        <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What is CitizenIn?
          </h2>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <p className="text-lg mb-4 text-justify">
                CitizenIn is a centralized platform designed to streamline
                communication between citizens and government agencies.
              </p>
              <p className="text-lg mb-4 text-justify">
                Our system replaces fragmented complaint channels with a unified
                solution that ensures timely responses and transparent
                resolution processes.
              </p>
              <p className="text-lg text-justify">
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why CitizenIn?
          </h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-justify">
            Our platform addresses critical challenges in citizen engagement in public services .
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Delayed Responses</h3>
              <p className="text-justify">
                We eliminate problems from routing complaints directly to
                responsible departments, reducing response times by up to 70%.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <GanttChart className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fragmented Systems</h3>
              <p className="text-justify">
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
              <p className="text-justify">
                Transparent tracking and timely updates keep citizens informed,
                building trust and improving satisfaction with government
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                Our system allows categorization and routing directly your issue to
                the right instutution 
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
                        Create a free account with your persona Information and email .
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                        <CheckCircle size={20} />
                      </div>
                      <span className="ml-2">
                        Sign into the system 
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                        <CheckCircle size={20} />
                      </div>
                      <span className="ml-2">
                        Submit your first complaint or feedback
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                        <CheckCircle size={20} />
                      </div>
                      <span className="ml-2">
                        Keep tracking the you complaint 
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                        <CheckCircle size={20} />
                      </div>
                      <span className="ml-2">
                        Download our mobile app for on-the-go access (Coming after)
                      </span>
                    </li>
                  </ul>
                  <Link to ="get-started"><button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium flex items-center">
                    Get Started
                    <ArrowRight className="ml-1" size={16} />
                  </button></Link>
                </div>

                <div className="md:w-1/2">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="text-lg font-medium mb-3">
                      Possible Ways
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
                            available
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
                            iOS & Android (Coming Soon)
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

    </div>
  )
}

export default Features
