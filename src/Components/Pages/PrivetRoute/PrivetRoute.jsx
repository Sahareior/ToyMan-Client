import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Dna } from "react-loader-spinner";


const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext) 
    if(loading){
        return <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    }
    if(user){
        return children
    }
    return (
      <Navigate to='/login' state={{from:location}}></Navigate>
    );
};

export default PrivetRoute;