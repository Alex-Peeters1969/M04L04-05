  const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]

    // Hier komt jouw functie
    const findElement = superheroes.find( o => o.name === "Spiderman");

  console.log(findElement); 
  // Find Spiderman
  // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

  const array = [1, 2, 3];
  const doubleArrayValues = array.map(x => x * 2);

  console.log(doubleArrayValues);
  // result should be [2, 4, 6]

 const containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11] 
 let biggerThan10 = containsNumberBiggerThan10.some((containsNumberBiggerThan10) => {
     return containsNumberBiggerThan10 > 10    
 });
 console.log(biggerThan10);
  // result should be true

 const containsNumberBiggerThan10a = [1, 2, 1, 2, 1, 2,] 
 let biggerThan10a = containsNumberBiggerThan10a.some((containsNumberBiggerThan10a) => {
     return containsNumberBiggerThan10a > 10    
 });
 console.log(biggerThan10a);  
  // result should be false

  const  isItalyInTheGreat7 = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']
    const theGreat7 = isItalyInTheGreat7.some((isItalyInTheGreat7) =>{
        return isItalyInTheGreat7 
    });
    console.log(theGreat7);
  // result should be true

  const tenfold = [1, 4, 3, 6, 9, 7, 11]
 
  tenfold.forEach(element => console.log(element *10));   
  // result should be [10, 40, 30, 60, 90, 70, 110]
 
  const isBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]
  const Below100 = isBelow100.every((isBelow100) => {
    return isBelow100 <= 100 
  });

  console.log(Below100)
  // result should be: false

  const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]
  const sum = bigSum.reduce(function (total, amount) {
    return total + amount
  });  
  

  console.log(sum)
  // result should be 1118
