import React from 'react'
import Main from '../components/common/Main';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function MainPage({history}) {
    const name = window.sessionStorage.getItem('name');
    if (!name) {
        history.push('/');
    }
    return (
        <>
            <Header />
            <Main name={name}/>
            <Footer />
        </>
    );
}

export default MainPage;