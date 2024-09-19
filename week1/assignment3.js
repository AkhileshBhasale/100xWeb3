const {
    createHash,
} = require('node:crypto');

const hash = createHash('sha256');

function assignment3(){
    var input=0;
    while(true){
        var inputString=input.toString();
        hash.update('harkirat => Raman | Rs 100\nRam => Ankit | Rs 10' + inputString);
        var hashValue=hash.copy().digest('hex');
        if(hashValue.substring(0 , 5)==='00000'){
            console.log('nonce : ' + input + ' : ' + hashValue);
            break;
        }
        input++;
    }
}

assignment3();