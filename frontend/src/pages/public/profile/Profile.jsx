import ProfileSidebar from "./ProfileSidebar";
import BookingsHistory from "./BookingsHistory";
import ProfileSettings from "./ProfileSettings";
export default function Profile() {
  return (
    <>
      <BookingsHistory collapsed />
      <ProfileSettings />
    </>
  );
}
