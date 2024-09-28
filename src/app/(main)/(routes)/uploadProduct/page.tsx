import { Image, Upload } from "lucide-react";

const uploadProduct = () => {
    return (
        <section className="w-full h-full bg-[#0E0F1D] text-white flex flex-col p-3">
            <h2 className="text-lg mb-4">General Information</h2>
            
            <div className="w-full flex flex-col border border-[#242A32] p-6 rounded text-[#64748B] font-sans text-sm mx-auto gap-y-6 placeholder:text-sm placeholder-shown:text-sm">
                
                {/* Image upload */}
                <div className="flex items-center space-x-4">
                    <div className="bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center">
                    <Image className="text-[#242A32]"/>
                    </div>
                        <span className="text-sm">upload an image of the product</span>
                    <button className="bg-transparent border border-gray-800 text-sm p-1 rounded flex">
                        <Upload className="w-4 h-4 text-[#64748B]"/>
                        Upload
                    </button>
                </div>

                {/* Product Name & Price */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1">Product Name</label>
                        <input type="text" className="bg-transparent border border-gray-800 p-1 rounded w-full" placeholder="Give a product name" />
                    </div>
                    <div>
                        <label className="block mb-1">Price Tag</label>
                        <input type="text" className="bg-transparent border border-gray-800 p-1 rounded w-full" placeholder="Give the current price for this product" />
                    </div>
                </div>

                {/* Description & Stock */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1">Brief Description</label>
                        <input type="text" className="bg-transparent border border-gray-800 p-1 rounded w-full" placeholder="Give a brief description" />
                    </div>
                    <div>
                        <label className="block mb-1">In Stock</label>
                        <input type="text" className="bg-transparent border border-gray-800 p-1 rounded w-full" placeholder="24hr" />
                    </div>
                </div>

                {/* Category & Brand Name */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1">Category</label>
                        <select className="bg-transparent border border-gray-800 p-1 rounded w-full">
                            <option>Select a category</option>
                            {/* Add more categories as needed */}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1">Brand Name</label>
                        <input type="text" className="bg-transparent border border-gray-800 p-1 rounded w-full" placeholder="Name of vendor/brand" />
                    </div>
                </div>

                {/* Save and Cancel Buttons */}
                <div className="flex justify-start space-x-4">
                    <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500 text-white">
                        Save Info
                    </button>
                    <button className="bg-transparent border border-gray-800 px-4 py-2 rounded hover:bg-gray-600">
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    );
};

export default uploadProduct
