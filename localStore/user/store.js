import * as store from '../localStore.js'

const USER = 'AmpUser';

export const isLogin = (callback)=> {
    store.getData(USER, callback);
}

export const logIn = (payload, callback)=> {
    store.saveMultipleData(payload, callback);
}

export const logOut = (callback = null)=> {
    store.clearData();
    if(callback !== null)
    {
        callback();
    }
}
