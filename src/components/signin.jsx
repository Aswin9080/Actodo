import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Sigin(props) {

    const [username, setuser] = useState('')
    const [pass, setpass] = useState('')
    const navigate=useNavigate()
    const Ruser=props.Ruser
    const Rset=props.Rset

    function handleuser(evt) {
        setuser(evt.target.value)
    }
    function handlepass(evt) {
        setpass(evt.target.value)
    }

    function resultjoin(){
        Rset([...Ruser,{username:username,password:pass}])
        window.alert('thank you for sigin....please login')
        navigate('/login')
    }


    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-xm">Hello Hai</h1>
                <p>In your activity is good)!!!</p>

                <div className="flex flex-col" style={{width:200}}>
                    <input value={username} onChange={handleuser} style={{ border: 'solid black 1px' }} type="text" placeholder="username" className="p-1 border rounded-lg mt-2"></input>
                    <input value={pass} onChange={handlepass} style={{ border: 'solid black 1px' }} type="text" placeholder="password" className="p-1 border rounded-lg mt-2"></input>
                    <input style={{ border: 'solid black 1px' }} type="text" placeholder="conform password" className="p-1 border rounded-lg mt-2"></input>

                </div>
                <br></br>
                <div>
                <button onClick={resultjoin} className="bg-red-400 p-2 border rounded-r-lg">Submit</button>
                <p className="mt-2">You signup and go to login page <Link to={'/login'} className="underline text-blue-500">login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Sigin