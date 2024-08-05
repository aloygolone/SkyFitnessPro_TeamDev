export function exerciseProgress(count: number, max: number) {
  const res = (count / max) * 100;
  return Math.round(res);
}

export function totalProgress(progressValues: number[]) {
  const initialValue = 0;
  const sumValue = progressValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );

  const res = (sumValue / progressValues.length) * 100;

  return Math.round(res);
}
