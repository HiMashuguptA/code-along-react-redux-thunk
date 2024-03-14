import axios from "axios"
import { FETCH_DATA} from "./actionType"
// import { useDispatch } from "react-redux"
export const fetchUserData=(data)=>{
    return {
        type: FETCH_DATA,
        payload: data
    }
}
export const FetchData = () => {
        return (dispatch)=>{
            axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                let user = res.data
                dispatch(fetchUserData(user))
            })
        }
    }
