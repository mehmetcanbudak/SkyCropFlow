import React from "react";

const AnimatedBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="absolute top-0 left-0 w-full h-[240px] z-0 overflow-hidden">
    <svg
      className="absolute top-0 left-0 w-full h-full animate-wave"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#a3d8f4"
        fillOpacity="1"
        d="M0,200L60,210.7C120,221,240,243,360,237.3C480,232,600,200,720,173.3C840,147,960,125,1080,141.3C1200,157,1320,211,1380,237.3L1440,264L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      >
        <animate
          attributeName="d"
          dur="8s"
          repeatCount="indefinite"
          values="
            M0,200L60,210.7C120,221,240,243,360,237.3C480,232,600,200,720,173.3C840,147,960,125,1080,141.3C1200,157,1320,211,1380,237.3L1440,264L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z;
            M0,220L60,200C120,180,240,140,360,160C480,180,600,240,720,250C840,260,960,220,1080,200C1200,180,1320,220,1380,240L1440,260L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z;
            M0,200L60,210.7C120,221,240,243,360,237.3C480,232,600,200,720,173.3C840,147,960,125,1080,141.3C1200,157,1320,211,1380,237.3L1440,264L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z
          "
        />
      </path>
    </svg>
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      {children}
    </div>
  </div>
);

export default AnimatedBackground; 