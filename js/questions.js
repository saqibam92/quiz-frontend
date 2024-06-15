// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "How many years has it been for Amirá?",
    answer: "3 years",
    options: ["8 years", "6 years", "2 years", "3 years"],
  },
  {
    numb: 2,
    question: "How many stores does Amirá have?",
    answer: "5 stores",
    options: ["8 stores", "6 stores", "3 stores", "5 stores"],
  },
  {
    numb: 3,
    question: "What is Amirá`s main mission?",
    answer: "To represent Eastern wear in a fashionable limelight",
    options: [
      "To make money",
      "To beat Yellow",
      "To represent Eastern wear in a fashionable limelight",
      "To represent Bangladesh's artistry and talent",
    ],
  },
  {
    numb: 4,
    question: "How many followers does Amirá have on Instagram?",
    answer: "60k followers",
    options: [
      "20k followers",
      "100k followers",
      "40k followers",
      "60k followers",
    ],
  },
  {
    numb: 5,
    question: "How old is Amirá's founder?",
    answer: "27 years old ",
    options: [
      "39 years old ",
      "21 years old ",
      "29 years old ",
      "27 years old ",
    ],
  },
  {
    numb: 6,
    question: "How many people work for Amirá?",
    answer: "250 members",
    options: ["80 members", "250 members", "120 members ", "360 members"],
  },

  {
    numb: 7,
    question: "What is Amirá's most popular ladies' product?",
    answer: "3pc",
    options: ["Kaftan ", "3pc", "Co-ords", "Fusion Tops"],
  },
  {
    numb: 8,
    question: "What was Amirá`s summer collection called last year?",
    answer: "Ushno",
    options: ["Monsoon", "Sunny Summer", "Phool Banu", "Ushno"],
  },
  {
    numb: 9,
    question: "What is Amirá's most popular men's product?",
    answer: "Panjabi",
    options: ["Panjabi", "Shirt", "Denim ", "Waist Coat "],
  },
  {
    numb: 10,
    question: "What was Amirá's last year's spring collection called?",
    answer: "Phool Banu",
    options: ["Ushno ", "Phool Banu", "Ronglia", "Floral Spring"],
  },
  {
    numb: 11,
    question: "What's the name of the theme of Amirá's winter collection?",
    answer: "Ronglia - Colour",
    options: [
      "Ronglia - Colour",
      "Sheeth - Winter",
      "Hawa - Wind",
      "Kuyasa - Fog",
    ],
  },
  {
    numb: 12,
    question: "Where is Amirá's flagship store located?",
    answer: "Gulshan",
    options: ["Uttara", "Ringroad", "Gulshan", "Wari"],
  },
  {
    numb: 13,
    question: "What is Amirá's correct website address?",
    answer: "www.amirabd.com",
    options: [
      "www.amira.com",
      "www.amirabd.com",
      "www.amira_apparel.com",
      "www.amiraclothing.com",
    ],
  },
  {
    numb: 14,
    question: "When did Amirá launch its flagship store?",
    answer: "2022",
    options: ["2022", "2020", "2024", "2017"],
  },
  {
    numb: 15,
    question: "Most of their printed designs are printed using which machine?",
    answer: "Digital Print",
    options: [
      "Digital Print",
      "Screen Print",
      "Sublimation Print",
      "Hand Print",
    ],
  },
  {
    numb: 16,
    question:
      "What is Amirá trying to resolve in the Bangladesh retail industry?",
    answer: "To create excitement in the fashion industry",
    options: [
      "To improve quality",
      "To improve design",
      "To create excitement in the fashion industry",
      "To become unique",
    ],
  },
  {
    numb: 17,
    question: "What is Amirá`s Unique Selling Point?",
    answer: "Unique Fusion Wear",
    options: [
      "Unique Ladies Ethnic Trouser",
      "Unique Fusion Wear",
      "Cool Oversized T-shirts",
      "Unique Kaftan Patterns",
    ],
  },
  {
    numb: 18,
    question: "What does Amirá mean?",
    answer: "It means “Princess”",
    options: [
      "It means “Fashion”",
      "It means “Princess”",
      "It means “Love”",
      "It means “Apparel”",
    ],
  },
  {
    numb: 19,
    question: "Who is Amirá`s biggest competitor?",
    answer: "Aarong",
    options: ["Aarong", "Yellow", "Le Reve", "Noir"],
  },
  {
    numb: 20,
    question: "What age group does Amirá target?",
    answer: "Anyone who`s young at heart ",
    options: ["Anyone who`s young at heart ", "18-25", "20-40", "45-55"],
  },
  {
    numb: 21,
    question: "How many sizes do they have? ",
    answer: " XS- 3XL",
    options: ["XS - XL", "S - 3XL", " XS- 3XL", " XS - 4XL"],
  },
  {
    numb: 22,
    question: "How many pieces did they sell of their most demanded style?",
    answer: "578pc",
    options: ["578pc", "349pc", "889pc", "643pc"],
  },
  // {
  //   numb: 23,
  //   question: "Do they do free delivery online?",
  //   answer: "Yes",
  //   options: ["No", "Yes"],
  // },
  {
    numb: 24,
    question: "How many female work at Amirá?",
    answer: "128 female members",
    options: [
      "128 female members",
      "206 female members",
      "197 female members",
      "86 female members",
    ],
  },
  {
    numb: 25,
    question: "How many male work at Amirá?",
    answer: "72 male members",
    options: [
      "72 male members",
      "206 male members",
      "197 male members",
      "86 male members",
    ],
  },
  {
    numb: 26,
    question: "What are the primary brand colors?",
    answer: "White, Gold, Black",
    options: [
      "Green, Blue, Black",
      "Green, Gold, Black",
      "White, Gold, Black",
      "Red, Green, Gold",
    ],
  },
  {
    numb: 27,
    question: "Which location was Amirá`s first store?",
    answer: "MohammadPur",
    options: ["Wari", "MohammadPur", "Gulshan", "Uttara"],
  },
  {
    numb: 28,
    question: "What does Amirá not sell in their stores?",
    answer: "Shoes",
    options: ["Apparel ", "Scarf", "Jewelry", "Shoes"],
  },
  {
    numb: 29,
    question: "When will Amirá launch its next store?",
    answer: "This year",
    options: ["2025", "This year", "2026", "2027"],
  },
  // {
  //   numb: 30,
  //   question: "Is the founder male or female?",
  //   answer: "Female",
  //   options: ["Male", "Female"],
  // },
  {
    numb: 31,
    question: "Approximately how many customers has Amirá served to this day?",
    answer: "698k customers",
    options: [
      "102k customers",
      "234k customers",
      "869k customers",
      "698k customers",
    ],
  },
  // {
  //   numb: 32,
  //   question: "When did Bangladesh become able to celebrate Victory Day?",
  //   answer: "1971",
  //   options: ["1965", "1971", "1975", "1981"],
  // },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
