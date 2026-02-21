let myNumber = 123456789
let remNum = 0;
console.log(myNumber);
while(myNumber!=0){
    remNum = remNum*10 + myNumber%10;
    console.log(remNum);
    myNumber = Math.trunc(myNumber/10);
    console.log(myNumber);
}

