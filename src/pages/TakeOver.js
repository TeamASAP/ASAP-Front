import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import PostList from '../components/posts/PostList';


const TakeOver = ( {history} ) => {
    let title = "인수인계";
    const user = 'manager';
    //const user = 'not';
    if (user !== 'manager') {
        alert('권한이 없는 페이지입니다.');
        history.push('/main');
    }
    return (
        <>
            <Header/>
            <PostList title = {title}/>
            <Footer/>
        </>
    );
};

export default TakeOver;