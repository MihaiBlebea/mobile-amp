import { AsyncStorage } from 'react-native';

function saveData(key, payload, callback = null)
{
    AsyncStorage.setItem(key, JSON.stringify(payload), () => {
        console.log('saved')
        if(callback !== null)
        {
            callback(key, payload);
        }
    });
}

function getData(key, callback = null)
{
    AsyncStorage.getItem(key, (err, result) => {
        console.log(result)
        if(callback !== null)
        {
            callback(JSON.parse(result));
        }
    });
}

function getAllKeys(callback = null)
{
    AsyncStorage.getAllKeys((err, keys) => {
        console.log(keys);
        if(callback !== null)
        {
            callback(keys);
        }
    });
}

function mergeData(key, payload, callback = null)
{
    AsyncStorage.mergeItem(key, JSON.stringify(payload), () => {
        console.log('merged');
        if(callback !== null)
        {
            callback(key, payload);
        }
    });
}

function clearData()
{
    AsyncStorage.clear((err)=> {
        console.log(err)
    })
}

export {
    saveData,
    getData,
    getAllKeys,
    mergeData,
    clearData
}
