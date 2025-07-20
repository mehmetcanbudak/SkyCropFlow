import React, { useEffect } from 'react';
import skycropsVideo from '@/assets/skycrops.mp4';
import productionImg from '@/assets/bundle1.png';
import tesisImg from '@/assets/tesis.png';
import isoImg from '@/assets/iso.png';
import { useTranslation } from 'react-i18next';

export default function Uretim() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      {/* Fullscreen video at the top only */}
      <div className="w-full h-screen overflow-hidden flex items-center justify-center bg-black relative">
        <video
          src={skycropsVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section (not overlaying video) */}
      <section className="bg-white py-16 px-4 flex flex-col items-center w-full">
        <h2 className="text-5xl font-bold text-foreground mb-12 text-center">{t('production_facility_title')}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Circular Image */}
          <div className="flex-shrink-0">
            <img
              src={tesisImg}
              alt={t('production_facility_image_alt')}
              className="rounded-full object-cover w-96 h-96 border-4 border-gray-200 shadow-lg"
            />
          </div>
          {/* Text Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-xl mb-2">{t('production_area_title')}</h3>
                <p className="text-base text-muted-foreground">{t('production_area_desc')}</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{t('packaging_shipping_title')}</h3>
                <p className="text-base text-muted-foreground">{t('packaging_shipping_desc')}</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-xl mb-2">{t('technology_title')}</h3>
                <p className="text-base text-muted-foreground">{t('technology_desc')}</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{t('green_energy_title')}</h3>
                <p className="text-base text-muted-foreground">{t('green_energy_desc')}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Add ISO certificate image here */}
        <div className="mt-12 flex flex-col items-center w-full">
          <img
            src={isoImg}
            alt={t('iso_certificate_alt')}
            className="w-full max-w-5xl h-auto mb-6 shadow-lg rounded-xl border border-gray-200 object-contain"
          />
        </div>
        {/* Farmicca logo and note */}
        <div className="mt-12 flex flex-col items-center">
          {/* Farmicca SVG logo as a link */}
          <a href="https://www.farmicca.com/" target="_blank" rel="noopener noreferrer" className="mb-2 text-black">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="0 -0.001 580.384 165.481" viewBox="0 -0.001 580.384 165.481" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="" className="w-48 h-auto mx-auto" style={{ color: 'black' }}>
              <g>
                <path d="M331.39 0c-5.98.05-10.51 4.69-10.5 10.75.01 6.02 4.58 10.54 10.65 10.53 5.85 0 10.68-4.87 10.63-10.69-.05-5.82-4.96-10.65-10.78-10.59Z" fill="currentColor" data-color="1"></path>
                <path d="M294.07 37.27c-10.74-10.36-29.1-12.46-40.88-2.02-1.46 1.3-2.84 2.69-4.29 4.08-8.2-9.5-18.32-12.68-30.34-10.04-13.35 2.93-23.09 14.67-23.17 28.44-.14 23.8-.06 47.6-.06 71.4 0 .48.12.97.18 1.45h17.36v-2.98c0-21.95-.02-43.9.03-65.85 0-2.71.17-5.47.69-8.13 1.22-6.24 6.01-10.23 12.24-10.54 6.29-.31 11.64 3.29 13.33 9.44.77 2.8 1.04 5.81 1.05 8.73.08 22.25.05 44.49.05 66.74v2.54h17.63v-2.84c0-22.32-.01-44.64.02-66.96 0-2.06.16-4.13.46-6.16.98-6.57 5.93-11.11 12.39-11.48 6.43-.37 11.61 3.2 13.32 9.61.73 2.73.97 5.67.98 8.51.08 22.25.04 44.49.04 66.74v2.84h17.58c.07-.48.14-.76.14-1.05-.03-24.24 0-48.48-.15-72.73-.05-7.7-2.99-14.33-8.6-19.74Z" fill="currentColor" data-color="1"></path>
                <path d="M580.26 58.86c-.1-9.74-3.65-17.92-11.72-23.88-14.33-10.6-34.74-8.07-45.09 5.76-4.63 6.18-5.92 13.28-5.54 20.84h17.3c.27-2.43.37-4.79.8-7.09 1.33-7.09 6.37-11.4 13.14-11.41 6.73-.02 12.02 4.06 12.94 11.18.88 6.75.67 13.63.96 20.88-.93-.47-1.33-.62-1.67-.85-5.55-3.63-11.64-4.41-18.02-3.24-17.32 3.16-28.72 20.62-24.84 37.78 3.66 16.18 20.31 28.79 40.07 23.01 12.72-3.72 21.53-14.51 21.67-26.63.18-15.45.15-30.9 0-46.35Zm-19.88 53.7c-3.55 4.97-9.43 7.2-14.94 5.54-5.9-1.78-9.87-7.02-9.85-13.21 0-3.09-.12-6.26.48-9.25 1.32-6.59 7.61-11.02 14.2-10.42 6.61.6 11.99 6.03 12.42 12.6.09 1.4.01 2.81.01 4.21.23 3.73-.04 7.34-2.32 10.55Z" fill="currentColor" data-color="1"></path>
                <path d="M457.57 54.39c1.31-6.95 6.3-11.26 12.98-11.32 6.83-.06 11.69 3.96 13.12 11.07.49 2.42.57 4.93.84 7.38h17.8c-.55-3.92-.81-7.66-1.63-11.28-3.22-14.09-19.35-24.85-36.6-21.15-15.34 3.29-24.41 14.16-24.61 29.95-.21 15.88.04 31.76.39 47.64.14 6.3 2.73 11.9 7.12 16.5 7.05 7.39 15.77 10.55 25.92 9.95 9.77-.57 17.7-4.71 23.59-12.49 6.53-8.63 5.44-18.72 5.35-28.72H484.3c0 1.99.07 3.76-.01 5.51-.16 3.53-.06 7.11-.68 10.56-1.18 6.56-6.21 10.58-12.76 10.73-6.37.14-11.22-3.51-12.9-9.92-.53-2.05-.82-4.22-.83-6.33-.07-14.34-.05-28.67-.02-43.01 0-1.69.17-3.4.48-5.06Z" fill="currentColor" data-color="1"></path>
                <path d="M422.09 91.94H404.8c-.06.39-.13.67-.13.95-.12 4.35 0 8.73-.41 13.06-.75 7.8-6.05 12.73-13.28 12.76-7.42.04-12.64-4.81-13.26-12.88-.46-5.88-.48-11.8-.46-17.7.04-10.78.06-21.57.48-32.34.28-7.24 5.45-12.22 12.34-12.71 6.87-.49 12.21 3.6 13.82 10.77.56 2.49.69 5.07 1.03 7.71H422c.49-7.61-.87-14.63-5.47-20.75-7.81-10.38-21.59-14.82-34.44-11.21-13.57 3.81-22.03 14.42-22.19 28.45-.18 15.74-.12 31.49.07 47.23.07 5.93 1.98 11.46 5.8 16.13 7.31 8.9 16.91 12.65 28.21 11.62 11.88-1.08 20.87-6.78 25.85-17.93 3.31-7.43 2.05-15.33 2.27-23.16Z" fill="currentColor" data-color="1"></path>
                <path d="M5.51 13.9C1.01 19.73 0 26.57 0 33.72c.04 37.92.02 91.38.02 129.3 0 .79.06 1.58.1 2.46h17.42V86.81h13.47V72.17H17.47v-2.6c0-11.83-.02-23.65.02-35.48 0-2.13.09-4.3.48-6.38 1.01-5.34 3.65-9.47 9.17-11.12 1.25-.38 2.58-.5 3.96-.76V1.26c-1.5.18-2.79.36-4.09.5-8.92.95-16.07 5.09-21.51 12.14Z" fill="currentColor" data-color="1"></path>
                <path d="M143.23 29.57c-13.9 3.88-22.36 14.88-22.38 29.28-.04 23.2-.01 46.41-.01 69.61v2.26c5.21 0 10.08-.11 14.94.05 2.14.07 2.71-.57 2.7-2.7-.08-22.24-.07-44.49-.02-66.73 0-2.5.11-5.04.6-7.48 1.56-7.83 8.35-12.23 15.96-10.34 5.45 1.35 8.3 5.37 9.68 10.49.66 2.44.85 5.01 1.24 7.48h17.37c-.12-1.57-.2-2.95-.32-4.34-1.71-19.97-20.46-32.99-39.76-27.59Z" fill="currentColor" data-color="1"></path>
                <path d="M340.24 32.65v-2.33H322.7v100.41c5.16 0 10.1-.11 15.03.05 2.11.07 2.55-.64 2.55-2.62-.06-31.84-.04-63.67-.04-95.51Z" fill="currentColor" data-color="1"></path>
                <path d="M104.37 57.23c-.05-5.53-1.67-10.74-4.87-15.35-9.92-14.33-30.86-17.77-45.2-7.54-9.38 6.69-12.57 16.05-12.22 27.18h17.35c.23-2.32.31-4.47.66-6.57 1.25-7.46 6.6-12.04 13.7-11.86 6.93.18 12.25 5 12.79 12.46.46 6.38.1 12.81.1 19.24-8.98-5.18-13.1-4.67-19.02-3.69-17.71 2.94-29.4 21.46-24.6 38.93 1.6 5.81 4.54 10.62 8.31 14.34 1.69-3.72 4.35-6.13 7.34-8.16 4.18-2.83 8.97-4.97 12.57-9.07-3.35 3.85-7.28 7.4-10.31 10.77-3.22 3.6-5.39 7.01-4.7 10.4 10.08 6.49 23.61 6.89 34.61-.19 7.82-5.03 13.24-12.05 13.43-21.66.33-16.4.18-32.81.03-49.22Zm-39.13 60.5c6.6-6.89 7.79-10.25 15.1-21.88-7.61 8.92-13.76 12.52-21.68 16.17-1.3-20.93 7.34-28.13 26.57-24.98.76.12 1.5.23 2.3.39.05.39.09.77.13 1.15 2.06 18.79-.9 28.93-22.41 29.14Z" fill="currentColor" data-color="1"></path>
              </g>
            </svg>
          </a>
          <span className="text-base text-muted-foreground text-center">{t('farmicca_note')}</span>
        </div>
      </section>
    </div>
  );
} 