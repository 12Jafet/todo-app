import { Input } from 'antd';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons'

import ToDoItem from './ToDoItem';
import Button from '../common/Button';
import styles from '../../styles/ToDo.module.css'

const ToDo = props => {
    const { toDoList = [], addToDo, deleteToDo, updateToDo, completed } = props;
    const [value, setValue] = useState('');

    const handleAddToDo = () => {
        if (value == '') {
            return;
        }

        addToDo(value);
        setValue('');
    }

    return (
        <div>
            <Input.Group compact style={{ display: 'flex' }}>
                <Input
                    className={styles.input}
                    placeholder='Ingresa un ToDo'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' ? handleAddToDo() : null}
                />
                <Button className={styles.addButton} icon={<PlusOutlined />} onClick={handleAddToDo}></Button>
            </Input.Group>
            {
                toDoList.map(item => (
                    <ToDoItem
                        key={item.id}
                        item={item}
                        deleteToDo={deleteToDo}
                        updateToDo={updateToDo}
                        completed={completed}
                    />
                ))
            }
        </div>
    )
}

export default ToDo;