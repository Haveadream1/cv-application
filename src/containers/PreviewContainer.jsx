import Main from "../components/Main";
import EducationSection from "../components/SectionFolder/EducationSection";
import ExperienceSection from "../components/SectionFolder/ExperienceSection";
import PersonalInfosSection from "../components/SectionFolder/PersonalInfosSection";
import SkillsSection from "../components/SectionFolder/SkillsSection";

import "../styles/PreviewContainer.css"

export default function PreviewContainer({ formData }) {
    return (
        <Main formData={formData}>
            <PersonalInfosSection formData={formData} />
            <ExperienceSection formData={formData} />
            <EducationSection formData={formData} />
            <SkillsSection formData={formData} />
        </Main>
    );
}
