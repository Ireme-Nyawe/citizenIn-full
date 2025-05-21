import { useState } from "react";

const ContactsSection = () => {
  const [isThankYou, setThankyou] = useState(false);

  const contactContent = {
    title: "Contact Us",
    subtitle: "We're here to bridge gap in citizen Engagement.",
    address: " Kigali, Rwanda",
    phone: "(250) 785450726",
    email: "akimana.inono@gmail.com",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formButton: "Send Message",
    findUsTitle: "Find Us On Map",
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API
    setThankyou(true);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6 md:px-16 lg:px-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-800 mb-3">{contactContent.title}</h2>
        <p className="text-blue-600 text-lg max-w-2xl mx-auto">{contactContent.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white shadow-xl rounded-xl p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Get in Touch</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900">Address</h4>
                  <p className="text-blue-700">{contactContent.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900">Phone</h4>
                  <p className="text-blue-700">{contactContent.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900">Email</h4>
                  <p className="text-blue-700">{contactContent.email}</p>
                </div>
              </div>
            </div>
          </div>

          {!isThankYou ? (
            <form onSubmit={handleSendMessage} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder={contactContent.formName}
                    className="w-full border border-blue-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={contactContent.formEmail}
                    className="w-full border border-blue-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder={contactContent.formSubject}
                  className="w-full border border-blue-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder={contactContent.formMessage}
                  rows={5}
                  className="w-full border border-blue-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition resize-none"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {contactContent.formButton}
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-blue-800">Thank you!</h3>
                  <p className="mt-2 text-blue-700">We've received your message and will get back to you soon.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            {contactContent.findUsTitle}
          </h3>
          <div className="flex-grow w-full h-full min-h-96 bg-white rounded-xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1317212.8794383337!2d29.221022511764083!3d-1.9421551674064588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c29654e73840e3%3A0x7490b026cbcca103!2sRwanda!5e1!3m2!1sen!2srw!4v1747815422937!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="w-full h-full min-h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;