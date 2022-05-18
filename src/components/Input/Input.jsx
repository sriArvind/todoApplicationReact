const Input = ({ label, type, name, placeholder, value, changeHandler }) => {

    return (
        <>
            <label>{label}</label>

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
            />
        </>
    );
};

export default Input;