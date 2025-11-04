import Section from "../Section";
import Text from "../Text";

export default function EducationSection({ formData }) {
    return (
        <Section
            sectionClass="education-content"
            id="education-heading"
            headingText="Education"
        >
            <Text
                textClass="degree-and-institution-content"
                textContent={`${formData.education.degree}, ${formData.education.institution}`}
            >
            </Text>
    
            <Text
                textClass="graduation-date-content light"
                textContent={formData.education.graduationDate}
            >
            </Text>
        </Section>
    );
}