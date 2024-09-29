import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase";
import { signOut } from "firebase/auth";
import Footer from "./part/Footer";

function Root() {
  const Location = useLocation();
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="body">
        <h1>Store</h1>

        <div>
          <Link
            style={{
              boxShadow: Location.pathname === "/" ? " 0 0 15px cyan" : null,
            }}
            to="/"
          >
            Home
          </Link>
          {user && (
            <Link
              style={{
                boxShadow:
                  Location.pathname === "/shoppingcart"
                    ? " 0 0 15px cyan"
                    : null,
              }}
              to="shoppingcart"
            >
              shopping cart
            </Link>
          )}
          {user && (
            <Link
              to="shoppingcart"
              onClick={() => {
                signOut(auth)
                  .then(() => {})
                  .catch((error) => {});
              }}
            >
              Sign-Out
            </Link>
          )}
          {!user && (
            <Link
              style={{
                boxShadow:
                  Location.pathname === "/Signin" ? " 0 0 15px cyan" : null,
              }}
              to="Signin"
            >
              Sign-in
            </Link>
          )}
        </div>
      </div>
   
      <Outlet />
  
          <Footer/>
    </>
  );
}

export default Root;
