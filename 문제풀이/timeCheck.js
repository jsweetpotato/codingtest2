const typeCheck = (target) => {
  return Object.prototype.toString.call(target).slice(8, -1);
};

export function timeCheck(func, ...args) {
  console.time("계산시간");
  const answer = func(...args);
  console.timeEnd("계산시간");
  let renderArg = "";
  [...args].forEach((v) => {
    const type = typeCheck(v);
    switch (type) {
      case "Array":
        let text = "";
        if (Array.isArray(v[0]))
          v.every((item) => {
            return (text += `[${item}]${v.at(-1) === item ? "" : ", <br>"}`);
          });
        else text = v;
        renderArg += `[${text}]`;
        break;

      default:
        renderArg += `${v} <br />`;
        break;
    }
  });

  return [renderArg, answer];
}

export function render(answer, answerBox) {
  answer.map((a) =>
    answerBox.insertAdjacentHTML(
      "beforeend",
      ` <div id="answer">
          <h3>입력</h3>
          <p>${a[0]}</p>
          <h3>출력</h3>
          <p>${a[1]}</p>
        </div>`
    )
  );
}
