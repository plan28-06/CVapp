import '../styles/input.css'  

function Input({ field, type, value, func,caller}) {
    return (
        <div className="dropdownitem">
            <label htmlFor={field} >{field}</label>
            <input type={type} id={field} placeholder={value} onChange={func}/>
        </div>
    )
}

export {Input}
