import ArtsImage from "../assets/icon/dictionary.gif";
import ScienceImage from "../assets/icon/experiment.gif";
// import CommerceImage from "../assets/icon/line-bars.gif";
import ServiceImage from "./ServiceImage";
import ServiceItems from "./ServiceItems";

export default function Service() {
  return (
    <section className="container-xxl mt-5 pt-5 mb-3">
      <div className="row">
        <ServiceImage />
        <div className="col-md-12 col-lg-6">
          <div className="row py-3 px-3 gx-0 gy-3">
            <ServiceItems
              tittle="ARTS"
              des="sir, please give me some content about this topic "
              img={ArtsImage}
            />
            <ServiceItems
              tittle="SCIENCE"
              des="sir, please give me some content about this topic "
              img={ScienceImage}
            />
            {/* <ServiceItems
              tittle="COMMERCE"
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae et ipsam similique dolores aperiam sint beatae labore atque temporibus."
              img={CommerceImage}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
