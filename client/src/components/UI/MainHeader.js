import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MainHeader.module.css'

function MainHeader() {
    return (
        <header className={styles['header']}>
            <h1>
                BreadHunter
            </h1>
            <nav className={styles['main-nav']}>
                <ul>
                    <li>
                        <NavLink to='/jobs'>Applied</NavLink>
                    </li>
                    <li>
                        <NavLink to='/add-job'>Add Prospect</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader