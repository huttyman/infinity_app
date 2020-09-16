export const ADD_UNIT_LIST = "ADD_UNIT_LIST";

export const addUnitList = (unitId, unitSetId) => {
    return { type: ADD_UNIT_LIST, unitId: unitId, unitSetId: unitSetId }
};