import { db } from "./db";
import { products, categories, articles } from "@shared/schema";

export async function seedDatabase() {
  try {
    // Check if data already exists
    const existingProducts = await db.select().from(products).limit(1);
    if (existingProducts.length > 0) {
      console.log('Database already seeded');
      return;
    }

    console.log('Seeding database...');

    // Seed categories
    const categoryData = [
      {
        name: "leafy greens",
        slug: "leafy-greens",
        description: "Fresh, crisp leafy vegetables grown in our vertical farms",
        color: "#22c55e"
      },
      {
        name: "herbs",
        slug: "herbs",
        description: "Aromatic herbs perfect for cooking and garnishing",
        color: "#059669"
      },
      {
        name: "microgreens",
        slug: "microgreens",
        description: "Nutrient-dense microgreens with intense flavors",
        color: "#16a34a"
      }
    ];

    for (const cat of categoryData) {
      await db.insert(categories).values(cat);
    }

    // Seed products
    const productData = [
      {
        name: "Living Lettuce #2",
        slug: "living-lettuce-2",
        price: 450,
        description: "Fresh, crisp lettuce grown in our controlled environment. Perfect for salads and sandwiches.",
        category: "leafy greens",
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: true,
        isBestseller: true,
        inStock: true
      },
      {
        name: "Hydroponic Basil",
        slug: "hydroponic-basil",
        price: 350,
        description: "Aromatic basil leaves with intense flavor, grown without soil using advanced hydroponic systems.",
        category: "herbs",
        imageUrl: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: true,
        isBestseller: false,
        inStock: true
      },
      {
        name: "Vertical Spinach",
        slug: "vertical-spinach",
        price: 400,
        description: "Nutrient-rich spinach leaves grown in our vertical farming towers, perfect for healthy meals.",
        category: "leafy greens",
        imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: false,
        isBestseller: true,
        inStock: true
      },
      {
        name: "Living Arugula",
        slug: "living-arugula",
        price: 380,
        description: "Peppery arugula with a distinctive taste, grown using sustainable vertical farming methods.",
        category: "leafy greens",
        imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: false,
        isBestseller: false,
        inStock: true
      },
      {
        name: "Microgreen Mix",
        slug: "microgreen-mix",
        price: 280,
        description: "A colorful mix of microgreens including radish, mustard, and pea shoots.",
        category: "microgreens",
        imageUrl: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: true,
        isBestseller: false,
        inStock: true
      },
      {
        name: "Fresh Cilantro",
        slug: "fresh-cilantro",
        price: 320,
        description: "Fresh cilantro leaves with bright, citrusy flavor, grown in our controlled environment facility.",
        category: "herbs",
        imageUrl: "https://images.unsplash.com/photo-1584279186917-7dc15fc75e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: false,
        isBestseller: true,
        inStock: true
      }
    ];

    for (const prod of productData) {
      await db.insert(products).values(prod);
    }

    // Seed articles
    const articleData = [
      {
        title: "Peki Dikey Tarım Nedir?",
        slug: "peki-dikey-tarim-nedir",
        excerpt: "Dikey tarım basitçe bir binada ürün yetiştirmektir diyebiliriz. Üst üste konmuş havuzlar şeklinde ya da yan yana konmuş dikey duvarlar şeklinde olabilir ama en önemli özelliği üretim sürecinin tam kontrollü olmasıdır.",
        content: "Dikey tarım basitçe bir binada ürün yetiştirmektir diyebiliriz. Üst üste konmuş havuzlar şeklinde ya da yan yana konmuş dikey duvarlar şeklinde olabilir ama en en önemli özelliği üretim sürecinin tam kontrollü olmasıdır. Yani dikey tarımda dış hava koşullarına bağlı değiliz. Verimli bir toprak olup olmadığına bağlı değiliz. Çok az su kullanımı, çok az gübre kullanımı onun önemli farklerındandır. Eğer üretim kurallara uygun bir şekilde yapılırsa hiçbir pestisit kullanmadan ürün yetiştirilebilir. Sağlıklı ürün yetiştirmek için verimli toprağa bağlı değildir. Büyük bir arazi alanına ihtiyaç duymaz. Bu da çok fazla arazi alanının olmadığı kentsel alanlarda da yapılabilmesini sağlar. Tüm bunlara bağlı olmamanın ve her şeyin kontrollü olmasının sonucu olarak ne kadar ve hangi kalitede üretim yaptığımız konusunda garanti vermesi diğer yetiştirme yöntemleriyle karşılaştırıldığında bize sunduğu en önemli özelliğidir.",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Jul 17, 2025"
      },
      {
        title: "Dikey Tarıma Giriş",
        slug: "dikey-tarima-giris",
        excerpt: "Kontrollü ortam tarımı bugüne kadar seralarda yapılıyordu. Son yıllarda gelişen teknolojiyle beraber dikey tarım adını duymaya başladık. Gıda üretim sistemi konusunda yeni bir vizyon geliştirme zamanı.",
        content: "Kontrollü ortam tarımı bugüne kadar seralarda yapılıyordu. Son yıllarda gelişen teknolojiyle beraber dikey tarım adını duymaya başladık. Dünyanın birçok yerinde iklim değişikliği var, su kıtlığı var. Hâlâ yiyeceklerimizi yetiştirmek için böcek ilacı kullanıyoruz ve bir taraftan da doğal kaynakları tüketiyoruz. Nüfus artıyor ve bu insanların giderek daha fazlası büyük şehirlerde yaşıyor. Tüm bunlara baktığınızda, \"Gıda üretim sistemi konusunda yeni bir vizyon ne olabilir?\" diye sorabilirsiniz. Şöyle bir şey düşünün; güvenli üretim ve güvenli gıdaya erişim mümkün. Yediğinizde kimyasallar olmayacak. İçinde istemediğiniz bakteriler olmayacak. Sağlıklı olacak. Belki daha fazla vitamin veya sağlığımız için iyi olan diğer bileşikler olacak. Elbette yediklerimiz lezzetli de olmalı. Tüm bunları sürdürülebilir bir şekilde üretebilir miyiz? Yerel olarak yetiştirebilir miyiz? Yiyecekleri uçakla taşımak yerine, insanların yaşadığı yerin yakınında yetiştirebilir miyiz? Tüm bu soruları karşılayacak üretim sistemi ne olabilir sorusunun cevabı belki de dikey tarım olabilir. \"Dikey tarım\" tek başına tüm sorunları çözecektir diyemeyiz ancak dikey tarım, bu hedeflerin birçoğunu karşılayan üretim sistemlerinden biridir.",
        imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Jul 17, 2025"
      },
      {
        title: "Wageningen Üniversitesi Dikey Tarım Programı",
        slug: "wageningen-universitesi-dikey-tarim-programi",
        excerpt: "Wageningen University ve Araştırma Merkezi (WUR) tarafından düzenlenen Dikey Tarım programına katılan Kurucu Ortağımız Gamze Çapkınoğlu edindiği değerli bilgilerle dikey tarım alanındaki vizyonumuzu derinleştirdi.",
        content: "Our participation in the Wageningen University vertical farming program has provided valuable insights into advanced agricultural technologies and sustainable farming practices.",
        imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Mar 17, 2025"
      },
      {
        title: "The Science Behind Living Vegetables",
        slug: "science-behind-living-vegetables",
        excerpt: "Understanding the nutritional and freshness benefits of vegetables that continue growing until consumption. Why living vegetables are better for your health.",
        content: "Living vegetables maintain their nutritional value and continue photosynthesis until the moment of consumption, providing superior freshness and taste.",
        imageUrl: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        publishedAt: "Jan 20, 2025"
      }
    ];

    for (const article of articleData) {
      await db.insert(articles).values(article);
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}