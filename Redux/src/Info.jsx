import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from './utilis/redux/action'

function Info() {
    const Dispatch = useDispatch()
    const Data = useSelector(data => data.user)
    return (
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <button onClick={() => { Dispatch(FetchData()) }} style={{ color: "darkblue", fontSize: "17.8px", padding: "12px", backgroundColor: "white", cursor:"pointer"}}>Data Fetch</button>
            </div>
            {Data?.map((data, id) => (
                <div key={id}>
                    <h2>{data.name}</h2>
                    <h3>{data.email}</h3>
                    <br />
                    <hr />
                </div>
            ))
            }
        </div>
    )
}
export default Info