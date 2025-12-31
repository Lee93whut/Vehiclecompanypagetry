import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Globe, Lightbulb, TrendingUp } from "lucide-react";

const stats = [
  { icon: Globe, label: "全球市场", value: "50+" },
  { icon: Award, label: "行业奖项", value: "120+" },
  { icon: TrendingUp, label: "年销量", value: "200万+" },
  { icon: Lightbulb, label: "专利技术", value: "300+" },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              关于我们
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Speedster汽车成立于2010年，专注于新能源汽车研发与制造。我们致力于打造高性能、智能化、环保的未来出行解决方案。
            </p>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              凭借卓越的技术创新和对品质的不懈追求，我们已成为全球领先的新能源汽车品牌之一，为全球用户提供卓越的驾驶体验。
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <Icon className="text-blue-600 mb-3" size={28} />
                    <div className="text-3xl text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzaG93cm9vbSUyMGx1eHVyeXxlbnwxfHx8fDE3NjcwMTgxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Car Showroom"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
