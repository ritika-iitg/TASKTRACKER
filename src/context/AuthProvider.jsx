import React ,{createContext,useEffect,useState}from "react";
import { getLocalStorage, setLocalStorage } from '../utilities/localStorage'  
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
//    localStorage.clear();
   const [userData, setUserData] = useState(null);
   
   useEffect(() => {
    setLocalStorage();
    // Retrieve employee and admin data from localStorage
    const { employees} = getLocalStorage();
    setUserData( employees);
   },[])

 return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider