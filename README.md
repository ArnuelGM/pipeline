# Pipeline

const double = (number) => number * 2;
const addOne = (number) => number + 1;

const pipeline = new Pipeline(double, double, addOne);

/*
const pipeline = new Pipeline();
pipeline.pipe(double, double, addOne);

const pipeline = new Pipeline();
pipeline
  .pipe(double)
  .pipe(double)
  .pipe(addOne)
  .catch(error => {
    // catch the error here
  });
*/

console.log(pipeline.process(10)) // 41