import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Responsive from './Responsive';

const Footer = () => {
    return (
        <>
        <div className="footer">
            <Responsive>
              <div className="about-company">
                <h2>SMSW</h2>
              </div>
              <div className="links">
                <h4>Quick Links</h4>
                  <ul>
                    <li><Link to="/conference">회의록</Link></li>
                    <li><Link to="/event">행사</Link></li>
                    <li><Link to="/budget">예산</Link></li>
                    <li><Link to="/timetable">부원시간표</Link></li>
                    <li><Link to="/etc">기타</Link></li>
                    <li><Link to="/takeover">인수인계</Link></li>
                    <li><Link to="/mypage">마이페이지</Link></li>
                  </ul>
              </div>
              <div className="location">
                <h4>Contact Us!</h4>
                <p>서울시 용산구 청파로 47길 100 숙명여자대학교</p>
                <p>(02) 123-4567</p>
                <p>asap@gmail.com</p>
              </div>
              <div className="copyright">
                  <h4>Developers</h4>
                  <p>
                      <span className="developers" onClick={() => window.open('https://github.com/jokj624', '_blank')}>채정아</span> 
                      <span className="developers" onClick={() => window.open('https://github.com/coolkim99', '_blank')}>김시원</span>
                      <span className="developers" onClick={() => window.open('https://github.com/EunHye146', '_blank')}>주은혜</span>
                      <span className="developers" onClick={() => window.open('https://github.com/Jeongjewww', '_blank')}>정지우</span>
                  </p>
                  <h4>Designer</h4>
                  <p>
                      <span className="developers" onClick={() => window.open('', '_blank')}>이진아</span>
                  </p>
                <p>© 2021. All Rights Reserved.<br/> <a href="">SMSW's Github</a></p>
              </div>
            </Responsive>
        </div>
        </>
    );
};

export default Footer;