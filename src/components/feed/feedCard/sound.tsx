import * as s from "./styles";

export default function Sound() {
  const Arr = [12, 7, 9, 14, 5];
  return (
    <>
      {Arr.map((e: any, index: number) => (
        <s.Wave second={e} key={index} />
      ))}
    </>
  );
}
