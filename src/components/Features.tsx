import { Shirt, Gift, Palette, Heart, Leaf } from "lucide-react";

const features = [
  {
    icon: <Shirt className="w-8 h-8" />,
    title: "Custom Apparel",
    description: "Premium quality clothing tailored to your vision and values"
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Thoughtful Gifts",
    description: "Curated collections that create lasting memories"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Artisan Design",
    description: "Handcrafted designs that reflect authentic craftsmanship"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Made with Purpose",
    description: "Every piece tells a story and supports meaningful causes"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Sustainable and Eco Friendly",
    description: "Environmentally friendly products"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Makes Us Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in the power of meaningful creation. Every product we craft 
            carries intention, quality, and a story worth telling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`text-center p-8 rounded-2xl bg-card hover:shadow-elegant transition-all duration-300 group ${
                index === 4 ? 'lg:col-start-2 lg:col-span-2' : ''
              }`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};