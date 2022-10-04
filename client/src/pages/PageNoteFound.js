import React from 'react'
import styles from './PageNotFound.module.css'

function PageNoteFound() {
    return (
        <div className={styles['page-not-found']}>
            <h2>404</h2>
            <p>Page Not Found</p>
        </div>
    )
}

export default PageNoteFound