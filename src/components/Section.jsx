export default function Section({
    children,
    sectionClass,
    id,
    headingText
}) {
    return (
        <section className={sectionClass} aria-labelledby={id}>
            <h3 id={id} className="content-heading">{headingText}</h3>
            {children}
        </section>
    );
}
// Depening on the section add the content