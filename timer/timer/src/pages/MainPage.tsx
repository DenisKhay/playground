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
                            <Link to='/countdown' className="current">Coundown</Link>
                        </li>
                        <li>
                            <Link to='/stopwatch'>Stopwatch</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="content">
                <Time />
            </main>
            <footer className="footer">
                footer
            </footer>
        </Fragment>
    )
}

export const Time: FC = () => {
    return (
        <div className="time">
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
            <span>:</span>
            <div className="time_section">
                <div className="arrow arrow_up"></div>
                <div className="numbers">00</div>
                <div className="arrow arrow_down"></div>
            </div>
        </div>
    )
}