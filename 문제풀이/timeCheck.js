const typeCheck = (target) => {
  return Object.prototype.toString.call(target).slice(8, -1);
};

export function timeCheck(func, ...args) {
  console.time("계산시간");
  const outputValue = func(...args);
  console.timeEnd("계산시간");

  let inputValue = [];
  [...args].forEach((value, i) => {
    const type = typeCheck(value);

    switch (type) {
      case "Array":
        // 2차 배열일 경우
        if (Array.isArray(value[0])) {
          let text = "";
          value.forEach((item) => (text += `&nbsp&nbsp[${item}]${value.at(-1) === item ? "" : ", <br/>"}`));

          inputValue[i] = `[<br/>${text}<br/>] `;
        } else {
          inputValue[i] = `[${value}] `;
        }

        break;

      default:
        inputValue[i] = `${value}`;
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
           ${inputValue.map((v) => `<code>${v}</code>`).join("")}
          <h3 class="out">출력</h3>
          <p>${outputValue}</p>
        </div>`
    )
  );
}
