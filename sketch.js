// Double use bags, Art 173 Project 1: Collections
// Monica Tang, 9/22/22


let bgCol = [150, 200, 150];

const numBags = 31;
let imgs = {};
let snds = {};
let rummage = new Array();
let bags = new Array(numBags);

class Bag {
    constructor(img, sound, description) {
        this.img = img;
        this.sound = sound;
        this.description = description;
    }
}

let randomBagIndex = 0;
let randomBag;

const title = {
    line1: 'DOUBLE',
    line2: '-USE',
    line3: 'BAGS',
    x: 0,
    y: 0,
    size: window.innerHeight / 4,
    col: 'white'
}

let buttonClicked;
let buttonSound;
const button = {
    x: window.innerWidth * 0.8,
    y: window.innerHeight / 2,
    r: window.innerHeight / 8,
    col: 'white',
    line1: 'PICK',
    line2: 'A',
    line3: 'BAG',
    nameSize: window.innerHeight / 25,
    nameCol: 'blue'
}


function preload() {
    imgs["banh-mi"] = loadImage("imgs/banh-mi.png");
    imgs["brown-handle"] = loadImage("imgs/brown-handle.png");
    imgs["brown00"] = loadImage("imgs/brown00.png");
    imgs["brown01"] = loadImage("imgs/brown01.png");
    imgs["brown02"] = loadImage("imgs/brown02.png");
    imgs["brown03"] = loadImage("imgs/brown03.png");
    imgs["brown04"] = loadImage("imgs/brown04.png");
    imgs["brown05"] = loadImage("imgs/brown05.png");
    imgs["brown06"] = loadImage("imgs/brown06.png");
    imgs["crave"] = loadImage("imgs/crave.png");
    imgs["eat-healthy"] = loadImage("imgs/eat-healthy.png");
    imgs["freshroll"] = loadImage("imgs/freshroll.png");
    imgs["ikes0"] = loadImage("imgs/ikes0.png");
    imgs["ikes1"] = loadImage("imgs/ikes1.png");
    imgs["jersey-mikes0"] = loadImage("imgs/jersey-mikes0.png");
    imgs["jersey-mikes1"] = loadImage("imgs/jersey-mikes1.png");
    imgs["pb-big0"] = loadImage("imgs/pb-big0.png");
    imgs["pb-big1"] = loadImage("imgs/pb-big1.png");
    imgs["pb-tall0"] = loadImage("imgs/pb-tall0.png");
    imgs["pb-tall1"] = loadImage("imgs/pb-tall1.png");
    imgs["portos"] = loadImage("imgs/portos.png");
    imgs["produce-green"] = loadImage("imgs/produce-green.png");
    imgs["produce-zion"] = loadImage("imgs/produce-zion.png");
    imgs["reusable"] = loadImage("imgs/reusable.png");
    imgs["rrr"] = loadImage("imgs/rrr.png");
    imgs["thank-you"] = loadImage("imgs/thank-you.png");
    imgs["white00"] = loadImage("imgs/white00.png");
    imgs["white01"] = loadImage("imgs/white01.png");
    imgs["white02"] = loadImage("imgs/white02.png");
    imgs["white03"] = loadImage("imgs/white03.png");
    imgs["white04"] = loadImage("imgs/white04.png");

    snds["banh-mi"] = loadSound("sounds/banh-mi.mp3");
    snds["brown-handle"] = loadSound("sounds/brown-handle.mp3");
    snds["brown0"] = loadSound("sounds/brown0.mp3");
    snds["brown1"] = loadSound("sounds/brown1.mp3");
    snds["crave"] = loadSound("sounds/crave.mp3");
    snds["eat-healthy"] = loadSound("sounds/eat-healthy.mp3");
    snds["freshroll"] = loadSound("sounds/freshroll.mp3");
    snds["ikes"] = loadSound("sounds/ikes.mp3");
    snds["jersey-mikes"] = loadSound("sounds/jersey-mikes.mp3");
    snds["pb-big"] = loadSound("sounds/pb-big.mp3");
    snds["pb-tall"] = loadSound("sounds/pb-tall.mp3");
    snds["portos"] = loadSound("sounds/portos.mp3");
    snds["produce-green"] = loadSound("sounds/produce-green.mp3");
    snds["produce-zion"] = loadSound("sounds/produce-zion.mp3");
    snds["reusable"] = loadSound("sounds/reusable.mp3");
    snds["rrr"] = loadSound("sounds/rrr.mp3");
    snds["thank-you"] = loadSound("sounds/thank-you.mp3");
    snds["white0"] = loadSound("sounds/white0.mp3");
    snds["white1"] = loadSound("sounds/white1.mp3");

    rummage.push(loadSound("sounds/rummage0.mp3"));
    rummage.push(loadSound("sounds/rummage1.mp3"));
    rummage.push(loadSound("sounds/rummage2.mp3"));
    rummage.push(loadSound("sounds/rummage3.mp3"));
    rummage.push(loadSound("sounds/rummage4.mp3"));
    rummage.push(loadSound("sounds/rummage5.mp3"));
    rummage.push(loadSound("sounds/rummage6.mp3"));
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    imageMode(CENTER);

    resizeImages(windowHeight * 3 / 4);

    bags[0] = new Bag(imgs["banh-mi"], snds["banh-mi"], "bag from Banh Mi & Rolls Factory");
    bags[1] = new Bag(imgs["brown-handle"], snds["brown-handle"], "bag with a handy handle");
    bags[2] = new Bag(imgs["brown00"], snds["brown0"], "brown bag from Cheese 'n Stuff");
    bags[3] = new Bag(imgs["brown01"], snds["brown1"], "just a brown paper bag");
    bags[4] = new Bag(imgs["brown02"], snds["brown0"], "classic brown bag");
    bags[5] = new Bag(imgs["brown03"], snds["brown1"], "whoops this one got ripped");
    bags[6] = new Bag(imgs["brown04"], snds["brown0"], "bog standard brown bag");
    bags[7] = new Bag(imgs["brown05"], snds["brown1"], "wow, it's a bag");
    bags[8] = new Bag(imgs["brown06"], snds["brown0"], "this once held a sandwich");
    bags[9] = new Bag(imgs["crave"], snds["crave"], "huge brown bag from Crave Subs");
    bags[10] = new Bag(imgs["eat-healthy"], snds["eat-healthy"], "eat healthy and enjoy life i guess");
    bags[11] = new Bag(imgs["freshroll"], snds["freshroll"], "they gave this to me for free");
    bags[12] = new Bag(imgs["ikes0"], snds["ikes"], "from the Ike's on College Ave");
    bags[13] = new Bag(imgs["ikes1"], snds["ikes"], "love then sandwiches..");
    bags[14] = new Bag(imgs["jersey-mikes0"], snds["jersey-mikes"], "an oxymoron in the wild!");
    bags[15] = new Bag(imgs["jersey-mikes1"], snds["jersey-mikes"], "a regular #2 Jersey Shore's Favorite, Mike's way, with cherry pepper relish, to-go");
    bags[16] = new Bag(imgs["pb-big0"], snds["pb-big"], "can't believe they don't charge extra for these bags");
    bags[17] = new Bag(imgs["pb-big1"], snds["pb-big"], "a navy blue bag with white lettering");
    bags[18] = new Bag(imgs["pb-tall0"], snds["pb-tall"], "there are handles hidden on the inside");
    bags[19] = new Bag(imgs["pb-tall1"], snds["pb-tall"], "blue baris baguette boulangerie bag");
    bags[20] = new Bag(imgs["portos"], snds["portos"], "milk n berries cake yum");
    bags[21] = new Bag(imgs["produce-green"], snds["produce-green"], "green produce bag, compact form");
    bags[22] = new Bag(imgs["produce-zion"], snds["produce-zion"], "produce bag from Zion Supermarket, compact form");
    bags[23] = new Bag(imgs["reusable"], snds["reusable"], "it says it's reusable");
    bags[24] = new Bag(imgs["rrr"], snds["rrr"], "reduce, reuse & recycle! okay!");
    bags[25] = new Bag(imgs["thank-you"], snds["thank-you"], "please recycle this bag, THANK YOU.");
    bags[26] = new Bag(imgs["white00"], snds["white0"], "just a white paper bag");
    bags[27] = new Bag(imgs["white01"], snds["white1"], "white bag from Cheese 'n Stuff");
    bags[28] = new Bag(imgs["white02"], snds["white0"], "you're telling me this paper bag weighs 4 LB?? no way...");
    bags[29] = new Bag(imgs["white03"], snds["white1"], "white paper bag. typical.");
    bags[30] = new Bag(imgs["white04"], snds["white0"], "oobf. big rip.");
}
  
function draw() {
    background(bgCol);

    textAlign(LEFT);
    textStyle(BOLD);
    textSize(title.size);
    fill(title.col);
    text(title.line1, title.x, title.y + title.size);
    text(title.line2, title.x, title.y + 2 * title.size);
    fill('blue');
    text(title.line3, title.x, title.y + 3 * title.size);

    randomBag = bags[randomBagIndex];
    image(randomBag.img, windowWidth/2, windowHeight/2);
    fill('yellow');
    textAlign(LEFT);
    textWrap(WORD);
    textSize(button.nameSize * 4 / 5);
    text(randomBag.description, windowWidth * 0.65, windowHeight * 0.75, windowWidth / 3);

    noStroke();
    fill(button.col);
    if (buttonClicked && buttonSound.isPlaying()) {
        circle(button.x + random(-3, 3), button.y, button.r * 2);
    }
    else {
        circle(button.x, button.y, button.r * 2);
        buttonClicked = false;
    }
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(button.nameSize);
    fill(button.nameCol)
    text(button.line1, button.x, button.y - button.nameSize / 2);
    text(button.line2, button.x, button.y + button.nameSize / 2);
    text(button.line3, button.x, button.y + 3 * button.nameSize / 2);

}

function resizeImages(newHeight) {
    for (const [key, val] of Object.entries(imgs)) {
        imgs[key].resize(0, newHeight);
    }
}

function mousePressed() {
    let img = randomBag.img;
    let centerX = windowWidth / 2;
    let centerY = windowHeight / 2;
    console.log("mouse", mouseX, mouseY);
    
    if ( abs(mouseX - centerX) < (img.width / 2) && abs(mouseY - centerY) < (img.height / 2) ) {
        console.log('Bag clicked');
        randomBag.sound.play();
    } 

    if ( abs(mouseX - button.x)**2 + abs(mouseY - button.y)**2 <= button.r**2) {
        console.log('Button clicked')
        let index = floor(random() * rummage.length);
        console.log('Rummage sound index:', index);
        rummage[index].play();
        buttonClicked = true;
        buttonSound = rummage[index];
        rummage[index].onended(getNewBag);
    }
}

function getNewBag() {
    randomBagIndex = Math.floor(Math.random() * numBags);
    console.log('New bag index:', randomBagIndex);
}