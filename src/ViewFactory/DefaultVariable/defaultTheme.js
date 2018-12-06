import React, {Component} from 'react'

export default class ColorDefaults extends Component{
    state={
        curTheme : defaultTheme
    }
    
    set change(color){
        this.setState({
            curTheme: color
        })
    }
}

const defaultTheme = {
    APP_COLOR : '#8E6B58',
    APP_BG : '#FFFFFF',

    TEXT_COLOR : '#FFFFFF'
}

