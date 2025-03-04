"use client";
import Image from "next/image";
import Nav from "./components/navbar";
import ThreeCanvas from "./components/cubecanvas";
import { Typewriter } from "react-simple-typewriter";
import BarChartComponent from "./components/bar";
export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full relative bg-grid overflow-x-hidden">
      <div className="glow-circle"></div>
      <Nav />
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden home-grid">
        <div className="absolute right-0 top-0 w-[300px] md:w-[600px] h-screen pointer-events-none">
          <div className="w-full h-full" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'auto' }}>
            <div style={{ width: '100%', height: '100%' }}>
              <ThreeCanvas />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div style={{ opacity: 1, transform: 'none' }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                AI That Runs Your Business On: <br />
                <span style={{ color: "#00C0FF" }}>
                  <Typewriter
                    words={["Automation", "Efficiency", "Productivity"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={50}
                  />
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 sm:mb-12">
                AI Chatbots & Voice Agents that handle customer inquiries, schedule appointments, and automate tasks 24/7.
              </p>
            </div>
            <div style={{ opacity: 1, transform: 'none' }}>
              <button className="px-8 py-4 bg-gradient-to-r from-[#00C0FF] to-[#7B42F6] rounded-full text-lg font-medium hover:shadow-[0_0_30px_rgba(0,192,255,0.5)] transition-all cursor-pointer group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Schedule Your Free AI Strategy Call
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white opacity-20" style={{ transform: 'translateX(-100%)' }}></div>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <p className="text-gray-400 mb-2">Scroll to explore</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-6 h-6 text-[#00C0FF]">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </section>
      {/* New Section */}
      <section className="py-24 bg-transparent relative overflow-hidden text-white">
        <div className="absolute inset-0 circuit-bg opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C0FF]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B42F6]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" style={{ opacity: 1, transform: 'none' }}>
            <h2 className="text-4xl font-bold mb-6">Cost Breakdown: <span className="bg-gradient-to-r from-[#00C0FF] to-[#7B42F6] text-transparent bg-clip-text">AI Solutions vs. Traditional Methods</span></h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">Discover how AI automation can dramatically reduce your operational costs</p>
          </div>
          <div className="max-w-6xl mx-auto" style={{ opacity: 1, transform: 'none' }}>
            <div className="mb-16 bg-gray-900/30 p-8 rounded-2xl border border-[#00C0FF]/20 relative">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Monthly Cost Comparison</h3>
                <button className="p-2 rounded-full hover:bg-white/10 transition-colors relative cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info w-5 h-5 text-gray-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </button>
              </div>
              <div className="h-[400px]">
                <div className="container " style={{ width: '100%', height: '100%', minWidth: '0px' }}>
                  <div className="recharts-wrapper " style={{ position: 'relative', cursor: 'default', width: '100%', height: '100%', maxHeight: '400px', maxWidth: '654px' }}>
                 <BarChartComponent/>
                   </div>
                </div>
              </div>
            </div>
            <div className="mb-16 bg-gray-900/30 p-8 rounded-2xl border border-[#00C0FF]/20 relative">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">6-Month Growth Projection</h3>
                <button className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info w-5 h-5 text-gray-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </button>
              </div>
              <div className="h-[400px]">
                <div className="recharts-responsive-container" style={{ width: '100%', height: '100%', minWidth: '0px' }}>
                  <div className="recharts-wrapper" style={{ position: 'relative', cursor: 'default', width: '100%', height: '100%', maxHeight: '400px', maxWidth: '654px' }}>
                    {/* Add your chart component here */}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-[#00C0FF]/10 hover:border-[#00C0FF]/30 transition-all" style={{ opacity: 1, transform: 'none' }}>
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-[#00C0FF]/20 text-[#00C0FF]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign w-6 h-6">
                        <line x1="12" x2="12" y1="2" y2="22"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold">Monthly Support Costs</h3>
                  </div>
                  <div className="text-red-400">$5,000/month</div>
                  <div className="text-[#00c8ff]">$1,000/month</div>
                  <div className="text-right">
                    <span className="px-4 py-2 rounded-full bg-[#00C0FF]/10 text-[#00C0FF]">Save 80%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-[#00C0FF]/10 hover:border-[#00C0FF]/30 transition-all" style={{ opacity: 1, transform: 'none' }}>
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-[#00C0FF]/20 text-[#00C0FF]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-6 h-6">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                    </div>
                    <h3 className="font-bold">Monthly Operational Costs</h3>
                  </div>
                  <div className="text-red-400">$3,000/month</div>
                  <div className="text-[#00C0FF]">$800/month</div>
                  <div className="text-right">
                    <span className="px-4 py-2 rounded-full bg-[#00C0FF]/10 text-[#00C0FF]">Save 73%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-[#00C0FF]/10 hover:border-[#00C0FF]/30 transition-all" style={{ opacity: 1, transform: 'none' }}>
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-[#00C0FF]/20 text-[#00C0FF]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-6 h-6">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold">Monthly Training Costs</h3>
                  </div>
                  <div className="text-red-400">$2,000/month</div>
                  <div className="text-[#00C0FF]">$400/month</div>
                  <div className="text-right">
                    <span className="px-4 py-2 rounded-full bg-[#00C0FF]/10 text-[#00C0FF]">Save 80%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-[#00C0FF]/10 hover:border-[#00C0FF]/30 transition-all" style={{ opacity: 1, transform: 'none' }}>
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-[#00C0FF]/20 text-[#00C0FF]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-6 h-6">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold">Infrastructure Costs</h3>
                  </div>
                  <div className="text-red-400">$4,000/month</div>
                  <div className="text-[#00C0FF]">$600/month</div>
                  <div className="text-right">
                    <span className="px-4 py-2 rounded-full bg-[#00C0FF]/10 text-[#00C0FF]">Save 85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}