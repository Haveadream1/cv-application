import Form from "../components/Form";
import PersonalInfosFieldset from "../components/FieldsetFolder/PersonalInfosFieldset";
import ExperienceFieldset from "../components/FieldsetFolder/ExperienceFieldset";
import EducationFieldset from "../components/FieldsetFolder/EducationFieldset";
import SkillsFieldset from "../components/FieldsetFolder/SkillsFieldset";

import "../styles/FormContainer.css"

export default function FormContainer({ formData, onDataChange }) {
    return (
        <Form>
            <PersonalInfosFieldset formData={formData} onDataChange={onDataChange} />
            <ExperienceFieldset formData={formData} onDataChange={onDataChange} />
            <EducationFieldset formData={formData} onDataChange={onDataChange} />
            <SkillsFieldset formData={formData} onDataChange={onDataChange} />
        </Form>
    );
}