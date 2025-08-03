'use client';

import { useEffect, useState } from 'react';
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
import { Project, projects } from './mockDataProject';

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

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (copyName: string) => {
    if (!navigator.clipboard) return; // нет поддержки
    try {
      await navigator.clipboard.writeText(copyName);
      setCopied(true);
    } catch {
      // можно обработать ошибку здесь
    }
  };

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

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
                    <span className='text-gray-600'>Подключение backend</span>
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
                      style={{ backgroundColor: '#cbd5e1' }}
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
                          <span className='font-medium'>Верстка макета</span>
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

                      {/* projectManager */}
                      {project.productManager && (
                        <div
                          className='flex gap-2'
                          // onClick={() => copyToClipboard(project.teamLeader)}
                        >
                          <h4
                            className='font-semibold mb-2'
                            style={{ position: 'relative' }}
                          >
                            Product Manager -{' '}
                          </h4>
                          <p>{project.productManager}</p>
                          {/* {copied && (
                          <span
                            className='text-green-500'
                            style={{ position: 'absolute', right: '0' }}
                          >
                            Скопировано в буфер обмена.
                          </span>
                        )} */}
                        </div>
                      )}

                      {/* Тимлид */}
                      <div
                        className='flex gap-2'
                        onClick={() => copyToClipboard(project.teamLeader)}
                      >
                        <h4
                          className='font-semibold mb-2'
                          style={{ position: 'relative' }}
                        >
                          Фронтенд Тимлид -{' '}
                        </h4>
                        <p>{project.teamLeader}</p>
                        {copied && (
                          <span
                            className='text-green-500'
                            style={{ position: 'absolute', right: '0' }}
                          >
                            Скопировано в буфер обмена.
                          </span>
                        )}
                      </div>

                      {/* Команда */}
                      <div>
                        <h4 className='font-semibold mb-2'>
                          Фронтенд разработчики
                        </h4>
                        <div
                          className='flex flex-wrap gap-2'
                          style={{ position: 'relative' }}
                        >
                          {project.team.map((member) => (
                            <Badge
                              key={member}
                              variant='outline'
                              className='px-3 py-1'
                              // onClick={() => copyToClipboard(member)}
                            >
                              {member}
                            </Badge>
                          ))}
                          {/* {copied && (
                            <span
                              className='text-green-500'
                              style={{ position: 'absolute', right: '0' }}
                            >
                              Скопировано в буфер обмена.
                            </span>
                          )} */}
                        </div>
                      </div>

                      {/* Ответственный за бэкенд */}
                      {project.teamLeaderBack && (
                        <div
                          className='flex gap-2'
                          // onClick={() => copyToClipboard(project.teamLeader)}
                        >
                          <h4
                            className='font-semibold mb-2'
                            style={{ position: 'relative' }}
                          >
                            {project.backLanguage} Тимлид -{' '}
                          </h4>
                          <p>{project.teamLeaderBack}</p>
                          {/* {copied && (
                          <span
                            className='text-green-500'
                            style={{ position: 'absolute', right: '0' }}
                          >
                            Скопировано в буфер обмена.
                          </span>
                        )} */}
                        </div>
                      )}

                      {/* projectManager */}
                      {project.projectManager && (
                        <div
                          className='flex gap-2'
                          // onClick={() => copyToClipboard(project.teamLeader)}
                        >
                          <h4
                            className='font-semibold mb-2'
                            style={{ position: 'relative' }}
                          >
                            Project Manager -{' '}
                          </h4>
                          <p>{project.projectManager}</p>
                          {/* {copied && (
                          <span
                            className='text-green-500'
                            style={{ position: 'absolute', right: '0' }}
                          >
                            Скопировано в буфер обмена.
                          </span>
                        )} */}
                        </div>
                      )}

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
                            Подключение backend
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
