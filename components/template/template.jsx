import Education from "./sections/education";
import Profile from "./sections/profile";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import { useJsonContext } from "../../context/jsonContext";
const Empty = () => {
  return <></>;
};
const falseData = {
  profile: {
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    name: "Dani Schwaiger",
    title: "web Developer",
    number: "123-456-7890",
    email: "danidev@gmail.com",
    location: "123 anywhere",
    website: "danidev.com",
    desription:
      "I am a qualified and professional web developer with five years of expirience in database administration and web design.",
  },
  social: [
    {
      type: "instagram",
      name: "dani_dev",
    },
    {
      type: "github",
      name: "dani_dev",
    },
  ],
  education: {
    school: [
      {
        type: "secondary school",
        name: "Really great high school",
        yearStart: 2002,
        yearEnd: 2014,
      },
    ],
    university: [
      {
        type: "bachelor of technology",
        name: "Really great univesity",
        yearStart: 2014,
        yearEnd: 2018,
      },
    ],
  },
  workExperience: [
    {
      type: "Apllications Developer",
      name: "Really great company 1",
      yearStart: 2018,
      yearEnd: 2019,
      description: [
        "database administration and web design",
        "build the logivc fr straming ad-services paltform that scaled",
        "educational instructions and online classroom management",
      ],
    },
    {
      type: "Web content manager",
      name: "Really great company 2",
      yearStart: 2019,
      yearEnd: 2020,
      description: [
        "build the logivc fr straming ad-services paltform that scaled",
        "database administration and web design",
        "educational instructions and online classroom management",
      ],
    },
    {
      type: "Analysis content",
      name: "Really great company 3",
      yearStart: 2020,
      yearEnd: 2021,
      description: [
        "educational instructions and online classroom management",
        "build the logivc fr straming ad-services paltform that scaled",
        "database administration and web design",
      ],
    },
  ],
  skills: [
    "web design",
    "design thinking",
    "wireframe creation",
    "frontend coding",
    "problem sloving",
    "computer literacy",
    "project management tools",
    "strong communications",
  ],
};
const Demo = () => {
  return (
    <>
      <main
        style={{ gridTemplateRows: "24% 20% 30% auto" }}
        className="grid grid-cols-2 h-full text-black p-2 pt-0"
      >
        <div className="col-span-2">
          <div className="flex mt-2 bg-slate-100 w-full h-[70%]">
            <div className="flex-1 ml-3">
              <div className="text-[22px]">{falseData.profile.name}</div>
              <div className="text-[10px]">{falseData.profile.title}</div>
            </div>
            <div className="absolute top-[35px] right-2 w-[55px] h-[55px] overflow-hidden rounded-[50%]">
              <img className="w-full" src={falseData.profile.img} />
            </div>
          </div>
        </div>
        <div className="border-r border-slate-300">
          <div className="flex flex-col text-[6px] mt-1 ml-1">
            <div className="">
              <PhoneIcon fontSize="8px" className="mr-1" />
              {falseData.profile.number}
            </div>
            <div className="mt-1">
              <EmailIcon fontSize="8px" className="mr-1" />
              {falseData.profile.email}
            </div>
            <div className="mt-1">
              <LocationOnIcon fontSize="8px" className="mr-1" />
              {falseData.profile.location}
            </div>
            <div className="mt-1">
              <LanguageIcon fontSize="8px" className="mr-1" />
              {falseData.profile.website}
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="h-full flex flex-col pl-1 pr-1">
            <div className="text-[12px] flex-[0.5] font-medium text-slate-700">
              PROFILE
            </div>
            <div className="text-[6px] flex-1">
              {falseData.profile.desription}
            </div>
          </div>
        </div>
        <div className="border-r border-t border-slate-300 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="text-[12px] flex-[0.25] font-medium text-slate-700">
              SKILLS
            </div>
            <div>
              <ul className="list-disc text-[6px] ml-4">
                {falseData.skills.map((data, i) => {
                  return <li key={i}>{data}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-r border-t border-slate-300">
          <div className="h-full flex flex-col">
            <div className="text-[12px] flex-[0.25] font-medium text-slate-700">
              EDUCATION
            </div>
            <div className="text-[6px] flex flex-col content-evenly flex-1">
              {falseData.education.school.map((data, i) => {
                return (
                  <div key={i}>
                    <div className="text-[8px] font-medium">{data.type}</div>
                    <div>{data.name}</div>
                    <div>
                      {data.yearStart}-{data.yearEnd}
                    </div>
                  </div>
                );
              })}
              {falseData.education.university.map((data, i) => {
                return (
                  <div key={i}>
                    <div className="text-[8px] font-medium">{data.type}</div>
                    <div>{data.name}</div>
                    <div>
                      {data.yearStart}-{data.yearEnd}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row-span-2 row-start-3 col-start-2 border-t border-slate-300">
          <div className="h-full flex flex-col pl-1">
            <div className="text-[12px] flex-[0.25] font-medium text-slate-700">
              EXPERIENCE
            </div>
            <div className="text-[6px]">
              {falseData.workExperience.map((data, i) => {
                return (
                  <div key={i}>
                    <div className="font-medium text-[8px]">{data.type}</div>
                    <div>{data.name}</div>
                    <div>
                      {data.yearStart}-{data.yearEnd}
                    </div>
                    <ul className="text-[4.13px] list-disc ml-3">
                      {data.description.map((des, i) => {
                        return <li key={i}>{des}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
const One = ({ json }) => {
  return (
    <>
      <Profile json={json.profile} />
      <div className="bg-red-400">
        <Education education={json["education"]} />
      </div>
    </>
  );
};
const Two = ({ json }) => {
  return (
    <>
      <Profile json={json.profile} />
      <div className="bg-yellow-200">
        <Education education={json["education"]} />
      </div>
    </>
  );
};
export default function Templates({ num }) {
  const [json, setData] = useJsonContext();
  const Temp = [<Empty key={1} />, <One key={2} json={json} />, <Two key={3} json={json} />];
  // return <>{Temp[num]}</>;
  return (
    <>
      <Demo />
    </>
  );
}
