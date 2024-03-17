function Btnroll() {
  const inputFilels = document.getElementById("inputFilels").value;
  const rollerValue = document.getElementById("rollerValue");
  const imagebox = document.getElementById("imagebox");

  const values = [];
  const images = [];

  for (let i = 1; i <= inputFilels; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    values.push(randomNumber);
    images.push(`<img src="assests/${randomNumber}.svg" >`);
  }

  rollerValue.textContent = `dice : ${values.join(", ")}`;
  imagebox.innerHTML = images.join("");
  console.log(images);
}
