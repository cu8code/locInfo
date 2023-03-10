import { useContext, useState } from "react";
import { jsonContext } from "../../pages";
import CanvasButton from "../canvasInput/canvasButtons";
import FormCover from "../forms/formCover";
import FormInput from "../forms/formInput";

//icons start
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person"; //profile
import LocationCityIcon from "@mui/icons-material/LocationCity"; //location
import RedeemIcon from "@mui/icons-material/Redeem"; //certificate
import ComputerIcon from "@mui/icons-material/Computer"; //skills
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; //awards
import CoffeeIcon from "@mui/icons-material/Coffee"; //projects
import LanguageIcon from "@mui/icons-material/Language"; //language
import InterestsIcon from "@mui/icons-material/Interests"; //interests
import GroupsIcon from "@mui/icons-material/Groups"; //references
import TagIcon from "@mui/icons-material/Tag"; //social media
import { useRef } from "react";
//icons end

//forms start
import EducationForm from "../forms/education";
import ProfileForm from "../forms/profile";
import LocationForm from "../forms/location";
//forms end

const sectionButtons = [
  PersonIcon,
  LocationCityIcon,
  TagIcon,
  SchoolIcon,
  WorkIcon,
  ComputerIcon,
  LanguageIcon,
  RedeemIcon,
  CoffeeIcon,
  EmojiEventsIcon,
  GroupsIcon,
  InterestsIcon,
];

export default function Sidebar() {
  const profile = useRef(null);
  const location = useRef(null);
  const social = useRef(null);
  const school = useRef(null);
  const work = useRef(null);
  const skills = useRef(null);
  const language = useRef(null);
  const certificates = useRef(null);
  const projects = useRef(null);
  const awards = useRef(null);
  const references = useRef(null);
  const interests = useRef(null);
  const refArray = [
    profile,
    location,
    social,
    school,
    work,
    skills,
    language,
    certificates,
    projects,
    awards,
    references,
    interests,
  ];

  const [toggle, setToggle] = useState(false);
  const [currentForm, setForm] = useState(() => {});

  const scrollToView = (elem) => {
    elem.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <div className="bg-slate-800 w-[40%] min-w-[400px] flex">
        <div>
          {sectionButtons.map((data, i) => {
            return (
              <CanvasButton
                key={i}
                Icon={data}
                callBack={() => scrollToView(refArray[i].current)}
              />
            );
          })}
        </div>
        <div className="flex-1 overflow-auto scrollbar-none scroll-smooth">
          <div>
            <section ref={profile} className="h-[400px]" id="1">
              <ProfileForm />
            </section>
            <section ref={location} className="h-[400px]" id="2">
              <LocationForm />
            </section>
            <section ref={social} className="h-[400px]" id="3">
              social
            </section>
            <section
              ref={school}
              className="h-[400px]"
              id="3"
            >
              <button
                className="bg-white"
                onClick={() => {
                  setToggle(true);
                  setForm(<EducationForm type="school" toggle={setToggle} />);
                }}
              >
                Add School
              </button>
              <br/>
              <button
                className="bg-white"
                onClick={() => {
                  setToggle(true);
                  setForm(<EducationForm type="university" toggle={setToggle} />);
                }}
              >
                Add University
              </button>
            </section>
            <section ref={work} className="h-[400px]" id="3">
              work
            </section>
            <section ref={skills} className="h-[400px]" id="3">
              skills
            </section>
            <section ref={language} className="h-[400px]" id="3">
              language
            </section>
            <section ref={certificates} className="h-[400px]" id="3">
              certificates
            </section>
            <section ref={projects} className="h-[400px]" id="3">
              projects
            </section>
            <section ref={awards} className="h-[400px]" id="3">
              awards
            </section>
            <section ref={references} className="h-[400px]" id="3">
              references
            </section>
            <section ref={interests} className="h-[400px]" id="3">
              interests
            </section>
          </div>
        </div>
      </div>
      {toggle && (
        <FormCover setToggle={setToggle} FormComponent={currentForm} />
      )}
    </>
  );
}
