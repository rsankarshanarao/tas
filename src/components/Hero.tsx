import { EmailCapture } from "./EmailCapture";
import heroImage from "@/assets/hero-apparel.jpg";
export const Hero = () => {
  return <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Premium custom apparel and gifts" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Venture Badge */}
          <div className="inline-flex flex-col items-center px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8">
            <span className="text-gold font-bold tracking-wider text-2xl sm:text-3xl md:text-4xl uppercase">
              THE AVATAR STORE
            </span>
            <span className="text-white/90 font-semibold tracking-wide text-[10px] sm:text-xs uppercase mt-1">
              A Venture by ITIHASA
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            Crafted with
            <span className="block text-gold">Purpose</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed px-4">
            Premium custom apparel and thoughtful gifts, designed to tell your story
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-12 max-w-xl mx-auto px-4">
            We're putting the finishing touches on something extraordinary. 
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            Follow us at <a href="https://www.instagram.com/theavatarstore?igsh=MWh0ZDFlOThwc2Fiaw==" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 transition-colors underline inline-block min-h-[44px] sm:min-h-0 leading-relaxed">@theavatarstore</a> for further updates.
          </p>

          {/* Email Capture */}
          <EmailCapture />

          {/* Coming Soon Badge */}
          <div className="mt-8 sm:mt-12">
            <span className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white/60 text-xs sm:text-sm font-medium tracking-wide">
              ✨ Launching Soon
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden md:block absolute top-20 left-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
    </section>;
};