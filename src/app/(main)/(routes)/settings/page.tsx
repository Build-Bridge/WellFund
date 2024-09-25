import React from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
const Settings = () => {
  return (
    <section className="w-full p-4 flex flex-col bg-[#0E0F1D] text-white">
      {/* General Settings */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">General Settings</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex items-center gap-2">
            <Button className="bg-blue-600 py-1 px-4 rounded">Upload</Button>
            <Button className="border border-red-600 py-1 px-2 text-red-600 rounded flex">
              {" "}
              <Trash2 className="text-red-600 font-thin" /> Remove
            </Button>
          </div>
          <div className="flex flex-wrap w-full justify-between">
            <div className="flex flex-col gap-4 w-full sm:w-[40%]">
              <h2> Business Name </h2>
              <input
                type="text"
                placeholder="Business Name"
                className="bg-transparent border border-gray-700 p-2 rounded text-white"
              />
              <div className="flex justify-between">
                <div>
                  <h2> Date Format </h2>
                  <select className="bg-transparent border border-gray-700 p-2 rounded text-white">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                  </select>
                </div>
                <div>
                  <h2> Time Format </h2>
                  <select className="bg-transparent border border-gray-700 p-2 rounded text-white">
                    <option>24hr</option>
                    <option>12hr</option>
                  </select>
                </div>
              </div>
              <h2> Time Zone </h2>
              <select className="bg-transparent border border-gray-700 p-2 rounded text-white">
                <option>West African Standard Time</option>
                <option>Central European Time</option>
              </select>
            </div>
            <div className="flex flex-col gap-4 w-full sm:w-1/2">
              <select className="bg-transparent border border-gray-700 p-2 rounded text-white">
                <option>English</option>
                <option>French</option>
              </select>
              <select className="bg-transparent border border-gray-700 p-2 rounded text-white">
                <option>Nigeria</option>
                <option>Ghana</option>
              </select>
              <textarea
                placeholder="Welcome Message"
                className="bg-transparent border border-gray-700 p-2 rounded text-white"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4 justify-between">
          <div className="flex gap-1">
          <Button className="bg-blue-600 py-2 px-6 rounded">
            Save Changes
          </Button>
          <Button className="bg-gray-600 py-2 px-6 rounded">Cancel</Button>

          </div>
              <Button variant='destructive' className="bg-red-600 py-1 px-4 rounded">
                Delete Account
              </Button>
        </div>
      </div>

      {/* Security Settings */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Security Settings</h2>
        <div className="flex flex-col gap-4">
          {/* Password */}
            Password
          <div className="flex justify-between items-center bg-transparent border border-gray-700 p-2 rounded">
            <input
              type="password"
              value="********"
              disabled
              className="bg-transparent text-white w-full"
            />
            <Button className="bg-blue-600 py-1 px-4 rounded">Edit</Button>
          </div>
          {/* Two-Factor Authentication */}
          Two-Factor Authentication.(2FA)
          <div className="flex justify-between items-center bg-transparent border border-gray-700 p-2 rounded">
            <select className="bg-transparent text-white w-full">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
            <Button className="bg-blue-600 py-1 px-4 rounded">Edit</Button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Notification Settings</h2>
        <div className="flex flex-col gap-4">
          {/* Email Notifications */}
          <div className="flex justify-between items-center bg-transparent border border-gray-700 p-2 rounded">
            <select className="bg-transparent text-white w-full">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
          {/* SMS Notifications */}
          <div className="flex justify-between items-center bg-transparent border border-gray-700 p-2 rounded">
            <select className="bg-transparent text-white w-full">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
