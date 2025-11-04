import Section from "../Section";
import Text from "../Text";

export default function ExperienceSection({ formData }) {
    return (
        <Section
            sectionClass="work-experience-content"
            id="experience-heading"
            headingText="Experience"
        >
            <Text
                textClass="job-and-company-content"
                textContent={formData.experience.jobTitle}
            >
            </Text>
    
            <Text
                textClass="start-and-end-date-content light"
                textContent={formData.experience.startDate} // Handle concat
            >
            </Text>
    
            <Text
                textClass="job-description-content"
                textContent={formData.experience.jobDescription}
            >
            </Text>
        </Section>
    );
}