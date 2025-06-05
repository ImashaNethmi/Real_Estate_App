import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-12">
          {/* Logo */}
          <div className="text-teal-400">
            <svg className="h-10" viewBox="0 0 28 24" fill="currentColor">
              <path d="..." /> {/* Keep your logo path here */}
            </svg>
          </div>

          {/* Newsletter & Links */}
          <div className="mt-10 grid grid-cols-2 gap-12 sm:grid-cols-2 lg:mt-0 lg:grid-cols-6">
            <div className="col-span-2">
              <h2 className="text-xl font-bold text-white">Stay in the loop</h2>
              <p className="mt-4 text-gray-400 text-sm">Subscribe to get the latest updates.</p>

              <form className="mt-6 flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600 transition"
                >
                  Sign Up
                </button>
              </form>
            </div>

            {/* Footer Sections */}
            {[
              { title: 'Services', links: ['1on1 Coaching', 'Company Review', 'Accounts Review', 'HR Consulting', 'SEO Optimisation'] },
              { title: 'Company', links: ['About', 'Meet the Team', 'Careers'] },
              { title: 'Links', links: ['Contact', 'FAQs', 'Live Chat'] },
              { title: 'Legal', links: ['Accessibility', 'Returns', 'Privacy Policy'] },
              { title: 'Resources', links: ['Marketing Kit', 'Infographics'] },
            ].map((section) => (
              <div key={section.title}>
                <p className="font-semibold text-white">{section.title}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white transition duration-200">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">&copy; 2025 Your Company. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            {[
              { label: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2...' },
              { label: 'Instagram', icon: 'M12.315 2c2.43 0 2.784.013 3.808...' },
              // Add more social icons if needed
            ].map((social, idx) => (
              <a key={idx} href="#" className="text-gray-400 hover:text-white transition" aria-label={social.label}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
