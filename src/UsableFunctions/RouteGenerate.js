export const routeGenerate = (RouteName, View, add) => {
    let mytest = null
    let i = 0
    do {
        mytest = {
            ...mytest,
            [RouteName[i].headname]: View[i]
        }
        i++
    } while (i < View.length)

    if(add){
        mytest = {
            ...mytest,
            ...add
        }
    }
    
    
    return mytest
    
}