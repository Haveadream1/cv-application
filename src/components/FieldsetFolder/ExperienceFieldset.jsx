export default function ExperienceFieldset() {
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
            />
            <Div 
                id="company-name"
                text="Company name"
                required={true}
                isTextAreaDisplay={false}
                name="companyName"
                placeholder="KT company"
                ariaLabel="Job title input"
            />
            <Div 
                id="start-date"
                text="Start date"
                required={true}
                isTextAreaDisplay={false}
                type="date"
                name="startDate"
                ariaLabel="Start date input"
            />
            <Div 
                id="end-date"
                text="End date"
                required={false}
                isTextAreaDisplay={false}
                type="date"
                name="endDate"
                ariaLabel="End date input"
            />
            <Div 
                id="job-description"
                text="Job description"
                required={true}
                isTextAreaDisplay={true}
                name="jobDescription"
                placeholder="Develop components and ..."
                ariaLabel="Job description"
            />
        </Fieldset>
    );
}
