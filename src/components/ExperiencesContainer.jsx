import { useDispatch, useSelector } from "react-redux";
import ExperienceTile from "./ExperienceTile";
import MyExperienceModal from "./MyExperienceModal";
import { BsPlus } from "react-icons/bs";
import { useState } from "react";

const ExperiencesContainer = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const experiences = [
    {
      _id: "5d925e677360c41e0046d1f5", // server generated
      role: "CTO",
      company: "Strive School",
      startDate: "2019-06-16",
      endDate: "2019-06-16", // could be null
      description: "Doing stuff",
      area: "Berlin",
      username: "admin", // server generated
      createdAt: "2019-09-30T19:58:31.019Z", // server generated
      updatedAt: "2019-09-30T19:58:31.019Z", // server generated
      __v: 0, // server generated
      image:
        "https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188434?e=1684972800&v=beta&t=YUs_d7vC1ildfbWq1pVcQg9coz_7be4zzoPvUKyam4w", // server generated on upload
    },
  ];

  return (
    <section>
      <div className="d-flex align-items-center justify-content-between experience ">
        <h2 className="pt-0 px-0">Experience</h2>
        <div className="icon-hover">
          <BsPlus size="40" fill="rgba(0,0,0,0.6)" onClick={handleShow} />
        </div>
      </div>
      <MyExperienceModal show={show} handleClose={handleClose} />
      {experiences.length > 0 &&
        experiences.map((exp) => <ExperienceTile key={exp._id} exp={exp} />)}
    </section>
  );
};

export default ExperiencesContainer;
