export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">About Skycrops</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing agriculture with vertical farming technology, 
              bringing you the freshest, healthiest vegetables while protecting our planet.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">yaşayan sebzeler!</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Skycrops, sağlıklı yaşamın ve taze lezzetlerin kapılarını aralayan bir dikey tarım tesisi. 
                Doğallıktan uzaklaşmadan, kapalı ortamda, dış dünyanın negatif etkilerinden uzakta üretilen 
                besleyici yeşilliklerimiz, sofralarınıza lezzet ve tazelik getiriyor.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skycrops, geleceğin tarım yöntemlerini bugün uygulayarak, sizleri sağlıklı bir yaşam için 
                doğal ve taze alternatiflerle buluşturmayı hedefliyor. Sağlıklı yaşamın anahtarı, 
                Skycrops'un yeşilliklerinde gizli.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Skycrops vertical farming facility"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern vertical farming facility"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">philosophy</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Let's make the world healthier together. At Skycrops, we believe it's our responsibility
                to provide fresh, living vegetables while protecting our environment. That's why we're proud
                to introduce our revolutionary vertical farming technology - every time you buy our premium
                vegetables, you help create a more sustainable future!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">taze, sağlıklı</h4>
                  <p className="text-sm text-muted-foreground">Fresh harvest daily</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">pestisit free</h4>
                  <p className="text-sm text-muted-foreground">No chemicals or hormones</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">çevre dostu</h4>
                  <p className="text-sm text-muted-foreground">97% less water usage</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">yaşayan sebzeler</h4>
                  <p className="text-sm text-muted-foreground">Living until consumption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">taze, sağlıklı</h3>
              <p className="text-muted-foreground">
                Şehir içi sağlıklı tarım konseptiyle üretim modelinde ürünler uzun nakliye süreçlerine girmez. 
                Kökleriyle birlikte hasat edilen yeşillikler canlıdır ve büyümeye devam ederler.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">pestisit free</h3>
              <p className="text-muted-foreground">
                Dış dünyanın negatif etkilerine kapalı üretim ortamında, optimum koşullarda üretim yaptığımız için 
                hiç bir tarımsal ilaç ve hormon kullanmıyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">çevre dostu</h3>
              <p className="text-muted-foreground">
                Geleneksel tarım yöntemlerine göre %97'ye varan oranlarda daha az su tüketiyoruz. 
                Güneş panelleri ve enerji yönetim teknolojileri ile sürdürülebilirliği sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Facility */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">skycrops üretim tesisi</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              650 metrekare net üretim alanımızda 84 adet 8 katlı dikey tarım ünitesiyle 
              yıl boyunca üretim ve hasat yapıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">üretim alanı</h3>
                <p className="text-muted-foreground">
                  650 metrekare net üretim alanımızda 84 adet 8 katlı dikey tarım ünitesiyle 
                  yıl boyunca üretim ve hasat yapıyoruz. Bu sayede yıl boyunca taze ürünleri 
                  tüketiciyle buluşturuyoruz.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">teknoloji</h3>
                <p className="text-muted-foreground">
                  Üstün Farmicca büyütme ledleri, iklim kontrol, gübre dozajlama ve enerji 
                  yönetim teknolojisi sayesinde bitkilerimiz doğal ortamlarında olduğu kadar 
                  mutlu ve sağlıklı büyüyor.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">paketleme ve sevkiyat</h3>
                <p className="text-muted-foreground">
                  Üretim alanıyla bütünleşik, hijyenik paketleme ve sevkiyat alanı sebzelerin 
                  üretim tesisinden çıktıktan sonra mümkün olan en hızlı sürede tüketiciyle 
                  buluşmasını sağlıyor.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">yeşil enerji</h3>
                <p className="text-muted-foreground">
                  Kurulu 1 mW güneş panelleri ve yağmur hasadı, kullandığımız enerji yönetim 
                  teknolojileri sayesinde doğaya saygı en önemli prensibimiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
