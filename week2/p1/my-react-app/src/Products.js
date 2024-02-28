import { useState , useEffect} from "react";
import Table from "./Table";
function Products(props){
   
    const[items ,setItems] = useState([]) ;

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
        <h5> Cart Items {props.cartItems.length} </h5>
        <Table items={items} setCartItems={props.setCartItems} cartItems={props.cartItems} />
        </div>
    </>
    );
}
export default Products ;
