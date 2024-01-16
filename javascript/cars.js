const x1 = document.querySelector("#x1");
const x2 = document.querySelector("#x2");
const x3 = document.querySelector("#x3");
const x4 = document.querySelector("#x4");
const x5 = document.querySelector("#x5");
const x6 = document.querySelector("#x6");

x1.addEventListener("click", () => {
  document.getElementById("theImage").src =
    "./imgs/audia1.d038cf70b700e34e607a.png";

  let audi = document.getElementById("carName");
  audi.innerText = "Audi";

  let audiModel = document.getElementById("carModel");
  audiModel.innerText = "A1";

  let audiYear = document.getElementById("carYear");
  audiYear.innerText = "2014";

  let audiTransmition = document.getElementById("carTransmition");
  audiTransmition.innerText = "Automatik";

  let audiFuel = document.getElementById("carFuel");
  audiFuel.innerText = "Naftë";

  let audiPrice = document.getElementById("priceCar");
  audiPrice.innerText = "70€";

  x3.classList.remove("colored-box");
  x2.classList.remove("colored-box");
  x4.classList.remove("colored-box");
  x5.classList.remove("colored-box");
  x6.classList.remove("colored-box");
  x1.classList.add("colored-box");
});

x2.addEventListener("click", () => {
  document.getElementById("theImage").src =
    "./imgs/golf6.595c0bbfc7ce2e50aa05.jpg";

  let golfSix = document.getElementById("carName");
  golfSix.innerText = "Golf";

  let golfModel = document.getElementById("carModel");
  golfModel.innerText = "6";

  let golfYear = document.getElementById("carYear");
  golfYear.innerText = "2010";

  let golfTransmition = document.getElementById("carTransmition");
  golfTransmition.innerText = "Manual";

  let golfFuel = document.getElementById("carFuel");
  golfFuel.innerText = "Naftë";

  let golfPrice = document.getElementById("priceCar");
  golfPrice.innerText = "30€";

  x1.classList.remove("colored-box");
  x3.classList.remove("colored-box");
  x4.classList.remove("colored-box");
  x5.classList.remove("colored-box");
  x6.classList.remove("colored-box");
  x2.classList.add("colored-box");
});

x3.addEventListener("click", () => {
  document.getElementById("theImage").src =
    "./imgs/toyotacamry.3d493a56558c50b677cc.jpg";

  let toyota = document.getElementById("carName");
  toyota.innerText = "Toyota";

  let toyotaModel = document.getElementById("carModel");
  toyotaModel.innerText = "Camry";

  let toyotaYear = document.getElementById("carYear");
  toyotaYear.innerText = "2012";

  let toyotaTransmition = document.getElementById("carTransmition");
  toyotaTransmition.innerText = "Manual";

  let toyotaFuel = document.getElementById("carFuel");
  toyotaFuel.innerText = "Benzinë";

  let toyotaPrice = document.getElementById("priceCar");
  toyotaPrice.innerText = "20€";

  x1.classList.remove("colored-box");
  x2.classList.remove("colored-box");
  x4.classList.remove("colored-box");
  x5.classList.remove("colored-box");
  x6.classList.remove("colored-box");
  x3.classList.add("colored-box");
});

x4.addEventListener("click", () => {
  document.getElementById("theImage").src =
    "./imgs/bmw320.84ab73b0c9133418f907.jpg";

  let bmw = document.getElementById("carName");
  bmw.innerText = "BMW";

  let bmwModel = document.getElementById("carModel");
  bmwModel.innerText = "320";

  let bmwYear = document.getElementById("carYear");
  bmwYear.innerText = "2011";

  let bmwTransmition = document.getElementById("carTransmition");
  bmwTransmition.innerText = "Automatik";

  let bmwFuel = document.getElementById("carFuel");
  bmwFuel.innerText = "Benzinë";

  let bmwPrice = document.getElementById("priceCar");
  bmwPrice.innerText = "40€";

  x1.classList.remove("colored-box");
  x2.classList.remove("colored-box");
  x3.classList.remove("colored-box");
  x5.classList.remove("colored-box");
  x6.classList.remove("colored-box");
  x4.classList.add("colored-box");
});

x5.addEventListener("click", () => {
  document.getElementById("theImage").src =
    "./imgs/benz.0a6153731a2c1a68054a.jpg";
  let benz = document.getElementById("carName");
  benz.innerText = "Mercedes-Benz";

  let benzModel = document.getElementById("carModel");
  benzModel.innerText = "GLK";

  let benzYear = document.getElementById("carYear");
  benzYear.innerText = "2012";

  let benzTransmition = document.getElementById("carTransmition");
  benzTransmition.innerText = "Automatik";

  let benzFuel = document.getElementById("carFuel");
  benzFuel.innerText = "Benzinë";

  let benzPrice = document.getElementById("priceCar");
  benzPrice.innerText = "35€";

  x1.classList.remove("colored-box");
  x2.classList.remove("colored-box");
  x4.classList.remove("colored-box");
  x3.classList.remove("colored-box");
  x6.classList.remove("colored-box");
  x5.classList.add("colored-box");
});

x6.addEventListener("click", () => {
  document.getElementById("theImage").src =
    "./imgs/passatcc.bd82bd1deac8c11e3c4d.jpg";

  let pasatt = document.getElementById("carName");
  pasatt.innerText = "Passat";

  let pasattModel = document.getElementById("carModel");
  pasattModel.innerText = "CC";

  let pasattYear = document.getElementById("carYear");
  pasattYear.innerText = "2015";

  let pasattTransmition = document.getElementById("carTransmition");
  pasattTransmition.innerText = "Manual";

  let pasattFuel = document.getElementById("carFuel");
  pasattFuel.innerText = "Benzinë";

  let pasattPrice = document.getElementById("priceCar");
  pasattPrice.innerText = "40€";

  x1.classList.remove("colored-box");
  x2.classList.remove("colored-box");
  x4.classList.remove("colored-box");
  x3.classList.remove("colored-box");
  x5.classList.remove("colored-box");
  x6.classList.add("colored-box");
});
