const players = [
    {
        firstName: 'Aaron', 
        lastName: 'Judge', 
        position: 'RF', 
        age: 33, 
        photo: 'imgs/judge.png', 
        funFact: 'Hit 62 home runs in 2022, breaking the AL record.'
    },
    {
        firstName: 'Cody', 
        lastName: 'Bellinger', 
        position: '1B', 
        age: 29, 
        photo: 'imgs/bellinger.png', 
        funFact: 'Won the NL MVP in 2019 with the Dodgers.'
    },
    {
    firstName: 'Jasson',
    lastName: 'Dominguez',
    position: 'CF',
    age: 22,
    photo: 'imgs/jasond.png',
    funFact: 'Nicknamed The Martian for his out-of-this-world talent.'
    },
    {
        firstName: 'Trent', 
        lastName: 'Grisham', 
        position: 'CF', 
        age: 28, 
        photo: 'imgs/grisham.png', 
        funFact: 'Known for his elite defensive skills in center field.'
    },
    {
        firstName: 'Anthony', 
        lastName: 'Volpe', 
        position: 'SS', 
        age: 24, 
        photo: 'imgs/volpe.png', 
        funFact: 'First Yankee to win a Gold Glove at shortstop.'
    },
    {
        firstName: 'Jorbit', 
        lastName: 'Vivas', 
        position: '2B', 
        age: 24, 
        photo: 'imgs/vivas.png', 
        funFact: 'Acquired in a trade from the Dodgers in 2023.'
    },
    {
        firstName: 'Ben', 
        lastName: 'Rice', 
        position: 'DH', 
        age: 26, 
        photo: 'imgs/rice.png', 
        funFact: 'Drafted by the Yankees in the 12th round in 2021.'
    },
    {
        firstName: 'Pablo', 
        lastName: 'Reyes', 
        position: 'SS', 
        age: 31, 
        photo: 'imgs/reyes.png', 
        funFact: 'Played for three different MLB teams before joining the Yankees.'
    },
    {
        firstName: 'Oswald', 
        lastName: 'Peraza', 
        position: '2B', 
        age: 24, 
        photo: 'imgs/peraza.png', 
        funFact: 'Made his MLB debut in 2022 at age 22.'
    },
    {
        firstName: 'DJ', 
        lastName: 'LeMahieu', 
        position: '1B', 
        age: 36, 
        photo: 'imgs/dj.png', 
        funFact: 'Won batting titles in both the NL and AL.'
    },
    {
        firstName: 'Paul', 
        lastName: 'Goldschmidt', 
        position: '1B', 
        age: 37, 
        photo: 'imgs/goldshmidt.png', 
        funFact: 'Won the NL MVP in 2022 with the Cardinals.'
    },
    {
        firstName: 'Jazz', 
        lastName: 'Chisholm Jr.', 
        position: '2B', 
        age: 27, 
        photo: 'imgs/jazz.png', 
        funFact: 'Known for his vibrant personality and colorful cleats.'
    },
    {
        firstName: 'Oswaldo', 
        lastName: 'Cabrera', 
        position: '3B', 
        age: 26, 
        photo: 'imgs/cabrera.png', funFact: 'Plays multiple positions, including outfield and infield.'
    },
    {
        firstName: 'Austin', 
        lastName: 'Wells', 
        position: 'C', 
        age: 25, 
        photo: 'imgs/wells.png', 
        funFact: 'Drafted in the first round by the Yankees in 2020.'
    },
    {
        firstName: 'J.C.', 
        lastName: 'Escarra', 
        position: 'C', 
        age: 30, 
        photo: 'imgs/escarra.png', 
        funFact: 'Signed as a minor league free agent in 2024.'
    },
    {
        firstName: 'Ryan', 
        lastName: 'Yarbrough', 
        position: 'RP', 
        age: 33, 
        photo: 'imgs/yarbrough.png', 
        funFact: 'Known for his slow curveball and versatility.'
    },
    {
        firstName: 'Devin', 
        lastName: 'Williams', 
        position: 'RP', 
        age: 30, 
        photo: 'imgs/williams.png', 
        funFact: 'Won the NL Reliever of the Year in 2020.'
    },
    {
        firstName: 'Luke', 
        lastName: 'Weaver', 
        position: 'RP', 
        age: 31, 
        photo: 'imgs/weaver.png', 
        funFact: 'Pitched in the 2023 ALCS for the Yankees.'
    },
    {
        firstName: 'Will', 
        lastName: 'Warren', 
        position: 'P', 
        age: 25, 
        photo: 'imgs/warren.png', 
        funFact: 'Top pitching prospect in the Yankees system.'
    },
    {
        firstName: 'Marcus', 
        lastName: 'Stroman', 
        position: 'P', 
        age: 34, 
        photo: 'imgs/stroman.png', 
        funFact: 'Known for his signature "HDMH" motto.'
    },
    {
        firstName: 'Clarke', 
        lastName: 'Schmidt', 
        position: 'P', 
        age: 29, 
        photo: 'imgs/clarke.png', 
        funFact: 'Made his MLB debut in the 2020 postseason.'
    },
    {
        firstName: 'Carlos', 
        lastName: 'Rodon', 
        position: 'P', 
        age: 32, 
        photo: 'imgs/rodon.png', 
        funFact: 'Struck out 422 batters in 2021-2022 combined.'
    },
    {
        firstName: 'Mark', 
        lastName: 'Leiter Jr.', 
        position: 'P', 
        age: 34, 
        photo: 'imgs/leiter.png', 
        funFact: 'Son of former MLB pitcher Mark Leiter.'
    },
    {
        firstName: 'Tim', 
        lastName: 'Hill', 
        position: 'P', 
        age: 35, 
        photo: 'imgs/hill.png', 
        funFact: 'Known for his sidearm pitching style.'
    },
    {
        firstName: 'Ian', 
        lastName: 'Hamilton', 
        position: 'P', 
        age: 29, 
        photo: 'imgs/hamilton.png', 
        funFact: 'Acquired by the Yankees in 2023 via trade.'
    },
    {
        firstName: 'Max', 
        lastName: 'Fried', 
        position: 'P', 
        age: 31, 
        photo: 'imgs/fried.png', 
        funFact: 'Won a World Series with the Braves in 2021.'
    },
    {
        firstName: 'Fernado', 
        lastName: 'Cruz', 
        position: 'P', 
        age: 35, 
        photo: 'imgs/cruz.png', 
        funFact: 'Signed with the Yankees as a free agent in 2024.'
    },
    {
        firstName: 'Giancarlo', 
        lastName: 'Stanton', 
        position: 'DH', 
        age: 35, 
        photo: 'imgs/stanton.png', 
        funFact: 'Hit 59 home runs in 2017 with the Marlins.'
    },
    {
        firstName: 'Gerrit', 
        lastName: 'Cole', 
        position: 'SP', 
        age: 34, 
        photo: 'imgs/cole.png', 
        funFact: 'Won the AL Cy Young Award in 2023.'
    },
    {
        firstName: 'Luis', 
        lastName: 'Gil', 
        position: 'SP', 
        age: 26, 
        photo: 'imgs/gil.png', 
        funFact: 'Set a Yankees rookie record for strikeouts in 2024.'
    }
];