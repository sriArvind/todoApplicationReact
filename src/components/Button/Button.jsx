import styles from './Button.module.css';

const Button = ({ clickHandler, value }) => {

    let btnStyle;
    if (value === "Add Task") btnStyle = styles.addButton;
    if (value === "Delete") btnStyle = styles.delButton;

    return (
        <button className={btnStyle} onClick={clickHandler}>{value}</button>
    );
};

export default Button;