import * as types from "./actionTypes";
const initialState={
    company :[],
    error: "",
   loading : false
}
const companyreducer = (state = initialState,action)=>{
 const {type,payload} = action;
    switch(type){
        case types.FETCH_DATA_REQUEST:
            return{
                ...state,
                error: "",
                loading :true,
            };

            case types.FETCH_DATA_SUCCESS:
                return{
                    ...state,
                    company:payload,
                    error: "",
                    loading :false,
                }
    
                case types.FETCH_DATA_FAILURE:
                    return{
                        ...state,
                      error: payload,
                        loading :false,
                    }


    }
}

export default companyreducer