import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CardProps {
  orderId: string;
  name: string;
  orderDate: string;
  status: string;
}

function getStatusClass(status: string) {
  switch (status) {
    case "Pending":
      return "text-yellow-500 p-1 rounded font-bold";
    case "Declined":
      return "text-red-500 px-2 py-1 rounded font-bold";
    case "Shipped":
      return "text-sky-500 px-2 py-1 rounded font-bold";
    case "Delivered":
      return "text-green-500 px-2 py-1 rounded font-bold";
    case "Returned":
      return "text-gray-500 px-2 py-1 rounded font-bold";
    default:
      return "bg-gray-300 text-black px-2 py-1 rounded font-bold";
  }
}

export const OrderCard: React.FC<CardProps> = ({
  orderId,
  name,
  orderDate,
  status,
}) => {
  return (
    <div className="w-full flex justify-between items-center bg-[#101121] text-sm text-white flex-start p-2 rounded-md">
      <h3>{orderId}</h3>
      <h3>{name}</h3>
      <h3>{orderDate}</h3>
      <h3 className={`px-4 py-2 bg-[#14162a] ${getStatusClass(status)}`}>
        {status}
      </h3>
      <Sheet>
        <SheetTrigger asChild>
          <h3 className="hover:underline cursor-pointer">View Details</h3>
        </SheetTrigger>
        <SheetContent className="bg-[#0E0F1D] flex flex-col w-full">
          <SheetHeader className="flex flex-row justify-between items-center">
            <SheetClose asChild>
              <Button className="bg-[#64748B] hover:bg-slate-800" size="sm">
                <img src="logout-03.svg" className="w-[18px] h-[18px]" />
              </Button>
            </SheetClose>
            <Button variant="ghost" size="sm" className="border text-white">
              Edit
            </Button>
          </SheetHeader>
          <Tabs defaultValue="general" className="bg-[#0E0F1D] text-sm">
            <TabsList className="grid w-full grid-cols-4 bg-[#242A32] text-sm">
              <TabsTrigger value="general" className="text-[12px]">
                General Information
              </TabsTrigger>
              <TabsTrigger value="product" className="text-[12px]">
                Product Details
              </TabsTrigger>
              <TabsTrigger value="shipping" className="text-[12px]">
                Shipping & Delivery
              </TabsTrigger>
              <TabsTrigger value="billing" className="text-[12px]">
                Billing Information
              </TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <div className="w-5/6 flex flex-col gap-3 text-[13px] font-light">
                <div className="bg-[#242A32] rounded text-white p-2">
                  <h1>Order Overview</h1>
                </div>
                <div className="grid w-full grid-cols-2 gap-4">
                  <div className="flex flex-col text-white">
                    Order ID
                    <div className="w-full bg-transparent border border-gray-700 p-1 text-white rounded">
                      {orderId}
                    </div>
                  </div>
                  <div className="flex flex-col text-white">
                    Order Date
                    <div className="w-full bg-transparent border border-gray-700 p-1 text-white rounded">
                      {orderDate}
                    </div>
                  </div>
                  <div className="flex flex-col text-white">
                    Total Order
                    <div className="w-full bg-transparent border border-gray-700 p-1 text-white rounded">
                      12 Items
                    </div>
                  </div>
                  <div className="flex flex-col text-white">
                    Total Status
                    <div
                      className={` border border-gray-700 ${getStatusClass(
                        status
                      )}`}
                    >
                      {status}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-white">
                  Payment status
                  <div className="w-full bg-transparent border border-gray-700 p-2 text-green-500 rounded">
                    {" "}
                    Active
                  </div>
                </div>
                <div className="bg-[#242A32] rounded text-white p-2">
                  <h1>Customer Information</h1>
                </div>
                <div className="grid w-full grid-cols-2 gap-4">
                  <div className="flex flex-col text-white">
                    First Name
                    <div className="w-full bg-transparent border border-gray-700 p-1 text-white rounded">
                      John
                    </div>
                  </div>
                  <div className="flex flex-col text-white">
                    Last Name
                    <div className="w-full bg-transparent border border-gray-700 p-1 text-white rounded">
                      Doe
                    </div>
                  </div>
                  <div className="flex flex-col text-white">
                    Email Address
                    <div className="w-full bg-transparent border border-gray-700 p-1 text-white rounded">
                      johndoe34@xyz.com
                    </div>
                  </div>
                  <div className="flex flex-col text-white">
                    Phone Number
                    <div className="w-full bg-transparent border border-gray-700 p-1 text-white rounded">
                      +234 914 244 564
                    </div>
                  </div>
                  <div className="flex flex-col text-white">
                    Date of Birth
                    <div className="w-full bg-transparent border border-gray-700 p-1 text-white rounded">
                      31/ 01/ 2025
                    </div>
                  </div>
                  <div className="flex flex-col text-white">
                    Gender
                    <div className="w-full bg-transparent border border-gray-700 p-1 text-white rounded">
                      Male
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-white">
                  Address
                  <div className="w-full bg-transparent border border-gray-700 p-2 text-sm rounded">
                    {" "}
                    3rd floor, Oakland Suites, No 48 Aguyi Ironsi Estate,
                    Maitama.
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="product">
              <div className="text-white text-center">Product Details</div>
            </TabsContent>
            <TabsContent value="shipping">
              <div className="text-white text-center"> Delivery Info </div>
            </TabsContent>
            <TabsContent value="billing">
              <div className="text-white text-center">Pricing</div>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  );
};
