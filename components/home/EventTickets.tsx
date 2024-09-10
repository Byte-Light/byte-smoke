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
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">Buy Byte Smoke Event Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="relative border border-gray-200 rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 bg-white"
          >
            {ticket.soldOut && (
              <div className="absolute inset-0 bg-red-600 bg-opacity-75 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SOLD OUT</span>
              </div>
            )}
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{ticket.title}</h2>
            <p className="text-2xl font-bold text-green-600 mb-4">{ticket.price}</p>
            {!ticket.soldOut && (
              <>
                <p className="text-yellow-500 font-medium mb-1">Get it Tomorrow</p>
                <p className="text-gray-500 text-sm">Order before 3pm</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTickets;
