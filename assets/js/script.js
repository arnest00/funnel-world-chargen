var musterBtn = document.querySelector("button");
var attributes = [
	document.querySelector("#str"),
	document.querySelector("#dex"),
	document.querySelector("#con"),
	document.querySelector("#int"),
	document.querySelector("#wis"),
	document.querySelector("#cha"),
];
var attrMods = document.querySelectorAll(".mod");
var hp = document.querySelector("#hp");
var gender = document.querySelector("#gender");
var randomName = document.querySelector("#name");
var load = document.querySelector("#load");
var randomJob = document.querySelector("#job");
var traits = document.querySelector("#traits");
var racialMove = document.querySelector("#move");
var isDwarf = false;
var isElf = false;
var isHalfling = false;
var maleNames = ["Abeodan", "Ace", "Acwel", "Aelle", "Agyfen", "Aheawan", "Alchfrith", "Aldhelm", "Alfred", "Algar", "Alger", "Almund", "Alwin", "Andettan", "Andsaca", "Andswaru", "Andwyrdan", "Ane", "Archerd", "Archibald", "Arlice", "Astyrian", "Avery", "Baldlice", "Bana", "Banan", "Bar", "Bawdewyn", "Beadurinc", "Benoic", "Benwick", "Besyrwan", "Betlic", "Bronson", "Caedwalla", "Caflice", "Camden", "Chapman", "Cynewulf", "Cynn", "Dalston", "Deogol", "Derian", "Drefan", "Dreogan", "Eadig", "Eadlyn", "Eamon", "Ecgfrith", "Edmund", "Edmund", "Eldrid", "Eorl", "Farmon", "Garrett", "Geoff", "Gildas", "Gimm", "Graeme", "Grendel", "Grimbold", "Grimme", "Halig", "Ham", "Landry", "Lange", "Lar", "Leax", "Leng", "Leof", "Lin", "List", "Lufian", "Manton", "Norville", "Odi", "Odin", "Oswine", "Peada", "Perry", "Pierce", "Prasutagus", "Ramm", "Rand", "Rinc", "Ro", "Rypan", "Scrydan", "Seward", "Sihtric", "Stearc", "Stedman", "Swift", "Tamar", "Tolan", "Trace", "Waelfwulf", "Winter", "Wissian", "Worthington"];
var maleDwarfNames = ["Babbar", "Borar", "Dalor", "Dragir", "Gindor", "Givli", "Mavon", "Ravan", "Thodor", "Thorli"];
var maleElfNames = ["Analith", "Celaith", "Elromir", "Fondel", "Galoldur", "Horfir", "Legoriand", "Tinilith", "Thrund", "Unaramir"];
var maleHalflingNames = ["Adelard", "Andwise", "Calkin", "Eldon", "Falco", "Griffo", "Halfred", "Olo", "Rosco", "Seredoc"];
var femaleNames = ["Acca", "Aedre", "Aefentid", "Aefre", "Aethelflaed", "Aethelthryth", "Alodia", "Alodie", "Andsware", "Anlicnes", "Annis", "Ar", "Ardith", "Arianrod", "Ashley", "Audrey", "Bearrocscir", "Bernia", "Bisgu", "Bletsung", "Bliss", "Blythe", "Bodicea", "Brigantia", "Brimlad", "Bysen", "Cartimandua", "Cearo", "Chelsea", "Claennis", "Clover", "Cwen", "Cyst", "Daedbot", "Daisy", "Darel", "Darelene", "Darelle", "Darline", "Daryl", "Dawn", "Devona", "Dohtor", "Don", "Eacnung", "Eadgyth", "Easter", "Eda", "Edith", "Edlyn", "Edmunda", "Edrys", "Eldrida", "Elene", "Elga", "Ellenweorc", "Ellette", "Elswyth", "Elva", "Elvina", "Engel", "Eostre", "Erlina", "Esma", "Estra", "Etheswitha", "Freya", "Garmangabis", "Hamia", "Harimilla", "Hilda", "Ifield", "Juliana", "Kendra", "Linette", "Lora", "Loretta", "Lyn", "Mae", "Maida", "Megan", "Mercia", "Moira", "Nelda", "Nerthus", "Odelia", "Ora", "Orva", "Osberga", "Rheda", "Rowena", "Sibley", "Silver", "Sulis", "Sunniva", "Tate", "Udele", "Viradecthis", "Wilda", "Willa"];
var femaleDwarfNames = ["Baergi", "Belrin", "Dagna", "Dragrina", "Giva", "Glorna", "Melviel", "Tholga", "Thorgana", "Thorva"];
var femaleElfNames = ["Cadrielith", "Deleviel", "Eariothiel", "Elronia", "Glaniel", "Legarawen", "Milmalith", "Sithrade", "Tinoniel", "Throrfiviel"];
var femaleHalflingNames = ["Amaryllia", "Carissa", "Donamira", "Lavinia", "Marigold", "Myrtle", "Pearl", "Ruby", "Seraphina", "Violet"];
var jobList = ["Alewife", "Apiarist", "Apothecary", "Baker", "Bard", "Basketmaker", "Beggar", "Blacksmith", "Boatwright", "Bowyer", "Bricklayer", "Burglar", "Butcher", "Carpenter", "Cartwright", "Catchpole", "Chandler", "Chapman", "Cheesemaker", "Cobbler", "Constable", "Courier", "Crier", "Crofter", "Crofter", "Crofter", "Crofter", "Ditch digger", "Dung carter", "Dwarf miner", "Dwarf smith", "Dwarf mason", "Dwarf trapper", "Elf hunter", "Elf troubador", "Elf wanderer", "Elf weaver", "Executioner", "Falconer", "Ferry pilot", "Fisherperson", "Fisherperson", "Fisherperson", "Fletcher", "Footpad", "Forager", "Forester", "Goatherd", "Goatherd", "Goatherd", "Gravedigger", "Halfling brewer", "Halfling cook", "Halfling crofter", "Halfling gardener", "Healer", "Hedge wizard", "Herald", "Herbalist", "Hunter", "Hunter", "Hunter", "Innkeeper", "Lantern maker", "Laundress", "Miller", "Miner", "Monk", "Netmaker", "Noble", "Oxherd", "Peddler", "Pilgrim", "Potter", "Prostitute", "Rat catcher", "Ropemaker", "Scout", "Scribe", "Shepherd", "Shepherd", "Shepherd", "Soothsayer", "Swineherd", "Swineherd", "Swineherd", "Tanner", "Thatcher", "Tinker", "Trapper", "Trapper", "Trapper", "Undertaker", "Watchman", "Watchman", "Watchman", "Weaver", "Woodsman", "Woodsman", "Woodsman"];
var physTraits = ["Bald", "Balding", "Barrel-chested", "Big feet", "Big hands", "Bloodshot eyes", "Blue-eyed", "Bony", "Booming voice", "Braided hair", "Broad brow", "Broad chest", "Broad hips", "Broad shoulders", "Buck teeth", "Bushy eyebrows", "Cleft chin", "Crooked teeth", "Curly hair", "Dark eyes", "Dark skin", "Dimples", "Dirty", "Fair-haired", "Fat", "Freckled", "Full lips", "Furrowed brow", "Glowering", "Gnarled fingers", "Greasy-looking", "Hairless", "Hawk-nosed", "High cheekbones", "Hirsute", "Hunchback", "Husky voice", "Lambchop sideburns", "Lanky", "Large ears", "Large eyes", "Large eyes", "Large nose", "Lazy eye", "Limp", "Long arms", "Long beard", "Long fingers", "Long legs", "Long mustache", "Long torso", "Matted hair", "Missing teeth", "Nasal voice", "Nearsighted", "Nose ring", "One ear", "One eye", "One hand", "Pale skin", "Peg leg", "Persistent cough", "Petite", "Piercing(s)", "Plump", "Pop-eyed", "Pot-bellied", "Quiet voice", "Rosy cheeks", "Rotten teeth", "Ruddy", "Scars(s)", "Scowly", "Sharp chin", "Sharp fingernails", "Short", "Short hair", "Skinny", "Small ears", "Small eyes", "Small feet", "Small hands", "Small nose", "Smiley", "Spade-like hands", "Square jaw", "Stocky", "Stubby fingers", "Swan-like neck", "Tall", "Tattoo(s)", "Thick neck", "Unibrow", "Wavy hair", "Weathered", "Well-built", "Well-groomed", "Wheezy", "Whiny", "Wild hair"];
var persTraits = ["Absentminded", "Aggressive", "Aloof", "Ambitious", "Arrogant", "Callous", "Calm", "Cantankerous", "Cautious", "Cheerful", "Coarse", "Competitive", "Conceited", "Confident", "Conscientious", "Courageous", "Courteous", "Covetous", "Cowardly", "Crazy", "Crude", "Curious", "Cynical", "Daring", "Deceitful", "Decisive", "Dignified", "Disciplined", "Drunkard", "Earnest", "Earthy", "Efficient", "Egocentric", "Enthusiastic", "Fatalistic", "Fiery", "Foolish", "Forgiving", "Forthright", "Friendly", "Frugal", "Generous", "Gentle", "Good-natured", "Gracious", "Greedy", "Gullible", "Helpful", "Honorable", "Humble", "Honorable", "Humble", "Impulsive", "Kind", "Lazy", "Libidinous", "Loyal", "Melancholic", "Methodical", "Modest", "Moralistic", "Morbid", "Mystical", "Naive", "Neat", "Nihilistic", "Obedient", "Obsessive", "Opportunistic", "Optimistic", "Outspoken", "Paranoid", "Peaceful", "Pedantic", "Plodding", "Power-hungry", "Protective", "Proud", "Quiet", "Realistic", "Religious", "Romantic", "Sadistic", "Sanctimonious", "Sarcastic", "Secretive", "Selfless", "Serious", "Shrewd", "Solitary", "Steadfast", "Stoic", "Stone-cold", "Stubborn", "Superstitious", "Suspicious", "Thorough", "Timid", "Treacherous", "Trusting"];

musterBtn.addEventListener("click", function() {
	racialMove.textContent = "";
	isDwarf = false;
	isElf = false;
	isHalfling = false;
	detStats();
	rollGender();
	chooseJob();
	chooseName();
	detRacialMove();
	detTraits();
});

function rollDice(sides, amt = 1) {
	let result = 0;
	for(let i = 0; i < amt; i++) {
		result += Math.floor(Math.random() * sides) + 1;
	};
	return result;
}

function detStats() {
	for(var i = 0; i < attributes.length; i++) {
		attributes[i].textContent = rollDice(6, 3);
	};
	detMods(attributes);
	hp.textContent = Math.ceil(Number(attributes[2].textContent) / 4);
	load.textContent = Number(attrMods[0].textContent) + 4;
};

function rollGender() {
	var i = rollDice(6);
	if(i < 4) {
		gender.textContent = "Male";
	} else if(i >= 4) {
		gender.textContent = "Female";
	};
};

function chooseName() {
	var i = -1 + rollDice(100);
	var j = -1 + rollDice(10);
	if(gender.textContent === "Male") {
		if(isDwarf === true) {
			randomName.textContent = maleDwarfNames[j];
		} else if(isElf === true) {
			randomName.textContent = maleElfNames[j];
		} else if(isHalfling === true) {
			randomName.textContent = maleHalflingNames[j];
		} else {
			randomName.textContent = maleNames[i];
		};
	} else {
		if(isDwarf === true) {
			randomName.textContent = femaleDwarfNames[j];
		} else if(isElf === true) {
			randomName.textContent = femaleElfNames[j];
		} else if(isHalfling === true) {
			randomName.textContent = femaleHalflingNames[j];
		} else {
			randomName.textContent = femaleNames[i];
		};
	};
};

function chooseJob() {
	var i = rollDice(100);
	if(i > 29 && i < 34) {
		isDwarf = true;
	};
	if(i > 33 && i < 38) {
		isElf = true;
	};
	if(i > 51 && i < 56) {
		isHalfling = true;
	};
	i -= 1;
	randomJob.textContent = jobList[i];
};

function detMods(arr) {
	for(var i = 0; i < arr.length; i++) {
	// assign mods
		if(arr[i].textContent < 4) {
			attrMods[i].textContent = -3;
		} else if(arr[i].textContent >= 4 && arr[i].textContent < 6) {
			attrMods[i].textContent = -2;
		} else if(arr[i].textContent >= 6 && arr[i].textContent < 9) {
			attrMods[i].textContent = -1;
		} else if(arr[i].textContent >= 9 && arr[i].textContent < 13) {
			attrMods[i].textContent = 0;
		} else if(arr[i].textContent >= 13 && arr[i].textContent < 16) {
			attrMods[i].textContent = 1;
		} else if(arr[i].textContent >= 16 && arr[i].textContent < 17) {
			attrMods[i].textContent = 2;
		} else {
			attrMods[i].textContent = 3;
		};
	};
};

function detTraits() {
	var i = -1 + rollDice(100);
	var j = -1 + rollDice(100);
	traits.textContent = physTraits[i] + ", " + persTraits[j];
};

function detRacialMove() {
	if(isDwarf === true) {
		racialMove.textContent += ", Smell Gold";
	} else if(isElf === true) {
		racialMove.textContent += ", Tread Lightly";
	} else if(isHalfling === true) {
		racialMove.textContent += ", Make Friends";
	};
};