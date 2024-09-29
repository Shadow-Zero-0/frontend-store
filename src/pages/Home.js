
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../firebase";
import { useGetPokemonByNameQuery } from '../RTK-Query/pokemon'
import { Commet } from "react-loading-indicators";
import { useDispatch, useSelector } from "react-redux";
import {Addproduck} from '../RTK-Query/counterSlice';
import AddTaskIcon from '@mui/icons-material/AddTask';
import  '../index.css'



const Home = () => {


  const [user,Loading] = useAuthState(auth);
  const { data, isLoading } = useGetPokemonByNameQuery()
  const navigate = useNavigate();
  const {arreycartid } = useSelector((state) => state.counter)
  const dispatch = useDispatch()


  if(isLoading){
    return(
      <div className="dadcard">
              <Commet color="#000" size="medium" text="" textColor="" />
      </div>

    )
  }
  if(Loading){
    return(
      <div className="dadcard">
              <Commet color="#000" size="medium" text="" textColor="" />
      </div>

    )
  }


  return (

      <div  className="dadcard">
        <div className="babycard">
   {data.map((item) => {
    
        return( <div key={item.id} className="linkdiv">
          <img onClick={() => {
            navigate(`Producks/${item.id}`)
          }}
            src= {item.imageLink[0]}
            width="270px"
            height="320px"
          />
  
          <div>
            <p>{item.productName}</p>

           {user && (  arreycartid.includes(item.id)?( <button style={{display: 'flex',
      alignItems: 'center',
      opacity: '0.7'}} ><AddTaskIcon sx={{marginRight:'5px'}}/> Done</button>):( <button onClick={() => {
              dispatch(Addproduck(item))
            }}>Add to cart</button>))}
  
        {!user&&    <Link
              
              to="Signin"
            >
              Sign-in
            </Link>}
          </div>
        </div>)
  
   })}
         
        </div>
      </div>

  );
};

export default Home;
