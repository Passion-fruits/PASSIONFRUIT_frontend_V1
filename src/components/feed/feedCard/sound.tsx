import * as s from "./styles";

export default function Sound() {
  const Rand = function (min: number, max: number) {
    var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
  };
  const Arr = [0, 0, 0, 0, 0];
  return (
    <>
      {Arr.map((_e: any, index: number) => (
        <s.Wave second={Rand(5, 15)} key={index} />
      ))}
    </>
  );
}
