import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Loading from "../components/common/Loading";
import AuthContext from '../context/AuthContext';

function withAuth(PageComponent) {
    const WithAuthComponent = () => {
        const { userName, setUserName } = useContext(AuthContext);
        const router = useRouter();

        useEffect(() => {
            const user = JSON.parse(localStorage.getItem('user'));
            setUserName(user && user.userName);
        }, []);

        useEffect(() => {
            if (userName === null) {
                router.push('/login')
            }
        }, [userName]);

        return !userName && router.pathname != '/login' ? <Loading/> : <PageComponent />
    }

    return WithAuthComponent;
};

export default withAuth