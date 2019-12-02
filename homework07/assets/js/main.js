function setClock() {
  const now = new Date();
  const time = [now.getHours(), now.getMinutes(), now.getSeconds()];

  $('#clock').html(
    time.map((num) => {
      return num.toString().padStart(2, '0').split('').map((char) => {
        return `
          <div class="col">
            <img src="assets/image/clock/${char}.png" alt="${char}" class="number">
          </div>
        `
      }).join('');
    }).join(`
      <div class="col">
        <img src="assets/image/clock/colon.png" alt="colon" class="colon">
      </div>
    `)
  );
}
