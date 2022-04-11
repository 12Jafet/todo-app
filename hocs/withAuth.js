import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoadingOutlined } from '@ant-design/icons';

import AuthContext from '../context/AuthContext';

function withAuth(PageComponent) {
    const WithAuthComponent = () => {
        const [userName, setUserName] = useState();
        const { setUserName: setUserNameCtx } = useContext(AuthContext);
        const router = useRouter();

        useEffect(() => {
            const user = JSON.parse(localStorage.getItem('user'));
            setUserName(user && user.userName);
            setUserNameCtx(user && user.userName);
        }, []);

        useEffect(() => {
            if (userName === null) {
                router.push('/login')
            }
        }, [userName]);

        return !userName && router.pathname != '/login' ? <LoadingOutlined /> : <PageComponent />
    }

    return WithAuthComponent;
};

export default withAuth