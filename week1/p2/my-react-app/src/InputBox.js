
function InputBox(props){

    function submit(){
        const itemName = document.getElementById("itemName").value ;
        const price = document.getElementById("price").value ;
        const description = document.getElementById("description").value ;
        let length = props.detail.length ;
        
        const newDetails ={
            id:props.detail[length-1].id+1 ,
            itemName:itemName,
            price:price ,
            description:description
          } ;

          // When I use push method it does't re-render but with this it works fine ????
        let modifiedDetails = [...props.detail, newDetails] ;
        // modifiedDetails.push(newDetails) ;
        // console.log(modifiedDetails);
        props.setItems(modifiedDetails) ;
        

    }

    return(
        <div className="ItemDetails">
            <input type="text" id="itemName" placeholder="ItemName"></input>
            <input type="text" id="price" placeholder="price"></input>
            <input type="text" id="description" placeholder="Description"></input>
            <button id ="submitBtn" onClick={()=>{submit()}}>Submit</button>
        </div>
    );
}
export default InputBox ;