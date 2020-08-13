export function isValidJSONString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


export function jsonValueValidator(json, checkedFields){
    const errors = []

    console.log({json, checkedFields})

    checkedFields.forEach(field => {
        console.log({field})
        if(!json[field]){
            errors.push(field)
        }
    })

    return errors
}