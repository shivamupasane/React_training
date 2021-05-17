import devActions, {Types} from '../reducers/devReducers';
import {takeLatest, call, put, fork} from 'redux-saga/effects';
import { getDevelopers, postDeveloper } from '../api/developerAPI';

//worker
function* getDevBios() {
    try {
        const developers = yield call(getDevelopers);
        yield put(devActions.getAllBiosSuccessActionCreator(developers));
    } catch {
        console.log('Error occurred fetching Developers: '+error);
    }
}

function* addDevBios({developer}) {
    try {
        yield call(postDeveloper, developer);
    } catch {
        console.log('Error occurred fetching Developers: '+error);
    }
}


//watchers
function* watchgetAllBiosRequest() {
    yield takeLatest(Types.GET_ALL_BIOS_REQUEST, getDevBios);
}
function* watchAddDevBios() {
    yield takeLatest(Types.ADD_BIOS, addDevBios)
}
// single watcher exported
//export default watchgetAllBiosRequest

// multiple watcher export with fork
const developerSagas = [
fork(watchgetAllBiosRequest),
fork(watchAddDevBios)
];
export default developerSagas;
