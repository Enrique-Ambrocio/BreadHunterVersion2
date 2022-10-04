import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

function Backdrop() {
    return (
        <div className={styles['modal-backdrop']}></div>
    )
}

function ModalOverlay(props) {
    return (
        <div className={styles['modal-overlay']}>
            <div className={styles['content']}>{props.children}</div>
        </div>
    )
}


function Modal(props) {
    return (
        <Fragment>
            {createPortal(<Backdrop />, document.getElementById('overlay-root'))}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default Modal;

