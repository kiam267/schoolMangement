import CarouselItemsImageOne from "../assets/img/SchoolGalary1.jpg";
import CarouselItemsImageThree from "../assets/img/SchoolGalary2.jpg";
import CarouselItemsImageTwo from "../assets/img/SchoolGalary4.jpg";
import CarouselItems from "./CarouselItems";
export default function Carousel() {
  return (
    // Carousel Section starts
    <section>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <CarouselItems
            action="active"
            src={CarouselItemsImageOne}
            tittle="WELLCOME TO OUR SCHOOL"
            des="কম বয়সে যতটা সম্ভব শিখুন, কারণ জীবন পরবর্তীকালে ব্যস্ত হয়ে পড়ে।"
          />
          <CarouselItems
            src={CarouselItemsImageTwo}
            tittle="BAUSHA R. N. HIGH SCHOOL"
            des="ধৈর্য্য হলো এমন এক শক্তি, যার মাধ্যমে জীবনের সব কঠিন বাধা কাটিয়ে ওঠা সম্ভব হয়"
          />
          <CarouselItems
            src={CarouselItemsImageThree}
            tittle="HAVE A NICE DAY"
            des="অন্যের ভুল থেকে শিখুন, কারণ জীবন এত বড় নয় যে আপনি নিজে সব ভুল করে শিক্ষা নিবেন।"
          />
        </div>
      </div>
    </section>
    // Carousel Section ends

    // Service Section Starts

    // Service Section Ends
  );
}
