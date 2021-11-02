const nasb = [
  {
    text: "Do not be anxious about anything, but in everything by prayer and pleading with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all comprehension, will guard your hearts and minds in Christ Jesus.",
    citation: "Paul (Philippians 4:6-7 NASB)",
  },
  {
    text: "No one can serve two masters; for either he will hate the one and love the other, or he will be devoted to one and despise the other. You cannot serve God and wealth.",
    citation: "Jesus (Matthew 6:24 NASB)",
  },
  {
    text: "For this reason I say to you, do not be worried about your life, as to what you will eat or what you will drink; nor for your body, as to what you will put on. Is life not more than food, and the body more than clothing?",
    citation: "Jesus (Matthew 6:25 NASB)",
  },
  {
    text: " But seek first His kingdom and His righteousness, and all these things will be provided to you.",
    citation: "Jesus (Matthew 6:33 NASB)",
  },
  {
    text: "So do not worry about tomorrow; for tomorrow will worry about itself. Each day has enough trouble of its own.",
    citation: "Jesus (Matthew 6:34 NASB)",
  },
];

function postVerse(bible) {
  const n = Math.floor(Math.random() * nasb.length);
  const verse = bible[n].text;
  const citation = bible[n].citation;
  const verseP = document.querySelector("#verse");
  const citationP = document.querySelector("#citation");
  verseP.innerText = verse;
  citationP.innerText = citation;
}

postVerse(nasb);
