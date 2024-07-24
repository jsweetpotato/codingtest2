export function timeCheck(func, ...args) {
  const start = performance.now(); // 측정 시작
  const start1 = new Date(); // 측정 시작

  console.time("계산시간");
  const answer = func(...args);
  console.timeEnd("계산시간");
  const end = performance.now(); // 측정 종료

  const end1 = new Date(); // 측정 시작

  const time = ` ${end - start}ms`;
  return answer;
}
