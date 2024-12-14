let userGuide, dialogues;
let julietAlreadyKnew = false;
const julietDialogue = {
    start: [
        "Now, nurse, what news? What hast thou there? The cords that Romeo bid thee fetch?"
    ],
    tellMeMore: [
        "Ay me, what news? Why dost thou wring thy hands?"
    ],
    heavenBeEnvious: [
        "Can heaven be so envious?"
    ],
    whatHappened: [
        "What happened?"
    ],
    whatHappenedToRomeo: [
        "O God, did Romeo's hand shed Tybalt's blood?",
        "O serpent heart hid with a flow'ring face! Did ever dragon keep so fair a cave? Beautiful tyrant, fiend angelical! Dove-feathered raven, wolvish-ravening lamb! Despisèd substance of divinest show!"
    ],
    scoldTheNurse: [
        "What devil art thou? Shaming Romeo in front of me!"
    ],
    notBornToShame: [
        "For such a wish! He was not born to shame. Upon his brow shame is ashamed to sit, for 'tis a throne where honor may be crowned. "
    ],
    isHusband: [
        "Shall I speak ill of him that is my husband?"
    ],
    whatHappenedToTybalt: [
        "What happened to Tybalt?",
        "O God, did Romeo's hand shed Tybalt's blood?"
    ],
}
const nurseDialogue = {
    start: [
        "Ay, ay, the cords."
    ],
    tellMeMore: [
        "Ah weraday, he's dead, he's dead, he's dead! We are undone, lady, we are undone. Alack the day, he's gone, he's killed, he's dead."
    ],
    heavenBeEnvious: [
        "Romeo can, Though heaven cannot. O Romeo, Romeo, whoever would have thought it? Romeo!"
    ],
    whatHappened: [
        "Tybalt is gone, and Romeo banished. Romeo that killed him, he is banished."
    ],
    whatHappenedToRomeo: [
        "It did, it did, alas the day, it did!",
        "No faith, no honesty in men. All perjured,aAll forsworn, all naught, all dissemblers. Ah, where's my man? Give me some aqua vitae. These griefs, these woes, these sorrows make me old. Shame come to Romeo!"
    ],
    scoldTheNurse: [
        "I saw the wound. I saw it with mine eyes! God saved those marks..."
    ],
    notBornToShame: [
        "Will you speak well of him that killed your cousin?"
    ],
    isHusband: [
        "..."
    ],
    whatHappenedToTybalt: [
        "Tybalt is gone! O courteous Tybalt, honest gentleman, That ever I should live to see thee dead!",
        "It did, it did, alas the day, it did!"
    ],
}
const animatedPrintSpeed = 20;
const mouseClickSound = new Audio("assets/sound/click.wav");

window.onload = () => {
    dialogues = document.getElementById("dialogues"); // This is where the text will be displayed

    addButton(dialogues, [
        {
            text: "Start",
            callback: game.start
        }
    ]);
}

const game = {
    start: async () => {
        mouseClickSound.play();

        await removeButtons(dialogues); // Remove the start button

        for (let i = 0; i < julietDialogue.start.length; i++) {
            try {
                await animatedPrint(dialogues, julietDialogue.start[i], "Juliet (You)");
                await animatedPrint(dialogues, nurseDialogue.start[i], "Nurse");
            }
            catch (err) {
                console.error("Error printing dialogue");
            }
        }

        addButton(dialogues, [
            {
                text: "Tell me more",
                callback: game.tellMeMore
            },
            {
                text: "No, I don't want to know",
                callback: game.over
            }
        ])
    },
    restart: async () => {
        mouseClickSound.play();

        await removeButtons(dialogues);

        dialogues.innerHTML = "";

        game.start();
    },
    over: async () => {
        mouseClickSound.play();

        await removeButtons(dialogues);

        const msg = document.createElement("h2");
        msg.innerHTML = "Game over!";
        dialogues.appendChild(msg);

        addButton(dialogues, [
            {
                text: "Restart",
                callback: game.restart
            }
        ]);
    },
    end: async () => {
        mouseClickSound.play();

        await removeButtons(dialogues);

        const msg = document.createElement("h2");
        msg.innerHTML = "The end!";
        dialogues.appendChild(msg);

        addButton(dialogues, [
            {
                text: "Restart",
                callback: game.restart
            }
        ]);
    },
    tellMeMore: async () => {
        mouseClickSound.play();

        await removeButtons(dialogues);

        for (let i = 0; i < julietDialogue.tellMeMore.length; i++) {
            try {
                await animatedPrint(dialogues, julietDialogue.tellMeMore[i], "Juliet (You)");
                await animatedPrint(dialogues, nurseDialogue.tellMeMore[i], "Nurse");
            }
            catch (err) {
                console.error("Error printing dialogue");
            }
        }

        addButton(dialogues, [
            {
                text: "Can heaven be envious?",
                callback: game.heavenBeEnvious
            },
            {
                text: "What happened?",
                callback: game.whatHappened
            }
        ]);
    },
    heavenBeEnvious: async () => {
        mouseClickSound.play();

        await removeButtons(dialogues);

        for (let i = 0; i < julietDialogue.heavenBeEnvious.length; i++) {
            try {
                await animatedPrint(dialogues, julietDialogue.heavenBeEnvious[i], "Juliet (You)");
                await animatedPrint(dialogues, nurseDialogue.heavenBeEnvious[i], "Nurse");
            }
            catch (err) {
                console.error("Error printing dialogue");
            }
        }

        addButton(dialogues, [
            {
                text: "Run and cry",
                callback: game.over
            },
            {
                text: "Scold the nurse",
                callback: game.scoldTheNurse
            }
        ]);
    },
    whatHappened: async () => {
        mouseClickSound.play();

        await removeButtons(dialogues);

        for (let i = 0; i < julietDialogue.whatHappened.length; i++) {
            try {
                await animatedPrint(dialogues, julietDialogue.whatHappened[i], "Juliet (You)");
                await animatedPrint(dialogues, nurseDialogue.whatHappened[i], "Nurse");
            }
            catch (err) {
                console.error("Error printing dialogue");
            }
        }

        julietAlreadyKnew = true;

        addButton(dialogues, [
            {
                text: "What happened to Romeo then?",
                callback: game.whatHappenedToRomeo
            }
        ]);
    },
    whatHappenedToRomeo: async () => {
        mouseClickSound.play();

        await removeButtons(dialogues);

        for (let i = 0; i < julietDialogue.whatHappenedToRomeo.length; i++) {
            try {
                await animatedPrint(dialogues, julietDialogue.whatHappenedToRomeo[i], "Juliet (You)");
                await animatedPrint(dialogues, nurseDialogue.whatHappenedToRomeo[i], "Nurse");
            }
            catch (err) {
                console.error("Error printing dialogue");
            }
        }

        addButton(dialogues, [
            {
                text: "Scold the nurse",
                callback: game.scoldTheNurse
            },
            {
                text: "Leave the room",
                callback: game.over
            }
        ]);
    },
    scoldTheNurse: async () => {
        mouseClickSound.play();

        await removeButtons(dialogues);

        for (let i = 0; i < julietDialogue.scoldTheNurse.length; i++) {
            try {
                await animatedPrint(dialogues, julietDialogue.scoldTheNurse[i], "Juliet (You)");
                await animatedPrint(dialogues, nurseDialogue.scoldTheNurse[i], "Nurse");
            }
            catch (err) {
                console.error("Error printing dialogue");
            }
        }

        if (!julietAlreadyKnew) {
            addButton(dialogues, [
                {
                    text: "What happened?",
                    callback: game.whatHappenedToTybalt
                },
                {
                    text: "Romeo was not born to shame",
                    callback: game.notBornToShame
                }
            ]);
        } else {
            addButton(dialogues, [
                {
                    text: "Romeo was not born to shame",
                    callback: game.notBornToShame
                }
            ]);
        }
    },
    notBornToShame: async () => {
        mouseClickSound.play();

        await removeButtons(dialogues);

        for (let i = 0; i < julietDialogue.notBornToShame.length; i++) {
            try {
                await animatedPrint(dialogues, julietDialogue.notBornToShame[i], "Juliet (You)");
                await animatedPrint(dialogues, nurseDialogue.notBornToShame[i], "Nurse");
            }
            catch (err) {
                console.error("Error printing dialogue");
            }
        }

        addButton(dialogues, [
            {
                text: "He is my husband!",
                callback: game.isHusband
            },
            {
                text: "What happened?",
                callback: game.whatHappenedToTybalt
            }
        ]);
    },
    isHusband: async () => {
        mouseClickSound.play();

        await removeButtons(dialogues);

        for (let i = 0; i < julietDialogue.isHusband.length; i++) {
            try {
                await animatedPrint(dialogues, julietDialogue.isHusband[i], "Juliet (You)");
                await animatedPrint(dialogues, nurseDialogue.isHusband[i], "Nurse");
            }
            catch (err) {
                console.error("Error printing dialogue");
            }
        }

        game.end();
    },
    whatHappenedToTybalt: async () => {
        mouseClickSound.play();

        await removeButtons(dialogues);

        for (let i = 0; i < julietDialogue.whatHappenedToTybalt.length; i++) {
            try {
                await animatedPrint(dialogues, julietDialogue.whatHappenedToTybalt[i], "Juliet (You)");
                await animatedPrint(dialogues, nurseDialogue.whatHappenedToTybalt[i], "Nurse");
            }
            catch (err) {
                console.error("Error printing dialogue");
            }
        }

        const msg = document.createElement("h2");
        msg.innerHTML = "You (Juliet) ran away!";
        dialogues.appendChild(msg);

        game.over();
    }
}

function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}

function addButton(element, buttons) {
    userGuide = document.createElement("p");
    userGuide.innerHTML = "<br>Select an option below:";
    element.appendChild(userGuide);

    for (let button of buttons) {
        const btn = document.createElement("button");
        btn.classList.add("game-button");
        btn.innerHTML = button.text;
        btn.onclick = button.callback;

        element.appendChild(btn);
    }
}

async function removeButtons(element) {
    return new Promise(async (resolve) => {
        const buttons = Array.from(element.getElementsByClassName("game-button"));

        for (const button of buttons) {
            button.disabled = true;
            for (const button of buttons) {
                button.classList.add("game-button-hidden");
            }
            await sleep(200);

            button.remove();
        }

        try {
            for (let i = 1; i >= 0; i -= 0.1) {
                userGuide.style.opacity = i;
                await sleep(20);
            }

            userGuide.remove();
        }
        catch (err) {
            console.error("User guide not found");
        }

        resolve();
    });
}

async function animatedPrint(element, msg, speaker) {
    return new Promise(async (resolve) => {
        const text = document.createElement("p");
        text.innerHTML = "<b>" + speaker + ": </b>";
        text.style.opacity = 0;
        element.appendChild(text);

        for (let i = 0; i < msg.length; i++) {
            text.innerHTML += msg.charAt(i);
            text.style.opacity = (1 / msg.length * i);
            await sleep(animatedPrintSpeed);
        }

        setTimeout(resolve, 400);
    });
}
