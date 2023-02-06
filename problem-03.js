function isLGSeven(num) 
{
    let different = num - 7;
    if (different < 7) 
    {
      return different;
    } 
    else 
    {
      return num * 2;
    }
  }

  const Answer = isLGSeven(6);
  console.log(Answer);