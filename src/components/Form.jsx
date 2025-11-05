export default function Form({ children }) {
    return (
        <aside role="complementary" aria-label="Form to provide information for the curriculum vitae">
            <form id="form" action="post">
                {children}
                <button type="submit" aria-label="submit-form">Submit</button>
            </form>
        </aside>
    );
}
