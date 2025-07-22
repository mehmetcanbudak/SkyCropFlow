import { useTranslation } from "react-i18next";
import skycropsImg from "@/assets/skycrops.png";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-32 sm:pt-40">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-10 sm:pb-16">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {t("about_header")}
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("about_hero")}
          </p>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative w-full min-h-[220px] sm:min-h-[400px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 p-0 mt-4 sm:mt-8">
        {/* Image */}
        <img
          src={skycropsImg}
          alt={t("about_hero_image_alt")}
          className="w-full h-[180px] xs:h-[240px] sm:h-[400px] md:h-[500px] object-cover object-center"
        />
        {/* Desktop: Text over image */}
        <div className="hidden md:flex absolute inset-0 items-center justify-end px-2 sm:px-4 md:px-16 mt-4 sm:mt-12">
          <div className="max-w-2xl text-left text-black">
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-center">
              {t("about_fresh_veggies_title")}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Skycrops is a vertical farming facility opening the doors to healthy living and fresh flavors. Our nutritious greens, grown indoors away from the negative effects of the outside world, bring taste and freshness to your table.<br /><br />By applying the farming methods of the future today, Skycrops aims to bring you natural and fresh alternatives for a healthy life. The key to healthy living is hidden in Skycrops&#39; greens.
            </p>
          </div>
        </div>
        {/* Mobile: Text below image */}
        <div className="block md:hidden w-full px-2 sm:px-4 py-4 sm:py-8 bg-white/80">
          <div className="max-w-2xl text-left text-black">
            <h1 className="text-xl sm:text-4xl font-extrabold mb-2 sm:mb-4 leading-tight text-center">
              {t("about_fresh_veggies_title")}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Skycrops is a vertical farming facility opening the doors to healthy living and fresh flavors. Our nutritious greens, grown indoors away from the negative effects of the outside world, bring taste and freshness to your table.<br /><br />By applying the farming methods of the future today, Skycrops aims to bring you natural and fresh alternatives for a healthy life. The key to healthy living is hidden in Skycrops&#39; greens.
            </p>
          </div>
        </div>
      </section>
      {/* Philosophy Section - Updated to 2x2 Grid */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* taze, sağlıklı */}
            <div className="bg-blue-100 rounded-2xl p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Taze, Sağlıklı
                </h3>
                <p className="text-base mb-6">
                  Sehir içi sağlıklı tarım konseptiyle üretim modelinde ürünler
                  uzun nakliye süreçlerine, soğuk hava depolarına girmek yerine
                  hasat edildikten kısa süre sonra sofralara ulaşır. Kökleriyle
                  birlikte hasat edilen ve satışa sürülen yeşillikler, evinize
                  geldiğinde canlıdır, uygun koşullar sağlandığında büyümeye
                  devam ederler. Temiz bir ortamda suda büyüyen ürünler toz,
                  toprak ve zararlılara maruz kalmaz. Temizlenmesi zahmetsizdir.
                </p>
              </div>
              <div className="flex gap-8 mt-auto justify-center">
                <div className="flex flex-col items-center">
                  <span
                    className="mb-2 flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="32.751 39.154 134.5 122.5"
                      viewBox="32.751 39.154 134.5 122.5"
                      height="56"
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                    >
                      <g>
                        <path
                          d="M143.569 142.553c-.065 0-.131-.005-.196-.016l-42.407-6.742a1.25 1.25 0 1 1 .393-2.469l41.729 6.634 15.979-18.099-83.827-17.538a1.25 1.25 0 0 1 .511-2.447l85.931 17.978a1.25 1.25 0 0 1 .681 2.051l-17.856 20.225c-.24.271-.583.423-.938.423z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M94.465 152.665a1.25 1.25 0 0 1-1.247-1.317l2.096-39.044a1.238 1.238 0 0 1 1.315-1.181 1.25 1.25 0 0 1 1.181 1.315l-1.907 35.521 7.648-8.471a1.25 1.25 0 0 1 1.856 1.676l-10.014 11.09a1.252 1.252 0 0 1-.928.411z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M58.754 157.16H54.29a1.25 1.25 0 0 1-1.236-1.061l-5.675-37.145c-2.249 10.522-6.347 30.575-6.347 36.956 0 .69-.56 1.25-1.25 1.25h-5.58a1.25 1.25 0 0 1-1.247-1.333l3.05-46.067a1.25 1.25 0 0 1 2.495.165l-2.962 44.735h3.032c.576-10.518 7.498-41.476 7.804-42.844.132-.586.672-1.009 1.263-.976a1.25 1.25 0 0 1 1.193 1.06l6.534 42.759h2.167l.975-44.148c.015-.69.584-1.273 1.277-1.222a1.25 1.25 0 0 1 1.222 1.277l-1.001 45.372a1.25 1.25 0 0 1-1.25 1.222z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M121.807 161.654c-5.919 0-10.735-4.845-10.735-10.8 0-5.956 4.816-10.801 10.735-10.801 5.92 0 10.736 4.845 10.736 10.801 0 5.955-4.816 10.8-10.736 10.8zm0-19.101c-4.541 0-8.235 3.724-8.235 8.301s3.694 8.3 8.235 8.3 8.236-3.724 8.236-8.3c0-4.577-3.695-8.301-8.236-8.301z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M60.286 106.48l-.048-.001-26.285-.995a1.25 1.25 0 0 1-1.189-1.43c.242-1.647 6.145-40.352 24.797-41.526.328-.021.647.087.896.301l7.812 6.742c.241.208.394.5.426.817l1.64 15.804 9.271 8.964a1.25 1.25 0 0 1 .042 1.755l-3.888 4.134a1.25 1.25 0 0 1-1.7.113l-12.977-10.57a1.25 1.25 0 0 1-.45-.805l-2.232-16.854a1.25 1.25 0 0 1 2.478-.328l2.167 16.362 11.689 9.522 2.246-2.389-8.711-8.423a1.25 1.25 0 0 1-.375-.77l-1.636-15.764-7.038-6.074c-14.464 1.566-20.546 31.183-21.753 37.975l24.865.941a1.25 1.25 0 0 1-.047 2.499z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M69.094 106.48c-.246 0-.489-.073-.697-.212L53.115 96.011a1.253 1.253 0 0 1-.525-.773l-2.869-13.22a1.25 1.25 0 0 1 2.444-.53l2.762 12.728 13.731 9.216.782-1.42a1.25 1.25 0 0 1 2.19 1.206l-1.44 2.616a1.25 1.25 0 0 1-1.096.646z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M67.606 66.602c-1.538 0-2.653-.553-2.722-.588-7.568-3.81-4.119-14.535-3.968-14.99a1.25 1.25 0 0 1 2.374.785c-.03.091-2.923 9.133 2.723 11.975.057.028 1.537.728 3.138-.021 1.678-.786 3-2.955 3.825-6.274a1.25 1.25 0 1 1 2.427.603c-1.035 4.165-2.799 6.843-5.244 7.959a6.138 6.138 0 0 1-2.553.551z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M83.926 60.413c-.215 0-.433-.055-.632-.172L56.51 44.51a1.25 1.25 0 1 1 1.265-2.155l26.784 15.73a1.25 1.25 0 0 1-.633 2.328z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M77.67 51.83a1.25 1.25 0 0 1-1.249-1.211l-.162-5.155-4.535-3.58-5.948 3.067a1.249 1.249 0 1 1-1.146-2.222l6.663-3.436a1.248 1.248 0 0 1 1.347.13l5.623 4.439c.29.229.463.573.475.942l.18 5.736a1.25 1.25 0 0 1-1.21 1.289l-.038.001z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M154.992 115.906c-.68 0-1.237-.545-1.25-1.228-.066-3.69-1.046-6.33-2.913-7.848-2.479-2.014-5.733-1.426-5.765-1.421a1.249 1.249 0 0 1-1.355-.678c-3.911-7.972-8.757-12.325-14.406-12.938-11.283-1.234-22.456 12.621-22.567 12.761a1.249 1.249 0 1 1-1.956-1.556c.49-.616 12.151-15.062 24.793-13.69 6.359.691 11.735 5.244 15.988 13.54 1.479-.087 4.397.053 6.845 2.043 2.464 2.004 3.754 5.281 3.835 9.742a1.25 1.25 0 0 1-1.228 1.272l-.021.001z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M145.874 131.043a1.25 1.25 0 0 1-.978-2.027l4.464-5.618a1.25 1.25 0 1 1 1.957 1.555l-4.464 5.618a1.244 1.244 0 0 1-.979.472z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M146.743 100.172c-.462 0-1.057-.228-1.712-1.039-2.283-2.829-6.117-13.499 1.719-22.855a1.2 1.2 0 0 1 .983-.447c.378.008.733.186.964.485.269.348 6.577 8.611 4.964 16.04-.709 3.265-2.811 5.838-6.249 7.648a1.438 1.438 0 0 1-.669.168zm.913-20.973c-3.066 4.371-3.344 8.746-2.987 11.764.375 3.173 1.541 5.576 2.206 6.479 2.411-1.426 3.834-3.269 4.344-5.617 1.023-4.712-1.965-10.149-3.563-12.626z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M166.001 103.643a1.25 1.25 0 0 1-1.11-.674c-1.575-3.031-10.106-1.827-15.114-.355a1.25 1.25 0 0 1-.706-2.399c1.527-.449 15.011-4.225 18.039 1.601a1.25 1.25 0 0 1-1.109 1.827z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-base font-bold leading-tight text-center">
                    Günlük
                    <br />
                    Hasat
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className="mb-2 flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="10 49.5 180 101"
                      viewBox="10 49.5 180 101"
                      height="56"
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                    >
                      <g>
                        <path
                          d="M162.254 64.751H141.4V49.5H41.5v21.531H10v6.28h37.8V55.78h87.3v75.358H87.925c-1.988-5.542-7.23-9.833-13.646-9.833s-11.658 4.023-13.646 9.833H47.8v-8.074h-6.3v15.251h19.258c.985 6.95 6.981 12.185 14.052 12.185 7.16 0 13.157-5.235 14.052-12.185h57.998c.985 6.95 6.981 12.185 14.052 12.185 7.16 0 13.157-5.235 14.052-12.185H190V96.162c-.537-19.045-11.188-31.411-27.746-31.411zM73.99 143.787c-4.23 0-7.74-3.499-7.74-7.715 0-4.216 3.51-7.715 7.74-7.715s7.74 3.499 7.74 7.715c0 4.306-3.42 7.715-7.74 7.715zm86.49 0c-4.23 0-7.74-3.499-7.74-7.715 0-4.216 3.51-7.715 7.74-7.715s7.74 3.499 7.74 7.715c.09 4.306-3.42 7.715-7.74 7.715zm22.502-11.752h-8.986c-1.997-5.603-7.262-9.941-13.707-9.941-6.263 0-11.71 4.067-13.707 9.941H140.5V71.031h21.15c13.071 0 21.15 9.67 21.15 25.215v35.789h.182zM42.476 97.047H15.4v-6.28h26.1v-6.28h6.3v12.56h-5.324zm0 18.84H19.9v-6.28h21.6v-6.28h6.3v12.56h-5.324z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-base font-bold leading-tight text-center">
                    Kısa Sürede
                    <br />
                    Sofranızda
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className="mb-2 flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="37.06 16 125.933 168"
                      viewBox="37.06 16 125.933 168"
                      height="56"
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                    >
                      <g>
                        <path
                          fill="#353F69"
                          d="M47.9 100.3v9h-6.2v-9h6.2z"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M67.2 100.3v9H61v-9h6.2z"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M86.7 100.3v9h-6.2v-9h6.2z"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M47.9 123.9v9h-6.2v-9h6.2z"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M67.2 123.9v9H61v-9h6.2z"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M86.7 123.9v9h-6.2v-9h6.2z"
                          data-color="1"
                        ></path>
                        <path
                          d="M150.1 31.4C141.2 21.2 128 16 111 16c-19.4 0-33.5 5.3-41.8 15.6-8.2 10.3-8.4 22.7-7.8 29-10.1 1.7-19.1 9.2-24.1 20.4-.4.9-.3 2.1.3 2.9.6.9 1.5 1.4 2.6 1.4h51.5c1 0 2-.5 2.6-1.4.6-.9.7-2 .3-2.9-5.6-12.1-15.8-19.9-27-20.7-.5-5.2-.5-16.1 6.4-24.8 7.1-8.9 19.6-13.4 37-13.4 15.1 0 26.6 4.5 34.3 13.3 14.2 16.1 11.2 41.7 11.1 42.3V184h6.2V78.2c.2-1.1 3.4-28.6-12.5-46.8zM86.5 79.2H45.3c5-8 12.6-12.9 20.6-12.9s15.6 4.9 20.6 12.9z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-base font-bold leading-tight text-center">
                    Zahmetsiz
                    <br />
                    Arındırma
                  </span>
                </div>
              </div>
            </div>
            {/* güvenli */}
            <div className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Güvenli
                </h3>
                <p className="text-base mb-6">
                  Skycrops'ta ürünleri, dış dünyanın negatif etkilerine kapalı
                  üretim ortamında, optimum koşullarda gerçekleştirdiğimiz için
                  hiç bir tarımsal ilaç ve hormon kullanmıyoruz. Özenle
                  seçtiğimiz tohumlardan filizlendirdiğimiz bitkiler büyümeleri
                  için gerekli besinler dışında hiçbir yabancı maddeye maruz
                  kalmadan sağlıkla büyüyor. Bu yüzden Skycrops'ta yetişen
                  ürünler tamamıyla güvenli!
                </p>
              </div>
              <div className="flex gap-8 mt-auto justify-center">
                <div className="flex flex-col items-center">
                  <span
                    className="mb-2 flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="21.1 21.1 157.8 157.8"
                      viewBox="21.1 21.1 157.8 157.8"
                      height="56"
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                    >
                      <g>
                        <path
                          d="M100 24.1c-41.8 0-75.9 34-75.9 75.9 0 41.8 34 75.9 75.9 75.9 41.8 0 75.9-34 75.9-75.9 0-41.8-34.1-75.9-75.9-75.9zm0 154.8c-43.5 0-78.9-35.4-78.9-78.9S56.5 21.1 100 21.1s78.9 35.4 78.9 78.9-35.4 78.9-78.9 78.9z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M137.3 141.1c-.7 0-1.3-.4-1.5-1.1-.1-.3-1.7-6.6-.8-11.8 1.1-7.5.9-16.9-2.2-21-1-1.3-6-3.6-9.2-4.8-.8-.3-1.2-1.2-.9-1.9.3-.8 1.2-1.2 1.9-.9 1.4.5 8.6 3.3 10.6 5.8 5 6.5 3.2 20.5 2.8 23.2-.7 4.6.8 10.5.8 10.6.2.8-.3 1.6-1.1 1.8-.2.1-.3.1-.4.1z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M121.5 132.9c-.2 0-.4 0-.6-.1-11.8-5.3-11.2-14.7-11-17.8 0-.3-.1-.6-.2-1-.3-.5-.9-1.7-1.6-3.1-2.7-5.3-5.2-10.2-5.9-12.3-.4-1.5-1.5-5.3 2.5-7.2 4-1.9 6.3 1.2 8.1 3.7 2.1 2.7 2.8 3.7 3.8 5.1.7 1 1.6 2.2 3.3 4.4.7.9 1.6 1.5 2.6 2.2 1.6 1.1 3.3 2.3 5 4.9.4.7.2 1.6-.5 2.1-.7.4-1.6.2-2.1-.5-1.3-2.1-2.8-3.1-4.2-4-1.1-.8-2.3-1.6-3.3-2.8-1.7-2.2-2.5-3.4-3.3-4.4-1-1.4-1.7-2.4-3.8-5.1-2.4-3.2-3.1-3.4-4.5-2.8-1 .5-1.6 1-.9 3.6.6 2 3.8 8.1 5.6 11.8.8 1.5 1.4 2.7 1.7 3.3.3.8.4 1.5.4 2.2v.1c-.2 2.9-.7 10.4 9.2 14.9.8.3 1.1 1.2.8 2 0 .5-.5.8-1.1.8z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M116.8 141.2c-.7 0-1.3-.5-1.5-1.2-.6-2.8-2.4-4.8-4.4-7-2.9-3.2-6.2-6.8-6.2-13.4 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 5.4 2.6 8.3 5.4 11.3 2.2 2.4 4.4 4.8 5.2 8.5.2.8-.4 1.6-1.2 1.8h-.3z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M89.6 120.3c-1.1 0-2.2-.1-3.4-.2-7-.9-13.5-4.9-18.2-11.1-10.2-13.2-7.6-29.3 6.3-40 8.2-6.3 20.2-9.7 35.5-10.2 11.3-.4 20.2 1.1 20.5 1.1.8.1 1.3.8 1.2 1.6-.1 1-2.6 24.5-13.9 41.4-.5.7-1.4.9-2.1.4-.7-.5-.9-1.4-.4-2.1 9.4-14 12.6-33.2 13.3-38.6-6.8-.9-36-3.8-52.3 8.7-12.5 9.6-14.8 24-5.7 35.8 4.2 5.6 10 9.1 16.2 9.9 6.6.9 13.4-1.2 19.8-6.1.8-.6 1.5-1.2 2.2-1.8.6-.6 1.5-.6 2.1 0s.6 1.5 0 2.1c-.8.8-1.6 1.4-2.4 2-5.9 4.8-12.3 7.1-18.7 7.1z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M58.7 117.8c-.5 0-.9-.2-1.2-.6-.5-.7-.4-1.6.3-2.1l56.5-43.3c.7-.5 1.6-.4 2.1.3s.4 1.6-.3 2.1l-56.5 43.3c-.3.2-.6.3-.9.3z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M99.7 103.1h-.2l-18.8-2.5c-.8-.1-1.4-.9-1.3-1.7.1-.8.9-1.4 1.7-1.3l18.8 2.5c.8.1 1.4.9 1.3 1.7-.1.8-.8 1.3-1.5 1.3z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M107.8 87.9h-.2l-8.8-1.2c-.8-.1-1.4-.9-1.3-1.7.1-.8.9-1.4 1.7-1.3l8.8 1.2c.8.1 1.4.9 1.3 1.7-.1.8-.8 1.3-1.5 1.3z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M80.9 100.6h-.2c-.8-.1-1.4-.9-1.3-1.7l2.5-18.8c.1-.8.9-1.4 1.7-1.3.8.1 1.4.9 1.3 1.7l-2.5 18.8c-.1.8-.8 1.3-1.5 1.3z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M99 86.7h-.2c-.8-.1-1.4-.9-1.3-1.7l1.2-8.8c.1-.8.9-1.4 1.7-1.3.8.1 1.4.9 1.3 1.7l-1.2 8.8c-.1.8-.8 1.3-1.5 1.3z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-base font-bold leading-tight text-center">
                    Güvenli
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className="mb-2 flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="28.001 35.6 144.001 128.8"
                      viewBox="28.001 35.6 144.001 128.8"
                      height="56"
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                    >
                      <g>
                        <path
                          d="M99.992 113.478c-.491 0-.982-.12-1.427-.36L65.559 95.304a2.997 2.997 0 0 1-1.574-2.636V56.566c0-1.097.599-2.106 1.563-2.63l33.006-17.972a3.017 3.017 0 0 1 2.875 0l33.005 17.972a2.994 2.994 0 0 1 1.565 2.63v35.945a2.994 2.994 0 0 1-1.565 2.63l-33.005 17.972a3.012 3.012 0 0 1-1.437.365zM69.986 90.884l30 16.191 30.011-16.343V58.345l-30.006-16.34-30.006 16.34v32.539z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M100.059 77.771c-.466 0-.933-.108-1.36-.325L74.628 65.228a2.996 2.996 0 0 1-1.316-4.028 3.014 3.014 0 0 1 4.035-1.313l22.708 11.528 22.576-11.525a3.008 3.008 0 0 1 4.038 1.305 2.995 2.995 0 0 1-1.307 4.031l-23.937 12.218a2.997 2.997 0 0 1-1.366.327z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M99.992 101.497a2.998 2.998 0 0 1-3.001-2.995V74.539a2.997 2.997 0 0 1 3.001-2.995 2.998 2.998 0 0 1 3.001 2.995v23.963a2.998 2.998 0 0 1-3.001 2.995z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M145 152.418h-6.001c0-1.436.692-7.921 3.88-11.104l20.767-20.734c1.36-3.414 2.573-24.279 2.365-27.897-.129-2.232-2.834-14.117-4.937-20.614-1.404.632-3.173 1.89-4.524 4.054-1.758 2.817-1.673 6.315.311 12.476.19.588.19 1.223.006 1.814l-3.751 11.911-5.726-1.796 3.469-11.013c-1.705-5.543-2.664-11.335.598-16.562 3.176-5.084 8.213-7.401 11.548-7.401a3 3 0 0 1 2.784 1.881c2.338 5.818 6.019 21.538 6.212 24.905.018.269-.314 28.69-3.874 32.244l-21.004 20.968c-1.299 1.296-2.123 5.459-2.123 6.868z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M111.994 152.418h-6.001v-14.977c.179-4.996.777-11.002 3.88-14.099l9.002-8.986c2.107-2.103 5.781-2.463 9.022-2.782 1.049-.102 2.59-.252 3.206-.439l8.776-8.761c4.999-4.99 10.944-4.28 14.235-.989 3.291 3.285 4.009 9.22-.99 14.211l-15.003 14.977-4.243-4.236 15.003-14.977c2.327-2.326 2.174-4.557.99-5.739-1.181-1.185-3.423-1.337-5.749.989l-9.002 8.986c-1.436 1.43-3.733 1.656-6.637 1.942-1.524.149-4.691.459-5.371 1.059l-8.996 8.98c-.683.682-1.869 2.887-2.124 9.972l.002 14.869z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M151.001 164.4H145v-8.986h-36.007v8.986h-6.001v-11.982a2.996 2.996 0 0 1 3.001-2.995h42.008a2.996 2.996 0 0 1 3.001 2.995V164.4z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M61.002 152.418h-6.001c0-1.41-.823-5.572-2.121-6.868l-21.004-20.968c-3.559-3.551-3.89-31.975-3.875-32.244.193-3.364 3.874-19.087 6.212-24.905a3.003 3.003 0 0 1 2.785-1.881c3.338 0 8.375 2.317 11.548 7.401 3.26 5.224 2.302 11.016.599 16.562l3.468 11.013-5.726 1.796-3.751-11.911a2.995 2.995 0 0 1 .006-1.814c1.982-6.16 2.069-9.659.311-12.476-1.351-2.165-3.121-3.422-4.526-4.054-2.105 6.497-4.807 18.382-4.935 20.611-.208 3.621 1.004 24.49 2.362 27.9l20.768 20.734c3.19 3.183 3.88 9.668 3.88 11.104zm-24.577-31.676z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M93.991 152.418H87.99v-14.977c0-4.566-.869-8.62-2.113-9.864l-8.996-8.986c-.672-.594-3.84-.904-5.364-1.053-2.905-.287-5.201-.512-6.636-1.942l-9.005-8.986c-1.155-1.153-2.373-1.787-3.527-1.834-.845.018-1.644.266-2.224.845s-.881 1.366-.845 2.22c.047 1.15.681 2.366 1.836 3.519l14.998 14.977-4.243 4.236-15-14.977c-4.998-4.99-4.281-10.926-.989-14.211 3.289-3.288 9.239-3.999 14.237.989l8.779 8.761c.615.187 2.155.336 3.204.439 3.241.319 6.915.679 9.022 2.782l8.994 8.986c3.368 3.361 3.871 10.276 3.871 14.099v14.977z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M96.991 164.4H90.99v-8.986H54.983v8.986h-6.001v-11.982a2.997 2.997 0 0 1 3.001-2.995h42.008a2.998 2.998 0 0 1 3.001 2.995V164.4z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-base font-bold leading-tight text-center">
                    Kapalı Üretim
                    <br />
                    Ortamı
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className="mb-2 flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="39.5 39.5 121 121"
                      viewBox="39.5 39.5 121 121"
                      height="56"
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                    >
                      <g>
                        <path
                          d="M100.002 39.5C66.642 39.5 39.5 66.64 39.5 99.999c0 33.361 27.142 60.501 60.502 60.501 33.359 0 60.498-27.14 60.498-60.501 0-33.359-27.138-60.499-60.498-60.499zM47.925 99.999c0-28.714 23.361-52.074 52.077-52.074 12.843 0 24.609 4.682 33.699 12.418l-73.355 73.354c-7.737-9.088-12.421-20.852-12.421-33.698zm52.077 52.078c-12.845 0-24.61-4.685-33.701-12.42l73.356-73.354c7.736 9.088 12.42 20.852 12.42 33.696 0 28.716-23.361 52.078-52.075 52.078z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-base font-bold leading-tight text-center">
                    Pestisit
                    <br />
                    İçermez
                  </span>
                </div>
              </div>
            </div>
            {/* lezzetli */}
            <div className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Lezzetli
                </h3>
                <p className="text-base mb-6">
                  Skycrops'ta bitkiler biyolojilerine en uygun koşullarda
                  yetişir. İhtiyaçları olan besinleri, doğru ısı, nem ve ışık
                  yoğunluğunda alırlar. Skycrops olarak birinci önceliğimiz
                  "mutlu bitkiler" yetiştirmek. Yetiştirdiğimiz ve tohum
                  aşamasında seçtiğimiz ürünler, seçkin restoran ve şefler
                  tarafından tercih edilen, dünya genelinde en çok beğenilen ve
                  keyifle tüketilen türlerdir.
                </p>
              </div>
              <div className="flex gap-8 mt-auto justify-center">
                <div className="flex flex-col items-center">
                  <span
                    className="mb-2 flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="34.499 30 131 139.999"
                      viewBox="34.499 30 131 139.999"
                      height="56"
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                    >
                      <g>
                        <path
                          d="M42.06 97.867c-.077-1.628-.65-2.973-2.247-3.64-1.574-.658-2.84-.096-3.906 1.112a5.377 5.377 0 0 1-.487.467c-1.039.909-1.094 2.052-.679 3.237.2.572.553 1.109.919 1.6.929 1.246 2.595 1.836 3.84 1.388 1.556-.56 2.86-1.745 2.559-3.746.001-.081.009-.25.001-.418z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M66.045 82.814c-1.768.054-4.357 1.255-4.215 3.73-.013 1.438 1.828 4.053 3.162 4.409.359.096.802.075 1.156-.044 1.607-.541 3.385-1.938 3.367-4.174-.016-1.921-1.726-3.975-3.47-3.921z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M107.016 30.249c-1.59-.709-2.688.232-3.785 1.145-.214.178-.38.415-.558.633-1.098 1.337-1.304 2.58-.352 4.002 1.197 1.787 2.873 2.717 4.543 1.841 1.423-.747 2.427-1.833 2.429-3.057.118-2.002-1.018-4.003-2.277-4.564z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M54.63 98.087c-1.905.204-2.851 1.493-3.397 3.095-.522 1.531.478 2.72 1.364 3.752.899 1.048 2.155 1.374 3.534.774 1.479-.644 2.324-1.917 2.324-3.725-.043-.254-.116-.64-.174-1.029-.293-1.944-1.755-3.07-3.651-2.867z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M67.768 95.949c-.266.21-.53.424-.781.652-1.256 1.141-1.657 2.503-1.016 3.965.651 1.485 1.803 2.451 3.454 2.649.415.05.921-.078 1.284-.294 1.462-.872 2.188-2.223 2.369-4.316-.202-.427-.492-1.218-.924-1.922-1.144-1.865-2.663-2.098-4.386-.734z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M119.13 119.533c-.295-.002-.523-.027-.745-.001-1.888.221-3.666 2.557-3.052 4.139.649 1.673 1.911 2.792 3.695 3.138 1.949.378 3.432-.679 3.977-2.537.821-2.796-1.573-4.854-3.875-4.739z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M120.72 158.559c-2.11.007-3.745 1.488-3.787 3.341-.047 2.074 1.647 4.104 3.433 4.115 2.055.013 3.667-1.484 3.662-3.381-.006-2.329-1.847-4.079-3.308-4.075z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M152.787 122.18c-1.792-.017-4.051 1.866-4.098 3.415-.051 1.685 1.695 3.691 3.283 3.771 2.327.118 3.807-.951 3.903-2.819.122-2.369-1.279-4.35-3.088-4.367z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M49.906 83.556c-1.118-.869-2.298-.774-3.482-.16-1.293.67-2.033 1.722-2.129 3.136.574 3.072 1.518 4.658 4.463 3.489.567-.225 1.14-.747 1.43-1.284.419-.775.643-1.675.837-2.546.248-1.107-.261-1.968-1.119-2.635z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M70.837 72.1c-.94-.731-2.053-1.118-3.172-.55-1.066.541-1.594 1.567-1.746 2.757-.028.223-.007.452-.008.678.019 1.902.02 1.901 1.778 2.811.201.104.38.248.581.351 1.435.739 2.684.582 3.546-.398 1.474-1.675 1.127-3.216.425-4.185a7.354 7.354 0 0 0-1.404-1.464z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M66.199 53.283c-2.427-.074-3.943.652-4.956 2.24-.342.535-.632 1.302-.526 1.886.297 1.636.968 3.172 2.603 3.914 1.54.7 2.825-.145 4.068-.951.187-.121.371-.267.512-.438 1.036-1.261 1.863-2.689 1.282-4.322-.543-1.522-1.682-2.547-2.983-2.329z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M105.844 54.823c-1.399-1.316-3.324-1.38-4.718-.088-.57.529-1.024 1.198-1.464 1.848-.863 1.275-.75 2.487.173 3.744.779 1.061 1.864 1.149 2.773 1.269 1.381.062 2.431-.251 3.54-.983 1.602-1.057 1.941-3.181.732-4.676a11.255 11.255 0 0 0-1.036-1.114z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M140.613 149.705c-1.267.969-2.277 2.282-3.355 3.485-.144.161-.064.544-.051.823.108 2.328 2.48 3.626 4.942 3.865.776-.209 1.688-.254 2.227-1.176 1.055-1.807.822-4.648-.567-6.212-.833-.94-2.283-1.484-3.196-.785z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M81.019 157.681c-.077-1.628-.65-2.973-2.247-3.641-1.574-.658-2.84-.096-3.906 1.112a5.233 5.233 0 0 1-.487.466c-1.039.909-1.094 2.052-.679 3.237.2.572.553 1.109.919 1.6.929 1.246 2.595 1.836 3.84 1.388 1.556-.56 2.86-1.745 2.559-3.746 0-.08.009-.249.001-.417z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M53.382 113.325c-1.005.782-1.592 1.689-2.026 2.805-.56 1.441-.212 2.615.866 3.691 1.051 1.05 2.183 1.516 3.665 1.051 1.796-.563 2.503-1.585 2.538-3.833.002-.395.054-.797-.001-1.184-.385-2.702-2.984-4.132-5.042-2.53z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M114.314 110.994c-.148.007-.447-.039-.706.043-1.773.559-3.038 1.762-3.673 3.45-.233.62-.008 1.584.332 2.216 1.239 2.304 4.155 2.262 6.051.999 1.426-.949 2.024-2.541 1.571-4.104-.376-1.3-2.001-2.526-3.575-2.604z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M93.733 127.741c-1.768.054-4.357 1.255-4.215 3.73-.013 1.438 1.828 4.053 3.162 4.409.359.096.802.075 1.156-.044 1.607-.541 3.385-1.938 3.367-4.174-.016-1.921-1.726-3.975-3.47-3.921z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M93.253 162.668c-1.514-.125-2.824.187-3.881 1.514-1.356 1.704-1.418 2.758-.035 4.407.877 1.046 1.92 1.509 3.178 1.393.242.001.411.011.58.002 2.09-.103 3.236-1.306 3.312-3.472.075-2.187-1.11-3.675-3.154-3.844z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M86.899 77.002a8.512 8.512 0 0 0-2.686 2.256c-1.334 1.718-.706 3.711 1.326 4.527.767.308 1.624.393 2.642.626.612-.263 1.372-.458 1.978-.876 1.396-.964 1.467-2.549 1.25-3.953-.364-2.359-2.58-3.593-4.51-2.58z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M89.013 98.181c-1.59-.709-2.688.232-3.785 1.145-.214.178-.38.415-.558.633-1.098 1.337-1.304 2.58-.352 4.003 1.197 1.787 2.873 2.717 4.543 1.841 1.423-.747 2.427-1.833 2.429-3.057.118-2.002-1.018-4.003-2.277-4.565z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M123.66 51.696c-2.409.07-4.434 2.573-4.406 4.011.037 1.937 2.101 3.746 4.337 3.728 2.232-.119 3.362-1.416 3.493-4.147.081-1.693-1.836-3.638-3.424-3.592z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M87.364 35.407c-1.905.204-2.851 1.492-3.397 3.095-.522 1.531.478 2.72 1.364 3.752.899 1.048 2.155 1.374 3.534.774 1.478-.644 2.324-1.917 2.324-3.725-.043-.254-.116-.64-.174-1.029-.293-1.945-1.755-3.07-3.651-2.867z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M55.316 127.707c-1.792-.149-3.781 1.77-3.816 3.753-.03 1.731 1.879 4.222 3.521 4.508.342.059.769-.09 1.093-.263 1.469-.784 2.004-2.153 2.377-3.693.523-2.153-1.158-4.137-3.175-4.305z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M152.241 104.098c-1.638-.082-3.745 1.738-3.898 3.367-.174 1.853 1.632 4.348 3.22 4.448 1.929.121 3.736-1.816 3.88-4.16.118-1.922-1.318-3.561-3.202-3.655z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M97.381 82.527c-1.885.014-3.962 2.04-4.021 3.923-.061 1.945 1.512 3.53 3.519 3.547 2.132.135 3.572-1.723 3.738-4.199.108-1.622-1.627-3.283-3.236-3.271z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M80.846 84.955c-1.864-.117-3.848 1.952-3.931 4.098-.061 1.575 1.704 3.589 3.182 3.63 1.93.054 3.887-1.996 3.93-4.115.033-1.626-1.63-3.516-3.181-3.613z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M108.361 145.655c-1.792-.017-4.051 1.866-4.098 3.415-.051 1.685 1.695 3.691 3.283 3.771 2.327.118 3.808-.951 3.903-2.819.121-2.369-1.28-4.35-3.088-4.367z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M118.702 85.007c-1.403-.192-2.376.481-3.094 1.605-.784 1.228-.898 2.509-.273 3.781 2.035 2.371 3.646 3.271 5.609.785.378-.479.613-1.218.595-1.828-.025-.881-.282-1.772-.549-2.624-.341-1.081-1.212-1.572-2.288-1.719z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M101.96 137.032c-.94-.731-2.053-1.119-3.172-.55-1.066.541-1.594 1.567-1.746 2.757-.028.223-.007.452-.008.678.019 1.902.02 1.901 1.778 2.811.201.104.38.248.581.351 1.435.739 2.684.582 3.546-.398 1.474-1.675 1.127-3.216.425-4.185a7.327 7.327 0 0 0-1.404-1.464z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M83.697 51.598c-.503.511-.884 1.164-1.233 1.8-.937 1.712.171 4.563 2.817 4.285.849.085 1.621-.135 2.122-.97.734-1.223.942-2.57.615-3.916-.503-2.069-2.839-2.702-4.321-1.199z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M85.362 112.517c-1.792-.149-3.781 1.77-3.816 3.753-.03 1.731 1.879 4.222 3.521 4.508.342.059.769-.09 1.093-.263 1.469-.784 2.004-2.153 2.377-3.693.523-2.153-1.158-4.137-3.175-4.305z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M137.112 117.856c-2.427-.074-3.943.652-4.956 2.24-.341.535-.632 1.302-.526 1.886.297 1.636.968 3.172 2.603 3.914 1.541.7 2.825-.145 4.068-.951.187-.121.371-.267.512-.438 1.036-1.261 1.863-2.689 1.282-4.322-.544-1.522-1.682-2.547-2.983-2.329z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M139.027 105.303c-1.399-1.316-3.324-1.381-4.719-.088-.57.529-1.024 1.198-1.464 1.848-.863 1.275-.75 2.487.173 3.744.779 1.061 1.864 1.149 2.773 1.269 1.381.062 2.431-.251 3.54-.983 1.602-1.057 1.941-3.181.732-4.676a11.236 11.236 0 0 0-1.035-1.114z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M102.223 90.156c-2.089-.25-4.403 2.269-4.444 4.251-.04 1.928 2.107 4.146 4.144 4.16 2.203.015 3.501-1.929 3.581-4.148.077-2.141-.916-4.356-3.281-4.263z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M57.96 66.098c-1.267.969-2.277 2.282-3.355 3.485-.144.161-.064.544-.051.823.108 2.328 2.48 3.626 4.942 3.865.776-.209 1.689-.254 2.227-1.176 1.055-1.807.822-4.648-.567-6.212-.834-.939-2.283-1.484-3.196-.785z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M96.164 149.622c-2.331.778-3.695 2.34-3.506 4.015.238 2.109 2.4 4.076 4.854 4.124.231-.095.791-.225 1.237-.526 1.731-1.167 2.22-3.904 1.109-5.935-.73-1.336-2.419-2.103-3.694-1.678z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M99.616 117.301c-.077-1.628-.65-2.973-2.247-3.641-1.574-.658-2.84-.096-3.906 1.112a5.244 5.244 0 0 1-.487.467c-1.039.909-1.094 2.052-.679 3.237.2.572.553 1.109.919 1.6.929 1.246 2.595 1.836 3.84 1.388 1.556-.56 2.86-1.745 2.559-3.746 0-.08.009-.249.001-.417z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M57.065 39.798c-1.004.782-1.592 1.689-2.026 2.805-.56 1.441-.212 2.615.866 3.691 1.051 1.05 2.183 1.516 3.665 1.051 1.796-.563 2.503-1.586 2.538-3.833.002-.395.054-.797-.001-1.184-.385-2.702-2.984-4.132-5.042-2.53z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M152.661 76.746c-.148.007-.447-.039-.706.043-1.773.559-3.038 1.762-3.673 3.451-.233.62-.008 1.584.332 2.216 1.239 2.304 4.155 2.262 6.051.999 1.426-.949 2.024-2.541 1.571-4.104-.376-1.3-2.001-2.527-3.575-2.605z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M118.346 133.066c-1.768.054-4.357 1.255-4.215 3.73-.013 1.438 1.828 4.053 3.162 4.409.359.096.802.075 1.156-.044 1.607-.541 3.385-1.938 3.367-4.174-.016-1.921-1.726-3.975-3.47-3.921z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M111.805 44.129c-1.514-.125-2.824.187-3.881 1.514-1.356 1.704-1.419 2.758-.035 4.407.877 1.046 1.92 1.509 3.178 1.393.242.001.411.011.58.002 2.09-.103 3.236-1.306 3.312-3.472.075-2.187-1.11-3.675-3.154-3.844z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M139.68 58.124a8.512 8.512 0 0 0-2.686 2.256c-1.334 1.718-.707 3.711 1.326 4.527.767.308 1.624.393 2.642.626.612-.263 1.372-.458 1.978-.876 1.396-.964 1.467-2.549 1.25-3.953-.363-2.359-2.579-3.593-4.51-2.58z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M108.475 125.414c-1.59-.709-2.688.232-3.785 1.145-.214.178-.38.415-.558.633-1.098 1.337-1.304 2.58-.352 4.003 1.197 1.787 2.873 2.717 4.543 1.841 1.423-.747 2.427-1.833 2.429-3.057.118-2.002-1.018-4.003-2.277-4.565z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M137.677 92.438c-2.409.07-4.434 2.573-4.406 4.011.037 1.937 2.101 3.746 4.337 3.728 2.232-.119 3.362-1.416 3.493-4.147.081-1.693-1.836-3.638-3.424-3.592z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M130.002 49.371c-.266.21-.53.424-.781.652-1.256 1.14-1.657 2.503-1.016 3.965.651 1.485 1.803 2.451 3.454 2.649.415.05.921-.078 1.284-.294 1.462-.872 2.188-2.223 2.369-4.316-.202-.428-.492-1.218-.924-1.922-1.144-1.865-2.663-2.098-4.386-.734z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M118.243 66.669c-1.792-.149-3.781 1.77-3.816 3.753-.031 1.731 1.879 4.222 3.521 4.508.342.059.769-.09 1.093-.263 1.469-.784 2.004-2.153 2.377-3.693.523-2.153-1.158-4.137-3.175-4.305z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M42.007 124.409c-1.744.055-3.689 1.966-3.706 3.539-.017 1.614 1.999 4.226 3.773 4.096 2.003-.146 3.717-1.69 3.698-3.633-.02-2.127-1.84-4.062-3.765-4.002z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M112.458 100.974c-1.416-.829-4.124-.187-5.011 1.188-1.009 1.564-.557 4.611.806 5.432 1.656.998 4.152.113 5.361-1.9.991-1.649.472-3.767-1.156-4.72z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M81.093 124.11c-1.864-.117-3.848 1.952-3.931 4.098-.061 1.575 1.704 3.589 3.182 3.63 1.93.054 3.887-1.996 3.93-4.115.033-1.626-1.63-3.516-3.181-3.613z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M130.484 73.731c-.503.511-.885 1.164-1.233 1.8-.937 1.712.171 4.563 2.817 4.285.849.085 1.621-.135 2.122-.97.734-1.223.942-2.57.615-3.916-.503-2.069-2.839-2.702-4.321-1.199z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M42.617 57.387c-2.089-.25-4.403 2.269-4.444 4.251-.04 1.928 2.107 4.146 4.144 4.16 2.203.015 3.501-1.929 3.581-4.148.077-2.141-.916-4.356-3.281-4.263z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M73.108 141.084c-.077-1.628-.65-2.973-2.247-3.641-1.574-.658-2.84-.096-3.906 1.112a5.377 5.377 0 0 1-.487.467c-1.039.909-1.094 2.052-.679 3.237.2.572.553 1.109.919 1.6.929 1.246 2.595 1.836 3.84 1.388 1.556-.56 2.86-1.745 2.559-3.746 0-.08.009-.249.001-.417z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M85.507 155.567c-1.005.782-1.592 1.689-2.026 2.805-.56 1.441-.212 2.615.866 3.691 1.051 1.05 2.183 1.516 3.665 1.051 1.796-.563 2.503-1.585 2.538-3.833.002-.395.054-.797-.001-1.184-.385-2.703-2.984-4.133-5.042-2.53z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M127.432 140.068c-1.768.054-4.357 1.255-4.215 3.73-.013 1.438 1.828 4.053 3.162 4.409.359.096.802.075 1.156-.044 1.607-.541 3.385-1.938 3.367-4.174-.016-1.921-1.726-3.975-3.47-3.921z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M110.265 77.707c-1.59-.709-2.688.232-3.785 1.145-.214.178-.38.415-.558.633-1.098 1.337-1.304 2.58-.352 4.003 1.197 1.787 2.873 2.717 4.543 1.841 1.423-.747 2.427-1.833 2.429-3.057.118-2.003-1.019-4.004-2.277-4.565z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M92.482 66.824c-.266.21-.53.424-.781.652-1.256 1.14-1.657 2.503-1.016 3.965.651 1.485 1.803 2.452 3.454 2.649.415.05.921-.078 1.284-.294 1.462-.872 2.188-2.223 2.369-4.316-.202-.428-.492-1.218-.924-1.922-1.144-1.865-2.663-2.098-4.386-.734z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M125.884 98.365c-.295-.002-.523-.027-.745-.001-1.888.221-3.666 2.557-3.052 4.139.649 1.673 1.911 2.792 3.695 3.138 1.949.378 3.432-.679 3.977-2.537.821-2.797-1.574-4.855-3.875-4.739z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M77.231 108.906c-1.744.055-3.689 1.966-3.706 3.539-.017 1.614 1.999 4.226 3.773 4.096 2.003-.146 3.717-1.69 3.698-3.633-.02-2.127-1.841-4.062-3.765-4.002z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M89.062 141.944c-1.638-.082-3.745 1.738-3.898 3.367-.174 1.853 1.632 4.348 3.22 4.448 1.929.121 3.736-1.816 3.88-4.16.118-1.922-1.318-3.561-3.202-3.655z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M131.351 127.082c-2.11.007-3.745 1.488-3.787 3.341-.047 2.074 1.647 4.104 3.433 4.115 2.055.013 3.667-1.484 3.662-3.381-.006-2.33-1.848-4.08-3.308-4.075z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M162.228 86.542c-1.792-.149-3.781 1.77-3.816 3.753-.03 1.731 1.879 4.222 3.521 4.508.342.059.769-.09 1.093-.263 1.469-.784 2.004-2.153 2.377-3.693.523-2.153-1.158-4.137-3.175-4.305z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M64.281 118.652c-1.005.782-1.592 1.689-2.026 2.805-.56 1.441-.212 2.615.866 3.691 1.051 1.05 2.183 1.516 3.665 1.051 1.796-.563 2.503-1.585 2.538-3.833.002-.395.054-.797-.001-1.184-.385-2.702-2.984-4.132-5.042-2.53z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-base font-bold leading-tight text-center">
                    Seçilmiş
                    <br />
                    Tohumlar
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className="mb-2 flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="32.445 32.445 135.109 135.11"
                      viewBox="32.445 32.445 135.109 135.11"
                      height="56"
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                    >
                      <g>
                        <path
                          d="M100.002 32.445c-37.253 0-67.557 30.304-67.557 67.555s30.304 67.555 67.557 67.555c37.248 0 67.552-30.304 67.552-67.555s-30.303-67.555-67.552-67.555zm0 123.164c-30.663 0-55.609-24.946-55.609-55.609s24.946-55.609 55.609-55.609S155.611 69.337 155.611 100s-24.946 55.609-55.609 55.609z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          fill="#585857"
                          d="M88.639 87.624a8.582 8.582 0 1 1-17.164 0 8.582 8.582 0 0 1 17.164 0z"
                          data-color="1"
                        ></path>
                        <path
                          fill="#585857"
                          d="M128.528 87.624a8.582 8.582 0 1 1-17.164 0 8.582 8.582 0 0 1 17.164 0z"
                          data-color="1"
                        ></path>
                        <path
                          d="M141.504 98.707a4.306 4.306 0 0 0-4.304 4.308c0 20.512-16.693 37.201-37.203 37.201s-37.194-16.688-37.194-37.201a4.307 4.307 0 1 0-8.616 0c0 25.264 20.551 45.817 45.811 45.817 25.264 0 45.815-20.553 45.815-45.817a4.307 4.307 0 0 0-4.309-4.308z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-base font-bold leading-tight text-center">
                    Mutlu
                    <br />
                    Bitkiler
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className="mb-2 flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="20.001 22.001 159.999 155.999"
                      viewBox="20.001 22.001 159.999 155.999"
                      height="56"
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                    >
                      <g>
                        <path
                          d="M69.148 107.4c-.332 0-.669-.048-1.003-.15-11.759-3.576-19.659-14.282-19.659-26.64 0-15.345 12.42-27.829 27.687-27.829 10.629 0 20.449 6.237 25.016 15.891a3.486 3.486 0 0 1-1.639 4.635 3.454 3.454 0 0 1-4.612-1.648c-3.426-7.242-10.792-11.921-18.765-11.921-11.45 0-20.765 9.363-20.765 20.872 0 9.125 6.062 17.342 14.741 19.981a3.482 3.482 0 0 1 2.311 4.337 3.467 3.467 0 0 1-3.312 2.472z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M81.58 46.164a3.476 3.476 0 0 1-3.428-3.989l2.536-17.206a3.464 3.464 0 0 1 3.931-2.931 3.476 3.476 0 0 1 2.917 3.951L85 43.194a3.469 3.469 0 0 1-3.42 2.97z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M56.067 51.415a3.455 3.455 0 0 1-2.952-1.658l-9.06-14.819a3.489 3.489 0 0 1 1.136-4.785 3.45 3.45 0 0 1 4.76 1.142l9.06 14.819a3.489 3.489 0 0 1-1.136 4.785c-.564.35-1.19.516-1.808.516z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M39.88 71.921c-.362 0-.731-.058-1.094-.179l-16.417-5.498a3.483 3.483 0 0 1-2.19-4.4 3.456 3.456 0 0 1 4.377-2.201l16.417 5.498a3.483 3.483 0 0 1 2.19 4.4 3.465 3.465 0 0 1-3.283 2.38z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M24.502 104.481a3.462 3.462 0 0 1-3.219-2.2 3.484 3.484 0 0 1 1.946-4.514l16.092-6.395a3.455 3.455 0 0 1 4.491 1.956 3.484 3.484 0 0 1-1.946 4.514l-16.092 6.395a3.433 3.433 0 0 1-1.272.244z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M49.634 132.963a3.435 3.435 0 0 1-1.645-.42 3.487 3.487 0 0 1-1.396-4.715l8.238-15.296a3.451 3.451 0 0 1 4.691-1.403 3.487 3.487 0 0 1 1.396 4.715L52.68 131.14a3.457 3.457 0 0 1-3.046 1.823z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M104.478 58.623a3.445 3.445 0 0 1-2.591-1.17 3.492 3.492 0 0 1 .293-4.911L115.126 41a3.45 3.45 0 0 1 4.886.294 3.492 3.492 0 0 1-.293 4.911l-12.946 11.542a3.437 3.437 0 0 1-2.295.876z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M128.09 178c-28.623 0-51.91-23.408-51.91-52.18s23.287-52.179 51.91-52.179S180 97.049 180 125.82 156.713 178 128.09 178zm0-97.402c-24.806 0-44.988 20.286-44.988 45.222s20.182 45.222 44.988 45.222 44.988-20.287 44.988-45.222-20.181-45.222-44.988-45.222z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                        <path
                          d="M145.391 129.31h-17.305a3.47 3.47 0 0 1-3.461-3.479V94.524c0-1.921 1.55-3.479 3.461-3.479s3.461 1.557 3.461 3.479v27.829h13.844c1.911 0 3.461 1.557 3.461 3.479s-1.55 3.478-3.461 3.478z"
                          fill="#585857"
                          data-color="1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-base font-bold leading-tight text-center">
                    Mevsiminde
                    <br />
                    Gibi
                  </span>
                </div>
              </div>
            </div>
            {/* çevre dostu */}
            <div className="bg-blue-100 rounded-2xl p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Çevre Dostu
                </h3>
                <p className="text-base mb-6">
                  Skycrops'ta en büyük önceliğimiz doğaya saygı ve
                  sürdürülebilirlik. Geleneksel tarım yöntemlerine göre %97'ye
                  varan oranlarda daha az su tüketiyoruz. Skycrops, enerjisinin
                  önemli bir bölümünü tesisimizdeki güneş panellerinden alıyor.
                  Farmicca'nın gelişmiş enerji yönetim teknolojileri sayesinde
                  verimliğimiz dünya standartlarının üzerinde. Gübre ve
                  pestisitlerle toprağı kirletmiyoruz.
                </p>
              </div>
              <div className="flex gap-8 mt-auto justify-center">
                <div className="flex flex-col items-center">
                  <span
                    className="mb-2 flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="30.4 33.6 139.2 132.8"
                      viewBox="30.4 33.6 139.2 132.8"
                      height="56"
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                    >
                      <g>
                        <path
                          d="M82.47 142.013c-12.538 0-23.537-10.965-23.537-23.464 0-9.73 5.557-16.14 10.929-22.339 4.386-5.058 8.529-9.839 9.718-16.318a2.94 2.94 0 0 1 2.895-2.406 2.94 2.94 0 0 1 2.895 2.406c1.189 6.479 5.33 11.26 9.713 16.318 5.371 6.198 10.924 12.609 10.924 22.339 0 12.5-10.998 23.464-23.537 23.464zm.006-52.937c-2.202 4.096-5.213 7.57-8.161 10.97-4.884 5.634-9.497 10.956-9.497 18.503 0 9.375 8.249 17.598 17.653 17.598s17.653-8.223 17.653-17.598c0-7.547-4.611-12.869-9.491-18.503-2.948-3.4-5.956-6.874-8.157-10.97z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M132.486 130.281c-9.569 0-17.653-8.06-17.653-17.598 0-7.765 4.665-13.133 8.782-17.87 2.717-3.128 5.284-6.081 6.005-9.189a2.939 2.939 0 0 1 2.866-2.271c1.369 0 2.559.942 2.866 2.271.721 3.108 3.288 6.061 6.005 9.189 4.117 4.738 8.782 10.105 8.782 17.87 0 9.538-8.084 17.598-17.653 17.598zm0-37.138c-1.313 1.931-2.882 3.738-4.425 5.511-3.777 4.348-7.344 8.453-7.344 14.029 0 6.25 5.499 11.732 11.768 11.732 6.269 0 11.768-5.482 11.768-11.732 0-5.577-3.567-9.681-7.344-14.029-1.541-1.773-3.11-3.581-4.423-5.511z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M108.949 92.152c-7.699 0-14.711-6.989-14.711-14.665 0-6.078 4.022-11.858 7.571-16.959 1.952-2.807 3.797-5.456 4.304-7.287.352-1.272 1.513-2.151 2.836-2.151s2.484.879 2.836 2.151c.507 1.83 2.352 4.48 4.304 7.287 3.548 5.101 7.571 10.881 7.571 16.959 0 7.676-7.012 14.665-14.711 14.665zm0-31.671c-.715 1.106-1.503 2.234-2.304 3.388-3.057 4.394-6.522 9.375-6.522 13.617 0 3.961 4.073 8.799 8.826 8.799s8.826-4.838 8.826-8.799c0-4.242-3.465-9.223-6.522-13.617-.801-1.153-1.588-2.282-2.304-3.388z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M166.718 120.505l-5.629-1.713a58.673 58.673 0 0 0 1.085-3.973c3.557-15.358.902-31.175-7.475-44.54-8.378-13.365-21.474-22.679-36.878-26.223l1.323-5.717c16.934 3.898 31.335 14.135 40.545 28.832 9.21 14.694 12.129 32.083 8.219 48.965a63.587 63.587 0 0 1-1.19 4.369z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M42.291 120.511a64.646 64.646 0 0 1-1.185-33.555c5.64-24.349 24.324-42.979 48.762-48.621l1.327 5.717c-22.231 5.13-39.226 22.075-44.354 44.222a58.788 58.788 0 0 0 1.076 30.519l-5.626 1.718z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M104.395 166.4c-4.841 0-9.711-.538-14.525-1.647-12.709-2.927-24.106-9.484-32.957-18.964l4.307-3.999c8.048 8.622 18.413 14.585 29.974 17.246 20.514 4.726 42.195-1.89 56.595-17.257l4.298 4.004c-12.448 13.284-29.857 20.617-47.692 20.617z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M46.029 124.647L30.4 109.458l4.109-4.199 9.669 9.398 5.662-12.219 5.341 2.457-9.152 19.752z"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M148.437 161.568l-5.704-1.444 3.329-13.047-13.447 1.224-.534-5.844 21.736-1.973-5.38 21.084z"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M126.261 57.276L113.68 39.5l21.008-5.9 1.595 5.648-12.998 3.649 7.783 10.999-4.807 3.38z"
                          data-color="1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-base font-bold leading-tight text-center">
                    Minimum Su
                    <br />
                    Tüketimi
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className="mb-2 flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="31.233 29.197 137.602 141.604"
                      viewBox="31.233 29.197 137.602 141.604"
                      height="56"
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                    >
                      <g>
                        <path
                          fill="#353F69"
                          d="M88.319 29.204v20.65h-5.883v-20.65h5.883z"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M111.85 29.197v20.65h-5.883v-20.65h5.883z"
                          data-color="1"
                        ></path>
                        <path
                          d="M100.1 94.1l-5.883.002c-9.732.003-17.651-7.934-17.654-17.695l-.003-10.334c-2.103-1.728-5.884-5.506-5.886-10.315l-.003-8.85 52.946-.016.003 8.85c.001 4.808-3.778 8.589-5.88 10.318l.003 10.334c.003 9.761-7.911 17.703-17.643 17.706zM76.557 52.807l.001 2.95c.001 2.754 3.615 5.749 4.584 6.4l1.301.875.004 13.373c.002 6.508 5.282 11.798 11.769 11.797l5.883-.002c6.489-.002 11.764-5.296 11.762-11.803l-.004-13.373 1.301-.876c1.183-.807 4.581-3.729 4.58-6.403l-.001-2.95-41.18.012z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M100.111 91.151v79.65h-5.883v-79.65h5.883z"
                          data-color="1"
                        ></path>
                        <path
                          d="M134.548 147.449c-7.063.005-13.056-3.194-16.585-5.621l3.325-4.864c4.054 2.785 12.11 6.879 20.623 2.93 12.525-5.809 20.95-17.925 21.047-29.699-5.65.682-11.019-.334-16.239-1.323-8.196-1.565-15.932-3.035-24.637 1.949-5.152 2.946-10.337 14.093-6.669 22.87l-5.428 2.277c-5.071-12.141 2.17-26.263 9.183-30.275 10.598-6.056 20.184-4.232 28.647-2.618 5.906 1.125 11.488 2.183 17.172.758l3.228-.813.403 3.316c1.857 15.173-8.338 31.542-24.241 38.916-3.403 1.576-6.72 2.196-9.829 2.197z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M99.786 154.46l-5.22-2.718c11.844-22.86 33.316-29.873 48.993-34.994a299.301 299.301 0 0 0 5.518-1.84l1.932 5.571a311.078 311.078 0 0 1-5.627 1.877c-14.712 4.807-34.863 11.387-45.596 32.104z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M62.525 131.415a20.568 20.568 0 0 1-6.749-1.15c-14.476-4.98-24.796-18.303-24.538-31.682l.065-3.339 3.295.474c4.919.71 9.584-.683 14.523-2.162 7.198-2.154 15.352-4.599 25.13-.272 7.408 3.282 13.869 15.475 10.782 25.694l-5.631-1.71c2.388-7.906-3.456-16.783-7.529-18.585-7.791-3.449-14.241-1.523-21.071.528-4.284 1.283-8.687 2.601-13.473 2.602h-.033c1.297 9.797 9.42 19.1 20.389 22.871 7.478 2.582 13.908-1.574 17.077-4.274l3.807 4.499c-3.174 2.702-8.909 6.504-16.044 6.506z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M94.713 134.07c-10.965-16.72-28.773-20.57-41.776-23.38-1.758-.38-3.434-.742-5.004-1.113l1.351-5.745c1.535.365 3.174.719 4.894 1.09 13.996 3.027 33.162 7.169 45.449 25.909l-4.914 3.239z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M103.034 64.601v5.9H91.268v-5.9h11.766z"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M103.037 73.451v5.9H91.271v-5.9h11.766z"
                          data-color="1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-base font-bold leading-tight text-center">
                    Yeşil Enerji
                    <br />
                    Kullanımı
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className="mb-2 flex items-center justify-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <svg
                      preserveAspectRatio="xMidYMid meet"
                      data-bbox="32.4 30.401 135.201 139.199"
                      viewBox="32.4 30.401 135.201 139.199"
                      height="56"
                      width="56"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="color"
                      role="presentation"
                      aria-hidden="true"
                      aria-label=""
                    >
                      <g>
                        <path
                          d="M81.504 148.187l-4.156-4.152.367-.387c1.187-1.275 3.174-3.409 7.589-3.409h40.861c3.334-1.391 18.236-15.798 21.607-19.572 1.846-2.067 9.898-14.12 13.294-20.802-1.596-.912-4.313-1.545-7.497-.807-3.812.885-6.379 3.56-9.806 10.226a2.935 2.935 0 0 1-1.26 1.264l-13.474 6.989-2.71-5.213 12.651-6.562c3.489-6.601 7.021-10.975 13.271-12.426 6.902-1.603 12.498.975 14.78 4.046.624.839.753 1.945.343 2.905-2.865 6.692-12.892 21.698-15.204 24.289-.194.216-20.23 21.535-25.707 21.535H85.304c-1.854 0-2.392.578-3.285 1.537l-.515.539z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M120.574 128.494H97.061v-5.872h23.513c4.06 0 5.878-2.212 5.878-4.404s-1.818-4.404-5.878-4.404h-15.529c-2.079 0-3.921-1.408-6.05-3.038-1.475-1.128-3.704-2.834-4.872-2.834H79.426c-2.816 0-7.038 2.558-9.753 5.085l-11.682 11.671-4.156-4.152 11.757-11.745c3.375-3.145 8.961-6.732 13.835-6.732h14.696c3.16 0 5.969 2.149 8.446 4.044.888.68 2.232 1.707 2.725 1.855l15.281-.027c7.718 0 11.757 5.17 11.757 10.276s-4.04 10.277-11.758 10.277z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M70.609 169.6a2.933 2.933 0 0 1-2.078-.86l-35.27-35.234a2.933 2.933 0 0 1 0-4.152l14.696-14.681a2.94 2.94 0 0 1 4.156 0l35.27 35.234a2.933 2.933 0 0 1 0 4.152L72.687 168.74a2.933 2.933 0 0 1-2.078.86zm-31.114-38.17l31.113 31.082 10.54-10.529-31.113-31.082-10.54 10.529z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M53.835 139.378l-5.878-5.872 4.156-4.152 5.878 5.873-4.156 4.151z"
                          data-color="1"
                        ></path>
                        <path
                          fill="#353F69"
                          d="M88.244 105.005h-5.879v-7.444l10.867-7.237h8.49l6.516-6.509 7.151 3.573h6.075l8.817 5.872h9.145l6.739 6.733-4.156 4.152-5.017-5.012h-8.49l-8.818-5.873h-5.681l-4.606-2.299-5.241 5.235h-9.144l-6.768 4.508v4.301z"
                          data-color="1"
                        ></path>
                        <path
                          d="M89.703 83.413c-3.269 0-6.794-.594-9.931-2.414-8.335-4.833-17.242-20.876-17.616-21.555l-2.411-4.376 5 .023c.802.004 19.742.148 28.049 4.966 8.948 5.19 10.09 17.747 10.135 18.279l.181 2.172-2.028.801c-.326.129-5.425 2.104-11.379 2.104zM70.028 61.159c3.322 5.227 8.443 12.294 12.695 14.761 4.478 2.595 10.699 1.495 13.975.619-.67-3.183-2.448-8.849-6.854-11.405-4.313-2.5-13.399-3.579-19.816-3.975z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M127.531 82.749c-2.791 0-5.304-.403-7.227-.847l1.323-5.72c4.377 1.008 12.599 1.785 18.509-4.373 8.743-9.114 12.135-23.326 8.315-33.163-4.437 2.228-9.094 3.293-13.625 4.33-7.804 1.786-15.176 3.474-21.187 10.916-3.39 4.196-4.083 15.333 1.943 21.531l-4.216 4.092c-7.859-8.084-7.685-22.645-2.302-29.31 7.289-9.025 16.406-11.111 24.449-12.952 5.257-1.204 10.222-2.34 14.625-5.18l2.59-1.672 1.547 2.665c6.891 11.881 3.35 31.083-7.895 42.806-5.195 5.414-11.529 6.877-16.849 6.877z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                        <path
                          d="M111.739 90.647l-5.844-.645c2.115-19.131 14.341-28.418 25.128-36.61 2.415-1.835 4.696-3.568 6.778-5.349l3.823 4.462c-2.212 1.891-4.559 3.674-7.044 5.561-10.325 7.843-21.004 15.953-22.841 32.581z"
                          fill="#353F69"
                          data-color="1"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-base font-bold leading-tight text-center">
                    Toprağa
                    <br />
                    Saygı
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Grid */}
      <section className="py-10 sm:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t("about_feature_fresh_title")}
              </h3>
              <p className="text-base text-muted-foreground">
                {t("about_feature_grid_fresh_desc")}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t("about_feature_pesticide_title")}
              </h3>
              <p className="text-base text-muted-foreground">
                {t("about_feature_grid_pesticide_desc")}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t("about_feature_eco_title")}
              </h3>
              <p className="text-base text-muted-foreground">
                {t("about_feature_grid_eco_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
