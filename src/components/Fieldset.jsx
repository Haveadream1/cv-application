export default function Fieldset({ariaLabelledby, legendText, children}) {
    return (
        <fieldset className='form-fieldset' aria-labelledby={ariaLabelledby}>
            <legend id={ariaLabelledby}>{legendText}</legend>
            {children}
        </fieldset> 
    );
}
{/* Wrap content as {children} instead of controlling it */}

// Fieldset.defaultProps = {
//     ariaLabelledby: "legend",
// };
