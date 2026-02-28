/**
 * using try and catch block
 * try{action}catch(<parameter>){<action to be perform with the parameter}
 * throw
 */


try{
    let a = 10/0
    //throw 'Throwing an error'
    console.log('This is a try block');
}catch(erro){
   console.log(erro);
}finally{
  console.log('This is a finally block')
}