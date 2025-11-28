export const assessments = [
    {
        id: 1,
        title: "Unit 3: Future Plans (Original)",
        description: "Based on Daniel & Valentina's story.",
        reading: {
            text: `Hello! My name is Daniel, and I’m 19 years old. I live in Concepción, and I’m finishing high school this year. I like studying math and science, and I enjoy fixing computers in my free time.

Next year, I’m going to take a gap year before starting university. I want to travel around Chile and visit different cities like Valdivia, Puerto Varas, and Punta Arenas. I’m going to take short English courses in each city to improve my language skills while meeting new people.

After finishing my travels, I’m going to study engineering. I want to work in a big company and design new machines. My teacher says I will be a great engineer because I’m creative and hardworking.

My girlfriend Valentina loves cooking. She is going to study gastronomy at INACAP Campus Santiago Centro. She wants to become a chef and work in a famous restaurant. She will be a fantastic cook!

This summer, we are going to look for part-time jobs. I’m going to work in an electronics shop, and Valentina is going to work in a café. We are both very excited about our future studies and jobs!`,
            questions: [
                {
                    id: 'r1',
                    question: "Why is Daniel taking a gap year?",
                    options: [
                        "Because he doesn’t want to study anymore",
                        "Because he wants to travel, visit cities, and improve his English",
                        "Because he already finished university",
                        "Because Valentina asked him to take a break"
                    ],
                    answer: 1
                },
                {
                    id: 'r2',
                    question: "What does Daniel plan to do while traveling?",
                    options: [
                        "Work in every city he visits",
                        "Take short English courses and meet new people",
                        "Study engineering in Valdivia",
                        "Visit only Punta Arenas"
                    ],
                    answer: 1
                },
                {
                    id: 'r3',
                    question: "What is one reason Daniel’s teacher thinks he will be a good engineer?",
                    options: [
                        "Because Daniel is patient and kind",
                        "Because Daniel speaks many languages",
                        "Because Daniel is creative and hardworking",
                        "Because Daniel loves traveling"
                    ],
                    answer: 2
                },
                {
                    id: 'r4',
                    question: "What future job does Valentina want?",
                    options: [
                        "To become a famous chef and work in a restaurant",
                        "To work in a hospital as a nurse",
                        "To teach English to children",
                        "To open a computer repair shop"
                    ],
                    answer: 0
                },
                {
                    id: 'r5',
                    question: "What are Daniel and Valentina’s summer work plans?",
                    options: [
                        "Daniel will work in a café, and Valentina in a hotel",
                        "Daniel will work at INACAP, and Valentina in a restaurant",
                        "Daniel will work in an electronics shop, and Valentina in a café",
                        "Both will work in the same place"
                    ],
                    answer: 2
                }
            ]
        },
        listening: {
            transcript: `
Story 1: "Hi, I'm Richard. I really love food. Next year, I am going to study Gastronomy."
Story 2: "Sofía needs advice on her classes. She is meeting her career counselor on Monday."
Story 3: "Andrés got a great job offer. He will start his new job in Puerto Montt next month."
Story 4: "My laptop is very old. I am going to look for a job in winter to buy a new laptop."
Story 5: "Fernanda is amazing with patients. She will be a great nurse because she is patient and studies hard."
      `,
            questions: [
                {
                    id: 'l1',
                    question: "In story 1, what is Richard going to study next year?",
                    options: ["Computer programming", "Gastronomy", "Engineering", "Tourism"],
                    answer: 1
                },
                {
                    id: 'l2',
                    question: "In story 2, who is Sofía meeting on Monday?",
                    options: ["Her math teacher", "Her career counselor", "Her best friend", "Her classmate"],
                    answer: 1
                },
                {
                    id: 'l3',
                    question: "In story 3, where will Andrés start his new job?",
                    options: ["Santiago", "Puerto Montt", "Valparaíso", "Punta Arenas"],
                    answer: 1
                },
                {
                    id: 'l4',
                    question: "In story 4, why is the narrator going to look for a job in winter?",
                    options: ["To buy a new phone", "To travel abroad", "To buy a new laptop", "To save for holidays"],
                    answer: 2
                },
                {
                    id: 'l5',
                    question: "In story 5, why will Fernanda be a great nurse in the future?",
                    options: ["Because she wants to be a chef", "Because she likes sports", "Because she is patient and studies hard", "Because she works in a hospital now"],
                    answer: 2
                }
            ]
        },
        grammar: {
            questions: [
                {
                    id: 'g1',
                    question: "Tomorrow at 2 p.m., Fernanda _____ a meeting with her teacher.",
                    options: ["will have", "is going to have", "having"],
                    answer: 0
                },
                {
                    id: 'g2',
                    question: "Sofía loves science. She thinks she _____ a scientist in the future.",
                    options: ["is going to be", "will be", "is being"],
                    answer: 1
                },
                {
                    id: 'g3',
                    question: "We already have a plan. We _____ the career counselor on Thursday.",
                    options: ["are going to meet", "will meet", "meet"],
                    answer: 0
                },
                {
                    id: 'g4',
                    question: "Next year, Nicolás _____ computer programming at INACAP.",
                    options: ["will study", "is going to study", "is studying"],
                    answer: 1
                },
                {
                    id: 'g5',
                    question: "Tomás likes helping people. He thinks he _____ in a hospital after finishing his studies.",
                    options: ["is going to work", "will work", "working"],
                    answer: 1
                }
            ]
        },
        writing: {
            prompt: "Write a short text (60–80 words) about your future using 'be going to'. Mention personal, academic, and work plans.",
            modelAnswer: "Next year, I am going to study Graphic Design at the university. I am going to move to Santiago and live with my cousin. In the summer, I am going to work in a bookstore to save money for a new tablet. In the future, I want to be an illustrator. I am going to practice drawing every day because I want to be the best."
        }
    },
    {
        id: 2,
        title: "Unit 3: Career Paths (Variant 2)",
        description: "Based on Javiera's internship plans.",
        reading: {
            text: `Javiera is 20 years old and lives in Antofagasta. She is currently studying Mining Engineering. She loves being outdoors and solving complex problems.

Next semester, she is going to start her first internship. She is going to move to Calama for three months. She plans to work in a large copper mine to learn about safety and operations. It will be hard work, but she is excited.

After her internship, she is going to return to university to finish her thesis. She thinks she will graduate with honors because she studies every day.

Her brother, Pedro, has different plans. He is going to open a small surf shop in Iquique. He loves the ocean and wants to teach tourists how to surf. He believes his shop will be very popular next summer.

Both siblings are working hard for their dreams. Javiera is going to buy a new safety helmet next week, and Pedro is going to buy new surfboards.`,
            questions: [
                {
                    id: 'r1',
                    question: "What is Javiera studying?",
                    options: ["Gastronomy", "Mining Engineering", "Tourism", "English"],
                    answer: 1
                },
                {
                    id: 'r2',
                    question: "Where is Javiera going to move for her internship?",
                    options: ["Iquique", "Antofagasta", "Calama", "Santiago"],
                    answer: 2
                },
                {
                    id: 'r3',
                    question: "Why does Javiera think she will graduate with honors?",
                    options: ["Because she is lucky", "Because the exams are easy", "Because she studies every day", "Because her teachers like her"],
                    answer: 2
                },
                {
                    id: 'r4',
                    question: "What is Pedro going to do?",
                    options: ["Open a surf shop in Iquique", "Work in a mine in Calama", "Study engineering", "Travel to Santiago"],
                    answer: 0
                },
                {
                    id: 'r5',
                    question: "What is Pedro going to buy next week?",
                    options: ["A safety helmet", "A new computer", "New surfboards", "A car"],
                    answer: 2
                }
            ]
        },
        listening: {
            transcript: `
Story 1: "Carlos is very athletic. Next year, he is going to study Physical Education."
Story 2: "Marta is organizing her schedule. She is meeting the head of the department on Friday."
Story 3: "Roberto found an apartment. He will move to La Serena next week."
Story 4: "I need to learn to drive. I am going to take driving lessons this summer."
Story 5: "Elena is very creative with wood. She will be a great carpenter."
      `,
            questions: [
                {
                    id: 'l1',
                    question: "What is Carlos going to study?",
                    options: ["Medicine", "Physical Education", "History", "Math"],
                    answer: 1
                },
                {
                    id: 'l2',
                    question: "When is Marta meeting the head of the department?",
                    options: ["Monday", "Wednesday", "Friday", "Sunday"],
                    answer: 2
                },
                {
                    id: 'l3',
                    question: "Where will Roberto move?",
                    options: ["La Serena", "Coquimbo", "Arica", "Talca"],
                    answer: 0
                },
                {
                    id: 'l4',
                    question: "What is the narrator going to do this summer?",
                    options: ["Buy a car", "Take driving lessons", "Fix a car", "Travel by bus"],
                    answer: 1
                },
                {
                    id: 'l5',
                    question: "What profession will Elena likely have?",
                    options: ["Carpenter", "Electrician", "Plumber", "Architect"],
                    answer: 0
                }
            ]
        },
        grammar: {
            questions: [
                {
                    id: 'g1',
                    question: "Look at those clouds! It _____ rain soon.",
                    options: ["will", "is going to", "is"],
                    answer: 1
                },
                {
                    id: 'g2',
                    question: "I believe technology _____ change the world even more.",
                    options: ["will", "is going to", "going to"],
                    answer: 0
                },
                {
                    id: 'g3',
                    question: "We bought the tickets yesterday. We _____ to Peru next month.",
                    options: ["will fly", "are going to fly", "fly"],
                    answer: 1
                },
                {
                    id: 'g4',
                    question: "I forgot my wallet. I _____ go back and get it.",
                    options: ["will", "am going to", "am"],
                    answer: 0
                },
                {
                    id: 'g5',
                    question: "She decided yesterday. She _____ start her own business.",
                    options: ["will", "is going to", "is"],
                    answer: 1
                }
            ]
        },
        writing: {
            prompt: "Write about your summer plans. Use 'will' for predictions and 'be going to' for plans. (60-80 words)",
            modelAnswer: "This summer, I am going to visit my grandparents in the south of Chile. We are going to go fishing and hiking near the volcano. I think it will be very relaxing. I am also going to read three books because I have a lot of free time. My brother isn't going to come with us because he has to work. I think he will miss us."
        }
    },
    {
        id: 3,
        title: "Unit 3: International Studies (Variant 3)",
        description: "Based on Richard's exchange program.",
        reading: {
            text: `Richard is a student from Valparaiso. He loves languages and meeting people from different cultures. Next year, he is going to travel to Canada for an exchange program.

He is going to live with a host family in Toronto. He is going to study English at a local college and take history classes. He is very nervous but excited.

He plans to visit Niagara Falls and the CN Tower. He wants to take many photos to show his family back in Chile. He thinks Canada will be very cold, so he is going to buy a warm jacket before he leaves.

His best friend, Andrea, is going to stay in Chile. She is going to study Nursing at the university in Viña del Mar. She wants to help people in the hospital. She promises she will call Richard every week on video chat.`,
            questions: [
                {
                    id: 'r1',
                    question: "Where is Richard going to travel?",
                    options: ["USA", "UK", "Canada", "Australia"],
                    answer: 2
                },
                {
                    id: 'r2',
                    question: "Who is Richard going to live with?",
                    options: ["In a hotel", "With a host family", "With Andrea", "Alone in an apartment"],
                    answer: 1
                },
                {
                    id: 'r3',
                    question: "Why is Richard going to buy a warm jacket?",
                    options: ["Because he likes fashion", "Because it is cheap", "Because he thinks Canada will be cold", "Because his mom told him to"],
                    answer: 2
                },
                {
                    id: 'r4',
                    question: "What is Andrea going to study?",
                    options: ["Nursing", "Medicine", "History", "English"],
                    answer: 0
                },
                {
                    id: 'r5',
                    question: "How will Andrea communicate with Richard?",
                    options: ["By letter", "By email", "By video chat", "She won't communicate"],
                    answer: 2
                }
            ]
        },
        listening: {
            transcript: `
Story 1: "I love animals. Next year, I am going to study Veterinary Medicine."
Story 2: "Jose is preparing for his trip. He is meeting his travel agent on Tuesday."
Story 3: "The company is growing. They will open a new office in London soon."
Story 4: "My room is messy. I am going to clean it this weekend."
Story 5: "Paula is very disciplined. She will be a successful athlete."
      `,
            questions: [
                {
                    id: 'l1',
                    question: "What is the speaker in Story 1 going to study?",
                    options: ["Biology", "Veterinary Medicine", "Zoology", "Agriculture"],
                    answer: 1
                },
                {
                    id: 'l2',
                    question: "Who is Jose meeting on Tuesday?",
                    options: ["His doctor", "His boss", "His travel agent", "His teacher"],
                    answer: 2
                },
                {
                    id: 'l3',
                    question: "Where will the new office be?",
                    options: ["Paris", "New York", "London", "Tokyo"],
                    answer: 2
                },
                {
                    id: 'l4',
                    question: "What is the narrator going to do this weekend?",
                    options: ["Paint the room", "Clean the room", "Move out", "Buy furniture"],
                    answer: 1
                },
                {
                    id: 'l5',
                    question: "What is Paula likely to become?",
                    options: ["A singer", "A scientist", "An athlete", "A writer"],
                    answer: 2
                }
            ]
        },
        grammar: {
            questions: [
                {
                    id: 'g1',
                    question: "Don't worry about the test. You _____ pass it easily.",
                    options: ["will", "are going to", "going to"],
                    answer: 0
                },
                {
                    id: 'g2',
                    question: "We have a reservation. We _____ stay at the Hotel Plaza.",
                    options: ["will", "are going to", "is going to"],
                    answer: 1
                },
                {
                    id: 'g3',
                    question: "The phone is ringing. I _____ answer it.",
                    options: ["will", "am going to", "am"],
                    answer: 0
                },
                {
                    id: 'g4',
                    question: "Look at the traffic! We _____ be late.",
                    options: ["will", "are going to", "are"],
                    answer: 1
                },
                {
                    id: 'g5',
                    question: "In 2050, people _____ live on Mars.",
                    options: ["will", "are going to", "living"],
                    answer: 0
                }
            ]
        },
        writing: {
            prompt: "Write about your dream job. What are you going to study? Where will you work? (60-80 words)",
            modelAnswer: "In the future, I want to be a pilot. I am going to study at an aviation school in Santiago. It is going to be difficult, but exciting. I will travel to many different countries and see the world. I am going to learn English and French perfectly. I think I will work for a big international airline. I am going to be very happy flying airplanes."
        }
    }
];
