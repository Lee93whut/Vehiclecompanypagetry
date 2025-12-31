import { ArrowRight, Edit2, Check, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const initialModels = [
  {
    id: 1,
    name: "Speedster E-Sport",
    category: "电动跑车",
    price: "¥688,000起",
    image: "https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY3MDEwODMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["0-100km/h 3.2s", "续航650km", "智能驾驶"],
  },
  {
    id: 2,
    name: "Speedster SUV Pro",
    category: "豪华SUV",
    price: "¥458,000起",
    image: "https://images.unsplash.com/photo-1729487151745-ee59a51f81a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVVYlMjBjYXIlMjBvdXRkb29yfGVufDF8fHx8MTc2NzAxNTM2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["7座空间", "全轮驱动", "超大后备箱"],
  },
  {
    id: 3,
    name: "Speedster Eco",
    category: "智能轿车",
    price: "¥298,000起",
    image: "https://images.unsplash.com/photo-1648396418755-6da68302adc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhbiUyMGNhciUyMGNpdHl8ZW58MXx8fHwxNzY3MDk5NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["节能环保", "智能互联", "舒适驾乘"],
  },
];

export function Models() {
  const [models, setModels] = useState(initialModels);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedPrice, setEditedPrice] = useState("");

  const startEditing = (id: number, currentPrice: string) => {
    setEditingId(id);
    setEditedPrice(currentPrice);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditedPrice("");
  };

  const savePrice = (id: number) => {
    setModels(models.map(model => 
      model.id === id ? { ...model, price: editedPrice } : model
    ));
    setEditingId(null);
    setEditedPrice("");
  };

  return (
    <section id="models" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">车型展示</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            每一款车型都融合了创新科技与匠心工艺，为您带来非凡驾驶体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <div
              key={model.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-full">
                  {model.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl text-gray-900 mb-2">{model.name}</h3>
                
                {/* Editable Price Section */}
                <div className="mb-4">
                  {editingId === model.id ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={editedPrice}
                        onChange={(e) => setEditedPrice(e.target.value)}
                        className="flex-1 px-3 py-2 border-2 border-blue-600 rounded-lg focus:outline-none text-blue-600"
                        autoFocus
                      />
                      <button
                        onClick={() => savePrice(model.id)}
                        className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        title="保存"
                      >
                        <Check size={20} />
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        title="取消"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <p className="text-xl text-blue-600 flex-1">{model.price}</p>
                      <button
                        onClick={() => startEditing(model.id, model.price)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="编辑价格"
                      >
                        <Edit2 size={18} />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {model.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                  查看详情
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}