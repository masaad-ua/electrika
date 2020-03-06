import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import {reducer as form} from 'redux-form'
import localization from "../ducks/localization";
import searchReducer, {moduleName as searchModule} from "../ducks/search";



export default combineReducers({
    router, form,
    localization,
    [searchModule]: searchReducer

})