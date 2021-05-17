import { handleActions } from 'redux-actions';

export const Types = {
    GET_ALL_BIOS_REQUEST : 'GET_ALL_BIOS_REQUEST',
    GET_ALL_BIOS_SUCCESS: 'GET_ALL_BIOS_SUCCESS',
    ADD_BIOS: 'ADD_BIOS'
}

const devActions = {
    getAllBiosRequestActionCreator: () => ({
        type: Types.GET_ALL_BIOS_REQUEST
    }),
    getAllBiosSuccessActionCreator: (developers) => ({ 
        type: Types.GET_ALL_BIOS_SUCCESS,
        developers
    }),
    addDevBiosActionCreator: (developer) => ({
        type: Types.ADD_BIOS,
        developer
    }),
    reducer: handleActions({
        [Types.GET_ALL_BIOS_REQUEST]: (state) => ({
           state
        }),
        [Types.GET_ALL_BIOS_SUCCESS]: (state, action) => ({
            ...state,
            developers: action.developers
        }),
        [Types.ADD_BIOS]: (state, action) => ({
            state
        })
    },{//initial state
        developers: []
    })
}

export default devActions;