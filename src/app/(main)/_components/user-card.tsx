'use client'

import { useRouter } from "next/navigation";

interface CardProps {
  userId: string;
  name: string;
  regDate: string;
}

export const UserCard: React.FC<CardProps> = ({ userId, name, regDate }) => {
    const router = useRouter();
    const onView = () => {
      router.push(`/userManagement/userProfile/${userId}`)
    }

  return (
    <div className="w-full flex justify-between bg-[#101121] text-sm text-white flex-start p-2 rounded-md">
      <h3>{userId}</h3>
      <h3>{name}</h3>
      <h3>{regDate}</h3>
      <h3 onClick={onView} className="hover:underline cursor-pointer">view profile</h3>
    </div>
  );
};
