
interface CardProps {
    userId: string;
    name: string;
    issueDate: string;
  }

export const IssueCard: React.FC<CardProps> = ({ userId, name, issueDate }) => {
    return (
        <div className="w-full flex justify-between bg-[#101121] text-sm text-white flex-start p-2 rounded-md">
        <h3>{userId}</h3>
        <h3>{name}</h3>
        <h3>{issueDate}</h3>
        <h3  className="hover:underline cursor-pointer">view details</h3>
      </div>
    )
};