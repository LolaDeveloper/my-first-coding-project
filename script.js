function freeGift() {
            let name = prompt("What is your name?");
            let email=prompt ("What is your email address?")
            let freeGift = prompt("Would you like a FREE personalised Year Ahead tarot reading?");
            freeGift= freeGift.toLowerCase( );

            if (freeGift=== "no") {
                let h3 = document.querySelector("h3");
                h3.innerHTML = "Thanks for stopping by, " + name + ". See you next time!";

                } else {
                let h3 = document.querySelector("h3");
                h3.innerHTML = "Thank you, " + name + " Please follow the link sent to your email!"

            }
             }
        

        let cardButton=document.querySelector("button");

        cardButton.addEventListener("click", freeGift);