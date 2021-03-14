import axios from 'axios'

let userService, movieService

const response = data => ({data})

if (process.env.NODE_ENV !== 'development') {
    userService = async function ({url}) {
        switch (url) {
            case '/register':
                return response({"success": true})
            case '/login':
                return response({
                    "user": {
                        "uid": 1450575459,
                        "username": "123456",
                        "password": "1",
                        "first": true,
                        "timestamp": 1615611177652,
                        "prefGenres": []
                    }, "success": true
                })
            case '/pref':
                return response({"success": true})
            case '/info':
                return response({"new": true})
        }
    }

    movieService = async function ({url}) {
        switch (url) {
            case '/hot':
                return response({
                        "movies": [{
                            "mid": 1210,
                            "name": "Star Wars: Episode VI - Return of the Jedi (1983)",
                            "descri": "As Rebel leaders map their strategy for an all-out attack on the Emperor's newer, bigger Death Star. Han Solo remains frozen in the cavernous desert fortress of Jabba the Hutt, the most loathsome outlaw in the universe, who is also keeping Princess Leia as a slave girl. Now a master of the Force, Luke Skywalker rescues his friends, but he cannot become a true Jedi Knight until he wages his own crucial battle against Darth Vader, who has sworn to win Luke over to the dark side of the Force.",
                            "timelong": "135 minutes",
                            "issue": "September 21, 2004",
                            "shoot": "1983",
                            "score": 4.059907834101383,
                            "language": "English",
                            "genres": "Action|Adventure|Sci-Fi",
                            "actors": "Mark Hamill|Harrison Ford|Carrie Fisher|Billy Dee Williams|Anthony Daniels|David Prowse|Kenny Baker|Peter Mayhew|Frank Oz|Ian McDiarmid|James Earl Jones|Sebastian Shaw|Hayden Christensen|Alec Guinness|Warwick Davis|Caroline Blakiston|Michael Pennington|Kenneth Colley|Michael Carter|Denis Lawson|Tim Rose|Dermot Crowley|Jeremy Bulloch|Femi Taylor|Annie Arbogast|Claire Davenport|Jack Purvis|Mike Edmonds|Jane Busby|Malcolm Dixon|Mike Cottrell|Nicki Reade|Adam Bareham|Jonathan Oliver|Pip Miller|Tom Mannion|Margo Apostolos|Ray Armstrong|Eileen Baker|Michael Henbury Ballan|Bobby Bell|Patty Bell|Alan Bennett|Sarah Bennett|Pamela Betts|Danny Blackner|Linda Bowley|Peter Burroughs|Debbie Lee Carrington|Maureen Charlton|Willie Coppen|Sadie Corre|Tony Cox|John Cumming|Jean D'Agostino|Luis De Jesus|Debbie Dixon|Margarita Fernández|Phil Fondacaro|Sal Fondacaro|Tony Friel|Daniel Frishman|John Ghavan|Michael Gilden|Paul Grant|Lydia Green|Lars Green|Pam Grizz|Andrew Herd|J.J. Jackson|Richard Jones|Trevor Jones|Glynn Jones|Karen Lay|John Lummiss|Nancy MacLean|Peter Mandell|Carole Morris|Stacie Nichols|Chris Nunn|Barbara O'Laughlin|Brian Orenstein|Harrell Parker Jr.|John Pedrick|April Perkins|Ronnie Phillips|Katie Purvis|Carol Read|Nicholas Read|Diana Reynolds|Danielle Rodgers|Chris Romano|Dean Shackelford|Kiran Shah|Felix Silla|Linda Spriggs|Gerald Staddon|Josephine Staddon|Kevin Thompson|Kendra Wall|Brian Wheeler|Butch Wilhelm|Dalyn Chew|Celia Fushille-Burke|Mercedes Ngoh|Jennifer Jaffe|Mark Dodson|Simon J. Williamson|Richard Bonehill|David Gonzales|Barrie Holland|Peter Roy|Erik Bauersfeld|Mike Quinn|Bill Kipsang Rotich|Deep Roy|Alisa Berk|Hugh Spight|Swee Lim|Richard Robinson|Gerald Home|Phil Herbert|Tim Dry|Sean Crawford|Phil Tippett|Michael McCormick|Toby Philpott|David Alan Barclay|Larry Ward|Mark Hamill|Harrison Ford|Carrie Fisher|Billy Dee Williams|Anthony Daniels",
                            "directors": "Richard Marquand"
                        }], "success": true
                    }
                )
            case '/rate':
                return response({
                        "movies": [{
                            "mid": 296,
                            "name": "Pulp Fiction (1994)",
                            "descri": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
                            "timelong": "154 minutes",
                            "issue": "September 24, 2002",
                            "shoot": "1994",
                            "score": 4.256172839506172,
                            "language": "English|Español|Français",
                            "genres": "Comedy|Crime|Drama|Thriller",
                            "actors": "John Travolta|Samuel L. Jackson|Uma Thurman|Bruce Willis|Ving Rhames|Harvey Keitel|Eric Stoltz|Tim Roth|Amanda Plummer|Maria de Medeiros|Quentin Tarantino|Christopher Walken|Rosanna Arquette|Peter Greene|Duane Whitaker|Angela Jones|Phil LaMarr|Steve Buscemi|Bronagh Gallagher|Laura Lovelace|Frank Whaley|Burr Steers|Paul Calderon|Jerome Patrick Hoban|Michael Gilden|Gary Shorelle|Susan Griffiths|Eric Clark|Joseph Pilato|Brad Blumenthal|Lorelei Leslie|Emil Sitka|Brenda Hillhouse|Chandler Lindauer|Sy Sher|Robert Ruth|Rich Turner|Don Blakely|Carl Allen|Karen Maruyama|Kathy Griffin|Venessia Valentino|Linda Kaye|Stephen Hibbert|Alexis Arquette|Julia Sweeney|Lawrence Bender|Cie Allman|Rene Beard|Lori Pizzo|Glendon Rich|Devan Richardson|Ani Sava|Philip Ettington|John Travolta|Samuel L. Jackson|Uma Thurman|Bruce Willis|Ving Rhames",
                            "directors": "Quentin Tarantino"
                        }], "success": true
                    }
                )
            case '/wish':
                return response({
                        "movies": [{
                            "mid": 2880,
                            "name": "Armour of God (Long xiong hu di) (1987)",
                            "descri": "Jackie Chan stars as Asian Hawk, an Indiana Jones-style adventurer looking to make a fortune in exotic antiquities. After Hawk discovers a mysterious sword in Africa, a band of Satan-worshipping monks kidnap his ex-girlfriend Lorelei, demanding the sword as ransom as well as other pieces of the legendary Armour of God - a magical outfit dating back to the Crusades.",
                            "timelong": "88 minutes",
                            "issue": "September 21, 1999",
                            "shoot": "1986",
                            "score": 5.0,
                            "language": "广州话 / 廣州話",
                            "genres": "Action|Adventure|Comedy",
                            "actors": "Jackie Chan|Alan Tam|Rosamund Kwan|Lola Forner|Božidar Smiljanić|Ken Boyle|John Ladalski|Robert O'Brien|Marcia Chisholm|Boris Gregoric|Alicia Shonte|Vivian Wickliffe|Stephanie Evans|Linda Denley|Jackie Chan|Alan Tam|Rosamund Kwan|Lola Forner|Božidar Smiljanić",
                            "directors": "Jackie Chan|Eric Tsang"
                        }, {
                            "mid": 106471,
                            "name": "One Piece Film: Strong World (2009)",
                            "descri": "20 years after his escape from Impel Down, the legendary pirate Shiki, the Golden Lion, reappears causing massive upheaval to the Marines. During his long seclusion, he was able to come up with a scheme to bring the World Government to his knees. On his way to execute the plan, Shiki crosses paths with the Straw Hat Pirates and becomes so impressed with Nami's knowledge of meteorology that he abducts her to forcedly enlist her into his crew. Luffy and the gang end up on a strange land populated with monstrous beasts as they desperately search for Shiki and Nami.",
                            "timelong": "114 minutes",
                            "issue": "",
                            "shoot": "2009",
                            "score": 5.0,
                            "language": "日本語",
                            "genres": "Action|Adventure|Animation|Comedy|Fantasy",
                            "actors": "Mayumi Tanaka|Kazuya Nakai|Hiroaki Hirata|Cho|Akemi Okamura|Naoto Takenaka|Kappei Yamaguchi|Kazuki Yao|Ikue Ōtani|Yuriko Yamaguchi|Mayumi Tanaka|Kazuya Nakai|Hiroaki Hirata|Cho|Akemi Okamura",
                            "directors": "Munehisa Sakai"
                        }, {
                            "mid": 126430,
                            "name": "The Pacific (2010)",
                            "descri": "A 10-part mini-series from the creators of 'Band of Brothers' telling the intertwined stories of three Marines during America's battle with the Japanese in the Pacific during World War II.",
                            "timelong": "540 minutes",
                            "issue": "",
                            "shoot": "2010",
                            "score": 5.0,
                            "language": "English",
                            "genres": "Action|Adventure|Drama|War",
                            "actors": "James Badge Dale|Joseph Mazzello|Jon Seda|Ashton Holmes|William Sadler|Jon Bernthal|Jacob Pitts|Rami Malek|Brendan Fletcher|Caroline Dhavernas|Annie Parisse|Anna Torv|Claire van der Boom|Isabel Lucas|Matt Craven|Noel Fisher|Nate Corddry|James Badge Dale|Joseph Mazzello|Jon Seda|Ashton Holmes|William Sadler",
                            "directors": "Graham Yost|Carl Franklin|David Nutter|Tim Van Patten|Jeremy Podeswa|Tony To"
                        }, {
                            "mid": 2924,
                            "name": "Drunken Master (Jui kuen) (1978)",
                            "descri": "Jackie Chan stars as Wong Fei-Hung, whose mischievous antics land him in hot water. Having tolerated enough of his son's mishaps, Fei-Hung's dad enlists his sadistic uncle, who specializes in drunken-style kung fu, to teach the lad some discipline. This Hong Kong martial-arts comedy helped establish the slapstick fighting style that would become Chan's trademark.",
                            "timelong": "111 minutes",
                            "issue": "August 5, 2003",
                            "shoot": "1978",
                            "score": 4.583333333333333,
                            "language": "广州话 / 廣州話",
                            "genres": "Action|Comedy",
                            "actors": "Jackie Chan|Yuen Siu-Tin|Hwang Jang-Lee|Dean Shek|Lam Kau|Linda Lin|Chiang Kam|Max Lee Chiu-Jun|Yuen Shun-Yi|Fung Ging-Man|Yuen Woo-ping|Lee Chun-Wa|Tino Wong Cheung|San Kuai|Hsu Hsia|Jackie Chan|Yuen Siu-Tin|Hwang Jang-Lee|Dean Shek|Lam Kau",
                            "directors": "Yuen Woo-ping"
                        }, {
                            "mid": 26865,
                            "name": "Fist of Legend (Jing wu ying xiong) (1994)",
                            "descri": "Chen Zhen, a Chinese engineering student in Kyoto, who braves the insults and abuse of his Japanse fellow students for his local love Mitsuko Yamada, daughter of the director, returns in 1937 to his native Shangai, under Japanse protectorate -in fact military occupation- after reading about the death of his kung-fu master Hou Ting-An in a fight against the Japanese champion Ryuichi Akutagawa.",
                            "timelong": "103 minutes",
                            "issue": "February 15, 2000",
                            "shoot": "1994",
                            "score": 4.5,
                            "language": "English|日本語|普通话",
                            "genres": "Action|Drama",
                            "actors": "Jet Li|Shinobu Nakayama|Chin Siu Ho|Paul Chun Pui|Yasuaki Kurata|Billy Chow|Ada Choi|Yuen Cheung-Yan|Toshimichi Takahashi|Jackson Liu|Carol Tam Suk-Mui|Wong San|Jet Li|Shinobu Nakayama|Chin Siu Ho|Paul Chun Pui|Yasuaki Kurata",
                            "directors": "Gordon Chan"
                        }, {
                            "mid": 27156,
                            "name": "Neon Genesis Evangelion: The End of Evangelion (Shin seiki Evangelion Gekijô-ban: Air/Magokoro wo, kimi ni) (1997)",
                            "descri": "NERV faces a brutal attack from SEELE, but with Asuka in a coma, and Shinji in a nervous breakdown, things soon turn into the surreal. This movie provides a concurrent ending to the final two episodes of the show 'Neon Genesis Evangelion'.",
                            "timelong": "87 minutes",
                            "issue": "September 24, 2002",
                            "shoot": "1997",
                            "score": 4.5,
                            "language": "日本語",
                            "genres": "Action|Animation|Drama|Fantasy|Sci-Fi",
                            "actors": "Megumi Ogata|Megumi Hayashibara|Kotono Mitsuishi|Yuko Miyamura|Fumihiko Tachiki|Akira Ishida|Motomu Kiyokawa|Mugihito|Takehito Koyasu|Miki Nagasawa|Yuriko Yamaguchi|Hiro Yuuki|Megumi Ogata|Megumi Hayashibara|Kotono Mitsuishi|Yuko Miyamura|Fumihiko Tachiki",
                            "directors": "Hideaki Anno|Kazuya Tsurumaki"
                        }, {
                            "mid": 102252,
                            "name": "Legendary Weapons of China (1982)",
                            "descri": "Legendary Weapons of China is a martial arts fantasy film taking place during the late Qing Dynasty when Empress Dowager Cixi dispatches her agents to various factions of the Boxer Rebellion in order find supernatural martial artists that are invulnerable to western bullets. When one of the leaders of these groups disbands his forces, assassins from the remaining factions are sent out to kill him.",
                            "timelong": "109 minutes",
                            "issue": "January 9, 2007",
                            "shoot": "1982",
                            "score": 4.5,
                            "language": "普通话",
                            "genres": "Action|Adventure",
                            "actors": "Kara Hui|Gordon Liu Chia-Hui|Liu Chia-Liang|Alexander Fu Sheng",
                            "directors": "Liu Chia-Liang"
                        }, {
                            "mid": 104419,
                            "name": "Justice League: Crisis on Two Earths (2010)",
                            "descri": "A heroic version of Lex Luthor from an alternate universe appears to recruit the Justice League to help save his Earth from the Crime Syndicate, an evil version of the League. What ensues is the ultimate battle of good versus evil in a war that threatens both planets and, through a devious plan launched by Batman's counterpart Owlman, puts the balance of all existence in peril.",
                            "timelong": "75 minutes",
                            "issue": "February 23, 2010",
                            "shoot": "2010",
                            "score": 4.5,
                            "language": "English|Italiano",
                            "genres": "Action|Animation|Sci-Fi",
                            "actors": "Mark Harmon|William Baldwin|James Woods|Nolan North|Chris Noth|Erica Durance|Gina Torres|Brian Bloom|James Patrick Stuart|Josh Keaton|Jeff Bennett|Jonathan Adams|Vanessa Marshall|Andrea Romano|Bruce Timm|Kari Wuhrer|Cedric Yarbrough|Bruce Davison|Mark Harmon|William Baldwin|James Woods|Nolan North|Chris Noth",
                            "directors": "Sam Liu|Lauren Montgomery"
                        }, {
                            "mid": 107081,
                            "name": "Zatoichi on the Road (Zatôichi kenka-tabi) (Zatôichi 5) (1963)",
                            "descri": "Zatoichi is sworn to protect the life of a young girl and without any real allies finds himself in the middle of a bloody turf war.",
                            "timelong": "85 minutes",
                            "issue": "",
                            "shoot": "1963",
                            "score": 4.5,
                            "language": "日本語",
                            "genres": "Action|Drama",
                            "actors": "Shintarô Katsu|Shiho Fujimura|Ryûzô Shimada|Reiko Fujiwara|Matasaburo Niwa",
                            "directors": "Kimiyoshi Yasuda"
                        }, {
                            "mid": 104913,
                            "name": "Rush (2013)",
                            "descri": "A biographical drama centered on the rivalry between Formula 1 drivers James Hunt and Niki Lauda during the 1976 Formula One motor-racing season.",
                            "timelong": "123 minutes",
                            "issue": "January 28, 2014",
                            "shoot": "2013",
                            "score": 4.363636363636363,
                            "language": "English|Deutsch|Italiano|Français",
                            "genres": "Action|Drama",
                            "actors": "Daniel Brühl|Chris Hemsworth|Olivia Wilde|Alexandra Maria Lara|Natalie Dormer|Christian McKay|Tom Wlaschiha|Pierfrancesco Favino|David Calder|Stephen Mangan|Alistair Petrie|Julian Rhind-Tutt|Colin Stinton|Jamie de Courcey|Ilario Calvo|Patrick Baladi|Vincent Riotta|Martin Savage|Jamie Sives|James Norton|Michael Vardian|Eddie Bagayawa|Jochen Kolenda|Augusto Dallara|Douglas Reith|Daniel Brühl|Chris Hemsworth|Olivia Wilde|Alexandra Maria Lara|Natalie Dormer",
                            "directors": "Ron Howard"
                        }], "success": true
                    }
                )
            case '/guess':
                return response({
                        "movies": [{
                            "mid": 3038,
                            "name": "Face in the Crowd, A (1957)",
                            "descri": "'A Face in the Crowd' charts the rise of a raucous hayseed named Lonesome Rhodes from itinerant Ozark guitar picker to local media rabble-rouser to TV superstar and political king-maker. Marcia Jeffries is the innocent Sarah Lawrence girl who discovers the great man in a back-country jail and is the first to fall under his spell",
                            "timelong": "125 minutes",
                            "issue": "May 10, 2005",
                            "shoot": "1957",
                            "score": 5.0,
                            "language": "English",
                            "genres": "Drama",
                            "actors": "Andy Griffith|Patricia Neal|Walter Matthau|Lee Remick|Anthony Franciosa|Percy Waram|Paul McGrath|Rod Brasfield|Marshall Neilan|Alexander Kirkland|Charles Irving|Howard Smith|Kay Medford|Big Jeff Bess|Henry Sharp|Andy Griffith|Patricia Neal|Walter Matthau|Lee Remick|Anthony Franciosa",
                            "directors": "Elia Kazan"
                        }, {
                            "mid": 116,
                            "name": "Anne Frank Remembered (1995)",
                            "descri": "",
                            "timelong": "117 minutes",
                            "issue": "March 9, 2004",
                            "shoot": "1995",
                            "score": 4.75,
                            "language": "English",
                            "genres": "Documentary",
                            "actors": "Kenneth Branagh|Glenn Close",
                            "directors": "Jon Blair"
                        }, {
                            "mid": 1948,
                            "name": "Tom Jones (1963)",
                            "descri": "Tom loves Sophie and Sophie loves Tom. But Tom and Sophie are of differering classes. Can they find a way through the mayhem to be true to love?",
                            "timelong": "128 minutes",
                            "issue": "June 19, 2001",
                            "shoot": "1963",
                            "score": 4.458333333333333,
                            "language": "English",
                            "genres": "Adventure|Comedy|Romance",
                            "actors": "Albert Finney|Susannah York|Hugh Griffith|Edith Evans|Joan Greenwood|Diane Cilento|George Devine|David Tomlinson|Freda Jackson|Jack MacGowran|Lynn Redgrave|Joyce Redman|David Warner|Micheál MacLiammóir|Rachel Kempson|Peter Bull|Avis Bunnage|Angela Baddeley|Albert Finney|Susannah York|Hugh Griffith|Edith Evans|Joan Greenwood",
                            "directors": "Tony Richardson"
                        }, {
                            "mid": 1945,
                            "name": "On the Waterfront (1954)",
                            "descri": "Terry Malloy dreams about being a prize fighter, while tending his pigeons and running errands at the docks for Johnny Friendly, the corrupt boss of the dockers union. Terry witnesses a murder by two of Johnny's thugs, and later meets the dead man's sister and feels responsible for his death. She introduces him to Father Barry, who tries to force him to provide information for the courts that will smash the dock racketeers.",
                            "timelong": "108 minutes",
                            "issue": "October 23, 2001",
                            "shoot": "1954",
                            "score": 4.448275862068965,
                            "language": "English",
                            "genres": "Crime|Drama",
                            "actors": "Marlon Brando|Karl Malden|Lee J. Cobb|Rod Steiger|Pat Henning|Leif Erickson|James Westerfield|Tony Galento|Tami Mauriello|John F. Hamilton|John Heldabrand|Rudy Bond|Don Blackman|Arthur Keegan|Abe Simon|Eva Marie Saint|Martin Balsam|Michael V. Gazzo|Fred Gwynne|Pat Hingle|Scottie MacGregor|Nehemiah Persoff|Marlon Brando|Karl Malden|Lee J. Cobb|Rod Steiger|Pat Henning",
                            "directors": "Elia Kazan"
                        }, {
                            "mid": 1217,
                            "name": "Ran (1985)",
                            "descri": "Set in Japan in the 16th century (or so), an elderly warlord retires, handing over his empire to his three sons. However, he vastly underestimates how the new-found power will corrupt them, or cause them to turn on each other...and him...",
                            "timelong": "162 minutes",
                            "issue": "November 22, 2005",
                            "shoot": "1985",
                            "score": 4.423076923076923,
                            "language": "日本語",
                            "genres": "Drama|War",
                            "actors": "Akira Terao|Jinpachi Nezu|Daisuke Ryû|Tatsuya Nakadai|Mieko Harada|Yoshiko Miyazaki|Hisashi Igawa|Pîtâ|Masayuki Yui|Kazuo Katô|Norio Matsui|Toshiya Ito|Kenji Kodama|Mansai Nomura|Takeshi Katô|Jun Tazaki|Hitoshi Ueki|Tokie Kanda|Sawako Kochi|Reiko Nanjo|Kumeko Otowa|Heihachiro Suzuki|Susumu Terajima|Haruko Tôgô|Akira Terao|Jinpachi Nezu|Daisuke Ryû|Tatsuya Nakadai|Mieko Harada",
                            "directors": "Akira Kurosawa"
                        }, {
                            "mid": 1254,
                            "name": "Treasure of the Sierra Madre, The (1948)",
                            "descri": "Fred C. Dobbs and Bob Curtin, both down on their luck in Tampico, Mexico in 1925, meet up with a grizzled prospector named Howard and decide to join with him in search of gold in the wilds of central Mexico. Through enormous difficulties, they eventually succeed in finding gold, but bandits, the elements, and most especially greed threaten to turn their success into disaster.",
                            "timelong": "126 minutes",
                            "issue": "September 30, 2003",
                            "shoot": "1948",
                            "score": 4.3,
                            "language": "English",
                            "genres": "Action|Adventure|Drama|Western",
                            "actors": "Humphrey Bogart|Walter Huston|Tim Holt|Bruce Bennett|Barton MacLane|Alfonso Bedoya|Arturo Soto Rangel|Manuel Dondé|José Torvay|Margarito Luna|Robert Blake|John Huston|Jack Holt|Ann Sheridan|Jay Silverheels|Guillermo Calles|Roberto Cañedo|Spencer Chan|Jacqueline Dalya|Ralph Dunn|Pat Flaherty|Martin Garralaga|Julian Rivero|Harry J. Vejar|Clifton Young|Humphrey Bogart|Walter Huston|Tim Holt|Bruce Bennett|Barton MacLane",
                            "directors": "John Huston"
                        }, {
                            "mid": 1305,
                            "name": "Paris, Texas (1984)",
                            "descri": "A man wanders out of the desert not knowing who he is. His brother finds him, and helps to pull his memory back of the life he led before he walked out on his family and disappeared four years earlier.",
                            "timelong": "147 minutes",
                            "issue": "December 14, 2004",
                            "shoot": "1984",
                            "score": 4.291666666666667,
                            "language": "English",
                            "genres": "Drama|Romance",
                            "actors": "Harry Dean Stanton|Nastassja Kinski|Dean Stockwell|Hunter Carson|Aurore Clément|Bernhard Wicki|John Lurie|Jeni Vici|Sally Norvell|Socorro Valdez|Claresie Mobley|Viva|Tom Farrell|Harry Dean Stanton|Nastassja Kinski|Dean Stockwell|Hunter Carson|Aurore Clément",
                            "directors": "Wim Wenders"
                        }, {
                            "mid": 2690,
                            "name": "Ideal Husband, An (1999)",
                            "descri": "Sir Robert Chiltern is a successful Government minister, well-off and with a loving wife. All this is threatened when Mrs Cheveley appears in London with damning evidence of a past misdeed. Sir Robert turns for help to his friend Lord Goring, an apparently idle philanderer and the despair of his father. Goring knows the lady of old, and, for him, takes the whole thing pretty seriously.",
                            "timelong": "97 minutes",
                            "issue": "January 18, 2000",
                            "shoot": "1999",
                            "score": 4.25,
                            "language": "English",
                            "genres": "Comedy|Romance",
                            "actors": "Cate Blanchett|Minnie Driver|Rupert Everett|Julianne Moore|Jeremy Northam|Peter Vaughan|Cate Blanchett|Minnie Driver|Rupert Everett|Julianne Moore|Jeremy Northam",
                            "directors": "Oliver Parker"
                        }, {
                            "mid": 213,
                            "name": "Burnt by the Sun (Utomlyonnye solntsem) (1994)",
                            "descri": "Russia, 1936: revolutionary hero Colonel Kotov is spending an idyllic summer in his dacha with his young wife and six-year-old daughter Nadia and other assorted family and friends. Things change dramatically with the unheralded arrival of Cousin Dmitri from Moscow, who charms the women and little Nadia with his games and pianistic bravura. But Kotov isn't fooled: this is the time of Stalin's repression, with telephone calls in the middle of the night spelling doom - and he knows that Dmitri isn't paying a social call...",
                            "timelong": "135 minutes",
                            "issue": "July 15, 2003",
                            "shoot": "1994",
                            "score": 4.222222222222222,
                            "language": "Pусский",
                            "genres": "Drama",
                            "actors": "Nikita Mikhalkov|Oleg Menshikov|Ingeborga Dapkunaite|Vyacheslav Tikhonov|Nadezhda Mikhalkova|André Oumansky|Nikita Mikhalkov|Oleg Menshikov|Ingeborga Dapkunaite|Vyacheslav Tikhonov|Nadezhda Mikhalkova",
                            "directors": "Nikita Mikhalkov"
                        }, {
                            "mid": 28,
                            "name": "Persuasion (1995)",
                            "descri": "",
                            "timelong": "104 minutes",
                            "issue": "February 1, 2000",
                            "shoot": "1995",
                            "score": 4.083333333333333,
                            "language": "English",
                            "genres": "Drama|Romance",
                            "actors": "Amanda Root|Ciarán Hinds|Susan Fleetwood|Fiona Shaw|John Woodvine|Phoebe Nicholls|Samuel West|Sophie Thompson|Judy Cornwell|Simon Russell Beale|Felicity Dean|Roger Hammond|Victoria Hamilton|Corin Redgrave|Emma Roberts|Robert Glenister|Richard McCabe|Helen Schlesinger|Jane Wood|David Collings|Darlene Johnson|Cinnamon Faye|Isaac Maxwell-Hunt|Roger Llewellyn|Sally George|Lonnie James|Amanda Root|Ciarán Hinds|Susan Fleetwood|Fiona Shaw|John Woodvine",
                            "directors": "Roger Michell"
                        }, {
                            "mid": 1643,
                            "name": "Mrs. Brown (a.k.a. Her Majesty, Mrs. Brown) (1997)",
                            "descri": "Queen Victoria is deeply depressed after the death of her husband, disappearing from public. Her servant Brown, who adores her, through caress and admiration brings her back to life, but that relationship creates scandalous situation and is likely to lead to monarchy crisis.",
                            "timelong": "105 minutes",
                            "issue": "June 15, 1999",
                            "shoot": "1997",
                            "score": 4.05,
                            "language": "English",
                            "genres": "Drama|Romance",
                            "actors": "Judi Dench|Billy Connolly|Geoffrey Palmer|Antony Sher|Gerard Butler|Richard Pasco|David Westhead|Georgie Glen|Sara Stewart|Finty Williams|Oliver Ford Davies|Delia Lindsay|Judi Dench|Billy Connolly|Geoffrey Palmer|Antony Sher|Gerard Butler",
                            "directors": "John Madden"
                        }, {
                            "mid": 1277,
                            "name": "Cyrano de Bergerac (1990)",
                            "descri": "Embarrassed by his large nose, a romantic poet/soldier romances his cousin by proxy.",
                            "timelong": "137 minutes",
                            "issue": "February 10, 2004",
                            "shoot": "1990",
                            "score": 4.0,
                            "language": "Français",
                            "genres": "Comedy|Drama|Romance",
                            "actors": "Gérard Depardieu|Anne Brochet|Vincent Pérez|Jacques Weber|Sandrine Kiberlain|Ludivine Sagnier|Philippe Girard|Gérard Depardieu|Anne Brochet|Vincent Pérez|Jacques Weber|Sandrine Kiberlain",
                            "directors": "Jean-Paul Rappeneau"
                        }, {
                            "mid": 1357,
                            "name": "Shine (1996)",
                            "descri": "Pianist David Helfgott, driven by his father and teachers, has a breakdown. Years later he returns to the piano, to popular if not critical acclaim.",
                            "timelong": "105 minutes",
                            "issue": "July 15, 1997",
                            "shoot": "1996",
                            "score": 3.945945945945946,
                            "language": "English",
                            "genres": "Drama|Romance",
                            "actors": "Geoffrey Rush|Noah Taylor|Armin Mueller-Stahl|Justin Braine|Sonia Todd|Chris Haywood|Alex Rafalowicz|Lynn Redgrave|Googie Withers|John Gielgud|Geoffrey Rush|Noah Taylor|Armin Mueller-Stahl|Justin Braine|Sonia Todd",
                            "directors": "Scott Hicks"
                        }, {
                            "mid": 27878,
                            "name": "Born into Brothels (2004)",
                            "descri": "The academy award winning documentary depicting the lives of child prostitutes in the red light district of Songachi, Calcutta. Director Zana Briski went to photograph the prostitutes when she met and became friends with their children. Briski began giving photography lessons to the children and became aware that their photography might be a way for them to lead better lives.",
                            "timelong": "85 minutes",
                            "issue": "September 20, 2005",
                            "shoot": "2004",
                            "score": 3.7857142857142856,
                            "language": "বাংলা|English",
                            "genres": "Documentary",
                            "actors": "Zana Briski|Avijit|Geeta Masi|Kochi|Mamuni",
                            "directors": "Zana Briski|Ross Kauffman"
                        }, {
                            "mid": 242,
                            "name": "Farinelli: il castrato (1994)",
                            "descri": "Farinelli is a 1994 biopic film about the life and career of Italian opera singer Farinelli, considered one of the greatest castrato singers of all time.",
                            "timelong": "111 minutes",
                            "issue": "August 29, 2000",
                            "shoot": "1994",
                            "score": 3.75,
                            "language": "Français",
                            "genres": "Drama|Musical",
                            "actors": "Stefano Dionisi|Enrico Lo Verso|Elsa Zylberstein|Jeroen Krabbé|Caroline Cellier",
                            "directors": "Gérard Corbiau"
                        }, {
                            "mid": 2750,
                            "name": "Radio Days (1987)",
                            "descri": "The Narrator (Woody Allen) tells us how the radio influenced his childhood in the days before TV. In the New York City of the late 1930s to the New Year's Eve 1944, this coming-of-age tale mixes the narrator's experiences with contemporary anecdotes and urban legends of the radio stars.",
                            "timelong": "90 minutes",
                            "issue": "October 2, 2001",
                            "shoot": "1987",
                            "score": 3.75,
                            "language": "English",
                            "genres": "Comedy|Drama",
                            "actors": "Woody Allen|Mia Farrow|Jeff Daniels|Larry David|Todd Field|Seth Green|Michael Tucker|Julie Kavner|Danny Aiello|Tony Roberts|Wallace Shawn|Tito Puente|Dianne Wiest|Renée Lippin|Josh Mostel|Kitty Carlisle|Roberta Bennett|Sydney A. Blake|Gina DeAngeles|Danielle Ferland|Judith Malina|Joy Newman|Diane Keaton|Woody Allen|Mia Farrow|Jeff Daniels|Larry David|Todd Field",
                            "directors": "Woody Allen"
                        }, {
                            "mid": 2206,
                            "name": "Suspicion (1941)",
                            "descri": "Wealthy, sheltered Joan Fontaine is swept off her feet by charming ne'er-do-well Cary Grant. Though warned that Grant is little more than a fortune-hunter, Fontaine marries him anyway. She remains loyal to her irresponsible husband as he plows his way from one disreputable business scheme to another. Gradually, Fontaine comes to the conclusion that Grant intends to do away with her in order to collect her inheritance...a suspicion confirmed when Grant's likeable business partner Nigel Bruce dies under mysterious circumstances. To his dying day, Hitchcock insisted that he wanted to retain the novelist Francis Iles' original ending, but that the RKO executives intervened. Fontaine won an Academy Award for her work.",
                            "timelong": "99 minutes",
                            "issue": "September 7, 2004",
                            "shoot": "1941",
                            "score": 3.7,
                            "language": "English",
                            "genres": "Film-Noir|Mystery|Thriller",
                            "actors": "Cary Grant|Joan Fontaine|Cedric Hardwicke|Nigel Bruce|Dame May Whitty|Isabel Jeans|Heather Angel|Auriol Lee|Reginald Sheffield|Leo G. Carroll|Billy Bevan|Leonard Carey|Gavin Gordon|Doris Lloyd|Cary Grant|Joan Fontaine|Cedric Hardwicke|Nigel Bruce|Dame May Whitty",
                            "directors": "Alfred Hitchcock"
                        }, {
                            "mid": 2390,
                            "name": "Little Voice (1998)",
                            "descri": "After the death of her father, Little Voice or LV becomes a virtual recluse, never going out and hardly ever saying a word. She just sits in her bedroom listening to her father's collection of old records of Shirley Bassey, Marilyn Monroe and various other famous female singers. But at night time, LV sings, imitating these great singers with surprising accuracy. One night she is overheard by one of her mother's boyfriends, who happens to be a talent agent. He manages to convince her that her talent is special and arranges for her to perform at the local night club, but several problems arise.",
                            "timelong": "97 minutes",
                            "issue": "July 13, 1999",
                            "shoot": "1998",
                            "score": 3.409090909090909,
                            "language": "English",
                            "genres": "Comedy",
                            "actors": "Brenda Blethyn|Michael Caine|Ewan McGregor|Jane Horrocks|Jim Broadbent|Annette Badland|Philip Jackson|Adam Fogerty|Fred Feast|Graham Turner|Dick Van Winkle|Karen Gregory|James Welsh|Alex Norton|Howard Grace|Brenda Blethyn|Michael Caine|Ewan McGregor|Jane Horrocks|Jim Broadbent",
                            "directors": "Mark Herman"
                        }, {
                            "mid": 2856,
                            "name": "I Saw What You Did (1965)",
                            "descri": "When two teenagers make prank phone calls to strangers, they become the target for terror when they whisper 'I Saw What You Did, And I Know Who You Are!' to psychopath Steve Marek who has just murdered his wife. But somebody else knows of the terrible crime that was committed that night, the killer's desperately amorous neighbor Amy Nelson.",
                            "timelong": "82 minutes",
                            "issue": "August 24, 1999",
                            "shoot": "1965",
                            "score": 3.4,
                            "language": "English",
                            "genres": "Thriller",
                            "actors": "Joan Crawford|John Ireland|Leif Erickson|Sara Lane|Andi Garrett|Sharyl Locke|Patricia Breslin|John Archer|John Crawford|Joyce Meadows|Tom Hatten|Douglas Evans|Barbara Wilkin|Glen Vernon|Sara Anderson|Janet Hamill|John Crowther|Dee Carroll|Russ Bender|Joan Crawford|John Ireland|Leif Erickson|Sara Lane|Andi Garrett",
                            "directors": "William Castle"
                        }, {
                            "mid": 3099,
                            "name": "Shampoo (1975)",
                            "descri": "George Roundy is a Beverly Hills hairstylist whose uncontrolled libido stands between him and his ambitions. He wants the security of a relationship. He wants to be a hairdressing 'star' and open his own salon. But the fact that he beds down with the wife, daughter and mistress of a potential backer doesn't help. It also does little for his relationship with his current girlfriend.",
                            "timelong": "109 minutes",
                            "issue": "January 21, 2003",
                            "shoot": "1975",
                            "score": 2.611111111111111,
                            "language": "English",
                            "genres": "Comedy|Drama|Romance",
                            "actors": "Warren Beatty|Julie Christie|Goldie Hawn|Lee Grant|Jack Warden|Tony Bill|George Furth|Jay Robinson|Ann Weldon|Luana Anders|Randy Scheer|Carrie Fisher|Susanna Moore|Warren Beatty|Julie Christie|Goldie Hawn|Lee Grant|Jack Warden",
                            "directors": "Hal Ashby"
                        }], "success": true
                    }
                )
            case '/search':
                return response({
                        "movies": [{
                            "mid": 2636,
                            "name": "Mummy's Ghost, The (1944)",
                            "descri": "An Egyptian high priest travels to America to reclaim the bodies of ancient Egyptian princess Ananka and her living guardian mummy Kharis. Learning that Ananka's spirit has been reincarnated into another body, he kidnaps a young woman of Egyptian descent with a mysterious resemblance to the princess. However, the high priest's greedy desires cause him to lose control of the mummy...",
                            "timelong": "61 minutes",
                            "issue": "August 28, 2001",
                            "shoot": "1944",
                            "score": 5.0,
                            "language": "English",
                            "genres": "Horror",
                            "actors": "Lon Chaney Jr.|John Carradine|Robert Lowery|Ramsay Ames|Barton MacLane|Harry Shannon|Frank Reicher|Claire Whitney|Lester Sharpe|George Zucco|Emmett Vogan|Eddy Waller|Mira McKinney|Dorothy Vaughan|Oscar O'Shea|Jack C. Smith|Steve Barclay|Martha McVicker|Ivan Triesault|Anthony Warde|Jack Rockwell|David Bruce|Bess Flowers|Fay Holderness|Caroline Cook|Lon Chaney Jr.|John Carradine|Robert Lowery|Ramsay Ames|Barton MacLane",
                            "directors": "Reginald Le Borg"
                        }, {
                            "mid": 2650,
                            "name": "Ghost of Frankenstein, The (1942)",
                            "descri": "Ygor discovers Frankenstein's creation is still alive and brings him to the Doctor's son, Ludwig, for help. Obsessed with restoring the monster to his full potential, Ludwig is unaware that someone has more devious plans for the creature.",
                            "timelong": "67 minutes",
                            "issue": "August 28, 2001",
                            "shoot": "1942",
                            "score": 5.0,
                            "language": "English",
                            "genres": "Horror",
                            "actors": "Cedric Hardwicke|Lon Chaney Jr.|Bela Lugosi|Lionel Atwill|Ralph Bellamy|Evelyn Ankers|Janet Ann Gallow|Olaf Hytten|Barton Yarborough|Doris Lloyd|Lawrence Grant|Holmes Herbert|Lionel Belmore|Michael Mark|Brandon Hurst|Dwight Frye|Harry Cording|Leyland Hodgson|Janet Warren|Jimmy Phillips|Teddy Infuhr|William Smith|Richard Alexander|Chet Brandenburg|Otto Hoffman|Harry Tenbrook|George Eldredge|Ernie Stanton|Julius Tannen|Glen Walters|Colin Clive|Cedric Hardwicke|Lon Chaney Jr.|Bela Lugosi|Lionel Atwill|Ralph Bellamy",
                            "directors": "Erle C. Kenton"
                        }, {
                            "mid": 27728,
                            "name": "Ghost in the Shell 2: Innocence (a.k.a. Innocence) (Inosensu) (2004)",
                            "descri": "Groundbreaking director Mamoru Oshii continues to push the boundaries of art and anime with this universally acclaimed cyber thriller following cyborg detective Batou as he tries to unravel the reasons for a murderous robot revolt in the year 2032. A quest for a killer that becomes a mind bending search for the meaning of life.",
                            "timelong": "100 minutes",
                            "issue": "December 28, 2004",
                            "shoot": "2004",
                            "score": 4.333333333333333,
                            "language": "日本語",
                            "genres": "Action|Animation|Drama|Sci-Fi|Thriller",
                            "actors": "Atsuko Tanaka|Akio Ohtsuka|Kouichi Yamadera|Tamio Ohki|Yutaka Nakano|Naoto Takenaka|Gou Aoba|Eisuke Asakura|Atsuko Tanaka|Akio Ohtsuka|Kouichi Yamadera|Tamio Ohki|Yutaka Nakano",
                            "directors": "Mamoru Oshii"
                        }, {
                            "mid": 26606,
                            "name": "Chinese Ghost Story, A (Sinnui yauwan) (1987)",
                            "descri": "Ning Tsai-Shen, a humble tax collector, arrives in a small town to carry out his work. No one is willing to give him shelter for the night, so he ends up in the haunted Lan Ro temple. There, he meets Taoist Swordsman Yen Che-Hsia, and the beautiful Nieh Hsiao-Tsing, with whom he falls in love.",
                            "timelong": "98 minutes",
                            "issue": "May 26, 1998",
                            "shoot": "1987",
                            "score": 4.25,
                            "language": "普通话",
                            "genres": "Action|Fantasy|Horror|Romance",
                            "actors": "Leslie Cheung|Joey Wong|Wu Ma|Lau Siu-Ming|Lam Wai|Sit Chi-Lun|David Wu|Wong Jing|Chiang Kam|Huang Ha|Leslie Cheung|Joey Wong|Wu Ma|Lau Siu-Ming|Lam Wai",
                            "directors": "Ching Siu-Tung"
                        }, {
                            "mid": 118880,
                            "name": "A Girl Walks Home Alone at Night (2014)",
                            "descri": "In the Iranian ghost-town Bad City, a place that reeks of death and loneliness, the townspeople are unaware they are being stalked by a lonesome vampire.",
                            "timelong": "99 minutes",
                            "issue": "",
                            "shoot": "2014",
                            "score": 4.0,
                            "language": "فارسی",
                            "genres": "Horror|Romance|Thriller",
                            "actors": "Sheila Vand|Arash Marandi|Marshall Manesh|Dominic Rains|Rome Shadanloo|Milad Eghbali|Reza Sixo Safai|Mozhan Marnò|Sheila Vand|Arash Marandi|Marshall Manesh|Dominic Rains|Rome Shadanloo",
                            "directors": "Ana Lily Amirpour"
                        }, {
                            "mid": 2841,
                            "name": "Stir of Echoes (1999)",
                            "descri": "After being hypnotized by his sister in law, Tom Witzky begins seeing haunting visions of a girl's ghost and a mystery begins to unfold around her.",
                            "timelong": "99 minutes",
                            "issue": "February 1, 2000",
                            "shoot": "1999",
                            "score": 3.7954545454545454,
                            "language": "English",
                            "genres": "Horror|Mystery|Thriller",
                            "actors": "Kevin Bacon|Kathryn Erbe|Illeana Douglas|Kevin Dunn|Conor O'Farrell|Lusia Strus|Zachary David Cope|Stephen Eugene Walker|Mary Kay Cook|Larry Neumann Jr.|Jennifer Morrison|Liza Weil|Kevin Bacon|Kathryn Erbe|Illeana Douglas|Kevin Dunn|Conor O'Farrell",
                            "directors": "David Koepp"
                        }, {
                            "mid": 2716,
                            "name": "Ghostbusters (a.k.a. Ghost Busters) (1984)",
                            "descri": "After losing their academic posts at a prestigious university, a team of parapsychologists goes into business as proton-pack-toting 'ghostbusters' who exterminate ghouls, hobgoblins and supernatural pests of all stripes. An ad campaign pays off when a knockout cellist hires the squad to purge her swanky digs of demons that appear to be living in her refrigerator.",
                            "timelong": "107 minutes",
                            "issue": "June 29, 1999",
                            "shoot": "1984",
                            "score": 3.761904761904762,
                            "language": "English",
                            "genres": "Action|Comedy|Sci-Fi",
                            "actors": "Bill Murray|Dan Aykroyd|Sigourney Weaver|Harold Ramis|Rick Moranis|Annie Potts|William Atherton|Ernie Hudson|David Margulies|Jennifer Runyon|Michael Ensign|Slavitza Jovan|Steven Tash|Alice Drummond|Jordan Charney|Timothy Carhart|John Rothman|Tom McDermott|John Ring|Norman Matlock|Joe Cirillo|Joe Schmieg|Roger Grimsby|Larry King|Joe Franklin|Casey Kasem|Reginald VelJohnson|Rhoda Gemignani|Murray Rubin|Larry Dilg|Danny Stone|Patty Dworkin|Jean Kasem|Lenny Del Genio|Frances E. Nealy|Sam Moses|Christopher Wynkoop|Winston May|Tommy Hollis|Eda Reiss Merin|Ric Mancini|Carol Ann Henry|James Hardie|Frantz Turner|Paul Trafas|Cheryl Birchenfield|Kymberly Herrin|Stanley Grover|Ruth Oliver|Nancy Kelly|Bill Murray|Dan Aykroyd|Sigourney Weaver|Harold Ramis|Rick Moranis",
                            "directors": "Ivan Reitman"
                        }, {
                            "mid": 3081,
                            "name": "Sleepy Hollow (1999)",
                            "descri": "New York detective Ichabod Crane is sent to Sleepy Hollow to investigate a series of mysterious deaths in which the victims are found beheaded. But the locals believe the culprit to be none other than the ghost of the legendary Headless Horseman.",
                            "timelong": "105 minutes",
                            "issue": "May 23, 2000",
                            "shoot": "1999",
                            "score": 3.625,
                            "language": "English",
                            "genres": "Fantasy|Horror|Mystery|Romance",
                            "actors": "Johnny Depp|Ian McDiarmid|Christina Ricci|Casper Van Dien|Michael Gough|Christopher Walken|Lisa Marie|Steven Waddington|Christopher Lee|Miranda Richardson|Michael Gambon|Jeffrey Jones|Richard Griffiths|Martin Landau|Marc Pickering|Claire Skinner|Alun Armstrong|Jessica Oyelowo|Mark Spalding|Peter Guinness|Tony Maudsley|Jamie Foreman|Philip Martin Brown|Johnny Depp|Ian McDiarmid|Christina Ricci|Casper Van Dien|Michael Gough",
                            "directors": "Tim Burton"
                        }, {
                            "mid": 1049,
                            "name": "Ghost and the Darkness, The (1996)",
                            "descri": "Sir Robert Beaumont is behind schedule on a railroad in Africa. Enlisting noted engineer John Henry Patterson to right the ship, Beaumont expects results. Everything seems great until the crew discovers the mutilated corpse of the project's foreman, seemingly killed by a lion. After several more attacks, Patterson calls in famed hunter Charles Remington, who has finally met his match in the bloodthirsty lions.",
                            "timelong": "109 minutes",
                            "issue": "December 1, 1998",
                            "shoot": "1996",
                            "score": 3.619047619047619,
                            "language": "English",
                            "genres": "Action|Adventure",
                            "actors": "Michael Douglas|Val Kilmer|Tom Wilkinson|John Kani|Emily Mortimer|Bernard Hill|Brian McCardie|Om Puri|Henry Cele|Kurt Egelhof|Satchu Annamalai|Teddy Reddy|Raheem Khan|Jack Devnarain|Glen Gabela|Michael Douglas|Val Kilmer|Tom Wilkinson|John Kani|Emily Mortimer",
                            "directors": "Stephen Hopkins"
                        }, {
                            "mid": 26686,
                            "name": "Ghost Dad (1990)",
                            "descri": "Elliot Hopper is a widower with three children, he is currently working on a deal. It seems like his wife illness was very costly and this deal could put them out of the red. However he gets into a cab that is driven by a maniac, and Elliot crashes into a river. Elliot is sent back so that he could finish the deal and make sure that his children are taken care of.",
                            "timelong": "84 minutes",
                            "issue": "March 1, 2005",
                            "shoot": "1990",
                            "score": 3.5,
                            "language": "English",
                            "genres": "Comedy|Fantasy",
                            "actors": "Bill Cosby|Kimberly Russell|Denise Nicholas|Salim Grant|Ian Bannen|Christine Ebersole|Barry Corbin|Raynor Scheine|Omar Gooding|Dana Ashbrook|Dakin Matthews|Arnold Stang|Bill Cosby|Kimberly Russell|Denise Nicholas|Salim Grant|Ian Bannen",
                            "directors": "Sidney Poitier"
                        }, {
                            "mid": 2035,
                            "name": "Blackbeard's Ghost (1968)",
                            "descri": "Peter Ustinov stars as the eponymous wraith, who returns to Earth to aid his descendant, elderly Elsa Lanchester (Stowecroft). The villains want to kick Lanchester and her friends out of their group home so that they can build a crooked casino. Good guy Steve Walker (Jones) gets caught in the middle of the squabble after evoking Blackbeard's ghost.",
                            "timelong": "106 minutes",
                            "issue": "June 4, 2002",
                            "shoot": "1968",
                            "score": 3.0,
                            "language": "English",
                            "genres": "Children|Comedy",
                            "actors": "Peter Ustinov|Dean Jones|Suzanne Pleshette|Elsa Lanchester|Richard Deacon|Peter Ustinov|Stefanie Powers|Terry-Thomas|Joby Baker|Elliott Reid|Norman Grabowski|Kelly Thordsen|Michael Conrad|Herbie Faye|George Murdock|Hank Jones|Ned Glass|Gil Lamb|Peter Ustinov|Dean Jones|Suzanne Pleshette|Elsa Lanchester|Richard Deacon",
                            "directors": "Robert Stevenson"
                        }, {
                            "mid": 158,
                            "name": "Casper (1995)",
                            "descri": "Furious that her late father only willed her his gloomy-looking mansion rather than his millions, Carrigan Crittenden is ready to burn the place to the ground when she discovers a map to a treasure hidden in the house. But when she enters the rickety mansion to seek her claim, she is frightened away by a wicked wave of ghosts. Determined to get her hands on this hidden fortune, she hires afterlife therapist Dr. James Harvey to exorcise the ghosts from the mansion. Harvey and his daughter Kat move in, and soon Kat meets Casper, the ghost of a young boy who's 'the friendliest ghost you know.' But not so friendly are Casper's uncles--Stretch, Fatso and Stinkie--who are determined to drive all 'fleshies' away.",
                            "timelong": "100 minutes",
                            "issue": "September 23, 2003",
                            "shoot": "1995",
                            "score": 2.8706896551724137,
                            "language": "English",
                            "genres": "Adventure|Children",
                            "actors": "Christina Ricci|Bill Pullman|Cathy Moriarty|Eric Idle|Joe Nipote|Joe Alaskey|Brad Garrett|Garette Ratliff Henson|Jessica Wesson|Amy Brenneman|Malachi Pearson|Chauncey Leopardi|Spencer Vrooman|Ben Stein|Don Novello|Fred Rogers|Terry Murphy|Ernestine Mercer|Doug Bruckner|John Kassir|Wesley Thompson|Michael Dubrow|J.J. Anderson|Jess Harnell|Michael McCarty|Micah Winkelspecht|Mike Simmrin|Devon Sawa|Dan Aykroyd|Rodney Dangerfield|Clint Eastwood|Mel Gibson|Elise Main|Tony Stef'Ano|Christina Ricci|Bill Pullman|Cathy Moriarty|Eric Idle|Joe Nipote",
                            "directors": "Brad Silberling"
                        }, {
                            "mid": 2717,
                            "name": "Ghostbusters II (1989)",
                            "descri": "Five years after they defeated Gozer, the Ghostbusters are out of business. When Dana begins to have ghost problems again, the boys come out of retirement to aid her and hopefully save New York City from a new paranormal threat.",
                            "timelong": "108 minutes",
                            "issue": "June 29, 1999",
                            "shoot": "1989",
                            "score": 2.755813953488372,
                            "language": "English",
                            "genres": "Comedy|Fantasy|Sci-Fi",
                            "actors": "Bill Murray|Dan Aykroyd|Sigourney Weaver|Harold Ramis|Rick Moranis|Ernie Hudson|Annie Potts|Peter MacNicol|Harris Yulin|David Margulies|Kurt Fuller|Janet Margolin|Wilhelm von Homburg|Mary Ellen Trainor|Chloe Webb|Kevin Dunn|Brian Doyle-Murray|Max von Sydow|Ben Stein|Michael P. Moran|George P. Wilbur|Cheech Marin|Bill Murray|Dan Aykroyd|Sigourney Weaver|Harold Ramis|Rick Moranis",
                            "directors": "Ivan Reitman"
                        }, {
                            "mid": 113640,
                            "name": "Canal, The (2014)",
                            "descri": "Film archivist David and his wife are perfectly happy or so he believes. When a looming secret shatters their marriage at the same time as a turn-of-the-century film reel he is studying reveals their house to be the site of a 1902 multiple-murder, David begins to unravel, and the house’s eerie history threatens to repeat itself. Dripping with tension and chilling to the core, this visceral Irish ghost story is a visually arresting and genuinely shocking journey into the darkness within.",
                            "timelong": "92 minutes",
                            "issue": "",
                            "shoot": "2014",
                            "score": 2.5,
                            "language": "English",
                            "genres": "Horror|Thriller",
                            "actors": "Rupert Evans|Antonia Campbell-Hughes|Hannah Hoekstra|Steve Oram|Kelly Byrne|Serena Brabazon|Anthony Murphy|Calum Heath|Paddy Curran|Maura Foley|Carl Shaaban|Sinead Watters|Alicja Ayres|Rupert Evans|Antonia Campbell-Hughes|Hannah Hoekstra|Steve Oram|Kelly Byrne",
                            "directors": "Ivan Kavanagh"
                        }, {
                            "mid": 1043,
                            "name": "To Gillian on Her 37th Birthday (1996)",
                            "descri": "David loves his wife, Gillian. Unfortunately, she died two years ago. David deals with his grief by continuing his romance with Gillian during walks with her 'ghost' on the beach at night. While David lives in the past, other family problems crop up in the present in the real world....",
                            "timelong": "93 minutes",
                            "issue": "May 7, 2002",
                            "shoot": "1996",
                            "score": 2.375,
                            "language": "English",
                            "genres": "Drama|Romance",
                            "actors": "Peter Gallagher|Michelle Pfeiffer|Claire Danes|Freddie Prinze Jr.|Seth Green|Laurie Fortier|Wendy Crewson|Bruce Altman|Kathy Baker|Rachel Seidman-Lockamy|Lorielle New|Danny Crook|Todd Haven|Peter Gallagher|Michelle Pfeiffer|Claire Danes|Freddie Prinze Jr.|Seth Green",
                            "directors": "Michael Pressman"
                        }, {
                            "mid": 3042,
                            "name": "Meatballs III (1987)",
                            "descri": "The ghost of a dead porn star comes to Earth to help a nerd with his sex life.",
                            "timelong": "96 minutes",
                            "issue": "",
                            "shoot": "1986",
                            "score": 2.3333333333333335,
                            "language": "English",
                            "genres": "Comedy",
                            "actors": "Patrick Dempsey|Sally Kellerman|Isabelle Mejias|Al Waxman|Shannon Tweed|Peter Snider|Jan Taylor Hendricks|Hudson Bishop|Mark Blutman|Justine Campbell|Peter Saecks|Caroline Arnold|Pamela Collyer|Colleen Passard|Willye Fleming|Maury Chaykin|Patrick Dempsey|Sally Kellerman|Isabelle Mejias|Al Waxman|Shannon Tweed",
                            "directors": "George Mendeluk"
                        }], "success": true
                    }
                )
            case '/genre':
                return response({
                        "movies": [{
                            "mid": 116,
                            "name": "Anne Frank Remembered (1995)",
                            "descri": "",
                            "timelong": "117 minutes",
                            "issue": "March 9, 2004",
                            "shoot": "1995",
                            "score": 4.75,
                            "language": "English",
                            "genres": "Documentary",
                            "actors": "Kenneth Branagh|Glenn Close",
                            "directors": "Jon Blair"
                        }, {
                            "mid": 1305,
                            "name": "Paris, Texas (1984)",
                            "descri": "A man wanders out of the desert not knowing who he is. His brother finds him, and helps to pull his memory back of the life he led before he walked out on his family and disappeared four years earlier.",
                            "timelong": "147 minutes",
                            "issue": "December 14, 2004",
                            "shoot": "1984",
                            "score": 4.291666666666667,
                            "language": "English",
                            "genres": "Drama|Romance",
                            "actors": "Harry Dean Stanton|Nastassja Kinski|Dean Stockwell|Hunter Carson|Aurore Clément|Bernhard Wicki|John Lurie|Jeni Vici|Sally Norvell|Socorro Valdez|Claresie Mobley|Viva|Tom Farrell|Harry Dean Stanton|Nastassja Kinski|Dean Stockwell|Hunter Carson|Aurore Clément",
                            "directors": "Wim Wenders"
                        }, {
                            "mid": 1277,
                            "name": "Cyrano de Bergerac (1990)",
                            "descri": "Embarrassed by his large nose, a romantic poet/soldier romances his cousin by proxy.",
                            "timelong": "137 minutes",
                            "issue": "February 10, 2004",
                            "shoot": "1990",
                            "score": 4.0,
                            "language": "Français",
                            "genres": "Comedy|Drama|Romance",
                            "actors": "Gérard Depardieu|Anne Brochet|Vincent Pérez|Jacques Weber|Sandrine Kiberlain|Ludivine Sagnier|Philippe Girard|Gérard Depardieu|Anne Brochet|Vincent Pérez|Jacques Weber|Sandrine Kiberlain",
                            "directors": "Jean-Paul Rappeneau"
                        }, {
                            "mid": 1357,
                            "name": "Shine (1996)",
                            "descri": "Pianist David Helfgott, driven by his father and teachers, has a breakdown. Years later he returns to the piano, to popular if not critical acclaim.",
                            "timelong": "105 minutes",
                            "issue": "July 15, 1997",
                            "shoot": "1996",
                            "score": 3.945945945945946,
                            "language": "English",
                            "genres": "Drama|Romance",
                            "actors": "Geoffrey Rush|Noah Taylor|Armin Mueller-Stahl|Justin Braine|Sonia Todd|Chris Haywood|Alex Rafalowicz|Lynn Redgrave|Googie Withers|John Gielgud|Geoffrey Rush|Noah Taylor|Armin Mueller-Stahl|Justin Braine|Sonia Todd",
                            "directors": "Scott Hicks"
                        }, {
                            "mid": 27878,
                            "name": "Born into Brothels (2004)",
                            "descri": "The academy award winning documentary depicting the lives of child prostitutes in the red light district of Songachi, Calcutta. Director Zana Briski went to photograph the prostitutes when she met and became friends with their children. Briski began giving photography lessons to the children and became aware that their photography might be a way for them to lead better lives.",
                            "timelong": "85 minutes",
                            "issue": "September 20, 2005",
                            "shoot": "2004",
                            "score": 3.7857142857142856,
                            "language": "বাংলা|English",
                            "genres": "Documentary",
                            "actors": "Zana Briski|Avijit|Geeta Masi|Kochi|Mamuni",
                            "directors": "Zana Briski|Ross Kauffman"
                        }, {
                            "mid": 242,
                            "name": "Farinelli: il castrato (1994)",
                            "descri": "Farinelli is a 1994 biopic film about the life and career of Italian opera singer Farinelli, considered one of the greatest castrato singers of all time.",
                            "timelong": "111 minutes",
                            "issue": "August 29, 2000",
                            "shoot": "1994",
                            "score": 3.75,
                            "language": "Français",
                            "genres": "Drama|Musical",
                            "actors": "Stefano Dionisi|Enrico Lo Verso|Elsa Zylberstein|Jeroen Krabbé|Caroline Cellier",
                            "directors": "Gérard Corbiau"
                        }, {
                            "mid": 2206,
                            "name": "Suspicion (1941)",
                            "descri": "Wealthy, sheltered Joan Fontaine is swept off her feet by charming ne'er-do-well Cary Grant. Though warned that Grant is little more than a fortune-hunter, Fontaine marries him anyway. She remains loyal to her irresponsible husband as he plows his way from one disreputable business scheme to another. Gradually, Fontaine comes to the conclusion that Grant intends to do away with her in order to collect her inheritance...a suspicion confirmed when Grant's likeable business partner Nigel Bruce dies under mysterious circumstances. To his dying day, Hitchcock insisted that he wanted to retain the novelist Francis Iles' original ending, but that the RKO executives intervened. Fontaine won an Academy Award for her work.",
                            "timelong": "99 minutes",
                            "issue": "September 7, 2004",
                            "shoot": "1941",
                            "score": 3.7,
                            "language": "English",
                            "genres": "Film-Noir|Mystery|Thriller",
                            "actors": "Cary Grant|Joan Fontaine|Cedric Hardwicke|Nigel Bruce|Dame May Whitty|Isabel Jeans|Heather Angel|Auriol Lee|Reginald Sheffield|Leo G. Carroll|Billy Bevan|Leonard Carey|Gavin Gordon|Doris Lloyd|Cary Grant|Joan Fontaine|Cedric Hardwicke|Nigel Bruce|Dame May Whitty",
                            "directors": "Alfred Hitchcock"
                        }, {
                            "mid": 2390,
                            "name": "Little Voice (1998)",
                            "descri": "After the death of her father, Little Voice or LV becomes a virtual recluse, never going out and hardly ever saying a word. She just sits in her bedroom listening to her father's collection of old records of Shirley Bassey, Marilyn Monroe and various other famous female singers. But at night time, LV sings, imitating these great singers with surprising accuracy. One night she is overheard by one of her mother's boyfriends, who happens to be a talent agent. He manages to convince her that her talent is special and arranges for her to perform at the local night club, but several problems arise.",
                            "timelong": "97 minutes",
                            "issue": "July 13, 1999",
                            "shoot": "1998",
                            "score": 3.409090909090909,
                            "language": "English",
                            "genres": "Comedy",
                            "actors": "Brenda Blethyn|Michael Caine|Ewan McGregor|Jane Horrocks|Jim Broadbent|Annette Badland|Philip Jackson|Adam Fogerty|Fred Feast|Graham Turner|Dick Van Winkle|Karen Gregory|James Welsh|Alex Norton|Howard Grace|Brenda Blethyn|Michael Caine|Ewan McGregor|Jane Horrocks|Jim Broadbent",
                            "directors": "Mark Herman"
                        }, {
                            "mid": 2856,
                            "name": "I Saw What You Did (1965)",
                            "descri": "When two teenagers make prank phone calls to strangers, they become the target for terror when they whisper 'I Saw What You Did, And I Know Who You Are!' to psychopath Steve Marek who has just murdered his wife. But somebody else knows of the terrible crime that was committed that night, the killer's desperately amorous neighbor Amy Nelson.",
                            "timelong": "82 minutes",
                            "issue": "August 24, 1999",
                            "shoot": "1965",
                            "score": 3.4,
                            "language": "English",
                            "genres": "Thriller",
                            "actors": "Joan Crawford|John Ireland|Leif Erickson|Sara Lane|Andi Garrett|Sharyl Locke|Patricia Breslin|John Archer|John Crawford|Joyce Meadows|Tom Hatten|Douglas Evans|Barbara Wilkin|Glen Vernon|Sara Anderson|Janet Hamill|John Crowther|Dee Carroll|Russ Bender|Joan Crawford|John Ireland|Leif Erickson|Sara Lane|Andi Garrett",
                            "directors": "William Castle"
                        }], "success": true
                    }
                )
            case '/stream':
                return response({
                        "movies": [{
                            "mid": 2390,
                            "name": "Little Voice (1998)",
                            "descri": "After the death of her father, Little Voice or LV becomes a virtual recluse, never going out and hardly ever saying a word. She just sits in her bedroom listening to her father's collection of old records of Shirley Bassey, Marilyn Monroe and various other famous female singers. But at night time, LV sings, imitating these great singers with surprising accuracy. One night she is overheard by one of her mother's boyfriends, who happens to be a talent agent. He manages to convince her that her talent is special and arranges for her to perform at the local night club, but several problems arise.",
                            "timelong": "97 minutes",
                            "issue": "July 13, 1999",
                            "shoot": "1998",
                            "score": 3.409090909090909,
                            "language": "English",
                            "genres": "Comedy",
                            "actors": "Brenda Blethyn|Michael Caine|Ewan McGregor|Jane Horrocks|Jim Broadbent|Annette Badland|Philip Jackson|Adam Fogerty|Fred Feast|Graham Turner|Dick Van Winkle|Karen Gregory|James Welsh|Alex Norton|Howard Grace|Brenda Blethyn|Michael Caine|Ewan McGregor|Jane Horrocks|Jim Broadbent",
                            "directors": "Mark Herman"
                        }], "success": true
                    }
                )
        }
    }
} else {
    userService = axios.create({
        baseURL: '/rest/users',
        timeout: 5000
    })

    movieService = axios.create({
        baseURL: '/rest/movie',
        timeout: 5000
    })
}


export {userService, movieService}
