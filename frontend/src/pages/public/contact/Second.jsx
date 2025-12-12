import useSettings from "../../../hooks/useSettings";
function Second() {
  const { data, isLoading, isError, error } = useSettings();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <div className="flex p-10 md-p-0 justify-start md:justify-center gap-[4.5em] flex-wrap mb-12">
      <section className="flex gap-2 ">
        <img src="phone.png" alt="phone" className="self-start" />
        <div>
          <p>رقم الهاتف</p>
          <p>{data.phone}</p>
        </div>
      </section>
      <section className="flex gap-2">
        <img src="email.png" alt="email" />
        <div>
          <p>البريد الاليكتروني</p>
          <p>{data.companyName}</p>
        </div>
      </section>
      <section className="flex gap-2">
        <img src="location.png" alt="address" />
        <div>
          <p>العنوان </p>
          <p>{data.address}</p>
        </div>
      </section>
      <section className="flex gap-2">
        <img src="time.png" alt="time" />
        <div>
          <p>ساعات العمل</p>
          <p>يوميا من الساعه 10الي الساعه 12</p>
        </div>
      </section>
    </div>
  );
}

export default Second;
