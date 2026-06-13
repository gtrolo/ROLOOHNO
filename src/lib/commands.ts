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

  // ─── LEVEL 2 — WARM ───────────────────────────────────────────────────────
  {
    id: "l2-01", level: 2, category: "kledingstuk", tags: ["Exhibitionisme"],
    command: "Trek je eigen shirt uit. Blijf 2 minuten zo voor de groep staan. Geen handen voor je lichaam.",
    duration_seconds: 120, requires_props: [], target_count: 1,
  },
  {
    id: "l2-02", level: 2, category: "kussen", tags: ["Kussen", "Aanraken"],
    command: "Lik de hals van {A} van oor tot sleutelbeen. Langzaam. Één keer. Gebruik de volle breedte van je tong.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l2-03", level: 2, category: "handen", tags: ["Aanraken"],
    command: "Stop je hand onder de broek van {A} — over de stof van het ondergoed heen. Beweeg langzaam 30 seconden. Dan eruit.",
    duration_seconds: 30, requires_props: [], target_count: 2,
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
    id: "l2-07", level: 2, category: "handen", tags: ["Aanraken"],
    command: "Ga op schoot bij {A}. Terwijl jij daar zit, geef je een andere speler een kus op de wang.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l2-08", level: 2, category: "aanraking", tags: ["Spanking", "Aanraken"],
    command: "Bijt zachtjes in de schouder of nek van {A}. Net hard genoeg om een secondenlang gevoel achter te laten.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l2-09", level: 2, category: "handen", tags: ["Aanraken"],
    command: "Trek {A}'s hand onder je eigen shirt. Leg hem op je blote huid. Houd 20 seconden vast zonder te bewegen.",
    duration_seconds: 20, requires_props: [], target_count: 2,
  },
  {
    id: "l2-10", level: 2, category: "kussen", tags: ["Kussen"],
    command: "Zeg in het oor van {A}: \"Ik wil je mond op mij voelen.\" Daarna wegkijken en niets zeggen.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },

  // ─── LEVEL 3 — PITTIG ─────────────────────────────────────────────────────
  {
    id: "l3-01", level: 3, category: "ondergoed", tags: ["Exhibitionisme", "Aanraken"],
    command: "Trek de beha van {A} los door de kleding heen — zonder hem uit te doen. Laat hangen.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l3-02", level: 3, category: "blinddoek", tags: ["Blinddoek", "Oraal (ontvangen)"],
    command: "Doe {A} een blinddoek om. Draai haar/hem twee keer rond. Laat haar/hem jouw tepel zoeken met de mond. Timer: 30 seconden.",
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
    command: "Bind de polsen van {A} samen met een das, sjaal of riem. Handen boven het hoofd plaatsen. Houd 2 minuten vast.",
    duration_seconds: 120, requires_props: ["das of sjaal"], target_count: 2,
  },
  {
    id: "l3-07", level: 3, category: "ondergoed", tags: ["Exhibitionisme", "Spanking"],
    command: "Trek het ondergoed van {A} tot halverwege de billen omlaag. Aai met één vinger langzaam over de gleuf van de billen.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l3-08", level: 3, category: "oraal-tease", tags: ["Oraal (geven)"],
    command: "Lik één keer langzaam van het sleutelbeen van {A} naar de navel. Gebruik de volle breedte van je tong.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l3-09", level: 3, category: "oraal-tease", tags: ["Oraal (geven)", "Oraal (ontvangen)"],
    command: "{A} zit op een stoel, benen wijd. Knieel ervoor. Bevredig {A} met je mond door de stof van het ondergoed heen. Timer: 60 seconden.",
    duration_seconds: 60, requires_props: [], target_count: 2,
  },
  {
    id: "l3-10", level: 3, category: "dominantie", tags: ["Dominantie", "Submissie"],
    command: "{A} commandeert jou wat te doen gedurende 2 minuten. Jij gehoorzaamt alles binnen level 3. Niet onderhandelen.",
    duration_seconds: 120, requires_props: [], target_count: 2,
  },

  // ─── LEVEL 4 — RUW ────────────────────────────────────────────────────────
  {
    id: "l4-01", level: 4, category: "bevel", tags: ["Dominantie", "Submissie"],
    command: "Bevel aan {A}: \"Open je mond. Steek je tong uit. Sluit je ogen. Blijf zo staan tot ik zeg stoppen.\" Timer: 60 seconden.",
    duration_seconds: 60, requires_props: [], target_count: 2,
  },
  {
    id: "l4-02", level: 4, category: "kledingstuk", tags: ["Exhibitionisme"],
    command: "Trek de broek én het ondergoed van {A} in één beweging naar de enkels. Zeg: \"Blijf zo staan.\" 30 seconden.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l4-03", level: 4, category: "zelfbevrediging", tags: ["Exhibitionisme", "Voyeurisme"],
    command: "{A}: \"Je mag niet klaarkomen tot ik het zeg. Raak jezelf aan. Ik kijk toe.\" Timer: 2 minuten. Jij kijkt zonder te bewegen.",
    duration_seconds: 120, requires_props: [], target_count: 2,
  },
  {
    id: "l4-04", level: 4, category: "haren", tags: ["Dominantie", "Spanking"],
    command: "Trek {A}'s haar rustig vast bij de nek. Forceer oogcontact. Zeg: \"Zeg nu hardop wat je het liefst met mij doet.\"",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l4-05", level: 4, category: "spanking", tags: ["Spanking"],
    command: "Spank {A} op de blote billen. Drie keer. Na elke slag zegt {A}: \"Dankjewel.\" Jij telt mee.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l4-06", level: 4, category: "dominantie", tags: ["Dominantie"],
    command: "Duw {A} met je rug tegen de muur. Leg je hand op haar/zijn keel — geen druk, alleen aanwezigheid. Fluister: \"Stil zijn.\" 30 seconden.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l4-07", level: 4, category: "oraal", tags: ["Oraal (geven)", "Oraal (ontvangen)"],
    command: "Bevredig {A} met je mond of handen. Stop alleen wanneer {A} het woord \"meer\" zegt. Dan pas doorgaan.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l4-08", level: 4, category: "dominantie", tags: ["Dominantie", "Submissie"],
    command: "\"Op handen en knieën. Nu.\" {A} doet dit. Jij loopt langzaam om haar/hem heen en raakt aan waar je wil. 45 seconden.",
    duration_seconds: 45, requires_props: [], target_count: 2,
  },
  {
    id: "l4-09", level: 4, category: "handen", tags: ["Aanraken", "Exhibitionisme"],
    command: "Leg de hand van {A} op je eigen meest intieme plek. Laat haar/hem voelen. Zeg: \"Dit is wat je met me doet.\"",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l4-10", level: 4, category: "bekentenis", tags: ["Exhibitionisme", "Voyeurisme"],
    command: "Beschrijf hardop aan de groep — terwijl je {A} aankijkt — precies wat je vanavond met haar/hem wil doen. Anatomisch. Geen metaforen.",
    duration_seconds: null, requires_props: [], target_count: 2,
  },

  // ─── LEVEL 5 — EXTREEM ────────────────────────────────────────────────────
  {
    id: "l5-01", level: 5, category: "anatomisch", tags: ["Aanraken", "Oraal (geven)"],
    command: "{A} ligt op de rug. Jij wijst aan en raakt tegelijk aan: \"Clitoris / frenulum. Perineum. Anus.\" Elk lichaamsdeel 10 seconden.",
    duration_seconds: 60, requires_props: [], target_count: 2,
  },
  {
    id: "l5-02", level: 5, category: "groepsspel", tags: ["Groepsspel", "Aanraken"],
    command: "{A} en {B} stimuleren tegelijkertijd {C}: één links, één rechts. Synchroniseren op de metronoom van de app: 60 BPM. Timer: 90 seconden.",
    duration_seconds: 90, requires_props: [], target_count: 3,
  },
  {
    id: "l5-03", level: 5, category: "zelfbevrediging", tags: ["Exhibitionisme", "Voyeurisme"],
    command: "{A} masturbeert terwijl de groep hardop telt van 30 naar 0. Bij 0: stoppen. Ongeacht hoe ver. De groep dicteert het tempo.",
    duration_seconds: null, requires_props: [], target_count: 1,
  },
  {
    id: "l5-04", level: 5, category: "spiegel", tags: ["Exhibitionisme", "Aanraken"],
    command: "{A} staat voor een spiegel terwijl jij haar/hem met vingers penetreert. {A} benoemt elk gevoel hardop: \"Dieper. Sneller. Daar.\"",
    duration_seconds: 60, requires_props: ["spiegel"], target_count: 2,
  },
  {
    id: "l5-05", level: 5, category: "ademcontrole", tags: ["Dominantie", "Submissie"],
    command: "Bedek de mond van {A} gedurende 5 seconden. Direct loslaten. Herhaal 3 keer. Vraag daarna: \"Wil je meer?\"",
    duration_seconds: null, requires_props: [], target_count: 2,
  },
  {
    id: "l5-06", level: 5, category: "groepsspel", tags: ["Groepsspel", "Oraal (geven)"],
    command: "{B} ligt op de buik. {C} zit op haar/hem. {A} geeft {B} oraal. Allen bewegen op commando: \"Nu.\" Interval: 30 seconden.",
    duration_seconds: 120, requires_props: [], target_count: 3,
  },
  {
    id: "l5-07", level: 5, category: "oraal", tags: ["Oraal (geven)", "Aanraken"],
    command: "Lik {A} van sleutelbeen via buik, kort langs geslachtsdelen, door naar de knie. Rechte lijn. Geen pauze. Max 30 seconden.",
    duration_seconds: 30, requires_props: [], target_count: 2,
  },
  {
    id: "l5-08", level: 5, category: "groepsspel", tags: ["Groepsspel", "Dominantie"],
    command: "Drie spelers geven {A} gelijktijdig een bevel. {A} voert alle drie direct uit. Bevelen: \"Lik. Bijt. Fluister.\" Tegelijk. Chaos is het doel.",
    duration_seconds: 60, requires_props: [], target_count: 3,
  },
  {
    id: "l5-09", level: 5, category: "anatomisch", tags: ["Exhibitionisme", "Oraal (ontvangen)"],
    command: "{A} beschrijft aan de groep — anatomisch precies — wat haar/hem het meest opwindt. {B} demonstreert dit direct terwijl {A} beschrijft.",
    duration_seconds: 90, requires_props: [], target_count: 2,
  },
  {
    id: "l5-10", level: 5, category: "reset", tags: [],
    command: "Alle schermen flitsen wit. Timer stopt. \"De volgende 10 minuten: geen regels. Alleen consent. Jullie zijn de regisseurs.\"",
    duration_seconds: 600, requires_props: [], target_count: 1,
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
  const candidates = COMMANDS.filter(
    (c) =>
      c.level <= level &&
      c.level >= Math.max(1, level - 1) &&
      !safeUsed.includes(c.id) &&
      c.target_count <= targetCount &&
      (c.tags.length === 0 || c.tags.some((t) => safeTags.includes(t)))
  );
  if (!candidates.length) {
    const fallback = COMMANDS.filter(
      (c) => c.level <= level && !safeUsed.includes(c.id)
    );
    if (!fallback.length) return null;
    return fallback[Math.floor(Math.random() * fallback.length)];
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}
