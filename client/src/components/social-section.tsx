import { Instagram, Youtube, Linkedin } from 'lucide-react';

export default function SocialSection() {
  const socialPlatforms = [
    {
      id: 1,
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/skycrops/",
      username: "@skycrops",
      bgColor: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500"
    },
    {
      id: 2,
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@SkycropsT%C3%BCrkiye",
      username: "@SkycropsTürkiye",
      bgColor: "bg-red-600"
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/skycrops-vertical-farms/?viewAsMember=true",
      username: "Skycrops Vertical Farms",
      bgColor: "bg-blue-600"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-foreground text-center mb-8">Bizi Takip Edin</h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {socialPlatforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg bg-white"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${platform.bgColor} mb-3 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{platform.name}</h3>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
