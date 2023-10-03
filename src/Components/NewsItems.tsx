export default function NewsItems({
  src,
  date,
  title,
  des,
}: {
  src: string;
  date: string;
  title: string;
  des: string;
}) {
  return (
    <div className="col-sm-12 col-md-12 col-lg-6">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <img
            className="rounded-2"
            src={src}
            alt=""
            width="70%"
            style={{ height: "300px " }}
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="d-flex justify-content-start align-items-center mt-2">
            <span className="material-icons"> calendar_month </span>
            <span className="pt-2 fw-bold">{date}</span>
          </div>
          <h1 className="fs-3 pt-3 fw-bold">{title}</h1>
          <p className="w-75">{des}</p>
        </div>
      </div>
    </div>
  );
}
