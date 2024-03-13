import { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Note from "./Note"
import { getToken } from "./Api"
import Login from "./Pages/Login"
import Registrasi from "./Pages/Registrasi"

function App() {
    const [token,setToken] = useState(null);

    const handleLogin = (tokens) => {
        setToken(tokens)
    }

    const handleLogout = () => {
        setToken(null)
        localStorage.removeItem('token');
    }

    useEffect(() => {
        const tokens = getToken()
        setToken(tokens);
    },[])

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout token={token} onLogout={handleLogout}/>}>
                {token !== null ? 
                    <Route>
                        <Route path={"/Note"} element={<Note />} /> 
                        <Route path="*" element={<Navigate to={"/Note"}/>}/>
                    </Route>
                : <Route path={"/Note"} element={<h1 className="text-black grid place-items-center mt-[16rem] font-bold text-[4rem]">Not Found</h1>} />}
                {
                    token !== null ? null : 
                   <Route>
                     <Route path={"/Registrasi"} element={<Registrasi />} />
                     <Route path={"/Login"} element={<Login onLogin={handleLogin}/>} />
                   </Route>
                }
                </Route>
                <Route path="*" element={<Navigate to={"/Login"}/>}/>
            </Routes>

        </BrowserRouter>

    )
}

export default App


























// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Note from "./Note";
// import Login from "./Pages/Login";
// import Registrasi from "./Pages/Registrasi";
// import Layout from "./Layout";
// import { useEffect, useState } from "react";
// import { getToken } from "./Api";

// function App() {
//     const [token, setToken] = useState(null)

//     const handleLogin = (token) => {
//         setToken(token);
//     }

//     useEffect(() => {
//         const token = getToken()
//         setToken(token)
//     }, [])
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route element={<Layout />}>
//                     <Route path={"/Registrasi"} element={<Registrasi />} />
//                     <Route path={"/Login"} element={<Login onLogin={handleLogin} />} />
//                     <Route path={"/note"} element={<Note />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }
// export default App;