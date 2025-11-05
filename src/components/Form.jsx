export default function Form({ children }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <aside role="complementary" aria-label="Form to provide information for the curriculum vitae">
            <form id="form" action="post" onSubmit={handleSubmit}>
                {children}
                <button type="submit" className="button" aria-label="submit-form">Submit</button>
            </form>
        </aside>
    );
}
