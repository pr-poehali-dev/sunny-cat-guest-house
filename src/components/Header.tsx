import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🐱</div>
            <h1 className="text-xl font-bold text-gray-900">Солнечный Кот</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              О нас
            </a>
            <a
              href="#rooms"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Номера
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Icon name="Phone" size={16} className="mr-2" />
            Забронировать
          </Button>

          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
