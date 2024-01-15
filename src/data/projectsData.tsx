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
        description:'Implementação de rotas de navegação privadas e publicas com  e  Router Dom.',
        link:'https://github.com/Pedrh316/Authenticacao'
    },
    {
        name:'Agenda',
        description:'Simulação de um agendamento virtual com Typescript,  e lógica de programação.',
        link:'https://github.com/Pedrh316/Agenda'
    }
]