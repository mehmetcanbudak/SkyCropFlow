import { Instagram, Youtube, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SocialSection() {
  const { t } = useTranslation();
  const socialPlatforms = [
    {
      id: 1,
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/skycrops/",
      username: "@skycrops",
      bgColor: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
    },
    {
      id: 2,
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@SkycropsT%C3%BCrkiye",
      username: "@SkycropsTürkiye",
      bgColor: "bg-red-600",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/skycrops-vertical-farms/?viewAsMember=true",
      username: "Skycrops Vertical Farms",
      bgColor: "bg-blue-600",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-8">
          {t("follow_us")}
        </h2>
        <div className="w-full">
          <div className="flex flex-row flex-nowrap items-center justify-center gap-4 sm:gap-12 w-full">
            {socialPlatforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg w-24 h-24 sm:w-28 sm:h-28 transition-all duration-300 hover:scale-105 min-w-0 max-w-xs"
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full ${platform.bgColor} mb-2 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground text-center">
                    {platform.name}
                  </h3>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
