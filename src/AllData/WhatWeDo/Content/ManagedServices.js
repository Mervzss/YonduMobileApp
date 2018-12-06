import {Platform} from 'react-native'
export const managedServices = {
    headname: 'Managed Services',
    icon: Platform === 'android' ? 'md-filing':'ios-filing',
    list:
    [
        'Managed Desktop Sevice',
        'Managed Expert Service',
        'Managed Systems Admin',
        'Managed App Services',
        'AWS Cloud'
    ]
} 