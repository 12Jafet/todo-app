import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, Fragment } from 'react';
// import styles from '../styles/Home.module.css'
import useApi from '../hooks/useApi';
import ToDo from '../components/todo/TODO';

export default function Home() {
    const [toDoList, setToDoList] = useState();

    useEffect(() => {
        getToDoList();
    }, []);

    const getToDoList = async () => {
        const { handleRequest: handleGetToDos } = useApi({
            url: 'todos',
        });

        const response = await handleGetToDos();
        setToDoList(response);
    }

    const addToDo = async (description) => {
        const { handleRequest: handleAddToDo} = useApi({
            url: 'todos',
            method: 'POST',
            data: {
                description: description,
                status: false
            }
        });

        const response = await handleAddToDo();
        console.log('equisde', response)
        getToDoList();
    }

    const deleteToDo = async (id) => {
        const { handleRequest: handleDeleteToDo} = useApi({
            url: `todos/${id}`,
            method: 'DELETE',
        });

        const response = await handleDeleteToDo();
        console.log('equisde', response)
        getToDoList();
    }

    const updateToDo = async (id, data) => {
        const { handleRequest: updateToDo} = useApi({
            url: `todos/${id}`,
            method: 'PUT',
            data: data
        });

        const response = await updateToDo();
        console.log('equisde', response)
        getToDoList();
        return true;
    }

    const completed = async (id, status) => {
        const { handleRequest: updateToDo} = useApi({
            url: `todos/${id}`,
            method: 'PUT',
            data: {
                status
            }
        });

        const response = await updateToDo();
        console.log('equisde', response)
        getToDoList();
        return true;
    }
    return (
        <div>
        {/* <div className={styles.container}> */}
            <h1>Bienvenido</h1>
            <ToDo 
                toDoList={toDoList}
                addToDo={addToDo}
                deleteToDo={deleteToDo}
                updateToDo={updateToDo}
                completed={completed}
            />
        </div>
    )
}
