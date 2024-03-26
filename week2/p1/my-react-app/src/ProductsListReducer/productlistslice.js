import {createAsyncThunk ,createSlice} from '@reduxjs/toolkit'


export const fetchAllProducts = createAsyncThunk("getProducts" , async ()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    const result = response.json();
    return result ;
}); 

const initialState = {
    products:[],
    loading:false,
    cartItems:[]
}

export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        fetchProducts:(state , action)=>{},
        addToCart:(state , action)=>{
            state.cartItems = action.payload ;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase( fetchAllProducts.pending ,(state)=>{
                    state.loading = true ;
        })
        builder.addCase( fetchAllProducts.fulfilled ,(state , action)=>{
            state.loading = false ;
            state.products = action.payload;
        })
        builder.addCase( fetchAllProducts.rejected ,(state)=>{
            state.loading = true ;
        })
    }
    // {
    //     [fetchAllProducts.pending]:(state)=>{
    //         state.loading = true ;
    //     },
    //     [fetchAllProducts.fulfilled]:(state,action)=>{
    //         state.loading = false;
    //         state.products = action.payload;
    //     },
    //     [fetchAllProducts.rejected]:(state)=>{
    //         state.loading = false;
    //     }
    // }
})
export const {fetchProducts , addToCart} = productSlice.actions ;
export default productSlice.reducer ;