import { useState , useEffect} from "react";
import Table from "./Table";
import {useDispatch , useSelector} from 'react-redux';
import { fetchAllProducts, fetchProducts } from "./ProductsListReducer/productlistslice";
function Products(props){
   
    const[items ,setItems] = useState([]) ;
    const itemList = useSelector(state => state)
    const dispatch = useDispatch();
    

    useEffect(()=>{

         dispatch(fetchAllProducts());
         setItems(itemList.products);
        // fetch("https://fakestoreapi.com/products").then(function(res){
        //     return res.json();
        // }).then(function(json){
        //     setItems(json);
        //     console.log(json);
        // })
    } , []);

    console.log(">> Products Componet <<")
    if(itemList.loading){
        return(<h3>Loading ...</h3>)
    }else{
    console.log(itemList.products);
    }
    

   return(<>
        <div>
        <h2>Products</h2>
        <h5> Cart Items {itemList.cartItems.length} </h5>
        <Table items={itemList.products} setCartItems={props.setCartItems} cartItems={props.cartItems} />
        </div>
    </>
    );
}
export default Products ;
