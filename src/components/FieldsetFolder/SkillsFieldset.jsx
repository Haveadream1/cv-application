export default function  SkillsFieldset() {
    return (
        <Fieldset
            ariaLabelledby="skills-heading"
            legendText="Skills"
        >
            <Div 
                id="skill"
                text="Skill"
                required={false}
                isTextAreaDisplay={false}
                name="skill"
                placeholder="Teamwork"
                ariaLabel="Skill input"
            />
        </Fieldset>
    );
}