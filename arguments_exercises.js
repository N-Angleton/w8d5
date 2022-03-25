function sum2(args) {
  let summ = 0;
  for (let i = 0; i < sum.arguments.length; i++) {
    summ += sum.arguments[i];
  }
  return summ;
};

function sum(...args) {
  return args.reduce((partialSum, a) => partialSum + a, 0);
}

// Function.prototype.myBind = function() {
//   let that = this;
//   ctx = arguments[0];
//   otherArgs = [];
//   for (let i = 1; i < arguments.length; i++) {
//     otherArgs.push(arguments[i]);
//   }

//   let func = function () {
//     for (let i = 0; i < arguments.length; i++) {
//       otherArgs.push(arguments[i]);
//     }
//     that.apply(ctx, otherArgs);
//   };
//   return func;
// };

Function.prototype.myBind = function (...args) {
  let that = this;
  return function(...args2) {
    let allArgs = args.concat(args2);
     that.call(...allArgs);
  };
};

// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true


function curriedSum(numArgs) {
  let numbers = [];
  let _curriedSum = function(num){
    numbers.push(num);
    if (numbers.length === numArgs) {
      return sum(...numbers);
    }
    return _curriedSum;
  };
  return _curriedSum;
}


1
// const sum_func = curriedSum(4);
// console.log(sum_func(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs, cxt = "trash") {
    let that = this;
    let args = [];
    let curriedFunc = function(arg) {
      args.push(arg);
      if (args.length === numArgs) {
        return that.apply(cxt, args);
      }
      return curriedFunc;
    };
    return curriedFunc;
};

let currySum = sum.curry(3);
console.log(currySum(7)(0)(7));
