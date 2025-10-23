import Section from "../Section";
import Text from "../Text";

export default function PersonalInfosSection() {
    return (
        <Section
            sectionClass="personal-information-content"
            id="contact-heading"
            headingText="Contact"
        >
            <Text
                textClass="email-content"
                spanContent="Email:"
                textContent="YSeung@naver.com"
            >
            </Text>
    
            <Text
                textClass="phone-content"
                spanContent="Phone:"
                textContent="+82 XX XXXX YYYY"
            >
            </Text>
    
            <Text
                textClass="address-content"
                spanContent="Address:"
                textContent="Seoul, Jongno-gu, Sajik-ro-3-gil 23"
            >
            </Text>
        </Section>
    );
}