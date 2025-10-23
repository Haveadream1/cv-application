import Main from "../components/Main";
import EducationSection from "../components/SectionFolder/EducationSection";
import ExperienceSection from "../components/SectionFolder/ExperienceSection";
import PersonalInfosSection from "../components/SectionFolder/PersonalInfosSection";
import SkillsSection from "../components/SectionFolder/SkillsSection";

export default function PreviewContainer() {
    return (
        <Main>
            <PersonalInfosSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
        </Main>
    );
}