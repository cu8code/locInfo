import EducationForm from "../../forms/education";
import WorkExperienceForm from "../../forms/workExperience";
export default function CanvasForm({index}){
    const forms=[
        "",
        <EducationForm/>,
        <WorkExperienceForm/>
    ]
    return(
        <>
            <div>{forms[index]}</div>
        </>
    );
}