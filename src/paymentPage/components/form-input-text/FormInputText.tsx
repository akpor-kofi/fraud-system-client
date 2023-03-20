type FormInputProp = {
    fieldName: string,
    fieldInfo: string
}

// no vertical center in expiry date

export const FormInputText = ({fieldName, fieldInfo}: FormInputProp): JSX.Element => {
    return (
        <div className="card-property-title">
            <strong>{fieldName}</strong>
            <span>{fieldInfo}</span>
        </div>
    )
}