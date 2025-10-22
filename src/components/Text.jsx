export default function Text({
    textClass,
    spanContent,
    textContent
}) {
    return (
        <p className={textClass}>
            {spanContent && <span className="bold">{spanContent}</span>}
            {textContent}
        </p>
    );
}