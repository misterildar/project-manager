export interface Project {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'paused';
  team: string[];
  teamLeader: string;
  teamLeaderBack?: string;
  startDate: string;
  endDate?: string;
  progressFront: number;
  progressBackend: number;
  details: string;
  repository?: string;
  figmaUrl?: string;
  chat: string;
  boards: string;
  backLanguage?: string;
  projectManager?: string;
  productManager?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'UNCO-сканер',
    description: 'Мобильное приложение для покупки продуктов',
    status: 'active',
    teamLeader: '@bobrykilya',
    team: ['@ramazan.yusupov', '@tatiana.krupnikova'],
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    progressFront: 90,
    progressBackend: 0,
    details: 'Здесь будет подробное описание проекта.',
    repository: 'https://gitlab.unco.market/users/sign_in',
    figmaUrl:
      'https://www.figma.com/design/NYRTlJbFX8iWdWu9YzopSF/UNCO-Projects?node-id=1374-22050&t=QT9U6zy5N2SprUXm-0',
    chat: 'https://chat.avbinvest.co/tiddle/channels/unco-scanner_-front',
    boards:
      'https://erp.avbinvest.com/app/tasks-proto#/tasks/margaryta.myrnenko@avbinvest.co/282',
  },
  {
    id: 2,
    title: 'AI Legal Assistant',
    description:
      'Автоматизация юридических задач – ИИ помощник, судебная практика, CRM для юристов',
    status: 'active',
    productManager: '@titov.artur',
    teamLeader: '@elena.romanova',
    team: ['@ildar.shaikhutdinov', '@pavel.gordienko'],
    teamLeaderBack: '@dmitry.kvitkovsky',
    backLanguage: 'Python',
    projectManager: '@veronika.soshenko',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    progressFront: 100,
    progressBackend: 100,
    details:
      'Юридическая платформа для автоматизации рутинных задач: база судебной практики, шаблоны документов, юридический справочник, CRM для юристов и AI-консультант. Оптимизируйте работу с документами и клиентами!',
    repository: 'https://github.com/AVB-Invest/AI_Legal_Assistant',
    figmaUrl:
      'https://www.figma.com/design/a1Cqijskoqo0YVguZo3O5b/Verdictor?node-id=10199-73957&p=f&t=OcarOBfRbVJSVRFC-0',
    chat: 'https://chat.avbinvest.co/legal-5d-platform/channels/ai-legal-assistant-frontend',
    boards: '',
  },
  {
    id: 3,
    title: 'UNCO-сканер',
    description: 'Мобильное приложение для покупки продуктов',
    status: 'active',
    teamLeader: '@bobrykilya',
    team: ['@ramazan.yusupov', '@tatiana.krupnikova'],
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    progressFront: 90,
    progressBackend: 0,
    details: 'Здесь будет подробное описание проекта.',
    repository: 'https://gitlab.unco.market/users/sign_in',
    figmaUrl:
      'https://www.figma.com/design/NYRTlJbFX8iWdWu9YzopSF/UNCO-Projects?node-id=1374-22050&t=QT9U6zy5N2SprUXm-0',
    chat: 'https://chat.avbinvest.co/tiddle/channels/unco-scanner_-front',
    boards:
      'https://erp.avbinvest.com/app/tasks-proto#/tasks/margaryta.myrnenko@avbinvest.co/282',
  },
  {
    id: 4,
    title: 'AI Legal Assistant',
    description:
      'Автоматизация юридических задач – ИИ помощник, судебная практика, CRM для юристов',
    status: 'active',
    productManager: '@titov.artur',
    teamLeader: '@elena.romanova',
    team: ['@ildar.shaikhutdinov', '@pavel.gordienko'],
    teamLeaderBack: '@dmitry.kvitkovsky',
    backLanguage: 'Python',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    progressFront: 100,
    progressBackend: 100,
    details:
      'Юридическая платформа для автоматизации рутинных задач: база судебной практики, шаблоны документов, юридический справочник, CRM для юристов и AI-консультант. Оптимизируйте работу с документами и клиентами!',
    repository: 'https://github.com/AVB-Invest/AI_Legal_Assistant',
    figmaUrl:
      'https://www.figma.com/design/a1Cqijskoqo0YVguZo3O5b/Verdictor?node-id=10199-73957&p=f&t=OcarOBfRbVJSVRFC-0',
    chat: 'https://chat.avbinvest.co/legal-5d-platform/channels/ai-legal-assistant-frontend',
    boards: '',
  },
  {
    id: 5,
    title: 'UNCO-сканер',
    description: 'Мобильное приложение для покупки продуктов',
    status: 'active',
    teamLeader: '@bobrykilya',
    team: ['@ramazan.yusupov', '@tatiana.krupnikova'],
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    progressFront: 90,
    progressBackend: 0,
    details: 'Здесь будет подробное описание проекта.',
    repository: 'https://gitlab.unco.market/users/sign_in',
    figmaUrl:
      'https://www.figma.com/design/NYRTlJbFX8iWdWu9YzopSF/UNCO-Projects?node-id=1374-22050&t=QT9U6zy5N2SprUXm-0',
    chat: 'https://chat.avbinvest.co/tiddle/channels/unco-scanner_-front',
    boards:
      'https://erp.avbinvest.com/app/tasks-proto#/tasks/margaryta.myrnenko@avbinvest.co/282',
  },
  {
    id: 6,
    title: 'AI Legal Assistant',
    description:
      'Автоматизация юридических задач – ИИ помощник, судебная практика, CRM для юристов',
    status: 'active',
    productManager: '@titov.artur',
    teamLeader: '@elena.romanova',
    team: ['@ildar.shaikhutdinov', '@pavel.gordienko'],
    teamLeaderBack: '@dmitry.kvitkovsky',
    backLanguage: 'Python',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    progressFront: 100,
    progressBackend: 100,
    details:
      'Юридическая платформа для автоматизации рутинных задач: база судебной практики, шаблоны документов, юридический справочник, CRM для юристов и AI-консультант. Оптимизируйте работу с документами и клиентами!',
    repository: 'https://github.com/AVB-Invest/AI_Legal_Assistant',
    figmaUrl:
      'https://www.figma.com/design/a1Cqijskoqo0YVguZo3O5b/Verdictor?node-id=10199-73957&p=f&t=OcarOBfRbVJSVRFC-0',
    chat: 'https://chat.avbinvest.co/legal-5d-platform/channels/ai-legal-assistant-frontend',
    boards: '',
  },
];
