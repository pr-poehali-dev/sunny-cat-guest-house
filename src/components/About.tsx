import React from "react";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Home",
      title: "Уютная атмосфера",
      description: "Каждый номер оформлен с любовью и вниманием к деталям",
    },
    {
      icon: "Wifi",
      title: "Современные удобства",
      description: "Бесплатный Wi-Fi, кондиционер, мини-кухня в каждом номере",
    },
    {
      icon: "MapPin",
      title: "Отличное расположение",
      description:
        "В 5 минутах от центра города и основных достопримечательностей",
    },
    {
      icon: "Users",
      title: "Семейный сервис",
      description: "Персональный подход к каждому гостю",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            О гостевом доме "Солнечный Кот"
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наш семейный гостевой дом работает уже более 5 лет. Мы создали
            место, где современный комфорт сочетается с домашним уютом и заботой
            о каждом госте.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-orange-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                <Icon
                  name={feature.icon}
                  size={24}
                  className="text-orange-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Интерьер гостевого дома"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Почему гости выбирают нас
            </h3>
            <ul className="space-y-4">
              {[
                "Круглосуточная стойка регистрации",
                "Бесплатная парковка",
                "Завтрак из свежих продуктов",
                "Помощь в организации экскурсий",
                "Детская площадка и зона отдыха",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
