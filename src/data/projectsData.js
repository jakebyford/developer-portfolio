import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import football from '../assets/svg/projects/american-football.svg'
import coffee from '../assets/svg/projects/coffee.svg'
import video_game from '../assets/svg/projects/video-game.svg'
import invest from '../assets/svg/projects/invest.svg'
import deal from '../assets/svg/projects/deal.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'NFL Betting Model',
        projectDesc: 'This project aims to predict future game results based on multiple parameters',
        tags: ['Python', 'Machine Learning', 'Statistical Analysis'],
        code: 'https://colab.research.google.com/drive/1Hgc6v0ShYiNWmCwKTVHqoVZEISGfNa46?usp=drive_link',
        demo: 'https://medium.com/@byfordjake1/unraveling-the-secrets-of-sports-betting-in-python-part-1-cda075279cce',
        image: football
    },
    {
        id: 2,
        projectName: 'Starbucks Coffee Recommendation System',
        projectDesc: 'This project is a machine learning recommendation system designed to propose personalized drink choices to users, enhancing their Starbucks experience with tailored suggestions.',
        tags: ['Flask', 'MongoDB','Natural Language Processing'],
        code: 'https://github.com/jakebyford/starbucks_drinks/blob/main/app.py',
        demo: 'https://starbucks-drinks.herokuapp.com/survey',
        image: coffee
    },
    {
        id: 3,
        projectName: 'Nintendo Sales Analysis',
        projectDesc: "This project scrapes and analyzes sales data for Nintendo's top consoles, visualizes key metrics, and creates a SQL database by comparing sales with best-selling video games.",
        tags: ['Pandas', 'Numpy', 'SQLite', 'Seaborn'],
        code: 'https://github.com/jakebyford/ProfessionalPortfolio/blob/main/Data_Analysis/Nintendo_Proj_SQL/Nintendo_Proj.ipynb',
        demo: 'https://github.com/jakebyford/ProfessionalPortfolio/blob/main/Data_Analysis/Nintendo_Proj_SQL/Nintendo_Proj.ipynb',
        image: video_game
    },
    {
        id: 4,
        projectName: 'Stock Analysis',
        projectDesc: 'Financial forecast project scraping the fundamental reporting data of the 30 DJIA stocks and their competitors to analyze niche investments',
        tags: ['BeautifulSoup4', 'Selenium'],
        code: 'https://github.com/jakebyford/TD_Ameritrade_Financial_Scraping/blob/main/ratio_analysis.ipynb',
        demo: 'https://github.com/jakebyford/TD_Ameritrade_Financial_Scraping/blob/main/README.md',
        image: invest
    },
    {
        id: 5,
        projectName: 'Applicant Tracking System',
        projectDesc: 'Python script that returns jobs that best match your resume',
        tags: ['NLTK', 'Sci-kit Learn', 'BeautifulSoup4', 'Selenium'],
        code: 'https://github.com/jakebyford/linkedinApplicantTrackingSystem/blob/main/ats.py',
        demo: 'https://github.com/jakebyford/linkedinApplicantTrackingSystem/tree/main',
        image: deal
    },
    // {
    //     id: 1,
    //     projectName: 'Employee Management',
    //     projectDesc: 'This project aims to build an employee management system that consolidates all information of a company',
    //     tags: ['React', 'CSS', 'Material Ui'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: one
    // },
    // {
    //     id: 2,
    //     projectName: 'Railway Tracking',
    //     projectDesc: 'This project is a railway tracking system that allows users to obtain relevant information about train timing.',
    //     tags: ['Django', 'Tailwind CSS'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: two
    // },
    // {
    //     id: 3,
    //     projectName: 'Weather App',
    //     projectDesc: 'Weather forecast systems and applications predict weather conditions based on multiple parameters.',
    //     tags: ['Django', 'CSS', 'Material Ui'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: three
    // },
    // {
    //     id: 4,
    //     projectName: 'Android Patient Tracker',
    //     projectDesc: 'This project involves the development of an Android application for viewing and managing patient data.',
    //     tags: ['Flutter', 'Firebase'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: four
    // },
    // {
    //     id: 5,
    //     projectName: 'E-Commerce App',
    //     projectDesc: 'A Simple E-commerce application',
    //     tags: ['React Native', 'Firebase'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: five
    // },
    // {
    //     id: 6,
    //     projectName: 'Uber Lite',
    //     projectDesc: 'Uber clone',
    //     tags: ['Flutter'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: six
    // },
    // {
    //     id: 7,
    //     projectName: 'Stock Market App',
    //     projectDesc: 'A simple stock market API app',
    //     tags: ['React', 'Redux', 'Bootstrap'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: seven
    // },
    // {
    //     id: 8,
    //     projectName: 'Car Pooling System',
    //     projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
    //     tags: ['Flutter', 'React'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: eight
    // },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/