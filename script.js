    function createSum() {
      let total = 0;

      function innerSum(number) {
        total += number;
        return total;
      }
      return innerSum;
    }

    const sum = createSum();

    console.log(sum(3));
    console.log(sum(5));
    console.log(sum(7));

    // function createSum() {
    //   let total = 0;

    //   return function innerSum(number) {
    //     total += number;
    //     return total;
    //   };
    // }

    // const sum = createSum();

    // console.log(sum(3));
    // console.log(sum(5));
    // console.log(sum(7));