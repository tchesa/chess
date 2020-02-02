const nicknames = [
  '3D Waffle',
  'Hightower',
  'Papa Smurf',
  '57 Pixels',
  'Hog Butcher',
  'Pepper Legs',
  '101',
  'Houston',
  'Pinball Wizard',
  'Accidental Genius',
  'Hyper',
  'Pluto',
  'Alpha',
  'Jester',
  'Pogue',
  'Airport Hobo',
  'Jigsaw',
  'Prometheus',
  'Bearded Angler',
  'Joker\'s Grin',
  'Psycho Thinker',
  'Beetle King',
  'Judge',
  'Pusher',
  'Bitmap',
  'Junkyard Dog',
  'Riff Raff',
  'Blister',
  'K-9',
  'Roadblock',
  'Bowie',
  'Keystone',
  'Rooster',
  'Bowler',
  'Kickstart',
  'Sandbox',
  'Breadmaker',
  'Kill Switch',
  'Scrapper',
  'Broomspun',
  'Kingfisher',
  'Screwtape',
  'Buckshot',
  'Kitchen',
  'Sexual Chocolate',
  'Bugger',
  'Knuckles',
  'Shadow Chaser',
  'Cabbie',
  'Lady Killer',
  'Sherwood Gladiator',
  'Candy Butcher',
  'Liquid Science',
  'Shooter',
  'Capital F',
  'Little Cobra',
  'Sidewalk Enforcer',
  'Captain Peroxide',
  'Little General',
  'Skull Crusher',
  'Celtic Charger',
  'Lord Nikon',
  'Sky Bully',
  'Cereal Killer',
  'Lord Pistachio',
  'Slow Trot',
  'Chicago Blackout',
  'Mad Irishman',
  'Snake Eyes',
  'Chocolate Thunder',
  'Mad Jack',
  'Snow Hound',
  'Chuckles',
  'Mad Rascal',
  'Sofa King',
  'Commando',
  'Manimal',
  'Speedwell',
  'Cool Whip',
  'Marbles',
  'Spider Fuji',
  'Cosmo',
  'Married Man',
  'Springheel Jack',
  'Crash Override',
  'Marshmallow',
  'Squatch',
  'Crash Test',
  'Mental',
  'Stacker of Wheat',
  'Crazy Eights',
  'Mercury Reborn',
  'Sugar Man',
  'Criss Cross',
  'Midas',
  'Suicide Jockey',
  'Cross Thread',
  'Midnight Rambler',
  'Swampmasher',
  'Cujo',
  'Midnight Rider',
  'Swerve',
  'Dancing Madman',
  'Mindless Bobcat',
  'Tacklebox',
  'Dangle',
  'Mr. 44',
  'Take Away',
  'Dark Horse',
  'Mr. Fabulous',
  'Tan Stallion',
  'Day Hawk',
  'Mr. Gadget',
  'The China Wall',
  'Desert Haze',
  'Mr. Lucky',
  'The Dude',
  'Digger',
  'Mr. Peppermint',
  'The Flying Mouse',
  'Disco Thunder',
  'Mr. Spy',
  'The Happy Jock',
  'Disco Potato',
  'Mr. Thanksgiving',
  'The Howling Swede',
  'Dr. Cocktail',
  'Mr. Wholesome',
  'Thrasher',
  'Dredd',
  'Mud Pie Man',
  'Toe',
  'Dropkick',
  'Mule Skinner',
  'Toolmaker',
  'Drop Stone',
  'Murmur',
  'Tough Nut',
  'Drugstore Cowboy',
  'Nacho',
  'Trip',
  'Easy Sweep',
  'Natural Mess',
  'Troubadour',
  'Electric Player',
  'Necromancer',
  'Turnip King',
  'Esquire',
  'Neophyte Believer',
  'Twitch',
  'Fast Draw',
  'Nessie',
  'Vagabond Warrior',
  'Flakes',
  'New Cycle',
  'Voluntary',
  'Flint',
  'Nickname Master',
  'Vortex',
  'Freak',
  'Nightmare King',
  'Washer',
  'Gas Man',
  'Night Train',
  'Waylay Dave',
  'Glyph',
  'Old Man Winter',
  'Wheels',
  'Grave Digger',
  'Old Orange Eyes',
  'Wooden Man',
  'Guillotine',
  'Old Regret',
  'Woo Woo',
  'Gunhawk',
  'Onion King',
  'Yellow Menace',
  'High Kingdom Warrior',
  'Osprey',
  'Zero Charisma',
  'Highlander Monk',
  'Overrun',
  'Zesty Dragon',
  'Zod'
]

const random = () => {
  const index = Math.floor(Math.random()*nicknames.length)
  return nicknames[index]
}

export default nicknames
export { random }
