const Games = require("../models/Games");
const Favourites = require("../models/Favourites");

const seedGames = async (req, res) => {
  try {
    await Games.deleteMany({});

    await Games.create([
      {
        id: 3498,
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        released: "2013-09-17",
        tba: false,
        background_image:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        rating: 4.47,
        rating_top: 5,
        ratings: [
          {
            id: 5,
            title: "exceptional",
            count: 4057,
            percent: 58.99,
          },
          {
            id: 4,
            title: "recommended",
            count: 2258,
            percent: 32.83,
          },
          {
            id: 3,
            title: "meh",
            count: 436,
            percent: 6.34,
          },
          {
            id: 1,
            title: "skip",
            count: 126,
            percent: 1.83,
          },
        ],
        ratings_count: 6776,
        reviews_text_count: 59,
        added: 20642,
        added_by_status: {
          yet: 525,
          owned: 11796,
          beaten: 5888,
          toplay: 609,
          dropped: 1099,
          playing: 725,
        },
        metacritic: 92,
        playtime: 74,
        suggestions_count: 431,
        updated: "2024-04-03T14:53:47",
        user_game: null,
        reviews_count: 6877,
        saturated_color: "0f0f0f",
        dominant_color: "0f0f0f",
        platforms: [
          {
            platform: {
              id: 4,
              name: "PC",
              slug: "pc",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 527451,
              image_background:
                "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: {
              minimum:
                "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
              recommended:
                "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:",
            },
            requirements_ru: null,
          },
          {
            platform: {
              id: 187,
              name: "PlayStation 5",
              slug: "playstation5",
              image: null,
              year_end: null,
              year_start: 2020,
              games_count: 1053,
              image_background:
                "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 186,
              name: "Xbox Series S/X",
              slug: "xbox-series-x",
              image: null,
              year_end: null,
              year_start: 2020,
              games_count: 904,
              image_background:
                "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 18,
              name: "PlayStation 4",
              slug: "playstation4",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 6794,
              image_background:
                "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 16,
              name: "PlayStation 3",
              slug: "playstation3",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 3167,
              image_background:
                "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 14,
              name: "Xbox 360",
              slug: "xbox360",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 2799,
              image_background:
                "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 1,
              name: "Xbox One",
              slug: "xbox-one",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 5606,
              image_background:
                "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: null,
            requirements_ru: null,
          },
        ],
        parent_platforms: [
          {
            platform: {
              id: 1,
              name: "PC",
              slug: "pc",
            },
          },
          {
            platform: {
              id: 2,
              name: "PlayStation",
              slug: "playstation",
            },
          },
          {
            platform: {
              id: 3,
              name: "Xbox",
              slug: "xbox",
            },
          },
        ],
        genres: [
          {
            id: 4,
            name: "Action",
            slug: "action",
            games_count: 178957,
            image_background:
              "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
          },
        ],
        stores: [
          {
            id: 290375,
            store: {
              id: 3,
              name: "PlayStation Store",
              slug: "playstation-store",
              domain: "store.playstation.com",
              games_count: 7920,
              image_background:
                "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
            },
          },
          {
            id: 438095,
            store: {
              id: 11,
              name: "Epic Games",
              slug: "epic-games",
              domain: "epicgames.com",
              games_count: 1325,
              image_background:
                "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
            },
          },
          {
            id: 290376,
            store: {
              id: 1,
              name: "Steam",
              slug: "steam",
              domain: "store.steampowered.com",
              games_count: 90621,
              image_background:
                "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
            },
          },
          {
            id: 290377,
            store: {
              id: 7,
              name: "Xbox 360 Store",
              slug: "xbox360",
              domain: "marketplace.xbox.com",
              games_count: 1912,
              image_background:
                "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
            },
          },
          {
            id: 290378,
            store: {
              id: 2,
              name: "Xbox Store",
              slug: "xbox-store",
              domain: "microsoft.com",
              games_count: 4831,
              image_background:
                "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
            },
          },
        ],
        clip: null,
        tags: [
          {
            id: 31,
            name: "Singleplayer",
            slug: "singleplayer",
            language: "eng",
            games_count: 219672,
            image_background:
              "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
          },
          {
            id: 40847,
            name: "Steam Achievements",
            slug: "steam-achievements",
            language: "eng",
            games_count: 36304,
            image_background:
              "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
          },
          {
            id: 7,
            name: "Multiplayer",
            slug: "multiplayer",
            language: "eng",
            games_count: 37382,
            image_background:
              "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
          },
          {
            id: 40836,
            name: "Full controller support",
            slug: "full-controller-support",
            language: "eng",
            games_count: 17080,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          {
            id: 13,
            name: "Atmospheric",
            slug: "atmospheric",
            language: "eng",
            games_count: 32370,
            image_background:
              "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
          },
          {
            id: 42,
            name: "Great Soundtrack",
            slug: "great-soundtrack",
            language: "eng",
            games_count: 3390,
            image_background:
              "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
          },
          {
            id: 24,
            name: "RPG",
            slug: "rpg",
            language: "eng",
            games_count: 20161,
            image_background:
              "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
          },
          {
            id: 18,
            name: "Co-op",
            slug: "co-op",
            language: "eng",
            games_count: 11219,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
          {
            id: 36,
            name: "Open World",
            slug: "open-world",
            language: "eng",
            games_count: 7203,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          {
            id: 411,
            name: "cooperative",
            slug: "cooperative",
            language: "eng",
            games_count: 4778,
            image_background:
              "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
          },
          {
            id: 8,
            name: "First-Person",
            slug: "first-person",
            language: "eng",
            games_count: 30891,
            image_background:
              "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
          },
          {
            id: 149,
            name: "Third Person",
            slug: "third-person",
            language: "eng",
            games_count: 11021,
            image_background:
              "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
          },
          {
            id: 4,
            name: "Funny",
            slug: "funny",
            language: "eng",
            games_count: 24337,
            image_background:
              "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
          },
          {
            id: 37,
            name: "Sandbox",
            slug: "sandbox",
            language: "eng",
            games_count: 6684,
            image_background:
              "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg",
          },
          {
            id: 123,
            name: "Comedy",
            slug: "comedy",
            language: "eng",
            games_count: 12068,
            image_background:
              "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg",
          },
          {
            id: 150,
            name: "Third-Person Shooter",
            slug: "third-person-shooter",
            language: "eng",
            games_count: 3308,
            image_background:
              "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
          },
          {
            id: 62,
            name: "Moddable",
            slug: "moddable",
            language: "eng",
            games_count: 891,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
          {
            id: 144,
            name: "Crime",
            slug: "crime",
            language: "eng",
            games_count: 2750,
            image_background:
              "https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg",
          },
          {
            id: 62349,
            name: "vr mod",
            slug: "vr-mod",
            language: "eng",
            games_count: 17,
            image_background:
              "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg",
          },
        ],
        esrb_rating: {
          id: 4,
          name: "Mature",
          slug: "mature",
        },
        short_screenshots: [
          {
            id: -1,
            image:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
          {
            id: 1827221,
            image:
              "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
          },
          {
            id: 1827222,
            image:
              "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",
          },
          {
            id: 1827223,
            image:
              "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",
          },
          {
            id: 1827225,
            image:
              "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg",
          },
          {
            id: 1827226,
            image:
              "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg",
          },
          {
            id: 1827227,
            image:
              "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg",
          },
        ],
      },
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        released: "2015-05-18",
        tba: false,
        background_image:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        rating: 4.65,
        rating_top: 5,
        ratings: [
          {
            id: 5,
            title: "exceptional",
            count: 5085,
            percent: 77.14,
          },
          {
            id: 4,
            title: "recommended",
            count: 1062,
            percent: 16.11,
          },
          {
            id: 3,
            title: "meh",
            count: 278,
            percent: 4.22,
          },
          {
            id: 1,
            title: "skip",
            count: 167,
            percent: 2.53,
          },
        ],
        ratings_count: 6486,
        reviews_text_count: 73,
        added: 19909,
        added_by_status: {
          yet: 1115,
          owned: 11431,
          beaten: 4786,
          toplay: 780,
          dropped: 935,
          playing: 862,
        },
        metacritic: 92,
        playtime: 46,
        suggestions_count: 675,
        updated: "2024-04-03T10:27:56",
        user_game: null,
        reviews_count: 6592,
        saturated_color: "0f0f0f",
        dominant_color: "0f0f0f",
        platforms: [
          {
            platform: {
              id: 186,
              name: "Xbox Series S/X",
              slug: "xbox-series-x",
              image: null,
              year_end: null,
              year_start: 2020,
              games_count: 904,
              image_background:
                "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            },
            released_at: "2015-05-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 187,
              name: "PlayStation 5",
              slug: "playstation5",
              image: null,
              year_end: null,
              year_start: 2020,
              games_count: 1053,
              image_background:
                "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
            },
            released_at: "2015-05-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 5,
              name: "macOS",
              slug: "macos",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 103627,
              image_background:
                "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
            },
            released_at: "2015-05-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 18,
              name: "PlayStation 4",
              slug: "playstation4",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 6794,
              image_background:
                "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            },
            released_at: "2015-05-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 7,
              name: "Nintendo Switch",
              slug: "nintendo-switch",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 5433,
              image_background:
                "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg",
            },
            released_at: "2015-05-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 4,
              name: "PC",
              slug: "pc",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 527451,
              image_background:
                "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
            },
            released_at: "2015-05-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 1,
              name: "Xbox One",
              slug: "xbox-one",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 5606,
              image_background:
                "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
            },
            released_at: "2015-05-18",
            requirements_en: null,
            requirements_ru: null,
          },
        ],
        parent_platforms: [
          {
            platform: {
              id: 1,
              name: "PC",
              slug: "pc",
            },
          },
          {
            platform: {
              id: 2,
              name: "PlayStation",
              slug: "playstation",
            },
          },
          {
            platform: {
              id: 3,
              name: "Xbox",
              slug: "xbox",
            },
          },
          {
            platform: {
              id: 5,
              name: "Apple Macintosh",
              slug: "mac",
            },
          },
          {
            platform: {
              id: 7,
              name: "Nintendo",
              slug: "nintendo",
            },
          },
        ],
        genres: [
          {
            id: 4,
            name: "Action",
            slug: "action",
            games_count: 178957,
            image_background:
              "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
          },
          {
            id: 5,
            name: "RPG",
            slug: "role-playing-games-rpg",
            games_count: 55388,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
        ],
        stores: [
          {
            id: 354780,
            store: {
              id: 5,
              name: "GOG",
              slug: "gog",
              domain: "gog.com",
              games_count: 5907,
              image_background:
                "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
            },
          },
          {
            id: 3565,
            store: {
              id: 3,
              name: "PlayStation Store",
              slug: "playstation-store",
              domain: "store.playstation.com",
              games_count: 7920,
              image_background:
                "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
            },
          },
          {
            id: 305376,
            store: {
              id: 1,
              name: "Steam",
              slug: "steam",
              domain: "store.steampowered.com",
              games_count: 90621,
              image_background:
                "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
            },
          },
          {
            id: 312313,
            store: {
              id: 2,
              name: "Xbox Store",
              slug: "xbox-store",
              domain: "microsoft.com",
              games_count: 4831,
              image_background:
                "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
            },
          },
          {
            id: 676022,
            store: {
              id: 6,
              name: "Nintendo Store",
              slug: "nintendo",
              domain: "nintendo.com",
              games_count: 8993,
              image_background:
                "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
            },
          },
        ],
        clip: null,
        tags: [
          {
            id: 31,
            name: "Singleplayer",
            slug: "singleplayer",
            language: "eng",
            games_count: 219672,
            image_background:
              "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
          },
          {
            id: 40836,
            name: "Full controller support",
            slug: "full-controller-support",
            language: "eng",
            games_count: 17080,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          {
            id: 13,
            name: "Atmospheric",
            slug: "atmospheric",
            language: "eng",
            games_count: 32370,
            image_background:
              "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
          },
          {
            id: 42,
            name: "Great Soundtrack",
            slug: "great-soundtrack",
            language: "eng",
            games_count: 3390,
            image_background:
              "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
          },
          {
            id: 24,
            name: "RPG",
            slug: "rpg",
            language: "eng",
            games_count: 20161,
            image_background:
              "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
          },
          {
            id: 118,
            name: "Story Rich",
            slug: "story-rich",
            language: "eng",
            games_count: 20836,
            image_background:
              "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
          },
          {
            id: 36,
            name: "Open World",
            slug: "open-world",
            language: "eng",
            games_count: 7203,
            image_background:
              "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
          },
          {
            id: 149,
            name: "Third Person",
            slug: "third-person",
            language: "eng",
            games_count: 11021,
            image_background:
              "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
          },
          {
            id: 64,
            name: "Fantasy",
            slug: "fantasy",
            language: "eng",
            games_count: 27046,
            image_background:
              "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
          },
          {
            id: 37,
            name: "Sandbox",
            slug: "sandbox",
            language: "eng",
            games_count: 6684,
            image_background:
              "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg",
          },
          {
            id: 97,
            name: "Action RPG",
            slug: "action-rpg",
            language: "eng",
            games_count: 6592,
            image_background:
              "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
          },
          {
            id: 41,
            name: "Dark",
            slug: "dark",
            language: "eng",
            games_count: 15329,
            image_background:
              "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg",
          },
          {
            id: 44,
            name: "Nudity",
            slug: "nudity",
            language: "eng",
            games_count: 6195,
            image_background:
              "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg",
          },
          {
            id: 336,
            name: "controller support",
            slug: "controller-support",
            language: "eng",
            games_count: 293,
            image_background:
              "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
          },
          {
            id: 145,
            name: "Choices Matter",
            slug: "choices-matter",
            language: "eng",
            games_count: 4969,
            image_background:
              "https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg",
          },
          {
            id: 192,
            name: "Mature",
            slug: "mature",
            language: "eng",
            games_count: 2956,
            image_background:
              "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
          },
          {
            id: 40,
            name: "Dark Fantasy",
            slug: "dark-fantasy",
            language: "eng",
            games_count: 3960,
            image_background:
              "https://media.rawg.io/media/games/b01/b01aa6b2d6d4f683203e9471a8b8d5b5.jpg",
          },
          {
            id: 66,
            name: "Medieval",
            slug: "medieval",
            language: "eng",
            games_count: 6179,
            image_background:
              "https://media.rawg.io/media/games/511/5116b4524cea34c6b3f12e0ca027d850.jpg",
          },
          {
            id: 82,
            name: "Magic",
            slug: "magic",
            language: "eng",
            games_count: 9144,
            image_background:
              "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
          },
          {
            id: 218,
            name: "Multiple Endings",
            slug: "multiple-endings",
            language: "eng",
            games_count: 8340,
            image_background:
              "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
          },
        ],
        esrb_rating: {
          id: 4,
          name: "Mature",
          slug: "mature",
        },
        short_screenshots: [
          {
            id: -1,
            image:
              "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
          },
          {
            id: 30336,
            image:
              "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",
          },
          {
            id: 30337,
            image:
              "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",
          },
          {
            id: 30338,
            image:
              "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",
          },
          {
            id: 30339,
            image:
              "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg",
          },
          {
            id: 30340,
            image:
              "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg",
          },
          {
            id: 30342,
            image:
              "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg",
          },
        ],
      },
      {
        id: 4200,
        slug: "portal-2",
        name: "Portal 2",
        released: "2011-04-18",
        tba: false,
        background_image:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        rating: 4.61,
        rating_top: 5,
        ratings: [
          {
            id: 5,
            title: "exceptional",
            count: 3975,
            percent: 70.14,
          },
          {
            id: 4,
            title: "recommended",
            count: 1414,
            percent: 24.95,
          },
          {
            id: 3,
            title: "meh",
            count: 153,
            percent: 2.7,
          },
          {
            id: 1,
            title: "skip",
            count: 125,
            percent: 2.21,
          },
        ],
        ratings_count: 5614,
        reviews_text_count: 35,
        added: 18787,
        added_by_status: {
          yet: 614,
          owned: 11586,
          beaten: 5475,
          toplay: 377,
          dropped: 585,
          playing: 150,
        },
        metacritic: 95,
        playtime: 11,
        suggestions_count: 550,
        updated: "2024-04-03T14:12:46",
        user_game: null,
        reviews_count: 5667,
        saturated_color: "0f0f0f",
        dominant_color: "0f0f0f",
        platforms: [
          {
            platform: {
              id: 16,
              name: "PlayStation 3",
              slug: "playstation3",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 3167,
              image_background:
                "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
            },
            released_at: "2011-04-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 4,
              name: "PC",
              slug: "pc",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 527451,
              image_background:
                "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
            },
            released_at: "2011-04-18",
            requirements_en: null,
            requirements_ru: {
              minimum:
                "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
              recommended:
                "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение",
            },
          },
          {
            platform: {
              id: 14,
              name: "Xbox 360",
              slug: "xbox360",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 2799,
              image_background:
                "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
            },
            released_at: "2011-04-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 6,
              name: "Linux",
              slug: "linux",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 76642,
              image_background:
                "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
            },
            released_at: "2011-04-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 5,
              name: "macOS",
              slug: "macos",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 103627,
              image_background:
                "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
            },
            released_at: "2011-04-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 1,
              name: "Xbox One",
              slug: "xbox-one",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 5606,
              image_background:
                "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
            },
            released_at: "2011-04-18",
            requirements_en: null,
            requirements_ru: null,
          },
        ],
        parent_platforms: [
          {
            platform: {
              id: 1,
              name: "PC",
              slug: "pc",
            },
          },
          {
            platform: {
              id: 2,
              name: "PlayStation",
              slug: "playstation",
            },
          },
          {
            platform: {
              id: 3,
              name: "Xbox",
              slug: "xbox",
            },
          },
          {
            platform: {
              id: 5,
              name: "Apple Macintosh",
              slug: "mac",
            },
          },
          {
            platform: {
              id: 6,
              name: "Linux",
              slug: "linux",
            },
          },
        ],
        genres: [
          {
            id: 2,
            name: "Shooter",
            slug: "shooter",
            games_count: 59469,
            image_background:
              "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
          },
          {
            id: 7,
            name: "Puzzle",
            slug: "puzzle",
            games_count: 97264,
            image_background:
              "https://media.rawg.io/media/games/cfe/cfe114c081281960bd79ace5209c0a4a.jpg",
          },
        ],
        stores: [
          {
            id: 465889,
            store: {
              id: 2,
              name: "Xbox Store",
              slug: "xbox-store",
              domain: "microsoft.com",
              games_count: 4831,
              image_background:
                "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
            },
          },
          {
            id: 13134,
            store: {
              id: 1,
              name: "Steam",
              slug: "steam",
              domain: "store.steampowered.com",
              games_count: 90621,
              image_background:
                "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
            },
          },
          {
            id: 4526,
            store: {
              id: 3,
              name: "PlayStation Store",
              slug: "playstation-store",
              domain: "store.playstation.com",
              games_count: 7920,
              image_background:
                "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
            },
          },
          {
            id: 33916,
            store: {
              id: 7,
              name: "Xbox 360 Store",
              slug: "xbox360",
              domain: "marketplace.xbox.com",
              games_count: 1912,
              image_background:
                "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
            },
          },
        ],
        clip: null,
        tags: [
          {
            id: 31,
            name: "Singleplayer",
            slug: "singleplayer",
            language: "eng",
            games_count: 219672,
            image_background:
              "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
          },
          {
            id: 40847,
            name: "Steam Achievements",
            slug: "steam-achievements",
            language: "eng",
            games_count: 36304,
            image_background:
              "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
          },
          {
            id: 7,
            name: "Multiplayer",
            slug: "multiplayer",
            language: "eng",
            games_count: 37382,
            image_background:
              "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
          },
          {
            id: 40836,
            name: "Full controller support",
            slug: "full-controller-support",
            language: "eng",
            games_count: 17080,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          {
            id: 40849,
            name: "Steam Cloud",
            slug: "steam-cloud",
            language: "eng",
            games_count: 17110,
            image_background:
              "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
          },
          {
            id: 13,
            name: "Atmospheric",
            slug: "atmospheric",
            language: "eng",
            games_count: 32370,
            image_background:
              "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
          },
          {
            id: 7808,
            name: "steam-trading-cards",
            slug: "steam-trading-cards",
            language: "eng",
            games_count: 7569,
            image_background:
              "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
          },
          {
            id: 18,
            name: "Co-op",
            slug: "co-op",
            language: "eng",
            games_count: 11219,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
          {
            id: 118,
            name: "Story Rich",
            slug: "story-rich",
            language: "eng",
            games_count: 20836,
            image_background:
              "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
          },
          {
            id: 411,
            name: "cooperative",
            slug: "cooperative",
            language: "eng",
            games_count: 4778,
            image_background:
              "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
          },
          {
            id: 8,
            name: "First-Person",
            slug: "first-person",
            language: "eng",
            games_count: 30891,
            image_background:
              "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
          },
          {
            id: 32,
            name: "Sci-fi",
            slug: "sci-fi",
            language: "eng",
            games_count: 18698,
            image_background:
              "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
          },
          {
            id: 30,
            name: "FPS",
            slug: "fps",
            language: "eng",
            games_count: 12983,
            image_background:
              "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
          },
          {
            id: 9,
            name: "Online Co-Op",
            slug: "online-co-op",
            language: "eng",
            games_count: 5305,
            image_background:
              "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
          },
          {
            id: 4,
            name: "Funny",
            slug: "funny",
            language: "eng",
            games_count: 24337,
            image_background:
              "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
          },
          {
            id: 189,
            name: "Female Protagonist",
            slug: "female-protagonist",
            language: "eng",
            games_count: 12006,
            image_background:
              "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
          },
          {
            id: 123,
            name: "Comedy",
            slug: "comedy",
            language: "eng",
            games_count: 12068,
            image_background:
              "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg",
          },
          {
            id: 75,
            name: "Local Co-Op",
            slug: "local-co-op",
            language: "eng",
            games_count: 5332,
            image_background:
              "https://media.rawg.io/media/games/f6f/f6f39c5b56413f7f4513b25989a1b747.jpg",
          },
          {
            id: 11669,
            name: "stats",
            slug: "stats",
            language: "eng",
            games_count: 4856,
            image_background:
              "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
          },
          {
            id: 40852,
            name: "Steam Workshop",
            slug: "steam-workshop",
            language: "eng",
            games_count: 1458,
            image_background:
              "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg",
          },
          {
            id: 25,
            name: "Space",
            slug: "space",
            language: "eng",
            games_count: 42587,
            image_background:
              "https://media.rawg.io/media/games/5f4/5f4780690dbf04900cbac5f05b9305f3.jpg",
          },
          {
            id: 40838,
            name: "Includes level editor",
            slug: "includes-level-editor",
            language: "eng",
            games_count: 1830,
            image_background:
              "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg",
          },
          {
            id: 40833,
            name: "Captions available",
            slug: "captions-available",
            language: "eng",
            games_count: 1318,
            image_background:
              "https://media.rawg.io/media/games/c2e/c2eb6021a2596644b437e943612af25c.jpg",
          },
          {
            id: 40834,
            name: "Commentary available",
            slug: "commentary-available",
            language: "eng",
            games_count: 268,
            image_background:
              "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
          },
          {
            id: 87,
            name: "Science",
            slug: "science",
            language: "eng",
            games_count: 1683,
            image_background:
              "https://media.rawg.io/media/screenshots/e25/e25a1506d7d628e607dde00df0c69db5.jpg",
          },
        ],
        esrb_rating: {
          id: 2,
          name: "Everyone 10+",
          slug: "everyone-10-plus",
        },
        short_screenshots: [
          {
            id: -1,
            image:
              "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
          },
          {
            id: 99018,
            image:
              "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg",
          },
          {
            id: 99019,
            image:
              "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg",
          },
          {
            id: 99020,
            image:
              "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg",
          },
          {
            id: 99021,
            image:
              "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg",
          },
          {
            id: 99022,
            image:
              "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg",
          },
          {
            id: 99023,
            image:
              "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg",
          },
        ],
      },
      {
        id: 4291,
        slug: "counter-strike-global-offensive",
        name: "Counter-Strike: Global Offensive",
        released: "2012-08-21",
        tba: false,
        background_image:
          "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        rating: 3.57,
        rating_top: 4,
        ratings: [
          {
            id: 4,
            title: "recommended",
            count: 1628,
            percent: 46.82,
          },
          {
            id: 3,
            title: "meh",
            count: 901,
            percent: 25.91,
          },
          {
            id: 5,
            title: "exceptional",
            count: 560,
            percent: 16.11,
          },
          {
            id: 1,
            title: "skip",
            count: 388,
            percent: 11.16,
          },
        ],
        ratings_count: 3442,
        reviews_text_count: 26,
        added: 16344,
        added_by_status: {
          yet: 262,
          owned: 12357,
          beaten: 1025,
          toplay: 78,
          dropped: 1997,
          playing: 625,
        },
        metacritic: 81,
        playtime: 65,
        suggestions_count: 587,
        updated: "2024-03-31T06:40:54",
        user_game: null,
        reviews_count: 3477,
        saturated_color: "0f0f0f",
        dominant_color: "0f0f0f",
        platforms: [
          {
            platform: {
              id: 4,
              name: "PC",
              slug: "pc",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 527451,
              image_background:
                "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
            },
            released_at: "2012-08-21",
            requirements_en: {
              minimum:
                '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
            },
            requirements_ru: {
              minimum:
                "Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение",
              recommended:
                "Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение",
            },
          },
          {
            platform: {
              id: 6,
              name: "Linux",
              slug: "linux",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 76642,
              image_background:
                "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
            },
            released_at: "2012-08-21",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 14,
              name: "Xbox 360",
              slug: "xbox360",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 2799,
              image_background:
                "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
            },
            released_at: "2012-08-21",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 16,
              name: "PlayStation 3",
              slug: "playstation3",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 3167,
              image_background:
                "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
            },
            released_at: "2012-08-21",
            requirements_en: null,
            requirements_ru: null,
          },
        ],
        parent_platforms: [
          {
            platform: {
              id: 1,
              name: "PC",
              slug: "pc",
            },
          },
          {
            platform: {
              id: 2,
              name: "PlayStation",
              slug: "playstation",
            },
          },
          {
            platform: {
              id: 3,
              name: "Xbox",
              slug: "xbox",
            },
          },
          {
            platform: {
              id: 6,
              name: "Linux",
              slug: "linux",
            },
          },
        ],
        genres: [
          {
            id: 2,
            name: "Shooter",
            slug: "shooter",
            games_count: 59469,
            image_background:
              "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
          },
        ],
        stores: [
          {
            id: 4619,
            store: {
              id: 3,
              name: "PlayStation Store",
              slug: "playstation-store",
              domain: "store.playstation.com",
              games_count: 7920,
              image_background:
                "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
            },
          },
          {
            id: 11489,
            store: {
              id: 1,
              name: "Steam",
              slug: "steam",
              domain: "store.steampowered.com",
              games_count: 90621,
              image_background:
                "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
            },
          },
          {
            id: 49169,
            store: {
              id: 7,
              name: "Xbox 360 Store",
              slug: "xbox360",
              domain: "marketplace.xbox.com",
              games_count: 1912,
              image_background:
                "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
            },
          },
        ],
        clip: null,
        tags: [
          {
            id: 40847,
            name: "Steam Achievements",
            slug: "steam-achievements",
            language: "eng",
            games_count: 36304,
            image_background:
              "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
          },
          {
            id: 7,
            name: "Multiplayer",
            slug: "multiplayer",
            language: "eng",
            games_count: 37382,
            image_background:
              "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
          },
          {
            id: 40836,
            name: "Full controller support",
            slug: "full-controller-support",
            language: "eng",
            games_count: 17080,
            image_background:
              "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          },
          {
            id: 7808,
            name: "steam-trading-cards",
            slug: "steam-trading-cards",
            language: "eng",
            games_count: 7569,
            image_background:
              "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
          },
          {
            id: 18,
            name: "Co-op",
            slug: "co-op",
            language: "eng",
            games_count: 11219,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
          {
            id: 411,
            name: "cooperative",
            slug: "cooperative",
            language: "eng",
            games_count: 4778,
            image_background:
              "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
          },
          {
            id: 8,
            name: "First-Person",
            slug: "first-person",
            language: "eng",
            games_count: 30891,
            image_background:
              "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
          },
          {
            id: 30,
            name: "FPS",
            slug: "fps",
            language: "eng",
            games_count: 12983,
            image_background:
              "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
          },
          {
            id: 9,
            name: "Online Co-Op",
            slug: "online-co-op",
            language: "eng",
            games_count: 5305,
            image_background:
              "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
          },
          {
            id: 80,
            name: "Tactical",
            slug: "tactical",
            language: "eng",
            games_count: 4882,
            image_background:
              "https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg",
          },
          {
            id: 11669,
            name: "stats",
            slug: "stats",
            language: "eng",
            games_count: 4856,
            image_background:
              "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
          },
          {
            id: 40852,
            name: "Steam Workshop",
            slug: "steam-workshop",
            language: "eng",
            games_count: 1458,
            image_background:
              "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg",
          },
          {
            id: 157,
            name: "PvP",
            slug: "pvp",
            language: "eng",
            games_count: 8858,
            image_background:
              "https://media.rawg.io/media/games/ac7/ac7b8327343da12c971cfc418f390a11.jpg",
          },
          {
            id: 62,
            name: "Moddable",
            slug: "moddable",
            language: "eng",
            games_count: 891,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
          {
            id: 70,
            name: "War",
            slug: "war",
            language: "eng",
            games_count: 9165,
            image_background:
              "https://media.rawg.io/media/games/736/736c0eaec96d848d7824b33298a182f2.jpg",
          },
          {
            id: 40837,
            name: "In-App Purchases",
            slug: "in-app-purchases",
            language: "eng",
            games_count: 2486,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg",
          },
          {
            id: 77,
            name: "Realistic",
            slug: "realistic",
            language: "eng",
            games_count: 5329,
            image_background:
              "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg",
          },
          {
            id: 11,
            name: "Team-Based",
            slug: "team-based",
            language: "eng",
            games_count: 1523,
            image_background:
              "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg",
          },
          {
            id: 131,
            name: "Fast-Paced",
            slug: "fast-paced",
            language: "eng",
            games_count: 10486,
            image_background:
              "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
          },
          {
            id: 40856,
            name: "Valve Anti-Cheat enabled",
            slug: "valve-anti-cheat-enabled",
            language: "eng",
            games_count: 105,
            image_background:
              "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
          },
          {
            id: 81,
            name: "Military",
            slug: "military",
            language: "eng",
            games_count: 1766,
            image_background:
              "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
          },
          {
            id: 170,
            name: "Competitive",
            slug: "competitive",
            language: "eng",
            games_count: 1121,
            image_background:
              "https://media.rawg.io/media/games/9e5/9e52a797f049e701d4eee84774a99007.jpg",
          },
          {
            id: 73,
            name: "e-sports",
            slug: "e-sports",
            language: "eng",
            games_count: 80,
            image_background:
              "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg",
          },
          {
            id: 245,
            name: "Trading",
            slug: "trading",
            language: "eng",
            games_count: 1084,
            image_background:
              "https://media.rawg.io/media/screenshots/da8/da840a45bceef305e577525e31c2a6c4_uIQGg3p.jpg",
          },
        ],
        esrb_rating: {
          id: 4,
          name: "Mature",
          slug: "mature",
        },
        short_screenshots: [
          {
            id: -1,
            image:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
          {
            id: 81644,
            image:
              "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg",
          },
          {
            id: 81645,
            image:
              "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg",
          },
          {
            id: 81646,
            image:
              "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg",
          },
          {
            id: 81647,
            image:
              "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg",
          },
          {
            id: 81648,
            image:
              "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg",
          },
          {
            id: 81649,
            image:
              "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg",
          },
        ],
      },
    ]);

    res.json({ status: "ok", msg: "seeding successful" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding error" });
  }
};

const getAllGames = async (req, res) => {
  try {
    const allGames = await Games.find();
    res.json(allGames);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error getting all games" });
  }
};

const getGameById = async (req, res) => {
  try {
    const game = await Games.findById(req.body.id);
    res.json(game);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting game" });
  }
};

const addFavourites = async (req, res) => {
  try {
    const newGame = {
      id: req.body.id,
      slug: req.body.slug,
      name: req.body.name,
      released: req.body.released,
      tba: req.body.tba,
      background_image: req.body.background_image,
      rating: req.body.rating,
      rating_top: req.body.rating_top,
      ratings: req.body.ratings,
      ratings_count: req.body.ratings_count,
      reviews_text_count: req.body.reviews_text_count,
      added: req.body.added,
      added_by_status_yet: req.body.added_by_status_yet,
      added_by_status_owned: req.body.added_by_status_owned,
      added_by_status_beaten: req.body.added_by_status_beaten,
      added_by_status_toplay: req.body.added_by_status_toplay,
      added_by_status_dropped: req.body.added_by_status_dropped,
      added_by_status_playing: req.body.added_by_status_playing,
      metacritic: req.body.metacritic,
      playtime: req.body.playtime,
      suggestions_count: req.body.suggestions_count,
      updated: req.body.update,
      reviews_count: req.body.reviews_count,
      saturated_color: req.body.saturated_color,
      dominant_color: req.body.dominant_color,
      platforms: req.body.platforms,
      parent_platforms: req.body.parent_platforms,
      genres: req.body.genres,
      stores: req.body.stores,
      tags: req.body.tags,
      esrb_rating_id: req.body.esrb_rating_id,
      esrb_rating_name: req.body.esrb_rating_name,
      esrb_rating_slug: req.body.esrb_rating_slug,
      short_screenshots: req.body.short_screenshots,
    };
    await Favourites.create(newGame);
    res.json({ status: "ok", msg: "game saved" });
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "game not saved" });
  }
};

const updateGame = async (req, res) => {
  try {
    const updateGame = {};
    if ("id" in req.body) updateGame.id = req.body.id;
    //subjected to frontend

    await Favourites.findByIdAndUpdate(req.params.id, updateGame);
    res.json({ status: "ok", msg: "game updated" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error updating game" });
  }
};

const removeGame = async (req, res) => {
  try {
    await Favourites.findByIdAndDelete(req.params.id);
    res.json({ status: "ok", msg: "game deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error deleting game" });
  }
};

module.exports = {
  seedGames,
  getAllGames,
  getGameById,
  addFavourites,
  updateGame,
  removeGame,
};
