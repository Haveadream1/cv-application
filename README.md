# CV Maker

First web page with react, took time to learn and test

## Goal 

The goal was to provide a small application where we can create a CV with the help of the form

## Preview

Deployed with Netlify   
[CV Maker](https://690bb9a85d7ebef3dab7ab15--regal-sopapillas-510a5b.netlify.app/)

## Memo
Create a a form components
    * Personal details
    * Education
    * Experiences
Create a component for the CV preview
    * A4 format
    * result of the form

In source, src
* components (folder)
    * containing the jsx elements
* containers (folder)
    * containing all the stateful logic

* For each components use style module
    * AttentionGrabber.module.css
    * import styles from './styles/Home.module.css'
    * <div className={styles.div}>

## Steps
1. Write HTML / CSS 
2. Translate this into 'dumb' components
3. Create containers for each components
4. Add module css for each components
5. Integrate into app.js
6. Add state and interactivity -> 'smart' containers
7. Implement data if needed
8. Review and refactor

### Components, containers
* [Main handler]
    * App
* [Containers]
    * FormContainer
    * PreviewContainer
* [Components]
    * [FieldsetFolder]
        * EducationFieldset
        * ExperienceFieldset
        * PersonalInfosFieldset
        * SkillsFieldset
    * [SectionFolder]
        * EducationSection
        * ExperienceSection
        * PersonalInfosSection
        * SkillsSection
    * Main
    * Text
    * Form
    * Section
    * Fieldset
    * FieldsetDiv
        * Legend
        * div
        * label
        * input
        * small
        * textArea


### TODO:
* improve aside form
    * present it with button to show form
* improve CV preview
    * only display all inputs at first then redirect with a button to the cv preview
    * this new page will show the cv properly, no form on the side, only cv and a button to save to pdf and print
* add input verification
