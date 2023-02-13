import self from "../img/self.png"
import banklymobile from '../img/banklymobile.png'
import banklyweb from '../img/banklyweb.png'
import stockval from '../img/stockval.png'
import gamedev from '../img/gamedev.png'

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(131, 208, 203)", "rgb(20, 82, 119)" ];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = true;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Kevin",
    lastName: "Ban",
    initials: "KB", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Canada'
        },
        {
            emoji: "💼",
            text: "2 Years of experience in Accounting"
        },
        {
            emoji: "📧",
            text: "kban0208@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/kevban",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/kevin-ban/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://drive.google.com/file/d/1A8ExTGFtBqgdWvPAAV4d0AByeH47cigl/view?usp=sharing",
            icon: "fa fa-file-text",
            label: 'resume'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "My name is Kevin Ban, and I am a software developer with a strong background in accounting and finance industry.\
    I am a self-driven individual who is passionate about learning new technologies and building high-quality applications. \
    I am excited to connect and collaborate with others in the industry to continue to grow and improve my skills.",
    skills:
    {
        languages: ['javascript', 'python', 'flutter/dart', 'java', 'sql', 'c#'],
        front: ['html', 'css', 'react', 'react-native', 'bootstrap', 'material-ui', 'redux'],
        back: ['nodejs', 'express', 'flask', 'rest', 'mongodb', 'postgresql']
    }
    ,
    hobbies: [
        {
            label: 'make and play games',
            emoji: '🕹️'
        },
        {
            label: 'read annual reports',
            emoji: '📖'
        },
        {
            label: 'draw pixel art',
            emoji: '🖊️'
        },
        {
            label: 'play violin',
            emoji: '🎻'
        },
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Bank.ly Personal Finance",
            description: "A budegting app that get transactions from real banks!",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/kevban/bankly-front", // this should be a link to the **repository** of the project, where the code is hosted.
            image: banklyweb,
            skills: ['React js', 'Node js', 'Express', 'MongoDB', 'Redux', 'Material UI']
        },
        {
            title: "Stock Valuator",
            description: "A web application that generate financial models for stocks!",
            live: "https://paytonpierce.dev",
            source: "https://github.com/kevban/stock-val-calc",
            image: stockval,
            skills: ['Python', 'Flask', 'JavaScript', 'PostgreSQL', 'HTML', 'CSS', 'Bootstrap']
        },
        {
            title: "Bank.ly Mobile",
            description: "The mobile version of Bank.ly for Android & IOS!",
            live: "https://paytonpierce.dev",
            source: "https://github.com/kevban/bankly-mobile",
            image: banklymobile,
            skills: ['React Native', 'Redux']
        },
        {
            title: "Papaya Game Dev",
            description: "Numerous pixel art 2D games made with C#.",
            live: "https://paytonpierce.dev",
            source: "https://github.com/kevban/papaya-gamedev",
            image: gamedev,
            skills: ['C#', 'Unity']
        }
    ]
}