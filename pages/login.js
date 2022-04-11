import { useState, useContext } from 'react';
import { Input } from 'antd';

import Button from '../components/common/Button';
import AuthContext from '../context/AuthContext';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css'

function Login() {
    const [userNameInput, setUserNameInput] = useState();
    const { setUserName, userName } = useContext(AuthContext);
    const router  = useRouter();

    const handleLogIn = (event) => {
        event.preventDefault()
        if (userNameInput == '' || !userNameInput) {
            return;
        }

        localStorage.setItem('user', JSON.stringify({userName: userNameInput}));
        setUserName(userNameInput);
        router.push('/');
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.titleForm}>Iniciar sesión</h1>
                <form onSubmit={handleLogIn}>
                    <label className={styles.label}>Usuario:</label>
                    <Input value={userNameInput} onChange={e => setUserNameInput(e.target.value)} />
                    <div className={styles.btnContainer}>
                        <Button className='btn btn-green'>Ingresar</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;