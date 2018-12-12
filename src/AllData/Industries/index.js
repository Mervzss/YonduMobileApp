import {TYPE_LIST} from '../ViewType/types'
import {ict,bpo,bankingnfinance,realestate,government,manufacturing,construction,retail} from './Content'
export const industries = {
    headname: 'Industries',
    type: TYPE_LIST,
    image: require('YonduMobileApp/src/assets/default_page/industries.jpg'),
    child:
    [
        ict,
        bpo,
        bankingnfinance,
        realestate,
        government,
        manufacturing,
        construction,
        retail
    ]
}