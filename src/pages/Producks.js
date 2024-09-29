
import DetailsThumb from '../part/DetailsThumb';

import { Commet } from "react-loading-indicators";
import {  useRef, useState } from 'react';
import {useParams } from 'react-router-dom';
import { useGetonepokemonApiByNameQuery } from '../RTK-Query/pokemon';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../firebase";
import { useDispatch, useSelector } from 'react-redux';
import AddTaskIcon from '@mui/icons-material/AddTask';
import {Addproduck} from '../RTK-Query/counterSlice';
import  '../index.css'

const Producks = () => {
  let { id } = useParams();
  const { data, isLoading } = useGetonepokemonApiByNameQuery(id)
  const [user] = useAuthState(auth);
  const {arreycartid } = useSelector((state) => state.counter)
  const dispatch = useDispatch()


  const [index, setindex] = useState(0);
  const myRef = useRef(null);
  const handleTab = (index) => {
      setindex(index);
      const images = myRef.current.children;
      for (let i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace("active", "");
      }
      images[index].className = "active";
    };
  
  
  if(isLoading){
    return(
      <div className="dadcard">
              <Commet color="#000" size="medium" text="" textColor="" />
      </div>

    )
  }



    return (
        <div className='dadcard'>
     <div className="app ">
        {
          <div className="details">
            <div className="big-img">
              <img src={data.imageLink[index]} alt="" />
            </div>
  
            <div className="box">
              <div className="row">
                <h2>{data.productName}</h2>
                <span>${data.price}</span>
              </div>
  
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.</p>
  
              <DetailsThumb
             images={data.imageLink}
                tab={handleTab}
                myRef={myRef}
              />
               {user && (  arreycartid.includes(data.id)?( <button className='buttonproduck' style={{display: 'flex',
    alignItems: 'center',
    opacity: '0.7'}} ><AddTaskIcon sx={{marginRight:'5px'}}/> Done</button>):( <button className='buttonproduck' onClick={() => {
            dispatch(Addproduck(data))
         
          }}>Add to cart</button>))}
            </div>
          </div>
        }
      </div>
        </div>
   
    );
}

export default Producks;
