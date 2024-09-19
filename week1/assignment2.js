const {
    createHash,
} = require('node:crypto');

const hash = createHash('sha256');

function assignment2(){
    var input=0;
    while(true){
        var inputString=input.toString();
        hash.update('100xdevs' + inputString);
        var hashValue=hash.copy().digest('hex');
        if(hashValue.substring(0 , 5)==='00000'){
            console.log('100xdevs' + input + ' : ' + hashValue);
            break;
        }
        input++;
    }
}

assignment2();