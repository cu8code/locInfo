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
export default function CanvasForm({ index }) {
  const forms = [
    "",
    <ProfileForm key={0} />,
    <LanguageForm key={1} />,
    <SocialForm key={2} />,
    <EducationForm key={3} />,
    <WorkExperienceForm key={4} />,
    <LocationForm key={5} />,
    <SkillsForm key={6} />,
    <CertificatesForm key={7} />,
    <ProjectsForm key={8} />,
    <AwardsForm key={9} />,
    <ReferencesForm key={10} />,
    <InterestsForm key={11} />,
  ];
  return (
    <>
      <div>{forms[index]}</div>
    </>
  );
}
