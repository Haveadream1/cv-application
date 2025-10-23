import Section from "../Section";
import Text from "../Text";

export default function SkillsSection() {
    return (
        <Section
            sectionClass="skills-content"
            id="skills-heading"
            headingText="Skills"
            contentClass="content-skill-style"
        >
            <Text
                textClass="skill-content"
                textContent="Teamwork"
            >
            </Text>
    
            <Text
                textClass="skill-content"
                textContent="Eager to learn"
            >
    
            </Text>
            <Text
                textClass="skill-content"
                textContent="Easy to reach"
            >
            </Text>
        </Section>
    );
}