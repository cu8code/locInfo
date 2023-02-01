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
 function CanvasForm({index}){
    const forms=[
        <ProfileForm key={1}/>,
        <LanguageForm key={2}/>,
        <SocialForm key={3}/>,
        <EducationForm key={4}/>,
        <WorkExperienceForm key={5} />,
        <LocationForm key={6} />,
        <SkillsForm key={7} />,
        <CertificatesForm key={8} />,
        <ProjectsForm key={9} />,
        <AwardsForm key={10} />,
        <ReferencesForm key={11} />,
        <InterestsForm key={12} />,
    ]
    return(
        <>
            <div>{forms[index]}</div>
        </>
    );
}
