import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
       <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">CitizenIn</h3>
              <p className="max-w-sm text-white">Empowering citizens to create positive change in their communities through effective communication with complaints or feedback.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-white">
                  <li><Link to="/" className="hover:font-bold">Home</Link></li>
                  <li><Link to="/features" className="hover:font-bold">Features</Link></li>
                  <li><Link to="/contact" className="hover:font-bold">Contuct Us</Link></li>
                  <li><Link to="/faq" className="hover:font-bold">FAQs</Link></li>
                  <li><Link to="/get-started" className="hover:font-bold">Get Started</Link></li>
                </ul>
              </div>
              <div></div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Contacts</h4>
                <ul className="space-y-2 text-white">
                  <li>akimana.inono@gmail.com</li>
                  <li>+250 785450726</li>
                  <li>Kigali Rwanda, </li>
                  <li>Rwnda</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-white">
            <p>&copy; 2025 CitizenIn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
