import { UserRound } from "lucide-react";
import { OrderCard } from "../../_components/order-card";

const OrderManagement = () => {
  // Its just temporary, I would remove it when we get the Api endpoint.
  const orders = [
    {
      orderId: "A1B2C3D4",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Pending",
    },
    {
      orderId: "A1B2C3D4",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Declined",
    },
    {
      orderId: "A1B2C3D4",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Shipped",
    },
    {
      orderId: "A1B2C3D4",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Delivered",
    },
    {
      orderId: "A1B2C3D4",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Pending",
    },
    {
      orderId: "A1B2C3D4",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Returned",
    },
    {
      orderId: "A1B2C3D4",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Pending",
    },
    {
      orderId: "A1B2C3D4",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Pending",
    },
    {
      orderId: "A1B2C3D4",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Pending",
    },
    {
      orderId: "A1B2C3D4",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Delivered",
    },
    {
      orderId: "A1B2C3D4",
      name: "John D.",
      orderDate: "July 15, 2024",
      status: "Delivered",
    },
  ];

  return (
    <div className="w-full p-4 flex flex-col bg-[#0E0F1D] justify-evenly">
        <h1 className="text-xl text-white py-2">Order Management</h1>
      <div className="flex text-[#64748B]">
        <UserRound className="w-[18px] h-[18px]" />
        Order List
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between bg-[#242A32] text-white rounded p-2 text-sm">
          <h3>Order ID</h3>
          <h3>Name</h3>
          <h3>Order Date</h3>
          <h3>Status</h3>
          <h3>Action Button</h3>
        </div>
        <div className="flex flex-col gap-4">
          {orders?.map((order) => (
            <div key={order.orderId}>
              <OrderCard {...order} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
