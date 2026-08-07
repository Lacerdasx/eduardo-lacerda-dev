import type {
  TimelineEntry,
  EducationEntry,
  StackCategory,
  Project,
  ContactInfo,
} from './types';

export const heroName = 'EDUARDO LACERDA';
export const heroRole = 'Desenvolvedor de Software';

export const aboutText =
  'Desenvolvedor de Software com experiência na evolução de uma plataforma SaaS ' +
  'multi-tenant voltada à auditoria, certificação e inteligência de mídia ' +
  'Out-of-Home (OOH). Atuação predominante no desenvolvimento backend com C# e ' +
  '.NET, incluindo APIs REST, modelagem de domínio, persistência de dados e ' +
  'integrações com serviços externos. Participação também no desenvolvimento de ' +
  'interfaces com React e TypeScript e na implementação de testes automatizados. ' +
  'Conhecimento prático em Clean Architecture, Arquitetura Hexagonal, ' +
  'Domain-Driven Design, CQRS e desenvolvimento orientado a boas práticas de ' +
  'organização, manutenção e escalabilidade de software.';

export const experience: TimelineEntry[] = [
  {
    id: 'lize',
    role: 'Desenvolvedor de Software',
    org: 'Lize (Plataforma VitrineOOH)',
    orgUrl: 'https://www.vitrineooh.com.br/',
    period: 'Novembro 2025 – Atual',
    bullets: [
      'Desenvolvimento e manutenção de funcionalidades backend com C#, .NET e ASP.NET Core.',
      'Evolução de plataforma SaaS multi-tenant para gestão de campanhas, auditoria fotográfica, checking e inteligência de mídia OOH.',
      'APIs REST versionadas seguindo Clean Architecture, Arquitetura Hexagonal, DDD, CQRS e Vertical Slice Architecture.',
      'Casos de uso com MediatR, validações com FluentValidation, mapeamento com Mapster.',
      'Modelagem de domínios, entidades, agregados e regras de negócio (campanhas, usuários, clientes, relatórios, fotografias).',
      'Entity Framework Core e Dapper sobre PostgreSQL e PostGIS, com transações e controle de concorrência.',
      'Autenticação e autorização com Keycloak (OIDC, JWT, RBAC), isolamento de dados por cliente.',
      'Integrações: Azure Blob Storage, Google Maps, OpenAI, Gotenberg, ViaCEP, IBGE, MailKit, ImageSharp, ClosedXML, OpenXML.',
      'Frontend em React, TypeScript e Vite: formulários, tabelas, dashboards, mapas interativos, upload de fotografias.',
      'Testes unitários e de integração com xUnit e WebApplicationFactory.',
    ],
  },
];

export const education: EducationEntry[] = [
  {
    id: 'cruzeiro-do-sul',
    course: 'Tecnologia da Informação e Gestão',
    institution: 'Universidade Cruzeiro do Sul',
    period: '2025 – 2026',
    status: 'Cursando',
  },
  {
    id: 'ebac',
    course: 'Desenvolvimento de Software',
    institution: 'EBAC',
    period: '2024',
    status: 'Concluído',
  },
];

export const accessControlItems: string[] = [
  'Keycloak: provedor de identidade (OIDC)',
  'JWT: autenticação stateless',
  'RBAC: controle de acesso baseado em papéis',
  'Isolamento de dados por cliente (multi-tenancy)',
];

export const stack: StackCategory[] = [
  { id: 'linguagens', label: 'Linguagens', items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  { id: 'backend', label: 'Backend', items: ['.NET', 'ASP.NET Core', 'APIs REST', 'Entity Framework Core', 'Dapper', 'MediatR', 'FluentValidation', 'Mapster', 'Swagger/OpenAPI'] },
  { id: 'frontend', label: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'React Router', 'TanStack Query', 'TanStack Table', 'React Hook Form', 'Zod', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'Recharts', 'Leaflet', 'Mapbox GL'] },
  { id: 'arquitetura', label: 'Arquitetura', items: ['Clean Architecture', 'Arquitetura Hexagonal', 'DDD', 'CQRS', 'Vertical Slice Architecture', 'Multi-tenancy'] },
  { id: 'dados', label: 'Banco de Dados', items: ['PostgreSQL', 'PostGIS', 'Migrations', 'Transações', 'Controle de concorrência'] },
  { id: 'integracoes', label: 'Integrações', items: ['Google Maps', 'OpenAI', 'Azure Blob Storage', 'Gotenberg', 'ImageSharp', 'MailKit', 'IBGE', 'ViaCEP', 'ClosedXML', 'OpenXML'] },
  { id: 'testes', label: 'Testes', items: ['xUnit', 'Testes unitários', 'Testes de integração', 'WebApplicationFactory'] },
];

export const projects: Project[] = [
  {
    id: 'school-manager',
    title: 'SchoolManager',
    description: 'Projeto para identificar o aprendizado em Programação Orientada a Objetos, com foco em gestão escolar.',
    tags: ['dashboard'],
    url: 'https://github.com/xibaloko/SchoolManager',
    placeholder: false,
  },
  {
    id: 'blackjack',
    title: 'BlackJack',
    description: 'Jogo de Black Jack implementado em C#.',
    tags: ['game'],
    url: 'https://github.com/Lacerdasx/BlackJack',
    placeholder: false,
  },
  { id: 'placeholder-3', title: 'EM BREVE', description: 'Projeto a ser adicionado.', tags: ['dashboard'], url: null, placeholder: true },
];

export const contact: ContactInfo = {
  phone: '(11) 98080-2502',
  email: 'sugiganedu@gmail.com',
  github: 'https://github.com/Lacerdasx',
  location: 'Guarulhos – SP',
};
