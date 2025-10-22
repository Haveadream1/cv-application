export default function Section({
    children,
    sectionClass,
    id,
    headingText,
    contentClass = "content-style"
}) {
    return (
        <section className={sectionClass} aria-labelledby={id}>
            <h3 id={id} className="content-heading">{headingText}</h3>
            <div className={contentClass}>
                {children}
            </div>
        </section>
    );
}
// Depening on the section add the content
// We pass the default style contentClass as only one section have a different one