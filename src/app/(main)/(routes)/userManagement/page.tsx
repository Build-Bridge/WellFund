import { UserRound } from "lucide-react";
import { UserCard } from "../../_components/user-card";

 const UserManagement = () => {

    // Its just temporary, I would remove it when we get the Api endpoint.
    const users = [
        { userId: "A1B2C3D4", name: "John D.", regDate: "2024-07-25 10:00 AM" },
        { userId: "X9T7Q3L3", name: "Emily F.", regDate: "2024-07-25 11:30 AM" },
        { userId: "M8N7R6J2", name: "Michael S.", regDate: "2024-07-25 1:45 PM" },
        { userId: "C1V6M3N9", name: "Sophie M.", regDate: "2024-07-25 3:00 PM" },
        { userId: "G4Q2L3P7", name: "David L.", regDate: "2024-07-25 4:15 PM" },
        { userId: "B5K7H1J3", name: "Olivia W.", regDate: "2024-07-25 5:30 PM" },
        { userId: "P3Q4S9K8", name: "Andrew K.", regDate: "2024-07-25 6:45 PM" },
        { userId: "T4Y2R8S7", name: "Isabella P.", regDate: "2024-07-25 8:00 PM" },
        { userId: "T4Y2R8S7", name: "Isabella P.", regDate: "2024-07-25 8:00 PM" },
        { userId: "T4Y2R8S7", name: "Isabella P.", regDate: "2024-07-25 8:00 PM" },
        { userId: "V2W1X7Y5", name: "Ethan B.", regDate: "2024-07-25 9:30 PM" }
      ];
      

    return (
        <div className="w-full p-4 flex flex-col bg-[#0E0F1D]">
            <div className="flex text-[#64748B]">
                <UserRound className="w-[18px] h-[18px]"/>
                User List
            </div>
            <div className="w-full flex flex-col">
                <div className="w-full flex justify-between bg-[#242A32] text-white rounded p-2 text-sm">
                    <h3>User ID</h3>
                    <h3>Name</h3>
                    <h3>Reg Date</h3>
                    <h3>Action Button</h3>
                </div>
                <div className="flex flex-col gap-4">
                     {users?.map((user) => (
                        <div key={user.userId}>
                            <UserCard {...user}/>
                        </div>
                     ))}
                </div>
            </div>
        </div>
    )
};

export default UserManagement;