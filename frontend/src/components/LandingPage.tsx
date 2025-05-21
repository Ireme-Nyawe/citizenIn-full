import { Link } from "react-router-dom";
import Features from "./Features";
import FAQs from "./FAQs";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <section className="min-h-screen bg-blue-700 text-white flex items-center bg-[url('/cve.png')] bg-cover bg-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 py-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Complaints and Feedback Matters.
              </h1>
              <p className="text-xl mb-8">
                Submit, track, and resolve complaints or feedback with your
                government institution all in one place{" "}
                <span className="font-bold">#muturage ku isonga</span> .
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
      <Features />
      <FAQs />
    </div>
  );
};

export default LandingPage;
