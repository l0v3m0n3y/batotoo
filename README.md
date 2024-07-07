# batotoo
JavaScript library for batotoo.com
# main
```js
async function main(){
    const {batotoo} = require('./batotoo');
    const client= new batotoo();
    let req=await client.login("email","password")
    console.log(req)
}
main()
```
