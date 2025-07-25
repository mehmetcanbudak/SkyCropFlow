import { ReactNode } from "react";
import bgImage from "../assets/bgtopprod.jpg";

interface HeroBannerProps {
  title: string;
  children?: ReactNode;
  backgroundImage?: string;
  className?: string;
  visible?: boolean;
  showText?: boolean;
  height?: "header" | "full" | "small";
}

export default function HeroBanner({ 
  title, 
  children, 
  backgroundImage = bgImage,
  className = "",
  visible = false,
  showText = true,
  height = "full"
}: HeroBannerProps) {
  if (!visible) {
    return null;
  }
  
  // Height classes based on the height prop
  // Announcement banner: 24px (12px padding top + 12px padding bottom + text height)
  // Header: 72px desktop, 56px mobile
  // Total: ~96px desktop, ~80px mobile
  const heightClasses = height === "header" 
    ? "h-28 sm:h-32" // Match header + banner height (112px mobile, 128px desktop)
    : height === "small"
    ? "h-28 sm:h-32" // Slightly more height for background image (112px mobile, 128px desktop)
    : "h-64 lg:h-96"; // Full height for shop page
  
  return (
    <section 
      className={`relative w-full ${heightClasses} flex items-center justify-center overflow-hidden ${className}`} 
      style={{ marginTop: height === "header" ? '0' : '-104px' }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: 'translateZ(0)',
          filter: "brightness(0.8) contrast(1) saturate(0.5) sepia(0)",
          minHeight: '100%',
          width: '100%'
        }}
      ></div>
      {showText && (
        <div className="relative z-10 text-center mt-24">
          <h1 className="text-4xl lg:text-6xl font-bold text-white uppercase tracking-wider">
            {title}
          </h1>
          {children}
        </div>
      )}
    </section>
  );
} 