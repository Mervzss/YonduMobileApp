import {Platform} from 'react-native'
export const softwareDev = {
    headname: 'Software Development',
    icon: Platform === 'android' ? 'md-desktop':'ios-desktop',
    list:
    [
        'Web Application Development',
        'Mobile Application Development',
        'Enterprise Solutions',
        'System Inegration'
    ]
}