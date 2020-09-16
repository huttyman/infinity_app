const { ADD_UNIT_LIST } = require("../actions/carts");

const initialState ={
    unitList:[]
};

const unitListReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_UNIT_LIST:
            const unitId = action.unitId;
            const unitSetId = action.unitSetId;
            const updatedUnitList = [...state.unitList, {unitId:{unitId},unitSetId:{unitSetId}}];
            console.log('abcdefg');
            console.log(updatedUnitList);
            return {...state,unitList:updatedUnitList};
    }
     return state;
};