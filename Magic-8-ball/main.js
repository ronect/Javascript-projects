// Random number generator
const RandNumGenerator = (num) => (Math.floor(Math.random() * 8))



const RandaniaGenerator = () => { 
    let num = Math.floor(Math.random() * 8)
    switch (num){
        case 0:  console.log('It is certain');
        break;

        case 1:  console.log('Without a doubt');
        break;

        case 2:  console.log('Yes definetly');
        break;

        case 3:  console.log('Ask again later');
        break;

        case 4:  console.log('Cannot predict now');
        break;

        case 5:  console.log('Don\'t count on it');
        break;

        case 6:  console.log('My sources say no');
        break;

        case 7:  console.log('My reply is no');
        break;

        default: console.log('Something went wrong!!');
        break;

    }

}
const RandPlaceGenerator = () => { 
    let num = Math.floor(Math.random() * 8)
    switch (num){
        case 0:  console.log('It is certain');
        break;

        case 1:  console.log('Without a doubt');
        break;

        case 2:  console.log('Yes definetly');
        break;

        case 3:  console.log('Ask again later');
        break;

        case 4:  console.log('Cannot predict now');
        break;

        case 5:  console.log('Don\'t count on it');
        break;

        case 6:  console.log('My sources say no');
        break;

        case 7:  console.log('My reply is no');
        break;

        default: console.log('Something went wrong!!');
        break;

    }

}
console.log(RandNumGenerator(8))