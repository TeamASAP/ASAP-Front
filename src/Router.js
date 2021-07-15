import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Conference from './pages/Conference';
import Event from './pages/Event';
import Budget from './pages/Budget';
import TimeTable from './pages/TimeTable';
import Etc from './pages/Etc';
import TakeOver from './pages/TakeOver';
import MyPage from './pages/MyPage';


const Router = () => {
    return (
        <BrowserRouter>
        <Route component={HomePage} path='/' exact/>
        <Route component={MainPage} path='/main'/>
        <Route component={LoginPage} path='/login'/>
        <Route component={RegisterPage} path='/register'/>
        <Route component={Conference} path='/conference'/>
        <Route component={Event} path='/event'/>
        <Route component={Budget} path='/budget'/>
        <Route component={TimeTable} path='/timetable'/>
        <Route component={Etc} path='/etc'/>
        <Route component={TakeOver} path='/takeover'/>
        <Route component={MyPage} path='/mypage'/>
        </BrowserRouter>
    );
};

export default Router;