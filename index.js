let choice;
let point = 0;
let comp = Math.floor(Math.random() * 3) + 1;
console.log(comp);

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    const value = this.getAttribute("data-value");
    choice = value;
    console.log(choice);

    if (choice == 1) {
      if (comp == 1) {
        console.log("HÒA");
        console.log("SỐ LẦN THẮNG:", point);
      } else if (comp == 2) {
        console.log("THẮNG");
        point++;
        console.log("SỐ LẦN THẮNG:", point);
      } else if (comp == 3) {
        console.log("THUA");
        console.log("SỐ LẦN THẮNG:", point);
      }
    } else if (choice == 2) {
      if (comp == 1) {
        console.log("THẮNG");
        point++;
        console.log("SỐ LẦN THẮNG:", point);
      } else if (comp == 2) {
        console.log("Hòa");
        console.log("SỐ LẦN THẮNG:", point);
      } else if (comp == 3) {
        console.log("THUA");

        console.log("SỐ LẦN THẮNG:", point);
      }
    } else if (choice == 3) {
      if (comp == 1) {
        console.log("THUA");
        console.log("SỐ LẦN THẮNG:", point);
      } else if (comp == 2) {
        console.log("THẮNG");
        point++;
        console.log("SỐ LẦN THẮNG:", point);
      } else if (comp == 3) {
        console.log("Hòa");
        console.log("SỐ LẦN THẮNG:", point);
      }
    }
  });
});
