import { useState } from 'react';
import { Checkbox, Input } from 'antd';
import { EditOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'

import Button from '../common/Button'
import styles from '../../styles/ToDo.module.css'

function ToDoItem(props) {
    const { item, deleteToDo, updateToDo, completed } = props
    const [value, setValue] = useState(item.description);
    const [isUpdate, setIsUpdate] = useState(false);

    const handleUpdate = () => {
        updateToDo(item.id, { description: value })
        setIsUpdate(false);
    }

    const onChangeCheckbox = (e) => {
        completed(item.id, e.target.checked)
    }

    return (
        <div className={styles.itemContainer}>
            {
                !isUpdate
                    ? <div className={styles.centerVertical}>
                        <div className={styles.todoInfo}>
                            <Checkbox className={styles.checkbox} onChange={onChangeCheckbox} defaultChecked={item.status} />
                            <p className={`${styles.todoText} ${item.status ? styles.textLine : ''}`}>{item.description}</p>
                        </div>
                        <div className='btn-action-group'>
                            <Button className='btn btn-yellow' onClick={() => setIsUpdate(true)} icon={<EditOutlined />}></Button>
                            <Button className='btn btn-red' onClick={() => deleteToDo(item.id)} icon={<DeleteOutlined />}></Button>
                        </div>
                    </div>
                    : <Input.Group compact className={styles.centerVertical}>
                        <Input
                            className={styles.input}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                        <div className='btn-action-group'>
                            <Button className='btn btn-green' onClick={handleUpdate} icon={<CheckOutlined />}></Button>
                            <Button className='btn btn-red' onClick={() => setIsUpdate(false)} icon={<CloseOutlined />}></Button>
                        </div>
                    </Input.Group>
            }
        </div>
    )
}

export default ToDoItem;