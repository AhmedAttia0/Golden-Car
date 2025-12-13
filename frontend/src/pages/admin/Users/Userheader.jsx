import CreateUserModal from "./Createusermodel";
export default function UserHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">إدارة المستخدمين</h1>
        <p className="text-gray-400">إدارة المستخدمين المسجلين وبياناتهم</p>
      </div>

      <CreateUserModal />
    </div>
  );
}
