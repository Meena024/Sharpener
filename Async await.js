console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie = async() => {
  const promiseWifeBringingsTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));
  const getCandy = new Promise((resolve,reject) => resolve('candy'));
  const getCoke = new Promise((resolve,reject) => resolve('coke'));
  let ticket = await promiseWifeBringingsTicks;
  let [popcorn,coke,candy]= await Promise.all([getPopcorn,getCoke,getCandy])
  console.log(`${popcorn},${coke},${candy}`);
  return ticket;
}
preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');