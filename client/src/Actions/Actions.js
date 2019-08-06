import {FETCH_LINKS,FETCH_LINK} from './Type';
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

export const fetchLink = (shortid) => async dispatch => {
    const Link = await axios.get(`/`);
    Link.then(URLS=>{
        return dispatch({type:FETCH_LINK, Link:URLS.data});
    })
    .catch(err=>{
        console.log(err);
    });
};