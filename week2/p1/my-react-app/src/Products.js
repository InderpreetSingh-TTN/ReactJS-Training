import { useState , useEffect} from "react";
import Table from "./Table";
function Products(){
   
    const[items ,setItems] = useState([]) ;
    const[cartItems,setCartItems] = useState([]) ;

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(function(res){
            return res.json();
        }).then(function(json){
            setItems(json);
            console.log(json);
        })
    } , []);

    

   return(<>
        <div>
        <h2>Products</h2>
        <h5> Cart Items {cartItems.length} </h5>
        <Table items={items} setCartItems={setCartItems} cartItems ={cartItems} />
        </div>
    </>
    );
}
export default Products ;
