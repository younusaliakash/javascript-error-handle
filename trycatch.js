// function trycat (text){
//     try{
//         let str = text.trim()
//         let word = str.split(' ')
//         return word

//     } catch (e){
//         console.log('Please provid the right value')

//     }
// }
// let word = trycat(99)
// console.log(word)

//** Custom Try Catch Error */
class CustomError extends Error{
    constructor (msg){
        super(msg)
        
        if (Error.captureStackTrace){
            Error.captureStackTrace(this, CustomError)
        }
    }
}


try{
    console.log('Line 1')
    throw new CustomError('HAhaha Error')
    console.log('Line 2')
    console.log('Line 3')
    console.log('Line 4')
} catch (e){
    console.log(e.message)
    console.log('This is Error Massage')
} finally {
    console.log("It's Final")
}