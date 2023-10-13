import dotNET from './assets/svg/skills/dotnet.svg'
import cSharp from './assets/svg/skills/csharp.svg'
import unity from './assets/svg/skills/unity.svg'
import sql from './assets/svg/skills/sql-database.svg'
import js from './assets/svg/skills/javascript.svg'
import node from './assets/svg/skills/nodejs.svg'
import html from './assets/svg/skills/html-5.svg'
import css from './assets/svg/skills/css-3.svg'
import react from './assets/svg/skills/react.svg'
import angular from './assets/svg/skills/angular.svg'
import vuejs from './assets/svg/skills/vuejs.svg'
import mongodb from './assets/svg/skills/mongodb.svg'
import github from './assets/svg/skills/github.svg'
import docker from './assets/svg/skills/docker.svg'
import tdd from './assets/svg/skills/test-driven-development.svg'
import typescript from './assets/svg/skills/typescript.svg'
import firebase from './assets/svg/skills/firebase.svg'
import filmora from './assets/svg/skills/filmora-logo.svg'
import figma from './assets/svg/skills/figma.svg'
import aseprite from './assets/svg/skills/aseprite.svg'
import photoshop from './assets/svg/skills/photoshop.svg'
import premiere from './assets/svg/skills/premiere.svg'
import illustrator from './assets/svg/skills/illustrator.svg'

export default {
    pt: {
        title: "Oi, eu sou o Lucas.",
        subtitle: "Desenvolvedor de Jogos e Sistemas",
        about: 'Sobre Mim',
        education: 'Formação',
        techs: 'Tecnologias',
        career: 'Carreira',
        projects: 'Projetos',
        links: 'Links',
        aboutMe: {
            name: 'Lucas Zaranza',
            age:  "1993-8-31",
            yearsOld: 'Anos',
            email: 'lucaszaranza@gmail.com',
            fone: '85991753445',
            city: 'Fortaleza',
            state: 'Ceará',
            country: 'Brasil',
            description: [
                "Desenvolvedor há cerca de 10 anos, iniciei minha carreira com desenvolvimento de jogos e depois fui adquirindo experiência com o desenvolvimento de sistemas. Passei um bom tempo atuando com os jogos, e por volta de 2020 resolvi estudar o desenvolvimento de sistemas e trabalhar como desenvolvedor Web."
                , "Minha experiência com games se deu através da Unity3D com a linguagem C#. Por conta da intimidade com C#, quando eu migrei de área, consegui oportunidades como desenvolvedor .NET, boa parte como dev backend. Depois conheci o JavaScript, fiquei interessado e decidi estudar desenvolvimento frontend, com HTML, CSS, e os frameworks e bibliotecas JavaScript, com maior foco em React. Me considero um desenvolvedor fullstack, e estou disposto a trabalhar com o que for necessário, porém no momento tenho mais interesse no frontend."
            ]
        },
        educationData: {
            university: 'UECE - Universidade Estadual do Ceará',
            course: 'Ciência da Computação   (2011 - 2017)'
        },
        careerData: [
            {
                company: 'Touch Midia',
                startDate: 'SET 2014',
                endDate: 'AGO 2015',
                techs: 'Unity3D e C#',
                jobDescription: [
                    "Esse foi meu primeiro emprego, onde estagiei numa startup que oferecia fotos para eventos. Eles utilizavam totens com câmeras que tiravam e imprimiam as fotos automaticamente, com molduras aplicadas, feitas de acordo com cada evento."
                    , "Além dos serviços com impressões de fotos, eles ofereciam uma série de joguinhos com contagem de pontuação, que tinham por finalidade gerar competição entre os participantes dos eventos para concorrerem a brindes. Desenvolvi desde Jogo da Memória até uma réplica do Flappy Bird, todos com sistemas de captar dados dos usuários e registrar os pontos feitos em cada partida. Eram jogos casuais com finalidade de captar possíveis futuros clientes e gerar engajamento entre as pessoas na festa."
                    , "Na época eu já trabalhava com a Unity3D e já tinha desenvolvido alguns jogos caseiros, então recebi a proposta pra ser estagiário deles e trabalhar desenvolvendo esses jogos. Foi um período de quase 1 ano bastante divertido, onde me envolvi com diversos projetos e pude colocar em prática o que já vinha estudando."
                ]
            },
            {
                company: 'IVIA',
                startDate: 'JAN 2017',
                endDate: 'AGO 2017',
                techs: '.NET e Angular',
                jobDescription: [
                    "Após alguns anos focando no desenvolvimento de indie games enquanto tentava me dedicar à faculdade, consegui um estágio onde recebia treinamento em .NET com Angular. Tínhamos aulas de C# utilizando o ambiente .NET e fomos introduzidos ao Angular, onde tive minhas primeiras experiências com algo de frontend."
                    ,"Por ter passado muito tempo desenvolvendo games e utilizando a Unity, eu estranhei bastante aquela forma de programar, não gostei, não me interessei em estudar aquilo e fui ficando pra trás. Pouco tempo depois, pedi pra sair, não era aquilo que eu queria fazer, queria seguir na carreira de games."
                ]
            },
            {
                company: 'Penosas Strike (jogo autoral)',
                startDate: 'JAN 2018',
                endDate: 'SET 2018',
                techs: 'Unity e C#',
                jobDescription: [
                    "No ano de 2018 eu tentei empreender e desenvolver meu próprio indie game, chamado Penosas Strike, utilizando Unity3D e C#. Foram vários desafios, desde o aperto financeiro por estar trabalhando em algo por conta própria e não estar recebendo dinheiro algum, até questões como Síndrome do Impostor, por achar que aquilo não era bom o suficiente, ou que eu deveria estar trabalhando em algo estável e que me pagasse um salário."
                    , "Ao fim de Setembro eu lancei o jogo na PlayStore. Foi bem recebido por amigos e familiares... e só. Eu não fazia ideia do que era necessário fazer pra divulgar um projeto em larga escala, só sabia programá-lo, então não consegui lucrar com isso. "
                    , "Apesar desse baque, foi uma experiência muito desafiadora e que me trouxe diversos aprendizdados, não só técnicos, como também sobre outras questões tais como as mencionadas acima."
                ]
            },
            {
                company: 'Unichristus',
                startDate: 'DEZ 2020',
                endDate: 'ABR 2021',
                techs: '.NET, Blazor e PostgreSQL',
                jobDescription: [
                    "Nessa época eu trabalhei pra Unichristus, uma universidade católica aqui do Ceará que tinha uma demanda de sistemas para gerenciamento das aulas pelos professores universitários. Fui contratado para trabalhar com sistemas .NET, utilizando C#, o banco de dados PostgreSQL e no frontend utilizamos Blazor."
                    , "Foi a primeira vez que eu trabalhei como desenvolvedor fullstack e com banco de dados. Pela experiência com C#, eu não tive tanta dificuldade em programar, mas algumas coisas eu precisei comprar cursos e estudar, o Blazor era novidade, consultas SQL eu já tinha feito, mas nada profissional. Foi uma oportunidade de muito aprendizado."
                ]
            }
        ]
    },

    en: {
        title: "Hi, I'm Lucas.",
        subtitle: "Game and System Engineer",
        about: 'About Me',
        education: 'Education',
        techs: 'Techs',
        career: 'Career',
        projects: 'Projects',
        links: 'Links',
        aboutMe: {
            name: 'Lucas Zaranza',
            age:  "1993-8-31",
            yearsOld: 'Years Old',
            email: 'lucaszaranza@gmail.com',
            fone: '+5585991753445',
            city: 'Fortaleza',
            state: 'Ceará',
            country: 'Brazil',
            description: [
                "Developer since 2011, I started my career with game development and afterwards I was acquiring experience with system development. I spent a lot of time working with games, and by 2020 I decided to study web development technologies."
                , "My experience with game development came with Unity3D usage with C# programming language. Due my skills with C#, when I changed to web development, I got more opportunities as a .NET developer, acting as a fullstack engineer. Later on, I discovered JavaScript and all of its possibilities, so I began to study JS, HTML, CSS, then came through ReactJS, tech I'm actually enhancing my skills. I consider myself a fullstack engineer, and I'm willing to work with whichever stack it'll be necessary, but actually I have main interest on focusing on frontend."
            ]
        },
        educationData: {
            university: 'UECE - State University of Ceará',
            course: 'Computer Science   (2011 - 2017)'
        },
        careerData: [
            {
                company: 'Touch Midia',
                startDate: 'SEP 2014',
                endDate: 'AUG 2015',
                techs: 'Unity3D with C#',
                jobDescription: [
                    "This was my first job, where I worked at a startup which offered photo printing for events. They used totem withs with cameras which took pictures automatically, with frames applied, made according the event."
                    , "Beyond the photo printing services, they offered a couple of casual games with score counting, which had as goal create competition between the event guests for prize earning. I've worked developing since Memory Game until a customized Flappy Bird version, all of them with user data gathering systems to further contact and score registering systems for each game round."
                    , "At that time I already had made some homemade games, so I received a proposal to work with them and make these casual games. It was a very fun 1 year approximately period, where I envolved myself with these games and put in practice what I was studying."
                ]
            },
            {
                company: 'IVIA',
                startDate: 'JAN 2017',
                endDate: 'AUG 2017',
                techs: '.NET with Angular',
                jobDescription: [
                    "After a couple of years focusing on indie games while I was struggling with college, I got a trainee job where I've received .NET lessons with Angular. We had C# lessons using the .NET environment and we were introduced to Angular, where I had my first experiences with frontend stuff."
                    , "Due my past experience making games and using Unity, I've felt very uncomfortable with that way of coding, I didn't like it, didn't get interested and started to be left behind. Some months later, I decided to quit, that wasn't what I wanted to do, I wanted to follow my career making my own games."
                ]
            },
            {
                company: 'Penosas Strike (original game)',
                startDate: 'JAN 2018',
                endDate: 'SEP 2018',
                techs: 'Unity with C#',
                jobDescription: [
                    "At 2018 I tried to be an entrepreneur and make my own indie game, called Penosas Strike, using Unity and C#. It was very challeging, I wasn't being paid for making my own game, and I've suffered with Impostor Syndrome by thinking I wasn't good enough, I shouldn't be doing this and should get a stable job which paid me a salary."
                    , "By the end of September I've launched the game at PlayStore. It was well received by friends and relatives... and that's all, folks. I didn't have idea of what was necessary to share a game in large scale, I just knew how to code it, so I wasn't able of profiting with it."
                    , "Despite this shock, it was a very challenging experience which brought me a lot of lessons, not only technical stuff, but also about other issues as I mentioned above."
                ]
            },
            {
                company: 'Unichristus',
                startDate: 'DEC 2020',
                endDate: 'APR 2021',
                techs: '.NET, Blazor and PostgreSQL',
                jobDescription: [
                    "At that time I've worked at Unichristus, a catholic university from Ceará which had a demand with class management systems used by teachers. I was hired to work at the development of these systems using .NET, C# languagem PostgreSQL database, and Blazor at the frontend."
                    , "It was the first time I've worked as a fullstack engineer and with databases. Due the experience with C#, I hadn't much difficulties with coding, but some concepts were new for me and made me buy some courses and study, such as Blazor stuff; SQL queries I've already got experience, but nothing professional. It was a quite good opportunity to learn new techologies."
                ]
            }
        ]
    }
}

export const techs = [
    {
        name: 'Unity3D',
        icon: unity,
        level: 3
    },
    {
        name: 'C#',
        icon: cSharp,
        level: 3
    },
    {
        name: '.NET',
        icon: dotNET,
        level: 2
    },
    {
        name: 'SQL Database',
        icon: sql,
        level: 2
    },
    {
        name: 'JavaScript',
        icon: js,
        level: 2
    },
    {
        name: 'NodeJS',
        icon: node,
        level: 1
    },
    {
        name: 'HTML',
        icon: html,
        level: 2
    },
    {
        name: 'CSS',
        icon: css,
        level: 2
    },
    {
        name: 'React',
        icon: react,
        level: 2
    },
    {
        name: 'Angular',
        icon: angular,
        level: 2
    },
    {
        name: 'VueJS',
        icon: vuejs,
        level: 1
    },
    {
        name: 'MongoDB',
        icon: mongodb,
        level: 1
    },
    {
        name: 'Github',
        icon: github,
        level: 2
    },
    {
        name: 'Docker',
        icon: docker,
        level: 1
    },
    {
        name: 'TDD',
        icon: tdd,
        level: 2
    },
    {
        name: 'TypeScript',
        icon: typescript,
        level: 2
    },
    {
        name: 'Firebase',
        icon: firebase,
        level: 1
    },
    {
        name: 'Filmora',
        icon: filmora,
        level: 2
    },
    {
        name: 'Aseprite',
        icon: aseprite,
        level: 2
    },
    {
        name: 'Photoshop',
        icon: photoshop,
        level: 2
    },
    {
        name: 'Premiere',
        icon: premiere,
        level: 1
    },
    {
        name: 'Illustrator',
        icon: illustrator,
        level: 1
    },
    {
        name: 'Figma',
        icon: figma,
        level: 1
    },
]

export const techLevel = {
    pt: [
        'Iniciante',
        'Experiente',
        'Avançado'
    ],

    en:[
        'Beginner',
        'Skilled',
        'Advanced'
    ]
}