function createMessage() {
const noun = ['Everyone ','People ','Pets ','Computers ','Food ','Cars ','Phones ','Homes ','Speakers ','Music '];
const verb = ['runs ','eats ','hates ','loves ','talks ','yells ','cooks ','cures ','transmits ','infects '];
const subject = ['my brother ','my dog ','everything ','my cooking ','my face ','water ','alcohol ','weed ','drugs ','headphones '];
const adjective = ['too much','too little','a lot','on purpose','all the time','very little'];
let numone = Math.floor(Math.random() *10);
let numtwo = Math.floor(Math.random() *10);
let numthree = Math.floor(Math.random() *10);
let numfour = Math.floor(Math.random() *6);
console.log('test');
console.log(`${noun[numone]}${verb[numtwo]}${subject[numthree]}${adjective[numfour]}`);
}

createMessage();