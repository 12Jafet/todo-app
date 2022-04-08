import { useState, useContext } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined  } from '@ant-design/icons';
import AuthContext from '../../context/AuthContext';

export default function NavBar() {
    const [current, setCurrent] = useState('home');
    const context = useContext(AuthContext);

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{backgroundColor: '#031926'}} color='#fff'>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            {
                context.isLogedIn &&
                <Menu.Item key="app" icon={<UserOutlined />}>
                    Cerrar sesión
                </Menu.Item>
            }
        </Menu>
    );
}