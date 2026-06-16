export type Command = {
  id: string;
  level: 1 | 2 | 3 | 4 | 5;
  category: string;
  command: string; // {A} and {B} are placeholders for player names
  duration_seconds: number | null;
  requires_props: string[];
  target_count: 1 | 2 | 3;
  tags: string[]; // which consented_tags this command needs
};

export const COMMANDS: Command[] = [
  // ─── LEVEL 1 — ZACHT ──────────────────────────────────────────────────────
  {
    id: "l1-01", level: 1, category: "oogcontact", tags: ["Aanraken"],
    command: "Fluister in het oor van {A}: \"Ik heb vannacht aan je gedacht.\" {A} mag niet reageren.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l1-02", level: 1, category: "aanraking", tags: ["Aanraken"],
    command: "Trek {A} langzaam naar je toe aan één vinger. Houd 3 seconden oogcontact. Laat los.",
    duration_seconds: 15, requires_props: [], target_count: 2,
  },
  {
    id: "l1-03", level: 1, category: "aanraking", tags: ["Aanraken"],
    command: "Strijk met de rug van je hand langzaam over de wang van {A}. Herhaal drie keer. Nu andersom.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l1-04", level: 1, category: "bekentenis", tags: ["Kussen"],
    command: "Zeg hardop aan de groep: \"Het lichaamsdeel van {A} dat ik het liefst zou aanraken is...\" Maak de zin af.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l1-05", level: 1, category: "aanraking", tags: ["Aanraken"],
    command: "Ga achter {A} staan. Leg je handen op haar/zijn schouders. Adem 5 tellen lang langzaam in haar/zijn nek.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l1-06", level: 1, category: "kledingstuk", tags: ["Exhibitionisme"],
    command: "Knoop het bovenste knoopje van je eigen shirt los terwijl je {A} recht in de ogen kijkt. Niet wegkijken.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l1-07", level: 1, category: "aanraking", tags: ["Aanraken"],
    command: "Vraag {A}: \"Mag ik je hand vasthouden?\" Wacht op antwoord. Als ja: houd vast tot de timer afgaat.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l1-08", level: 1, category: "aanraking", tags: ["Aanraken"],
    command: "Trek een schoen en sok uit bij {A}. Masseer haar/zijn voet 20 seconden lang.",
    duration_seconds: 20, requires_props: [], target_count: 2,
  },
  {
    id: "l1-09", level: 1, category: "oogcontact", tags: ["Aanraken"],
    command: "Ga recht voor {A} staan, zo dicht dat jullie elkaars adem voelen. Kijk elkaar aan. Geen woorden, geen glimlach. 60 seconden.",
    duration_seconds: 60, requires_props: [], target_count: 2,
  },
  {
    id: "l1-10", level: 1, category: "aanraking", tags: ["Aanraken"],
    command: "Strijk een pluk haar uit het gezicht van {A}. Aai daarna één keer langzaam over haar/zijn wang.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l1-11", level: 1, category: "fluisteren", tags: ["Aanraken"],
    command: "Fluister {A} drie dingen in het oor die je écht mooi aan haar/hem vindt. Langzaam. Eén voor één.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l1-12", level: 1, category: "aanraking", tags: ["Aanraken"],
    command: "Leg je hoofd op de schouder van {A} en sluit je ogen. Blijf 30 seconden zo zitten. {A} mag niet bewegen.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l1-13", level: 1, category: "handen", tags: ["Aanraken"],
    command: "Neem de handen van {A} in de jouwe. Bestudeer ze langzaam. Benoem één ding dat je opvalt. Zeg het zacht.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l1-14", level: 1, category: "nekzoen", tags: ["Kussen"],
    command: "Druk één zachte kus op de nek van {A}. Niet verder. Niet langer. Net één.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l1-15", level: 1, category: "bekentenis", tags: [],
    command: "Zeg hardop: \"De meest aantrekkelijke persoon in deze kamer is {A}, en dit is waarom...\" Maak de zin af.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l1-16", level: 1, category: "aanraking", tags: ["Aanraken"],
    command: "Teken met je vingertop een langzame lijn van de schouder van {A} naar haar/zijn pols. Herhaal 3 keer.",
    duration_seconds: 20, requires_props: [], target_count: 2,
  },
  {
    id: "l1-17", level: 1, category: "oogcontact", tags: [],
    command: "{A} en jij houden een wedstrijdje oogcontact. Wie het eerst knippert verliest. De verliezer kiest een verbeuring.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l1-18", level: 1, category: "aanraking", tags: ["Aanraken"],
    command: "Masseer de schouders van {A} gedurende 45 seconden. Geen woorden. Alleen handen.",
    duration_seconds: 45, requires_props: [], target_count: 2,
  },
  {
    id: "l1-19", level: 1, category: "kuss", tags: ["Kussen"],
    command: "Druk een kus op de handpalm van {A}. Vouw haar/zijn vingers eromheen. Zeg: \"Bewaar dat.\"",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l1-20", level: 1, category: "aanraking", tags: ["Aanraken"],
    command: "Kniel voor {A}. Houd 10 seconden oogcontact vanuit die positie zonder iets te zeggen of te doen.",
    duration_seconds: 10, requires_props: [], target_count: 2,
  },
  {
    id: "l1-21", level: 1, category: "fluisteren", tags: [],
    command: "Fluister {A} iets toe dat je nog nooit hardop hebt gezegd. Het hoeft niet pikant te zijn — alleen eerlijk.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l1-22", level: 1, category: "aanraking", tags: ["Aanraken"],
    command: "Veeg een denkbeeldige vlek van het gezicht van {A}. Langzaam. Zorgvuldig. Alsof het echt is.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l1-23", level: 1, category: "handen", tags: ["Aanraken"],
    command: "Speel 60 seconden lang met de haren van {A}. Geen hasten. Jij bepaalt het tempo.",
    duration_seconds: 60, requires_props: [], target_count: 2,
  },
  {
    id: "l1-24", level: 1, category: "bekentenis", tags: [],
    command: "Vertel de groep: de laatste keer dat {A} je opwond zonder het te weten. Wat deed ze/hij precies?",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l1-25", level: 1, category: "aanraking", tags: ["Aanraken"],
    command: "Leg je hand plat op de rug van {A}. Beweeg één keer langzaam van schouderbladen naar taille. Haal weg.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },

  // ─── LEVEL 2 — WARM ───────────────────────────────────────────────────────
  {
    id: "l2-01", level: 2, category: "kledingstuk", tags: ["Exhibitionisme"],
    command: "Trek je eigen shirt uit. Blijf 2 minuten zo voor de groep staan. Geen handen voor je lichaam.",
    duration_seconds: 120, requires_props: [], target_count: 1,
  },
  {
    id: "l2-02", level: 2, category: "kussen", tags: ["Kussen", "Aanraken"],
    command: "Lik de hals van {A} van oor tot sleutelbeen. Langzaam. Één keer.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l2-03", level: 2, category: "handen", tags: ["Aanraken"],
    command: "Stop je hand onder de broek van {A} — over de stof van het ondergoed heen. Beweeg langzaam 20 seconden. Dan eruit.",
    duration_seconds: 20, requires_props: [], target_count: 2,
  },
  {
    id: "l2-04", level: 2, category: "kussen", tags: ["Kussen"],
    command: "Zoen {A} op de mond. 10 seconden. Mond open. Geen handen. Alleen lippen.",
    duration_seconds: 10, requires_props: [], target_count: 2,
  },
  {
    id: "l2-05", level: 2, category: "kledingstuk", tags: ["Exhibitionisme"],
    command: "Trek bij {A} de broek of rok net zover omlaag dat de bovenkant van het ondergoed zichtbaar is. Laat zo zitten.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l2-06", level: 2, category: "handen", tags: ["Aanraken"],
    command: "Leg je hand op de blote buik van {A}. Cirkel langzaam met je duim rond de navel gedurende 20 seconden.",
    duration_seconds: 20, requires_props: [], target_count: 2,
  },
  {
    id: "l2-07", level: 2, category: "schoot", tags: ["Aanraken"],
    command: "Ga op schoot bij {A}. Geef daarna een andere speler een kus op de wang zonder van schoot af te gaan.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l2-08", level: 2, category: "bijten", tags: ["Spanking", "Aanraken"],
    command: "Bijt zachtjes in de schouder of nek van {A}. Net hard genoeg om een secondenlang gevoel achter te laten.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l2-09", level: 2, category: "handen", tags: ["Aanraken"],
    command: "Trek {A}'s hand onder je eigen shirt. Leg hem op je blote huid. Houd 20 seconden vast zonder te bewegen.",
    duration_seconds: 20, requires_props: [], target_count: 2,
  },
  {
    id: "l2-10", level: 2, category: "fluisteren", tags: ["Kussen"],
    command: "Zeg in het oor van {A}: \"Ik wil je mond op mij voelen.\" Daarna wegkijken en niets zeggen.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l2-11", level: 2, category: "kussen", tags: ["Kussen"],
    command: "Kus {A} in de nek terwijl je haar/zijn ogen bedekt met je handen. 15 seconden.",
    duration_seconds: 15, requires_props: [], target_count: 2,
  },
  {
    id: "l2-12", level: 2, category: "handen", tags: ["Aanraken"],
    command: "Strijk met je nagels van de onderkant van de rug van {A} langzaam omhoog naar de schouderbladen. Twee keer.",
    duration_seconds: 20, requires_props: [], target_count: 2,
  },
  {
    id: "l2-13", level: 2, category: "kledingstuk", tags: ["Exhibitionisme"],
    command: "{A} kleedt zichzelf tot op het ondergoed uit voor de groep. Langzaam. Schüchterheid is verboden.",
    duration_seconds: null, requires_props: [], target_count: 1,
  },
  {
    id: "l2-14", level: 2, category: "kussen", tags: ["Kussen", "Aanraken"],
    command: "Houd het gezicht van {A} vast met twee handen. Kijk haar/hem 10 seconden aan. Dan één diepe kus.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l2-15", level: 2, category: "aanraking", tags: ["Aanraken"],
    command: "Lig naast {A}. Vlij je zo dicht mogelijk tegen haar/hem aan. Ademhaling synchroniseren. 45 seconden.",
    duration_seconds: 45, requires_props: [], target_count: 2,
  },
  {
    id: "l2-16", level: 2, category: "bekentenis", tags: [],
    command: "Beschrijf voor de groep — specifiek en eerlijk — wat je zou doen als je 5 minuten alleen was met {A}.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l2-17", level: 2, category: "handen", tags: ["Aanraken"],
    command: "Masseer de binnenkant van de dijen van {A} gedurende 30 seconden. Niet hoger dan 10 cm van de knie.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l2-18", level: 2, category: "kledingstuk", tags: ["Exhibitionisme", "Aanraken"],
    command: "Trek de riem of de knoop van de broek van {A} los. Laat hangen. Zeg er niets over.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l2-19", level: 2, category: "bijten", tags: ["Kussen"],
    command: "Bijt zachtjes op de onderlip van {A}. Houd 3 seconden vast. Laat los.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l2-20", level: 2, category: "handen", tags: ["Aanraken"],
    command: "Knoop langzaam elk knoopje van het shirt van {A} open. Hoeft niet uit. Alleen open. Neem de tijd.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l2-21", level: 2, category: "kussen", tags: ["Kussen"],
    command: "Kus {A} terwijl je haar/zijn handen vasthoudt achter haar/zijn rug. 15 seconden.",
    duration_seconds: 15, requires_props: [], target_count: 2,
  },
  {
    id: "l2-22", level: 2, category: "exhibitionisme", tags: ["Exhibitionisme"],
    command: "Trek je broek of rok uit. Blijf in ondergoed voor de groep staan. Armen langs het lichaam. 30 seconden.",
    duration_seconds: 30, requires_props: [], target_count: 1,
  },
  {
    id: "l2-23", level: 2, category: "aanraking", tags: ["Aanraken"],
    command: "Lik je vinger en strijk hem langzaam over de sleutelbeen van {A}. Blaas er daarna op.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l2-24", level: 2, category: "handen", tags: ["Aanraken"],
    command: "Neem de hand van {A} en leg hem op jouw borst — niet seksueel, gewoon je hart. Houd vast. 20 seconden.",
    duration_seconds: 20, requires_props: [], target_count: 2,
  },
  {
    id: "l2-25", level: 2, category: "kussen", tags: ["Kussen", "Aanraken"],
    command: "Kus {A} op het oor. Adem daarna warm in haar/zijn oor. Zeg alleen: \"Ja.\"",
    duration_seconds: null, requires_props: [], target_count: 2,
  },

  // ─── LEVEL 3 — PITTIG ─────────────────────────────────────────────────────
  {
    id: "l3-01", level: 3, category: "ondergoed", tags: ["Exhibitionisme", "Aanraken"],
    command: "Trek de beha van {A} los door de kleding heen — zonder hem uit te doen. Laat hangen.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l3-02", level: 3, category: "blinddoek", tags: ["Blinddoek", "Aanraken"],
    command: "Doe {A} een blinddoek om. Raak drie verschillende plekken aan haar/zijn lichaam aan. {A} raadt welke drie.",
    duration_seconds: 30, requires_props: ["blinddoek"], target_count: 2,
  },
  {
    id: "l3-03", level: 3, category: "handen", tags: ["Aanraken"],
    command: "Stop je hand in het ondergoed van {A}. Raak aan. Geen beweging. Precies 10 seconden. Haal eruit.",
    duration_seconds: 10, requires_props: [], target_count: 2,
  },
  {
    id: "l3-04", level: 3, category: "kledingstuk", tags: ["Oraal (geven)", "Exhibitionisme"],
    command: "Ga op je knieën voor {A}. Knoop haar/zijn broek los met alleen je tanden. Geen handen.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l3-05", level: 3, category: "kussen", tags: ["Kussen", "Aanraken"],
    command: "Lik je eigen vinger nat. Strijk hem langzaam over de lippen van {A}. Duw zachtjes naar binnen. Wacht op reactie.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l3-06", level: 3, category: "bondage", tags: ["Bondage"],
    command: "Bind de polsen van {A} samen met een das of sjaal. Handen boven het hoofd. Houd 2 minuten vast.",
    duration_seconds: 120, requires_props: ["das of sjaal"], target_count: 2,
  },
  {
    id: "l3-07", level: 3, category: "ondergoed", tags: ["Exhibitionisme", "Spanking"],
    command: "Trek het ondergoed van {A} tot halverwege de billen omlaag. Aai met één vinger langzaam over de huid.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l3-08", level: 3, category: "oraal-tease", tags: ["Oraal (geven)"],
    command: "Lik één keer langzaam van het sleutelbeen van {A} naar de navel. Gebruik de volle breedte van je tong.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l3-09", level: 3, category: "oraal", tags: ["Oraal (geven)", "Oraal (ontvangen)"],
    command: "{A} zit op een stoel, benen wijd. Knieel ervoor. Bevredig {A} met je mond door de stof van het ondergoed heen. 45 seconden.",
    duration_seconds: 45, requires_props: [], target_count: 2,
  },
  {
    id: "l3-10", level: 3, category: "dominantie", tags: ["Dominantie", "Submissie"],
    command: "{A} commandeert jou gedurende 2 minuten. Jij gehoorzaamt alles binnen level 3. Niet onderhandelen.",
    duration_seconds: 120, requires_props: [], target_count: 2,
  },
  {
    id: "l3-11", level: 3, category: "spanking", tags: ["Spanking"],
    command: "Geef {A} drie klappen op de billen — steviger dan je denkt dat mag. Vraag daarna: \"Meer?\"",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l3-12", level: 3, category: "kledingstuk", tags: ["Exhibitionisme"],
    command: "Trek het ondergoed van {A} uit van onder haar/zijn kleding. {A} blijft gekleed. Geef het ondergoed aan de groep.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l3-13", level: 3, category: "handen", tags: ["Aanraken", "Spanking"],
    command: "Grijp de billen van {A} met beide handen. Knijp éénmaal stevig. Laat los. Kijk haar/hem aan.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l3-14", level: 3, category: "blinddoek", tags: ["Blinddoek", "Kussen"],
    command: "Doe {A} een blinddoek om. Iedereen in de kamer kust haar/hem éénmaal op een willekeurige plek. {A} raadt wie.",
    duration_seconds: null, requires_props: ["blinddoek"], target_count: 1,
  },
  {
    id: "l3-15", level: 3, category: "handen", tags: ["Aanraken"],
    command: "Beweeg langzaam je hand van de binnenkant van de knie van {A} omhoog. Stop waar het spannend wordt. Houd vast.",
    duration_seconds: 20, requires_props: [], target_count: 2,
  },
  {
    id: "l3-16", level: 3, category: "rollenspel", tags: ["Rollenspel"],
    command: "{A} is jouw baas. Jij vraagt haar/hem om een gunst. Speel het 2 minuten lang. De baas weigert pas bij het derde verzoek.",
    duration_seconds: 120, requires_props: [], target_count: 2,
  },
  {
    id: "l3-17", level: 3, category: "oraal", tags: ["Oraal (geven)"],
    command: "Kus {A} van de mond naar de borst. Geen haast. Elke centimeter telt.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l3-18", level: 3, category: "exhibitionisme", tags: ["Exhibitionisme", "Voyeurisme"],
    command: "{A} kleedt zich volledig uit voor jou — alleen voor jou. Jij kijkt. Zegt niets. Beoordeelt niets. Geniet.",
    duration_seconds: 60, requires_props: [], target_count: 2,
  },
  {
    id: "l3-19", level: 3, category: "handen", tags: ["Aanraken"],
    command: "Grijp {A} vast bij de nek — zacht maar vastberaden. Houd 15 seconden. Kijk haar/hem aan.",
    duration_seconds: 15, requires_props: [], target_count: 2,
  },
  {
    id: "l3-20", level: 3, category: "kledingstuk", tags: ["Exhibitionisme"],
    command: "Trek langzaam het shirt van {A} omhoog en laat het zo hangen. Bekijk. Leg je hand plat op de blote buik.",
    duration_seconds: 20, requires_props: [], target_count: 2,
  },
  {
    id: "l3-21", level: 3, category: "bijten", tags: ["Spanking", "Aanraken"],
    command: "Bijt in de bil van {A}. Eén keer. Hard genoeg om een merk achter te laten. Laat daarna zien.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l3-22", level: 3, category: "dominantie", tags: ["Dominantie"],
    command: "Bevel {A} op haar/zijn knieën te gaan zitten voor jou. Houd oogcontact. Zeg niets. 20 seconden.",
    duration_seconds: 20, requires_props: [], target_count: 2,
  },
  {
    id: "l3-23", level: 3, category: "kussen", tags: ["Kussen", "Dominantie"],
    command: "Pak {A} ruw vast bij het haar. Trek hoofd licht terug. Kus de blootgestelde hals. 10 seconden.",
    duration_seconds: 10, requires_props: [], target_count: 2,
  },
  {
    id: "l3-24", level: 3, category: "blinddoek", tags: ["Blinddoek", "Aanraken"],
    command: "Doe {A} een blinddoek om. Raak haar/hem op 5 plekken aan — van onschuldig tot intiem. Stop wanneer {A} \"nu\" zegt.",
    duration_seconds: null, requires_props: ["blinddoek"], target_count: 2,
  },
  {
    id: "l3-25", level: 3, category: "bekentenis", tags: ["Exhibitionisme"],
    command: "{A} beschrijft voor de groep haar/zijn meest opwindende seksuele herinnering. Zonder namen. Wel met details.",
    duration_seconds: null, requires_props: [], target_count: 1,
  },

  // ─── LEVEL 4 — RUW ────────────────────────────────────────────────────────
  {
    id: "l4-01", level: 4, category: "bevel", tags: ["Dominantie", "Submissie"],
    command: "Bevel {A}: \"Open je mond. Steek je tong uit. Sluit je ogen. Blijf zo tot ik zeg stoppen.\" 60 seconden.",
    duration_seconds: 60, requires_props: [], target_count: 2,
  },
  {
    id: "l4-02", level: 4, category: "kledingstuk", tags: ["Exhibitionisme"],
    command: "Trek de broek én het ondergoed van {A} in één beweging naar de enkels. Zeg: \"Blijf zo staan.\" 30 seconden.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l4-03", level: 4, category: "voyeur", tags: ["Exhibitionisme", "Voyeurisme"],
    command: "{A} raakt zichzelf aan terwijl jij toekijkt zonder te bewegen. Timer: 90 seconden.",
    duration_seconds: 90, requires_props: [], target_count: 2,
  },
  {
    id: "l4-04", level: 4, category: "haren", tags: ["Dominantie", "Spanking"],
    command: "Trek {A}'s haar vast bij de nek. Forceer oogcontact. Zeg: \"Zeg nu hardop wat je het liefst met mij doet.\"",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l4-05", level: 4, category: "spanking", tags: ["Spanking"],
    command: "Spank {A} op de blote billen. Drie keer. Na elke slag zegt {A}: \"Dankjewel.\" Jij telt mee.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l4-06", level: 4, category: "dominantie", tags: ["Dominantie"],
    command: "Duw {A} met de rug tegen de muur. Leg je hand op haar/zijn keel — geen druk, alleen aanwezigheid. Fluister: \"Stil zijn.\" 30 seconden.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l4-07", level: 4, category: "oraal", tags: ["Oraal (geven)", "Oraal (ontvangen)"],
    command: "Bevredig {A} met je mond. Stop alleen wanneer {A} het woord \"meer\" zegt. Dan pas doorgaan.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l4-08", level: 4, category: "dominantie", tags: ["Dominantie", "Submissie"],
    command: "\"Op handen en knieën. Nu.\" {A} doet dit. Jij loopt langzaam om haar/hem heen en raakt aan waar je wil. 45 seconden.",
    duration_seconds: 45, requires_props: [], target_count: 2,
  },
  {
    id: "l4-09", level: 4, category: "handen", tags: ["Aanraken", "Exhibitionisme"],
    command: "Leg de hand van {A} op jouw meest intieme plek. Laat haar/hem voelen. Zeg: \"Dit is wat je met me doet.\"",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l4-10", level: 4, category: "bekentenis", tags: ["Exhibitionisme", "Voyeurisme"],
    command: "Beschrijf hardop aan de groep — terwijl je {A} aankijkt — precies wat je vanavond met haar/hem wil doen. Anatomisch.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l4-11", level: 4, category: "oraal", tags: ["Oraal (geven)", "Oraal (ontvangen)"],
    command: "{A} ligt op de tafel of bank. Jij gaat 2 minuten je gang. {A} mag niets zeggen. Alleen reageren.",
    duration_seconds: 120, requires_props: [], target_count: 2,
  },
  {
    id: "l4-12", level: 4, category: "spanking", tags: ["Spanking", "Dominantie"],
    command: "Straf {A} voor iets kleins dat ze/hij eerder deed. Je kiest de straf zelf. Maximaal 5 slagen. {A} telt hardop.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l4-13", level: 4, category: "handen", tags: ["Aanraken"],
    command: "Gebruik beide handen gelijktijdig op {A}: één op de borst, één tussen de benen. 30 seconden stilstaan.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l4-14", level: 4, category: "dominantie", tags: ["Dominantie"],
    command: "Bevel {A} drie opdrachten uit te voeren in 60 seconden. Jij bepaalt wat. Begin nu.",
    duration_seconds: 60, requires_props: [], target_count: 2,
  },
  {
    id: "l4-15", level: 4, category: "blinddoek", tags: ["Blinddoek", "Aanraken"],
    command: "Doe {A} een blinddoek om. Maak haar/hem klaar met je handen. Stop als ze/hij kreunt. Niet eerder.",
    duration_seconds: null, requires_props: ["blinddoek"], target_count: 2,
  },
  {
    id: "l4-16", level: 4, category: "rollenspel", tags: ["Rollenspel", "Dominantie"],
    command: "Jij bent de bewaker. {A} is gevangen. {A} mag alleen vrij als ze/hij jou overtuigt. 3 minuten.",
    duration_seconds: 180, requires_props: [], target_count: 2,
  },
  {
    id: "l4-17", level: 4, category: "kledingstuk", tags: ["Exhibitionisme"],
    command: "{A} kleedt zich volledig uit voor de groep. Daarna mag ze/hij één kledingstuk terug aantrekken. Groep kiest welk.",
    duration_seconds: null, requires_props: [], target_count: 1,
  },
  {
    id: "l4-18", level: 4, category: "oraal", tags: ["Oraal (geven)"],
    command: "Stel {A} tergend langzaam op gang met je mond. 90 seconden. Geen penetratie. Alleen de rand.",
    duration_seconds: 90, requires_props: [], target_count: 2,
  },
  {
    id: "l4-19", level: 4, category: "bondage", tags: ["Bondage", "Dominantie"],
    command: "Bind {A} aan een stoel — polsen achter de rugleuning. 3 minuten. Wat er daarna gebeurt, bepaal jij.",
    duration_seconds: 180, requires_props: ["touw of stropdas"], target_count: 2,
  },
  {
    id: "l4-20", level: 4, category: "exhibitionisme", tags: ["Exhibitionisme", "Groepsspel"],
    command: "De groep mag {A} overal aanraken behalve geslachtsdelen. 60 seconden. {A} staat stil en laat het toe.",
    duration_seconds: 60, requires_props: [], target_count: 1,
  },
  {
    id: "l4-21", level: 4, category: "handen", tags: ["Aanraken", "Dominantie"],
    command: "Grijp {A} van achteren vast. Één hand op de keel, één hand op het bekken. Hou 20 seconden zo vast.",
    duration_seconds: 20, requires_props: [], target_count: 2,
  },
  {
    id: "l4-22", level: 4, category: "bekentenis", tags: ["Exhibitionisme"],
    command: "{A} masturbeert 30 seconden voor de groep. Volledig gekleed. Groep kijkt zwijgend toe.",
    duration_seconds: 30, requires_props: [], target_count: 1,
  },
  {
    id: "l4-23", level: 4, category: "oraal", tags: ["Oraal (ontvangen)", "Dominantie"],
    command: "{A} forceert jou haar/zijn geslachtsdelen te kussen. Jij zit op je knieën. 45 seconden.",
    duration_seconds: 45, requires_props: [], target_count: 2,
  },
  {
    id: "l4-24", level: 4, category: "spanking", tags: ["Spanking", "Submissie"],
    command: "{A} bepaalt hoeveel klappen jij krijgt. Maximum 10. Jij telt. Als jij stopt met tellen, begint de teller opnieuw.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l4-25", level: 4, category: "dominantie", tags: ["Dominantie", "Submissie"],
    command: "Jij bent eigenaar. {A} is jouw eigendom. Laat haar/hem dit bevestigen. Dan één opdracht uitvoeren. 3 minuten.",
    duration_seconds: 180, requires_props: [], target_count: 2,
  },

  // ─── LEVEL 5 — EXTREEM ────────────────────────────────────────────────────
  {
    id: "l5-01", level: 5, category: "anatomisch", tags: ["Aanraken", "Oraal (geven)"],
    command: "{A} ligt op de rug. Jij raakt aan en benoemt elk lichaamsdeel terwijl je omlaag werkt. Stop pas bij de meest intieme plek.",
    duration_seconds: 60, requires_props: [], target_count: 2,
  },
  {
    id: "l5-02", level: 5, category: "groepsspel", tags: ["Groepsspel", "Aanraken"],
    command: "{A} en {B} stimuleren tegelijkertijd een derde speler: één links, één rechts. 90 seconden. Op commando wisselen.",
    duration_seconds: 90, requires_props: [], target_count: 3,
  },
  {
    id: "l5-03", level: 5, category: "zelfbevrediging", tags: ["Exhibitionisme", "Voyeurisme"],
    command: "{A} masturbeert terwijl de groep hardop telt van 30 naar 0. Bij 0: stoppen. Ongeacht hoe ver. Groep dicteert tempo.",
    duration_seconds: null, requires_props: [], target_count: 1,
  },
  {
    id: "l5-04", level: 5, category: "diep", tags: ["Exhibitionisme", "Aanraken"],
    command: "{A} staat voor een spiegel terwijl jij haar/hem van achter bevrediging geeft. {A} benoemt elk gevoel hardop.",
    duration_seconds: 60, requires_props: ["spiegel"], target_count: 2,
  },
  {
    id: "l5-05", level: 5, category: "ademcontrole", tags: ["Dominantie", "Submissie"],
    command: "Bedek de mond van {A} gedurende 5 seconden. Direct loslaten. Herhaal 3 keer. Vraag daarna: \"Wil je meer?\"",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l5-06", level: 5, category: "groepsspel", tags: ["Groepsspel", "Oraal (geven)"],
    command: "Drie spelers bevreden tegelijkertijd {A} — elk een andere plek. Op commando \"nu\" wisselen van plek. 2 minuten.",
    duration_seconds: 120, requires_props: [], target_count: 3,
  },
  {
    id: "l5-07", level: 5, category: "oraal", tags: ["Oraal (geven)", "Aanraken"],
    command: "Lik {A} van sleutelbeen via buik tot geslachtsdelen — en verder. Rechte lijn. Geen pauze. 30 seconden.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l5-08", level: 5, category: "groepsspel", tags: ["Groepsspel", "Dominantie"],
    command: "Drie spelers geven {A} tegelijk een bevel. {A} voert alle drie direct uit. Bevelen: \"Lik. Bijt. Fluister.\" Chaos is het doel.",
    duration_seconds: 60, requires_props: [], target_count: 3,
  },
  {
    id: "l5-09", level: 5, category: "anatomisch", tags: ["Exhibitionisme", "Oraal (ontvangen)"],
    command: "{A} beschrijft anatomisch precies wat haar/hem het meest opwindt. {B} demonstreert dit direct terwijl {A} het beschrijft.",
    duration_seconds: 90, requires_props: [], target_count: 2,
  },
  {
    id: "l5-10", level: 5, category: "vrij", tags: [],
    command: "\"De volgende 10 minuten: geen regels. Alleen consent. Jullie zijn de regisseurs.\" Timer loopt. Kom terug als hij afgaat.",
    duration_seconds: 600, requires_props: [], target_count: 1,
  },
  {
    id: "l5-11", level: 5, category: "dominantie", tags: ["Dominantie", "Submissie", "Bondage"],
    command: "Bind {A} volledig vast — polsen en enkels. Laat haar/hem volledig over aan jou. 5 minuten. Jij bepaalt alles.",
    duration_seconds: 300, requires_props: ["touw of riemen"], target_count: 2,
  },
  {
    id: "l5-12", level: 5, category: "groepsspel", tags: ["Groepsspel", "Exhibitionisme"],
    command: "{A} ligt in het midden. Iedereen in de kamer mag {A} aanraken waar ze willen gedurende 2 minuten. {A} geeft alleen grenzen aan.",
    duration_seconds: 120, requires_props: [], target_count: 1,
  },
  {
    id: "l5-13", level: 5, category: "oraal", tags: ["Oraal (geven)", "Oraal (ontvangen)"],
    command: "{A} en {B} geven elkaar tegelijkertijd oraal gedurende 3 minuten. Geen handen. Alleen mond.",
    duration_seconds: 180, requires_props: [], target_count: 2,
  },
  {
    id: "l5-14", level: 5, category: "exhibitionisme", tags: ["Exhibitionisme", "Voyeurisme"],
    command: "{A} masturbeert tot orgasme — voor iedereen. Groep kijkt toe. Geen aanmoediging. Stil getuige zijn.",
    duration_seconds: null, requires_props: [], target_count: 1,
  },
  {
    id: "l5-15", level: 5, category: "dominantie", tags: ["Dominantie", "Submissie"],
    command: "{A} is jouw eigendom de komende 10 minuten. Ze/hij doet wat jij zegt. Jij draagt de verantwoordelijkheid.",
    duration_seconds: 600, requires_props: [], target_count: 2,
  },
  {
    id: "l5-16", level: 5, category: "groepsspel", tags: ["Groepsspel", "Rollenspel"],
    command: "De groep brengt {A} in een scenario naar keuze. {A} speelt mee — volledig. 5 minuten. De groep schrijft het script.",
    duration_seconds: 300, requires_props: [], target_count: 1,
  },
  {
    id: "l5-17", level: 5, category: "oraal", tags: ["Oraal (geven)"],
    command: "Bevredig {A} met je mond tot ze/hij drie keer \"meer\" heeft gezegd. Daarna pas stoppen.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l5-18", level: 5, category: "spanking", tags: ["Spanking", "Dominantie", "Submissie"],
    command: "De groep telt mee terwijl {A} klappen ontvangt van iedereen die wil. Maximaal 3 per persoon. {A} bepaalt de volgorde.",
    duration_seconds: null, requires_props: [], target_count: 1,
  },
  {
    id: "l5-19", level: 5, category: "anatomisch", tags: ["Aanraken"],
    command: "{A} instrueert {B} stap voor stap — in detail — hoe ze/hij haar/hem het hardst kan laten klaarkomen. {B} voert uit.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l5-20", level: 5, category: "vrij", tags: ["Groepsspel"],
    command: "Iedereen geeft {A} tegelijkertijd een opdracht. {A} kiest welke ze/hij uitvoert. De rest zwijgt. 5 minuten.",
    duration_seconds: 300, requires_props: [], target_count: 1,
  },
];

export function getCommandsForLevel(level: number): Command[] {
  return COMMANDS.filter((c) => c.level <= level);
}

export function getCommandById(id: string): Command | undefined {
  return COMMANDS.find((c) => c.id === id);
}

export type CommandRatings = Record<string, { count: number; sum: number }>;

export function getRandomCommand(
  level: number,
  usedIds: string[] | null | undefined,
  availableTags: string[] | null | undefined,
  targetCount: number = 2,
  ratings?: CommandRatings
): Command | null {
  const safeUsed = Array.isArray(usedIds) ? usedIds : [];
  const safeTags = Array.isArray(availableTags) ? availableTags : [];

  const pool = COMMANDS.filter((c) => {
    if (c.level > level) return false;
    if (c.level < Math.max(1, level - 1)) return false;
    if (safeUsed.includes(c.id)) return false;
    if (c.target_count > targetCount) return false;
    if (c.tags.length > 0 && !c.tags.some((t) => safeTags.includes(t))) return false;
    return true;
  });

  const fallbackPool = pool.length > 0 ? pool : COMMANDS.filter(
    (c) => c.level <= level && c.level >= Math.max(1, level - 1) && c.target_count <= targetCount
  );

  if (fallbackPool.length === 0) return null;

  if (!ratings || Object.keys(ratings).length === 0) {
    return fallbackPool[Math.floor(Math.random() * fallbackPool.length)];
  }

  // Weighted random: avg rating 0-4 → weight 0.1-2.0; unrated = weight 1.0 (neutral)
  const weighted = fallbackPool.map((c) => {
    const r = ratings[c.id];
    const avg = r && r.count > 0 ? r.sum / r.count : 2;
    return { c, weight: Math.max(0.1, avg / 2) };
  });

  const total = weighted.reduce((s, w) => s + w.weight, 0);
  let rand = Math.random() * total;
  for (const { c, weight } of weighted) {
    rand -= weight;
    if (rand <= 0) return c;
  }
  return weighted[weighted.length - 1].c;
}

// ─── LEVEL 1 extra (l1-26 t/m l1-100) ────────────────────────────────────────
const L1_EXTRA: Command[] = [
  { id:"l1-26", level:1, category:"aanraking", tags:["Aanraken"], command:"Strijk met beide handen tegelijk langs de armen van {A}, van schouder naar vingertoppen. Drie keer heen en terug.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l1-27", level:1, category:"fluisteren", tags:[], command:"Fluister {A} het mooiste wat je ooit over haar/hem hebt gedacht maar nooit hebt gezegd.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-28", level:1, category:"aanraking", tags:["Aanraken"], command:"Leg je hoofd in de schoot van {A}. Sluit je ogen. Blijf 40 seconden zo liggen zonder iets te zeggen.", duration_seconds:40, requires_props:[], target_count:2 },
  { id:"l1-29", level:1, category:"handen", tags:["Aanraken"], command:"Houd de hand van {A} vast met beide handen. Adem drie keer diep in en uit. Synchroon.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l1-30", level:1, category:"oogcontact", tags:[], command:"Jij en {A}: ga recht tegenover elkaar staan, neuzen bijna raakend. Spreek niet. Kijk alleen. 45 seconden.", duration_seconds:45, requires_props:[], target_count:2 },
  { id:"l1-31", level:1, category:"haren", tags:["Aanraken"], command:"Kamm met je vingers langzaam het haar van {A}. Van voorhoofd naar achterín. Neem de tijd.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l1-32", level:1, category:"bekentenis", tags:[], command:"Zeg aan {A}: \"De eerste keer dat ik je zag dacht ik...\" Maak eerlijk af.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-33", level:1, category:"aanraking", tags:["Aanraken"], command:"Teken een hartje met je vinger op de rug van {A}. Herhaal drie keer, steeds iets groter.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l1-34", level:1, category:"kuss", tags:["Kussen"], command:"Druk een kus op het voorhoofd van {A}. Houd je lippen er 5 seconden op. Haal dan langzaam weg.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-35", level:1, category:"aanraking", tags:["Aanraken"], command:"Omhels {A} van achteren. Houd vast. Beweeg niet. 30 seconden.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l1-36", level:1, category:"bekentenis", tags:[], command:"{A}: benoem drie dingen aan de persoon naast je die je écht opvallen. Niet uiterlijk — karakter.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l1-37", level:1, category:"aanraking", tags:["Aanraken"], command:"Strijk met één vinger langs de kaaklijn van {A}. Van oor naar kin. Langzaam, maar één keer.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-38", level:1, category:"handen", tags:["Aanraken"], command:"Masseer de handen van {A}: elke vinger apart, de palm, de pols. Neem 60 seconden.", duration_seconds:60, requires_props:[], target_count:2 },
  { id:"l1-39", level:1, category:"fluisteren", tags:[], command:"Fluister {A} een geheim in het oor — iets wat niemand anders in de kamer weet.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-40", level:1, category:"oogcontact", tags:[], command:"Glimlach naar {A} zonder dat je mond beweegt — alleen met je ogen. Houd dat 20 seconden vol.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l1-41", level:1, category:"aanraking", tags:["Aanraken"], command:"Leg je hand plat op het hart van {A}. Voel de hartslag. Zeg wanneer je hem voelt.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-42", level:1, category:"kuss", tags:["Kussen"], command:"Kus {A} op de punt van de neus. Dan op het voorhoofd. Dan op de wang. Niet de mond.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-43", level:1, category:"haren", tags:["Aanraken"], command:"Fluster terwijl je de haren van {A} achter haar/zijn oor strijkt: \"Zo beter.\"", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-44", level:1, category:"aanraking", tags:["Aanraken"], command:"Ga naast {A} zitten. Laat je bovenbeen tegen haar/zijn bovenbeen rusten. Beweeg niet weg.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l1-45", level:1, category:"bekentenis", tags:[], command:"Zeg hardop wat je als eerste dacht toen je {A} vanaavond zag. Zonder filter.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-46", level:1, category:"aanraking", tags:["Aanraken"], command:"Strijkt met de rug van je hand over de onderarm van {A}, heel langzaam, van pols tot elleboog.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l1-47", level:1, category:"fluisteren", tags:[], command:"Beschrijf in {A}'s oor hoe je haar/hem zou willen aanraken als jullie alleen waren.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-48", level:1, category:"handen", tags:["Aanraken"], command:"Interlace je vingers met die van {A}. Kijk naar de handen. 20 seconden stilzitten.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l1-49", level:1, category:"kuss", tags:["Kussen"], command:"Druk een kus in de palm van {A}. Blaas er dan heel zacht op.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-50", level:1, category:"aanraking", tags:["Aanraken"], command:"Raak met je neus de neus van {A} aan — eskimokus. Houd 10 seconden.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l1-51", level:1, category:"bekentenis", tags:[], command:"{A} vertelt de groep haar/zijn grootste insecurity. Iedereen luistert. Niemand reageert.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l1-52", level:1, category:"aanraking", tags:["Aanraken"], command:"Leg de hand van {A} op jouw gezicht. Laat haar/hem jouw gezicht voelen zonder te kijken. 20 seconden.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l1-53", level:1, category:"haren", tags:["Aanraken"], command:"Maak een vlecht of knot in het haar van {A}. Hoe het eruitziet maakt niet uit.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-54", level:1, category:"oogcontact", tags:[], command:"Houd de kin van {A} zacht vast en laat haar/hem niet wegkijken. 30 seconden oogcontact.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l1-55", level:1, category:"aanraking", tags:["Aanraken"], command:"Masseer de slafen van {A} in kleine cirkels. 30 seconden. Vraag of het goed voelt.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l1-56", level:1, category:"kuss", tags:["Kussen"], command:"Kus de binnenkant van de pols van {A}. Hou je lippen er 3 seconden op.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-57", level:1, category:"bekentenis", tags:[], command:"Zeg in eigen woorden: \"Het moment dat ik me het meest aangetrokken voelde tot {A} was...\"", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-58", level:1, category:"aanraking", tags:["Aanraken"], command:"Trek {A} naar je toe en houd haar/hem vast als een slow-dance, zonder muziek. 30 seconden.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l1-59", level:1, category:"handen", tags:["Aanraken"], command:"Teken letters op de rug van de hand van {A}. {A} raadt elk woord.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-60", level:1, category:"fluisteren", tags:[], command:"Fluister {A} drie woorden toe. Niet meer. {A} mag één vraag stellen ter verduidelijking.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-61", level:1, category:"aanraking", tags:["Aanraken"], command:"Strijk met je duim langzaam over de lippen van {A}. Eén keer. Niet praten.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-62", level:1, category:"oogcontact", tags:[], command:"Jij zit. {A} staat en kijkt op jou neer. 30 seconden zo blijven. Dan wisselen.", duration_seconds:60, requires_props:[], target_count:2 },
  { id:"l1-63", level:1, category:"aanraking", tags:["Aanraken"], command:"Druk je handpalm tegen de handpalm van {A}. Houd elkaar warm. 30 seconden.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l1-64", level:1, category:"bekentenis", tags:[], command:"Zeg tegen {A}: \"Als ik één dag jouw leven zou leven, zou ik...\" Maak de zin oprecht af.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-65", level:1, category:"aanraking", tags:["Aanraken"], command:"Ga achter {A} staan. Leg je handen op haar/zijn taille. Beweeg niet. 20 seconden.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l1-66", level:1, category:"kuss", tags:["Kussen"], command:"Kus {A} op de schouder. Leg je hoofd er daarna op. 15 seconden.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l1-67", level:1, category:"aanraking", tags:["Aanraken"], command:"Strijk met je nagels heel zacht over de binnenkant van de onderarm van {A}. 20 seconden.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l1-68", level:1, category:"haren", tags:["Aanraken"], command:"Snuif zacht aan het haar van {A}. Zeg dan wat het je doet.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-69", level:1, category:"bekentenis", tags:[], command:"Beschrijf het moment dat je beseft dat je {A} leuk vond. Wanneer was het? Wat deed ze/hij?", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-70", level:1, category:"aanraking", tags:["Aanraken"], command:"Omarm {A} zo stevig als jij durft. Houd vast tot één van jullie loslaat.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-71", level:1, category:"oogcontact", tags:[], command:"Knip één oog naar {A}. Wacht op reactie. Herhaal drie keer.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-72", level:1, category:"aanraking", tags:["Aanraken"], command:"Leg je hoofd op de schouder van {A}. Zucht hoorbaar. Ontspan volledig.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l1-73", level:1, category:"kuss", tags:["Kussen"], command:"Kus {A} op de oogleden — links, dan rechts. Heel zacht.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-74", level:1, category:"bekentenis", tags:[], command:"Vertel {A}: \"Iets wat ik je nooit heb verteld maar nu wel wil...\"", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-75", level:1, category:"aanraking", tags:["Aanraken"], command:"Strijk met je vlakke hand langzaam over de rug van {A}, van schouder tot onder. Twee keer.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l1-76", level:1, category:"handen", tags:["Aanraken"], command:"Leid {A} met gesloten ogen van de ene kant van de kamer naar de andere. Voorzichtig.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-77", level:1, category:"fluisteren", tags:[], command:"Zeg in het oor van {A}: \"Ik denk vaker aan je dan je denkt.\" Zeg het alsof je het meent.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-78", level:1, category:"aanraking", tags:["Aanraken"], command:"Strijk met je pink langs de rand van het oor van {A}. Heel langzaam. Eén keer.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-79", level:1, category:"bekentenis", tags:[], command:"Zeg hardop welk lichaamsdeel van {A} je het mooist vindt. Onderbouw je keuze.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-80", level:1, category:"aanraking", tags:["Aanraken"], command:"Pak {A} bij de schouders. Kijk haar/hem aan. Zeg: \"Gaat het?\" Wacht echt op het antwoord.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-81", level:1, category:"kuss", tags:["Kussen"], command:"Kus {A} op de hals — maar zo licht dat het nauwelijks voelbaar is. Herhaal op een andere plek.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-82", level:1, category:"aanraking", tags:["Aanraken"], command:"Vlij je volledig tegen {A} aan — zij aan zij — en doe voor één minuut alsof jullie één persoon zijn.", duration_seconds:60, requires_props:[], target_count:2 },
  { id:"l1-83", level:1, category:"haren", tags:["Aanraken"], command:"Masseer de nek en schedelbasis van {A} met je vingertoppen. 40 seconden.", duration_seconds:40, requires_props:[], target_count:2 },
  { id:"l1-84", level:1, category:"fluisteren", tags:[], command:"Fluister {A}: \"Als de groep er niet bij was, zou ik nu...\" Maak de zin volledig af.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-85", level:1, category:"oogcontact", tags:[], command:"Jij en {A}: wie knippert als eerste? De verliezer geeft de winnaar een kus op de plek naar keuze.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-86", level:1, category:"aanraking", tags:["Aanraken"], command:"Leg je handen op de wangen van {A}. Kijk haar/hem aan. Zeg niets. 15 seconden.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l1-87", level:1, category:"bekentenis", tags:[], command:"Vertel in detail wat je deed de laatste keer dat je aan {A} dacht als je alleen was.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-88", level:1, category:"aanraking", tags:["Aanraken"], command:"Ga op je knieën voor {A} zitten. Kijk op naar haar/hem. 15 seconden zo blijven.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l1-89", level:1, category:"kuss", tags:["Kussen"], command:"Kus {A} op de binnenkant van de elleboog. Houd je lippen er even op.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-90", level:1, category:"aanraking", tags:["Aanraken"], command:"Raak met je neus de hals van {A} aan. Beweeg niet. Voel de warmte. 10 seconden.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l1-91", level:1, category:"bekentenis", tags:[], command:"Beschrijf voor {A} je ideale avond samen — zonder grenzen, volledig eerlijk.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-92", level:1, category:"aanraking", tags:["Aanraken"], command:"Trek {A} aan één vinger mee. Breng haar/hem ergens anders in de ruimte. Zeg dan: \"Hier wilde ik je hebben.\"", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-93", level:1, category:"handen", tags:["Aanraken"], command:"Teken iets op de arm van {A} met je vinger. {A} raadt wat het is.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-94", level:1, category:"fluisteren", tags:[], command:"Zeg {A} iets wat je haar/hem al een tijdje wilt vertellen maar de moed niet had.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-95", level:1, category:"aanraking", tags:["Aanraken"], command:"Streel de arm van {A} zo langzaam dat het bijna niet te merken is. 30 seconden.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l1-96", level:1, category:"kuss", tags:["Kussen"], command:"Kus {A} tweemaal — één keer op elke wang. Langzaam. Linger op elke plek.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-97", level:1, category:"aanraking", tags:["Aanraken"], command:"Omarm {A} als een beer. Til haar/hem een centimeter op als je kunt. Dan neerzetten.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-98", level:1, category:"bekentenis", tags:[], command:"Zeg drie complimenten over {A} aan de rest van de groep, alsof {A} er niet bij is.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l1-99", level:1, category:"aanraking", tags:["Aanraken"], command:"Leg je oor op de borst van {A}. Luister naar haar/zijn hart. Zeg wat je hoort.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l1-100", level:1, category:"oogcontact", tags:[], command:"Jij en {A} staan tegenover elkaar. Jullie bewegen tegelijkertijd — spiegelspel. 60 seconden.", duration_seconds:60, requires_props:[], target_count:2 },
];

COMMANDS.push(...L1_EXTRA);

// ─── LEVEL 2 extra (l2-26 t/m l2-100) ────────────────────────────────────────
const L2_EXTRA: Command[] = [
  { id:"l2-26", level:2, category:"kussen", tags:["Kussen"], command:"Zoen {A} op de mond — 15 seconden, tong toegestaan. Jij bepaalt het tempo.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l2-27", level:2, category:"kledingstuk", tags:["Exhibitionisme"], command:"Trek je eigen broek uit maar houd je ondergoed aan. Blijf 60 seconden zo staan.", duration_seconds:60, requires_props:[], target_count:1 },
  { id:"l2-28", level:2, category:"handen", tags:["Aanraken"], command:"Strijk met je hand over de blote buik van {A}. Cirkel langzaam omhoog, dan omlaag.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l2-29", level:2, category:"bijten", tags:["Spanking","Aanraken"], command:"Bijt zacht in de bovenkant van de schouder van {A}. Laat een rode plek achter.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-30", level:2, category:"kussen", tags:["Kussen","Aanraken"], command:"Kus {A} terwijl je haar/zijn gezicht vasthoudt. Beide handen. 10 seconden.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l2-31", level:2, category:"exhibitionisme", tags:["Exhibitionisme"], command:"Knoop langzaam je eigen broek los voor de groep. Laat de groep kiezen: aanhouden of uittrekken.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l2-32", level:2, category:"handen", tags:["Aanraken"], command:"Glijdt met je vlakke hand van de nek van {A} langzaam naar het midden van de rug.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-33", level:2, category:"kussen", tags:["Kussen"], command:"Kus {A} op de mond. Elke keer dat iemand 'ja' zegt de komende minuut: nog een kus.", duration_seconds:60, requires_props:[], target_count:2 },
  { id:"l2-34", level:2, category:"aanraking", tags:["Aanraken"], command:"Masseer de borst van {A} door de kleding heen. 30 seconden. Beide handen.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l2-35", level:2, category:"kledingstuk", tags:["Exhibitionisme"], command:"Trek de rits van {A}'s broek omlaag. Laat open. Zeg er niets over.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-36", level:2, category:"bijten", tags:["Aanraken"], command:"Lik over het sleutelbeen van {A}. Bijt er dan zacht in. Één keer.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-37", level:2, category:"schoot", tags:["Aanraken"], command:"Ga op schoot bij {A} en vertel de groep een geheim terwijl je zo zit. Niet van schoot af.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-38", level:2, category:"handen", tags:["Aanraken"], command:"Leg je hand op het bovenbeen van {A}. Beweeg langzaam de vingers — geen woorden.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l2-39", level:2, category:"kussen", tags:["Kussen","Aanraken"], command:"Kus {A} in de nek van achteren terwijl je haar/zijn armen vasthoudt.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l2-40", level:2, category:"kledingstuk", tags:["Exhibitionisme"], command:"{A}: trek één kledingstuk uit naar keuze. Maak het langzaam. Leg het neer.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l2-41", level:2, category:"aanraking", tags:["Aanraken"], command:"Leg je hand plat op de rug van {A} — op de blote huid. Voel de warmte. 20 seconden.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l2-42", level:2, category:"bijten", tags:["Kussen"], command:"Bijt zachtjes op het oor van {A} en adem dan warm erin.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-43", level:2, category:"handen", tags:["Aanraken"], command:"Strijk met één vinger langzaam langs de ruggengraat van {A} van boven naar beneden.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-44", level:2, category:"kussen", tags:["Kussen"], command:"Kus {A}: lippen, nek, sleutelbeen, dan terug. Neem je tijd.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l2-45", level:2, category:"exhibitionisme", tags:["Exhibitionisme"], command:"Doe je shirt omhoog en houd het 20 seconden zo. Armen in de lucht, rug recht.", duration_seconds:20, requires_props:[], target_count:1 },
  { id:"l2-46", level:2, category:"aanraking", tags:["Aanraken"], command:"Grijp {A} bij de heupen en duw haar/hem zacht tegen de muur. Houd vast. 10 seconden.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l2-47", level:2, category:"bijten", tags:["Spanking","Aanraken"], command:"Geef {A} een zachte klap op de bil. Eén keer. Daarna wrijf je de plek.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-48", level:2, category:"kledingstuk", tags:["Exhibitionisme","Aanraken"], command:"Trek de schouder van het shirt van {A} opzij en kus de blote schouder.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-49", level:2, category:"handen", tags:["Aanraken"], command:"Pak {A} bij de keel — zacht, geen druk — en kijk haar/hem aan. 10 seconden.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l2-50", level:2, category:"kussen", tags:["Kussen","Dominantie"], command:"Forceer een kus door het hoofd van {A} naar je toe te trekken. Tien seconden.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l2-51", level:2, category:"exhibitionisme", tags:["Exhibitionisme"], command:"Laat de groep kiezen welk kledingstuk jij uittrekt. Trek het langzaam uit.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l2-52", level:2, category:"aanraking", tags:["Aanraken"], command:"Strijk met je neus langs de hals van {A} zonder te kussen. Snuif haar/zijn geur op.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l2-53", level:2, category:"bijten", tags:["Aanraken"], command:"Lik de hals van {A} — en blaas er dan koud op.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-54", level:2, category:"handen", tags:["Aanraken"], command:"Schud het haar van {A} los als ze/hij dat heeft, of woel erdoorheen. Ruw maar zacht.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-55", level:2, category:"kussen", tags:["Kussen"], command:"{A} en jij zoenen terwijl de groep aftelt van 20 naar 0. Jullie bepalen de intensiteit.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l2-56", level:2, category:"kledingstuk", tags:["Exhibitionisme"], command:"Trek je eigen shirt uit, houd het 10 seconden in de lucht, en geef het aan {A}.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-57", level:2, category:"aanraking", tags:["Aanraken"], command:"Leg je hoofd op de blote buik van {A}. Hoor wat je hoort. 15 seconden.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l2-58", level:2, category:"bijten", tags:["Aanraken","Spanking"], command:"Bijt zacht in de onderkant van de bil van {A}. Laat een spoor achter.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-59", level:2, category:"handen", tags:["Aanraken"], command:"Pak {A} bij de polsen en leid haar/zijn handen naar jouw lijf. Laat haar/hem voelen.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l2-60", level:2, category:"kussen", tags:["Kussen","Aanraken"], command:"Kus {A} op de mond terwijl je langzaam door haar/zijn haar woelt.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l2-61", level:2, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme"], command:"{A} staat voor de groep en trekt langzaam één kledingstuk per 10 seconden uit. Groep telt.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l2-62", level:2, category:"aanraking", tags:["Aanraken"], command:"Streel met vlakke hand de binnenkant van de dijen van {A} — van knie naar 15 cm omhoog.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l2-63", level:2, category:"bijten", tags:["Aanraken"], command:"Strijk met de tanden langs de zijkant van de hals van {A}. Zacht — geen bloed.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-64", level:2, category:"handen", tags:["Aanraken"], command:"Leg beide handen op de borst van {A} — over de stof. Voel haar/zijn ademhaling. 20 seconden.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l2-65", level:2, category:"kussen", tags:["Kussen"], command:"Kus {A} elke 10 seconden ergens anders op het lichaam. Drie keer. Jij kiest de plekken.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l2-66", level:2, category:"kledingstuk", tags:["Exhibitionisme","Aanraken"], command:"Trek de beugel-strap van {A} van de schouder. Kus de huid eronder.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-67", level:2, category:"aanraking", tags:["Aanraken"], command:"Zit achter {A}. Wikkel je benen om haar/hem heen. Trek haar/hem tegen je aan. 30 seconden.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l2-68", level:2, category:"bijten", tags:["Spanking"], command:"Vier slagen op de billen van {A} — twee per bil. {A} telt. Jij calibreert de kracht.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-69", level:2, category:"handen", tags:["Aanraken","Dominantie"], command:"Houd beide polsen van {A} vast boven haar/zijn hoofd. Kijk haar/hem aan. 15 seconden.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l2-70", level:2, category:"kussen", tags:["Kussen","Aanraken"], command:"Kus {A} zo lang als ze/hij wil — {A} bepaalt wanneer het stopt.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-71", level:2, category:"exhibitionisme", tags:["Exhibitionisme"], command:"Jij en {A} ruilen elkaars shirts. Draag het de rest van de ronde.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-72", level:2, category:"aanraking", tags:["Aanraken"], command:"Glijdt met je hand langs de zijkant van het lichaam van {A} — van oksel tot heup.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-73", level:2, category:"bijten", tags:["Aanraken","Kussen"], command:"Lik het oor van {A} van de onderkant naar de top.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-74", level:2, category:"handen", tags:["Aanraken"], command:"Beweeg je hand langs het lichaam van {A}: begin bij de nek, eindig bij de knie. Langzaam.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-75", level:2, category:"kussen", tags:["Kussen","Exhibitionisme"], command:"Kus {A} op de mond terwijl de groep toekijkt. Zorg dat het de moeite waard is om naar te kijken.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l2-76", level:2, category:"kledingstuk", tags:["Exhibitionisme"], command:"{A} trekt haar/zijn eigen shirt uit. Geeft het aan jou. Jij beslist wanneer ze/hij het terugkrijgt.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-77", level:2, category:"aanraking", tags:["Aanraken","Spanking"], command:"Geef {A} een zachte klap op de bil terwijl je haar/hem van achter vasthoudt.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-78", level:2, category:"bijten", tags:["Aanraken"], command:"Bijt zacht in de wang van {A}. Dan een kus op dezelfde plek.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-79", level:2, category:"handen", tags:["Aanraken","Dominantie"], command:"Duw {A} zacht op de bank of stoel. Sta erboven. Kijk omlaag. 10 seconden.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l2-80", level:2, category:"kussen", tags:["Kussen"], command:"Kus {A}: begin bij de hals. Werk omhoog naar de mond. Doe er 20 seconden over.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l2-81", level:2, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme"], command:"{A} danst voor de groep — langzaam, sensueel — terwijl ze/hij één kledingstuk uittrekt.", duration_seconds:60, requires_props:[], target_count:1 },
  { id:"l2-82", level:2, category:"aanraking", tags:["Aanraken"], command:"Masseer de billen van {A} met beide handen. 20 seconden. Met intentie.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l2-83", level:2, category:"bijten", tags:["Aanraken","Spanking"], command:"Knijp in de bil van {A}. Niet zacht. Niet te hard. Ergens daartussenin.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-84", level:2, category:"handen", tags:["Aanraken"], command:"Trek {A} bij de riem naar je toe. Houd de riem vast. 10 seconden oogcontact.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l2-85", level:2, category:"kussen", tags:["Kussen","Aanraken"], command:"Kus {A} terwijl je je handen stevig op haar/zijn billen houdt.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l2-86", level:2, category:"kledingstuk", tags:["Exhibitionisme"], command:"Trek één sok uit bij {A}. Kus haar/zijn voet. Eén kus per teen.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-87", level:2, category:"aanraking", tags:["Aanraken","Dominantie"], command:"Houd de nek van {A} van achteren vast terwijl ze/hij stil staat. 15 seconden.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l2-88", level:2, category:"bijten", tags:["Kussen","Aanraken"], command:"Lig bovenop {A}. Kus haar/hem. Houd het 20 seconden vol.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l2-89", level:2, category:"handen", tags:["Aanraken"], command:"Leid de hand van {A} langs jouw lichaam — laat haar/hem zelf stoppen waar ze/hij wil.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-90", level:2, category:"kussen", tags:["Kussen"], command:"Kus {A} op elke plek die ze/hij wijst, in volgorde. {A} wijst vijf plekken.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-91", level:2, category:"exhibitionisme", tags:["Exhibitionisme"], command:"Jij kleedt je half uit. {A} kijkt toe zonder te bewegen of te spreken.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-92", level:2, category:"aanraking", tags:["Aanraken","Dominantie"], command:"Zet {A} op een stoel. Sta voor haar/hem. Leg je handen op de leuning — opgesloten. Kijk naar beneden. 15 seconden.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l2-93", level:2, category:"bijten", tags:["Aanraken"], command:"Lik een streep van de pols van {A} naar de binnenkant van de elleboog.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-94", level:2, category:"handen", tags:["Aanraken","Spanking"], command:"Vijf slagen op de billen van {A}. Na elke slag: korte pauze. Dan de volgende.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-95", level:2, category:"kussen", tags:["Kussen","Dominantie"], command:"Pak {A} ruw en kus haar/hem voor 15 seconden. Geen handen van {A} toegestaan.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l2-96", level:2, category:"kledingstuk", tags:["Exhibitionisme","Aanraken"], command:"Trek het ondergoed van {A} zichtbaar omhoog boven de broekband. Laat zo.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-97", level:2, category:"aanraking", tags:["Aanraken"], command:"Ga naast {A} staan en druk je lichaam volledig langs het hare/zijne. Van schouder tot knie.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l2-98", level:2, category:"bijten", tags:["Spanking","Aanraken"], command:"Bijt in de schouder van {A} en laat een zichtbare plek achter. Laat daarna zien.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l2-99", level:2, category:"handen", tags:["Aanraken","Dominantie"], command:"Druk {A} neer op een stoel. Ga schrijlings op haar/hem zitten. Kijk haar/hem aan. 20 seconden.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l2-100", level:2, category:"kussen", tags:["Kussen","Aanraken"], command:"Kus {A} met beide handen in haar/zijn haar — en houd het hoofd vast. Zo lang als jij wil.", duration_seconds:null, requires_props:[], target_count:2 },
];

COMMANDS.push(...L2_EXTRA);

// ─── LEVEL 3 extra (l3-26 t/m l3-100) ────────────────────────────────────────
const L3_EXTRA: Command[] = [
  { id:"l3-26", level:3, category:"oraal", tags:["Oraal (geven)"], command:"Lik {A} van de navel omhoog tot de mond. Eén vloeiende beweging.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-27", level:3, category:"blinddoek", tags:["Blinddoek","Aanraken"], command:"Doe {A} een blinddoek om. Beweeg een ijsblokje langs haar/zijn lichaam. Zie de reactie.", duration_seconds:30, requires_props:["blinddoek","ijsblokje"], target_count:2 },
  { id:"l3-28", level:3, category:"dominantie", tags:["Dominantie","Submissie"], command:"Bevel {A} om je voeten te masseren. 60 seconden. Ze/hij mag niet weigeren.", duration_seconds:60, requires_props:[], target_count:2 },
  { id:"l3-29", level:3, category:"handen", tags:["Aanraken"], command:"Stop je hand in de broek van {A} — over het ondergoed heen. Beweeg langzaam. 30 seconden.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l3-30", level:3, category:"kledingstuk", tags:["Exhibitionisme"], command:"{A} staat voor de groep in ondergoed. Draai langzaam 360 graden. Groep kijkt maar zegt niets.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l3-31", level:3, category:"spanking", tags:["Spanking"], command:"Zes slagen op de billen van {A}. Na elke slag benoem je de kracht: licht / medium / hard.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-32", level:3, category:"oraal", tags:["Oraal (geven)","Aanraken"], command:"Lik de tepel van {A} door de stof van het shirt heen. Beide kanten.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l3-33", level:3, category:"blinddoek", tags:["Blinddoek","Dominantie"], command:"{A}: blinddoek om. Jij commandeert. Ze/hij gehoorzaamt drie opdrachten blind.", duration_seconds:null, requires_props:["blinddoek"], target_count:2 },
  { id:"l3-34", level:3, category:"handen", tags:["Aanraken","Dominantie"], command:"Duw {A} op haar/zijn knieën. Leg je hand op haar/zijn hoofd. 10 seconden.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l3-35", level:3, category:"kledingstuk", tags:["Exhibitionisme","Voyeurisme"], command:"Kleed {A} uit tot op haar/zijn ondergoed. Langzaam, kledingstuk voor kledingstuk.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-36", level:3, category:"spanking", tags:["Spanking","Dominantie"], command:"{A} buigt voorover. Tien slagen. Ze/hij telt mee. Jij bepaalt het tempo.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-37", level:3, category:"oraal", tags:["Oraal (geven)"], command:"Kus {A} van de knie omhoog langs de binnenkant van de dij. Stop waar het spannend wordt.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l3-38", level:3, category:"dominantie", tags:["Dominantie","Submissie"], command:"{A} is jouw dienaar de komende 3 minuten. Geef drie opdrachten. Geen weigering.", duration_seconds:180, requires_props:[], target_count:2 },
  { id:"l3-39", level:3, category:"handen", tags:["Aanraken"], command:"Trek het ondergoed van {A} opzij. Raak de huid eronder aan. 10 seconden. Dek weer af.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l3-40", level:3, category:"kledingstuk", tags:["Exhibitionisme"], command:"De groep kiest twee kledingstukken die {A} nu uittrekt. {A} kiest de volgorde.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l3-41", level:3, category:"spanking", tags:["Spanking","Submissie"], command:"{A} vraagt zelf om klappen. Zo veel als ze/hij wil. Jij geeft. Ze/hij stopt wanneer ze/hij wil.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-42", level:3, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)"], command:"Bevredig {A} met je mond door het ondergoed heen. 30 seconden. Geen handen.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l3-43", level:3, category:"blinddoek", tags:["Blinddoek","Aanraken","Voyeurisme"], command:"Doe jezelf een blinddoek om. Laat {A} je aanraken waar ze/hij wil. Raad daarna wat je voelde.", duration_seconds:30, requires_props:["blinddoek"], target_count:2 },
  { id:"l3-44", level:3, category:"handen", tags:["Aanraken","Dominantie"], command:"Houd het haar van {A} vast. Breng haar/zijn oor naar je mond. Fluister een bevel.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-45", level:3, category:"kledingstuk", tags:["Exhibitionisme","Aanraken"], command:"Trek de broek van {A} half omlaag. Kus de huid boven het ondergoed.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-46", level:3, category:"spanking", tags:["Spanking"], command:"Gebruik een vlakke hand op de blote bil van {A}. Drie slagen per kant. {A} zegt dankjewel.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-47", level:3, category:"oraal", tags:["Oraal (geven)"], command:"Lik {A} van achter de knie omhoog langs de binnendij. Stop vijf centimeter voor het einde.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-48", level:3, category:"dominantie", tags:["Dominantie"], command:"Bevel {A}: \"Op de grond. Handen en knieën.\" Laat haar/hem 20 seconden zo blijven.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l3-49", level:3, category:"handen", tags:["Aanraken"], command:"Stop twee vingers in de mond van {A}. Laat haar/hem erop sabbelen. 10 seconden.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l3-50", level:3, category:"kledingstuk", tags:["Exhibitionisme"], command:"{A} trekt haar/zijn eigen ondergoed uit en geeft het aan de groep. Groep kiest wie het houdt.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l3-51", level:3, category:"spanking", tags:["Spanking","Dominantie"], command:"Geef {A} één harde klap. Daarna één zachte. Daarna middelhard. Zie de voorkeur.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-52", level:3, category:"oraal", tags:["Oraal (geven)","Aanraken"], command:"Kus {A} de hele rug omhoog — van taille tot nek. Elke centimeter.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l3-53", level:3, category:"blinddoek", tags:["Blinddoek","Spanking"], command:"{A}: blinddoek om. Jij geeft klappen op willekeurige momenten. {A} mag niet schrikken.", duration_seconds:60, requires_props:["blinddoek"], target_count:2 },
  { id:"l3-54", level:3, category:"handen", tags:["Aanraken","Dominantie"], command:"Houd {A}'s hoofd vast bij de nek. Zeg wat je wil doen. Ze/hij luistert.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-55", level:3, category:"kledingstuk", tags:["Exhibitionisme","Dominantie"], command:"Jij kleedt {A} uit. {A} staat stil en werkt mee. Geen haast.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-56", level:3, category:"spanking", tags:["Spanking","Submissie"], command:"{A} kiest een getal van 1 tot 15. Dat is het aantal slagen dat ze/hij ontvangt. Spijt is niet toegestaan.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-57", level:3, category:"oraal", tags:["Oraal (geven)"], command:"Neem de duim van {A} in je mond. Lik hem langzaam. Zeg daarna: \"Zo doe ik het.\"", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-58", level:3, category:"dominantie", tags:["Dominantie","Submissie"], command:"{A} liegt op haar/zijn rug. Jij houdt haar/zijn armen boven het hoofd. Kijk omlaag. 20 seconden.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l3-59", level:3, category:"handen", tags:["Aanraken"], command:"Toon de groep waar je {A} het liefst aanraakt. Doe het voor. 10 seconden.", duration_seconds:10, requires_props:[], target_count:2 },
  { id:"l3-60", level:3, category:"kledingstuk", tags:["Exhibitionisme","Voyeurisme"], command:"{A} staat voor de groep in haar/zijn ondergoed en beantwoordt drie vragen eerlijk.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l3-61", level:3, category:"spanking", tags:["Spanking"], command:"Gebruik een plat voorwerp (je hand / een tijdschrift) op de blote billen van {A}. Vijf slagen.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-62", level:3, category:"oraal", tags:["Oraal (geven)","Aanraken"], command:"Lik het sleutelbeen van {A} droog terwijl je haar/zijn armen vasthoudt.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-63", level:3, category:"blinddoek", tags:["Blinddoek","Voyeurisme"], command:"Doe {A} een blinddoek om. Groep beschrijft wat ze zien — {A} vormt een beeld.", duration_seconds:30, requires_props:["blinddoek"], target_count:1 },
  { id:"l3-64", level:3, category:"handen", tags:["Aanraken","Dominantie"], command:"Bind de handen van {A} samen met een stropdas. Vertel haar/hem wat je daarna gaat doen.", duration_seconds:null, requires_props:["stropdas"], target_count:2 },
  { id:"l3-65", level:3, category:"kledingstuk", tags:["Exhibitionisme"], command:"Kleed jezelf volledig uit voor {A}. Alleen voor {A}. Neem de tijd.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-66", level:3, category:"spanking", tags:["Spanking","Rollenspel"], command:"Jij bent de leraar. {A} heeft iets slechts gedaan. Sla vijf keer als straf. {A} verontschuldigt zich.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-67", level:3, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)"], command:"Beide knieën voor {A}. Kus van navel naar beneden — stop bij het ondergoed. Terug omhoog.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l3-68", level:3, category:"dominantie", tags:["Dominantie","Submissie"], command:"{A} vraagt jou om toestemming voor elke beweging de komende 2 minuten. Jij keurt goed of af.", duration_seconds:120, requires_props:[], target_count:2 },
  { id:"l3-69", level:3, category:"handen", tags:["Aanraken"], command:"Knijp zachte plekken van {A} aan — dij, bil, buik, nek. Eén knijp per plek. {A} scoort 1-10.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-70", level:3, category:"kledingstuk", tags:["Exhibitionisme","Groepsspel"], command:"{A} kleedt zich uit voor de groep. Groep bepaalt het tempo: sneller / langzamer.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l3-71", level:3, category:"spanking", tags:["Spanking","Dominantie"], command:"Jij geeft de slagen — {A} vraagt erom. Ze/hij zegt: \"Nog één?\" en jij beslist.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-72", level:3, category:"oraal", tags:["Oraal (geven)"], command:"Neem de vinger van {A} langzaam in je mond. Lik hem van wortel naar top. Doe dit drie keer.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-73", level:3, category:"blinddoek", tags:["Blinddoek","Aanraken","Dominantie"], command:"{A}: blinddoek om. Jij tilt een kledingstuk op van het lichaam van {A}. {A} mag niet weten welk.", duration_seconds:null, requires_props:["blinddoek"], target_count:2 },
  { id:"l3-74", level:3, category:"handen", tags:["Aanraken","Spanking"], command:"Grijp de billen van {A} stevig. Knijp hard. Geef daarna een klap. In die volgorde.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-75", level:3, category:"kledingstuk", tags:["Exhibitionisme"], command:"Trek je eigen ondergoed uit terwijl je gekleed bent. Geef het aan {A}.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-76", level:3, category:"spanking", tags:["Spanking"], command:"Gebruik alleen jouw vlakke hand. Tien slagen. Elke slag harder dan de vorige.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-77", level:3, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)"], command:"{A} leunt achterover. Jij kust van de borst naar beneden. Stop pas als {A} 'nu' zegt.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-78", level:3, category:"dominantie", tags:["Dominantie","Submissie"], command:"Jij staat, {A} knielt. Praat van bovenaf naar haar/hem. {A} antwoordt: \"Ja, bedankt.\"", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l3-79", level:3, category:"handen", tags:["Aanraken","Dominantie"], command:"Draai {A} om en duw haar/hem licht voorovergebogen. Houd haar/zijn heupen vast. 15 seconden.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l3-80", level:3, category:"kledingstuk", tags:["Exhibitionisme","Voyeurisme"], command:"{A} kleedt zich uit terwijl jij gedetailleerd beschrijft wat je ziet voor de groep.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-81", level:3, category:"spanking", tags:["Spanking","Rollenspel"], command:"{A} is ongehoorzaam geweest. Twaalf slagen als straf. {A} telt en zegt na elke: \"Dankjewel.\"", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-82", level:3, category:"oraal", tags:["Oraal (geven)"], command:"Lik {A} langs haar/zijn ruggengraat omhoog. Tong volledig uitgestoken.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-83", level:3, category:"blinddoek", tags:["Blinddoek","Spanking"], command:"{A}: blinddoek om. Jij wisselt: aanraken, kussen, slaan. {A} raadt welke volgorde.", duration_seconds:60, requires_props:["blinddoek"], target_count:2 },
  { id:"l3-84", level:3, category:"handen", tags:["Aanraken","Exhibitionisme"], command:"Leid de hand van {A} op haar/zijn eigen lichaam. Jij stuurt. {A} voelt haar/zichzelf.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l3-85", level:3, category:"kledingstuk", tags:["Exhibitionisme","Dominantie"], command:"Jij kleedt {A} aan met wat jij kiest — of trekt aan. {A} heeft niets te zeggen.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-86", level:3, category:"spanking", tags:["Spanking","Submissie"], command:"{A} moet om vijf slagen vragen. Zo. Letterlijk: \"Mag ik vijf slagen?\" Jij geeft ze.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-87", level:3, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)"], command:"Jij zit. {A} staat. Kus haar/zijn buik op ooghoogte. Beweeg niet weg.", duration_seconds:15, requires_props:[], target_count:2 },
  { id:"l3-88", level:3, category:"dominantie", tags:["Dominantie"], command:"Stuur {A} met twee woorden. Ze/hij gehoorzaamt zonder vragen. Twee minuten.", duration_seconds:120, requires_props:[], target_count:2 },
  { id:"l3-89", level:3, category:"handen", tags:["Aanraken","Bondage"], command:"Bind de polsen van {A} samen. Druk ze boven het hoofd tegen de muur. 20 seconden.", duration_seconds:20, requires_props:["touw of stropdas"], target_count:2 },
  { id:"l3-90", level:3, category:"kledingstuk", tags:["Exhibitionisme","Aanraken"], command:"Knoop het shirt van {A} open. Bestudeer wat je ziet. Zeg dan twee woorden.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-91", level:3, category:"spanking", tags:["Spanking","Dominantie"], command:"Varieer per slag: hand / riem als die er is / vlakke kant van iets. Vijf slagen totaal.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-92", level:3, category:"oraal", tags:["Oraal (geven)"], command:"Zit voor {A}. Breng je mond tot 1 cm voor het meest intieme punt. Wacht. Adem. Raak niet aan.", duration_seconds:30, requires_props:[], target_count:2 },
  { id:"l3-93", level:3, category:"blinddoek", tags:["Blinddoek","Aanraken"], command:"{A}: blinddoek om. Iemand anders in de kamer mag haar/hem eenmalig aanraken. {A} raadt wie.", duration_seconds:null, requires_props:["blinddoek"], target_count:1 },
  { id:"l3-94", level:3, category:"handen", tags:["Aanraken","Dominantie"], command:"Duw de schouders van {A} naar achter. Buig haar/zijn hoofd naar achter. Kus de keel.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-95", level:3, category:"kledingstuk", tags:["Exhibitionisme"], command:"{A} staat 60 seconden naakt voor de groep. Geen kruisen, geen handen voor het lichaam.", duration_seconds:60, requires_props:[], target_count:1 },
  { id:"l3-96", level:3, category:"spanking", tags:["Spanking","Submissie"], command:"{A} bukt. Jij geeft slagen tot {A} \"genoeg\" zegt. Minimum drie, maximum twintig.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l3-97", level:3, category:"oraal", tags:["Oraal (geven)","Aanraken"], command:"Kus elke centimeter van de hals van {A}. Trek haar/zijn shirt daarvoor opzij.", duration_seconds:20, requires_props:[], target_count:2 },
  { id:"l3-98", level:3, category:"dominantie", tags:["Dominantie","Submissie","Bondage"], command:"Bind {A} aan een stoel. Kijk haar/hem aan. Zeg: \"Jij gaat doen wat ik zeg.\"", duration_seconds:null, requires_props:["touw"], target_count:2 },
  { id:"l3-99", level:3, category:"handen", tags:["Aanraken"], command:"Masseer {A} volledig van nek tot enkels — voor- en achterkant. Neem de tijd.", duration_seconds:120, requires_props:[], target_count:2 },
  { id:"l3-100", level:3, category:"kledingstuk", tags:["Exhibitionisme","Groepsspel"], command:"De groep kleedt {A} uit. Iedereen mag één kledingstuk weghalen. {A} werkt mee.", duration_seconds:null, requires_props:[], target_count:1 },
];

COMMANDS.push(...L3_EXTRA);

// ─── LEVEL 4 extra (l4-26 t/m l4-100) ────────────────────────────────────────
const L4_EXTRA: Command[] = [
  { id:"l4-26", level:4, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)"], command:"Bevredig {A} volledig met je mond. Geen handen. Stop alleen als {A} klaarkomt of het stopwoord zegt.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-27", level:4, category:"dominantie", tags:["Dominantie","Submissie"], command:"{A} gehoorzaamt alles wat jij de komende 5 minuten zegt. Jij draagt verantwoordelijkheid.", duration_seconds:300, requires_props:[], target_count:2 },
  { id:"l4-28", level:4, category:"spanking", tags:["Spanking","Bondage"], command:"Bind de polsen van {A} achter haar/zijn rug. Geef daarna twintig slagen. {A} telt.", duration_seconds:null, requires_props:["touw of stropdas"], target_count:2 },
  { id:"l4-29", level:4, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel"], command:"{A} masturbeert voor de groep. Iedereen kijkt. Niemand raakt aan tenzij {A} dat vraagt.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l4-30", level:4, category:"dominantie", tags:["Dominantie"], command:"Gebruik {A} als voetensteun de komende 3 minuten. {A} ligt stil.", duration_seconds:180, requires_props:[], target_count:2 },
  { id:"l4-31", level:4, category:"oraal", tags:["Oraal (geven)"], command:"Gebruik alleen je tong op het meest intieme deel van {A}. 90 seconden. Geen handen.", duration_seconds:90, requires_props:[], target_count:2 },
  { id:"l4-32", level:4, category:"spanking", tags:["Spanking","Submissie"], command:"{A} kiest een getal van 5 tot 25. Dat aantal slagen volgt. {A} moet tussentijds zeggen: \"Nog meer?\"", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-33", level:4, category:"dominantie", tags:["Dominantie","Rollenspel"], command:"Jij bent CEO. {A} is je assistent die een grote fout heeft gemaakt. 4 minuten rollenspel. Eindig met straf.", duration_seconds:240, requires_props:[], target_count:2 },
  { id:"l4-34", level:4, category:"exhibitionisme", tags:["Exhibitionisme"], command:"{A} raakt zichzelf aan voor de groep totdat ze/hij op het punt staat — dan stoppen.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l4-35", level:4, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)"], command:"Jij zit. {A} gaat boven op je gezicht zitten. 60 seconden. {A} bepaalt de positie.", duration_seconds:60, requires_props:[], target_count:2 },
  { id:"l4-36", level:4, category:"spanking", tags:["Spanking","Dominantie"], command:"Gebruik een riem of ketting. Tien slagen. Gecontroleerd en gericht.", duration_seconds:null, requires_props:["riem"], target_count:2 },
  { id:"l4-37", level:4, category:"dominantie", tags:["Dominantie","Submissie"], command:"{A} mag de komende 2 minuten absoluut niet bewegen. Jij test de grens. Wie verliest: straf.", duration_seconds:120, requires_props:[], target_count:2 },
  { id:"l4-38", level:4, category:"oraal", tags:["Oraal (geven)","Exhibitionisme"], command:"Bevredig {A} met je mond terwijl de groep toekijkt en hardop commentaar geeft.", duration_seconds:60, requires_props:[], target_count:2 },
  { id:"l4-39", level:4, category:"handen", tags:["Aanraken","Dominantie"], command:"Bevredig {A} met je hand. Snel tempo. Stop als ze/hij klaar is of als jij zegt stop.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-40", level:4, category:"spanking", tags:["Spanking"], command:"Gebruik een lepel of haarborstel op de billen van {A}. Vijftien slagen. Jij kiest het ritme.", duration_seconds:null, requires_props:["lepel of borstel"], target_count:2 },
  { id:"l4-41", level:4, category:"dominantie", tags:["Dominantie","Bondage"], command:"Bind {A} ogen dicht en handen vast. Laat haar/hem 3 minuten zo — jij doet wat jij wil.", duration_seconds:180, requires_props:["blinddoek","touw"], target_count:2 },
  { id:"l4-42", level:4, category:"oraal", tags:["Oraal (geven)"], command:"Dwing {A} op haar/zijn rug. Ga boven haar/hem. Bevredig haar/hem met je mond. 2 minuten.", duration_seconds:120, requires_props:[], target_count:2 },
  { id:"l4-43", level:4, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme"], command:"Jij en {A} betasten elkaar voor de groep. Geen grenzen op niveau 4. 2 minuten.", duration_seconds:120, requires_props:[], target_count:2 },
  { id:"l4-44", level:4, category:"spanking", tags:["Spanking","Submissie"], command:"{A} bedankt jou voor elk slag. Als ze/hij vergeet: begin opnieuw.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-45", level:4, category:"dominantie", tags:["Dominantie","Submissie"], command:"Vertel {A} precies hoe ze/hij jou moet aanraken. {A} voert uit. Jij geeft feedback.", duration_seconds:120, requires_props:[], target_count:2 },
  { id:"l4-46", level:4, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)"], command:"{A} berijdt jouw gezicht. Jij gebruikt je mond. Beiden totdat één stopt.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-47", level:4, category:"spanking", tags:["Spanking","Rollenspel"], command:"Jij bent de rechter. {A} heeft een misdaad gepleegd. Straf: 20 slagen. {A} aanvaardt het oordeel.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-48", level:4, category:"dominantie", tags:["Dominantie"], command:"Beval {A} zichzelf voor jou te bevredigen terwijl jij toekijkt. 2 minuten.", duration_seconds:120, requires_props:[], target_count:2 },
  { id:"l4-49", level:4, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel"], command:"De groep geeft {A} instructies hoe ze/hij zichzelf moet aanraken. {A} volgt op.", duration_seconds:90, requires_props:[], target_count:1 },
  { id:"l4-50", level:4, category:"oraal", tags:["Oraal (geven)","Aanraken"], command:"Gebruik tegelijk mond en handen op {A}. Combineer. Stop als {A} \"genoeg\" zegt.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-51", level:4, category:"spanking", tags:["Spanking","Bondage"], command:"{A}: polsen gebonden. Tien slagen per kant op de billen. Dan loslaten.", duration_seconds:null, requires_props:["touw"], target_count:2 },
  { id:"l4-52", level:4, category:"dominantie", tags:["Dominantie","Submissie","Rollenspel"], command:"Jij bent haar/zijn eigenaar voor 5 minuten. {A} gebruikt 'mevrouw' of 'meneer' voor elk antwoord.", duration_seconds:300, requires_props:[], target_count:2 },
  { id:"l4-53", level:4, category:"oraal", tags:["Oraal (geven)"], command:"Lik {A} 3 minuten. Geen penetratie. Geen handen. Alleen tong.", duration_seconds:180, requires_props:[], target_count:2 },
  { id:"l4-54", level:4, category:"exhibitionisme", tags:["Exhibitionisme"], command:"{A} masturbeert terwijl ze/hij beschrijft wat ze/hij zich voorstelt. De groep luistert.", duration_seconds:60, requires_props:[], target_count:1 },
  { id:"l4-55", level:4, category:"spanking", tags:["Spanking","Dominantie"], command:"Gebruik beide handen afwisselend: links, rechts, links, rechts. Dertig slagen totaal.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-56", level:4, category:"dominantie", tags:["Dominantie","Bondage"], command:"Bind de enkels van {A} aan een stoel. Jij bepaalt alles. 3 minuten.", duration_seconds:180, requires_props:["touw"], target_count:2 },
  { id:"l4-57", level:4, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)"], command:"Wissel: jij geeft 30 seconden, dan geeft {A}. Drie rondes elk.", duration_seconds:180, requires_props:[], target_count:2 },
  { id:"l4-58", level:4, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme"], command:"{A} laat zien — volledig — wat ze/hij het lekkerst vindt om met zichzelf te doen.", duration_seconds:90, requires_props:[], target_count:1 },
  { id:"l4-59", level:4, category:"spanking", tags:["Spanking","Submissie"], command:"{A} kiest een straf voor zichzelf. Jij voert uit — maar verdubbelt het aantal.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-60", level:4, category:"dominantie", tags:["Dominantie"], command:"Geef {A} vijf bevelen in 2 minuten. Elk bevel moet direct worden uitgevoerd.", duration_seconds:120, requires_props:[], target_count:2 },
  { id:"l4-61", level:4, category:"oraal", tags:["Oraal (geven)"], command:"Gebruik je mond op de binnenkant van de dijen van {A}. Kus en lik om beurten. 90 seconden.", duration_seconds:90, requires_props:[], target_count:2 },
  { id:"l4-62", level:4, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel"], command:"Iedereen raakt {A} aan op de plek die ze/hij aanwijst. {A} wijst vijf plekken. Eén per persoon.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l4-63", level:4, category:"spanking", tags:["Spanking"], command:"Gebruik een nat washandje of natte hand op de blote billen van {A}. Twintig slagen.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-64", level:4, category:"dominantie", tags:["Dominantie","Submissie"], command:"{A} vraagt jou toestemming om te spreken, te bewegen, te eten — alles. 3 minuten.", duration_seconds:180, requires_props:[], target_count:2 },
  { id:"l4-65", level:4, category:"oraal", tags:["Oraal (ontvangen)"], command:"{A} forceert jou op je knieën. Jij bevrediigt haar/hem met je mond. 90 seconden.", duration_seconds:90, requires_props:[], target_count:2 },
  { id:"l4-66", level:4, category:"exhibitionisme", tags:["Exhibitionisme"], command:"Jij masturbeert voor {A}. Laat zien hoe ver je kunt gaan in 2 minuten.", duration_seconds:120, requires_props:[], target_count:2 },
  { id:"l4-67", level:4, category:"spanking", tags:["Spanking","Bondage","Dominantie"], command:"{A}: handen achter rug, knielen. Vijftien slagen. Daarna: \"Dankjewel, en nog eens?\"", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-68", level:4, category:"dominantie", tags:["Dominantie","Rollenspel"], command:"Jij bent de dokter. {A} is de patiënt. Volledig lichamelijk onderzoek. 5 minuten.", duration_seconds:300, requires_props:[], target_count:2 },
  { id:"l4-69", level:4, category:"oraal", tags:["Oraal (geven)","Aanraken"], command:"Gebruik tegelijk mond op borst, hand tussen de benen. 60 seconden combinatie.", duration_seconds:60, requires_props:[], target_count:2 },
  { id:"l4-70", level:4, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme"], command:"Jij en {A} bevredigen zichzelf naast elkaar. Geen aanraking. Wel oogcontact.", duration_seconds:90, requires_props:[], target_count:2 },
  { id:"l4-71", level:4, category:"spanking", tags:["Spanking","Submissie"], command:"{A} bedelt om elke slag. Zegt: \"Mag ik er een?\" Jij beslist elke keer. Minimum 10.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-72", level:4, category:"dominantie", tags:["Dominantie","Bondage"], command:"Bind {A} volledig vast. Laat haar/hem 3 minuten zo zitten terwijl jij haar/hem bekijkt.", duration_seconds:180, requires_props:["touw"], target_count:2 },
  { id:"l4-73", level:4, category:"oraal", tags:["Oraal (geven)"], command:"Jij gebruikt je mond. {A} mag pas stoppen als ze/hij heeft geklaard. Geen tijdlimiet.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-74", level:4, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel"], command:"De groep geblinddoekt {A}. Iedereen bevrediigt haar/hem één minuut. {A} raadt wie.", duration_seconds:null, requires_props:["blinddoek"], target_count:1 },
  { id:"l4-75", level:4, category:"spanking", tags:["Spanking","Dominantie"], command:"Vijfentwintig slagen. Neem een pauze bij tien en vijftien. Bespreek de voortgang.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-76", level:4, category:"dominantie", tags:["Dominantie","Submissie"], command:"Jij schrijft een cijfer op de billen van {A} met je vinger. {A} raadt het getal. Fout is extra slag.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-77", level:4, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)"], command:"{A} en jij tegelijkertijd, 69-positie, 2 minuten. Stoppen als één stopt.", duration_seconds:120, requires_props:[], target_count:2 },
  { id:"l4-78", level:4, category:"exhibitionisme", tags:["Exhibitionisme"], command:"{A} kleedt zich volledig uit en beschrijft zichzelf voor de groep terwijl ze/hij dat doet.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l4-79", level:4, category:"spanking", tags:["Spanking","Rollenspel"], command:"Jij bent mevrouw/meneer. {A} was ongehoorzaam. Dertig slagen. {A} excuseert zich na elke tien.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-80", level:4, category:"dominantie", tags:["Dominantie","Submissie"], command:"{A} loopt op haar/zijn knieën van de ene naar de andere kant van de kamer. Jij kijkt.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-81", level:4, category:"oraal", tags:["Oraal (geven)"], command:"Bevredig {A} met je mond op het ritme van een nummer dat iemand kiest. Stop als het nummer stopt.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-82", level:4, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel"], command:"De groep stelt een opdracht in: {A} masturbeert terwijl ze/hij een taak uitvoert (bijv. zingt).", duration_seconds:60, requires_props:[], target_count:1 },
  { id:"l4-83", level:4, category:"spanking", tags:["Spanking","Dominantie","Bondage"], command:"Bind {A}. Geef twintig slagen met tussenpozen. {A} vraagt de volgende reeks aan.", duration_seconds:null, requires_props:["touw"], target_count:2 },
  { id:"l4-84", level:4, category:"dominantie", tags:["Dominantie"], command:"Jij eet of drinkt iets van het lichaam van {A}. {A} bepaalt wat en waar je het plaatst.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-85", level:4, category:"oraal", tags:["Oraal (geven)","Aanraken"], command:"Combineer: mond op nek, hand in broek. Beide tegelijk. 45 seconden.", duration_seconds:45, requires_props:[], target_count:2 },
  { id:"l4-86", level:4, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme"], command:"De groep geeft {A} instructies voor een erotische pose. {A} voert ze uit en houdt ze vast.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l4-87", level:4, category:"spanking", tags:["Spanking","Submissie"], command:"{A} houdt haar/zijn eigen billen uiteen terwijl jij slaat. Tien slagen. Geen wegkijken.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-88", level:4, category:"dominantie", tags:["Dominantie","Submissie","Rollenspel"], command:"{A} speelt een rol die jij kiest. Jij stuurt. Ze/hij speelt overtuigend. 5 minuten.", duration_seconds:300, requires_props:[], target_count:2 },
  { id:"l4-89", level:4, category:"oraal", tags:["Oraal (ontvangen)","Exhibitionisme"], command:"{A} staat. Jij knielt. {A} laat de groep zien hoe jij haar/hem bevrediigt.", duration_seconds:60, requires_props:[], target_count:2 },
  { id:"l4-90", level:4, category:"exhibitionisme", tags:["Exhibitionisme"], command:"{A} masturbeert tot klaar voor de groep. Iedereen kijkt zwijgend.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l4-91", level:4, category:"spanking", tags:["Spanking","Dominantie"], command:"Jij kiest het instrument, het aantal, en de kracht. {A} heeft niets te zeggen. Maximum 40.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-92", level:4, category:"dominantie", tags:["Dominantie","Bondage"], command:"Volledig immobiliseer {A}: polsen, enkels, ogen bedekt. 4 minuten. Jij beslist alles.", duration_seconds:240, requires_props:["touw","blinddoek"], target_count:2 },
  { id:"l4-93", level:4, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)"], command:"Jij geeft oraal aan {A}. {A} geeft tegelijk oraal aan iemand anders. Driehoek. 2 minuten.", duration_seconds:120, requires_props:[], target_count:3 },
  { id:"l4-94", level:4, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel"], command:"De groep betast {A} — ieder op een andere plek — tegelijk. 60 seconden.", duration_seconds:60, requires_props:[], target_count:1 },
  { id:"l4-95", level:4, category:"spanking", tags:["Spanking","Submissie"], command:"{A} kiest: 10 hard of 30 zacht. Dan voert ze/hij de opdracht uit die jij daarna geeft.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-96", level:4, category:"dominantie", tags:["Dominantie","Submissie"], command:"Jij commandeert. {A} vraagt toestemming voor elke handeling. Vijf minuten. Geen uitzondering.", duration_seconds:300, requires_props:[], target_count:2 },
  { id:"l4-97", level:4, category:"oraal", tags:["Oraal (geven)"], command:"Gebruik je mond op de tepels, navel en geslachtsdelen van {A} — in die volgorde. Twee rondes.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-98", level:4, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme"], command:"Jij en {A}: bevredigen elkaar voor de groep terwijl jullie oogcontact houden. 90 seconden.", duration_seconds:90, requires_props:[], target_count:2 },
  { id:"l4-99", level:4, category:"spanking", tags:["Spanking","Dominantie","Bondage"], command:"Vijftig slagen totaal. Pauzes wanneer jij wil. {A} dankt je bij elke tien.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l4-100", level:4, category:"dominantie", tags:["Dominantie","Submissie"], command:"{A} behoort jou toe voor de rest van de spelronde. Nul restricties op niveau 4.", duration_seconds:null, requires_props:[], target_count:2 },
];

COMMANDS.push(...L4_EXTRA);

// ─── LEVEL 5 extra (l5-21 t/m l5-100) ────────────────────────────────────────
const L5_EXTRA: Command[] = [
  { id:"l5-21", level:5, category:"groepsspel", tags:["Groepsspel","Oraal (geven)"], command:"Drie spelers geven {A} oraal tegelijk — elk een andere zone. Wissel op commando. 3 minuten.", duration_seconds:180, requires_props:[], target_count:3 },
  { id:"l5-22", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme"], command:"{A} en {B} bevredigen zichzelf terwijl ze elkaar aankijken. Groep kijkt en zwijgt. Totdat beiden klaar zijn.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l5-23", level:5, category:"dominantie", tags:["Dominantie","Bondage","Submissie"], command:"{A}: polsen en enkels gebonden. Jij doet alles met haar/hem gedurende 5 minuten. Geen gesprek nodig.", duration_seconds:300, requires_props:["touw"], target_count:2 },
  { id:"l5-24", level:5, category:"groepsspel", tags:["Groepsspel","Aanraken"], command:"Iedereen raakt {A} tegelijk aan — een andere plek per persoon. Volle minuut. {A} sluit ogen.", duration_seconds:60, requires_props:[], target_count:1 },
  { id:"l5-25", level:5, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)","Groepsspel"], command:"{A}, {B} en een derde in driehoek: tegelijk. Iedereen geeft en ontvangt. 3 minuten.", duration_seconds:180, requires_props:[], target_count:3 },
  { id:"l5-26", level:5, category:"exhibitionisme", tags:["Exhibitionisme"], command:"{A} masturbeert terwijl ze/hij beschrijft wat ze/hij voelt — anatomisch, gedetailleerd. Groep luistert.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-27", level:5, category:"dominantie", tags:["Dominantie","Submissie"], command:"Jij bezit {A} en {B} tegelijk. Stuur beide. Wissel wie je focus heeft. 5 minuten.", duration_seconds:300, requires_props:[], target_count:3 },
  { id:"l5-28", level:5, category:"groepsspel", tags:["Groepsspel","Spanking"], command:"Iedereen geeft {A} vijf slagen — in eigen tempo, eigen kracht. {A} telt totaal.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-29", level:5, category:"oraal", tags:["Oraal (geven)"], command:"Gebruik je mond op elk lichaamsdeel van {A} dat zij/hij aanwijst. {A} wijst tien plekken. Jij volgt.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l5-30", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel"], command:"De groep beslist wat {A} met zichzelf doet. Elke minuut een nieuwe instructie. 5 minuten.", duration_seconds:300, requires_props:[], target_count:1 },
  { id:"l5-31", level:5, category:"dominantie", tags:["Dominantie","Bondage","Voyeurisme"], command:"{A} en {B} beiden gebonden. Jij bent de regisseur. Wat zij met elkaar doen: jij schrijft het script.", duration_seconds:300, requires_props:["touw"], target_count:3 },
  { id:"l5-32", level:5, category:"groepsspel", tags:["Groepsspel","Oraal (ontvangen)"], command:"{A} ontvangt oraal van drie personen na elkaar — elk 60 seconden. {A} kiest volgorde.", duration_seconds:180, requires_props:[], target_count:3 },
  { id:"l5-33", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Aanraken"], command:"{A} en {B} strelen elkaar voor de groep. Alles is toegestaan. Groep kijkt zwijgend. 3 minuten.", duration_seconds:180, requires_props:[], target_count:2 },
  { id:"l5-34", level:5, category:"dominantie", tags:["Dominantie","Groepsspel"], command:"Jij commandeert de hele groep wat ze met {A} mogen doen. Je bent de regisseur. 5 minuten.", duration_seconds:300, requires_props:[], target_count:1 },
  { id:"l5-35", level:5, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)"], command:"{A} en {B}: 69-positie, voor de groep, totdat één van beiden klaar is.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l5-36", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme"], command:"De hele kamer kijkt naar {A} en {B} terwijl zij zichzelf tegelijk bevredigen. Geen aanraking. 3 minuten.", duration_seconds:180, requires_props:[], target_count:2 },
  { id:"l5-37", level:5, category:"groepsspel", tags:["Groepsspel","Aanraken"], command:"Menselijke ketting: iedereen raakt de persoon voor hen aan op het meest intieme punt. 60 seconden.", duration_seconds:60, requires_props:[], target_count:3 },
  { id:"l5-38", level:5, category:"dominantie", tags:["Dominantie","Bondage"], command:"{A}: ogen, mond en handen gebonden. De groep doet naar believen. Safeword geldt altijd.", duration_seconds:300, requires_props:["touw","blinddoek"], target_count:1 },
  { id:"l5-39", level:5, category:"oraal", tags:["Oraal (geven)","Aanraken","Groepsspel"], command:"{A} ligt. {B} geeft oraal. Een derde streel de rest van het lichaam. 3 minuten samen.", duration_seconds:180, requires_props:[], target_count:3 },
  { id:"l5-40", level:5, category:"exhibitionisme", tags:["Exhibitionisme"], command:"{A} masturbeert tot orgasme. Groep kijkt. Niemand helpt. Niemand spreekt.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-41", level:5, category:"dominantie", tags:["Dominantie","Submissie"], command:"{A} en {B}: wie het langst weerstand biedt aan jouw aanrakingen wint. Jij raakt beiden tegelijk aan.", duration_seconds:120, requires_props:[], target_count:3 },
  { id:"l5-42", level:5, category:"groepsspel", tags:["Groepsspel","Spanking","Oraal (geven)"], command:"Groep beurt: iedereen geeft {A} afwisselend klappen en kussen op de billen. Elk drie van elk.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-43", level:5, category:"oraal", tags:["Oraal (geven)"], command:"Gebruik je mond en tong op {A} zo lang als ze/hij aangeeft. Geen haast. {A} stuurt met aanwijzingen.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l5-44", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel"], command:"De groep kiest twee personen die voor de rest een scene spelen. Alles is toegestaan. 5 minuten.", duration_seconds:300, requires_props:[], target_count:2 },
  { id:"l5-45", level:5, category:"dominantie", tags:["Dominantie","Rollenspel"], command:"Jij schrijft een fantasie uit. {A} en {B} spelen haar. Jij regisseert. Geen grenzen op niveau 5.", duration_seconds:300, requires_props:[], target_count:3 },
  { id:"l5-46", level:5, category:"groepsspel", tags:["Groepsspel","Voyeurisme"], command:"Iedereen zit in een cirkel en bevrediigt zichzelf tegelijkertijd. Oogcontact is verplicht.", duration_seconds:120, requires_props:[], target_count:3 },
  { id:"l5-47", level:5, category:"exhibitionisme", tags:["Exhibitionisme"], command:"{A}: doe een striptease voor de groep waarbij je elke handeling beschrijft terwijl je die uitvoert.", duration_seconds:180, requires_props:[], target_count:1 },
  { id:"l5-48", level:5, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)","Groepsspel"], command:"Rondgang: iedereen geeft {A} 45 seconden oraal, dan volgende. {A} kiest de volgorde.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-49", level:5, category:"dominantie", tags:["Dominantie","Bondage","Groepsspel"], command:"De groep beslist wie {A} bindt en hoe. Daarna beslist de groep wat er verder gebeurt. {A} heeft ingestemd.", duration_seconds:300, requires_props:["touw"], target_count:1 },
  { id:"l5-50", level:5, category:"groepsspel", tags:["Groepsspel","Oraal (geven)","Aanraken"], command:"{A}: lig op je rug. Groep verdeelt het lichaam: één doet mond, één doet handen, één doet benen. 3 minuten.", duration_seconds:180, requires_props:[], target_count:1 },
  { id:"l5-51", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme","Groepsspel"], command:"Wie kan {A} het snelst tot orgasme brengen? De groep neemt beurten van 2 minuten. {A} telt.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-52", level:5, category:"dominantie", tags:["Dominantie","Submissie"], command:"{A} en {B} concurreren wie het beste gehoorzaamt. Jij beoordeelt. De verliezer krijgt extra straf.", duration_seconds:180, requires_props:[], target_count:3 },
  { id:"l5-53", level:5, category:"oraal", tags:["Oraal (geven)","Aanraken"], command:"Gebruik mond en handen tegelijk op {A} en {B} — één voor elk. 2 minuten. Synchroniseer.", duration_seconds:120, requires_props:[], target_count:3 },
  { id:"l5-54", level:5, category:"exhibitionisme", tags:["Exhibitionisme"], command:"De groep schildert een erotische pose voor {A}. {A} voert precies uit. Groep kijkt.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-55", level:5, category:"groepsspel", tags:["Groepsspel","Spanking","Oraal (ontvangen)"], command:"{A}: kies wie je laat slaan en wie je laat bevredigen. Beiden doen het tegelijkertijd. 2 minuten.", duration_seconds:120, requires_props:[], target_count:3 },
  { id:"l5-56", level:5, category:"dominantie", tags:["Dominantie","Rollenspel","Bondage"], command:"Jij speelt tiran. {A} en {B} zijn gevangenen. 5 minuten. Je maakt de regels ter plekke.", duration_seconds:300, requires_props:["touw"], target_count:3 },
  { id:"l5-57", level:5, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)"], command:"{A} en {B}: jullie geven tegelijkertijd oraal aan elkaar terwijl de groep instructies geeft. 3 minuten.", duration_seconds:180, requires_props:[], target_count:2 },
  { id:"l5-58", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel","Voyeurisme"], command:"De groep kijkt toe terwijl {A} en {B} alles doen wat level 5 toelaat. 10 minuten. Zonder regie.", duration_seconds:600, requires_props:[], target_count:2 },
  { id:"l5-59", level:5, category:"dominantie", tags:["Dominantie","Groepsspel","Submissie"], command:"Jij hebt 5 minuten om elke persoon in de groep iets te laten doen. Eén opdracht per persoon.", duration_seconds:300, requires_props:[], target_count:1 },
  { id:"l5-60", level:5, category:"groepsspel", tags:["Groepsspel","Aanraken","Oraal (geven)"], command:"Vijf zone-verdeling: vijf personen, elk verantwoordelijk voor één zone van {A}. Gaan.", duration_seconds:120, requires_props:[], target_count:1 },
  { id:"l5-61", level:5, category:"oraal", tags:["Oraal (geven)"], command:"Gebruik je mond op {A} totdat ze/hij je wegduwt. Dan ga je door. Totdat ze/hij het echt meent.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l5-62", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme"], command:"{A}, {B} en een derde: bevredigen zichzelf voor de groep in competitie. Wie het luidst reageert wint.", duration_seconds:120, requires_props:[], target_count:3 },
  { id:"l5-63", level:5, category:"dominantie", tags:["Dominantie","Bondage"], command:"Bind de groep in een ketting: iedereen gebonden aan de volgende. Jij bent de enige vrije.", duration_seconds:180, requires_props:["touw"], target_count:3 },
  { id:"l5-64", level:5, category:"groepsspel", tags:["Groepsspel","Oraal (ontvangen)","Spanking"], command:"{A} en {B} ontvangen tegelijk: één oraal, één slagen. Daarna wisselen. 4 minuten totaal.", duration_seconds:240, requires_props:[], target_count:2 },
  { id:"l5-65", level:5, category:"exhibitionisme", tags:["Exhibitionisme"], command:"{A}: masturbeert openbaar en beschrijft elk gevoel luidop. Groep maakt geluid mee.", duration_seconds:120, requires_props:[], target_count:1 },
  { id:"l5-66", level:5, category:"dominantie", tags:["Dominantie","Submissie","Rollenspel"], command:"De groep kiest een scenario. Jij speelt de dominante rol. De rest gehoorzaamt. 10 minuten.", duration_seconds:600, requires_props:[], target_count:1 },
  { id:"l5-67", level:5, category:"groepsspel", tags:["Groepsspel","Aanraken"], command:"Elke deelnemer raakt de persoon rechts van hen aan op het meest intieme punt. 3 minuten. Geen stoppen.", duration_seconds:180, requires_props:[], target_count:3 },
  { id:"l5-68", level:5, category:"oraal", tags:["Oraal (geven)","Aanraken","Dominantie"], command:"Jij beslist wanneer {A} mag klaarkomen. Gebruik je mond en breng haar/hem telkens tot de rand. Stop.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l5-69", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel","Voyeurisme"], command:"Iedereen masturbeert tegelijk. Wie als eerste klaar is, mag de rest vertellen wat ze moeten doen.", duration_seconds:null, requires_props:[], target_count:3 },
  { id:"l5-70", level:5, category:"dominantie", tags:["Dominantie","Bondage","Groepsspel"], command:"{A}: volledig geïmmobiliseerd. De groep beslist wat er volgt. Jij houdt toezicht op consent.", duration_seconds:600, requires_props:["touw","blinddoek"], target_count:1 },
  { id:"l5-71", level:5, category:"groepsspel", tags:["Groepsspel","Oraal (geven)"], command:"Rondgang oraal: iedereen 30 seconden op {A}. Zonder te stoppen. {A} kiest wie begint.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-72", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Aanraken"], command:"{A} instrueert de groep haar/zijn lichaam te 'claimen'. Ieder mag één plek kiezen.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-73", level:5, category:"dominantie", tags:["Dominantie","Submissie"], command:"{A} is jouw volledig eigendom voor de rest van de avond. Groep getuigt. Jij bevestigt de afspraak.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l5-74", level:5, category:"groepsspel", tags:["Groepsspel","Spanking","Bondage"], command:"{A}: gebonden. Iedereen geeft tien slagen. Elk in eigen tempo. {A} telt het totaal.", duration_seconds:null, requires_props:["touw"], target_count:1 },
  { id:"l5-75", level:5, category:"oraal", tags:["Oraal (geven)","Oraal (ontvangen)","Groepsspel"], command:"Ketting: {A} geeft aan {B}, {B} geeft aan {C}, {C} geeft aan {A}. Drie minuten gelijktijdig.", duration_seconds:180, requires_props:[], target_count:3 },
  { id:"l5-76", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme"], command:"{A}: laat de groep zien hoe je klaart. Elke stap beschreven. Geen haast.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-77", level:5, category:"dominantie", tags:["Dominantie","Groepsspel"], command:"Jij verdeelt de groep in twee teams. Elk team probeert het andere te domineren. Jij fluit af. 5 minuten.", duration_seconds:300, requires_props:[], target_count:3 },
  { id:"l5-78", level:5, category:"groepsspel", tags:["Groepsspel","Oraal (geven)","Aanraken"], command:"Iedereen aan één persoon: wie brengt haar/hem het verst in 2 minuten? Dan wisselen.", duration_seconds:120, requires_props:[], target_count:1 },
  { id:"l5-79", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel"], command:"{A} kiest: wie mag haar/hem zien klaarkomen? Die persoon(en) kijken toe. De rest keert zich af.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-80", level:5, category:"dominantie", tags:["Dominantie","Bondage","Submissie"], command:"{A}: geblinddoekt, handen vast, volledig overgeleverd. Jij en één ander regisseren de volgende 5 minuten.", duration_seconds:300, requires_props:["blinddoek","touw"], target_count:2 },
  { id:"l5-81", level:5, category:"groepsspel", tags:["Groepsspel","Aanraken","Oraal (geven)"], command:"De groep neemt {A} mee in een fantasie — elk beschrijft een nieuwe scene terwijl ze aanraken.", duration_seconds:300, requires_props:[], target_count:1 },
  { id:"l5-82", level:5, category:"exhibitionisme", tags:["Exhibitionisme"], command:"{A} en {B}: striptease voor elkaar tegelijk. De groep geeft puntenscore voor sensualiteit.", duration_seconds:120, requires_props:[], target_count:2 },
  { id:"l5-83", level:5, category:"dominantie", tags:["Dominantie","Submissie","Rollenspel"], command:"Iedereen speelt een rol die jij kiest. Jij bent schrijver, zij zijn personages. 10 minuten vrij spel.", duration_seconds:600, requires_props:[], target_count:3 },
  { id:"l5-84", level:5, category:"groepsspel", tags:["Groepsspel","Spanking","Oraal (ontvangen)"], command:"{A}: knielen voor de groep. Iedereen geeft afwisselend klappen en kussen. Jij bepaalt het patroon.", duration_seconds:120, requires_props:[], target_count:1 },
  { id:"l5-85", level:5, category:"oraal", tags:["Oraal (geven)","Dominantie"], command:"Jij geeft {A} oraal maar stopt telkens net voor het hoogtepunt. Dit drie keer. Daarna mag ze/hij klaren.", duration_seconds:null, requires_props:[], target_count:2 },
  { id:"l5-86", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel","Voyeurisme"], command:"De kamer kijkt terwijl {A} zichzelf bedient totdat ze/hij klaar is. Geen woord. Geen aanraking van anderen.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-87", level:5, category:"dominantie", tags:["Dominantie","Groepsspel","Bondage"], command:"Jij bindt twee personen samen. Ze moeten samenwerken zonder gebruik van handen. 5 minuten vrij spel.", duration_seconds:300, requires_props:["touw"], target_count:2 },
  { id:"l5-88", level:5, category:"groepsspel", tags:["Groepsspel","Oraal (geven)","Spanking"], command:"Roulette: dobbelsteen bepaalt wat {A} ontvangt — even = oraal, oneven = klappen. Zes worpen.", duration_seconds:null, requires_props:["dobbelsteen"], target_count:1 },
  { id:"l5-89", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme"], command:"{A}: openlijk bevredigen terwijl je de anderen aankijkt — één voor één — zonder te stoppen.", duration_seconds:null, requires_props:[], target_count:1 },
  { id:"l5-90", level:5, category:"dominantie", tags:["Dominantie","Submissie","Groepsspel"], command:"De groep stelt collectieve regels voor {A}. Jij handhaaft. {A} breekt geen enkele regel. 5 minuten.", duration_seconds:300, requires_props:[], target_count:1 },
  { id:"l5-91", level:5, category:"groepsspel", tags:["Groepsspel","Aanraken","Dominantie"], command:"Iedereen trekt een rol: dominante of submissieve. De dominanten sturen de submissieven. 5 minuten.", duration_seconds:300, requires_props:[], target_count:3 },
  { id:"l5-92", level:5, category:"exhibitionisme", tags:["Exhibitionisme"], command:"{A}: beschrijf je meest extreme fantasie terwijl je die zelf uitbeeldt. Groep kijkt en zwijgt.", duration_seconds:180, requires_props:[], target_count:1 },
  { id:"l5-93", level:5, category:"dominantie", tags:["Dominantie","Bondage","Rollenspel"], command:"Jij, {A} en {B}: één schrijft het scenario, twee spelen het — vol en zonder remmingen. 10 minuten.", duration_seconds:600, requires_props:[], target_count:3 },
  { id:"l5-94", level:5, category:"groepsspel", tags:["Groepsspel","Oraal (geven)","Oraal (ontvangen)"], command:"Volledige rondgang: iedereen geeft iedereen 30 seconden oraal. Jij fluit per ronde af.", duration_seconds:null, requires_props:[], target_count:3 },
  { id:"l5-95", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Groepsspel","Aanraken"], command:"De groep voert alles uit wat {A} vraagt — geen grenzen op niveau 5. {A} beslist. 10 minuten.", duration_seconds:600, requires_props:[], target_count:1 },
  { id:"l5-96", level:5, category:"dominantie", tags:["Dominantie","Submissie"], command:"{A} en {B}: één domineert, één gehoorzaamt. Na 5 minuten wisselen van rol. Volledig.", duration_seconds:600, requires_props:[], target_count:2 },
  { id:"l5-97", level:5, category:"groepsspel", tags:["Groepsspel","Spanking","Bondage","Oraal (geven)"], command:"Extreme ronde: {A} gebonden, iedereen kiest één actie — slaan, kussen, oraal of aanraken. Gelijktijdig.", duration_seconds:120, requires_props:["touw"], target_count:1 },
  { id:"l5-98", level:5, category:"exhibitionisme", tags:["Exhibitionisme","Voyeurisme","Groepsspel"], command:"Iedereen masturbeert voor iedereen. Tegelijk. Volledig open. Tot het einde.", duration_seconds:null, requires_props:[], target_count:3 },
  { id:"l5-99", level:5, category:"dominantie", tags:["Dominantie","Groepsspel","Bondage","Submissie"], command:"De ultieme scène: jij regisseert. Iedereen speelt mee. Geen script — alleen jouw bevelen. 10 minuten.", duration_seconds:600, requires_props:[], target_count:3 },
  { id:"l5-100", level:5, category:"vrij", tags:[], command:"De volgende 15 minuten: geen regels, geen timer. Alleen consent. Jullie bepalen alles. Kom terug als jullie klaar zijn.", duration_seconds:900, requires_props:[], target_count:1 },
];

COMMANDS.push(...L5_EXTRA);
