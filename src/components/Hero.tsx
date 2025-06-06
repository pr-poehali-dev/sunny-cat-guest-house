import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Добро пожаловать в<br />
              <span className="text-orange-500">Солнечный Кот</span> 🌞
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Уютный гостевой дом в живописном месте, где каждый гость чувствует
              себя как дома. Идеальное место для отдыха от городской суеты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать номер
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Виртуальный тур
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Солнечный Кот - уютный гостевой дом"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="text-2xl">⭐</div>
                <div>
                  <div className="font-bold text-gray-900">4.9</div>
                  <div className="text-sm text-gray-600">127 отзывов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
