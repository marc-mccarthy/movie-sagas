-- CREATE DATABASE "saga_movies_weekend"
CREATE TABLE "movies" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(120) NOT NULL,
    "poster"  VARCHAR(120) NOT NULL,
    "description" TEXT NOT NULL
);

CREATE TABLE "genres" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL
);

-- JUNCTION TABLE
-- Movies can have multiple genres and each genre can be applied to multiple movies
-- This is many-to-many!
CREATE TABLE "movies_genres" (
    "id" SERIAL PRIMARY KEY,
    "movie_id" INT REFERENCES "movies" NOT NULL,
    "genre_id" INT REFERENCES "genres" NOT NULL
);

--------[ DATA! ]---------
-- starter movies
INSERT INTO "movies" ("title", "poster", "description")
VALUES

('2040', 'images/2040.jpg', 'Concerned about his young daughter''s future, filmmaker Damon Gameau travels the world in search of new approaches and solutions to climate change. He meets with innovators and changemakers in many fields to draw on their expertise.'),

('Avatar', 'images/avatar.jpeg', 'On the lush alien world of Pandora live the Na''vi, beings who appear primitive but are highly evolved. Because the planet''s environment is poisonous, human/Na''vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na''vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.'),

('Before The Flood', 'images/before-the-flood.jpg', 'Using his celebrity status to draw attention to the problem of global warming, one of the most important and pressing issues of our time, actor and United Nations Messenger of Peace, Leonardo DiCaprio, travels the globe to witness firsthand the effects of an impending environmental disaster. By visiting ancient melting glaciers and levelled Indonesian tropical forests, DiCaprio unearths an urgent situation and the world''s dependence on fossil fuels, going as far as to visit President Obama himself for an in-depth interview. But, can this crusade inspire the climate-change deniers?'),

('Catch Me If You Can', 'images/catch-me-if-you-can.jpg', 'Frank Abagnale, Jr. (Leonardo DiCaprio) worked as a doctor, a lawyer, and as a co-pilot for a major airline -- all before his 18th birthday. A master of deception, he was also a brilliant forger, whose skill gave him his first real claim to fame: At the age of 17, Frank Abagnale, Jr. became the most successful bank robber in the history of the U.S. FBI Agent Carl Hanratty (Tom Hanks) makes it his prime mission to capture Frank and bring him to justice, but Frank is always one step ahead of him.'),

('Chitty Chitty Bang Bang', 'images/chitty-chitty-bang-bang.jpg', 'While truant from school, young siblings Jeremy and Jemima meet the beautiful Truly Scrumptious (Sally Ann Howes), who falls for their widowed father, Caractacus Potts (Dick Van Dyke), and his various oddball inventions, including the family''s noisy rebuilt car, Chitty Chitty Bang Bang. One day at the beach, Caractacus tells Truly and the children a fanciful fable about the villainous Baron Bomburst (Gert Frobe) and his evil designs on the Potts family car.'),

('Django Unchained', 'images/django-unchained.jpg', 'Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South''s most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django''s long-lost wife (Kerry Washington) is still a slave.'),

('Don''t Look Up', 'images/dont-look-up.jpg', '
Kate Dibiasky (Jennifer Lawrence), an astronomy grad student, and her professor Dr. Randall Mindy (Leonardo DiCaprio) make an astounding discovery of a comet orbiting within the solar system. The problem - it''s on a direct collision course with Earth. The other problem? No one really seems to care. Turns out warning mankind about a planet-killer the size of Mount Everest is an inconvenient fact to navigate. With the help of Dr. Oglethorpe (Rob Morgan), Kate and Randall embark on a media tour that takes them from the office of an indifferent President Orlean (Meryl Streep) and her sycophantic son and Chief of Staff, Jason (Jonah Hill), to the airwaves of The Daily Rip, an upbeat morning show hosted by Brie (Cate Blanchett) and Jack (Tyler Perry). With only six months until the comet makes impact, managing the 24-hour news cycle and gaining the attention of the social media obsessed public before it''s too late proves shockingly comical - what will it take to get the world to just look up?.'),

('Drive', 'images/drive.jpg', 'Driver is a skilled Hollywood stuntman who moonlights as a getaway driver for criminals. Though he projects an icy exterior, lately he''s been warming up to a pretty neighbor named Irene and her young son, Benicio. When Irene''s husband gets out of jail, he enlists Driver''s help in a million-dollar heist. The job goes horribly wrong, and Driver must risk his life to protect Irene and Benicio from the vengeful masterminds behind the robbery.'),

('End of Watch', 'images/end-of-watch.jpg', 'Longtime LAPD partners and friends, Brian Taylor (Jake Gyllenhaal) and Mike Zavala (Michael Peña) patrol one of the most dangerous neighborhoods in Los Angeles. Though they may bend the rules, their honor and dedication to the job are unquestioned. Taylor and Zavala always have each other''s back, even if Taylor''s surreptitious filming of their daily activities for a college course is a bit ill-advised. All hell breaks loose for the officers when they run afoul of a vicious Mexican cartel.'),

('Ex-Machina', 'images/ex-machina.jpg', 'Caleb Smith (Domhnall Gleeson) a programmer at a huge Internet company, wins a contest that enables him to spend a week at the private estate of Nathan Bateman (Oscar Isaac), his firm''s brilliant CEO. When he arrives, Caleb learns that he has been chosen to be the human component in a Turing test to determine the capabilities and consciousness of Ava (Alicia Vikander), a beautiful robot. However, it soon becomes evident that Ava is far more self-aware and deceptive than either man imagined.'),

('Finding Nemo', 'images/finding-nemo.jpg', 'Marlin (Albert Brooks), a clown fish, is overly cautious with his son, Nemo (Alexander Gould), who has a foreshortened fin. When Nemo swims too close to the surface to prove himself, he is caught by a diver, and horrified Marlin must set out to find him. A blue reef fish named Dory (Ellen DeGeneres) -- who has a really short memory -- joins Marlin and complicates the encounters with sharks, jellyfish, and a host of ocean dangers. Meanwhile, Nemo plots his escape from a dentist''s fish tank.'),

('Full Metal Jacket', 'images/full-metal-jacket.jpg', 'Stanley Kubrick''s take on the Vietnam War follows smart-aleck Private Davis (Matthew Modine), quickly christened "Joker" by his foul-mouthed drill sergeant (R. Lee Ermey), and pudgy Private Lawrence (Vincent D''Onofrio), nicknamed "Gomer Pyle," as they endure the rigors of basic training. Though Pyle takes a frightening detour, Joker graduates to the Marine Corps and is sent to Vietnam as a journalist, covering -- and eventually participating in -- the bloody Battle of Hué.'),

('Get Out', 'images/get-out.jpg', 'Now that Chris and his girlfriend, Rose, have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway upstate with her parents, Missy and Dean. At first, Chris reads the family''s overly accommodating behaviour as nervous attempts to deal with their daughter''s interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries leads him to a truth that he never could have imagined.'),

('Gone Girl', 'images/gone-girl.jpg', 'In Carthage, Mo., former New York-based writer Nick Dunne (Ben Affleck) and his glamorous wife Amy (Rosamund Pike) present a portrait of a blissful marriage to the public. However, when Amy goes missing on the couple''s fifth wedding anniversary, Nick becomes the prime suspect in her disappearance. The resulting police pressure and media frenzy cause the Dunnes'' image of a happy union to crumble, leading to tantalizing questions about who Nick and Amy truly are.'),

('Gran Torino', 'images/gran-torino.jpg', 'Retired auto worker and Korean War vet Walt Kowalski (Clint Eastwood) fills emptiness in his life with beer and home repair, despising the many Asian, Latino and black families in his neighborhood. Walt becomes a reluctant hero when he stands up to the gangbangers who tried to force an Asian teen to steal Walt''s treasured car. An unlikely friendship develops between Walt and the teen, as he learns he has more in common with his neighbors than he thought.'),

('Inception', 'images/inception.jpg', 'Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people''s dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone''s mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb''s every move.'),

('Inglourious Basterds', 'images/inglourious-basterds.jpg', 'It is the first year of Germany''s occupation of France. Allied officer Lt. Aldo Raine (Brad Pitt) assembles a team of Jewish soldiers to commit violent acts of retribution against the Nazis, including the taking of their scalps. He and his men join forces with Bridget von Hammersmark, a German actress and undercover agent, to bring down the leaders of the Third Reich. Their fates converge with theater owner Shosanna Dreyfus, who seeks to avenge the Nazis'' execution of her family.'),

('Interstellar', 'images/interstellar.jpg', 'In Earth''s future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth''s population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind''s new home.'),

('Joker', 'images/joker.jpg', 'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he''s part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.'),

('Knives Out', 'images/knives-out.jpg', 'The circumstances surrounding the death of crime novelist Harlan Thrombey are mysterious, but there''s one thing that renowned Detective Benoit Blanc knows for sure -- everyone in the wildly dysfunctional Thrombey family is a suspect. Now, Blanc must sift through a web of lies and red herrings to uncover the truth.'),

('No Country For Old Men', 'images/no-country-for-old-men.jpg', 'While out hunting, Llewelyn Moss (Josh Brolin) finds the grisly aftermath of a drug deal. Though he knows better, he cannot resist the cash left behind and takes it with him. The hunter becomes the hunted when a merciless killer named Chigurh (Javier Bardem) picks up his trail. Also looking for Moss is Sheriff Bell (Tommy Lee Jones), an aging lawman who reflects on a changing world and a dark secret of his own, as he tries to find and protect Moss.'),

('Our Planet', 'images/our-planet.jpg', 'Documentary series focusing on the breadth of the diversity of habitats around the world, from the remote Arctic wilderness and mysterious deep oceans to the vast landscapes of Africa and diverse jungles of South America.'),

('Parasite', 'images/parasite.jpg', 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.'),

('Prometheus', 'images/prometheus.jpg', 'The discovery of a clue to mankind''s origins on Earth leads a team of explorers to the darkest parts of the universe. Two brilliant young scientists lead the expedition. Shaw (Noomi Rapace) hopes that they will meet a race of benevolent, godlike beings who will in some way verify her religious beliefs, while Holloway (Logan Marshall-Green) is out to debunk any spiritual notions. However, neither the scientists nor their shipmates are prepared for the unimaginable terrors that await them.'),

('Princess Mononoke', 'images/princess-mononoke.jpg', 'In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. In his travels, he sees humans ravaging the earth, bringing down the wrath of wolf god Moro and his human companion Princess Mononoke. Hiskattempts to broker peace between her and the humans brings only conflict.'),

('Sausage Party', 'images/sausage-party.jpg', 'Life is good for all the food items that occupy the shelves at the local supermarket. Frank (Seth Rogen) the sausage, Brenda (Kristen Wiig) the hot dog bun, Teresa Taco and Sammy Bagel Jr. (Edward Norton) can''t wait to go home with a happy customer. Soon, their world comes crashing down as poor Frank learns the horrifying truth that he will eventually become a meal. After warning his pals about their similar fate, the panicked perishables devise a plan to escape from their human enemies.'),

('Spirited Away', 'images/spirited-away.jpg', 'In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.'),

('Star Wars: The Last Jedi', 'images/star-wars.jpg', 'Luke Skywalker''s peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.'),

('Team America: World Police', 'images/team-america-world-police.jpg', 'When North Korean ruler Kim Jong-il (Trey Parker) orchestrates a global terrorist plot, it''s up to the heavily armed marionettes of the highly specialized Team America unit to stop his dastardly scheme. The group, which includes the thespian-averse technology expert Chris (Matt Stone), not only has to face off against Jong-il, but they must also contend with F.A.G., the Film Actors Guild, a cadre of Hollywood liberals at odds with Team America''s "policing the world" tactics.'),

('The Big Lebowski', 'images/the-big-lebowski.jpg', 'Jeff `The Dude'' Leboswki is mistaken for Jeffrey Lebowski, who is The Big Lebowski. Which explains why he''s roughed up and has his precious rug peed on. In search of recompense, The Dude tracks down his namesake, who offers him a job. His wife has been kidnapped and he needs a reliable bagman. Aided and hindered by his pals Walter Sobchak, a Vietnam vet, and Donny, master of stupidity.'),

('The Bubble', 'images/the-bubble.jpg', 'Sneaking out. Hooking up. Melting down. The cast and crew of a blockbuster action franchise attempt to shoot a sequel while quarantining at a posh hotel.'),

('The Dark Knight', 'images/the-dark-knight', 'With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.'),

('The Departed', 'images/the-departed.jpg', 'South Boston cop Billy Costigan (Leonardo DiCaprio) goes under cover to infiltrate the organization of gangland chief Frank Costello (Jack Nicholson). As Billy gains the mobster''s trust, a career criminal named Colin Sullivan (Matt Damon) infiltrates the police department and reports on its activities to his syndicate bosses. When both organizations learn they have a mole in their midst, Billy and Colin must figure out each other''s identities to save their own lives.'),

('The Martian', 'images/the-martian.jpg', 'When astronauts blast off from the planet Mars, they leave behind Mark Watney (Matt Damon), presumed dead after a fierce storm. With only a meager amount of supplies, the stranded visitor must utilize his wits and spirit to find a way to survive on the hostile planet. Meanwhile, back on Earth, members of NASA and a team of international scientists work tirelessly to bring him home, while his crew mates hatch their own plan for a daring rescue mission.'),

('The Master', 'images/the-master.jpg', 'Freddie Quell (Joaquin Phoenix) is a troubled, boozy drifter struggling with the trauma of World War II and whatever inner demons ruled his life before that. On a fateful night in 1950, Freddie boards a passing boat and meets Lancaster Dodd (Philip Seymour Hoffman), the charismatic leader of a religious movement called the Cause. Freddie tries hard to adhere to Dodd''s weird teachings and forms a close bond with his mentor, even as other members of Dodd''s inner circle see him as a threat.'),

('The Matrix', 'images/the-matrix.jpg', 'Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.'),

('The Prestige', 'images/the-prestige.jpg', 'Period thriller set in Edwardian London where two rival magicians, partners until the tragic death of an assistant during a show, feud bitterly after one of them performs the ultimate magic trick - teleportation. His rival tries desperately to uncover the secret of his routine, experimenting with dangerous new science as his quest takes him to the brink of insanity and jeopardises the lives of everyone around the pair.'),

('The Truman Show', 'images/the-truman-show.jpg', 'He doesn''t know it, but everything in Truman Burbank''s (Jim Carrey) life is part of a massive TV set. Executive producer Christof (Ed Harris) orchestrates "The Truman Show," a live broadcast of Truman''s every move captured by hidden cameras. Cristof tries to control Truman''s mind, even removing his true love, Sylvia (Natascha McElhone), from the show and replacing her with Meryl (Laura Linney). As Truman gradually discovers the truth, however, he must decide whether to act on it.'),

('There Will Be Blood', 'images/there-will-be-blood.jpg', 'Ruthless silver miner, turned oil prospector, Daniel Plainview moves to oil-rich California. Using his adopted son HW to project a trustworthy, family-man image, Plainview cons local landowners into selling him their valuable properties for a pittance. However, local preacher Eli Sunday suspects Plainviews motives and intentions, starting a slow-burning feud that threatens both their lives.'),

('To Kill A Mockingbird', 'images/to-kill-a-mockingbird.jpg', 'Scout Finch (Mary Badham), 6,and her older brother, Jem (Phillip Alford), live in sleepy Maycomb, Ala., spending much of their time with their friend Dill (John Megna) and spying on their reclusive and mysterious neighbor, Boo Radley (Robert Duvall). When Atticus (Gregory Peck), their widowed father and a respected lawyer, defends a black man named Tom Robinson (Brock Peters) against fabricated rape charges, the trial and tangent events expose the children to evils of racism and stereotyping.'),

('Tropic Thunder', 'images/tropic-thunder.jpg', 'While shooting a war film, the director attempts to liven up proceedings by dropping the principle actors into the middle of a real jungle, claiming he is going to capture their performance with hidden cameras. The hapless group including drug-addled comedy star Jeff Portnoy and po-faced method man Kirk Lazarus are completely unaware when a series of unfortunate events leads them into the middle of a real war zone.'),

('V For Vendetta', 'images/v-for-vendetta.jpg', 'Following world war, London is a police state occupied by a fascist government, and a vigilante known only as V (Hugo Weaving) uses terrorist tactics to fight the oppressors of the world in which he now lives. When V saves a young woman named Evey (Natalie Portman) from the secret police, he discovers an ally in his fight against England''s oppressors.'),

('Warrior', 'images/warrior.jpg', 'An estranged family finds redemption in the unlikeliest of places: the MMA ring. Tommy (Tom Hardy), an ex-Marine with a tragic past, returns home and enlists his father (Nick Nolte), a recovering alcoholic and former wrestling coach, to train him for "Sparta," the biggest MMA tournament ever held. But when Tommy''s underdog brother, Brendan (Joel Edgerton), fights his way into the tournament, the two brothers must finally confront each other and the forces that pulled them apart.'),

('White Men Can''t Jump', 'images/white-men-cant-jump.jpg', 'Billy Hoyle (Woody Harrelson) is a white basketball hustler who banks on black players underestimating his skills on the court. When he pulls one over on Sidney Deane (Wesley Snipes), his victim sees a lucrative opportunity, and they become partners in the con game, plying their trade across the courts of Los Angeles. Meanwhile, Billy has to keep one step ahead of mobsters, to whom he owes money, while staying on the good side of his "Jeopardy!"-obsessed, motormouth wife (Rosie Perez).'),

('Zero Days', 'images/zero-days.jpg', 'The malware worm Stuxnet, famously used against Iranian centrifuges, has been claimed by many to have originated as a joint effort between America and Israel.'),

;

-- starter genres
INSERT INTO "genres" ("name")
VALUES
('Adventure'),        -- 01
('Animated'),         -- 02
('Biographical'),     -- 03
('Comedy'),           -- 04
('Disaster'),         -- 05
('Drama'),            -- 06
('Epic'),             -- 07
('Fantasy'),          -- 08
('Musical'),          -- 09
('Romantic'),         -- 10
('Science Fiction'),  -- 11
('Space-Opera'),      -- 12
('Superhero');        -- 13

-- starter movies and genres data
INSERT INTO "movies_genres" ("movie_id", "genre_id")
VALUES
(1,1), (1,3), (1,4),      -- Avatar
(2,1), (2,11), (2,12),    -- Beauty
(3,3),                    -- Captain Marvel
(4,4), (4,7),             -- Nemo
(5,3),                    -- Gone Girl
(6,12),                   -- Véronique
(7,9),(7,2),              -- Bond
(8,4),                    -- Pi
(9,4),                    -- Monsters
(10,4),                   -- Star Wars
(11,6), (11,11),          -- Martian
(12,8), (12,9),           -- Social Net
(13,4), (13,10), (13,6),  -- Titanic
(14,3), (14,2), (14,4);   -- Toy Story

SELECT * FROM movies WHERE id=2;

SELECT * FROM movies JOIN movies_genres ON movies.id = movies_genres.movie_id JOIN genres ON movies_genres.genre_id = genres.id WHERE movie_id=1;

DELETE FROM "movies_genres" WHERE "movie_id" = 19;
