-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2022 at 05:20 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gameshack_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL,
  `banner_title` varchar(120) NOT NULL,
  `image` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`banner_id`, `banner_title`, `image`) VALUES
(1, 'banner01', 'banner01.jpg'),
(2, 'banner02', 'banner02.png'),
(3, 'banner03', 'banner033.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `games_id` int(11) NOT NULL,
  `title` varchar(120) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `system_id` tinyint(4) NOT NULL,
  `publisher_id` tinyint(4) NOT NULL,
  `publish_year` smallint(4) NOT NULL,
  `genre` varchar(120) NOT NULL,
  `rating_id` tinyint(4) NOT NULL,
  `image` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`games_id`, `title`, `price`, `system_id`, `publisher_id`, `publish_year`, `genre`, `rating_id`, `image`, `description`) VALUES
(3, 'Pikmin', '79.99', 3, 1, 2001, 'Strategy', 3, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/pikmin.jpg', 'Captain Olimar is an intrepid space traveller from the planet Hocotate. In his ship the Dolphin Olimar retrieves precious items and materials for his homeworld. On one voyage, however, a meteor strikes his ship, forcing him into a crash landing on a mysterious world. Pieces of the Dolphin are scattered as it crashes, and though Olimar survives, the situation is grim. The batteries on his life-support system will die in thirty days, after which he&#39;ll be at the mercy of the planet&#39;s toxic oxygen atmosphere. But there may be hope: shortly after his arrival, Olimar discoveres strange creatures called Pikmin that obey his commands after he plucks them from the ground. With their help, Olimar works to collect the vital pieces of his ship so he can safely return home.'),
(5, 'Superman: Shadow of Apokolips', '24.35', 4, 3, 2002, 'Action', 3, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/superman_shadow_of_apokolips.jpg', 'Believing Intergang to be starting up again, Superman learns that beings causing chaos throughout Metropolis are in-fact a group of robots using Intergang&#39;s old methods. These &#34;Interbots&#34; have access to very high-grade weaponry, which is powerful enough to seriously injure or even kill the Man of Steel. These bots are being ordered by a leader that is later revealed to be Lex Luthor.\r\n\r\nFinding that the weapons come from Apokolips, Superman sets out to destroy the bots, and their weapons, having to fight a multitude of enemies that Luthor sends after him. Parasite and Metallo are both contracted to kill Superman to allow the bots free reign to obey Luthor&#39;s wishes.'),
(9, 'Animal Crossing: New Leaf', '48.99', 6, 1, 2012, 'Simulation', 3, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/animal_crossing_new_leaf.jpg', 'The player moves to town by train and is greeted by Rover, whose questions determine the player&#39;s appearance. When the first player arrives in town, they are greeted by Isabelle and three villagers, who believe them to be the new mayor of the town; all subsequent players are greeted as standard residents. Isabelle, the mayor&#39;s secretary, takes the player to town hall, where she gives the player a Town Pass Card and tells them to go to Tom Nook at Nook&#39;s Homes to buy a house. After the player chooses a location for their house, Isabelle tells the player they need to increase their approval rating as mayor, which is done by performing various tasks. When the player&#39;s approval rating reaches 100%, the ability to build public works projects and enact a ordinance is unlocked.'),
(10, 'Kingdom Hearts', '22.50', 4, 1, 2002, 'Role-Playing', 3, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/kingdom-hearts-1.jpg', 'Kingdom Hearts begins with Sora&#39;s Dive to the Heart, which foreshadows the events that will soon take place, but soon progresses to Destiny Islands, where Sora lives with his two best friends, Riku and Kairi. The three friends seek to leave the islands to explore new worlds and have prepared a raft for this purpose. One night, the islands are attacked by darkness and shadow creatures. Sora seeks out his friends, finding Riku first; Riku disappears into darkness, curious about what it contains. Soon after, Sora obtains a mysterious weapon, the Keyblade, to defend himself. Using it to fend off the creatures, he heads for a secret cave, where he finds Kairi near a door. She turns to him, saying his name as the door behind her blows open. The ensuing blast of darkness sends Sora and Kairi both out of the cave. The islands are soon destroyed, and Sora is left adrift, Riku and Kairi&#39;s whereabouts unknown.'),
(21, 'Super Mario 64', '19.50', 7, 1, 1996, 'Simulation', 3, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/super_mario_64.jpg', 'Of all the items in the Mushroom Kingdom, the Power Stars are the most magical and powerful. These 120 stars power Princess Toadstool&#39;s castle. One day, the Princess invites Mario over for a cake-but while he&#39;s getting there, Bowser is invading! The King of the Koopas goes into Mushroom Castle and steals most of the power stars-the others are hidden by Peach and her Toad subjects. But alas-Bowser takes enough to not only create his own strange and twisted worlds from paintings in the castle, but to imprison Peach and her Toads in the castle walls themselves! But Bowser didn&#39;t count on one mustached plumber, whose mission is to recover the stolen stars and bring their power back!'),
(22, 'Legend of Zelda: Ocarina of Time', '42.45', 7, 1, 1998, 'Fantasy Action-Adventure', 3, 'zelda_ocarina_of_time.jpg', 'Link, the Hero of Time, has been awakened by the fairy Navi. The fairy warns him of The Great Calamity: Ganondorf. Traveling across the land of Hyrule, Link must save the kingdom and Princess Zelda from Ganon&#39;s plot to obtain the ultimate power in all the land: The Triforce. With the help of The Seven Sages and the elusive Sheik, Link will embark on the quest of a lifetime to stop Ganondorf once and for all.'),
(23, 'Jet Force Gemini', '14.55', 7, 1, 1999, 'Action-adventure Game', 3, 'jetforce_gemini.jpg', 'Jet Force Gemini revolves around the galactic law enforcement team Jet Force Gemini attempting to stop a horde of drones led by an insectoid called Mizar. The team is composed of Juno, Vela, and their wardog mascot Lupus. The game begins with the three characters in orbit around the planet Goldwood after barely escaping the destruction of the entire Jet Force fleet at the hands of Mizar, who has been capturing and enslaving a race of survivors known as the Tribals. When Juno, Vela and Lupus are attacked by several drones, the three decide to abandon their ship and go off on their own separate paths to stop the invasion. After traversing various planets, the heroes find themselves reunited at Mizar&#39;s Palace and face to face with Mizar, who escapes to a nearby asteroid where he sets course to impact with Earth. To help the heroes, Tribals leader King Jeff provides them with an ancient starship that can quickly catch up to Mizar&#39;s asteroid. In return, the team must rescue all the Tribals throughout the galaxy.'),
(25, 'The Elder Scrolls V: Skyrim', '30.50', 5, 7, 2011, 'Fantasy/Action Role-Playing', 2, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/skyrim.jpg', 'The Empire of Tamriel is on the edge. The High King of Skyrim has been murdered. Alliances form as claims to the throne are made. In the midst of this conflict, a far more dangerous, ancient evil is awakened. Dragons, long lost to the passages of the Elder Scrolls, have returned to Tamriel. The future of Skyrim, even the Empire itself, hangs in the balance as they wait for the prophesized Dragonborn to come; a hero born with the power of The Voice, and the only one who can stand amongst the dragons.'),
(26, 'Super Mario Galaxy', '21.20', 1, 1, 2007, 'Action-Adventure', 3, 'super_mario_galaxy.jpg', 'Super Mario Galaxy, unlike the other Mario games, takes place in deep space. Most of the game&#39;s levels consist of many small planets and planetoids, with some as big as real life planets. The game has 121 Stars to collect, although the player will have to go through the first 120 Stars twice (once as Mario and once as Luigi) to unlock the 121st and final Star.'),
(28, 'Bioshock Infinite', '29.99', 2, 9, 2013, 'First-person shooter', 1, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/bioshock_infinite.jpg', 'After traveling by boat along the Coast of Maine with two mysterious figures, Booker soon finds himself in a lighthouse, which he uses to ascend to Columbia. He passes out during the trip, awakening in a church-like area. When he asks where he is, one member of the congregation tells him he&#39;s in Heaven, or &#34;the closest he&#39;ll get until Judgment Day.&#34;'),
(29, 'Kirby: Star Allies', '52.85', 8, 1, 2018, 'Platform', 3, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/kirby_star_allies.jpg', 'Classic Kirby enemies are his new best friends!\r\nWhen an evil threatens Planet Popstar, Kirby will need a little help from his...enemies?! By making friends out of foes, up to three** players can drop in or out of the adventure at any time. With expanded copy abilities, classic Kirby action is even deeper: combine abilities with elements such as ice or fire to create friend abilities!'),
(32, 'Tales of Symphonia', '18.20', 4, 11, 2003, 'Action Role-Playing', 4, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/tales_of_symphonia.jpg', 'Lloyd Irving and his friend, Genis Sage accompany the chosen, Colette Brunel and her guardians, Raine Sage and Kratos Aurion on her journey of world regeneration. The purpose of the journey is to replenish Sylvarant with mana, a necessary energy to their survival.[NGC 1] The path of the journey consists of five temples which must be unsealed by Colette. On their journey, they meet Sheena Fujibayashi who comes from Tethe&#39;alla, a world parallel to Sylvarant. She tells them about how the two worlds vie for each other&#39;s mana through the journey of regeneration.[NGC 2] Hoping to find answers from the angel Remiel, the party meets him at the final seal and are betrayed by Remiel and Kratos; both are revealed to be part of Cruxis, an evil organization led by Mithos Yggdrasill.'),
(33, 'Crash Bandicoot 4: It&#39;s About Time', '54.50', 8, 4, 2020, 'Action-Adventure', 3, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/crash_bandicoot.jpg', 'Crash Bandicoot 4: It&#39;s About Time is a 2020 platform game developed by Toys for Bob and published by Activision. It was originally released for the PlayStation 4 and Xbox One, with releases for the PlayStation 5, Xbox Series X and Series S, Nintendo Switch, and Microsoft Windows following in 2021.'),
(34, 'Animal Crossing: New Horizons', '59.99', 8, 1, 2020, 'Social Simulation', 3, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/animal_crossing_nh.jpg', 'The game follows a villager customized by the player, who, after purchasing a getaway package from Tom Nook, moves into a deserted island. After Tom Nook gives the player essentials, such as a tent, the game proceeds in a non-linear fashion, allowing for the player to play the game as they choose.\r\n\r\nIn the Animal Crossing games, the player assumes the role of a human character who moves into a rural village populated with anthropomorphic animals, and lives there indefinitely. Gameplay is open-ended: players have no defined objectives, but are instead encouraged to spend their time in the village performing any number of activities which include collecting items, planting plants, bug-catching, fishing, and socializing with the village&#39;s residents. Animal Crossing games are played in real time, utilizing the video game console&#39;s internal clock and calendar. Thus, passage of time in the game world reflects that in reality, as well as the current season and time of day. Some in-game events, such as holidays or the growth of a tree, occur at certain times or require some duration of time to have passed.[11]'),
(35, 'Mario Kart 8 Deluxe', '49.99', 8, 1, 2014, 'Racing', 3, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/mario_kart_8.jpg', 'Hit the road with the definitive version of Mario Kart 8 and play anytime, any-where! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!'),
(46, 'Legend of Zelda: Twilight Princess', '39.99', 1, 1, 2006, 'Action-Adventure', 1, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/twilight_princess.jpg', 'The Legend of Zelda: Twilight Princess brings you back to the land of Hyrule, as you uncover the mystery behind its plunge into darkness. Link, a young man raised as a wrangler in a rural village, is ordered by the mayor to attend the Hyrule Summit. He sets off, oblivious to the dark fate that has descended upon the kingdom. When he enters the Twilight Realm that has covered Hyrule, he transforms into a wolf and is captured. A mysterious figure helps him break free, and with the aid of her magic, they set off to free the land from the shadows. Link must explore the vast land of Hyrule and as he does, he&#39;ll have to enlist the aid of friendly folk, solve puzzles and battle his way through dangerous dungeons. In the Twilight Realm, he&#39;ll have to use his wolf abilities and Midna&#39;s magic to bring light to the land. Revisit classic and new characters - Link, Zelda, Midna and many others'),
(60, 'Kirby&#39;s Epic Yarn', '19.99', 1, 1, 2010, 'Platform', 3, 'kirbys_epic_yarn.jpg', 'One ticked-off sorcerer just banished Kirby, warping the poor puffball to a yarn world in need of saving. The twist? Having a yarn body is epic! Kirby can transform into knitted wonders like tanks and flying saucers. Plus, his new ravel abilities mimic his classic copy abilities, adding something new to every stage of this action-adventure game! Ravel abilities allow Kirby to drop buttons like bombs or wield a wire like a sword. And that&#39;s just the beginning of all the makeshift magic. Dead end? Unzip a secret passage. Too dark? Unbutton the night to shed some light. Boss blocking your way? Unravel its face! As you play, you&#39;ll collect decorative treasures for Kirby&#39;s Pad. Show yours off with the StreetPass feature! If story mode isn&#39;t tough enough, see if you can earn more collectibles in Devilish Mode. In this harder mode, you must survive without invincibility as devils obstruct your path through each stage. There are also all-new minigames starring Meta Knight and King Dedede!'),
(61, 'Super Smash Bros. Ultimate', '59.99', 8, 1, 2018, 'Platform Fighting', 3, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/super_smash_bros_ultimate.jpg', 'Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more!\r\n\r\nHaving trouble choosing a stage? Then select the Stage Morph option to transform one stage into another while battling—a series first! Plus, new echo fighters Dark Samus, Richter Belmont, and Chrom join the battle. Whether you play locally or online, savor the faster combat, new attacks, and new defensive options, like a perfect shield. Jam out to 900 different music compositions and go 1-on-1 with a friend, hold a 4-player free-for-all, kick it up to 8-player battles and more! Feel free to bust out your GameCube controllers—legendary couch competitions await—or play together anytime, anywhere!'),
(62, 'Age of Empires IV', '53.99', 22, 14, 2021, 'Real-time strategy', 1, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/age_of_empires_IV.jpg', 'Build cities, manage resources, and lead your troops to battle on land and at sea in 4 distinct campaigns with 35 missions that span across 500 years of history from the Dark Ages up to the Renaissance. Choose Your Path to Greatness with Historical Figures – Live the adventures of Joan of Arc in her quest to defeat the English, or command mighty Mongol troops as Genghis Khan in his conquest across Asia. The choice is yours – and every decision you make will determine the outcome of history. Customize Your Game with Mods – Available in Early 2022, play how you want with user generated content tools for custom games. Challenge the World – Jump online to compete, cooperate or spectate with up to 7 of your friends in PVP and PVE multiplayer modes.'),
(69, 'World of Warcraft', '20.99', 22, 10, 2004, 'Fantasy RPG', 1, 'http://localhost/i211-final/gamePlanet-mvc/www/img/games/world_of_worldcraft.jpg', 'Intent on settling in Durotar, Thrall&#39;s Horde expanded its ranks by inviting the undead Forsaken to join orcs, tauren, and trolls. Meanwhile, dwarves, gnomes, and the ancient night elves pledged their loyalties to the Alliance, guided by the human kingdom of Stormwind. After Stormwind&#39;s king, Varian Wrynn, mysteriously disappeared, Highlord Bolvar Fordragon served as Regent but his service was affected by the mind control of the black dragon Onyxia, who ruled in disguise as a human noblewoman. As heroes investigated Onyxia&#39;s manipulations, the ancient elemental lord Ragnaros resurfaced to endanger both the Horde and Alliance.[43] The heroes of the Horde and Alliance defeated Onyxia and sent Ragnaros back to the Elemental Plane.');

-- --------------------------------------------------------

--
-- Table structure for table `games_system`
--

CREATE TABLE `games_system` (
  `games_id` int(11) NOT NULL,
  `system_id` tinyint(4) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `games_system`
--

INSERT INTO `games_system` (`games_id`, `system_id`, `price`, `quantity`) VALUES
(1, 1, '24.89', 6),
(1, 3, '60.45', 3),
(2, 2, '32.45', 3),
(2, 4, '14.59', 9),
(3, 1, '24.89', 3),
(3, 3, '90.49', 2),
(4, 3, '19.89', 4),
(5, 4, '10.59', 11),
(6, 2, '16.89', 10),
(7, 5, '22.39', 7),
(8, 4, '44.30', 5),
(9, 1, '59.55', 4),
(9, 6, '49.40', 6),
(10, 4, '32.99', 4);

-- --------------------------------------------------------

--
-- Table structure for table `publisher`
--

CREATE TABLE `publisher` (
  `publisher_id` tinyint(4) NOT NULL,
  `publisher` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `publisher`
--

INSERT INTO `publisher` (`publisher_id`, `publisher`) VALUES
(1, 'Nintendo'),
(2, 'Ubisoft'),
(3, 'Atari'),
(4, 'Activision'),
(5, 'Microsoft Game Studios'),
(6, 'Sony Computer Entertainment'),
(7, 'Bethesda Softworks'),
(9, '2K Games'),
(10, 'Blizzard Entertainment'),
(11, 'Namco'),
(12, 'Flex'),
(13, 'Oculus'),
(14, 'Xbox Game Studios');

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `rating_id` tinyint(4) NOT NULL,
  `rating` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ratings`
--

INSERT INTO `ratings` (`rating_id`, `rating`) VALUES
(1, 'T'),
(2, 'M'),
(3, 'E'),
(4, 'K-A'),
(5, 'E10+');

-- --------------------------------------------------------

--
-- Table structure for table `system`
--

CREATE TABLE `system` (
  `system_id` tinyint(4) NOT NULL,
  `name` varchar(120) CHARACTER SET utf8 NOT NULL,
  `publisher_id` tinyint(4) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `image` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `system`
--

INSERT INTO `system` (`system_id`, `name`, `publisher_id`, `price`, `image`, `description`) VALUES
(1, 'Nintendo Wii', 1, '169.99', 'http://localhost/i211-final/gamePlanet-mvc/www/img/systems/wii.jpg', 'Wii is a home console from Nintendo. Launched in 2006, it introduced motion controlled gaming to a wide audience of Nintendo fans and people who didn&#39;t traditionally play video games. A value model of Wii, Wii mini, was launched in 2013, allowing a new audience to enjoy Wii software. Wii mini does not connect to the Internet and does not support online features.'),
(2, 'XBox 360', 12, '149.49', 'http://localhost/i211-final/gamePlanet-mvc/www/img/systems/xbox360.jpg', 'Microsoft&#39;s first video game console, the Xbox, has sold more than 20 million units worldwide since its introduction in 2001. Despite the Xbox&#39;s impressive power, the list of big-name video game titles to support it and the success of the Xbox&#39;s online component, Xbox LIVE, Sony&#39;s PlayStation 2 still outsold it.  As the game industry moved into the next generation of video game technology, Microsoft was determined to dethrone Sony&#39;s PlayStation. Enter the Xbox 360.'),
(3, 'Nintendo Gamecube', 1, '89.99', 'http://localhost/i211-final/gamePlanet-mvc/www/img/systems/game_cube.jpg', 'The Nintendo GameCube is a game console in a cube format. The specially optimised 485 MHz processor with high-tech copper wire technology is complemented by state-of-the-art hardware which breaks down the boundary between the real world and video games. For instance, the &#34;Flipper&#34;-processor by ATI, which has been specially developed for Nintendo, provides crystal-clear graphics, bringing the enormous power of the Nintendo GameCube onto the screen.'),
(4, 'PlayStation 2', 6, '149.99', 'http://localhost/i211-final/gamePlanet-mvc/www/img/systems/ps2.jpg', 'PlayStation 2 software is distributed on CD-ROM and DVD-ROM. In addition, the console can play audio CDs and DVD movies, and is backwards compatible with original PlayStation games. This is accomplished through the inclusion of the original PlayStation&#39;s CPU which also serves as the PS2&#39;s I/O processor.[1] The PS2 also supports limited functionality with the original PlayStation memory cards and controllers. The PS2&#39;s DualShock 2 controller is an upgraded version of the PlayStation&#39;s DualShock with analog face, shoulder and D-pad buttons replacing the digital buttons of the original.[2] Like its predecessor, the DualShock 2 controller features force feedback technology.'),
(5, 'PlayStation 4', 6, '279.99', 'http://localhost/i211-final/gamePlanet-mvc/www/img/systems/ps4.jpg', 'The PlayStation 4 was released to critical acclaim, with critics praising Sony for acknowledging its consumers&#39; needs, embracing independent game development, and for not imposing the restrictive digital rights management schemes like those originally announced by Microsoft for the Xbox One. Critics and third-party studios, before its launch, also praised the capabilities of the PlayStation 4 in comparison to its competitors; developers described the performance difference between the console and Xbox One as &#34;significant&#34; and &#34;obvious.&#34; Heightened demand also helped Sony top global console sales. By October 2019, PS4 became the second best-selling home game console of all time, behind the PlayStation 2.'),
(6, 'Nintendo 3DS XL', 1, '339.50', 'http://localhost/i211-final/gamePlanet-mvc/www/img/systems/nintendo3DS_XL.jpg', 'Nintendo 3DS system features real 3D graphics, no glasses needed! The Nintendo 3DS is a breakthrough in portable entertainment, a truly cutting-edge piece of hardware. The Nintendo 3DS opens up a whole new world of gaming possibilities with its stereoscopic 3D display. Imagine seeing Mario in the 3rd dimension or rescuing Zelda with mind blowing 3D graphics. It has to be seen to be believed. What if you don&#39;t want 3D graphics? The Nintendo 3DS allows you to adjust the intensity of the 3D effects and turn them off completely with the 3D depth slider should you need to give your eyes a break, or if you have children ages 6 and under whom play for extended sessions. The Nintendo 3DS gives you total control over your games from the built in Gyro sensor to the Circle Pad to the always trusted D pad and stylus. The gyro sensor allows you to use the device as the controller. Tilt the 3DS and watch the compatible game react. For the active gamer the 3DS offers the Activity log which rewards you for carrying the 3DS with you as you walk with in-game coins! Additionally StreetPass allows you to communicate and share your Mii and game information with random people you meet throughout the day. Pictures can be taken in 3D using the 3DS and its three built-in cameras. Your pictures will come to life in crystal clear 3D.'),
(7, 'Nintendo 64', 1, '62.50', 'n64.jpeg', 'The Nintendo 64, often referred to as N64, is Nintendo’s third home video game console for the international market. Named for its 64-bit central processing unit, it was released in June 1996 in Japan, September 1996 in North America. It is the industry’s last major home console to use the cartridge as its primary storage format, although current handheld systems (such as the PlayStation Vita and Nintendo 3DS) also use cartridges. While the Nintendo 64 was succeeded by Nintendo’s MiniDVD-based GameCube in November 2001, the consoles remained available until the system was retired in late 2003.'),
(8, 'Nintendo Switch', 1, '299.99', 'nintendo_switch.jpg', 'Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch can be taken on the go so players can enjoy a full home Nintendo Switch console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Nintendo Switch Joy-Con controllers.'),
(9, 'Super Nintendo', 1, '58.99', 'super_nintendo.jpg', 'The Super Nintendo Entertainment System (commonly shortened to Super Nintendo) is a 16-bit home video game console developed by Nintendo that was released in 1990 in Japan and South Korea, 1991 in North America.  The SNES is Nintendo’s second home console, following the Nintendo Entertainment System (NES). The console introduced advanced graphics and sound capabilities compared with other consoles at the time. The development of a variety of enhancement chips integrated in game cartridges helped to keep it competitive in the marketplace.'),
(20, 'Xbox One S 500GB', 5, '299.99', 'xboxOne.png', 'Cutting-edge design meets cutting-edge technology with the Xbox One console. By continuously adding features, content, and capabilities, Xbox One was built to grow with you. Updates from Xbox Live will happen in the background while you enjoy your favorite game. Sign in to any Xbox One to see your home screen and play your digital games. Your digital content, profile, and saves go where you go. Xbox One was built by gamers, for gamers.'),
(21, 'Oculus Quest 2 256GB', 13, '399.00', 'oculus_quest_2_256gb.jpg', 'Oculus Quest 2 is our most advanced all-in-one VR system yet. Every detail has been engineered to make virtual worlds adapt to your movements, letting you explore awe-inspiring games and experiences with unparalleled freedom. No PC or console required. Get the most out of each moment with blazing-fast performance and next-generation graphics. Stay focused with a stunning display that features 50% more pixels than the original Quest. Or take a break from the action and grab front-row seats to live concerts, exclusive events and more. The redesigned Touch controllers feature improved ergonomics and intuitive controls that transport your gestures, motions and actions directly into VR. You can even connect your VR headset to a gaming-compatible computer with an Oculus Link cable to access hundreds of PC VR games and experiences. Oculus Quest 2 also lets you bring your friends into the action. With live casting, you can share your VR experience with people around you. Or meet up with friends in virtual worlds to battle in multiplayer competitions or just spend some time together. With Oculus Quest 2, there’s no end in sight to what you can play, create and discover in virtual reality.'),
(22, 'PC', 5, '0.00', 'steam.jpg', 'Steam is a video game digital distribution service by Valve. ... It also provides the user with installation and automatic updating of games, and community features such as friends lists and groups, cloud storage, and in-game voice and chat functionality.');

-- --------------------------------------------------------

--
-- Table structure for table `top_games`
--

CREATE TABLE `top_games` (
  `top_games_id` int(11) NOT NULL,
  `games_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `top_games`
--

INSERT INTO `top_games` (`top_games_id`, `games_id`) VALUES
(1, 3),
(2, 35),
(3, 29),
(5, 61),
(7, 9);

-- --------------------------------------------------------

--
-- Table structure for table `top_systems`
--

CREATE TABLE `top_systems` (
  `top_systems_id` int(11) NOT NULL,
  `system_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `top_systems`
--

INSERT INTO `top_systems` (`top_systems_id`, `system_id`) VALUES
(1, 2),
(2, 6),
(3, 8),
(4, 20),
(5, 21);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(80) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `role` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `firstname`, `lastname`, `role`) VALUES
(1, 'admin', '$2y$10$rERibLmM5fPXNjzWRDQlnO2slB9b4Yovl2m6rLIlZN/sj4lPB9Zei', 'sranegar@iu.edu', 'stephanie', 'ranegar', 1),
(10, 'AndyBob', '$2y$10$UwVVhbaA47OZQJ65Act09OW.wsgkdbFZsr/b5na3tmFujcsVxSmBC', 'Andybob@gmail.com', 'Andy', 'Bob', 2),
(13, 'sranegar', '$2y$10$w5zVP3K9CU0Pb1IPpYXrf.DLH7XInL4wr2psN2byfj7dRrd.DbC1i', 'sranegar@iu.edu', 'Stephanie', 'Ranegar', 2),
(44, 'sranegar', '$2y$10$P4sdo4F7rVMUnYRaBZLiIOMmahizEKdmCsj7HnmLBlBc9HUNQLkG.', 'sranegar@iu.edu', 'Stephanie', 'Ranegar', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`banner_id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`games_id`);

--
-- Indexes for table `games_system`
--
ALTER TABLE `games_system`
  ADD PRIMARY KEY (`games_id`,`system_id`);

--
-- Indexes for table `publisher`
--
ALTER TABLE `publisher`
  ADD PRIMARY KEY (`publisher_id`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`rating_id`);

--
-- Indexes for table `system`
--
ALTER TABLE `system`
  ADD PRIMARY KEY (`system_id`);

--
-- Indexes for table `top_games`
--
ALTER TABLE `top_games`
  ADD PRIMARY KEY (`top_games_id`);

--
-- Indexes for table `top_systems`
--
ALTER TABLE `top_systems`
  ADD PRIMARY KEY (`top_systems_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `games_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `publisher`
--
ALTER TABLE `publisher`
  MODIFY `publisher_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `rating_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `system`
--
ALTER TABLE `system`
  MODIFY `system_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `top_games`
--
ALTER TABLE `top_games`
  MODIFY `top_games_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `top_systems`
--
ALTER TABLE `top_systems`
  MODIFY `top_systems_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
