export default function Div({
    id,
    text,
    required,
    isTextAreaDisplay,
    type = "text",
    name,
    pattern,
    maxLength,
    placeholder,
    autoComplete,
    ariaLabel,
    small,
    onDataChange
}) {
    const handleValueChange = (e) => {
        onDataChange(name, e.target.value);
    }

    return (
        <div>
            <label htmlFor={id}>
                {text}
                {required && <span className="required">*</span>}
            </label>
            {isTextAreaDisplay ? ( 
                <textarea
                    name={name}
                    id={id}
                    placeholder={placeholder || undefined}
                    aria-label={ariaLabel}
                    required={required || undefined}
                    onChange={handleValueChange}
                ></textarea>
            ) : (
                <input 
                    type={type}
                    name={name}
                    id={id}
                    pattern={pattern || undefined}
                    maxLength={maxLength || undefined}
                    placeholder={placeholder || undefined}
                    autoComplete={autoComplete || undefined}
                    aria-label={ariaLabel}
                    required={required || undefined}
                    onChange={handleValueChange}
                />
            )}
            {small && <small>{small}</small>}
        </div>
    )
}
// onFocus={(e) => e.target.type = 'date'} for date placeholder
