function evenOdd(str)
 {
    if (str.length % 2 === 0) 
    {
      return 'Even';
    } 
    else 
    {
      return 'Odd';
    }
  }

  const Answer = evenOdd("Rifat");
  console.log(Answer);