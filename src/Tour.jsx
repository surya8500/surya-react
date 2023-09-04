import React from "react";
import axios from "axios";

function Tour(){
    
    var [arr,setArr]=React.useState([])
    React.useEffect(
        function(){
            axios.get('https://course-api.com/react-tours-project').then(function (res){
            console.log(res.data)
                setArr([...res.data])
                
            
            })
            
        },[])

    return(
        <div >
            {
                arr.map(function (s){
                    return( 
                        <div className="surya">
                            <img src={s.image}style={{width:"750px"}} />

                        <div>
                        <h3>{s.name}</h3>
                        <p>{s.info}</p>
                        <h3> price{s.price}</h3>
                        <button style={{align:"center"}}>not intrest</button>
                        </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Tour