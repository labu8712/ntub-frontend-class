function now() {
  document.getElementById('now-result').innerHTML = `-- 更新時間為： ${Date()}`;
}

function p1() {
  let side = parseFloat(prompt('請輸入正方形邊長 (公分)：', 0));
  let result = side * side;
  document.getElementById('p1-result').innerHTML = `-- 正方形面積為 ${result} 平方公分`;
}

function p2() {
  let radius = parseFloat(prompt('請輸入圓形半徑 (公分)：', 0));
  let result = radius * radius * Math.PI;
  document.getElementById('p2-result').innerHTML = `-- 圓形面積為 ${result} 平方公分`;
}

function p3() {
  let w = parseFloat(prompt('請輸入三角形的底 (公分)：', 0));
  let h = parseFloat(prompt('請輸入三角形的高 (公分)：', 0));
  let result = w * h / 2;
  document.getElementById('p3-result').innerHTML = `-- 三角形面積為 ${result} 平方公分`;
}

function setP4() {
  let colorList = ['red', 'green', 'blue'];
  let index = Math.floor(Math.random() * 3);
  let color = colorList[index];
  let element = document.getElementById('p4-topic');
  element.style.backgroundColor = color;
  element.setAttribute('data-ans', color);
}

function p4() {
  let ans = document.getElementById('p4-topic').getAttribute('data-ans');
  let ansName = document.getElementById(`p4-${ans}-label`).innerHTML;
  let element = document.getElementById(`p4-${ans}`);
  document.getElementById('p4-result').innerHTML = element.checked ? '答對了' : `答錯了，是${ansName}喔`;
}

function p5() {
  let ans = document.getElementById('p5-animal').value;
  document.getElementById('p5-result').innerHTML = ans === 'panda' ? '答對了' : '答錯了，答案是熊貓';
}

function p6() {
  let number = parseInt(prompt('您的答案', 0));
  document.getElementById('p6-result').innerHTML = number == 21 ? '答對了' : '答錯了，答案是 21';
}

function p7() {
  let number = parseInt(prompt('請輸入數字', 0));
  let result = number % 2 === 0 ? '偶數' : '奇數';
  document.getElementById('p7-result').innerHTML = `${number} 是${result}`;
}

function p8() {
  let number = parseInt(prompt('請輸入數字', 0));

  // let result = 0;
  // for (let i = 1; i <= number; i++) {
  //   result += i;
  // }

  let result = (1 + number) * number / 2;
  document.getElementById('p8-result').innerHTML = `答案是 ${result}`;
}

function p9() {
  let c = parseFloat(prompt('請輸入溫度 (攝氏)', 0));
  let f = 9 / 5 * c + 32;
  document.getElementById('p9-result').innerHTML = `攝氏 ${c} 度是 華氏 ${f} 度`;
}

function p10() {
  let year = parseInt(prompt('請輸入年分', 0));
  let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 4000 !== 0);
  document.getElementById('p10-result').innerHTML = `${year} 是 ${isLeapYear ? '閏年': '平年'}`;
}
