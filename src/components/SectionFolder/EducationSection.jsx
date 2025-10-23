import Section from "../Section";
import Text from "../Text";

export default function EducationSection() {
    return (
        <Section
            sectionClass="education-content"
            id="education-heading"
            headingText="Education"
        >
            <Text
                textClass="degree-and-institution-content"
                textContent="Computer science bachelor, Yeungnam University"
            >
            </Text>
    
            <Text
                textClass="graduation-date-content light"
                textContent="February 2022"
            >
            </Text>
        </Section>
    );
}