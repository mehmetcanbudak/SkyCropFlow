import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import bgPattern from '../assets/bgful.jpg';
import bgImage from '../assets/bgtopprod.jpg';
import HeroBanner from "@/components/hero-banner";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
      }}
    >
      <HeroBanner title="404" visible={true} showText={false} height="small" />
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
        <h1 className="text-6xl font-bold text-primary mb-8">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {t("not_found")}
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">{t("not_found_message")}</p>
        <Link href="/" className="text-primary font-medium hover:underline transition-colors">
          {t("go_home")}
        </Link>
      </div>
    </div>
  );
}
