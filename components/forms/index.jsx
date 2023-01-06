import AwardsForm from "./awards";
import CertificatesForm from "./certificates";
import EducationForm from "./education";
import InterestsForm from "./interests";
import LanguageForm from "./language";
import LocationForm from "./location";
import ProfileForm from "./profile";
import ProjectsForm from "./projects";
import ReferencesForm from "./references";
import SkillsForm from "./skills";
import SocialForm from "./social";
import WorkExperienceForm from "./workExperience";
export default function CanvasForm({index}){
    const forms=[
        "",
        <ProfileForm/>,
        <LanguageForm/>,
        <SocialForm/>,
        <EducationForm/>,
        <WorkExperienceForm/>,
        <LocationForm/>,
        <SkillsForm/>,
        <CertificatesForm/>,
        <ProjectsForm/>,
        <AwardsForm/>,
        <ReferencesForm/>,
        <InterestsForm/>,
    ]
    return(
        <>
            <div>{forms[index]}</div>
        </>
    );
}