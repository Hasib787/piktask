const initialValue ={
  role: "",
  email : "",
  token: "", 
  isLogged: false,
}

export const userReducer = (state = initialValue, action) => {
  switch(action.type) {
    case "LOGGED_IN_USER":
        return {...action.payload, isLogged: true};
        
    case "LOGOUT":
        return {...action.payload, isLogged: false};

    case "SET_USER":
            return {...action.payload, isLogged: true}; 
            
    case "SET_CONTRIBUTOR":
        return {...action.payload, isLogged: true}; 
            
    default:
        return state;
  }
};
