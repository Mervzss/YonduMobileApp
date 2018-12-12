import { TYPE_LIST } from '../ViewType/types'
import { cyberSecurity } from './Content/CyberSecurity'
import { entSolutions } from './Content/EntSolutions'
import { itStaffing } from './Content/ITStaffing'
import { managedServices } from './Content/ManagedServices'
import { softwareDev } from './Content/SoftwareDev'
import { trainingDev } from './Content/TrainingDev'

export const whatWeDo = {
    headname: 'What We do',
    type: TYPE_LIST,
    image: require('YonduMobileApp/src/assets/default_page/what_we_do.jpg'),
    child:
        [
            softwareDev,
            managedServices,
            itStaffing,
            cyberSecurity,
            trainingDev,
            entSolutions
        ]
}