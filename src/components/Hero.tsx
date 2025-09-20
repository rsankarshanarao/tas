import { EmailCapture } from "./EmailCapture";
import heroImage from "@/assets/hero-apparel.jpg";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Premium custom apparel and gifts" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Venture Badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-gold font-semibold tracking-wide text-sm uppercase">
              A Venture by Itihasa
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crafted with
            <span className="block text-gold">Purpose</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            Premium custom apparel and thoughtful gifts, designed to tell your story
          </p>

          {/* Description */}
          <p className="text-lg text-white/70 mb-12 max-w-xl mx-auto">We're putting the finishing touches on something extraordinary. 
            <br />Follow us at <a href="https://www.instagram.com/_itihasa_" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 transition-colors underline">'@_itihasa_'</a> for further updates.</p>

          {/* Email Capture */}
          <EmailCapture />

          {/* Coming Soon Badge */}
          <div className="mt-12">
            <span className="inline-block px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white/60 text-sm font-medium tracking-wide">
              ✨ Launching Soon
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
    </section>;
};