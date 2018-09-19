var cloneQuotes = [
    "We're losing reinforcements!",
    "The Separatists are depleting our reinforcements",
    "The Separatists have cut off our reinforcements",
    "They're losing reinforcements",
    "Their reinforcements are being depleted",
    "We've cut off the Separatist reinforcements",
    "We captured a command post.",
    "We've lost a command post.",
    "We've captured the carbon freezing chamber",
    "We've captured the Spire",
    "We've lost the Spire",
    "We lost the carbon freezing chamber",
    "Enemy forces have captured a command post.",
    "Victory is imminent!",
    "Choose a planet for the rebellion to begin.",
    "Destroy the techno union ships",
    "We're losing reinforcements!",
    "The Separatists are depleting our reinforcements",
    "The Separatists have cut off our reinforcements",
    "They're losing reinforcements",
    "Their reinforcements are being depleted",
    "We've cut off the Separatist reinforcements",
    "We captured a command post.",
    "We've lost a command post.",
    "We've captured the carbon freezing chamber",
    "We've captured the Spire",
    "We've lost the Spire",
    "We lost the carbon freezing chamber",
    "Enemy forces have captured a command post.",
    "Victory is imminent!",
    "Choose a planet for the rebellion to begin.",
    "Destroy the techno union ships",
    "It's Grievous, hit him from all sides!",
    "The Emperor has joined the fray.",
    "They've got supers!",
    "Darth Maul? What's he going to do, bleed on us?",
    "It's Darth Maul; stay back!",
    "Watch out for that Dual Blade!",
    "It's Jango, and he brought his head with him!",
    "Yeah! Now you got it!",
    "GAMORREANS!",
    "SNIPER!",
    "One shot, one kill.",
    "The bigger they are; the harder they fall!",
    "We've got Droidekas!",
    "Grenade, Grenade!",
    "For the Chancellor!",
    "Ow! Was it something I said?",
    "Turrets. Take 'em down!",
    "Incoming!",
    "No one messes with the 501st!",
    "They're sending in the Supers!",
    "Watch your fire!",
    "Super Battle Droid! Take it down!",
    "Take out that Hailfire.",
    "That's the way it's done!",
    "We've got Spider Droids.",
    "Take out that Super!",
    "Grenade! Get down!",
    "Just like the simulations.",
    "Keep going!",
    "Take out that Battle Droid!",
    "Watch those wrist rockets.",
    "Keep up the assault!",
    "For the Republic!",
    "Take out that sniper.",
    "Good shot!",
    "Clone! watch your fire!",
    "Friendly fire!",
    "Save it for the enemy!",
    "Ammo, health.",
    "Heal up soldier"

];

var yodaQuotes = [
    "Faith in your new apprentice, misplaced may be. As is your faith in the dark side of the Force.",
    "Decide you must, how to serve them best. If you leave now, help them you could; but you would destroy all for which they have fought, and suffered.",
    "Hmm. In the end, cowards are those who follow the dark side.",
    "Do not assume anything Obi-Wan. Clear your mind must be if you are to discover the real villains behind this plot.",
    "Yes, a Jedis strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wans apprentice.",
    "Pain, suffering, death I feel. Something terrible has happened. Young Skywalker is in pain. Terrible pain.",
    "The boy you trained, gone he is. Consumed by Darth Vader.",
    "Difficult to see. Always in motion is the future...",
    "Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall.",
    "You must unlearn what you have learned.",
    "When nine hundred years old you reach, look as good, you will not, hmmm?"
];

var author = [
    "—Unknown 501st Clone Trooper",
    "—Jedi Master Yoda"
];



function getQuote() {
    var randomNumber = Math.floor(Math.random() * cloneQuotes.length);
    document.getElementById('quote').innerHTML = cloneQuotes[randomNumber];
    document.getElementById('author').innerHTML = author[0];
}

function getYodaQuote() {
    var randomN = Math.floor(Math.random() * yodaQuotes.length);
    document.getElementById('quote').innerHTML = yodaQuotes[randomN];
    document.getElementById('author').innerHTML = author[1];
}

var tweetBtn = document.getElementById('quote');

tweetBtn.addEventListener('mousedown', function(event) {
    console.log(tweetBtn);
    window.open('https://twitter.com/intent/tweet?text=' + cloneQuotes + '&hashtags=StarWarsInspiration');
});