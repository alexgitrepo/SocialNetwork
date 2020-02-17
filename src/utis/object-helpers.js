export let updateObjectInArray = (item, ItemId, objectPropName, newObjectProps) => {
    return item.map((u) => {
        if (u[objectPropName] === ItemId) {
            return {...u, ...newObjectProps}
        } else {
            return u
        }
    })
}