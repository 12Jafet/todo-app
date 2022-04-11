import { Fragment } from 'react';

import NavBar from './NavBar';

const Layout = props => {
    const { children } = props;
    
    return (
        <Fragment>
            <NavBar />
            <main className='layout'>{children}</main>
        </Fragment>
    )
}

export default Layout;