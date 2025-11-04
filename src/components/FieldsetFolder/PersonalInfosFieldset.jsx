import Fieldset from "../Fieldset";
import Div from "../FieldsetDiv";

export default function PersonalInfosFieldset({ formData, onDataChange }) {
    const handleFieldsetChange = (fieldName, value) => {
        onDataChange("personalInfo", fieldName, value);
    }

    return (
        <Fieldset
            ariaLabelledby="personal-information-legend"
            legendText="Personal Information"
        >
            <Div 
            id="full-name"
            text="Full Name"
            required={true}
            isTextAreaDisplay={false}
            name="fullName"
            placeholder="Y Seung"
            autoComplete="name" 
            ariaLabel="Name input"
            small="Write your full legal name as it appears on your ID or passport"
            formData={formData.personalInfo.fullName}
            onDataChange={handleFieldsetChange}
            />
            <Div 
            id="email"
            text="Email"
            required={true}
            isTextAreaDisplay={false}
            name="email"
            placeholder="YSeung@naver.com"
            autoComplete="email" 
            ariaLabel="Email input"
            formData={formData.personalInfo.email}
            onDataChange={handleFieldsetChange}
            />
            <Div 
            id="phone"
            text="Phone"
            required={true}
            isTextAreaDisplay={false}
            name="phone"
            pattern="[0-9]{11}"
            maxLength="11"
            placeholder="+82 XX XXXX YYYY"
            autoComplete="tel"
            ariaLabel="Phone input"
            formData={formData.personalInfo.phone}
            onDataChange={handleFieldsetChange}
            />
            <Div 
            id="address"
            text="Address"
            required={false}
            isTextAreaDisplay={false}
            name="address"
            placeholder="Seoul, Jongno-gu, Sajik-ro-3-gil 23"
            autoComplete="street-address" 
            ariaLabel="Address input"
            formData={formData.personalInfo.address}
            onDataChange={handleFieldsetChange}
            />
        </Fieldset>
    );
}

{/* No need for submit button, change on input*/}