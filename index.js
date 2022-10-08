const billA = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-give");
const checkbtn = document.querySelector("#check-btn");
const msg = document.querySelector("#error-msg");
const noOfnotes = document.querySelectorAll(".no-of-note");

const avlNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
checkbtn.addEventListener("click", function validbill() {
  msg.style.display = "none";
  var bill = Number(billA.value);
  var cash = Number(cashGiven.value);

    if (isNaN(billA.value) || isNaN(cashGiven.value)) {
      msgshow("please enter number");
    } else {
      if (bill < 0 || cash < 0) {
        msgshow("Enter positive amount");
      } else {
        if (bill > 0) {
          if (cash < bill) {
            printZero();
            msgshow("Given amount should be greater than bill amount");
          } else {
            if (cash >= bill) {
              const amntbertrn = cash - bill;
              calculateChange(amntbertrn);
            } else {
              msgshow(
                "The cash provided should atleast be equal to the bill amount"
              );
            }
          }
        } else {
          msgshow("Invalid Bill Amount");
        }
      }
    }
});
function calculateChange(amntbertrn) {
  for (let i = 0; i < avlNotes.length; i++) {
    const numberofnotes = Math.trunc(amntbertrn / avlNotes[i]);

    amntbertrn %= avlNotes[i];

    if (numberofnotes === 0) {
    } else {
      noOfnotes[i].innerText = numberofnotes;
    }
  }
}

function msgshow(message) {
  msg.style.display = "block";
  msg.innerText = message;
}

function printZero() {
  for (let i = 0; i < avlNotes.length; i++) {
    noOfnotes[i].innerText = 0;
  }
}
