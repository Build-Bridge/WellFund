import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
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

export const ProductCard: React.FC<CardProps> = ({
  orderId,
  name,
  orderDate,
  status,
}) => {
  return (
    <div className="w-full flex flex-col justify-between items-center bg-[#242A3280] text-sm text-white flex-start p-2 rounded-md">
      <div className="flex gap-5 justify-between flex-col w-full h-fit py-2">
        <div className="flex gap-5 justify-between items-center w-full h-fit py-2">
          <div className="flex items-end gap-1 h-fit w-full">
            <img src={"/prd1.svg"} alt="" />
            <div className="pt-5">
              <h1 className="text-white text-[14px] leading-[20px] font-bold">
                Aspirin
              </h1>
              <small>M8N7R6J2</small>
            </div>
          </div>
          <div className="w-full">
            <h1>category</h1>
            <div>
              <small>Health Product</small>
              <small>Drugs</small>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div>
              <h1>SKU</h1>
              <small>FAE-7004</small>
            </div>
            <div>
              <h1>Price</h1>
              <small>$10.00</small>
            </div>
          </div>
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex w-full justify-between p-3 rounded-lg m-2 bg-[#242A32]">
            <div className="flex items-start gap-1">
              <img src={"/location.svg"} alt="" />
              <p className="text-white leading-[14.4px] text-[12px]">
                Starlabs Pharmacy LTD
              </p>
            </div>
            <div className="flex items-start gap-1">
              <img src={"/package.svg"} alt="" />
              <p className="text-white leading-[14.4px] text-[12px]">
                12 Product in stock
              </p>
            </div>
            <div className="flex items-center gap-1">
              <img src={"/active.svg"} alt="" />
              <small className="text-[#059C48] text-[14px] leading-[20px] capitalize">
                active
              </small>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent className="bg-[#0E0F1D] flex flex-col w-full">
          <SheetHeader className="flex flex-col justify-between items-center">
            <div className="w-full flex flex-row justify-between items-center">
              <SheetClose asChild>
                <Button className="bg-[#64748B] hover:bg-slate-800" size="sm">
                  <img src="logout-03.svg" className="w-[18px] h-[18px]" />
                </Button>
              </SheetClose>
              <Button variant="ghost" size="sm" className="border text-white">
                Edit
              </Button>
            </div>
            <div className="flex items-center gap-1 h-fit w-full">
              <img src={"/prd1.svg"} alt="" />
              <div>
                <h1 className="text-white text-[14px] leading-[20px] font-bold">
                  Aspirin
                </h1>
                <small className="text-white">M8N7R6J2</small>
              </div>
            </div>
          </SheetHeader>
          <Tabs defaultValue="general" className="bg-[#0E0F1D] text-sm">
            <TabsList className="grid w-full grid-cols-4 bg-[#242A32] text-sm">
              <TabsTrigger value="general" className="text-[12px]">
                General Information
              </TabsTrigger>
              <TabsTrigger value="pricing" className="text-[12px]">
                Pricing & Inventory
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-[12px]">
                Reviews & Ratings
              </TabsTrigger>
              <TabsTrigger value="performance" className="text-[12px]">
                Product Performance
              </TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <div className="ml-auto my-2 rounded-lg bg-[#0E0F1D] h-full p-3 text-white">
                <div className="mt-10">
                  <div>
                    <div className="w-5/6">
                      <h2 className="text-white font-bold leading-6 capitalize">
                        brief description
                      </h2>
                      <p className="text-[14px] leading-[20px] border border-[#242A32] p-2 rounded-md">
                        Aspirin is a widely used over-the-counter medication
                        that belongs to a class of drugs known as nonsteroidal
                        anti-inflammatory drugs (NSAIDs). It is primarily used
                        to relieve pain, reduce inflammation, and lower fever.
                      </p>

                      <div>
                        <div className="flex items-center justify-between gap-10">
                          <div className="my-3 w-full">
                            <label className="font-bold leading-6 text-white capitalize">
                              price
                            </label>
                            <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                              $10.00
                            </div>
                          </div>
                          <div className="my-3 w-full">
                            <label className="font-bold leading-6 text-white capitalize">
                              in stock
                            </label>
                            <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                              12 product
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-10">
                          <div className="my-3 w-full">
                            <label className="font-bold leading-6 text-white capitalize">
                              category
                            </label>
                            <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                              health product
                            </div>
                          </div>
                          <div className="my-3 w-full">
                            <label className="font-bold leading-6 text-white capitalize">
                              brand
                            </label>
                            <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                              Starlabs Pharmacy LTD
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-10">
                          <div className="my-3 w-full">
                            <label className="font-bold leading-6 text-white capitalize">
                              registration date
                            </label>
                            <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                              31 / 01 / 2025
                            </div>
                          </div>
                          <div className="my-3 w-full">
                            <label className="font-bold leading-6 text-white capitalize">
                              status
                            </label>
                            <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                              <div className="flex items-center gap-1">
                                <img src={"/active.svg"} alt="" />
                                <small className="text-[#059C48] text-[14px] leading-[20px] capitalize">
                                  active
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
