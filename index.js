// Code your solutions in this file
//let name= (["Guadalupe", "Ollie", "Aki"], "surprise");

function writeCards(name,event){
    const array = (["Guadalupe", "Ollie", "Aki"]);
    //const array2 = ["surprise"];
    for (let array=0; array<name.length; array++) {
        array.push('Thank you, ${name[array]}, for the wonderful surprise gift!');
    }
    return array;
}
function countDown(number){
    while (number > 0){
        console.log(number);
        number -=1;
    }
    console.log(number);
}



//const sinon = require( 'sinon' )

//describe( 'index.js', () => {
//  let spy;

 // beforeEach( () => {
 //   spy = sinon.spy( console, 'log' );
 // } );

  //afterEach( () => {
  //  spy.restore();
 // } );

 // describe( 'writeCards()', () => {

 //   it( 'returns an array of thank you messages for each name provided to the function', () => {
 //     expect(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")).to.deep.eq([
  //      "Thank you, Guadalupe, for the wonderful surprise gift!",
  //      "Thank you, Ollie, for the wonderful surprise gift!",
  //      "Thank you, Aki, for the wonderful surprise gift!",
  //    ]);
  //  } );
 // } );