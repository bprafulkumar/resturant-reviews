import React,{useState,useEffect} from "react";
import "./datastorage.css"
import { Routes, Route, useNavigate} from "react-router-dom";


const Datastorage = () => {
    const [restaurantInfo,setRestaurantInfo] = useState([])
    const [allCheck,setAllCheck] = useState(false);
    
    const navigate = useNavigate();
    const navigateToMainpage = () =>{
        navigate ('/')
    }
    
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('data'))
        setRestaurantInfo(data)
    },[])

    return(
        <div>
        <div className="Total-table">
            <div className="table-top-bar">
                <div className="top-left-part"> 
                    <h2>Aromatic bar</h2>
                    <p>{`${restaurantInfo.length} records found 2 filters applied`}</p>
                </div>

                <div className="top-right-part">
                    <input className="search-box" type="text" name="Searchbox" placeholder= "search..." ></input><i id="search-icon" class="fa-solid fa-magnifying-glass"></i><i id="restart-icon" class="fa-solid fa-rotate-right"></i>
                    <button className="search-box-btn" onClick={navigateToMainpage} >Add New</button>
                </div>
            </div>

            <div className="tablepart">
                <table>
                    <tr>
                        <th><input className='Largercheckbox' type="checkbox" name="Ratings" onChange={e => {
                            let checked = e.target.checked;
                            console.log(checked,"hello part")
                            setAllCheck(checked)
                            // setRestaurantInfo(
                                // const elements = restaurantInfo.map(d => {
                                //         console.log(elements)
                                // })
                            // )
                            // if(checked){
                            //     elements.target.checked
                            // }
                        }}/></th>
                        <th>Form details</th>
                        <th>Customer</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Please rate the quality of service you received from your host</th>
                        <th>Please</th>
                        
                    </tr>
                    {
                        restaurantInfo && restaurantInfo.length>0 ? restaurantInfo.map((info)=>{
                            return (
                                <tr>
                        <td><input className='Largercheckbox' type="checkbox"  checked={allCheck} name="Ratings" /></td>
                        <td><a href="/">View details</a></td>
                        <td>{info.name}</td>
                        <td>{info.email}</td>
                        <td>{info.phone}</td>
                        <td>{info.service}</td>
                        <td></td>
                    </tr>
                            )
                        }) : null
                    }
              
                    

                </table>
            </div>
                </div>
            <button className="delete-btn" onClick={() => {
                localStorage.setItem('data',JSON.stringify([]))
                setRestaurantInfo([])
            }}>Delete</button>
        </div>
        
    )
}

export default Datastorage;