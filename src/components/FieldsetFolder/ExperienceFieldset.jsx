import Fieldset from "../Fieldset";
import Div from "../FieldsetDiv";

export default function ExperienceFieldset({ formData, onDataChange}) {
    const handleFieldsetChange = (fieldName, value) => {
        onDataChange("experience", fieldName, value);
    }

    return (
        <Fieldset
            ariaLabelledby="work-experience-legend"
            legendText="Work experience"
        >
            <Div 
                id="job-title"
                text="Job title"
                required={true}
                isTextAreaDisplay={false}
                name="jobTitle"
                placeholder="Front-end developer"
                ariaLabel="Job title input"
                formData={formData.experience.jobTitle}
                onDataChange={handleFieldsetChange}
            />
            <Div 
                id="company-name"
                text="Company name"
                required={true}
                isTextAreaDisplay={false}
                name="companyName"
                placeholder="KT company"
                ariaLabel="Job title input"
                formData={formData.experience.companyName}
                onDataChange={handleFieldsetChange}
            />
            <Div 
                id="start-date"
                text="Start date"
                required={true}
                isTextAreaDisplay={false}
                type="date"
                name="startDate"
                ariaLabel="Start date input"
                formData={formData.experience.startDate}
                onDataChange={handleFieldsetChange}
            />
            <Div 
                id="end-date"
                text="End date"
                required={false}
                isTextAreaDisplay={false}
                type="date"
                name="endDate"
                ariaLabel="End date input"
                formData={formData.experience.endDate}
                onDataChange={handleFieldsetChange}
            />
            <Div 
                id="job-description"
                text="Job description"
                required={true}
                isTextAreaDisplay={true}
                name="jobDescription"
                placeholder="Develop components and ..."
                ariaLabel="Job description"
                formData={formData.experience.jobDescription}
                onDataChange={handleFieldsetChange}
            />
        </Fieldset>
    );
}
