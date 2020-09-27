import { Rules } from "./Rules";

// export const pipe = function() {
//   return [].slice.call(arguments).reduce((carry, item) => {
//     carry = typeof item === 'function' ? item(carry) : item;
//     return carry;
//   });
// };

/** Pipe via rules as arguments */
export const pipe = (...args: any[]) => {
  return args.reduce((carry, item) => {
    carry = typeof item === 'function' ? item(carry) : item;
    return carry;
  });
};

console.log(pipe('5asd Ads', Rules.currency(), Rules.uppercase, Rules.lowercase));

/** Pipe via chain method */
export const Pipe = function(v) {
  let value = v;

  function P() {}

  // finished pipe
  P.prototype.done = () => value;
  P.prototype.get = () => value;
  P.prototype.pipe = pipe;

  // add the defined rules dynamically to P
  Object.keys(Rules).forEach(rule => {
    P.prototype[rule] = function(...args) {
      let result = Rules[rule](value);
      // check rule whether it needs parameters passed?
      if (typeof result === 'function') {
        value = Rules[rule](...args)(value);
      }
      return this;
    }
  })
  // P.prototype.uppercase = function() { // no argument
  //   value = value.toString().toUpperCase();
  //   return this;
  // }
  // P.prototype.lowercase = function() { // no argument
  //   value = value.toString().toLowerCase();
  //   return this;
  // }
  // P.prototype.currency = function(code) { // has argument passed
  //   if (CURRENCY_CODES.hasOwnProperty(code)) {
  //     value = CURRENCY_CODES[code].symbol + value.toString();
  //   }
  //   return this;
  // }
  return new P;
};
Pipe.pipe = pipe;

console.log(Pipe(5435353).uppercase().currency('VND').done());
