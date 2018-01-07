import * as store from  '../localStore.js';
import { getDay } from '../exports.js';
import * as date from '../exports.js';

const LOGS = 'AMLogs';


const checkIfDuplicate = (programID, dayID, success, fail = null)=> {
    getLogs((logs)=> {
        if(logs !== null)
        {
            let exists = false;
            for(let i = 0; i < logs.length; i++)
            {
                if(logs[i].programID == programID && logs[i].dayID == dayID)
                {
                    exists = true;
                }
            }
            if(exists == true)
            {
                if(fail !== null)
                {
                    fail(logs);
                }
            } else {
                success(logs);
            }
        }
    })
}

// Misc functions
export const resetLogs = (callback = null)=> {
    store.saveData(LOGS, [], (result)=> {
        callback(result);
    });
}

// Logs functions
export const getLogs = (callback)=> {
    store.getData(LOGS, (logs)=> {
        callback(logs);
    })
}

export const saveLogs = (logs, callback = null)=> {
    store.saveData(LOGS, logs, (result)=> {
        if(callback !== null)
        {
            callback(result);
        }
    });
}

export const saveLog = (log, callback = null)=> {
    getLogs((logs)=> {
        for(let i = 0; i < logs.length; i++)
        {
            if(logs[i].index == log.index)
            {
                logs[i] = log;
                saveLogs(logs);
            }
        }
    })
}

// Day functions
export const initLogDay = (programID, dayID, today = null, callback = null)=> {
    checkIfDuplicate(programID, dayID, (logs)=> {
        if(logs !== null)
        {
            // Init all exercises
            getDay(programID, dayID, (day)=> {
                let exercises = [];
                for(let i = 0; i < day.exercitii.length; i++)
                {
                    exercises.push({
                        id: day.exercitii[i].id_ex,
                        series: []
                    })
                }

                let payload = {
                    programID: programID,
                    dayID: dayID,
                    index: logs.length,
                    date: (today == null) ? date.today() : today,
                    exercises: exercises
                }
                logs.push(payload);
                saveLogs(logs);
            })
        } else {
            resetLogs();
        }
    })
}

export const getLogDay = (programID, dayID, callback)=> {
    getLogs((logs)=> {
        if(logs !== null)
        {
            for(let i = 0; i < logs.length; i++)
            {
                if(logs[i].programID == programID && logs[i].dayID == dayID)
                {
                    callback(logs[i]);
                }
            }
        }
    })
}

// Exercise functions


// Serie functions

export const setLogSerie = (programID, dayID, exerciseID, payload, callback = null)=> {
    getLogDay(programID, dayID, (log)=> {
        for(let i = 0; i < log.exercises.length; i++)
        {
            if(log.exercises[i].id == exerciseID)
            {
                log.exercises[i].series.push(payload);
                saveLog(log, (result)=> {
                    if(callback !== null)
                    {
                        callback(result);
                    }
                })
            }
        }
    })
}
