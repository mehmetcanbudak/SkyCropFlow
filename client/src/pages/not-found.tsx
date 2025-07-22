import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-32 sm:pt-40">
      <h1 className="text-6xl font-bold text-primary mb-8">404</h1>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        {t("not_found")}
      </h2>
      <p className="text-muted-foreground mb-8">{t("not_found_message")}</p>
      <Link href="/" className="text-primary font-medium hover:underline">
        {t("go_home")}
      </Link>
    </div>
  );
}
