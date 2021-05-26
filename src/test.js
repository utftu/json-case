const array = new Array(1000).map(() => new Array(1000))

let count = 0;
for (const subArray of array) {
  count++

  for (const elem of subArray) {
    count++
    if (count >= 100_000) {
      count = 0
      await new Promise(setImmediate)
    }

    doSomeWithElem(elem)
  }
}