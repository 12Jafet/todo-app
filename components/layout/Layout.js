import { Fragment } from 'react';
import NavBar from './NavBar';

function Layout(props) {
    return (
        <Fragment>
            <NavBar />
            <main className='layout'>{props.children}</main>
        </Fragment>
    )
}

export default Layout;