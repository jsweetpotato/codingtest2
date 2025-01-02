const typeCheck = (target) => {
  return Object.prototype.toString.call(target).slice(8, -1);
};

export function timeCheck(func, ...args) {
  console.time("계산시간");
  const outputValue = func(...args);
  console.timeEnd("계산시간");

  let inputValue = "";
  [...args].forEach((value) => {
    const type = typeCheck(value);
    switch (type) {
      case "Array":
        let text = "";

        // 2차 배열일 경우
        if (Array.isArray(value[0]))
          value.every((item) => {
            return (text += `[${item}]${value.at(-1) === item ? "" : ", <br>"}`);
          });
        else text = value;

        inputValue += `[${text}]`;
        break;

      default:
        inputValue += `${value} <br />`;
        break;
    }
  });

  return [inputValue, outputValue];
}

export function render(answers, answerBox) {
  answers.map(([inputValue, outputValue]) =>
    answerBox.insertAdjacentHTML(
      "beforeend",
      ` <div id="answer">
          <h3>입력</h3>
          <p>${inputValue}</p>
          <h3>출력</h3>
          <p>${outputValue}</p>
        </div>`
    )
  );
}
