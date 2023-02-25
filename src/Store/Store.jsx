import { legacy_createStore } from "redux";
import rootred from "../redux/Reducers/Main";


const store = legacy_createStore(
    rootred
)
export default store;