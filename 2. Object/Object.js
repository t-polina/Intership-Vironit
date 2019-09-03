const object1 = {
    name: 'Name',
    someArray: { id: 0, lastName: 'Po' },
    someArray1: [
        {
            id: 2,
            age: 100,
            someArray2: [
                {
                    id: undefined, name: null, last: true
                }
            ],
            last: false
        }

    ],
    last: null
}
function a(obj) {
    for (var key in obj) {
        if (obj[key] instanceof Object) {
            if (obj[key] instanceof Array) {
                a(obj[key].reduce(function (acc, cur, i) { acc[i] = cur; return acc; }, {}))
            }
            else a(obj[key]);
        }
        else console.log(`${key}: ${obj[key]}`)
    }
}

