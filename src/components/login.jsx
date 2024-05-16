import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const [username, setuser] = useState('')
    const [pass, setpass] = useState('')
    const [newuser, newfun] = useState(true)
    const navigate=useNavigate()

    const Ruser = props.Ruser
    const Rset = props.Rset

    function handleuser(evt) {
        setuser(evt.target.value)
    }
    function handlepass(evt) {
        setpass(evt.target.value)
    }

    function handlecheck(username, pass) 
    {
        var userfound = false
        Ruser.forEach(function (item) 
        {
            if (item.username === username && item.password === pass) {
                console.log('login success')
                userfound = true
                navigate('/App',{state:{usename:username}})

            }
        
        });
        if (userfound === false) {
            console.log('login failed')
            newfun(false)
        }
    }

    return (

        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">

                <h1 className="text-xm">Hello Hai</h1>
                {
                    newuser ? <p>i help you manage your activity after you login </p> : <p className="text-red-400">please signup after login</p>
                }


                <div className="flex flex-col" style={{ width: 200 }}>
                    <input value={username} onChange={handleuser} style={{ border: 'solid black 1px' }} type="text" placeholder="username" className="p-1 border rounded-lg mt-2"></input>
                    <input value={pass} onChange={handlepass} style={{ border: 'solid black 1px' }} type="text" placeholder="password" className="p-1 border rounded-lg mt-2"></input>
                </div>
                <br></br>
                <div>
                    <button onClick={() => handlecheck(username, pass)} className="bg-red-400 p-2 border rounded-r-lg">Submit</button>
                    <p className="mt-2">You already created account u login or create account in <Link to={'/sigin'} className="underline text-blue-500">sigin</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login