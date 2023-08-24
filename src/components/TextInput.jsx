import ProptTypes from "prop-types"

TextInput.propTypes = {
    id: ProptTypes.string,
    label: ProptTypes.string,
    value: ProptTypes.string,
    setValue: ProptTypes.func
}

export default function TextInput({id, label, value, setValue}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input 
            type="text"
            name={id}
            id={id} 
            value={value} 
            onChange={(ev) => setValue(ev.target.value)}
            />
      </div>
    )
}