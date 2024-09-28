import { IssueCard } from "../../_components/issue-card";

const supportFeedback = () => {

    const issues = [
        { userId: "A1B2C3D4", name: "John D.", issueDate: "2024-07-25 10:00 AM" },
        { userId: "X9T7Q3L3", name: "Emily F.", issueDate: "2024-07-25 11:30 AM" },
        { userId: "M8N7R6J2", name: "Michael S.", issueDate: "2024-07-25 1:45 PM" },
        { userId: "C1V6M3N9", name: "Sophie M.", issueDate: "2024-07-25 3:00 PM" },
        { userId: "G4Q2L3P7", name: "David L.", issueDate: "2024-07-25 4:15 PM" },
        { userId: "B5K7H1J3", name: "Olivia W.", issueDate: "2024-07-25 5:30 PM" },
        { userId: "P3Q4S9K8", name: "Andrew K.", issueDate: "2024-07-25 6:45 PM" },
        { userId: "T4Y2R8S7", name: "Isabella P.", issueDate: "2024-07-25 8:00 PM" },
        { userId: "T4Y2R8S7", name: "Isabella P.", issueDate: "2024-07-25 8:00 PM" },
        { userId: "T4Y2R8S7", name: "Isabella P.", issueDate: "2024-07-25 8:00 PM" },
        { userId: "V2W1X7Y5", name: "Ethan B.", issueDate: "2024-07-25 9:30 PM" }
      ];

    return (
        <section className="w-full bg-[#0E0F1D] text-white flex flex-col p-4 gap-y-4">
            <h2 className="text-lg mb-4 font-sans font-semibold">Feedback & Support</h2>
            <div className="flex w-full justify-between">
                <img src="/feedback1.svg" />
                <img src="/feedback2.svg" />
            </div>
            <div className="w-full flex flex-col">
                <div className="w-full flex justify-between bg-[#242A32] text-white rounded p-2 text-sm">
                    <h3>User ID</h3>
                    <h3>Name</h3>
                    <h3>Issue Date</h3>
                    <h3>Action Button</h3>
                </div>
                <div className="flex flex-col gap-4">
                     {issues?.map((issue) => (
                        <div key={issue.userId}>
                            <IssueCard {...issue}/>
                        </div>
                     ))}
                </div>
            </div>
        </section>
    )
}
export default supportFeedback