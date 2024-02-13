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
  const queue = [...Object.values(obj)];

  while (queue.length) {
    const item = queue.shift();
    console.log(item);
    queue.push(...Object.values(item));
  }
}

traverse(obj);
