const btn = document.querySelector("button");
const input = document.querySelector("input");
const msg = document.querySelector(".msg");
const bar = document.querySelector(".progress-bar .bar");

let count = 0;

btn.onclick = () => {
  const value = input.value;
  msg.innerHTML = value;
  count = value;
  bar.style.width = `100%`;

  let int = setInterval(() => {
    bar.style.width = `${(100 * count) / value}%`;
    count--;
    msg.innerHTML = count;

    if (count <= 0) {
      clearInterval(int);
    }
  }, 1000);
};
