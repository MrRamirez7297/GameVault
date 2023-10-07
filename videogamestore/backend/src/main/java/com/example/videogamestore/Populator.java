package com.example.videogamestore;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.videogamestore.models.VideoGamesModel;
import com.example.videogamestore.repositories.VideoGameRepository;

import jakarta.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {
    
    @Resource
    private VideoGameRepository vgRepository;

    public Populator(VideoGameRepository vgRepository) {
        this.vgRepository = vgRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        VideoGamesModel game1 = new VideoGamesModel(
            "The Legend of Zelda: Tears of the Kingdom",
            "https://blog.richersounds.com/wp-content/uploads/2023/09/Tears-of-the-Kingdom-wallpaper-1170x720-1.jpg",
            "An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch™. The adventure is yours to create in a world fueled by your imagination. In this sequel to The Legend of Zelda: Breath of the Wild, you’ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom?",
            69.99,
            "Action, Adventure",
            96.00);
            vgRepository.save(game1);

        VideoGamesModel game2 = new VideoGamesModel(
            "Starfield",
            "https://cdn.akamai.steamstatic.com/steam/apps/1716740/capsule_616x353.jpg",
            "The year is 2330. Humanity has ventured beyond our solar system, settling new planets, and living as a spacefaring people. From humble beginnings as a space miner, you will join Constellation – the last group of space explorers seeking rare artifacts throughout the galaxy – and navigate the vast expanse of the Settled Systems in Bethesda Game Studios’ biggest and most ambitious game.",
            69.99,
            "Adventure, RPG",
            88.00);
            vgRepository.save(game2);

        VideoGamesModel game3 = new VideoGamesModel(
            "Diablo IV",
            "https://gaming-cdn.com/images/products/13407/616x353/diablo-iv-digital-deluxe-edition-xbox-one-xbox-series-x-s-digital-deluxe-edition-xbox-one-xbox-series-x-s-game-microsoft-store-europe-cover.jpg",
            "Forge your path through the corrupt lands of Sanctuary – a continuous, ever-growing, and fully explorable world, teeming with choices, quests, corruption, and loot. Join fellow adventurers, retake besieged towns, delve into nightmarish dungeons, and uncover lost secrets as you fight for the fate of the world. Every inch of Diablo IV is built for adventure, with multiple zones to explore freely, each ripe with non-linear quests, epic bosses, discoverable towns, and multitudes of demons to slay.",
            69.99,
            "Action, RPG",
            90.00);
            vgRepository.save(game3);

        VideoGamesModel game4 = new VideoGamesModel(
            "Baldur's Gate III",
            "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg",
            "The Forgotten Realms are a vast, detailed and diverse world, and there are secrets to be discovered all around you -- verticality is a vital part of exploration. Sneak, dip, shove, climb, and jump as you journey from the depths of the Underdark to the glittering rooftops of the Upper City. How you survive, and the mark you leave on the world, is up to you.",
            69.99,
            "Adventure, RPG, Strategy",
            97.00);
            vgRepository.save(game4);

        VideoGamesModel game5 = new VideoGamesModel(
            "Dead Island 2",
            "https://gamingspecials.co.za/wp-content/uploads/2023/07/Dead-Island-2.jpg",
            "A deadly virus is spreading across Los Angeles, California, turning its inhabitants into ravenous zombies. The city is in quarantine and the military have retreated. Bitten, infected, but more than just immune, you learn to harness the zombie inside. Only you, and the handful of other swaggering fellows who happen to be resistant to the pathogen, holds the future of LA (and humanity), in the balance. As you uncover the truth behind the outbreak you’ll discover who – or what – you are. Survive, evolve, save the world – just another day in LA!",
            59.99,
            "Action, Adventure",
            75.00);
            vgRepository.save(game5);

        VideoGamesModel game6 = new VideoGamesModel(
            "Atomic Heart",
            "https://techraptor.net/sites/default/files/styles/herobanner_desktop/public/2023-02/Atomic%20Heart%20Keyart.jpg",
            "Atomic Heart is an adventure first-person shooter, events of which unfolds in an alternate universe during the high noon of the Soviet Union. The principal character of the game is a special agent P-3, who after an unsuccessful landing on enterprise \"3826\" is trying to figure out what went wrong and to clear up a factory from went mad robots. A crazy Soviet setting, a hurricane action and a terrific story will not let you sleep even if you were born in the USSR. Restore peace and order and show us the best you can!",
            59.99,
            "Action, Shooter, Adventure",
            73.00);
            vgRepository.save(game6);

        VideoGamesModel game7 = new VideoGamesModel(
            "Star Wars Jedi: Survivor",
            "https://cdn.wccftech.com/wp-content/uploads/2023/04/star-wars-jedi-survivor.jpg",
            "Star Wars Jedi: Survivor picks up five years after the events of Star Wars Jedi: Fallen Order. Cal must stay one step ahead of the Empire’s constant pursuit as he continues to feel the weight of being one of the last remaining Jedi in the galaxy.",
            69.99,
            "Action, Adventure",
            null);
            vgRepository.save(game7);

        VideoGamesModel game8 = new VideoGamesModel(
            "Barotrauma",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/602960/capsule_616x353.jpg",
            "Overcome crisis and the unrelenting pressure of a frozen ocean. In Barotrauma you're a submarine crew member beneath the ice of Jupiter's moon Europa. Flee or fight alien lifeforms, explore a strange new world, command your crew, and craft equipment in a tense 2d co-op experience.",
            34.99,
            "Action, Strategy, Simulation, Indie",
            81.00);
            vgRepository.save(game8);

        VideoGamesModel game9 = new VideoGamesModel(
            "Final Fantasy XVI",
            "https://www.gamereactor.eu/media/99/finalfantasy16_3999983b.jpg",
            "An epic dark fantasy world where the fate of the land is decided by the mighty Eikons and the Dominants who wield them. This is the tale of Clive Rosfield, a warrior granted the title “First Shield of Rosaria” and sworn to protect his younger brother Joshua, the dominant of the Phoenix. Before long, Clive will be caught up in a great tragedy and swear revenge on the Dark Eikon Ifrit, a mysterious entity that brings calamity in its wake.",
            69.99,
            "Action, RPG",
            88.00);
            vgRepository.save(game9);

        VideoGamesModel game10 = new VideoGamesModel(
            "Assassin's Creed Mirage",
            "https://www.dsogaming.com/wp-content/uploads/2022/09/Assassins-Creed-Mirage-new-artwork-2-672x330.jpg",
            "In Assassin's Creed Mirage, you are Basim, a cunning street thief with nightmarish visions seeking answers and justice. Join an ancient organization and come to understand a new creed – one that will change Basim’s fate in ways he never could have imagined. Journey to Alamut, the legendary home of the Assassins who laid the foundations of the Creed in this heartfelt homage to the game that started it all.",
            49.99,
            "Action",
            null);
            vgRepository.save(game10);

        VideoGamesModel game11 = new VideoGamesModel(
            "The Witcher 3: Wild Hunt",
            "https://assetsio.reedpopcdn.com/unnamed-(1)_6w4PfVY.jpg",
            "The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.",
            14.99,
            "Action, Adventure, RPG",
            92.0);
            vgRepository.save(game11);

        VideoGamesModel game12 = new VideoGamesModel(
            "God of War (2018)",
            "https://assetsio.reedpopcdn.com/gowshare.jpg",
            "It is a new beginning for Kratos. Living as a man outside the shadow of the gods, he ventures into the brutal Norse wilds with his son Atreus, fighting to fulfill a deeply personal quest. His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive, and teach his son to do the same. This startling reimagining of God of War deconstructs the core elements that defined the series—satisfying combat; breathtaking scale; and a powerful narrative—and fuses them anew.",
            19.99,
            "Action, Adventure, RPG",
            94.0);
            vgRepository.save(game12);

        VideoGamesModel game13 = new VideoGamesModel(
            "The Last Of Us",
            "https://cdn.wccftech.com/wp-content/uploads/2022/08/The-Last-of-Us-Part-I-Featured-HD-scaled.jpg",
            "The population of the Earth almost disappeared as a result of a pandemic caused by a mutated fungus. The disease causes irreversible changes in the human body, a person loses his mind and behaves aggressively, like a zombie. Civilization no longer exists, few survivors live in isolation under the protection of the military. Cities outside the zones are dangerous ruins inhabited by infected people and people who have almost lost humanity. Joel the smuggler and teenage girl Ellie, are trying to cross the continent, colliding in depopulated cities with all the set of dangers. The game requires hidden actions, the combat capability and the number of ammunition of the heroes are small, and it is best for them to avoid fighting. The levels of the game are very extensive, at each level the task is the same - to reach a certain point alive.",
            19.99,
            "Action, Adventure",
            95.0);
            vgRepository.save(game13);

        VideoGamesModel game14 = new VideoGamesModel(
            "Uncharted 4: A Thief’s End",
            "https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2014/12/Uncharted4.jpg",
            "Uncharted 4 is the final installment in the Uncharted series. The story follows Nathan Drake for the last time as he now searches for Captain Henry Avery's treasure. Nathan agrees to find the treasure of the Gunsway heist in 1695 with his brother Sam and Sully. Nathan must face Rafe Adler and Nadine Ross while they are also trying to find this treasure and Nathan must face details about Sam's past. Expanding the story behind Henry Avery's actions in history the story once again feels like Indiana Jones kind of adventure. The grappling hook, climbing on rocks and mountains, or diving from the top, Nathan still engages into hand to hand combat with his enemies as well as using firearms. Nolan North, Emily Rose, and Richard McGonagle return to the final installment in the series to say farewell to the story of Nathan Drake for the last time.",
            39.99,
            "Action, Adventure",
            93.0);
            vgRepository.save(game14);

        VideoGamesModel game15 = new VideoGamesModel(
            "Portal",
            "https://static.wikia.nocookie.net/siivagunner/images/6/6f/Portal.jpg",
            "Every single time you click your mouse while holding a gun, you expect bullets to fly and enemies to fall. But here you will try out the FPS game filled with environmental puzzles and engaging story. Players will have to complete the tests, room by room, expecting either reward, freedom or more tests. By using the gun, that shoots portals (Portal-Gun™), players will move blocks, travel great distance quickly and learn about your current situation, which is unraveled through environmental storytelling. What you will be told might be different from what you will see. White environments will guide the player’s portal placement, forcing them to pay attention to the surroundings. Portal creates tension, allowing either solving puzzles at your own leisure or moving quickly, due to the time limit or threats.",
            9.99,
            "Adventure, Puzzle",
            90.0);
            vgRepository.save(game15);

        VideoGamesModel game16 = new VideoGamesModel(
            "Max Payne",
            "https://i.ytimg.com/vi/Oa0wUarl464/maxresdefault.jpg",
            "Max Payne is a man with nothing to lose in the violent, cold urban night. A fugitive undercover cop framed for murder and now hunted by cops and the mob. Max is a man with his back against the wall, fighting a battle he cannot hope to win. Prepare for a new breed of deep action game. Prepare for pain... Developed by Remedy Entertainment and produced by 3D Realms, Max Payne is an original third-person 3D game based on the MAX-FX engine and uses photo-digitized textures and radiosity lighting, resulting in one of the most realistic looking games ever seen on the PC.",
            14.99,
            "Action, Shooter",
            89.0);
            vgRepository.save(game16);

        VideoGamesModel game17 = new VideoGamesModel(
            "Grand Theft Auto V",
            "https://image.api.playstation.com/vulcan/ap/rnd/202203/0911/VIB0SeEj9vT6DTv7P4thJLZi.jpg",
            "Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. Simultaneous storytelling from three unique perspectives: Follow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. GTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission.",
            39.99,
            "Action, Adventure",
            92.0);
            vgRepository.save(game17);

        VideoGamesModel game18 = new VideoGamesModel(
            "Super Mario Odyssey",
            "https://thealternativeafterstory.files.wordpress.com/2018/08/super_mario_odyssey_4k-1920x1080.jpg",
            "Super Mario Odyssey is a 3D platform game, a part of Nintendo’s Super Mario series. Drawing inspiration from Super Mario 64 and Super Mario Sunshine, the game consists 17 levels (named as “kingdoms”). In most of them, your goal is to collect a certain amount of Power Moons. Collecting enough of them allows the player to progress to the next kingdom. Some moons can be found in different parts of the level or acquired as a reward for completing certain tasks or challenges. The Mario’s moveset mostly resembles that of Super Mario 64 and includes wall jumps, triple jumps, somersaults, long jumps, rolling on the ground. The main new gameplay feature is that Mario can throw his hat to create temporary platforms, grab objects, attack enemies, or possess them. Possessing enemies gives you new moves and sometimes is necessary to reach certain parts of the level.",
            59.99,
            "Arcade, Platformer",
            97.0);
            vgRepository.save(game18);

        VideoGamesModel game19 = new VideoGamesModel(
            "Super Mario 64",
            "https://i0.wp.com/oyster.ignimgs.com/mediawiki/apis.ign.com/super-mario-64/b/ba/Super-mario-64-1920x1080.jpg",
            "Mario is super in a whole new way! Combining the finest 3-D graphics ever developed for a video game and an explosive sound track, Super Mario 64 becomes a new standard for video games. It's packed with bruising battles, daunting obstacle courses and underwater adventures. Retrieve the Power Stars from their hidden locations and confront your arch nemesis - Bowser, King of the Koopas!",
            29.99,
            "Arcade, Platformer",
            94.0);
            vgRepository.save(game19);

        VideoGamesModel game20 = new VideoGamesModel(
            "Disco Elysium",
            "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/disco-elysium-title.jpg",
            "Disco Elysium is a groundbreaking blend of hardboiled cop show and isometric RPG. Solve a massive, open ended case in a unique urban fantasy setting. Kick in doors, interrogate suspects, or just get lost exploring the gorgeously rendered city of Revachol and unraveling its mysteries. Tough choices need to be made. What kind of cop you are — is up to you.  You play a disgraced lieutenant detective in Revachol West, a shore town where corruption’s out of control, murders go unsolved, and the kids just wanna dance. Kick in doors, interrogate suspects, or get lost exploring a gorgeously rendered city and unraveling its mysteries. All the while, tensions rise around you as Revachol threatens to explode.",
            39.99,
            "Adventure, RPG, Indie",
            91.0);
            vgRepository.save(game20);

        VideoGamesModel game21 = new VideoGamesModel(
            "Stray",
            "https://4kwallpapers.com/images/walls/thumbs_3t/8497.jpg",
            "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city. Stray is a third-person cat adventure game set amidst the detailed, neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly. Roam surroundings high and low, defend against unforeseen threats and solve the mysteries of this unwelcoming place inhabited by curious droids and dangerous creatures. See the world through the eyes of a cat and interact with the environment in playful ways. Be stealthy, nimble, silly, and sometimes as annoying as possible with the strange inhabitants of this mysterious world.",
            29.99,
            "Action, Adventure, Indie, Puzzle, Platformer",
            82.0);
            vgRepository.save(game21);

        VideoGamesModel game22 = new VideoGamesModel(
            "Elden Ring",
            "https://gaming-cdn.com/images/products/4824/orig/elden-ring-pc-game-steam-europe-cover.jpg",
            "The Golden Order has been broken. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered. Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will. Now the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Between. Ye dead who yet live, your grace long lost, follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ring.",
            39.99,
            "Action, RPG",
            95.0);
            vgRepository.save(game22);

        VideoGamesModel game23 = new VideoGamesModel(
            "Teenage Mutant Ninja Turtles: Shredder's Revenge",
            "https://m.exophase.com/psn/games/o/13g148e.png",
            "Teenage Mutant Ninja Turtles: Shredder’s Revenge reunites Leonardo, Raphael, Michelangelo, and Donatello to kick shell in a beautifully realized pixel art world invoking the turtles’ classic 1987 design. With Bebop and Rocksteady amassing gizmos to support Krang and Shredder’s latest scheme, Teenage Mutant Ninja Turtles: Shredder’s Revenge finds the turtles battling through a breathless tour of iconic TMNT locations to thwart their nemeses’ most diabolical plan yet. Armed with shell-shocking new abilities built on a foundation of classic brawling mechanics, the gang are in for an exhilarating, Foot Clan-stomping romp leading them through the sewers and bustling boroughs of New York City all the way to Dimension X.",
            24.99,
            "Action, Adventure, Arcade, Casual, Fighting, Indie",
            86.0);
            vgRepository.save(game23);

        VideoGamesModel game24 = new VideoGamesModel(
            "It Takes Two",
            "https://info.audiokinetic.com/hubfs/Blog_Images/Behind%20the%20Sound%20of%20It%20Takes%20Two%20A%20QA%20with%20the%20Hazelight%20Audio%20Team/It_Takes_Two.jpg",
            "Bring your favorite co-op partner and together step into the shoes of May and Cody. As the couple is going through a divorce, through unknown means their minds are transported into two dolls which their daughter, Rose, made to represent them. Now they must reluctantly find a way to get back into their bodies, a quest which takes them through the most wild, unexpected and fantastical journey imaginable.",
            39.99,
            "Action, Adventure, Platformer",
            88.0);
            vgRepository.save(game24);

        VideoGamesModel game25 = new VideoGamesModel(
            "The Legend of Zelda: Breath of the Wild",
            "https://automationpanda.files.wordpress.com/2018/06/botw-share_icon.jpg",
            "The Legend of Zelda: Breath of the Wild is an adventure game developed by Nintendo. It is the nineteenth installment in the series. After awakening from a hundred year sleep, memoryless Link hears a mysterious female voice that guides him to a destroyed kingdom of Hyrule. He finds a Wiseman who says that a ruthless creature, Calamity Ganon, was imprisoned for 100 years. Even though the creature is trapped, it is still gaining power. Link sets out to kill Ganon before he frees himself and destroys the world.",
            59.99,
            "Action, Adventure, RPG",
            97.0);
            vgRepository.save(game25);

        VideoGamesModel game26 = new VideoGamesModel(
            "Marvel's Spider-Man",
            "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/QeJWAaLcYNOpCv7yCVZZEOY5.jpg",
            "Marvel's Spider-Man offers the player to take on the role of the most famous Marvel superhero. The game introduces Spider-Man as an already experienced superhero. By the time the game begins, Peter has captured the infamous Kingpin as well as several other supervillains. Now, a gang that goes by the name of Demons poses a new danger to New York. Throughout the game, Spidey has to deal with multiple enemies, such as Norman Osbourne, Electro, Vulture, Rhino and Kingpin, among others. The player can travel the city using web slings, running, jumping, and crawling the walls. The setting includes numerous high-rise buildings designed specifically for Spider-Man's movements.",
            59.99,
            "Action, Adventure",
            87.0);
            vgRepository.save(game26);

        VideoGamesModel game27 = new VideoGamesModel(
            "Fallout: New Vegas",
            "https://miro.medium.com/v2/resize:fit:1400/1*y9kV69gBfzt_z_SRuANoHA.jpeg",
            "Fallout: New Vegas is the second instalment after the reboot of the Fallout series and a fourth instalment in the franchise itself. Being a spin-off and developed by a different studio, Obsidian Entertainment, Fallout: New Vegas follows the Courier as he's ambushed by a gang lead by Benny, stealing a Platinum Chip and heavily wounded, practically left for dead. As he wakes up, he minds himself in the company of Doc Mitchell who saved our protagonist and patches him up. New Vegas has similar gameplay to Fallout 3 with a few improvements, such as iron sights for most of the guns, new animations for VATS kills, an expanded crafting system and weapon modification system which forces players to scavenge for resources. Reputation system was reintroduced in New Vegas, with Karma making a serious impact on the game.",
            9.99,
            "Action, Shooter, Adventure, RPG",
            84.0);
            vgRepository.save(game27);

        VideoGamesModel game28 = new VideoGamesModel(
            "Red Dead Redemption",
            "https://i.ytimg.com/vi/eKo3F0oU2LA/maxresdefault.jpg",
            "Red Dead Redemption is a third-person open-world adventure game which implements the Wild West at its best: it is very much GTA-clone but in bizarre stylistics and the very beginning of the twentieth century. This is the second title of a franchise, being preceded by Red Dead Revolver and followed by Red Dead Redemption 2 coming out in late 2018. We play as John Marston who gradually takes down and take out criminals and those, who crosses his path. Among the combat mechanics, the most interesting one is \"Dead Eye\" — it allows one to point multiple targets out in slow motion and then shoot them simultaneously.",
            49.99,
            "Action, Shooter",
            95.0);
            vgRepository.save(game28);

        VideoGamesModel game29 = new VideoGamesModel(
            "Red Dead Redemption 2",
            "https://i.ytimg.com/vi/eaW0tYpxyp0/maxresdefault.jpg",
            "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
            59.99,
            "Action, Adventure",
            96.0);
            vgRepository.save(game29);

        VideoGamesModel game30 = new VideoGamesModel(
            "Star Wars: Knights of the Old Republic",
            "https://primagames.com/wp-content/uploads/2023/05/Knights-of-the-Old-Republic-1.jpg",
            "In the world of \"Star Wars,\" there is a Force that can be vested both by the Jedi and by their enemies. There are Force Powers of three types: light, dark and neutral. They should be studied, this raises the level of skill. The player can alternately lean toward both the Light and the Dark Side of the Force - this will affect the ending of the game and the use of Force Powers. For example, if the character belongs to the Light Side, then the use of the Dark Force will require more of this Force from him than using the Light. The hero will visit the underground metropolis, the desert planet, the planet-forest and the planet-ocean, caves with crystals for light swords, sand Tatooine, the planet-cemetery, space ships and stations. The hero will interact with sentient beings, droids of different classes and exotic animals.",
            9.99,
            "Action, RPG",
            88.0);
            vgRepository.save(game30);
    }
}

