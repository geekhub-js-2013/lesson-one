var a = 'hi';

if(a == 'hi') {
    console.log('yes');
}
else {
    console.log('no');
}

if(10 == 5 * 5) {
    console.log('nah');
}
else if(15 == 3 * 5) {
    console.log('yes');
}

if(1) {
    console.log('1 is true');
}

if(0) {
    console.log('0 isnt');
}

if(true && 5 == 2 + 3) {
    console.log('&& means and');
}

if(false || true) {
    console.log('|| is for "or"');
}

console.log(5 * 5 == 25 ? 'short version of if' : 'this is the else part');

console.log('a' || 'b');

console.log('a' && 'b' && 'c');

switch(10) {
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    case 10:
        console.log('10');
    case 11:
        console.log('11');
        break;
    default:
        console.log('default');
        break;
}
