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

function saveMultipleData(payload, callback = null)
{
    let result = [];
    for(let i = 0; i < payload.length; i++)
    {
        result.push([payload[i].key, JSON.stringify(payload[i].value)]);
    }

    AsyncStorage.multiSet(result, () => {
        console.log('saved Multiple')
        if(callback !== null)
        {
            callback(payload);
        }
    });
}

function getData(key, callback)
{
    AsyncStorage.getItem(key).then((result)=> {
        console.log(`Item with key ${key} retrived`)
        callback(JSON.parse(result));
    }).catch((err)=> {
        console.log(err)
    })
}

function getMultiData(keys, callback = null)
{
    AsyncStorage.multiGet(keys, (err, result) => {
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

function removeData(key, callback)
{
    AsyncStorage.removeItem(key).then((result)=> {
        callback(result)
    }).catch((err)=> {
        console.log(err)
    })
}

export {
    saveData,
    saveMultipleData,
    getData,
    getMultiData,
    getAllKeys,
    mergeData,
    clearData,
    removeData
}
