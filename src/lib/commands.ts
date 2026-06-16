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

export function getRandomCommand(
  level: number,
  usedIds: string[] | null | undefined,
  availableTags: string[] | null | undefined,
  targetCount: number = 2
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

  // If pool is empty (all used), allow any command at this level regardless of used status
  const fallbackPool = pool.length > 0 ? pool : COMMANDS.filter(
    (c) => c.level <= level && c.level >= Math.max(1, level - 1) && c.target_count <= targetCount
  );

  if (fallbackPool.length === 0) return null;
  return fallbackPool[Math.floor(Math.random() * fallbackPool.length)];
}
