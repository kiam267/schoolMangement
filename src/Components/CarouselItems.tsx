import classes from "./CarouselItems.module.css";

export default function CarouselItems({
  action = "",
  src,
  tittle,
  des,
}: {
  action?: string;
  src: string;
  tittle: string;
  des: string;
}) {
  return (
    <div className={`carousel-item ${action}`}>
      <img
        src={src}
        className="d-block w-100"
        alt="CarselItems"
        style={{ height: "500px", objectFit:'cover' }}
      />
      <div
        className={`carousel-caption d-none d-md-block ${classes.carouselTittle}`}
      >
        <div className={classes.carouselBg}>
          <h5 className="fs-4 fw-bold">{tittle}</h5>
          <p style={{ fontSize: "16px" }}>{des}</p>
        </div>
      </div>
    </div>
  );
}
