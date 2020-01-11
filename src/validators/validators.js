export const required =value=>value? undefined :"field is required"
export const maxLengthCreator =(maxLength)=>(value)=>{
    if (value.length>maxLength) {return `max length is ${maxLength}`}
    return undefined
}