import React, { Fragment } from 'react'
import NoteItem from './NoteItem'
import styles from '/Users/enriqueambrocio/Desktop/jobsearching/src/components/Note/NoteItemList.module.css'

function NoteItemList(props) {

    return (
        <Fragment>
            <ul className={styles['notes-list']}>
                {props.notes.map((note) => (
                    <NoteItem text={note.text} key={note.id} id={note.id} onDeleteNote2={props.onDeleteNote} />
                ))}
            </ul>
        </Fragment>
    )
}

export default NoteItemList 