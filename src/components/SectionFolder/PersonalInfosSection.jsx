import Section from "../Section";
import Text from "../Text";

export default function PersonalInfosSection({ formData }) {
    return (
        <Section
            sectionClass="personal-information-content"
            id="contact-heading"
            headingText="Contact"
        >
            <Text
                textClass="email-content"
                spanContent="Email:"
                textContent={formData.personalInfo.email}
            >
            </Text>
    
            <Text
                textClass="phone-content"
                spanContent="Phone:"
                textContent={formData.personalInfo.phone}
            >
            </Text>
    
            <Text
                textClass="address-content"
                spanContent="Address:"
                textContent={formData.personalInfo.address}
            >
            </Text>
        </Section>
    );
}
