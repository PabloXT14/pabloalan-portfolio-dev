const PROJECTS = [
  {
    id: "01",
    title: "BookWise",
    shortDescription: "Plataforma de avaliação de livros.",
    description: [
      'O projeto BookWise é uma plataforma de recomendações de livros para leitores, um lugar onde eles possam avaliar e ver avaliações de outros leitores sobre os mais diversos livros.',
      'Realizei a implementação tanto da parte front-end quanto back-end, fazendo uso do framework Next.js, que permitiu essa integração de maneira simples e eficiente.',
      `Abaixo segue as principais ferramentas e tecnologias utilizadas no desenvolvimento da aplicação:
      <br />
      ✅ TypeScript <br />
      ✅ Next <br />
      ✅ Prisma <br />
      ✅ NextAuth <br />
      ✅ Stitches <br />
      ✅ React Query <br />
    `
    ],
    role: 'Full-stack developer',
    image: "assets/projects-images/book-wise.png",
    date: "Set - Out 2023",
    techStack: [
      {
        name: "Next.js",
        icon: '<i class="devicon-nextjs-plain"></i>',
      },
      {
        name: "TypeScript",
        icon: '<i class="devicon-typescript-plain"></i>',
      },
      {
        name: "React Query",
        icon: '<i class="devicon-react-original"></i>',
      }
    ],
    repositoryUrl: "https://github.com/PabloXT14/book-wise",
    liveUrl: "https://pabloxt14-book-wise.vercel.app/"
  },
  {
    id: "02",
    title: "Ignite Shop",
    shortDescription: "Aplicação web de vendas de camisetas com temas do mundo dev.",
    description: [
      'O Ignite Shop é um aplicação web de vendas de camisetas com temas do mundo dev, mostrando com detalhes a parte visual e informacional das camisetas, além de apresentar um carrinho onde o cliente pode adicionar as suas compras.',
      'O principal conceito treinado nesta aplicação foi a utilização do framework Next.js, explorando conceitos como o de SSR (Server Side Rendering) e SSG (Static Site Generation), além da utilização da biblioteca Stitches.js para a estilização.',
      `Abaixo segue as principais ferramentas e tecnologias utilizadas no desenvolvimento da aplicação:
      <br />
      ✅ Next.js <br />
      ✅ TypeScript <br />
      ✅ Stitches <br />
      ✅ Radix <br />
      ✅ Phosphor Icons <br />
      ✅ Stripe <br />
      `
    ],
    role: 'Full-stack developer',
    image: "assets/projects-images/ignite-shop.png",
    date: "Jan - Fev 2023",
    techStack: [
      {
        name: "Next.js",
        icon: '<i class="devicon-nextjs-plain"></i>',
      },
      {
        name: "TypeScript",
        icon: '<i class="devicon-typescript-plain"></i>',
      },
      {
        name: "Stripe",
        icon: '<i class="ph ph-stripe-logo"></i>',
      }
    ],
    repositoryUrl: "https://github.com/PabloXT14/Ignite-Shop",
    liveUrl: "https://ignite-shop-kappa.vercel.app/"
  },
  {
    id: "03",
    title: "Rocket Notes",
    shortDescription: "Aplicação web para criar e gerenciar anotações.",
    description: [
      'O Rocket Notes é uma aplicação web na qual os usuários podem se cadastrar e criar de forma organizada anotações sobre determinados assuntos, tendo disponível a adição de titulo, descrição, links e tags para cada nota, além de contar a edição de perfil do usuário, podendo alterar seu avatar, nome, email e senha.',
      `Os principais conceitos/estudos que realizei com este projeto foram:
      <br />
      🔹 Revisar conceitos base. <br />
      🔹 Utilização do React Query para buscar dados da API no Front-end. <br />
      🔹 Construção e deploy completo de um back-end com Node. <br />
      🔹 Implementação de Testes no back-end (o que é algo necessário para uma aplicação ser profissional e escalável, evitando muitos bugs futuros inesperados).`,
      `Abaixo segue as principais ferramentas e tecnologias utilizadas no desenvolvimento da aplicação:
      <br />
      ✅ React <br />
      ✅ TypeScript <br />
      ✅ Styled Components <br />
      ✅ React Query <br />
      ✅ Express <br />
      ✅ PostgreSQL
      `
    ],
    role: 'Full-stack developer',
    image: "assets/projects-images/rocket-notes.png",
    date: "Fev - Mar 2023",
    techStack: [
      {
        name: "React",
        icon: '<i class="devicon-react-original"></i>',
      },
      {
        name: "TypeScript",
        icon: '<i class="devicon-typescript-plain"></i>',
      },
      {
        name: "Express",
        icon: '<i class="devicon-express-original"></i>',
      }
    ],
    repositoryUrl: "https://github.com/PabloXT14/Rocketnotes-Web",
    liveUrl: "https://rocketnotesweb.netlify.app/"
  }
]

export { PROJECTS }