import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    UsersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
})
let store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))
export default store
window.store = store