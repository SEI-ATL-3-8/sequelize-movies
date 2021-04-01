'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [
      {
      title: 'Birdman or (The Unexpected Virtue of Ignorance)',
      synopsis: 'Illustrated upon the progress of his latest Broadway play, a former popular actors struggle to cope with his current life as a wasted actor is shown.',
      directorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: '21 Grams',
      synopsis:  'A freak accident brings together a critically ill mathematician, a grieving mother, and a born-again ex-con.',
      directorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'The Revenant',
      synopsis:   'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
      directorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Whiplash',
      synopsis:   'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a students potential.',
      directorId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Nightcrawler',
      synopsis: 'When Louis Bloom, a driven man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.',
      directorId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Guardians of the Galaxy',
      synopsis: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
      directorId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Mad Max: Fury Road',
      synopsis:  'A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.',
      directorId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'Happy Feet',
      synopsis:   'Into the world of the Emperor Penguins, who find their soul mates through song, a penguin is born who cannot sing. But he can tap dance something fierce!',
      directorId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Ex Machina',
      synopsis: 'A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.',
      directorId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Arrival',
      synopsis: 'When 12 mysterious spacecraft appear around the world, linguistics professor Louise Banks is tasked with interpreting the language of the apparent alien visitors.',
      directorId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'The Lobster',
      synopsis: 'In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods.',
      directorId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  '2001: A Space Odyssey ',
      synopsis: 'A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.',
      directorId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'The Shining',
      synopsis: 'Humanity finds a mysterious, obviously artificial object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.',
      directorId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'District 9',
      synopsis: 'An extraterrestrial race forced to live in slum-like conditions on Earth suddenly finds a kindred spirit in a government agent who is exposed to their biotechnology.',
      directorId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'The Godfather',
      synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      directorId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'Annie Hall',
      synopsis: 'Neurotic New York comedian Alvy Singer falls in love with the ditzy Annie Hall.',
      directorId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'Manhattan',
      synopsis: 'The life of a divorced television writer dating a teenage girl is further complicated when he falls in love with his best friends mistress.',
      directorId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'Midnight in Paris',
      synopsis: 'While on a trip to Paris with his fiancés family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s everyday at midnight.',
      directorId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'Boogie Nights',
      synopsis: 'The story of a young mans adventures in the Californian pornography industry of the late 1970s and early 1980s.',
      directorId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'Punch Drunk Love',
      synopsis: 'A psychologically troubled novelty supplier is nudged towards a romance with an English woman, all the while being extorted by a phone-sex line run by a crooked mattress salesman, and purchasing stunning amounts of pudding.',
      directorId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'There Will Be Blood',
      synopsis: 'A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.',
      directorId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'The Red Shoes',
      synopsis: 'A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.',
      directorId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'Taxi Driver',
      synopsis: 'A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.',
      directorId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'The Wolf of Wall Street',
      synopsis: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
      directorId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'Pulp Fiction',
      synopsis: 'The lives of two mob hit men, a boxer, a gangsters wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      directorId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'Kill Bill: Vol. 1',
      synopsis: 'The Bride wakens from a four-year coma. The child she carried in her womb is gone. Now she must wreak vengeance on the team of assassins who betrayed her - a team she was once part of.',
      directorId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'Fargo',
      synopsis: 'Jerry Lundegaards inept crime falls apart due to his and his henchmens bungling and the persistent police work of the quite pregnant Marge Gunderson.',
      directorId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'The Big Lebowski',
      synopsis: 'The Dude" Lebowski, mistaken for a millionaire Lebowski, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
      directorId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  'Sunshine',
      synopsis: 'In 2057, with the Earth in peril from the dying Sun, the crew is sent on a mission to reignite the star with a nuclear bomb that has a mass equivalent to Manhattan Island.',
      directorId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
