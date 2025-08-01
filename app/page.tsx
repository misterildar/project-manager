'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Calendar, Users, Clock, ExternalLink, Github } from 'lucide-react';

// Типы данных
interface Project {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'paused';
  team: string[];
  teamLeader: string;
  startDate: string;
  endDate?: string;
  progressFront: number;
  progressBackend: number;
  details: string;
  repository?: string;
  figmaUrl?: string;
  chat: string;
  boards: string;
}

// Примеры проектов
const projects: Project[] = [
  {
    id: 1,
    title: 'UNCO-сканер',
    description: 'Мобильно приложение для покупки продуктов',
    status: 'active',
    teamLeader: 'Илья',
    team: ['Илья'],
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
    teamLeader: 'Лена',
    team: ['Ильдар'],
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
    description: 'Мобильно приложение для покупки продуктов',
    status: 'active',
    teamLeader: 'Илья',
    team: ['Илья'],
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
    teamLeader: 'Лена',
    team: ['Ильдар'],
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
    description: 'Мобильно приложение для покупки продуктов',
    status: 'active',
    teamLeader: 'Илья',
    team: ['Илья'],
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
    teamLeader: 'Лена',
    team: ['Ильдар'],
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

const statusColors = {
  active: 'bg-green-100 text-green-800 border-green-200',
  completed: 'bg-blue-100 text-blue-800 border-blue-200',
  paused: 'bg-yellow-100 text-yellow-800 border-yellow-200',
};

const statusLabels = {
  active: 'Активный',
  completed: 'Завершен',
  paused: 'Приостановлен',
};

export default function ProjectManager() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className='min-h-screen bg-gray-300 p-4 md:p-6 lg:p-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Заголовок */}
        <div className='mb-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
            Фронтенд проекты в работе
          </h1>
        </div>

        {/* Сетка карточек */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project) => (
            <Card
              key={project.id}
              className='hover:shadow-lg transition-shadow duration-200 cursor-pointer'
            >
              <CardHeader className='pb-3'>
                <div className='flex items-start justify-between mb-2'>
                  <CardTitle className='text-xl font-semibold line-clamp-2'>
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant='outline'
                    className={`ml-2 ${statusColors[project.status]} shrink-0`}
                  >
                    {statusLabels[project.status]}
                  </Badge>
                </div>
                <CardDescription className='text-sm text-gray-600 line-clamp-3'>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className='space-y-4'>
                {/* Прогресс верстка */}
                <div className='space-y-2'>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Верстка макета</span>
                    <span className='font-medium'>
                      {project.progressFront}%
                    </span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className='bg-blue-600 h-2 rounded-full transition-all duration-300'
                      style={{ width: `${project.progressFront}%` }}
                    />
                  </div>
                </div>

                {/* Информация */}
                <div className='space-y-2 text-sm text-gray-600'>
                  <div className='flex items-center gap-2'>
                    <Users className='h-4 w-4' />
                    <span>{project.team.length} участников</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Calendar className='h-4 w-4' />
                    <span>
                      {new Date(project.startDate).toLocaleDateString('ru-RU')}
                    </span>
                  </div>
                  {project.endDate && (
                    <div className='flex items-center gap-2'>
                      <Clock className='h-4 w-4' />
                      <span>
                        до{' '}
                        {new Date(project.endDate).toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Прогресс бэк */}
                <div className='space-y-2'>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Backend</span>
                    <span className='font-medium'>
                      {project.progressBackend}%
                    </span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className='bg-blue-600 h-2 rounded-full transition-all duration-300'
                      style={{ width: `${project.progressBackend}%` }}
                    />
                  </div>
                </div>

                {/* Кнопка подробнее */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant='outline'
                      className='w-full mt-4 bg-transparent'
                      onClick={() => setSelectedProject(project)}
                    >
                      Подробнее
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='max-w-2xl max-h-[80vh] overflow-y-auto'>
                    <DialogHeader>
                      <div className='flex items-start justify-between mb-2 mr-4'>
                        <DialogTitle className='text-2xl font-bold pr-4'>
                          {project.title}
                        </DialogTitle>
                        <Badge
                          variant='outline'
                          className={statusColors[project.status]}
                        >
                          {statusLabels[project.status]}
                        </Badge>
                      </div>
                      <DialogDescription className='text-base'>
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>

                    <div className='space-y-6 mt-6'>
                      {/* Прогресс */}
                      <div className='space-y-2'>
                        <div className='flex justify-between'>
                          <span className='font-medium'>
                            Прогресс верстки по макету
                          </span>
                          <span className='font-bold text-lg'>
                            {project.progressFront}%
                          </span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-3'>
                          <div
                            className='bg-blue-600 h-3 rounded-full transition-all duration-300'
                            style={{ width: `${project.progressFront}%` }}
                          />
                        </div>
                      </div>

                      {/* Детальное описание */}
                      <div>
                        <h4 className='font-semibold mb-2'>Описание проекта</h4>
                        <p className='text-gray-700 leading-relaxed'>
                          {project.details}
                        </p>
                      </div>

                      {/* Тимлид */}
                      <div className='flex gap-2'>
                        <h4 className='font-semibold mb-2'>Тимлид - </h4>
                        <p>{project.teamLeader}</p>
                      </div>

                      {/* Команда */}
                      <div>
                        <h4 className='font-semibold mb-2'>Команда проекта</h4>
                        <div className='flex flex-wrap gap-2'>
                          {project.team.map((member) => (
                            <Badge
                              key={member}
                              variant='outline'
                              className='px-3 py-1'
                            >
                              {member}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Даты */}
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <h4 className='font-semibold mb-1'>Дата начала</h4>
                          <p className='text-gray-700'>
                            {new Date(project.startDate).toLocaleDateString(
                              'ru-RU',
                              {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              }
                            )}
                          </p>
                        </div>
                        {project.endDate && (
                          <div>
                            <h4 className='font-semibold mb-1'>
                              Планируемое завершение
                            </h4>
                            <p className='text-gray-700'>
                              {new Date(project.endDate).toLocaleDateString(
                                'ru-RU',
                                {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                }
                              )}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Прогресс */}
                      <div className='space-y-2'>
                        <div className='flex justify-between'>
                          <span className='font-medium'>
                            Прогресс подключения API
                          </span>
                          <span className='font-bold text-lg'>
                            {project.progressBackend}%
                          </span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-3'>
                          <div
                            className='bg-blue-600 h-3 rounded-full transition-all duration-300'
                            style={{ width: `${project.progressBackend}%` }}
                          />
                        </div>
                      </div>

                      {/* Ссылки */}
                      {(project.repository || project.figmaUrl) && (
                        <div>
                          <h4 className='font-semibold mb-2'>Ссылки</h4>
                          <div className='flex flex-wrap gap-2'>
                            {project.repository && (
                              <Button variant='outline' size='sm' asChild>
                                <a
                                  href={project.repository}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <Github className='h-4 w-4 mr-2' />
                                  Репозиторий
                                </a>
                              </Button>
                            )}
                            {project.figmaUrl && (
                              <Button variant='outline' size='sm' asChild>
                                <a
                                  href={project.figmaUrl}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <ExternalLink className='h-4 w-4 mr-2' />
                                  Макет
                                </a>
                              </Button>
                            )}

                            {project.chat && (
                              <Button variant='outline' size='sm' asChild>
                                <a
                                  href={project.chat}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <ExternalLink className='h-4 w-4 mr-2' />
                                  Чат
                                </a>
                              </Button>
                            )}

                            {project.boards && (
                              <Button variant='outline' size='sm' asChild>
                                <a
                                  href={project.boards}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <ExternalLink className='h-4 w-4 mr-2' />
                                  Доска
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
