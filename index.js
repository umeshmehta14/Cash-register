const billA = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-give");
const checkbtn = document.querySelector("#check-btn");
const msg = document.querySelector("#error-msg");
const noOfnotes = document.querySelectorAll(".no-of-note");

const avlNotes = [ 2000, 500, 200, 100, 50, 20, 10, 5, 1];
checkbtn.addEventListener("click", function validbill() {
    msg.style.display = "none";

    if(isNaN(billA.value) || isNaN(cashGiven.value))
    {
        msgshow("please enter number");
    }


    else{

        if(billA.value > 0) {
            console.log(cashGiven.value >= billA.value)


            if(cashGiven.value <= billA.value)
            {
                const amntbertrn = cashGiven.value - billA.value;
                calculateChange(amntbertrn);
            }
            else{
                msgshow("The cash provided should atleast be equal to the bill amount");
            }
        }
        else {
            msgshow("Invalid Bill Amount");
        }
    }
    });
    function calculateChange(amntbertrn){
    for (let i = 0; i < avlNotes.length; i++) {
        const numberofnotes = Math.trunc(
            amntbertrn / avlNotes[i]
        );

        amntbertrn %= avlNotes[i];

        if(numberofnotes === 0)
        {
        }
        else{

            noOfnotes[i].innerText = numberofnotes;
        }
        
    }

}


function msgshow(message)
{
    msg.style.display = "block";
    msg.innerText = message;
}