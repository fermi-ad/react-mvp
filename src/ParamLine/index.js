export const ParamLine = ({data, drf}) => {
    return (
        <pre>{drf}  Outdoor temperature    {data.toFixed(2)} F</pre>
    )
}