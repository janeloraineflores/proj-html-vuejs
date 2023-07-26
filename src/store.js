import { reactive } from 'vue'

export const store = reactive({
    navs : [
         'Home',
        'Pages',
        'Courses',
        'Features',
        'Blog',
        'Shop',
        
   ],

   images: [
    "client-logo-01",
    "client-logo-02",
    "client-logo-03",
    "client-logo-04",
    "client-logo-05",
    "client-logo-06",
    "client-logo-07",
    ],

    onlineCoursesCards: [
        {
            img: 'course-02-480x298',
          price: '$40.00'  ,
          title: 'Learning to write as a Professional Author',
          lessons: 20,
          students: 50
        },
        {
            img: 'stock-full-hd-03-480x298',
          price: 'Free'  ,
          title: 'Customer-centric Info-Tech Strategies',
          lessons: 24,
          students: 769
        },
        {
            img: 'stock-full-hd-04-480x298',
          price: '$19,00'  ,
          title: 'Open Programming Courses for Everyone: Phyton',
          lessons: 17,
          students: 62
        },
        {
            img: 'stock-full-hd-06-480x298',
          price: '$26.00'  ,
          title: ' Academic Listening and Note-taking',
          lessons: 14,
          students: 67
        },
        {
            img: 'course-featured-image-01-480x298',
          price: '$39.00'  ,
          title: '  Master JQuery in a Short Period of  Time',
          lessons: 6,
          students: 51
        },
        {
            img: 'stock-full-hd-05-480x298',
          price: '$59.00'  ,
          title: ' Introduction to Javascripts for Beginners',
          lessons: 14,
          students: 76
        },
   ],

   availableCoursescards: [
    {
        img: 'home-2-image-box-01',
        title: 'Customize Preferences',
        text: ' Learners are given the right to arrange and customize their study schedule and timetable based on preferences.',
        button: 'Start here'
    },

    {
        img: 'about-us-02-image-box-02',
        title: 'Cloud Storage',
        text: ' You can store online lessons via online cloud or download to your device and revise lessons.',
        button: 'Get Free Quote'
    },

    {
        img: 'home-2-image-box-03',
        title: 'Multimefdia Channels',
        text: ' We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.',
        button: 'Start now'
    },

    

],

    commentsCards: [
        {
            title: " It's a choice of quality for people with special needs",
            text: "I'm a very strict person so I require everything to be organized and neat. Then I'll be able to make things right and shine. MaxCouch guys just got me.",
            img: 'testimonial-avata-03',
            name: 'FLORENCE THEMES',
            profession: '/ Multimedia Admin'
        },

        {
            title: " High level of efficiency and scientific teaching methods",
            text: " I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like-me.",
            img: 'testimonial-avata-02',
            name: 'MINA HOLLACE',
            profession: '/ Freelancer'
        },
        {
            title: " Professional team of specialists and passionate mentors at reach",
            text: " I need to get a certification for English proficiency and MaxCouch is my best choice. Their tutors are smart and professional when dealing with students.",
            img: 'testimonial-avata-01',
            name: ' MADLEY PONDOR',
            profession: ' / IT Specialist'
        }
    ],

    cards: [
        {
            title: 'Succesfully Trained',
            number: '1790',
            text: 'Enrolled Learners',
        },
        {
            title: 'Proudly Received',
            number: '19',
            text: 'Countryward Awards',
        },
        {
            title: 'Firmly Established',
            number: '24',
            text: 'Local Branches',
        },
        {
            title: 'Getting Featured on',
            number: '1090',
            text: 'Blog Posts',
        },
    ],

    lists: [
        ' Become a Better Blogger: Content Planning' ,
       ' Promoting Your Online Business on Pinterest',
       'Gamification and Game-Based on Learning',
       'Designing an Online Course from Expert',
       'Why Online Courses Are The Future of Education'
    ],

    secondCards: [
        {
           img: 'artist-blog-03-480x352.jpeg',
           profession: 'Artist',
           title: 'Brush Strokes Energize Trees in Paintings',
           date: 'May 15, 2020',
           views: 688
        },
        {
           img: 'artist-blog-01-480x352.jpg',
           profession: 'Artist',
           title: 'Pocket-Sized Notebooks Hold Miniature Paintings',
           date:'May 15, 2020',
           views: 603
        },
        

  ]
});