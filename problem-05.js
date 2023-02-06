function gemsToDiamond(gem1, gem2, gem3)
 {
    let totalDiamonds = gem1 * 21 + gem2 * 32 + gem3 * 43;
    if (totalDiamonds > 1000) 
    {
      return totalDiamonds - 2000;
    }
    else 
    {
      return totalDiamonds;
    }
  }
  const Total_Diamond_Or_Available_Diamond = gemsToDiamond( 20, 200, 50);
  console.log(Total_Diamond_Or_Available_Diamond);