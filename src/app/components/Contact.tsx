import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">联系我们</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们随时为您提供专业服务，欢迎咨询
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">公司地址</h3>
                <p className="text-gray-600">
                  中国上海市浦东新区世纪大道1000号
                  <br />
                  Speedster汽车总部大楼
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">联系电话</h3>
                <p className="text-gray-600">
                  服务热线: 400-888-8888
                  <br />
                  销售咨询: 021-12345678
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">电子邮箱</h3>
                <p className="text-gray-600">
                  客服邮箱: service@speedster.com
                  <br />
                  商务合作: business@speedster.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl text-gray-900 mb-6">预约试驾</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  联系电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="请输入您的手机号"
                />
              </div>

              <div>
                <label htmlFor="model" className="block text-gray-700 mb-2">
                  意向车型
                </label>
                <select
                  id="model"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option>请选择车型</option>
                  <option>Speedster E-Sport</option>
                  <option>Speedster SUV Pro</option>
                  <option>Speedster Eco</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  留言
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="请输入您想了解的信息"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                提交预约
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
