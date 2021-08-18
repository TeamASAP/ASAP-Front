import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import UserInfo from '../components/common/UserInfo';
import SubBar from '../components/common/SubBar';


const MyPage = () => {
    //user 가져오기
    const user = 'manager';
    //const user = 'not';
    return (
        <>
            <Header/>
            <SubBar user={user}/>
            <UserInfo/>
            <Footer/>
        </>
    );
};

export default MyPage;