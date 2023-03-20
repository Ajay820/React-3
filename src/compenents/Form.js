import { useState } from "react"

const Form =()=>{

    const [task,setTask] =useState("")
    const [show,useShow] =useState(true)



    function reset(e){
        console.log("clicked")
        e.preventDefault()
        setTask("")
    }

    function handleSubmit(e){
        e.preventDefault()
        const body ={task}
        console.log(body)
        setTask("")

    }



    return(
        <div>
            <h1 className="w-[250px] mt-10 text-center p-3 text-2xl rounded-xl mx-auto bg-red-600">Todo App</h1>
            <div className="m-5 w-2/5 mx-auto">
                <form className="flex" onSubmit={handleSubmit}>
                    <input type="text" required 
                    value={task}
                    onChange={(e)=>{setTask(e.target.value)}}
                    className="bg-blue-400 border-2 border-solid border-blue-300 w-[400px] h-[60px] rounded-xl"/>
                    <button className="bg-green-400 w-[100px] ml-10 h-[40px] mt-3 rounded-xl">Add Task</button>
                    <button onClick={reset} className="ml-3 bg-red-400 rounded-xl w-[100px] h-[40px] mt-3" >Reset</button>
                </form>
            </div>
            <p>{task}</p>
        </div>
    )
}

export default Form