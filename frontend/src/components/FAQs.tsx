import { HelpCircle } from "lucide-react";
const FAQs = () => {
  return (
    <div>
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
              <p className="text-gray-600 text-justify">
                Most complaints receive an initial response within few hours as they are routed directly to right department.
                Complex issues may take longer depending on the department
                handling your case and external entities involved.
              </p>
            </div>

            <div className="mb-6 border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <HelpCircle className="text-blue-500 mr-2" size={20} />
                Can I submit anonymous complaints?
              </h3>
              <p className="text-gray-600 text-justify">
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
              <p className="text-gray-600 text-justify">
                You can report a wide range of issues regarding public services or others including infrastructure
                problems, public safety concerns, environmental issues,
                service failures, and suggestions for community
                improvement.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <HelpCircle className="text-blue-500 mr-2" size={20} />
                How do i konw who is handling my complaint?
              </h3>
              <p className="text-gray-600 text-justify">
                Once your complaint is processed, you'll receive a notification
                with the name of the who t responsible for addressing your
                issue. You can track the status and see instutution and incharge information
                in your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQs
