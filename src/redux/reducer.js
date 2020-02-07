import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import {reducer as form} from 'redux-form'
import localization from "../ducks/localization";


export default combineReducers({
    router,
    form,
    localization
})