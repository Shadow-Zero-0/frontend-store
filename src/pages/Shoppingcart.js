import React, { useEffect} from 'react';
import { Badge,  Box,  Button, Divider, IconButton, Paper, Stack, styled, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import {useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth, { db } from "../firebase";
import { Commet } from "react-loading-indicators";
import { useSelector, useDispatch } from 'react-redux'
import { addplus,removeplus, removeproduck} from '../RTK-Query/counterSlice';
import { doc, updateDoc } from 'firebase/firestore';
import  '../index.css'
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
     color:'#fff'
    },
  }));


 



const Shoppingcart = () => { 

  

  const {arrcart} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [user ,loadinga] = useAuthState(auth);



  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  if(loadinga){
    return(
      <div className="dadcard">
              <Commet color="#000" size="medium" text="" textColor="" />
      </div>

    )
  }
const arr =[
  
]
  
  let price1 = 0
  let quantity = 0
  let key = 0
 
  return (
  
    <Box sx={{paddingTop: '150px'}} className='dadcard'>
      {}
  {arrcart.map((item,index) => {
quantity= item.quantity
key= item.key
   price1 += item.price*item.quantity
   arr.push({key,quantity})

    return(
      <Paper key={item.id} dir="rtl" className="item-container" >
      <div className="img-title-parent">
          <img  src={item.imageLink[0]} />
          <p className="product-name">{item.productName}</p>
      </div>
      <div style={{display: 'flex' ,alignItems: 'center'}}>
          <IconButton 
           onClick={() => {
            dispatch(addplus(item))
       
           }}
          sx={{color:"#0288d1", ml:{xs:'0',sm:1.5}}}  >   
            <Add />
          </IconButton>
          <StyledBadge badgeContent={item.quantity} color="secondary">  
        </StyledBadge>
          <IconButton 
            onClick={() => {
             if(item.quantity> 1){
              dispatch(removeplus(item))
             }
             }}
          sx={{color:"#0288d1", mr:{xs:'0',sm:1.5}}}>
            <RemoveIcon/>
            </IconButton>
      </div>
      <div className="price">
          ${item.price}
      </div>
      <Button 
         onClick={() => {
          dispatch(removeproduck(item))
         }}
      sx={{display:{xs:'none',sm:'block'}}} variant="text" color="error">
        delete
      
      </Button>
      <IconButton 
           onClick={() => {
            dispatch(removeproduck(item))
           }}
      sx={{display:{xs:'block',sm:'none'} , color: 'red'}} aria-label="" >
      <DeleteIcon />
      </IconButton>
      </Paper>
    )
  })}
  
<Paper sx={{width:'200px', mx:'auto'}}>
<Typography align="center" variant="h6" p={1.5} >Cart Summary</Typography>
<Divider />
<Stack p={1.5} direction='row' sx={{justifyContent:'space-between'}}>
<Typography variant="body1" >Subtotle</Typography>
<Typography variant="body1" >${price1}</Typography>
</Stack>
<Divider />
<Button
onClick={async() => {
await updateDoc(doc(db, user.uid, user.displayName), {
  arr:arr,
  totle:price1
});
navigate('/')
}}

fullWidth variant="contained" color="primary">
  Checkout
</Button>
</Paper>
</Box>
   
);
 }
 


export default Shoppingcart;
