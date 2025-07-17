export default function SocialSection() {
  const socialPosts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Fresh vegetables growing in vertical farming system"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Hydroponic lettuce growing under LED lights"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Fresh harvest collection of leafy greens"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Modern vertical farming technology and automation"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-foreground text-center mb-16">follow us</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/skycrops_farm/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={post.imageUrl}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-4">
                <span className="text-white font-medium">@skycrops_farm</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
