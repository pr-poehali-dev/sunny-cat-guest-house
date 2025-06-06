import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      title: "Стандарт",
      price: "2500",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      guests: 2,
      size: "25 м²",
      amenities: ["Wi-Fi", "Кондиционер", "Мини-бар", "Телевизор"],
    },
    {
      id: 2,
      title: "Комфорт",
      price: "3500",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      guests: 3,
      size: "35 м²",
      amenities: ["Wi-Fi", "Кондиционер", "Мини-кухня", "Балкон", "Сейф"],
    },
    {
      id: 3,
      title: "Люкс",
      price: "4500",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      guests: 4,
      size: "45 м²",
      amenities: ["Wi-Fi", "Кондиционер", "Кухня", "Гостиная", "Джакузи"],
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши номера
          </h2>
          <p className="text-xl text-gray-600">
            Выберите идеальный номер для вашего отдыха
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <span className="text-orange-500 font-semibold">
                    {room.price} ₽/ночь
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{room.title}</span>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Icon name="Users" size={16} />
                    <span>{room.guests}</span>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Icon name="Square" size={16} className="mr-2" />
                    <span>{room.size}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Удобства:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-orange-100 text-orange-700 text-sm rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Забронировать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
