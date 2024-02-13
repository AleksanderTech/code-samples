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

  for (let child of Object.values(obj)) {
    if (typeof child == "object") {
      traverse(child);
    }
  }
}

traverse(obj);
