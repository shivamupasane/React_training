import devActions, {Types} from '../reducers/devReducers';
import {takeLatest, call, put} from 'redux-saga/effects';
import { getDevelopers } from '../api/developerAPI';

//worker
function* getDevBios() {
    try {
        const developers = yield call(getDevelopers);
        yield put(devActions.getAllBiosSuccessActionCreator(developers));
    } catch {
        console.log('Error occurred fetching Developers: '+error);
    }
}




//watchers
function* watchgetAllBiosRequest() {
    yield takeLatest(Types.GET_ALL_BIOS_REQUEST, getDevBios);
}
export default watchgetAllBiosRequest
