import { getDiceRoll } from './getDiceRoll';

const maleNames = ["Abeodan", "Ace", "Acwel", "Aelle", "Agyfen", "Aheawan", "Alchfrith", "Aldhelm", "Alfred", "Algar", "Alger", "Almund", "Alwin", "Andettan", "Andsaca", "Andswaru", "Andwyrdan", "Ane", "Archerd", "Archibald", "Arlice", "Astyrian", "Avery", "Baldlice", "Bana", "Banan", "Bar", "Bawdewyn", "Beadurinc", "Benoic", "Benwick", "Besyrwan", "Betlic", "Bronson", "Caedwalla", "Caflice", "Camden", "Chapman", "Cynewulf", "Cynn", "Dalston", "Deogol", "Derian", "Drefan", "Dreogan", "Eadig", "Eadlyn", "Eamon", "Ecgfrith", "Edmund", "Edmund", "Eldrid", "Eorl", "Farmon", "Garrett", "Geoff", "Gildas", "Gimm", "Graeme", "Grendel", "Grimbold", "Grimme", "Halig", "Ham", "Landry", "Lange", "Lar", "Leax", "Leng", "Leof", "Lin", "List", "Lufian", "Manton", "Norville", "Odi", "Odin", "Oswine", "Peada", "Perry", "Pierce", "Prasutagus", "Ramm", "Rand", "Rinc", "Ro", "Rypan", "Scrydan", "Seward", "Sihtric", "Stearc", "Stedman", "Swift", "Tamar", "Tolan", "Trace", "Waelfwulf", "Winter", "Wissian", "Worthington"];
const femaleNames = ["Acca", "Aedre", "Aefentid", "Aefre", "Aethelflaed", "Aethelthryth", "Alodia", "Alodie", "Andsware", "Anlicnes", "Annis", "Ar", "Ardith", "Arianrod", "Ashley", "Audrey", "Bearrocscir", "Bernia", "Bisgu", "Bletsung", "Bliss", "Blythe", "Bodicea", "Brigantia", "Brimlad", "Bysen", "Cartimandua", "Cearo", "Chelsea", "Claennis", "Clover", "Cwen", "Cyst", "Daedbot", "Daisy", "Darel", "Darelene", "Darelle", "Darline", "Daryl", "Dawn", "Devona", "Dohtor", "Don", "Eacnung", "Eadgyth", "Easter", "Eda", "Edith", "Edlyn", "Edmunda", "Edrys", "Eldrida", "Elene", "Elga", "Ellenweorc", "Ellette", "Elswyth", "Elva", "Elvina", "Engel", "Eostre", "Erlina", "Esma", "Estra", "Etheswitha", "Freya", "Garmangabis", "Hamia", "Harimilla", "Hilda", "Ifield", "Juliana", "Kendra", "Linette", "Lora", "Loretta", "Lyn", "Mae", "Maida", "Megan", "Mercia", "Moira", "Nelda", "Nerthus", "Odelia", "Ora", "Orva", "Osberga", "Rheda", "Rowena", "Sibley", "Silver", "Sulis", "Sunniva", "Tate", "Udele", "Viradecthis", "Wilda", "Willa"];
const maleDwarfNames = ["Babbar", "Borar", "Dalor", "Dragir", "Gindor", "Givli", "Mavon", "Ravan", "Thodor", "Thorli"];
const femaleDwarfNames = ["Baergi", "Belrin", "Dagna", "Dragrina", "Giva", "Glorna", "Melviel", "Tholga", "Thorgana", "Thorva"];
const maleElfNames = ["Analith", "Celaith", "Elromir", "Fondel", "Galoldur", "Horfir", "Legoriand", "Tinilith", "Thrund", "Unaramir"];
const femaleElfNames = ["Cadrielith", "Deleviel", "Eariothiel", "Elronia", "Glaniel", "Legarawen", "Milmalith", "Sithrade", "Tinoniel", "Throrfiviel"];
const maleHalflingNames = ["Adelard", "Andwise", "Calkin", "Eldon", "Falco", "Griffo", "Halfred", "Olo", "Rosco", "Seredoc"];
const femaleHalflingNames = ["Amaryllia", "Carissa", "Donamira", "Lavinia", "Marigold", "Myrtle", "Pearl", "Ruby", "Seraphina", "Violet"];

const jobList = [
  { name: "Alewife" ,items: "Rolling pin (close, awkward, 1 wt), cask of ale (2 rations, 2 wt)" }, 
  { name: "Apiarist", items: "Staff (close, reach, 1 wt), 1d4 clay jars of honey (1 wt ea.)" }, 
  { name: "Apothecary", items: "Sickle (close, messy, 1 wt), mortar & pestle (0 wt)" }, 
  { name: "Baker", items: "Baking paddle (reach, awkward, 1 wt), sack of flour (2 wt)"}, 
  { name: "Bard", items: "Knife (hand, 0 wt), instrument [roll 1d4: 1 = voice; 2 = flute (0 wt); 3 = lute (1 wt); 4 = horn (1 wt)]" }, 
  { name: "Basketmaker", items: "Knife (hand, 0 wt), sturdy basket (1 wt)" }, 
  { name: "Beggar", items: "1 begging bowl (0 wt), 1d4 coins" }, 
  { name: "Blacksmith", items: "Hammer (close, 1 wt), burlap sack (0 wt), 1d4 iron ingots (1 wt ea.)" }, 
  { name: "Boatwright", items: "Handaxe (close, 1 wt), 2d4 planks of wood (1 wt each)" }, 
  { name: "Bowyer", items: "Shortbow (near, far, 1 wt), arrows (1 ammo, 1 wt), 1d4 sets of staves & sinews (1 wt ea.)" }, 
  { name: "Bricklayer", items: "Trowel (close, awkward, 1 wt), hod (1 wt), 2d4 bricks (1 wt each)" }, 
  { name: "Burglar", items: "Prybar (close, awkward, 1 wt), burlap sack (0 wt)" }, 
  { name: "Butcher", items: "Cleaver (hand, messy, 1 wt), side of salted beef (4 rations, 2 wt)" }, 
  { name: "Carpenter", items: "Handaxe (close, 1 wt), hand saw (1 wt)" }, 
  { name: "Cartwright", items: "Handaxe (close, 1 wt), pushcart" }, 
  { name: "Catchpole", items: "Club (close, 2 wt), shoulder bag (0 wt), 2d6 coins" }, 
  { name: "Chandler", items: "Staff (close, 2-handed, 1 wt), 2d4 candles (0 wt)" }, 
  { name: "Chapman", items: "Staff (close, 2-handed, 1 wt), rucksack (0 wt), trade item [roll 1d4: 1 = worthless baubles (0 wt); 2 = smoked fish (2 rations, 1 wt); 3 = adventuring gear (2 uses, 1 wt); 4 = jewelry (25 coins, 0 wt)]" }, 
  { name: "Cheesemaker", items: "Staff (close, 2-handed, 1 wt), burlap sack (0 wt), wheel of cheese (4 rations, 2 wt)" }, 
  { name: "Cobbler", items: "Tack hammer (hand, 0 wt), 1d4 pairs of shoes or boots (1 wt ea.)" }, 
  { name: "Constable", items: "Shortsword (close, 1 wt), set of iron cuffs w/key (1 wt)" }, 
  { name: "Courier", items: "Knife (hand, 0 wt), leather satchel (0 wt), important letter (0 wt)" }, 
  { name: "Crier", items: "Knife (hand, 0 wt), plumed hat (worn, 0 wt)" }, 
  { name: "Crofter", items: "Pitchfork (close, reach, 1 wt), bushel of crops (4 rations, 2 wt, roll 1d4: 1 = turnips; 2 = potatoes; 3 = onions; 4 = oats)" }, 
  { name: "Crofter", items: "Pitchfork (close, reach, 1 wt), bushel of crops (4 rations, 2 wt, roll 1d4: 1 = turnips; 2 = potatoes; 3 = onions; 4 = oats)" }, 
  { name: "Crofter", items: "Pitchfork (close, reach, 1 wt), bushel of crops (4 rations, 2 wt, roll 1d4: 1 = turnips; 2 = potatoes; 3 = onions; 4 = oats)" }, 
  { name: "Crofter", items: "Pitchfork (close, reach, 1 wt), bushel of crops (4 rations, 2 wt, roll 1d4: 1 = turnips; 2 = potatoes; 3 = onions; 4 = oats)" }, 
  { name: "Ditch digger", items: "Shovel (close, awkward, 2 wt)" }, 
  { name: "Dung carter", items: "Shovel (close, awkward, 2 wt), pushcart full of dung" }, 
  { name: "Dwarf miner", items: "Pick (close, +1 damage, 2 wt), adventuring gear (1d4 uses, 1 wt)" }, 
  { name: "Dwarf smith", items: "Hammer (close, 1 wt), burlap sack (0 wt), 1d4 iron ingots (1 wt ea.)" }, 
  { name: "Dwarf mason", items: "Hammer (close, 1 wt), chisel (hand, awkward, 1 wt)" }, 
  { name: "Dwarf trapper", items: "Knife (hand, 0 wt), burlap sack (0 wt), 1d4 mole traps (1 wt ea.)" }, 
  { name: "Elf hunter", items: "Shortbow (near, far, 1 wt), arrows (1d4 ammo, 1 wt)" }, 
  { name: "Elf troubadour", items: "Knife (hand, 0 wt), elven lyre (1 wt)" }, 
  { name: "Elf wanderer", items: "Staff (close, reach, 1 wt), hooded cloak (worn, 0 wt)" }, 
  { name: "Elf weaver", items: "Knife (hand, 0 wt), bolt of silk (2 wt)" }, 
  { name: "Executioner", items: "Executioner’s axe (close, 2-handed, messy, +1 damage, 2 wt), black hood (worn, 0 wt)" }, 
  { name: "Falconer", items: "Knife (hand, 0 wt), leather gauntlet (0 wt), falcon" }, 
  { name: "Ferry pilot", items: "Club (close, 2 wt), 10’ pole" }, 
  { name: "Fisherperson", items: "Knife (hand, 0 wt), fishing net (reach, thrown)" }, 
  { name: "Fisherperson", items: "Knife (hand, 0 wt), fishing net (reach, thrown)" }, 
  { name: "Fisherperson", items: "Knife (hand, 0 wt), fishing net (reach, thrown)" }, 
  { name: "Fletcher", items: "Shortbow (near, far, 1 wt), arrows (1d4 ammo, 1 wt)" }, 
  { name: "Footpad", items: "Sap (hand, stun damage, 0 wt), burlap sack (0 wt)" }, 
  { name: "Forager", items: "Sickle (hand, messy, 1 wt), burlap sack (0 wt), mushrooms (1d4 rations, 1 wt)" }, 
  { name: "Forester", items: "Shortbow (near, far, 1 wt), arrows (1d4 ammo, 1 wt)" }, 
  { name: "Goatherd", items: "Crook (reach, awkward, 1 wt), 1d4 goat" }, 
  { name: "Goatherd", items: "Crook (reach, awkward, 1 wt), 1d4 goat" }, 
  { name: "Goatherd", items: "Crook (reach, awkward, 1 wt), 1d4 goat" }, 
  { name: "Gravedigger", items: "Shovel (close, awkward, 2 wt)" }, 
  { name: "Halfling brewer", items: "Staff (close, 2-handed, 1 wt), cask of beer (2 rations, 2 wt)" }, 
  { name: "Halfling cook", items: "Cleaver (hand, +1 damage, 1 wt), meat pies (1d4 rations, 1 wt)" }, 
  { name: "Halfling crofter", items: "Pitchfork (close, reach, 1 wt), bushel of crop [2 wt, roll 1d4: 1 = turnips (4 rations); 2 = potatoes (4 rations); 3 =onions (4 rations), 4 = pipeweed]" }, 
  { name: "Halfling gardener", items: "Spade (hand, awkward, 0 wt), wheelbarrow" }, 
  { name: "Healer", items: "Staff (close, 2-handed, 1 wt), shoulder bag (0 wt), bandages (1d4 uses, slow, 0 wt)" }, 
  { name: "Hedge wizard", items: "Staff (close, 2-handed, 1 wt), belt pouch (0 wt), 1 cantrip [roll 1d6: 1-2 = Light; 3-4 = Unseen Servant; 5-6 = Prestidigitation]" }, 
  { name: "Herald", items: "Shortsword (close, 1 wt), trumpet (1 wt)" }, 
  { name: "Herbalist", items: "Staff (close, 2-handed, 1 wt), pouch (0 wt), poultices & herbs (1d4 uses, slow, 0 wt)" }, 
  { name: "Hunter", items: "Shortbow (near, far, 1 wt), arrows (1d4 ammo, 1 wt)" }, 
  { name: "Hunter", items: "Shortbow (near, far, 1 wt), arrows (1d4 ammo, 1 wt)" }, 
  { name: "Hunter", items: "Shortbow (near, far, 1 wt), arrows (1d4 ammo, 1 wt)" }, 
  { name: "Innkeeper", items: "Club (close, 2 wt), provisions (2d4 rations, 2 wt)" }, 
  { name: "Lantern maker", items: "Hammer (close, 1 wt), lantern (0 wt), flask of oil (0 wt), flint & steel (0 wt)" }, 
  { name: "Laundress", items: "Canvas sack (0 wt), cake of soap (0 wt)" }, 
  { name: "Miller", items: "Club (close, 2 wt), sack of flour (2 wt)" }, 
  { name: "Miner", items: "Pick (close, +1 damage, 2 wt), lantern (0 wt), flask of oil (0 wt), flint & steel (0 wt)" }, 
  { name: "Monk", items: "Staff (close, 2-handed, 1 wt), holy symbol (0 wt)" }, 
  { name: "Netmaker", items: "Knife (hand, 0 wt), fishing net (reach, thrown), 50’ of rope (2 wt)" }, 
  { name: "Noble", items: "Longsword (close, +1 damage, 1 wt), signet ring (10 coins, 0 wt)" }, 
  { name: "Oxherd", items: "Whip (reach, 1 wt), ox" }, 
  { name: "Peddler", items: "Knife (hand, 0 wt), rucksack (worn, 0 wt), trade item [roll 1d4: 1 = pots & pans (2 wt); 2 = 2d4 knives (hand, 0 wt), 3 = adventuring gear (1d4 uses, 2 wt), 4 = 1d4 healing potions (heal 1d8, 0 wt)]" }, 
  { name: "Pilgrim", items: "Staff (close, 2-handed, 1 wt), holy symbol (0 wt)" }, 
  { name: "Potter", items: "Club (close, 2 wt), burlap sack (0 wt), 5 lbs. of clay (2 wt)" }, 
  { name: "Prostitute", items: "Knife (hand, 0 wt), flask of perfume (0 wt)" }, 
  { name: "Rat catcher", items: "Club (close, 2 wt), burlap sack (0 wt), 2d4 dead rats (1 wt)" }, 
  { name: "Ropemaker", items: "Club (close, 2 wt), 100’ of rope (2 wt)" }, 
  { name: "Scout", items: "Knife (hand, 0 wt), cloak (worn, 0 wt)" }, 
  { name: "Scribe", items: "2d4 pieces of parchment (0 wt), quill & bottle of ink (0 wt)" }, 
  { name: "Shepherd", items: "Crook (reach, awkward, 1 wt), 1d4 sheep" }, 
  { name: "Shepherd", items: "Crook (reach, awkward, 1 wt), 1d4 sheep" }, 
  { name: "Shepherd", items: "Crook (reach, awkward, 1 wt), 1d4 sheep" }, 
  { name: "Soothsayer", items: "Nothing" }, 
  { name: "Swineherd", items: "Crook (reach, awkward, 1 wt), 1d4 swine" }, 
  { name: "Swineherd", items: "Crook (reach, awkward, 1 wt), 1d4 swine" }, 
  { name: "Swineherd", items: "Crook (reach, awkward, 1 wt), 1d4 swine" }, 
  { name: "Tanner", items: "Knife (hand, 0 wt), 2d4 animal hides (2 wt)" }, 
  { name: "Thatcher", items: "Handaxe (close, 1 wt), 1d4 sheaves of straw (1 wt ea.)" }, 
  { name: "Tinker", items: "Tinker’s tools (0 wt)" }, 
  { name: "Trapper", items: "Knife (hand, 0 wt), traps [roll 1d4: 1 = 2d4 rat traps (0 wt); 2 = 1d4 rabbit traps (2 wt); 3 = 1 snare trap (1 wt); 4 = 1 bear trap (2 wt)" }, 
  { name: "Trapper", items: "Knife (hand, 0 wt), traps [roll 1d4: 1 = 2d4 rat traps (0 wt); 2 = 1d4 rabbit traps (2 wt); 3 = 1 snare trap (1 wt); 4 = 1 bear trap (2 wt)" }, 
  { name: "Trapper", items: "Knife (hand, 0 wt), traps [roll 1d4: 1 = 2d4 rat traps (0 wt); 2 = 1d4 rabbit traps (2 wt); 3 = 1 snare trap (1 wt); 4 = 1 bear trap (2 wt)" }, 
  { name: "Undertaker", items: "Holy symbol (0 wt), coffin (4 wt)" }, 
  { name: "Watchman", items: "Spear (reach, thrown, near, 1 wt), helmet (worn, 0 wt), lantern (0 wt), flask of oil (0 wt), flint & steel (0 wt), horn (0 wt)" }, 
  { name: "Watchman", items: "Spear (reach, thrown, near, 1 wt), helmet (worn, 0 wt), lantern (0 wt), flask of oil (0 wt), flint & steel (0 wt), horn (0 wt)" }, 
  { name: "Watchman", items: "Spear (reach, thrown, near, 1 wt), helmet (worn, 0 wt), lantern (0 wt), flask of oil (0 wt), flint & steel (0 wt), horn (0 wt)" }, 
  { name: "Weaver", items: "1d4 bolts of fabric (1 wt ea.)" }, 
  { name: "Woodsman", items: "Handaxe (close, 1 wt), 2d4 sticks of firewood (1 wt ea.)" }, 
  { name: "Woodsman", items: "Handaxe (close, 1 wt), 2d4 sticks of firewood (1 wt ea.)" }, 
  { name: "Woodsman", items: "Handaxe (close, 1 wt), 2d4 sticks of firewood (1 wt ea.)" }, 
];
const physicalTraits = ["Bald", "Balding", "Barrel-chested", "Big feet", "Big hands", "Bloodshot eyes", "Blue-eyed", "Bony", "Booming voice", "Braided hair", "Broad brow", "Broad chest", "Broad hips", "Broad shoulders", "Buck teeth", "Bushy eyebrows", "Cleft chin", "Crooked teeth", "Curly hair", "Dark eyes", "Dark skin", "Dimples", "Dirty", "Fair-haired", "Fat", "Freckled", "Full lips", "Furrowed brow", "Glowering", "Gnarled fingers", "Greasy-looking", "Hairless", "Hawk-nosed", "High cheekbones", "Hirsute", "Hunchback", "Husky voice", "Lambchop sideburns", "Lanky", "Large ears", "Large eyes", "Large eyes", "Large nose", "Lazy eye", "Limp", "Long arms", "Long beard", "Long fingers", "Long legs", "Long mustache", "Long torso", "Matted hair", "Missing teeth", "Nasal voice", "Nearsighted", "Nose ring", "One ear", "One eye", "One hand", "Pale skin", "Peg leg", "Persistent cough", "Petite", "Piercing(s)", "Plump", "Pop-eyed", "Pot-bellied", "Quiet voice", "Rosy cheeks", "Rotten teeth", "Ruddy", "Scars(s)", "Scowly", "Sharp chin", "Sharp fingernails", "Short", "Short hair", "Skinny", "Small ears", "Small eyes", "Small feet", "Small hands", "Small nose", "Smiley", "Spade-like hands", "Square jaw", "Stocky", "Stubby fingers", "Swan-like neck", "Tall", "Tattoo(s)", "Thick neck", "Unibrow", "Wavy hair", "Weathered", "Well-built", "Well-groomed", "Wheezy", "Whiny", "Wild hair"];
const personalityTraits = ["Absentminded", "Aggressive", "Aloof", "Ambitious", "Arrogant", "Callous", "Calm", "Cantankerous", "Cautious", "Cheerful", "Coarse", "Competitive", "Conceited", "Confident", "Conscientious", "Courageous", "Courteous", "Covetous", "Cowardly", "Crazy", "Crude", "Curious", "Cynical", "Daring", "Deceitful", "Decisive", "Dignified", "Disciplined", "Drunkard", "Earnest", "Earthy", "Efficient", "Egocentric", "Enthusiastic", "Fatalistic", "Fiery", "Foolish", "Forgiving", "Forthright", "Friendly", "Frugal", "Generous", "Gentle", "Good-natured", "Gracious", "Greedy", "Gullible", "Helpful", "Honorable", "Humble", "Honorable", "Humble", "Impulsive", "Kind", "Lazy", "Libidinous", "Loyal", "Melancholic", "Methodical", "Modest", "Moralistic", "Morbid", "Mystical", "Naive", "Neat", "Nihilistic", "Obedient", "Obsessive", "Opportunistic", "Optimistic", "Outspoken", "Paranoid", "Peaceful", "Pedantic", "Plodding", "Power-hungry", "Protective", "Proud", "Quiet", "Realistic", "Religious", "Romantic", "Sadistic", "Sanctimonious", "Sarcastic", "Secretive", "Selfless", "Serious", "Shrewd", "Solitary", "Steadfast", "Stoic", "Stone-cold", "Stubborn", "Superstitious", "Suspicious", "Thorough", "Timid", "Treacherous", "Trusting"];
const bondList = [
  { bondText: '____________ has much to teach me about... [choose or roll 1d6]', bondDetail: '1 = love; 2 = anger; 3 = food; 4 = coin; 5 = raising children; 6 = survival' }, 
  { bondText: '____________ insulted me by... [choose or roll 1d4]', bondDetail: '1 = spitting on me; 2 = calling me names; 3 = insulting my mother; 4 = ignoring me' }, 
  { bondText: '____________ misunderstands me when I say that... [choose or roll 1d4]', bondDetail: '1 = I hate them; 2 = I like them; 3 = they stink; 4 = they are the best among us' }, 
  { bondText: '____________ owes me... [choose or roll 1d6]', bondDetail: '1 = their life; 2 = a favor; 3 = a kiss; 4 = a drink; 5: = 1d4 coins; 6 = a child' }, 
  { bondText: 'I am bound to ____________ because... [choose or roll 1d4]', bondDetail: '1 = they are kin; 2 = I owe them my life; 3 = I have no other friends; 4 = I am their property' }, 
  { bondText: 'I blame ____________ for... [choose or roll 1d4]', bondDetail: '1 = losing that thing; 2 = getting me in trouble; 3 = my loss of faith; 4 = someone’s death' }, 
  { bondText: 'I lied to ____________ about... [choose or roll 1d4]', bondDetail: '1 = my feelings; 2 = where I hid that thing; 3 = my faith; 4 = my family' }, 
  { bondText: 'I saved ____________ from... [choose or roll 1d4]', bondDetail: '1 = drowning; 2 = drink; 3 = a life of crime; 4 = bodily harm' }, 
  { bondText: 'I respect ____________ for... [choose or roll 1d4]', bondDetail: '1 = listening to me; 2 = telling it like it is; 3 = their sacrifice; 4 = their discipline' }, 
  { bondText: 'I stole that thing from ____________ because I needed to... [choose or roll 1d4]', bondDetail: '1 = satisfy an urge; 2 = feed my family; 3 = sell it for profit; 4 = practice' }, 
  { bondText: '____________ and I seek knowledge about... [choose or roll 1d4]', bondDetail: '1 = the wider world; 2 = beasts and monsters; 3 = the ways of the wild; 4 = arcane forces' }, 
  { bondText: 'I trust ____________ because... [choose or roll 1d4]', bondDetail: '1 = we have sworn an oath; 2 = they are kin; 3 = they are wise; 4 = I have no choice' }, 
  { bondText: 'I will convince ____________ of the value of... [choose or roll 1d6]', bondDetail: '1 = my faith; 2 = honor; 3 = power; 4 = coin; 5 = friendship; 6 = knowledge' }, 
  { bondText: 'I will protect ____________ from... [choose or roll 1d4]', bondDetail: '1 = the truth; 2 = dark magic; 3 = themself; 4 = the others' }, 
  { bondText: 'I have much to teach ____________ about... [choose or roll 1d6]', bondDetail: '1 = the gods; 2 = good; 3 = love; 4 = teamwork; 5 = the wild; 6 = the social order' }, 
  { bondText: '____________ must forget about... [choose or roll 1d4]', bondDetail: '1 = their lost loved one; 2 = their mistakes; 3 = my mistakes; 4 = our past together' }, 
  { bondText: '____________ is destined for greatness, because... [choose or roll 1d4]', bondDetail: '1 = the gods have told me so; 2 = they have that special glow; 3 = I say so; 4 = the rest of us are chumps' }, 
  { bondText: 'I will learn ____________’s secret about... [choose or roll 1d4]', bondDetail: '1 = what they stole; 2 = where they’re really from; 3 = [another Villager]; 4 = me' }, 
  { bondText: 'I do not trust ____________ because... [choose or roll 1d4]', bondDetail: '1 = they smell; 2 = they think they’re better; 3 = they’re stupid; 4 = they’re just plain evil' }, 
  { bondText: 'I will soothe ____________’s concerns about... [choose or roll 1d4]', bondDetail: '1 = [another Villager]; 2 = their missing loved one; 3 = coin; 4 = our fate' }, 
];

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

const determineBond = () => {
  const result = getDiceRoll(bondList.length - 1);

  return bondList[result];
}

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
  const { bondText, bondDetail } = determineBond();
  const move = determineRacialMove(race);

  return {
    name,  
    job: job.name, 
    gender, 
    traits, 
    abilities, 
    hp: Math.ceil(abilities[2].score / 4), 
    load: abilities[0].mod + 4, 
    bondText, 
    bondDetail, 
    items: job.items, 
    move
  };
};