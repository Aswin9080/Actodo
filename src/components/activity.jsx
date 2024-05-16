import { useState } from "react"


function Dailyactivity() {

    var [arr, setarr] = useState([{ id: 1, activity: 'go for a walk' }, { id: 2, activity: 'go for a walk' }])
    const [content, setcontent] = useState("")

    function handlecontent(event) {
        setcontent(event.target.value)
    }

    function addcontent() {
        setarr([...arr, { id: arr.length + 1, activity: content }])
        setcontent('')
    }
    function contentdelete(removeid) {
        console.log(removeid)
        var itemsarr = arr.filter(function (item) {
            if (item.id === removeid) {
                return false
            }
            else {
                return true
            }
        })
        setarr(itemsarr)
    }
    return (
        <div className="flex gap-10 mt-5 flex-wrap">
            <div>
                <h1 className="mb-5">Mange activity</h1>
                <input onChange={handlecontent} value={content} style={{ border: "solid black 1px" }} className="p-1"></input>
                <button onClick={addcontent} style={{ border: "solid black 1px" }} className="p-1 bg-black text-white">Add</button>
            </div>

            <div className="flex-grow p-2 bg-violet-400">
                <h1>Today activity</h1>
                {
                    arr.length === 0 ? <p>you havent added anything</p> : ""
                }
                {
                    arr.map(function (item, index) {
                        return (
                            <div key={item.id} className="flex justify-between">
                                <p className="p-2">{item.id}.{item.activity}</p>
                                <button className="bg-red-200 p-2 mb-1" onClick={() => contentdelete(item.id)}>delete</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Dailyactivity