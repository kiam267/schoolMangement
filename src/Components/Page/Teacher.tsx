import TeacherImage7 from "../../assets/img/AMINA KHATUN.jpg";
import TeacherImage6 from "../../assets/img/AMZAD HOSSAIN.jpg";
import TeacherImage10 from "../../assets/img/HANUFA KHATUN.jpg";
import TeacherImage4 from "../../assets/img/KUBAD ALI.jpg";
import TeacherImage5 from "../../assets/img/MONIRUL HAQU.jpg";
import TeacherImage9 from "../../assets/img/NOOR HOSSAIN.jpg";
import TeacherImage2 from "../../assets/img/SHOHIDUL ISLAM.jpg";
import TeacherImage8 from "../../assets/img/SHYED ALI.jpg";
import TeacherImage3 from "../../assets/img/aziz.jpg";
import TeacherImage1 from "../../assets/img/headTeacher.jpg";
import TeachersBodyImage from "../../assets/img/pexels-max-fischer-5212345.jpg";
import TeachersCrad from "../TeachersCrad";

export default function MediaCard() {
  return (
    <>
      <div>
        <img
          className="w-100"
          src={TeachersBodyImage}
          alt=""
          style={{ height: "400px", objectFit: "cover" }}
        />
      </div>
      <div className="container mt-5">
        <h1 className="text-center py-2 fw-bold ">HEAD TEACHERS : </h1>
        <div className="row justify-content-center ">
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage1}
            tittle="MD. ANWARUL HAQUE"
            des="Please discrive about you"
          />
        </div>
        <h1 className="text-center my-3 fw-bold">OTHERS TEACHERS : </h1>
        <div className="row justify-content-start mt-3 gy-4">
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage2}
            tittle="MD. ANWARUL HAQUE"
            des="Please discrive about you"
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage3}
            tittle="MD. ANWARUL HAQUE"
            des="Please discrive about you"
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage4}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage5}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage6}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage7}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage8}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage9}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
          <TeachersCrad
            className="col-sm-12 col-md-6 col-lg-4"
            teachersImage={TeacherImage10}
            tittle="MD. ANWARUL HAQUE"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, saepe."
          />
        </div>

        <h1 className="text-center py-4 fw-bold text-uppercase">
          office assistant :
        </h1>
        <h1>Comming Soon 🎉🎉</h1>

        <h1 className="text-center py-4 fw-bold "> OTHERS : </h1>
        <h1>Comming Soon 🎉🎉</h1>
      </div>
    </>
  );
}
