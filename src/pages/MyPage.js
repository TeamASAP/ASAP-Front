import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
<<<<<<< HEAD
import UserInfo from '../components/common/UserInfo';

=======
import styled from 'styled-components';

const My = styled.div`
    width: 100%;
    height: 800px;
`;
>>>>>>> 286eba292a40a9d98689f32296a232a86d7dedc5

const MyPage = () => {
    return (
        <>
            <Header/>
<<<<<<< HEAD
            <UserInfo/>
=======
            <My>mypage</My>
>>>>>>> 286eba292a40a9d98689f32296a232a86d7dedc5
            <Footer/>
        </>
    );
};

export default MyPage;