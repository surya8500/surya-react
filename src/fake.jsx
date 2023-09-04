import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import axios from "axios";
function Abc(){
    var [h,setH]=React.useState([])
    React.useEffect(
        function(){
            var url="https://fakestoreapi.com/products"
            axios.get(`${url}`)
            .then(function(res){
                setH([...res.data])
                
            })

        },[]
        
    ) 
    console.log(h)
    return(

        <div >
           
            {
                h.map(function(s,i){
                        return(
                    <div className="card" style={{width: "250px"}}>
                        <img src={s.image} classNames="card-img-top"/>
                        <div class="card-body">
                        <h5 class="card-title">{s.category}</h5>
                        <p class="card-text">{s.description}</p>
                        <span class="badge bg-secondary">price {s.price} $$</span>
                        <span class="badge bg-secondary"> rating {s.rating.rate} </span>
                        <p/>
                        <a href="#" class="btn btn-primary">add to cart</a>
                            </div>

                    </div>
                        )
                })
            }
        </div>

    )
}
export default Abc;