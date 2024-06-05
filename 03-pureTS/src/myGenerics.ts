const score: Array<number> = [];

function identityOne<Type>(val: Type): Type {
  return val;
}
// better way
function identityTwo<T>(val: T): T {
  return val;
}

function getSearchProducts<T>(products: T[]): T {
  return products[8];
}
