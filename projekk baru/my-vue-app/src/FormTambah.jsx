import { useState } from "react";

//ini berbau
//ini ganti
function FormTambah({ onAdd }) {
    const [title, setTitle] = useState("")
    const [note, setNotes] = useState("")

    const handleSubmit = () => {
        onAdd(title, note);
        setTitle("")
        setNotes("")
    };
    return (
        <div className="container" >
            <div className='container flex flex-col'>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='title'
                    name='title'
                    className="input"
                />

                <textarea
                    value={note}
                    onChange={e => setNotes(e.target.value)}
                    name="note"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder='note'
                    className="textarea">
                </textarea>

                <button onClick={() => handleSubmit()} className="bg-blue-400 text-black text-lg rounded-lg px-5 py-3 mt-4" >Add Note</button>
            </div>
        </div>
    )
}

export default FormTambah;



















// import { useRef } from "react";

// function FormTambah({onAdd}) {
//     const titleInput = useRef()
//     const contentInput = useRef()

//     const handleSubmit = () =>{
//         const title = titleInput.current.value
//         const content = contentInput.current.value
//         onAdd(title,content)
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
//                     <button onClick={() => handleSubmit()}
//                         className="bg-blue-500 px-5 py-3 text-white mt-4">Add Note</button>
//                 </div>
//             </div>
//         </>
//     )
// }



// export default FormTambah;