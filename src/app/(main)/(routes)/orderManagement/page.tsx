"use client";
import { useState } from "react";
import { UserRound } from "lucide-react";
import { OrderCard } from "../../_components/order-card";

const OrderManagement = () => {
  // Temporary orders list, will be replaced with an API endpoint.
  const orders = [
    {
      orderId: "A1B2C3D4",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Pending",
    },
    {
      orderId: "XVT761LS",
      name: "Emily F.",
      orderDate: "July 15, 2024",
      status: "Delivered",
    },
    {
      orderId: "MBNT7612",
      name: "Michael S.",
      orderDate: "July 15, 2024",
      status: "Shipped",
    },
    {
      orderId: "CYMA8979",
      name: "Sophie M.",
      orderDate: "July 15, 2024",
      status: "Delivered",
    },
    {
      orderId: "GAG12397",
      name: "David L.",
      orderDate: "July 15, 2024",
      status: "Delivered",
    },
    {
      orderId: "BGR6748",
      name: "Olivia W.",
      orderDate: "July 15, 2024",
      status: "Declined",
    },
    {
      orderId: "FRO24576",
      name: "Andrew K.",
      orderDate: "July 15, 2024",
      status: "Pending",
    },
    {
      orderId: "TAY18987",
      name: "Isabella P.",
      orderDate: "July 15, 2024",
      status: "Shipped",
    },
    {
      orderId: "V2W10715",
      name: "Ethan B.",
      orderDate: "July 15, 2024",
      status: "Pending",
    },
    {
      orderId: "ABC1304",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Delivered",
    },
    {
      orderId: "ABC1304",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Delivered",
    },
    // Add more orders to test pagination...
  ];

  const ordersPerPage = 10;

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  // Function to handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const currentOrders = orders.slice(
    currentPage * ordersPerPage,
    (currentPage + 1) * ordersPerPage
  );

  return (
    <div className="w-full min-h-dvh p-4 flex flex-col bg-[#0E0F1D] ">
      <div>
        <h1 className="text-xl text-white py-2">Order Management</h1>
        <div className="flex text-[#64748B] mb-4">
          <UserRound className="w-[18px] h-[18px]" />
          <span className="ml-2">Order List</span>
        </div>
      </div>
      <div>
        {/* Header */}
        <div className="w-full flex justify-between bg-[#242A32] text-white rounded p-2 text-sm">
          <h3>Order ID</h3>
          <h3>Name</h3>
          <h3>Order Date</h3>
          <h3>Status</h3>
          <h3>Action Button</h3>
        </div>

        {/* Orders display for the current page */}
        <div className="w-full grid grid-cols-1 gap-4 mt-4">
          {currentOrders.map((order) => (
            <div key={order.orderId}>
              <OrderCard {...order} />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4 text-white">
          <button
            className={`p-2 bg-gray-700 rounded ${
              currentPage === 0 && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            Previous
          </button>

          <span className="text-sm">{`Page ${
            currentPage + 1
          } of ${totalPages}`}</span>

          <button
            className={`p-2 bg-gray-700 rounded ${
              currentPage === totalPages - 1 && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
