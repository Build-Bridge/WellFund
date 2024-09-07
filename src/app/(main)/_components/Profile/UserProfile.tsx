import React from "react";

const UserProfile: React.FC = () => {
  return (
    <section className="p-5">
      <div className="flex items-center gap-3">
        <img src={"/avatar.svg"} alt="" />
        <div className="space-y-2">
          <h1 className="leading-[20px] text-[14px] text-white">
            Username: <span className="font-bold">animalia24</span>
          </h1>
          <p className="leading-[20px] text-[14px] text-white">
            User ID: <span className="font-bold">USR1001</span>
          </p>
          <div className="flex items-center gap-1">
            <img src={"/active.svg"} alt="" />
            <small className="text-[#059C48] text-[14px] leading-[20px] capitalize">
              active
            </small>
          </div>
        </div>
      </div>

      <div className="my-5 flex items-start justify-between gap-[200px]">
        <div className="w-full">
          <h2 className="font-bold leading-6 text-white bg-[#242A32] p-2 rounded-md capitalize">
            personal information
          </h2>

          <div>
            <div className="flex items-center justify-between gap-10">
              <div className="my-3 w-full">
                <label className="font-bold leading-6 text-white capitalize">
                  first name
                </label>
                <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                  john
                </div>
              </div>
              <div className="my-3 w-full">
                <label className="font-bold leading-6 text-white capitalize">
                  last name
                </label>
                <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                  david
                </div>
              </div>
            </div>
            <div className="flex items-center justify-betweenb gap-10">
              <div className="my-3 w-full">
                <label className="font-bold leading-6 text-white capitalize">
                  email address
                </label>
                <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                  john@micheal42.com
                </div>
              </div>
              <div className="my-3 w-full">
                <label className="font-bold leading-6 text-white capitalize">
                  phone number
                </label>
                <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                  +234 914 24456
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-10">
              <div className="my-3 w-full">
                <label className="font-bold leading-6 text-white capitalize">
                  date of birth
                </label>
                <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                  31 / 01 / 2025
                </div>
              </div>
              <div className="my-3 w-full">
                <label className="font-bold leading-6 text-white capitalize">
                  gender
                </label>
                <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                  male
                </div>
              </div>
            </div>
            <div className="my-3 w-full">
              <label className="font-bold leading-6 text-white capitalize">
                address
              </label>
              <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                3rd Floor Oakland Centre No. 48 Aguiyi Ironsi Street, Maitama
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="font-bold leading-6 text-white bg-[#242A32] p-2 rounded-md capitalize">
            Account Details
          </h2>

          <div>
            <div className="flex items-center justify-between gap-10">
              <div className="my-3 w-full">
                <label className="font-bold leading-6 text-white capitalize">
                  Registration Date
                </label>
                <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                  2024-07-25 10:00 AM
                </div>
              </div>
              <div className="my-3 w-full">
                <label className="font-bold leading-6 text-white capitalize">
                  Last Login
                </label>
                <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                  2024-07-25 10:00 PM
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-10">
              <div className="my-3 w-full">
                <label className="font-bold leading-6 text-white capitalize">
                  role
                </label>
                <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                  user
                </div>
              </div>
              <div className="my-3 w-full">
                <label className="font-bold leading-6 text-white capitalize">
                  permissions
                </label>
                <div className="mt-1 block w-full px-3 py-2 border border-[#242A32] rounded-md capitalize text-white leading-[20px] text-[14px]">
                  loan
                </div>
              </div>
            </div>

            <div className="my-3 w-full">
              <label className="font-bold leading-6 text-white capitalize">
                Two-Factor Authentication (2FA)
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
    </section>
  );
};

export default UserProfile;
