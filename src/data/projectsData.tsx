interface IProject {
    name:string,
    description:string,
    link:string,
}

export const projectsData:IProject[] = [
    {
        name:'lista de tarefas',
        description:'Projeto construído por meio de regex e construção manual de markdown.',
        link:'https://github.com/Pedrh316/Lista-De-Tarefas',
    },
    {
        name:'Autenticação',
        description:'Implementação de rotas de navegação privadas e publicas com NodeJs e React Router Dom.',
        link:'https://github.com/Pedrh316/Authenticacao'
    },
    {
        name:'Agenda',
        description:'Simulação de um agendamento virtual com Typescript, React e lógica de programação.',
        link:'https://github.com/Pedrh316/Agenda'
    },
    {
        name:'Portfolio antigo',
        description:'Demonstração de minhas habilidades em html, css, animações, responsividade, javascript, lógica de programação, etc.',
        link:'https://github.com/Pedrh316/Portfolio'
    }
]