const waitTime = 2000
let loop = 0
const add = (a,b)=>{
    loop=loop+1
    return new Promise((resolve, reject) => {
        console.log( 'Loop Number ' +loop+' waiting ' + waitTime+'ms')
        setTimeout(() => {
            if(a <0 || b<0){
                return reject('Only positive numbers pls!')
            }
            resolve(a+b)},waitTime)

    })
}

const doWork = async () =>{
    // throw new Error('Something went wrong!')
const sum = await add(1,99)
const sum2 = await add(sum,50)
const sum3 = await add(sum2,-8)
    return sum3
}
doWork().then((result)=>{
    console.log('result',result)
}).catch((e)=>{
    console.log('e',e)
})