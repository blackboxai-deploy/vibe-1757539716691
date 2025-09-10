import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SKV.ChatGB - Business Services Chatbot | SKV Global Business Services LLC Dubai",
  description: "AI-powered chatbot for UAE business setup, tax services, ejari, municipality, labor, freezone services, visa assistance, and document management.",
  keywords: "UAE business setup, Dubai business services, tax services, ejari, municipality, labor card, freezone, visa services, golden visa, family visa, employment visa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={`${inter.className} bg-blue-900 text-white min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="bg-blue-800 border-b border-blue-700 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-lg">SKV</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">SKV.ChatGB</h1>
                  <p className="text-blue-200 text-sm">Business Services Assistant</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.skvbusiness.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors text-sm"
                >
                  www.skvbusiness.com
                </a>
                <div className="text-blue-200 text-sm">
                  Dubai, UAE
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-blue-800 border-t border-blue-700 px-6 py-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="text-sm">
                  <div className="font-semibold text-white mb-1">Tax Department</div>
                  <div className="text-blue-200">mohit@skvbusiness.com</div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white mb-1">Legal & License</div>
                  <div className="text-blue-200">sunil@skvbusiness.com</div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white mb-1">Global Business</div>
                  <div className="text-blue-200">nikita@skvbusiness.com</div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white mb-1">Visa & Tourism</div>
                  <div className="text-blue-200">rahul@skvbusiness.com</div>
                </div>
              </div>
              <div className="text-blue-300 text-sm">
                © 2024 SKV Global Business Services LLC, Dubai, UAE. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}