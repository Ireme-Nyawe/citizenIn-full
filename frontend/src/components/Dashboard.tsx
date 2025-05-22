import React from "react";
import {
  Users,
  TrendingUp,
  MessageSquare,
  Vote,
  Building2,
  CheckCircle,
  BarChart3,
  Globe,
  Heart,
  Shield,
  Target,
  Lightbulb,
  Clock,
  Award,
  HandHeart,
  UserCheck
} from "lucide-react";

const CitizenEngagementDashboard: React.FC = () => {
  const stats = [
    {
      title: "Active Citizens",
      value: "2.4M+",
      change: "+12%",
      icon: Users,
      color: "bg-blue-500",
      description: "Citizens actively participating in governance"
    },
    {
      title: "Public Services Improved",
      value: "847",
      change: "+23%",
      icon: TrendingUp,
      color: "bg-green-500",
      description: "Services enhanced through citizen feedback"
    },
    {
      title: "Complaints Resolved",
      value: "15,892",
      change: "+18%",
      icon: CheckCircle,
      color: "bg-purple-500",
      description: "Issues addressed through public participation"
    },
    {
      title: "Community Projects",
      value: "324",
      change: "+31%",
      icon: Building2,
      color: "bg-orange-500",
      description: "Initiatives driven by citizen involvement"
    }
  ];

  const engagementBenefits = [
    {
      icon: Shield,
      title: "Better Transparency",
      description: "87% increase in government transparency when citizens are actively engaged",
      metric: "87%",
      color: "text-blue-600"
    },
    {
      icon: Target,
      title: "Improved Service Quality",
      description: "Public services become 3x more effective with regular citizen feedback",
      metric: "3x",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "Enhanced Trust",
      description: "Trust in government increases by 65% with active citizen participation",
      metric: "+65%",
      color: "text-red-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation Boost",
      description: "Cities see 45% more innovative solutions through citizen collaboration",
      metric: "+45%",
      color: "text-yellow-600"
    }
  ];

  const impactMetrics = [
    {
      category: "Democratic Participation",
      items: [
        { label: "Voting Turnout Increase", value: "23%", icon: Vote },
        { label: "Public Meeting Attendance", value: "156%", icon: Users },
        { label: "Policy Feedback Submissions", value: "89%", icon: MessageSquare }
      ]
    },
    {
      category: "Service Delivery",
      items: [
        { label: "Response Time Improvement", value: "42%", icon: Clock },
        { label: "Service Satisfaction", value: "78%", icon: Award },
        { label: "Cost Efficiency Gains", value: "34%", icon: TrendingUp }
      ]
    }
  ];

  const keyPrinciples = [
    {
      title: "Inclusive Participation",
      description: "Ensuring all voices are heard regardless of background, age, or social status",
      icon: UserCheck,
      stats: "94% of citizens feel their opinions matter when properly engaged"
    },
    {
      title: "Continuous Dialogue",
      description: "Maintaining ongoing communication between government and citizens",
      icon: MessageSquare,
      stats: "Cities with regular citizen dialogue see 67% fewer public disputes"
    },
    {
      title: "Collaborative Governance",
      description: "Working together to solve community challenges and improve services",
      icon: HandHeart,
      stats: "Collaborative projects have 85% higher success rates"
    },
    {
      title: "Responsive Leadership",
      description: "Government that listens, adapts, and responds to citizen needs",
      icon: Target,
      stats: "Responsive governments maintain 72% higher approval ratings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
          <Globe className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          The Power of Citizen Engagement
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover how active citizen participation transforms governance, improves public services, 
          and builds stronger, more responsive communities.
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm font-semibold text-gray-700 mb-2">{stat.title}</p>
            <p className="text-xs text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Why Citizen Engagement Matters */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Citizen Engagement Matters
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            When citizens actively participate in governance, entire communities benefit through 
            improved services, better decision-making, and stronger democratic institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementBenefits.map((benefit, index) => (
            <div key={index} className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-colors">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <div className={`text-3xl font-bold ${benefit.color} mb-2`}>
                {benefit.metric}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {impactMetrics.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-900">{item.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">+{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Key Principles */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-12 text-white">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Key Principles of Effective Engagement
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Successful citizen engagement is built on these fundamental principles that ensure 
            meaningful participation and positive outcomes for all stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyPrinciples.map((principle, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                  <p className="text-blue-100 mb-3 text-sm">{principle.description}</p>
                  <div className="text-xs font-medium text-blue-200 bg-white bg-opacity-10 px-3 py-1 rounded-full inline-block">
                    {principle.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <HandHeart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Join the Movement
          </h2>
          <p className="text-gray-600 mb-8">
            Every voice matters in building better communities. Your participation drives positive change, 
            improves public services, and strengthens democratic governance for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Get Involved Today
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Real-time data updated every 24 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Based on global civic engagement studies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenEngagementDashboard;