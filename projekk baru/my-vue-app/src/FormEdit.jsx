import { useEffect, useState } from "react";
// ini
function FormEdit({ onEdit, notes, onCancel, targetValue }) {
    const [title, setTitle] = useState(targetValue !== null ? targetValue.title : null)
    const [note, setNotes] = useState(targetValue !== null ? targetValue.content : null)
    const [writer, setWriter] = useState(targetValue !== null ? targetValue.writer : null);

    useEffect(() => {
        const noteToEdit = notes !== null ? notes.find((note) => note.id === targetValue.id) : null;
        if (noteToEdit !== null) {
            setTitle(noteToEdit.title)
            setNotes(noteToEdit.content)
            setWriter(noteToEdit.writer)
        } else {
            setTitle("")
            setNotes("")
            setWriter("")
            onCancel()
        }
    }, [targetValue]);

    const handleEdit = () => {
        const konfirm = confirm("Apakah Anda Yakin?")
        if (konfirm) {
            onEdit(targetValue.id, title, note, writer);
            setTitle("")
            setNotes("")
        }
    };
    return (
        <div className="container" >
            <div className='flex flex-col'>

                <input
                    value={writer}
                    type="hidden"
                    className="input"
                />

                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='title'
                    name='title'
                    className='input'
                />

                <textarea
                    value={note}
                    onChange={e => setNotes(e.target.value)}
                    name="note"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder='note'
                    className='textarea'>
                </textarea>

                <input type="text" />

                <button
                    onClick={handleEdit}
                    className="bg-green-400 text-black text-lg rounded-lg px-5 py-3 mt-4">
                    Edit Note
                </button>
                <button
                    onClick={() => onCancel()}
                    className="bg-red-500 text-black text-lg rounded-lg px-5 py-3 mt-2">
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default FormEdit;














// import { useRef, useEffect } from "react";

// function FormEdit({ onEdit, currentNoteId, notes }) {
//     const titleInput = useRef()
//     const contentInput = useRef()


//     useEffect(() => {
//         const noteToEdit = notes.find((note) => note.id === currentNoteId);
//         if (noteToEdit) {
//             titleInput.current.value = noteToEdit.title;
//             contentInput.current.value = noteToEdit.content;
//         }
//     }, [currentNoteId, notes]);



//     const handleEdit = () => {
//         const title = titleInput.current.value
//         const content = contentInput.current.value
//         onEdit(currentNoteId, title, content)
//     };
//     return (
//         <>
//             <div className="create-note w-[400px] mx-auto">
//                 <div className="flex flex-col">
//                     <input ref={titleInput} type="text"
//                         placeholder="title"
//                         name="title"
//                         className="border-2 border-blue-200 p-2 mb-2" />
//                     <textarea ref={contentInput}
//                         name="note"
//                         id=""
//                         cols="30"
//                         rows="5"
//                         placeholder="note"
//                         className="border-2 border-blue-200 p-2">
//                     </textarea>
//                     <button onClick={() => handleEdit()}
//                         className="bg-blue-500 px-5 py-3 text-white mt-4">Add Note</button>
//                 </div>
//             </div>
//         </>
//     )
// }



// export default FormEdit;