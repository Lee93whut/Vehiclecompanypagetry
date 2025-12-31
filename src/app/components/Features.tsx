import { Battery, Gauge, Shield, Smartphone, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "极速性能",
    description: "搭载最新电动动力系统，百公里加速仅需3.2秒，带来极致驾驶快感",
  },
  {
    icon: Battery,
    title: "超长续航",
    description: "采用高密度电池技术，最高续航可达650公里，告别里程焦虑",
  },
  {
    icon: Shield,
    title: "安全防护",
    description: "配备全方位主被动安全系统，守护每一次出行安全",
  },
  {
    icon: Smartphone,
    title: "智能互联",
    description: "先进的车联网系统，实现人车互联，让驾驶更智能便捷",
  },
  {
    icon: Gauge,
    title: "精准操控",
    description: "运动级底盘调校，精准转向系统，带来极致操控体验",
  },
  {
    icon: Users,
    title: "舒适空间",
    description: "人体工学设计，豪华内饰材质，打造舒适宽敞的驾乘空间",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">功能特色</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            融合前沿科技与创新设计，为您提供卓越的驾驶体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
