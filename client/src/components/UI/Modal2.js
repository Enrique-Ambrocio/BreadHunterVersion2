import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

function Backdrop2() {
    return (
        <div className={styles['modal-backdrop']}></div>
    )
}

function ModalOverlay2(props) {
    return (
        <div className={styles['modal-overlay']}>
            <div className={styles['content']}>{props.children}</div>
        </div>
    )
}


function Modal2(props) {
    return (
        <Fragment>
            {createPortal(<Backdrop2 />, document.getElementById('overlay-root'))}
            {createPortal(<ModalOverlay2>{props.children}</ModalOverlay2>, document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default Modal2;