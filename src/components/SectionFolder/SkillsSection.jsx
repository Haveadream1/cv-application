import Section from "../Section";
import Text from "../Text";

export default function SkillsSection({ formData }) {
    return (
        <Section
            sectionClass="skills-content"
            id="skills-heading"
            headingText="Skills"
            contentClass="content-skill-style"
        >
            <Text
                textClass="skill-content"
                textContent={formData.skills.skill}
            >
            </Text>
    
            {/* <Text
                textClass="skill-content"
                textContent={formData.skills.skill}
            >
    
            </Text>
            <Text
                textClass="skill-content"
                textContent={formData.skills.skill}
            >
            </Text> */}
        </Section>
    );
}