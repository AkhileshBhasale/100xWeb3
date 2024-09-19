const {
    createHash,
} = require('node:crypto');

const hash = createHash('sha256');

function assignment1(){
    var input=0;
    while(true){
        var inputString=input.toString();
        hash.update(inputString);
        var hashValue=hash.copy().digest('hex');
        if(hashValue.substring(0 , 5)==='00000'){
            console.log(input + ' : ' + hashValue);
            break;
        }
        input++;
    }
}

assignment1();
