const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
   //Code Here
   for (let i = 0; i < array.length; i++) {
      const current = array[i];
      const next = array[i + 1]

      if (next < current) {
         array[i] = next;
         array[i + 1] = current;

         for (let j = i; j > 0; j--) {
            const currentCheck = array[j];
            const previousCheck = array[j - 1]
            if (currentCheck < previousCheck) {
               array[j - 1] = currentCheck;
               array[j] = previousCheck;
            } else {
               break;
            }
         }
      }
   }

   return array;
}

console.log(insertionSort(numbers));