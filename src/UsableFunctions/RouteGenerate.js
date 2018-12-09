export const routeGenerate = (RouteName, View) => {
    let mytest = null
    let i = 0
    do {
        mytest = {
            ...mytest,
            [RouteName[i].headname]: View[i]
        }
        i++
    } while (i < View.length)
    
    return mytest
}