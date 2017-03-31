/**
 * Created by xiaoconglau on 29/03/2017.
 */
import {combineReducers} from 'redux'
import home from "./homeReduces"
import navReduces from "./navReduces"


const app = combineReducers({
    count: home,
    nav: navReduces
})

export default app