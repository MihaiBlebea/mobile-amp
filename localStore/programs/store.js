import * as store from  '../localStore.js';


const PROGRAMS = 'AMPrograms';

export const getPrograms = (callback)=> {
    store.getData(PROGRAMS, callback);
}

export const getProgram = (programID, callback)=> {
    store.getData(PROGRAMS, (result)=> {
        if(result !== null)
        {
            for(let i = 0; i < result.length; i++)
            {
                if(result[i].id == programID)
                {
                    callback(result[i]);
                }
            }
        }
    })
}

export const getDay = (programID, dayID, callback)=> {
    getProgram(programID, (program)=> {
        if(program !== null)
        {
            for(let i = 0; i < program.zile.length; i++)
            {
                if(program.zile[i].id == dayID)
                {
                    callback(program.zile[i]);
                }
            }
        }
    })
}

export const getExercise = (programID, dayID, exerciseID, callback)=> {
    getDay(programID, dayID, (day)=> {
        if(day !== null)
        {
            for(let i = 0; i < day.exercitii.length; i++)
            {
                if(day.exercitii[i].id_ex == exerciseID)
                {
                    callback(day.exercitii[i]);
                }
            }
        }
    })
}
