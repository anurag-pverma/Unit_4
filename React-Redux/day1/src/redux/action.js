export const GETTODO = "GETTODO"
export const ADDTODO = "ADDTODO"
export const DELETETODO = "DELETETODO"
export const POSTTODO = "POSTTODO"
export const SHOWDATA = "SHOWDATA"

export const gettodo = async(dispatch)=>{
    let r = await fetch("http://localhost:8080/data")
    let d = await r.json()
    dispatch({
        type : GETTODO , 
        payload : d
    })
}

export const deletetodo  = async(dispatch , id)=>{
    let r = await fetch(`http://localhost:8080/data/${id}`,{
        method : "DELETE" , 
        headers : {"content-type" : "application/json"}
    })
    dispatch({
        type : DELETETODO , 
        payload : id
    })
}

export const posttodo = async(dispatch ,data1)=>{
    let r = await fetch("http://localhost:8080/data" , {
        method : "POST" , 
        headers : {"content-type" : "application/json"} , 
        body : JSON.stringify(data1)
    })
    let data = await r.json()
    dispatch({
        type : POSTTODO , 
        payload : data
    })
}

export const showdata = (elem)=>{
    return {
        type : SHOWDATA , 
        payload : elem
    }
}