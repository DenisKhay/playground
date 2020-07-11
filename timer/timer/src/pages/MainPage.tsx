import React, { FC, Fragment } from "react"
import { Link } from 'react-router-dom';

export const MainPage: FC = () => {
    return (
        <Fragment>
            <header className="header">
                <nav>
                    <ul className="menu">
                        <li>
                            {/* todo multilang */}
                            <Link to='/countdown' className="current">Countdown</Link>
                        </li>
                        <li>
                            <Link to='/stopwatch'>Stopwatch</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="content">
                <Time />
                <div className="buttons">
                    <button className="button button-start">Start</button>
                    <button className="button button-stop">Stop</button>
                </div>
            </main>
            <footer className="footer">
                <nav>
                    <ul className="footer-menu">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/terms-of-use">Terms Of Use</Link></li>
                        <li><Link to="/github">Github</Link></li>
                    </ul>
                </nav>
            </footer>
        </Fragment>
    )
}

export const Time: FC = () => {
    return (
        <div className="time">
            <div className="time_section">
                <div className="arrow arrow_up"></div>
                <div contentEditable={true} className="numbers">00</div>
                <div className="arrow arrow_down"></div>
            </div>
            <span>:</span>
            <div className="time_section">
                <div className="arrow arrow_up"></div>
                <div className="numbers">00</div>
                <div className="arrow arrow_down"></div>
            </div>
            <span>:</span>
            <div className="time_section">
                <div className="arrow arrow_up"></div>
                <div className="numbers">00</div>
                <div className="arrow arrow_down"></div>
            </div>
        </div>
    )
}