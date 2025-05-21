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
  )
}

export default FAQs
