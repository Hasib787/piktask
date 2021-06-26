const initialValue ={
    email : "",
    token: "", 
}
export const userReducer = (state = initialValue, action) => {
    switch(action.type) {
        case "LOGGED_IN_USER":
            return action.payload;
           
        case "LOGOUT":
            return action.payload;

        case "SET_USER":
                return action.payload;  
                
        default:
            return state;
    }
};
