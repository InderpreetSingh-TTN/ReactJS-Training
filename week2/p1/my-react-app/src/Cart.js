import { useDispatch, useSelector } from "react-redux";
function Cart(props){

    const cartItems = useSelector(state => state.cartItems)
    // const [tableItems, setItems] = useState([]);

    if(cartItems.length == 0){
        return(<h5 style={{textAlign : 'center'}}>Cart Empty</h5>);
    }

    return(<>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="col-2">#</th>
                    <th scope="col" class="col-2">Image</th>
                    <th scope="col" class="col-2">Title</th>
                    <th scope="col" class="col-2" className="description">Description</th>
                    <th scope="col" class="col-2">Price</th>
                    {/* <th scope="col" class="col-2" className="addtocart">Add To Cart</th> */}
                </tr>
            </thead>
            <tbody>{
                cartItems.map((e) => {
                    return (
                        <tr>
                            <th class="col-1" scope="row">{e.id}</th>
                            <td class="col-2"><img src={e.image} alt="Trulli" width="200" /></td>
                            <td class="col-2">{e.title}</td>
                            <td class="col-3">{e.description}</td>
                            <td class="col-2">{e.price}</td>
                            {/* <td class="col-2"><button type="button" class="btn btn-warning" onClick={(obj)=>{handleAddToCart(e) ; obj.currentTarget.innerText = "Added"}}>Add To Cart</button></td> */}
                            
                        </tr>
                    );
                })
            }

            </tbody>
        </table>
    </>
    );
}
export default Cart ;