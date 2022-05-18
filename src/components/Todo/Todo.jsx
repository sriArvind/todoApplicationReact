import { useState } from 'react';
import styles from './Todo.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Task from '../Task/Task';

const Todo = () => {

    const [value, setValue] = useState({
        description: "",
        dueDate: ""
    });

    const [task, setTask] = useState([]);

    const getInputValue = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value });
    };

    const addTask = () => {
        if (value.description.trim() && value.dueDate) {
            setTask([...task, value]);
        }
        setValue({
            description: "",
            dueDate: ""
        });
    };

    return (

        <div className={styles.container}>

            <div className={styles.formWrap}>

                <Input
                    label="Task Description"
                    type="text"
                    name="description"
                    placeholder="Enter Your Task Here . . ."
                    value={value.description}
                    changeHandler={getInputValue}
                />

                <Input
                    label="Due Date"
                    type="date"
                    name="dueDate"
                    placeholder="Due Date"
                    value={value.dueDate}
                    changeHandler={getInputValue}
                />

                <Button value="Add Task" clickHandler={addTask} />

            </div>

            <Task value={task} setValue={setTask} />

        </div>
    );
};

export default Todo;