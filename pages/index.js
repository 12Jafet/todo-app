import { useEffect, useState, Fragment, useContext } from 'react';

import AuthContext from '../context/AuthContext';
import useApi from '../hooks/useApi';
import ToDo from '../components/todo/TODO';
import withAuth from '../hocs/withAuth';

function Home() {
    const [toDoList, setToDoList] = useState();
    const { userName } = useContext(AuthContext)

    useEffect(() => {
        getToDoList();
    }, []);

    const getToDoList = async () => {
        const { handleRequest: handleGetToDos } = useApi({
            url: 'todos',
        });

        const response = await handleGetToDos();
        const sortedResponse = response.reverse().sort((a, b) => {
            if (a.status > b.status) {
                return 1;
            }
            if (a.status < b.status) {
                return -1;
            }

              return 0;
        });
        setToDoList(sortedResponse);
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
        getToDoList();
    }

    const deleteToDo = async (id) => {
        const { handleRequest: handleDeleteToDo} = useApi({
            url: `todos/${id}`,
            method: 'DELETE',
        });

        const response = await handleDeleteToDo();
        getToDoList();
    }

    const updateToDo = async (id, data) => {
        const { handleRequest: updateToDo} = useApi({
            url: `todos/${id}`,
            method: 'PUT',
            data: data
        });

        const response = await updateToDo();
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
        getToDoList();
        return true;
    }

    return (
        <div>
            <h1>{`Bienvenido ${userName}`}</h1>
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

export default withAuth(Home)