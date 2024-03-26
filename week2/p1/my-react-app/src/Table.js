import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./ProductsListReducer/productlistslice";

function Table(props) {

    const [tableItems, setItems] = useState([]);
    const cartItems = useSelector(state => state.cartItems)
    const dispatch = useDispatch();

    useEffect(() => {
        setItems(props.items)
        console.log(props.items);
    },[props.items]);

    function handleAddToCart(id){
        let oldCartItems = [...cartItems]
        if(oldCartItems.includes(id)){
            alert("This Item already Added")
        }else{
            dispatch(addToCart([...oldCartItems , id]))
        // props.setCartItems([...oldCartItems , id]);
        }
    }
    return (<>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="col-2">#</th>
                    <th scope="col" class="col-2">Image</th>
                    <th scope="col" class="col-2">Title</th>
                    <th scope="col" class="col-2" className="description">Description</th>
                    <th scope="col" class="col-2">Price</th>
                    <th scope="col" class="col-2" className="addtocart">Add To Cart</th>
                </tr>
            </thead>
            <tbody>{
                tableItems.map((e) => {
                    return (
                        <tr>
                            <th class="col-1" scope="row">{e.id}</th>
                            <td class="col-2"><img src={e.image} alt="Trulli" width="200" /></td>
                            <td class="col-2">{e.title}</td>
                            <td class="col-3">{e.description}</td>
                            <td class="col-2">{e.price}</td>
                            <td class="col-2"><button type="button" class="btn btn-warning" onClick={(obj)=>{handleAddToCart(e) ; obj.currentTarget.innerText = "Added"}} >{cartItems.includes(e) ? "Added":"Add To Cart"}</button></td>
                            
                        </tr>
                    );
                })
            }

            </tbody>
        </table>
    </>);
}
export default Table;