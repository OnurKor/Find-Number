const number = document.getElementById("input");
const screen = document.querySelector("#screen")

    // console.log(number);
    // console.log(screen);

const btn = document.querySelector("#button");
let num2 = Math.random() * 100 // random 0-1 arasında ürettiği için 100 ile çarptık
    num2 = Math.round(num2)
        
btn.addEventListener("click", () => {
    let num1 = number.value;
    // console.log(num2);
    if (num1 >= 0 && num1 <= 100) {
        if (num1 == num2) {
             screen.innerHTML = "Tebrikler :)"
        }else if (num1 > num2) {
                screen.innerHTML = "Daha Küçük Bir Sayı Giriniz :("
        }else{
            screen.innerHTML = "Daha Büyük Bir Sayı Giriniz :("
        }
    }else{
        screen.innerHTML = "Hatalı Numara";
    }
});