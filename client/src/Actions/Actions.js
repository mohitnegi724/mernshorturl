import {FETCH_LINKS} from './Type';
import axios from 'axios';

export const fetchLinks = () => async dispatch => {
    const Links = axios.get("/api/links");
    await Links.then(URLS=>{
        return dispatch({type:FETCH_LINKS, Links:URLS.data});
    })
    .catch(err=>{
        console.log(err);
    });
};
