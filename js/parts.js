/*----------------------------Products----------------------*/
let productsDB = [
  {
    id: 0,
    title: `The Fool - 0`,
    price: 69.99,
    location: `cards/thefool.png`,
    description: `It doesn't have a specific number, and it is placed in front of 1 with no fixed position. The real meaning of the name "FOOL" does not actually mean "fool" but "one who excels in a certain field".`,
    fav: false,
  },
  {
    id: 1,
    title: `The Magician - 1`,
    price: 69.99,
    location: `cards/themagician.png`,
    description: `The stick in his hand represents imagination, the sword on the tabletop represents effort and difficulty, the gold coins represent skill and accomplishment, and the chalice represents the depth of his passions. On his head is the symbol for infinity.`,
    fav: false,
  },
  {
    id: 2,
    title: `The High Priestess - 2`,
    price: 69.99,
    location: `cards/thehighpriestess.png`,
    description: `It is also known as "The Chief Priestess". It is a card that represents calm behavior and deep thought, which are shown by the Book of the Law of Thoth, the God of Wisdom, held in her hand.`,
    fav: false,
  },
  {
    id: 3,
    title: `The Empress - 3`,
    price: 69.99,
    location: `cards/theempress.png`,
    description: `The crown symbolizes that she is an empress. At the same time, she reveals her bosom, showing that she is a woman and a mother. It is a card that represents grace and the power of reproduction.`,
    fav: false,
  },
  {
    id: 4,
    title: `The Emperor - 4`,
    price: 69.99,
    location: `cards/theemperor.png`,
    description: `This card represents strength and ambition. The number of the card signifies the stability of everything, and also hints to the four elements of the material world: fire, water, earth, air, and the four seasons.`,
    fav: false,
  },
  {
    id: 5,
    title: `The Heirophant - 5`,
    price: 69.99,
    location: `cards/theheirophant.png`,
    description: `The Hierophant is a card that heralds open-mindedness and assistance, and refers to an ancient Greek priest. It also determines all the good omens in nature, such as the growth of grains.`,
    fav: false,
  },
  {
    id: 6,
    title: `The Lovers - 6`,
    price: 69.99,
    location: `cards/thelovers.png`,
    description: `This card shows the occurrence of love, physical development, etc. Usually it shows two young and beautiful men and women in love, but for some reason, this card shows three of them.`,
    fav: false,
  },
  {
    id: 7,
    title: `The Chariot - 7`,
    price: 69.99,
    location: `cards/thechariot.png`,
    description: `The chariot depicted here is a two-wheeled vehicle that was used in battle and competition in ancient times. It is also a strong card that heralds victory, overcoming all obstacles.`,
    fav: false,
  },
  {
    id: 8,
    title: `Strength - 8`,
    price: 69.99,
    location: `cards/strength.png`,
    description: `The card shows determination and courage through the appearance of a man prying open the mouth of a lion, the king of beasts. He also has a symbol above him to indicate infinity.`,
    fav: false,
  },
  {
    id: 9,
    title: `The Hermit - 9`,
    price: 69.99,
    location: `cards/thehermit.png`,
    description: `He is also called "The Wise Man" and "The Alchemist". The word "hermit" doesn't mean "recluse" but "one who hides secret knowledge," and in his hand is a lamp in the shape of a five-pointed star.`,
    fav: false,
  },
  {
    id: 10,
    title: `Wheel of Fortune - 10`,
    price: 69.99,
    location: `cards/thewheel.png`,
    description: `A card that indicates that fate will change. The "Ouroboros" serpent trying to swallow its own tail represents time and eternal fate, and that all events are in a cycle of reincarnation.`,
    fav: false,
  },
  {
    id: 11,
    title: `Justice - 11`,
    price: 69.99,
    location: `cards/justice.png`,
    description: `The scales in the left hand is for fairness and balance, and the sword in the right hand is for condemning those who corrupt justice. She is also known as the "Goddess of Justice," a card that represents righteous deeds.`,
    fav: false,
  },
  {
    id: 12,
    title: `The Hanged Man - 12`,
    price: 69.99,
    location: `cards/thehangedman.png`,
    description: `This card is also known as "The Hangman". The man's crossed legs represent the number "4" and his arms represent the number "3". The answer of the multiplication of 4 and 3 embodies the twelve constellations.`,
    fav: false,
  },
  {
    id: 13,
    title: `Death - 13`,
    price: 69.99,
    location: `cards/death.png`,
    description: `It depicts the Grim Reaper with a large scythe in his hand. Thirteen is an unlucky number, though it may not be depending on the card. It can also mean "a chance for rebirth," as it brings about great change.`,
    fav: false,
  },
  {
    id: 14,
    title: `The Temperance - 14`,
    price: 69.99,
    location: `cards/temperance.png`,
    description: `The vessel on the left of the angel symbolizes existence, and the vessel on the right symbolizes recognition. The liquid that is poured from left to right and from right to left without withering is said to be the essence of life.`,
    fav: false,
  },
  {
    id: 15,
    title: `The Devil - 15`,
    price: 69.99,
    location: `cards/thedevil.png`,
    description: `One of the most sinister cards. The torch that the devil has in his left hand represents destruction and curses, and the imps that are chained represent the weakness of a human being who has not refused temptation.`,
    fav: false,
  },
  {
    id: 16,
    title: `The Tower - 16`,
    price: 69.99,
    location: `cards/thetower.png`,
    description: `This is a card that suggests danger and failure, and has many names, such as "Tower of Lightning" and "Lightning Bolt". The tower is said to be the Tower of Babel, the biblical tower where man's wisdom was destroyed by the wrath of God.`,
    fav: false,
  },
  {
    id: 17,
    title: `The Star - 17`,
    price: 69.99,
    location: `cards/thestar.png`,
    description: `It suggests a bright future ahead and profound insight. The large star overhead indicates Aquarius, and the water flowing from the two jugs into the Nile are the essence of creation.`,
    fav: false,
  },
  {
    id: 18,
    title: `The Moon - 18`,
    price: 69.99,
    location: `cards/themoon.png`,
    description: `This card implies trouble in water, insecurity, lies, betrayal, and fear of the unknown. The scorpion lurking in the water seems to represent the dangers of the world at night (the unknown).`,
    fav: false,
  },
  {
    id: 19,
    title: `The sun - 19`,
    price: 69.99,
    location: `cards/thesun.png`,
    description: `With its light and heat, the sun represents the power that protects all life. The ancient Egyptians worshipped the sun god Ra as the god of human creation. Here, too, that Ra is depicted.`,
    fav: false,
  },
  {
    id: 20,
    title: `Judgement - 20`,
    price: 69.99,
    location: `cards/judgement.png`,
    description: `According to ancient Egyptian religion, after the "judgment" in the afterlife, the dead live happily under the sun god Ra. Perhaps this card represents the joy of the afterlife with people dancing and singing.`,
    fav: false,
  },
  {
    id: 21,
    title: `The World - 21`,
    price: 69.99,
    location: `cards/theworld.png`,
    description: `The four elements of the material world, water, fire, earth, and air, are arranged to look like a bull, lion, eagle, and angel. In other words, it is a card that shows the perfect thing, the completion of everything, and the entire universe. This card is the only one that does not have "Lucky Land" written on it.`,
    fav: false,
  },
];
if (!localStorage.getItem(`products`)) {
  localStorage.setItem(`products`, JSON.stringify(productsDB));
}
let products = JSON.parse(localStorage.getItem(`products`));
/*---------------------Header-----------------------*/
let headerContent = `
<div class="sizing-container">
        <div class="header-content">
          <a href="index.html" class="brand">Stand Store</a>
          <nav class="nova">
            <ul id="pre-sign">
              <li><a href="login.html">Sign In</a></li>
              <li><a href="register.html">Sign Up</a></li>
            </ul>
            <ul id="post-sign">
              <li><a href=profile.html#" id="nav-username"></a></li>
              <li id="logout"><a href="#">Logout</a></li>
              <li id="logged-cart">
              <div class="your-cart">
                <a href="#" onclick="window.location = 'cart.html';">
                Your Cart <i class="fa-solid fa-cart-arrow-down"></i>
                </a>
              </div>
              <div class="mini-cart">No items selected</div>
              </li>
              <li><div id="badge"></div></li> 
          </nav>
        </div>
        <input type="text" class="nova" id="search" placeholder="Search"/>
        <!-- ./header-content -->
      </div>
      <!-- ./sizing-container -->
`;
let header = document.querySelector(`#main-header`);
if (header) {
  header.innerHTML = headerContent;
}

if (window.location.href.indexOf(`index.html`) !== -1) {
  document.querySelector(`#search`).style.opacity = `1`;
  document.querySelector(`#search`).style.visibility = `visible`;
}
/*---------------------Login Alert-----------------------*/
let alert1 = `
<div class="alert nova abs" id="wrong-alert">
Either email or password are incorrect
</div>
<div class="alert nova abs" id="fill-alert">
You must fill the whole form
</div>
`;
let logAlerts = document.querySelector(`#log-alerts`);
if (logAlerts) {
  logAlerts.innerHTML = alert1;
}
/*---------------------Register Alert-----------------------*/
let alert2 = `
<div class="alert nova abs" id="fill-alert">
You must fill the whole form
</div>
<div class="alert nova abs" id="pass-alert">
Your passwords do not match
</div>
<div class="alert nova abs" id="email-alert">
Please enter a valid email
</div>
<div class="alert nova abs" id="email2-alert">
This email is already registered
</div>
<div class="alert nova abs" id="uname-alert">
This username is already taken
</div>
`;
let regAlerts = document.querySelector(`#reg-alerts`);
if (regAlerts) {
  regAlerts.innerHTML = alert2;
}

/*---------------------General Functions-----------------------*/
