import Section from "../Section";
import Text from "../Text";

export default function ExperienceSection() {
    return (
        <Section
            sectionClass="work-experience-content"
            id="experience-heading"
            headingText="Experience"
        >
            <Text
                textClass="job-and-company-content"
                textContent="Front-end developer at KT company"
            >
            </Text>
    
            <Text
                textClass="start-and-end-date-content light"
                textContent="2025 - Present"
            >
            </Text>
    
            <Text
                textClass="job-description-content"
                textContent="In charge of building the visible, 
                interactive part of a website or application by using HTML, CSS, 
                and JavaScript"
            >
            </Text>
        </Section>
    );
}