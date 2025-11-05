import Fieldset from "../Fieldset";
import Div from "../FieldsetDiv";

export default function EducationFieldset({ formData, onDataChange }) {
    const handleFieldsetChange = (fieldName, value) => {
        onDataChange("education", fieldName, value);
    }

    return (
        <Fieldset
            ariaLabelledby="education-legend"
            legendText="Education"
        >
            <Div 
                id="institution"
                text="Institution"
                required={true}
                isTextAreaDisplay={false}
                name="institution"
                placeholder="Yeungnam University"
                ariaLabel="University input"
                formData={formData.education.institution}
                onDataChange={handleFieldsetChange}
            />
            <Div 
                id="degree"
                text="Degree"
                required={true}
                isTextAreaDisplay={false}
                name="degree"
                placeholder="Computer science bachelor"
                ariaLabel="Degree input"
                formData={formData.education.degree}
                onDataChange={handleFieldsetChange}
            />
            <Div 
                id="graduation-date"
                text="Graduation date"
                required={false}
                isTextAreaDisplay={false}
                name="graduationDate"
                type="month"
                ariaLabel="Graduation date input"
                formData={formData.education.graduationDate}
                onDataChange={handleFieldsetChange}
            />
        </Fieldset>
    );
}