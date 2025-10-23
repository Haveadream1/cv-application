import Fieldset from "../Fieldset";
import Div from "../FieldsetDiv";

export default function EducationFieldset() {
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
            />
            <Div 
                id="degree"
                text="Degree"
                required={true}
                isTextAreaDisplay={false}
                name="degree"
                placeholder="Computer science bachelor"
                ariaLabel="Degree input"
            />
            <Div 
                id="graduation-date"
                text="Graduation date"
                required={false}
                isTextAreaDisplay={false}
                name="graduationDate"
                type="date"
                ariaLabel="Graduation date input"
            />
        </Fieldset>
    );
}