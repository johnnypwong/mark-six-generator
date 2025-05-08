const getRandom = () => {
  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  return randomBuffer[0] / (0xFFFFFFFF + 1);
}

const getRandomIntInclusive = (min: number, max: number) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  return Math.floor(getRandom() * (maxValue - minValue + 1)) + minValue;
}

export const getRandomNumberList = (from: number, to: number, n: number) => {
  console.log(n);
  let numList = []
  let result = []
  let len = to - from + 1;
  for (let i = from; i < to + 1; i++) {
    numList.push(i);
  }
  for (let i = 0; i < n; i++) {
    let rand = getRandomIntInclusive(from, len);
    // let rand = Math.floor(Math.random() * len);
    result.push(numList[rand]);
    numList[rand] = numList[len - 1];
    len--;
  }
  return result.sort((a, b) => a - b);
}