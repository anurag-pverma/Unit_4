import { DELETETODO, deletetodo, GETTODO, POSTTODO, SHOWDATA } from "./action"

const initState = {
    todos : [],
    singletodo : {
        id : 0 ,
        title : "Click here to show todo" , 
        status : false ,
    } , 
    status1 : false
}

export const reducer = (state = initState , {type , payload})=>{
    switch(type){
        case GETTODO : {
            return {
                ...state ,
                todos : payload
            }
        }
        case DELETETODO : {
            return{
                ...state , 
                todos : state.todos.filter((elem)=>elem.id !== payload)
            }
        }
        case POSTTODO : {
            return {
                ...state , 
                todos : [...(state.todos) , payload]
            }
        }
        case SHOWDATA : {
            return { 
                ...state , 
                singledata  : payload
            }
        }
        default : {
            return state
        }
    }
}