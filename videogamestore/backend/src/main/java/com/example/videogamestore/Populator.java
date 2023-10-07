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

        // VideoGamesModel game11 = new VideoGamesModel(
        //     "Assassin's Creed Mirage",
        //     "https://www.dsogaming.com/wp-content/uploads/2022/09/Assassins-Creed-Mirage-new-artwork-2-672x330.jpg",
        //     "In Assassin's Creed Mirage, you are Basim, a cunning street thief with nightmarish visions seeking answers and justice. Join an ancient organization and come to understand a new creed – one that will change Basim’s fate in ways he never could have imagined. Journey to Alamut, the legendary home of the Assassins who laid the foundations of the Creed in this heartfelt homage to the game that started it all.",
        //     49.99,
        //     "Action",
        //     null);
        //     vgRepository.save(game11);
    }
}

