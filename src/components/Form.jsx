export default function Form({children}) {
    return (
        <aside role="complementary" aria-label="Form to provide information for the curriculum vitae">
            <form id="form" action="post" noValidate>
                {children}
            </form>
        </aside>
    );
}