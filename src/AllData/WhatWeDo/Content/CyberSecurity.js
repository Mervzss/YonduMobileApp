import {Platform} from 'react-native'
export const cyberSecurity = {
    headname: 'Cyber Security',
    icon: Platform === 'android' ?'md-unlock': 'ios-unlock',
    list:
    [
        'Vulnerability Assessment',
        'Software QA as a Service'
    ]
}