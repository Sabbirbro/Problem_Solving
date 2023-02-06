function findingBadData(array)
 {
    let count = 0;
    for (let i = 0; i < array.length; i++)
     {
        if (array[i] < 0)
         {
            count += 1;
        }
    }
    return count;
}

const Number_of_Bad_data = findingBadData([-4, -9, -5, -33, -55]);
  console.log(Number_of_Bad_data);
