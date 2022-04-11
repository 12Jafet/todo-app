import { useState } from 'react';
import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import 'antd/dist/antd.css';
import AuthContext from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
    const [userName, setUserName] = useState();

    return (
        <AuthContext.Provider value={{ userName, setUserName }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthContext.Provider>
    );
}

export default MyApp
