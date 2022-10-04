import { useEffect } from 'react'
import useHttp1 from '../../hooks/use-http1'
import { addNote } from '/Users/enriqueambrocio/Desktop/jobsearching/src/lib/api.js'
import NoteInput from './NoteInput'

function NewNote(props) {

    // const transformNote = (noteObject) => {
    //     const generatedID = noteObject.name;
    //     const noteID = { Id: generatedID }
    // }

    // const { isLoading, error, sendRequest: postRequest } = useHttp(transformNote)

    const { sendRequest, status, error } = useHttp1(addNote)

    const { onPostedNote } = props;

    useEffect(() => {
        if (status === 'completed' && !error) {
            onPostedNote()
        }
    }, [onPostedNote, error, status])

    const addNoteTaskHandler = async (noteText) => {

        sendRequest({ commentData: { text: noteText }, noteId: props.noteId })

        // postRequest({
        //     url: `https://job-helper-937e5-default-rtdb.firebaseio.com/jobs/${Id}/comments.json`,
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: { text: noteText }
        // });

    };


    return (
        <div>
            <NoteInput onAddNote={addNoteTaskHandler} />
            {error && <p>{error}</p>}
        </div>
    )
}

export default NewNote