export default function ServiceItems({
  tittle,
  des,
  img,
}: {
  tittle: string;
  des: string;
  img: string;
}) {
  return (
    <div className="col-sm-12 col-md-6">
      <div
        className="mx-2 rounded-2  p-2 px-3"
        style={{ border: "1px solid black" }}
      >
        <img src={img} alt="icon" style={{ width: "20%" }} />
        <h2 className="fs-3 fw-bold text-start" style={{ color: "#3C3950 " }}>
          {tittle}
        </h2>
        <p style={{ color: "#73777A" }}>{des}</p>
      </div>
    </div>
  );
}
