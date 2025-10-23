import Form from "../components/Form";
import PersonalInfosFieldset from "../components/FieldsetFolder/PersonalInfosFieldset";
import ExperienceFieldset from "../components/FieldsetFolder/ExperienceFieldset";
import EducationFieldset from "../components/FieldsetFolder/EducationFieldset";
import SkillsFieldset from "../components/FieldsetFolder/SkillsFieldset";

export default function FormContainer() {
    return (
        <Form>
            <PersonalInfosFieldset />
            <ExperienceFieldset />
            <EducationFieldset />
            <SkillsFieldset />
        </Form>
    );
}