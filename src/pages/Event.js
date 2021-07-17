import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import PostList from '../components/posts/PostList';

const Event = () => {
    let title = "행사"
    return (
        <>
            <Header/>
            <PostList title = {title}/>
            <Footer/>
        </>
    );
};

export default Event;