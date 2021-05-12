import { handleActions } from 'redux-actions';

export const Types = {
    GET_ALL_BIOS_REQUEST : 'GET_ALL_BIOS_REQUEST',
    GET_ALL_BIOS_SUCCESS: 'GET_ALL_BIOS_SUCCESS'
}

const devActions = {
    getAllBiosRequestActionCreator: () => ({
        type: Types.GET_ALL_BIOS_REQUEST
    }),
    getAllBiosSuccessActionCreator: (developers) => ({ 
        type: Types.GET_ALL_BIOS_SUCCESS,
        developers
    }),
    reducer: handleActions({
        [Types.GET_ALL_BIOS_REQUEST]: (state) => ({
           state
        }),
        [Types.GET_ALL_BIOS_SUCCESS]: (state, action) => ({
            ...state,
            developers: action.developers
        })
    },{//initial state
        developers: []
    })
}

export default devActions;