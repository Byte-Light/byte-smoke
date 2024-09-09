import React from "react";

interface EventTicket {
  title: string;
  price: string;
  soldOut: boolean;
}

const tickets: EventTicket[] = [
  {
    title: "Summer Herf: Rocky Patel, La Galera x Berry Brothers & Rudd",
    price: "£65.00",
    soldOut: true,
  },
  {
    title: "2024 Finale: Perdomo, Alec Bradley x The Macallan",
    price: "£65.00",
    soldOut: true,
  },
  {
    title: "Meet the Founders: Trident Military Cigars x Plantation Rum Experience",
    price: "£65.00",
    soldOut: true,
  },
];

const EventTickets: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Buy Byte Smoke Event Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map((ticket, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg relative text-center">
            {ticket.soldOut && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">SOLD OUT</span>
              </div>
            )}
            <h2 className="text-xl font-semibold mb-4">{ticket.title}</h2>
            <p className="text-lg font-bold text-green-500">{ticket.price}</p>
            <p className="text-yellow-500 font-semibold mt-2">Get it Tomorrow</p>
            <p className="text-gray-500 text-sm">Order before 3pm</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTickets;
