import { Fragment, useState } from 'react';
import { Input } from 'antd';
import { EditOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons'

import Button from '../common/Button'

export default function ToDoItem(props) {
    const { item, deleteToDo, updateToDo, completed } = props
    const [value, setValue] = useState(item.description);
    const [isUpdate, setIsUpdate] = useState(false);

    const handleUpdate = () => {
        updateToDo(item.id, {description: value})
        setIsUpdate(false);
    }

    return (
        <div style={{ marginTop: 16, padding: 20, background: '#fff', borderRadius: 5 }}>
            {
                !isUpdate
                    ? <div style={{display: 'flex', alignItems: 'center'}}>
                        <p style={{ margin: 0, fontSize: '24px', textDecoration: item.status ? 'line-through' : 'none' }}>{item.description}</p>
                        <Button onClick={() => completed(item.id, !item.status)} icon={<CheckCircleOutlined/>}></Button>
                        <Button onClick={() => setIsUpdate(true)} icon={<EditOutlined/>}></Button>
                        <Button className='boton-rojo' onClick={() => deleteToDo(item.id)} icon={<DeleteOutlined/>}></Button>
                    </div>
                    : <Input.Group compact style={{display: 'flex', alignItems: 'center'}}>
                        <Input
                            style={{backgroundColor: '#fff', fontSize: '24px' }}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                        <Button onClick={handleUpdate} type="primary">Confirmar</Button>
                    </Input.Group>
            }
        </div>
    )
}