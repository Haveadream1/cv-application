import { useState } from "react"
import FormContainer from './containers/FormContainer.jsx'
import PreviewContainer from './containers/PreviewContainer.jsx'

export default function App() {
    const [formData, setFormData] = useState({
        personalInfo : {
            fullName: "",
            email: "YSeung@naver.com",
            phone: "+82 XX XXXX YYYY",
            address: "Seoul, Jongno-gu, Sajik-ro-3-gil 23",
        },
        experience : { // Here handle the concat of strings
            jobTitle: "Front-end developer at KT company",
            companyName: "KT company",
            startDate: "2025 - Present",
            endDate: "Present",
            jobDescription: "In charge of building the visible, interactive part of a website or application by using HTML, CSS, and JavaScript"
        },
        education : {
            institution: "Yeungnam University",
            degree: "Computer science bachelor",
            graduationDate: "February 2022"
        },
        skills : {
            skill: "Eager to learn" // Make an array ?
        }
    });

    const handleDataChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev, // ...prev copy the current state for el unchanged
            [section]: {
                ...prev[section],
                [field]: value // access the value to change
            }
        }));
    }

    return (
        <>
            <FormContainer formData={formData} onDataChange={handleDataChange} />
            <PreviewContainer formData={formData} />
        </>
    );
}