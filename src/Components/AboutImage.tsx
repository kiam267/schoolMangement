import Image from "../assets/img/about.jpg";
export default function AboutImage() {
  return (
    <div className="col-lg-12">
      <img
        src={Image}
        alt="About"
        style={{ objectFit: "contain", width: "100%" }}
      />
    </div>
  );
}
