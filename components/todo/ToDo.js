import { Space, Input, Button, Modal } from 'antd';
import { useState, useEffect, Fragment } from 'react';
import ToDoItem from './ToDoItem';

export default function ToDo(props) {
    const { toDoList=[], addToDo, deleteToDo, updateToDo, completed } = props;

    const [value, setValue] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        console.log(value)
    }, [value]);

    return (
        <div style={{paddingLeft: 40, paddingRight: 40}}>
            <Input.Group compact style={{display: 'flex'}}>
                <Input 
                    style={{ backgroundColor: '#fff' }}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <Button onClick={() => addToDo(value)} type="primary">Agregar</Button>
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