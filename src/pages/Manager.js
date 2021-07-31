import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AboutMembers from '../components/common/AboutMembers';

const Manager = ( { history } ) => {
    let title = "관리자 페이지";
    //user 관리자인지 확인
    const user = 'manager';
    //const user = 'not';
    if (user !== 'manager') {
        alert('권한이 없는 페이지입니다.');
        history.push('/main');
    }
    return (
        <>
            <Header/>
            <AboutMembers title={title}/>
            <Footer/>
        </>
    );
};

export default Manager;