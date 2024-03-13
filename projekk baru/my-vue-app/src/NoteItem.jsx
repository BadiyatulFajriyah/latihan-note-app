function NoteItem({ id, title, content, onDelete, onEdit}) {
  const handleDelete = (id) => {
    const konfirm = confirm("Apakah Anda Yakin Ingin Menghapusnya?")
    if(konfirm){
      onDelete(id)
      alert("Berhasil Mendelete")
    }
  }
  return (
      <div >
        <div className="note bg-blue-300 m-5 rounded-[30px] w-[340px] h-auto p-4  relative">
          <button onClick={() => handleDelete(id)} className='detele absolute right-4 font-bold text-2xl top-1 text-red-500'>x</button>
          <div className="text-lg text-black font-bold"> {title}</div>
          <p className="text-black text-serif">{content}</p>
          <button className="bg-blue-500 px-3 py-2 text-white mt-5 rounded-[25px] " onClick={() => onEdit(id)}>Edit</button>
        </div>
      </div>
    // </div>
  )
}
export default NoteItem;




// function NoteItem({ id, title, content, onDelete, onEdit}) {
//   return (
//       <div>
//         <div className="note bg-blue-300 m-5 rounded-[30px] w-[340px] h-auto p-4  relative">
//           <button onClick={() => onDelete(id)} className='detele absolute right-7 font-bold text-2xl top-1 text-red-500'>x</button>
//           <div className="text-black font-bold  text-center">{title}</div>
//           <div className="text-lg text-black font-bold"> </div>
//           <p className="text-black text-sm">{content}</p>
//           <button className="bg-blue-500 px-3 py-2 text-white mt-5 rounded-[25px]" onClick={() => onEdit(id)}>Edit</button>
//         </div>
//       </div>
//     // </div>
//   )
// }
// export default NoteItem;
