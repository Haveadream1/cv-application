import Fieldset from "../Fieldset";
import Div from "../FieldsetDiv";

export default function  SkillsFieldset({ formData, onDataChange }) {
    const handleFieldsetChange = (fieldName, value) => {
        onDataChange("skills", fieldName, value)
    }

    return (
        <Fieldset
            ariaLabelledby="skills-heading"
            legendText="Skills"
        >
            <Div 
                id="skill"
                text="Skill"
                required={false}
                isTextAreaDisplay={false}
                name="skill"
                placeholder="Teamwork"
                ariaLabel="Skill input"
                formData={formData.skills.skill}
                onDataChange={handleFieldsetChange}
            />
        </Fieldset>
    );
}