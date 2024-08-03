export function exerciseProgress(quantity: number, userNumber: number) {
  const res = (userNumber / quantity) * 100;
  return Number(Math.round(res));
}

export function totalProgress(progressValues: number[]) {
  const initialValue = 0;
  const sumValue = progressValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );

  const res = sumValue / progressValues.length;

  return Math.round(res);
}
