import React, { useRef, useState } from 'react'
import styles from '/Users/enriqueambrocio/Desktop/jobsearching/src/components/Note/NoteInput.module.css'

function NoteInput(props) {

    const valueRef = useRef()
    const [editing, setEditing] = useState(false)

    function editNoteHandler() {
        setEditing(true)
    }

    function stopEditing() {
        setEditing(false)
    }

    function onSubmissionHandler(event) {
        event.preventDefault()
        if (valueRef.current.value.trim() === 0) {
            return;
        }

        props.onAddNote(valueRef.current.value)
        valueRef.current.value = ''
    }

    return (
        <div className={styles['note-input']}>
            {!editing && <button onClick={editNoteHandler}>Add Note</button>}
            {editing &&
                <form onSubmit={onSubmissionHandler}>
                    <div className={styles['note-input_input']}>
                        <input text='text' ref={valueRef} />
                    </div>
                    <div className={styles['note-input_buttons']}>
                        <button type='submit'>Submit</button>
                        <button onClick={stopEditing}>Cancel</button>
                    </div>
                </form>
            }
        </div>
    )
}

export default NoteInput;