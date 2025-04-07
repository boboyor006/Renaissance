
import Me from "../Img/me.jpg"
import Arabic from "../Img/arabic.jpg"
import Koreys from "../Img/koreys.jpg"

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'Web Development' | 'Frontend Development' | 'English Language' | 'Arabic Language' | 'Rus tili';
  level: 'Boshlang\'ch' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  price: number;
  duration: string;
  lessons: number;
  studentsCount: number;
  featured: boolean;
  instructor: {
    name: string;
    avatar: string;
    title: string;
    bio: string;
  };
  whatYouWillLearn: string[];
  requirements: string[];
  curriculum: {
    title: string;
    lessons: {
      title: string;
      duration: string;
      videoUrl: string;
      preview: boolean;
    }[];
  }[];
  reviews: {
    id: string;
    user: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
  }[];
  createdAt: string;
}

export const courses: Course[] = [
  {
    id: 'web-dev-101',
    title: "Kompyuter savodxonligi",
    description: 'Boshlang\'ichdan ta\'limda  kompyuter savodxonligi  o\'rganing.',
    longDescription: 'Bu kurs sizni web dasturlash sohasida boshlang\'ich bilimlarga ega qiladi. Siz HTML, CSS va JavaScript orqali responsiv veb-saytlar yaratishni o\'rganasiz. Kursda React  kabi zamonaviy frameworklar bilan ishlashni o\'rganasiz. To\'liq stack veb ilovalar yaratish, saytlarni ishlab chiqish va boshqarishni o\'rganasiz. Autentifikatsiyani va ma\'lumotlar bazasini saqlashni amalga oshirasiz. Saytlarni performans va SEO uchun optimallashtirishni o\'rganasiz.',
    category: 'Web Development',
    level: 'Boshlang\'ch',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
    price: 20,
    duration: '24 weeks',
    lessons: 120,
    studentsCount:123,
    featured: true,
    instructor: {
      name: "Po'latov Boboyor",
      avatar: Me,
      title: 'Midel Fron-Tend developer',
      bio: "Po'latov Boboyor"
    },
    whatYouWillLearn: [
      'Zamonaviy frameworklar bilan ishlash, masalan React va Node.js',
   
      'Veb-saytlarni ishlab chiqish va boshqarish',
      'Implement authentication and database storage',
      'Optimize websites for performance and SEO'
    ],
    requirements: [
      'A computer with internet access',
      'No prior programming experience needed',
      'Basic computer skills',
      'Eagerness to learn and solve problems'
    ],
    curriculum: [
      {
        title: 'Introduction to Web Development',
        lessons: [
          {
            title: 'What is Web Development?',
            duration: '15 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Setting Up Your Development Environment',
            duration: '25 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'Web Development Roadmap',
            duration: '20 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }
        ]
      },
      {
        title: 'HTML Fundamentals',
        lessons: [
          {
            title: 'HTML Document Structure',
            duration: '18 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Working with Text Elements',
            duration: '22 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'Links, Images and Media',
            duration: '28 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }

          
        ]
      }
    ],
    reviews: [
     
    ],
    createdAt: '2023-01-15'
  },

  

  
  {
    id: 'frontend-master',
    title: 'Frontend yo\'nalishni.',
    description: 'Frontend dasturlashni o\'rganish uchun bu kursni tanlang.',
    longDescription: 'Frontend ko\'nikmalaringizni yangi bosqichga olib chiqing ushbu to\'liq master-klass bilan. Siz React\'ni noldan o‘rganasiz, shuningdek, Tailwind kabi zamonaviy CSS frameworklaridan foydalanishni bilib olasiz. Kursda responsiv dizayn, holatni boshqarish (state management), API integratsiyasi va chiroyli foydalanuvchi interfeyslarini yaratish kabi mavzular qamrab olingan. Frontend rivojlanishiga ixtisoslashmoqchi bo‘lgan dasturchilar uchun ideal tanlov!',
    category: 'Frontend Development',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    price: 27.05,
    duration: '8-oy',
    lessons: 85,
    studentsCount: 205,
    featured: true,
    instructor: {
      name: 'Po\'latov Boboyor',
      avatar: Me,
      title: 'Midel Fron-Tend developer',
      bio: ''
    },
    whatYouWillLearn: [
      'React yordamida zamonaviy reaktiv foydalanuvchi interfeyslarini yarating',
      'Tailwind kabi CSS frameworklari bilan ilovalarni bezang',
      'Barcha qurilmalar uchun responsiv dizaynni amalga oshiring',
      'Ilova holatini samarali boshqaring',
      'Backend API\'lar bilan integratsiya qiling',
      'Frontend ishlash samaradorligini optimallashtiring'
    ],
    requirements: [
      'HTML, CSS va JavaScript bo‘yicha asosiy bilimlarga ega bo‘lish',
      'Veb-dasturlash konsepsiyalari bilan tanish bo‘lish',
      'Dasturlashning asosiy tamoyillarini tushunish'
    ],
    curriculum: [
      {
        title: 'React Fundamentals',
        lessons: [
          {
            title: 'Introduction to React',
            duration: '22 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Components and Props',
            duration: '28 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'State and Lifecycle',
            duration: '32 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }
        ]
      },
      {
        title: 'Modern CSS Approaches',
        lessons: [
          {
            title: 'Introduction to Tailwind CSS',
            duration: '25 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Responsive Design with Tailwind',
            duration: '30 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'Creating Custom Components',
            duration: '35 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }
        ]
      }
    ],
    reviews: [

        // commentrayiya 


    ],

    createdAt: '2025'
  },
  {
    id: 'english-business',
    title: 'Ingliz tilini kurslari',
    description: 'Ingliz tilini mukamal darajada o\'rganish uchun bu kursni tanlang.',
    longDescription: 'This specialized course focuses on business English for professionals looking to advance their careers in international settings. You\'ll learn formal written communication, effective presentation skills, negotiation techniques, and business vocabulary. The course includes real-world scenarios and practice sessions to build your confidence in professional English communication.',
    category: 'English Language',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price:27.05,
    duration: '24 weeks',
    lessons: 60,
    studentsCount: 500,
    featured: true,
    instructor: {
      name: 'Dr. Jonathan Wells',
      avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
      title: 'Business English Specialist',
      bio: 'Dr. Wells has taught Business English at leading universities and corporations worldwide. He specializes in helping professionals communicate effectively in global business environments.'
    },
    whatYouWillLearn: [
      'Write professional emails, reports, and proposals',
      'Deliver effective presentations in English',
      'Participate confidently in meetings and negotiations',
      'Understand and use business terminology correctly',
      'Improve pronunciation and fluency',
      'Navigate cross-cultural business communication'
    ],
    requirements: [
      'Intermediate English proficiency (B1-B2 level)',
      'Basic business knowledge and experience',
      'Computer with microphone for speaking exercises',
      'Time commitment of 4-6 hours per week'
    ],
    curriculum: [
      {
        title: 'Professional Email Communication',
        lessons: [
          {
            title: 'Email Structure and Formatting',
            duration: '18 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Formal vs. Informal Email Language',
            duration: '22 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'Common Email Phrases and Expressions',
            duration: '25 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }
        ]
      },
      {
        title: 'Presentation Skills',
        lessons: [
          {
            title: 'Structuring a Business Presentation',
            duration: '24 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Visual Aids and Data Presentation',
            duration: '26 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'Handling Questions and Objections',
            duration: '28 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }
        ]
      }
    ],
    reviews: [
      {
        id: 'rev5',
        user: 'Carlos M.',
        avatar: 'https://randomuser.me/api/portraits/men/73.jpg',
        rating: 5,
        date: '2023-08-12',
        comment: 'This course helped me secure a promotion at my international firm. Dr. Wells provides practical advice that I applied immediately in my daily work.'
      },
      {
        id: 'rev6',
        user: 'Yuki T.',
        avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
        rating: 4,
        date: '2023-07-30',
        comment: 'Very useful for business professionals. I especially appreciated the email templates and presentation frameworks that I now use regularly.'
      }
    ],
    createdAt: '2023-03-10'
  },
  {
    id: 'arabic-beginners',
    title: 'Arabic for Beginners',
    description: 'Start your journey learning Arabic with this comprehensive course for complete beginners.',
    longDescription: 'This Arabic language course is designed specifically for complete beginners. You\'ll start with the Arabic alphabet and basic pronunciation before progressing to simple conversations, greetings, and everyday phrases. The course includes cultural insights to help you understand the context of the language, and plenty of practice exercises to build your confidence.',
    category: 'Arabic Language',
    level: 'Boshlang\'ch',
    thumbnail: Arabic,
    price: 69.99,
    duration: '10 weeks',
    lessons: 50,
    studentsCount: 6300,
    featured: false,
    instructor: {
      name: 'Layla Mahmoud',
      avatar: 'https://randomuser.me/api/portraits/women/39.jpg',
      title: 'Arabic Language Instructor',
      bio: 'Layla is a native Arabic speaker with over 8 years of experience teaching Arabic to English speakers. She specializes in making learning Arabic accessible and enjoyable for beginners.'
    },
    whatYouWillLearn: [
      'Read and write the Arabic alphabet',
      'Master basic Arabic pronunciation',
      'Conduct simple conversations in Arabic',
      'Understand basic grammar structures',
      'Count and use numbers in everyday situations',
      'Appreciate cultural aspects of the Arabic-speaking world'
    ],
    requirements: [
      'No prior knowledge of Arabic required',
      'Notebook for writing practice',
      'Commitment to daily practice',
      'Computer with audio capabilities'
    ],
    curriculum: [
      {
        title: 'Arabic Alphabet and Sounds',
        lessons: [
          {
            title: 'Introduction to Arabic Script',
            duration: '20 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Connecting Letters',
            duration: '25 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'Vowels and Pronunciation',
            duration: '22 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }
        ]
      },
      {
        title: 'First Conversations',
        lessons: [
          {
            title: 'Greetings and Introductions',
            duration: '18 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Asking Simple Questions',
            duration: '24 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'Talking About Yourself',
            duration: '26 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }
        ]
      }
    ],
    reviews: [
      {
        id: 'rev7',
        user: 'David L.',
        avatar: 'https://randomuser.me/api/portraits/men/68.jpg',
        rating: 5,
        date: '2023-09-02',
        comment: 'I tried learning Arabic before but always gave up. Layla\'s approach made it accessible and fun. I can now read basic texts and have simple conversations!'
      },
      {
        id: 'rev8',
        user: 'Maria S.',
        avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
        rating: 5,
        date: '2023-08-18',
        comment: 'The cultural insights really added value to the language learning. I feel like I understand not just the words but the context behind them.'
      }
    ],
    createdAt: '2023-04-05'
  },


  {
    id: 'web-dev-101',
    title: "Koreys tili",
    description: 'Boshlang\'ichdan ta\'limda  kompyuter savodxonligi  o\'rganing.',
    longDescription: 'Bu kurs sizni web dasturlash sohasida boshlang\'ich bilimlarga ega qiladi. Siz HTML, CSS va JavaScript orqali responsiv veb-saytlar yaratishni o\'rganasiz. Kursda React  kabi zamonaviy frameworklar bilan ishlashni o\'rganasiz. To\'liq stack veb ilovalar yaratish, saytlarni ishlab chiqish va boshqarishni o\'rganasiz. Autentifikatsiyani va ma\'lumotlar bazasini saqlashni amalga oshirasiz. Saytlarni performans va SEO uchun optimallashtirishni o\'rganasiz.',
    category: 'Web Development',
    level: 'Boshlang\'ch',
    thumbnail: Koreys,
    price: 20,
    duration: '24 weeks',
    lessons: 120,
    studentsCount:123,
    featured: true,
    instructor: {
      name: "Po'latov Boboyor",
      avatar: Me,
      title: 'Midel Fron-Tend developer',
      bio: "Po'latov Boboyor"
    },
    whatYouWillLearn: [
      'Zamonaviy frameworklar bilan ishlash, masalan React va Node.js',
   
      'Veb-saytlarni ishlab chiqish va boshqarish',
      'Implement authentication and database storage',
      'Optimize websites for performance and SEO'
    ],
    requirements: [
      'A computer with internet access',
      'No prior programming experience needed',
      'Basic computer skills',
      'Eagerness to learn and solve problems'
    ],
    curriculum: [
      {
        title: 'Introduction to Web Development',
        lessons: [
          {
            title: 'What is Web Development?',
            duration: '15 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Setting Up Your Development Environment',
            duration: '25 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'Web Development Roadmap',
            duration: '20 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }
        ]
      },
      {
        title: 'HTML Fundamentals',
        lessons: [
          {
            title: 'HTML Document Structure',
            duration: '18 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Working with Text Elements',
            duration: '22 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'Links, Images and Media',
            duration: '28 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }

          
        ]
      }
    ],
    reviews: [
     
    ],
    createdAt: '2023-01-15'
  },


  {
    id: 'english-fluency',
    title: 'English Fluency: Conversation & Pronunciation',
    description: 'Improve your spoken English with focused practice on conversation skills and pronunciation.',
    longDescription: 'This course is designed for intermediate English learners who want to improve their speaking fluency and pronunciation. Through targeted exercises, conversation practice, and pronunciation drills, you\'ll gain confidence in your spoken English. The course covers common conversation topics, accent reduction techniques, and strategies for sounding more natural when speaking English.',
    category: 'English Language',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 74.99,
    duration: '8 weeks',
    lessons: 40,
    studentsCount: 7800,
    featured: false,
    instructor: {
      name: 'Rebecca Thompson',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      title: 'Speech and Pronunciation Coach',
      bio: 'Rebecca is a certified TESOL instructor specializing in conversation skills and pronunciation. She has helped thousands of students improve their spoken English and reduce their accents.'
    },
    whatYouWillLearn: [
      'Speak English more confidently and fluently',
      'Improve your pronunciation of difficult English sounds',
      'Reduce your accent for clearer communication',
      'Use natural intonation and stress patterns',
      'Navigate everyday conversations with ease',
      'Apply strategies for continuing improvement'
    ],
    requirements: [
      'Intermediate English ability (B1 level or higher)',
      'Microphone for recording practice exercises',
      'Willingness to speak aloud and practice regularly',
      'Ability to attend live practice sessions'
    ],
    curriculum: [
      {
        title: 'Pronunciation Fundamentals',
        lessons: [
          {
            title: 'Problem Sounds for Non-Native Speakers',
            duration: '24 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Vowel Sounds in American English',
            duration: '28 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'Consonant Clusters and Blends',
            duration: '26 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }
        ]
      },
      {
        title: 'Conversation Skills',
        lessons: [
          {
            title: 'Small Talk and Social Conversations',
            duration: '22 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Expressing Opinions and Ideas',
            duration: '24 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'Active Listening and Response',
            duration: '20 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }
        ]
      }
    ],
    reviews: [
      {
        id: 'rev9',
        user: 'Paolo G.',
        avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
        rating: 5,
        date: '2023-08-30',
        comment: 'My colleagues have commented on how much clearer my English is since taking this course. The pronunciation drills really make a difference!'
      },
      {
        id: 'rev10',
        user: 'Ji-Yeon K.',
        avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
        rating: 4,
        date: '2023-08-05',
        comment: 'I feel so much more confident when speaking English now. Rebecca provides specific, actionable feedback that helped me improve quickly.'
      }
    ],
    createdAt: '2023-05-12'
  },
  {
    id: 'web-dev-advanced',
    title: 'Advanced Web Development with React & Node.js',
    description: 'Take your web development skills to the next level with advanced React and Node.js techniques.',
    longDescription: 'This advanced course builds on your existing web development knowledge to help you create complex, production-ready applications. You\'ll master advanced React patterns, server-side rendering, GraphQL APIs with Node.js, authentication systems, and deployment strategies. By completing real-world projects, you\'ll be ready to build professional full-stack applications.',
    category: 'Web Development',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 129.99,
    duration: '16 weeks',
    lessons: 80,
    studentsCount: 4200,
    featured: false,
    instructor: {
      name: 'Daniel Kim',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      title: 'Full-Stack Developer',
      bio: 'Daniel has worked as a senior developer at several tech companies and has contributed to popular open-source projects. He specializes in React and Node.js development for high-performance web applications.'
    },
    whatYouWillLearn: [
      'Implement advanced React patterns and hooks',
      'Build GraphQL APIs with Node.js and Express',
      'Create authentication systems with JWT',
      'Optimize React applications for performance',
      'Implement server-side rendering',
      'Deploy applications to cloud platforms'
    ],
    requirements: [
      'Solid knowledge of JavaScript, HTML, and CSS',
      'Basic experience with React and Node.js',
      'Understanding of RESTful APIs',
      'Familiarity with Git version control'
    ],
    curriculum: [
      {
        title: 'Advanced React Patterns',
        lessons: [
          {
            title: 'Component Composition and Reusability',
            duration: '30 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Advanced Hooks and Custom Hooks',
            duration: '35 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'State Management with Context API and Redux',
            duration: '40 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }
        ]
      },
      {
        title: 'GraphQL with Node.js',
        lessons: [
          {
            title: 'Setting Up a GraphQL Server',
            duration: '28 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: true
          },
          {
            title: 'Defining Schemas and Resolvers',
            duration: '32 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          },
          {
            title: 'Authentication and Authorization in GraphQL',
            duration: '36 min',
            videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            preview: false
          }
        ]
      }
    ],
    reviews: [
      {
        id: 'rev11',
        user: 'Mark L.',
        avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
        rating: 5,
        date: '2023-09-10',
        comment: 'This course was exactly what I needed to level up my development skills. Daniel explains complex concepts clearly and the projects are challenging but doable.'
      },
      {
        id: 'rev12',
        user: 'Sophia R.',
        avatar: 'https://randomuser.me/api/portraits/women/74.jpg',
        rating: 5,
        date: '2023-08-25',
        comment: 'I landed a senior developer role after completing this course! The advanced React patterns and GraphQL sections were particularly valuable for my skill set.'
      }
    ],
    createdAt: '2023-06-08'
  }
];

export const getCoursesForCategory = (category: Course['category']) => {
  return courses.filter(course => course.category === category);
};

export const getRelatedCourses = (courseId: string, limit = 3) => {
  const course = courses.find(c => c.id === courseId);
  if (!course) return [];
  
  return courses
    .filter(c => c.id !== courseId && c.category === course.category)
    .slice(0, limit);
};

export const getFeaturedCourses = (limit = 3) => {
  return courses
    .filter(course => course.featured)
    .slice(0, limit);
};

export const getCategories = (): Course['category'][] => {
  return ['Web Development', 'Frontend Development', 'English Language', 'Arabic Language'];
  
};

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};
