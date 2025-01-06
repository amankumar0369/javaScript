//  create object

const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'
}
// forin loop using to object ......
for (const key in myObject) {
    // console.log(`${key} shortcut ${myObject[key]}`) both print
    // console.log(`${key} => ${myObject[key]}`) both print
    // console.log(`${myObject[key]}`)   // only value print
}

