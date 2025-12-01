export const assessments = [
    {
        id: 4,
        title: "Unit 3: Technology & Innovation (Variant 4)",
        description: "Based on Felipe and Camila's startup plans.",
        reading: {
            text: `Felipe and Camila are best friends living in Santiago. They are both 22 years old and love technology. Next year, they are going to start their own business.
            Felipe is a software developer. He is going to build a mobile application to help people find parking spots in busy cities. He thinks the app will be very popular because traffic is a big problem in Santiago. He is going to work from his home office to save money.
            Camila studies Graphic Design. She is going to design the logo and the user interface for the app. She wants the app to look modern and easy to use. She is also going to manage their social media accounts to attract new users.
            They need money to start. Next month, they are going to present their idea to a group of investors. They are very nervous, but they believe their idea will succeed. If they get the money, they will rent a small office in Providencia next year.`,
            questions: [
                {
                    id: 'r1',
                    question: "What are Felipe and Camila going to do next year?",
                    options: ["Go on vacation", "Start their own business", "Study abroad", "Buy a new car"],
                    answer: 1
                },
                {
                    id: 'r2',
                    question: "What is Felipe's app going to do?",
                    options: ["Help people find parking spots", "Teach people how to drive", "Sell used cars", "Deliver food"],
                    answer: 0
                },
                {
                    id: 'r3',
                    question: "Why does Felipe think the app will be popular?",
                    options: ["Because it is free", "Because traffic is a big problem", "Because he is famous", "Because Camila is a good designer"],
                    answer: 1
                },
                {
                    id: 'r4',
                    question: "What is Camila's role in the project?",
                    options: ["To write the code", "To drive the cars", "To design the logo and interface", "To cook for the team"],
                    answer: 2
                },
                {
                    id: 'r5',
                    question: "What will they do if they get money from investors?",
                    options: ["Buy a house", "Travel to Europe", "Rent an office in Providencia", "Quit their jobs"],
                    answer: 2
                }
            ]
        },
        listening: {
            transcript: `
            Story 1: "Ignacio loves stars. Next year, he is going to study Astronomy in the north of Chile."
            Story 2: "Barbara is looking at flights. She is meeting her sister in New York next Christmas."
            Story 3: "The sky is very dark. I think it will storm later today."
            Story 4: "My computer is broken. I am going to take it to the repair shop this afternoon."
            Story 5: "Daniela is very persuasive. She will be an excellent lawyer."
            `,
            questions: [
                {
                    id: 'l1',
                    question: "In Story 1, where is Ignacio going to study?",
                    options: ["In the south of Chile", "In Santiago", "In the north of Chile", "In Argentina"],
                    answer: 2
                },
                {
                    id: 'l2',
                    question: "In Story 2, who is Barbara meeting?",
                    options: ["Her boss", "Her sister", "Her mother", "Her boyfriend"],
                    answer: 1
                },
                {
                    id: 'l3',
                    question: "In Story 3, what is the prediction?",
                    options: ["It will be sunny", "It will snow", "It will storm", "It will be hot"],
                    answer: 2
                },
                {
                    id: 'l4',
                    question: "In Story 4, what is the speaker going to do this afternoon?",
                    options: ["Buy a new computer", "Take the computer to a repair shop", "Play video games", "Sell the computer"],
                    answer: 1
                },
                {
                    id: 'l5',
                    question: "In Story 5, what profession will Daniela likely have?",
                    options: ["Teacher", "Doctor", "Lawyer", "Engineer"],
                    answer: 2
                }
            ]
        },
        grammar: {
            questions: [
                {
                    id: 'g1',
                    question: "I have a headache. I _____ take an aspirin.",
                    options: ["will", "am going to", "going to"],
                    answer: 0
                },
                {
                    id: 'g2',
                    question: "Why did you buy paint? I _____ paint my bedroom tomorrow.",
                    options: ["will", "am going to", "am"],
                    answer: 1
                },
                {
                    id: 'g3',
                    question: "Watch out! You _____ drop the glass!",
                    options: ["will", "are going to", "are"],
                    answer: 1
                },
                {
                    id: 'g4',
                    question: "I promise I _____ help you with your homework later.",
                    options: ["will", "am going to", "is going to"],
                    answer: 0
                },
                {
                    id: 'g5',
                    question: "Look at the time! We _____ miss the bus.",
                    options: ["will", "are going to", "will going to"],
                    answer: 1
                }
            ]
        },
        writing: {
            prompt: "Write about how technology will change your life in the future. What are you going to buy? (60-80 words)",
            modelAnswer: "I think technology will make life easier. In the future, I am going to buy a smart house that cleans itself. I am also going to buy an electric car to protect the environment. I think robots will do all the boring jobs, so I will have more time to relax. Next year, I am going to take a coding course to understand computers better."
        }
    },
    {
        id: 5,
        title: "Unit 3: Environment & Science (Variant 5)",
        description: "Based on Matias' volunteer trip.",
        reading: {
            text: `Matias lives in Temuco. He cares a lot about the environment. Next summer, he is not going to go on a normal vacation. Instead, he is going to volunteer in a National Park near Puerto Montt.
            He is going to help plant native trees to restore the forest. He is going to stay in a wooden cabin with other volunteers from different countries. He plans to learn about different species of birds and plants.
            Matias thinks the work will be tiring, but very important. He hopes he will see a "Pudu" (a small deer) in the forest.
            After the volunteer program, Matias is going to study Environmental Science at the university. He wants to work for the government and protect Chile's nature. He believes that in the future, everyone will drive electric cars and use solar energy.`,
            questions: [
                {
                    id: 'r1',
                    question: "What is Matias going to do next summer?",
                    options: ["Go to the beach", "Volunteer in a National Park", "Work in a factory", "Stay at home"],
                    answer: 1
                },
                {
                    id: 'r2',
                    question: "Where is the National Park located?",
                    options: ["Near Santiago", "Near Temuco", "Near Puerto Montt", "Near Arica"],
                    answer: 2
                },
                {
                    id: 'r3',
                    question: "What is Matias' main task going to be?",
                    options: ["Cooking for tourists", "Planting native trees", "Building houses", "Driving a bus"],
                    answer: 1
                },
                {
                    id: 'r4',
                    question: "What animal does Matias hope to see?",
                    options: ["A Puma", "A Condor", "A Pudu", "A Fox"],
                    answer: 2
                },
                {
                    id: 'r5',
                    question: "What does Matias believe about the future?",
                    options: ["People will stop traveling", "Everyone will use electric cars and solar energy", "Robots will rule the world", "The forests will disappear"],
                    answer: 1
                }
            ]
        },
        listening: {
            transcript: `
            Story 1: "Carolina is very artistic. Next year, she is going to study Architecture."
            Story 2: "Lucas is checking the map. He is driving to San Pedro de Atacama tomorrow morning."
            Story 3: "Those boxes look heavy. I will help you carry them."
            Story 4: "I need to get fit. I am going to join a gym next week."
            Story 5: "Sebastian loves numbers and money. He will be a successful accountant."
            `,
            questions: [
                {
                    id: 'l1',
                    question: "What is Carolina going to study?",
                    options: ["Art", "Architecture", "Engineering", "Design"],
                    answer: 1
                },
                {
                    id: 'l2',
                    question: "Where is Lucas driving tomorrow?",
                    options: ["Viña del Mar", "Pucón", "San Pedro de Atacama", "Iquique"],
                    answer: 2
                },
                {
                    id: 'l3',
                    question: "Why does the speaker offer help in Story 3?",
                    options: ["Because the boxes look heavy", "Because he is bored", "Because he wants money", "Because he is strong"],
                    answer: 0
                },
                {
                    id: 'l4',
                    question: "What is the narrator going to do next week?",
                    options: ["Start a diet", "Join a gym", "Run a marathon", "Buy sports clothes"],
                    answer: 1
                },
                {
                    id: 'l5',
                    question: "What profession matches Sebastian's interests?",
                    options: ["Teacher", "Accountant", "Scientist", "Pilot"],
                    answer: 1
                }
            ]
        },
        grammar: {
            questions: [
                {
                    id: 'g1',
                    question: "Have you decided on a gift? Yes, I _____ buy her a book.",
                    options: ["will", "am going to", "am"],
                    answer: 1
                },
                {
                    id: 'g2',
                    question: "I left the door open. I _____ go and close it.",
                    options: ["will", "am going to", "going to"],
                    answer: 0
                },
                {
                    id: 'g3',
                    question: "Look at the queue! We _____ wait for a long time.",
                    options: ["will", "are going to", "wait"],
                    answer: 1
                },
                {
                    id: 'g4',
                    question: "In the year 2100, cars _____ fly.",
                    options: ["will", "are going to", "flying"],
                    answer: 0
                },
                {
                    id: 'g5',
                    question: "She bought the ingredients. She _____ make a cake tonight.",
                    options: ["will", "is going to", "is"],
                    answer: 1
                }
            ]
        },
        writing: {
            prompt: "Write about a trip you are planning. Where are you going to go? Who will you go with? (60-80 words)",
            modelAnswer: "Next vacation, I am going to travel to Chiloé. I am going to go with my parents and my sister. We are going to visit the wooden churches and eat 'Curanto'. It is going to be cold, so I will pack warm clothes. I think we will have a great time taking photos. I am going to buy souvenirs for my friends."
        }
    },
    {
        id: 6,
        title: "Unit 3: Music & Arts (Variant 6)",
        description: "Based on Gabriel's musical career.",
        reading: {
            text: `Gabriel is a talented musician from La Serena. He plays the violin and the piano. Next year, he is going to move to Santiago to study at a music conservatory.
            He is going to practice five hours every day because the exams are very difficult. He wants to play in the National Symphony Orchestra one day.
            His sister, Isabel, loves painting. She is going to open an art gallery in their hometown. She is going to display her own paintings and art from local artists. She plans to have a big opening party next Saturday.
            Gabriel and Isabel support each other. Gabriel is going to play music at Isabel's gallery opening, and Isabel is going to design the cover for Gabriel's first album. They believe that hard work will make their dreams come true.`,
            questions: [
                {
                    id: 'r1',
                    question: "Where is Gabriel going to move?",
                    options: ["La Serena", "Santiago", "Valparaíso", "Concepción"],
                    answer: 1
                },
                {
                    id: 'r2',
                    question: "Why is Gabriel going to practice five hours a day?",
                    options: ["Because he has nothing to do", "Because the exams are difficult", "Because his parents force him", "Because he gets paid"],
                    answer: 1
                },
                {
                    id: 'r3',
                    question: "What is Isabel going to do?",
                    options: ["Join an orchestra", "Open an art gallery", "Teach music", "Move to Santiago"],
                    answer: 1
                },
                {
                    id: 'r4',
                    question: "What will Gabriel do at Isabel's opening party?",
                    options: ["Paint a picture", "Serve food", "Play music", "Take photos"],
                    answer: 2
                },
                {
                    id: 'r5',
                    question: "What does Isabel plan to do for Gabriel?",
                    options: ["Design his album cover", "Buy him a violin", "Pay for his classes", "Write him a song"],
                    answer: 0
                }
            ]
        },
        listening: {
            transcript: `
            Story 1: "Victor loves the ocean. Next year, he is going to study Marine Biology."
            Story 2: "Antonia is looking at the calendar. She is seeing her dentist on Monday at 3 PM."
            Story 3: "I'm thirsty. I think I will buy a bottle of water."
            Story 4: "My suitcase is broken. I am going to borrow one from my brother."
            Story 5: "Camila has a great voice. She will be a famous singer one day."
            `,
            questions: [
                {
                    id: 'l1',
                    question: "What is Victor going to study?",
                    options: ["Biology", "Marine Biology", "Chemistry", "Physics"],
                    answer: 1
                },
                {
                    id: 'l2',
                    question: "When is Antonia seeing her dentist?",
                    options: ["Tuesday", "Monday", "Friday", "Wednesday"],
                    answer: 1
                },
                {
                    id: 'l3',
                    question: "Why does the speaker want to buy water?",
                    options: ["He is hungry", "He is tired", "He is thirsty", "He is hot"],
                    answer: 2
                },
                {
                    id: 'l4',
                    question: "What is the narrator going to do about the suitcase?",
                    options: ["Buy a new one", "Fix it", "Borrow one from his brother", "Cancel the trip"],
                    answer: 2
                },
                {
                    id: 'l5',
                    question: "What is the prediction about Camila?",
                    options: ["She will be a teacher", "She will be a singer", "She will be a dancer", "She will be an actress"],
                    answer: 1
                }
            ]
        },
        grammar: {
            questions: [
                {
                    id: 'g1',
                    question: "The phone is ringing. I _____ get it.",
                    options: ["am going to", "will", "am"],
                    answer: 1
                },
                {
                    id: 'g2',
                    question: "Look at the baby! He _____ fall.",
                    options: ["will", "is going to", "is"],
                    answer: 1
                },
                {
                    id: 'g3',
                    question: "We bought the wood. We _____ build a dog house.",
                    options: ["will", "are going to", "are"],
                    answer: 1
                },
                {
                    id: 'g4',
                    question: "I'm sure you _____ enjoy the movie.",
                    options: ["will", "are going to", "is going to"],
                    answer: 0
                },
                {
                    id: 'g5',
                    question: "What are your plans? I _____ visit my aunt.",
                    options: ["will", "am going to", "visit"],
                    answer: 1
                }
            ]
        },
        writing: {
            prompt: "Write about your plans for the weekend. What are you going to do? What will the weather be like? (60-80 words)",
            modelAnswer: "This weekend, I am going to stay at home and relax. On Saturday morning, I am going to clean my room. Then, I am going to watch a movie with my friends. I think it will be sunny, so maybe we will go to the park later. On Sunday, I am going to study for my English test because I want to get a good grade."
        }
    }
];