import { getDiceRoll } from './getDiceRoll';

const maleNames = ["Abeodan", "Ace", "Acwel", "Aelle", "Agyfen", "Aheawan", "Alchfrith", "Aldhelm", "Alfred", "Algar", "Alger", "Almund", "Alwin", "Andettan", "Andsaca", "Andswaru", "Andwyrdan", "Ane", "Archerd", "Archibald", "Arlice", "Astyrian", "Avery", "Baldlice", "Bana", "Banan", "Bar", "Bawdewyn", "Beadurinc", "Benoic", "Benwick", "Besyrwan", "Betlic", "Bronson", "Caedwalla", "Caflice", "Camden", "Chapman", "Cynewulf", "Cynn", "Dalston", "Deogol", "Derian", "Drefan", "Dreogan", "Eadig", "Eadlyn", "Eamon", "Ecgfrith", "Edmund", "Edmund", "Eldrid", "Eorl", "Farmon", "Garrett", "Geoff", "Gildas", "Gimm", "Graeme", "Grendel", "Grimbold", "Grimme", "Halig", "Ham", "Landry", "Lange", "Lar", "Leax", "Leng", "Leof", "Lin", "List", "Lufian", "Manton", "Norville", "Odi", "Odin", "Oswine", "Peada", "Perry", "Pierce", "Prasutagus", "Ramm", "Rand", "Rinc", "Ro", "Rypan", "Scrydan", "Seward", "Sihtric", "Stearc", "Stedman", "Swift", "Tamar", "Tolan", "Trace", "Waelfwulf", "Winter", "Wissian", "Worthington"];
const femaleNames = ["Acca", "Aedre", "Aefentid", "Aefre", "Aethelflaed", "Aethelthryth", "Alodia", "Alodie", "Andsware", "Anlicnes", "Annis", "Ar", "Ardith", "Arianrod", "Ashley", "Audrey", "Bearrocscir", "Bernia", "Bisgu", "Bletsung", "Bliss", "Blythe", "Bodicea", "Brigantia", "Brimlad", "Bysen", "Cartimandua", "Cearo", "Chelsea", "Claennis", "Clover", "Cwen", "Cyst", "Daedbot", "Daisy", "Darel", "Darelene", "Darelle", "Darline", "Daryl", "Dawn", "Devona", "Dohtor", "Don", "Eacnung", "Eadgyth", "Easter", "Eda", "Edith", "Edlyn", "Edmunda", "Edrys", "Eldrida", "Elene", "Elga", "Ellenweorc", "Ellette", "Elswyth", "Elva", "Elvina", "Engel", "Eostre", "Erlina", "Esma", "Estra", "Etheswitha", "Freya", "Garmangabis", "Hamia", "Harimilla", "Hilda", "Ifield", "Juliana", "Kendra", "Linette", "Lora", "Loretta", "Lyn", "Mae", "Maida", "Megan", "Mercia", "Moira", "Nelda", "Nerthus", "Odelia", "Ora", "Orva", "Osberga", "Rheda", "Rowena", "Sibley", "Silver", "Sulis", "Sunniva", "Tate", "Udele", "Viradecthis", "Wilda", "Willa"];
const maleDwarfNames = ["Babbar", "Borar", "Dalor", "Dragir", "Gindor", "Givli", "Mavon", "Ravan", "Thodor", "Thorli"];
const femaleDwarfNames = ["Baergi", "Belrin", "Dagna", "Dragrina", "Giva", "Glorna", "Melviel", "Tholga", "Thorgana", "Thorva"];
const maleElfNames = ["Analith", "Celaith", "Elromir", "Fondel", "Galoldur", "Horfir", "Legoriand", "Tinilith", "Thrund", "Unaramir"];
const femaleElfNames = ["Cadrielith", "Deleviel", "Eariothiel", "Elronia", "Glaniel", "Legarawen", "Milmalith", "Sithrade", "Tinoniel", "Throrfiviel"];
const maleHalflingNames = ["Adelard", "Andwise", "Calkin", "Eldon", "Falco", "Griffo", "Halfred", "Olo", "Rosco", "Seredoc"];
const femaleHalflingNames = ["Amaryllia", "Carissa", "Donamira", "Lavinia", "Marigold", "Myrtle", "Pearl", "Ruby", "Seraphina", "Violet"];

const jobList = ["Alewife", "Apiarist", "Apothecary", "Baker", "Bard", "Basketmaker", "Beggar", "Blacksmith", "Boatwright", "Bowyer", "Bricklayer", "Burglar", "Butcher", "Carpenter", "Cartwright", "Catchpole", "Chandler", "Chapman", "Cheesemaker", "Cobbler", "Constable", "Courier", "Crier", "Crofter", "Crofter", "Crofter", "Crofter", "Ditch digger", "Dung carter", "Dwarf miner", "Dwarf smith", "Dwarf mason", "Dwarf trapper", "Elf hunter", "Elf troubador", "Elf wanderer", "Elf weaver", "Executioner", "Falconer", "Ferry pilot", "Fisherperson", "Fisherperson", "Fisherperson", "Fletcher", "Footpad", "Forager", "Forester", "Goatherd", "Goatherd", "Goatherd", "Gravedigger", "Halfling brewer", "Halfling cook", "Halfling crofter", "Halfling gardener", "Healer", "Hedge wizard", "Herald", "Herbalist", "Hunter", "Hunter", "Hunter", "Innkeeper", "Lantern maker", "Laundress", "Miller", "Miner", "Monk", "Netmaker", "Noble", "Oxherd", "Peddler", "Pilgrim", "Potter", "Prostitute", "Rat catcher", "Ropemaker", "Scout", "Scribe", "Shepherd", "Shepherd", "Shepherd", "Soothsayer", "Swineherd", "Swineherd", "Swineherd", "Tanner", "Thatcher", "Tinker", "Trapper", "Trapper", "Trapper", "Undertaker", "Watchman", "Watchman", "Watchman", "Weaver", "Woodsman", "Woodsman", "Woodsman"];
const physicalTraits = ["Bald", "Balding", "Barrel-chested", "Big feet", "Big hands", "Bloodshot eyes", "Blue-eyed", "Bony", "Booming voice", "Braided hair", "Broad brow", "Broad chest", "Broad hips", "Broad shoulders", "Buck teeth", "Bushy eyebrows", "Cleft chin", "Crooked teeth", "Curly hair", "Dark eyes", "Dark skin", "Dimples", "Dirty", "Fair-haired", "Fat", "Freckled", "Full lips", "Furrowed brow", "Glowering", "Gnarled fingers", "Greasy-looking", "Hairless", "Hawk-nosed", "High cheekbones", "Hirsute", "Hunchback", "Husky voice", "Lambchop sideburns", "Lanky", "Large ears", "Large eyes", "Large eyes", "Large nose", "Lazy eye", "Limp", "Long arms", "Long beard", "Long fingers", "Long legs", "Long mustache", "Long torso", "Matted hair", "Missing teeth", "Nasal voice", "Nearsighted", "Nose ring", "One ear", "One eye", "One hand", "Pale skin", "Peg leg", "Persistent cough", "Petite", "Piercing(s)", "Plump", "Pop-eyed", "Pot-bellied", "Quiet voice", "Rosy cheeks", "Rotten teeth", "Ruddy", "Scars(s)", "Scowly", "Sharp chin", "Sharp fingernails", "Short", "Short hair", "Skinny", "Small ears", "Small eyes", "Small feet", "Small hands", "Small nose", "Smiley", "Spade-like hands", "Square jaw", "Stocky", "Stubby fingers", "Swan-like neck", "Tall", "Tattoo(s)", "Thick neck", "Unibrow", "Wavy hair", "Weathered", "Well-built", "Well-groomed", "Wheezy", "Whiny", "Wild hair"];
const personalityTraits = ["Absentminded", "Aggressive", "Aloof", "Ambitious", "Arrogant", "Callous", "Calm", "Cantankerous", "Cautious", "Cheerful", "Coarse", "Competitive", "Conceited", "Confident", "Conscientious", "Courageous", "Courteous", "Covetous", "Cowardly", "Crazy", "Crude", "Curious", "Cynical", "Daring", "Deceitful", "Decisive", "Dignified", "Disciplined", "Drunkard", "Earnest", "Earthy", "Efficient", "Egocentric", "Enthusiastic", "Fatalistic", "Fiery", "Foolish", "Forgiving", "Forthright", "Friendly", "Frugal", "Generous", "Gentle", "Good-natured", "Gracious", "Greedy", "Gullible", "Helpful", "Honorable", "Humble", "Honorable", "Humble", "Impulsive", "Kind", "Lazy", "Libidinous", "Loyal", "Melancholic", "Methodical", "Modest", "Moralistic", "Morbid", "Mystical", "Naive", "Neat", "Nihilistic", "Obedient", "Obsessive", "Opportunistic", "Optimistic", "Outspoken", "Paranoid", "Peaceful", "Pedantic", "Plodding", "Power-hungry", "Protective", "Proud", "Quiet", "Realistic", "Religious", "Romantic", "Sadistic", "Sanctimonious", "Sarcastic", "Secretive", "Selfless", "Serious", "Shrewd", "Solitary", "Steadfast", "Stoic", "Stone-cold", "Stubborn", "Superstitious", "Suspicious", "Thorough", "Timid", "Treacherous", "Trusting"];

const determineRace = result => {
  const rolledRace = result + 1;

  if (rolledRace > 29 && rolledRace < 34) 
    return 'dwarf';
  else if (rolledRace > 33 && rolledRace < 38) 
    return 'elf';
  else if (rolledRace > 51 && rolledRace < 56) 
    return 'halfling';
  else return 'human';
};

const determineGender = () => {
	let result = getDiceRoll(6);

	if (result < 4) {
		return 'Male';
	} else if (result >= 4) {
		return 'Female';
	};
};

const determineName = (race, gender) => {
  if (race === 'dwarf') 
    if (gender === 'Male') return maleDwarfNames[getDiceRoll(maleDwarfNames.length - 1)];
    else return femaleDwarfNames[getDiceRoll(femaleDwarfNames.length - 1)];

  if (race === 'elf') 
    if (gender === 'Male') return maleElfNames[getDiceRoll(maleElfNames.length - 1)];
    else return femaleElfNames[getDiceRoll(femaleElfNames.length - 1)];

  if (race === 'halfling') 
    if (gender === 'Male') return maleHalflingNames[getDiceRoll(maleHalflingNames.length - 1)];
    else return femaleHalflingNames[getDiceRoll(femaleHalflingNames.length - 1)];

  if (race === 'human') 
    if (gender === 'Male') return maleNames[getDiceRoll(maleNames.length - 1)];
    else return femaleNames[getDiceRoll(femaleNames.length - 1)];
};

const determineTraits = () => {
  const [ physicalResult, personalityResult ] = [getDiceRoll(99), getDiceRoll(99)];

  return `${physicalTraits[physicalResult]}, ${personalityTraits[personalityResult]}`;
};

const determineMod = score => {
  switch (true) {
    case (score < 4):
      return -3;
    case (score >= 4 && score < 6):
      return -2;
    case (score >= 6 && score < 9):
      return -1;
    case (score >= 9 && score < 13):
      return 0;
    case (score >= 13 && score < 16):
      return 1;
    case (score >= 16 && score < 18):
      return 2;
    case (score === 18):
      return 3;
  };
};

const determineAbility = abilityName => {
  const score = getDiceRoll(6, 3);
  const mod = determineMod(score);

  return {
    name: abilityName, 
    abbrev: abilityName.substring(0, 3).toUpperCase(), 
    score, 
    mod
  };
};

const determineRacialMove = race => {
  switch (true) {
    case (race === 'dwarf'):
      return 'Smell Gold';
    case (race === 'elf'):
      return 'Tread Lightly';
    case (race === 'halfling'):
      return 'Make Friends';
    case (race === 'human'):
      return null;
  }
};

export function getCharacter() {
  const rolledJobList= getDiceRoll(jobList.length - 1);
  const job = jobList[rolledJobList];
  const race = determineRace(rolledJobList);
  const gender = determineGender();
  const name = determineName(race, gender);
  const traits = determineTraits();
  const abilities = [
    determineAbility('Strength'), 
    determineAbility('Dexterity'), 
    determineAbility('Constitution'), 
    determineAbility('Intelligence'), 
    determineAbility('Wisdom'), 
    determineAbility('Charisma')
  ];
  const move = determineRacialMove(race);

  return {
    name,  
    job, 
    gender, 
    traits, 
    abilities, 
    hp: Math.ceil(abilities[2].score / 4), 
    load: abilities[0].mod + 4, 
    move
  };
};