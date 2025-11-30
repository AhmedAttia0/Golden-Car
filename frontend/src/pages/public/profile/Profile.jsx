import ProfileSidebar from "./ProfileSidebar";
import BookingsHistory from "./BookingsHistory";
export default function Profile() {
  return (
    <div className="flex justify-center md:justify-start gap-20 mt-10 px-4">
      <ProfileSidebar />

      {/* محتوى الصفحة */}
      <div className="flex-1 bg-white shadow-md rounded-xl p-6">
        <BookingsHistory />
      </div>
    </div>
  );
}
