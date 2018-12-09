export const findIndex = ( mainArray, selectedItem ) => {
    let final = 0
    let i = 0
    do {
        if ((mainArray[i].headname || mainArray[i]) === selectedItem) {
            final = i
        }
        i++
    } while (i < mainArray.length)
    return final
}