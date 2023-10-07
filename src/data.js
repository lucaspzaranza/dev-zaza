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
                    "Esse foi meu primeiro emprego, onde estagiei numa startup que oferecia fotos para eventos. Eles utilizavam totens com câmeras que tiravam e imprimiam as fotos automaticamente, com molduras aplicadas, feitas de acordo com cada evento."
                    , "Além dos serviços com impressões de fotos, eles ofereciam uma série de joguinhos com contagem de pontuação, que tinham por finalidade gerar competição entre os participantes dos eventos para concorrerem a brindes. Desenvolvi desde Jogo da Memória até uma réplica do Flappy Bird, todos com sistemas de captar dados dos usuários e registrar os pontos feitos em cada partida. Eram jogos casuais com finalidade de captar possíveis futuros clientes e gerar engajamento entre as pessoas na festa."
                    , "Na época eu já trabalhava com a Unity3D e já tinha desenvolvido alguns jogos caseiros, então recebi a proposta pra ser estagiário deles e trabalhar desenvolvendo esses jogos. Foi um período de quase 1 ano bastante divertido, onde me envolvi com diversos projetos e pude colocar em prática o que já vinha estudando."
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