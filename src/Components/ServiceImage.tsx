import serviceImage from "../assets/img/service.jpg";

export default function ServiceImage() {
  return (
    <div className="col-md-12 col-lg-6">
      <img
        className="w-100 rounded-2"
        src={serviceImage}
        alt="student"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
