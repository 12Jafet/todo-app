import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import AuthContext from '../../context/AuthContext';
import styles from '../../styles/NavBar.module.css';

const NavBar = props => {
    const [current, setCurrent] = useState('home');
    const { userName } = useContext(AuthContext)
    const router = useRouter();

    const handleClickMenu = e => {
        setCurrent(e.key);
    };

    const logOut = () => {
        localStorage.removeItem('user');
        router.push('/login');
    }

    return (
        router.pathname != '/login' &&
        <Menu onClick={handleClickMenu} selectedKeys={[current]} mode='horizontal' className={styles.menu} >
            <Menu.Item key='home' icon={<HomeOutlined />} onClick={() => router.push('/')}>
                Home
            </Menu.Item>
            <Menu.Item icon={<UserOutlined />} className={styles.user} onClick={logOut}>
                {`${userName} | Cerrar sesión`}
            </Menu.Item>
        </Menu>
    );
}

export default NavBar;