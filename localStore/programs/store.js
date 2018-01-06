import * as store from  '../localStore.js';

const PROGRAMS = 'AMPrograms';
const SELECTED_PROGRAM = 'selectedProgram';


export const getProgram = (id) => {
    store.getData(PROGRAMS, (result)=> {
        if(result !== null)
        {
            let selected = result.find((program)=> {
                return program.id === id;
            });
            store.saveData(SELECTED_PROGRAM, {program: selected}, (res)=> {
                if(res !== null)
                {
                    console.log(res);
                }
            })
        }
    })
}
