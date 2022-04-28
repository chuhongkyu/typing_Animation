const battery = document.getElementById("battery");

let batteryI = "fa-battery-"

function energy() {
  setTimeout(()=>{
    battery.classList.remove(`${batteryI}empty`);
    battery.classList.add(`${batteryI}quarter`);
  }, 1000);

  setTimeout(()=>{
    battery.classList.remove(`${batteryI}quarter`);
    battery.classList.add(`${batteryI}half`);
  }, 2000);

  setTimeout(()=>{
    battery.classList.remove(`${batteryI}half`);
    battery.classList.add(`${batteryI}full`);
  }, 3000);
  
}

energy();
setInterval(energy, 4000);