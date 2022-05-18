import { useState } from 'react';
import styles from './Task.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Task = ({ value, setValue }) => {

    const [checked, setChecked] = useState([]);

    const strikeThrough = (event) => {

        let checkedItems = [...checked];

        let taskChecked = Number(event.target.value);

        if (event.target.checked) {
            checkedItems = [...checked, taskChecked];
        }
        else {
            checkedItems.splice(checkedItems.indexOf(taskChecked), 1);
        }
        setChecked(checkedItems);
    };

    const checkedTask = (index) => {
        let txtStyle = checked.includes(index) ? styles.lineThrough : null;
        return txtStyle;
    };

    const deleteTask = (index) => {
        value.splice(index, 1);
        setValue([...value]);
    };

    const tasks = value.map((item, index) => {

        const date = new Date();

        const dueDate = new Date(`${item.dueDate}T23:59:59Z`);

        let message;

        let borderStyle = styles.notDueDate;

        if (date.getTime() > dueDate.getTime()) {
            message = "* Due Date is Passed";
            borderStyle = styles.dueDate;
        }

        return (

            <div key={index} className={`${styles.task} ${borderStyle} ${checkedTask(index)}`}>

                <Input
                    type="checkbox"
                    value={index}
                    changeHandler={strikeThrough}
                />

                <h3>{item.description}</h3>

                <p>Due Date: {item.dueDate}</p>

                <Button value="Delete" clickHandler={() => deleteTask(index)} />

                <code>{message}</code>

            </div>

        );

    });

    return tasks;

};

export default Task;