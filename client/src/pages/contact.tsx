import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import bgPattern from '../assets/bgful.jpg';
import bgImage from '../assets/bgtopprod.jpg';
import HeroBanner from "@/components/hero-banner";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div
      className="flex-1 flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
      }}
    >
      <HeroBanner title={t("contact")} visible={true} showText={false} height="small" />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto">
            {t("contact_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-start">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-2xl text-center">
                {t("contact_us_header")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-semibold mb-1"
                    >
                      {t("name")} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t("your_name")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-semibold mb-1"
                    >
                      {t("email")} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("your_email")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-semibold mb-1"
                  >
                    {t("subject")} *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t("how_can_we_help")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-semibold mb-1"
                  >
                    {t("message")} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("tell_us_more")}
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("sending") : t("send_message")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-2xl text-center">
                  {t("contact_information")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("address")}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Çorlu 1 OSB<br />
                      Bülent Ecevit Caddesi No:13/1<br />
                      PK: 59860 – Tekirdağ, Türkiye
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("phone")}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">+90 282 685 43 83</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("email")}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">info@skycrops.farm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t("business_hours")}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {t("monday_to_friday")}: 9:00 AM - 6:00 PM
                      <br />
                      {t("saturday")}: 9:00 AM - 4:00 PM
                      <br />
                      {t("sunday")}: {t("closed")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Facility Tours - Full Width */}
        <div className="mt-10 sm:mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-2xl text-center">
                {t("facility_tours")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
                {t("facility_tours_desc")}
              </p>
              <Button variant="outline" size="lg">
                {t("schedule_tour")}
              </Button>
            </CardContent>
          </Card>
        </div>


      </div>
    </div>
  );
}
