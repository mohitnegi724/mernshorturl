import {FETCH_LINKS} from '../Actions/Type';
const DEFAULT_STATE={
    Links:[],
};
const RootReducer=(state=DEFAULT_STATE, action)=>{
    switch(action.type){
        case FETCH_LINKS:
        console.log(action.Links);
        return {
            Links:action.Links
        };
        default:return state;
    }
};
export default RootReducer;