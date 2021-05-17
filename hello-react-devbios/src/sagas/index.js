import { all } from "redux-saga/effects";
import developerSagas from "./developerSagas";

export default function* rootSaga() {
yield all([
    ...developerSagas
]) 
}