import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import 'antd/dist/antd.css';
import AuthContext from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
    return (
        <AuthContext.Provider value={{
            isLogedIn: false
        }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthContext.Provider>
    );
}

export default MyApp
