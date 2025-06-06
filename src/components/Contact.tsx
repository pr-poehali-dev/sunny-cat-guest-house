import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      description: "Круглосуточная поддержка",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@sunnycat.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "ул. Солнечная, 15",
      description: "г. Сочи, Краснодарский край",
    },
    {
      icon: "Clock",
      title: "Заезд/Выезд",
      value: "14:00 / 12:00",
      description: "Гибкий график по договоренности",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Контакты и бронирование
          </h2>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-orange-50 rounded-lg"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-lg mb-4">
                    <Icon name={info.icon} size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {info.title}
                  </h3>
                  <p className="text-lg text-orange-600 font-medium mb-1">
                    {info.value}
                  </p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="mr-2 text-orange-500"
                  />
                  Как добраться
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-10 mb-4">
                  <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Icon name="Map" size={48} className="mx-auto mb-2" />
                      <p>Интерактивная карта</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Гостевой дом расположен в тихом районе, в 10 минутах езды от
                  центра города и пляжа. Бесплатная парковка на территории.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon
                  name="MessageSquare"
                  size={20}
                  className="mr-2 text-orange-500"
                />
                Форма обратной связи
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон
                    </label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Дата заезда
                    </label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Дата выезда
                    </label>
                    <Input type="date" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите о ваших пожеланиях или задайте вопрос..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
