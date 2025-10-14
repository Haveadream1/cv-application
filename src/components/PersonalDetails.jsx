export default function PersonalDetailsForm() {
    <>
        <form id="personal-details-form" className="valid" noValidate>
            <fieldset className="personal-details-fieldset">
                <legend>Personal Informations</legend>

                <label for="name">Name *</label>
                <input id="name" type="text" placeholder="Yseung" required/>

                <label for="email">Email *</label>
                <input id="email" type="email" placeholder="Yseung@naver.com" required/>

                {/* TODO: add Regex */}
                <label for="phone-number">Email *</label>
                <input id="phone-number" type="number" placeholder="Yseung@naver.com" required/>
            </fieldset>
        </form>
    </>
}
{/* No need for submit button, change on input*/}