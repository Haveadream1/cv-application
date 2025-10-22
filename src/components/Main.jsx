export default function Main({children}) {
    return (
        <main role="main">
            <h1>CV preview</h1>
            <section className="preview-header" aria-labelledby="preview-header-heading">
                <h2 id="preview-header-heading">Your name</h2>
                <img className="cv-preview-img" src="/8488695_3908540.jpg" loading="lazy" alt="CV preview of mockup" />
            </section>
            {children}
            <button type="button" className="download-cv-button">See your finished CV</button>
        </main>
    );
}