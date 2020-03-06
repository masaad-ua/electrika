import {appName} from "../config";
import {Record} from "immutable"
import {eventChannel} from 'redux-saga'
import {all, cps, call, put, take, takeEvery} from 'redux-saga/effects'
import {push} from 'react-router-redux'

export const moduleName = 'search';
export const SEARCH_REQUEST = `${appName}/${moduleName}/SEARCH_REQUEST`;

export const ReducerRecord = Record({
	searchLoading: false,
	searchResult: null
});


export default function reducer(state = new ReducerRecord(), action) {
	const {type, payload, error} = action;

	switch (type) {
		case SEARCH_REQUEST:

		default:
			return state
	}

}

export function searchProduct(product) {
	return {
		type: SEARCH_REQUEST,
		payload: {product}
	}
}


export const searchProductSaga =  function * () {
	while (true){
		const action = yield take(SEARCH_REQUEST);
		try{
			console.log("Hello world");
			console.log(action);

		}
		catch (e) {

		}
	}
}

export function * saga() {
	yield all([
		searchProductSaga()
	])


}


