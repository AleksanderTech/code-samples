const obj = {
  a: {
    a: {
      a: {},
      b: {},
      c: {},
    },
  },
  b: {
    a: {
      a: {},
    },
  },
  c: {
    a: {},
  },
};

function traverse(obj) {
  console.log(obj);
  const stack = [...Object.values(obj)];

  while (stack.length) {
    const item = stack.shift();
    console.log(item);
    stack.unshift(...Object.values(item));
  }
}

traverse(obj);
