import { Link, Outlet } from "react-router-dom"

export default function Layout({ token, onLogout }) {
    return (
        <>
            <div className="bg-blue-200 h-[55px] justify-around py-3 flex gap-2 ">
                <h1 className="text-white text-2xl"> NOTE</h1>
                <nav className="flex font-bold ">
                    {token !== null ? null : <Link to={"/Registrasi"}><span className="mx-4 hover:text-white">Registrasi</span></Link>}
                    {token !== null ? null : <Link to={"/Login"}><span className="mx-4 hover:text-white">Login</span></Link>}
                    <Link to={"/note"}><span className="mx-4 hover:text-white">Notes</span></Link>
                    {token !== null ? <Link onClick={() => onLogout()}><span className="mx-4 hover:text-white">Logout</span></Link> : null}
                </nav>
            </div>
            <Outlet />
        </>
    )
}




// import { Link, Outlet } from "react-router-dom/dist";

// export default function Layout() {
//     return (
//         <>
//             <div className="bg-blue-200 h-[55px] justify-around py-3 flex gap-2  ">
//                 <h1>Vote</h1>
//                 <nav className="flex font-bold">
//                     <Link className="mx-4 hover:text-white" to={"/Registrasi"}><p>Registrasi</p></Link>
//                     <Link className="mx-4 hover:text-white" to={"/Login"}><p>Login</p></Link>
//                     <Link className="mx-4 hover:text-white" to={"/note"}><p>Note</p></Link>

//                 </nav>
//             </div>
//             <Outlet />
//         </>
//     )
// }