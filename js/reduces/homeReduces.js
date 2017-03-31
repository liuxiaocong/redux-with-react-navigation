/**
 * Created by xiaoconglau on 29/03/2017.
 */
export default function home( count = 0, action ) {
    switch ( action.type ) {
        case "add": {
            let c = count + 1;
            return c
        }
            break;
        default: {
            return count;
        }
    }

}