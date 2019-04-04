

function bubbleSort(array) {
    //   const sortedArr = [];
    let counter = 0;
    while (counter < array.length) {
      for (let i = 0; i < array.length - i; i++) {
        let current = array[i];
        let next = array[i + 1];
        if (next < current) {
          // 4 < 5
          array[i] = next; // 4
          array[i + 1] = current; // 5
          console.log(array[i]);
        }
        console.log(array);
      }
      counter++;
      // sortedArr.unshift(array[array.length - 1]); // pushing final/largest number into sorted
      // array = array.slice(0, -1);
    }
    return array;
  }


// Working solution with sortedArr ::
// function bubbleSort(array) {
//   const sortedArr = [];
//   while (array.length) {
//     for (let i = 0; i < array.length; i++) {
//       let current = array[i];
//       let next = array[i + 1];
//       if (next < current) {
//         // 4 < 5
//         array[i] = next; // 4
//         array[i + 1] = current; // 5
//       }
//     }
//     sortedArr.unshift(array[array.length - 1]); // pushing final/largest number into sorted
//     array = array.slice(0, -1);
//   }
//   return sortedArr;
// }
