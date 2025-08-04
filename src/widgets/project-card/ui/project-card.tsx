import { useState } from "react";
import {
  Calendar,
  Users,
  Clock,
  ExternalLink,
  Github,
  Video,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/shared/ui/card";
import { Badge } from "@/src/shared/ui/badge";
import { Button } from "@/src/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/shared/ui/dialog";
import { Project, statusLabels, statusVariants } from "@/src/entities/project";
import styles from "./project-card.module.scss";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  const copyToClipboard = async (copyName: string) => {
    if (!navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(copyName);
      setCopiedContact(copyName);
      setTimeout(() => setCopiedContact(null), 2000);
    } catch {
      // обработка ошибки
    }
  };

  const statusVariantMap = {
    active: "success",
    completed: "info",
    paused: "warning",
  } as const;

  const getBadgeVariant = (status: Project["status"]) =>
    statusVariants[status] || "default";

  return (
    <Card className={styles.card}>
      <CardHeader>
        <div className={styles.header}>
          <CardTitle className={styles.title}>{project.title}</CardTitle>
          <Badge
            variant={getBadgeVariant(project.status)}
            className={styles.statusBadge}
          >
            {statusLabels[project.status]}
          </Badge>
        </div>
        <CardDescription className={styles.description}>
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className={styles.content}>
        {/* Прогресс верстка */}
        <div className={styles.progressSection}>
          <div className={styles.progressHeader}>
            <span>Верстка макета</span>
            <span>{project.progressFront}%</span>
          </div>
          <div className="progress">
            <div
              className="progress__indicator"
              style={{
                width: `${project.progressFront}%`,
              }}
            />
          </div>
        </div>

        {/* Информация */}
        <div className={styles.infoSection}>
          <div className={styles.infoItem}>
            <Users size={16} />
            <span>{project.team.length} участников</span>
          </div>
          <div className={styles.infoItem}>
            <Calendar size={16} />
            <span>
              {new Date(project.startDate).toLocaleDateString("ru-RU")}
            </span>
          </div>
          {project.endDate && (
            <div className={styles.infoItem}>
              <Clock size={16} />
              <span>
                до {new Date(project.endDate).toLocaleDateString("ru-RU")}
              </span>
            </div>
          )}
        </div>

        {/* Прогресс бэк */}
        <div className={styles.progressSection}>
          <div className={styles.progressHeader}>
            <span>Подключение backend</span>
            <span>{project.progressBackend}%</span>
          </div>
          <div className="progress">
            <div
              className="progress__indicator"
              style={{ width: `${project.progressBackend}%` }}
            />
          </div>
        </div>

        {/* Кнопка подробнее */}
        <Button
          fullWidth
          onClick={() => setIsDialogOpen(true)}
          style={{ marginTop: "20px" }}
        >
          Подробнее
        </Button>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <div className={styles.dialogHeader}>
                <DialogTitle>{project.title}</DialogTitle>
                <Badge variant={getBadgeVariant(project.status)}>
                  {statusLabels[project.status]}
                </Badge>
              </div>
              <DialogDescription>{project.description}</DialogDescription>
            </DialogHeader>

            <div className={styles.dialogContent}>
              {/* Прогресс */}
              <div className={styles.section}>
                <div className={styles.progressHeader}>
                  <span>Верстка макета</span>
                  <span className={styles.progressValue}>
                    {project.progressFront}%
                  </span>
                </div>
                <div className="progress progress--lg">
                  <div
                    className="progress__indicator"
                    style={{ width: `${project.progressFront}%` }}
                  />
                </div>
              </div>

              {/* Описание */}
              <div className={styles.section}>
                <h4>Описание проекта</h4>
                <p>{project.details}</p>
              </div>

              {/* Product Manager */}
              {project.productManager && (
                <div className={styles.section}>
                  <div
                    className={styles.contact}
                    onClick={() => copyToClipboard(project.productManager!)}
                  >
                    <span className={styles.contactLabel}>
                      Product Manager -{" "}
                    </span>
                    <p>{project.productManager}</p>
                    {copiedContact === project.productManager && (
                      <span className={styles.copyNotification}>
                        Скопировано в буфер обмена.
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Фронтенд Тимлид */}
              <div className={styles.section}>
                <div
                  className={styles.contact}
                  onClick={() => copyToClipboard(project.teamLeader)}
                >
                  <span className={styles.contactLabel}>
                    Фронтенд Тимлид -{" "}
                  </span>
                  <p>{project.teamLeader}</p>
                  {copiedContact === project.teamLeader && (
                    <span className={styles.copyNotification}>
                      Скопировано в буфер обмена.
                    </span>
                  )}
                </div>
              </div>

              {/* Команда */}
              <div className={styles.section}>
                <h4>Фронтенд разработчики</h4>
                <div className={styles.teamGrid}>
                  {project.team.map((member) => (
                    <Badge
                      key={member}
                      variant="outline"
                      className={styles.teamMember}
                      onClick={() => copyToClipboard(member)}
                    >
                      {member}
                    </Badge>
                  ))}
                  {copiedContact && project.team.includes(copiedContact) && (
                    <span
                      className={`${styles.copyNotification} ${styles.top}`}
                    >
                      Скопировано в буфер обмена.
                    </span>
                  )}
                </div>
              </div>

              {/* Бэкенд Тимлид */}
              {project.teamLeaderBack && (
                <div className={styles.section}>
                  <div
                    className={styles.contact}
                    onClick={() => copyToClipboard(project.teamLeaderBack!)}
                  >
                    <span className={styles.contactLabel}>
                      {project.backLanguage} Тимлид -{" "}
                    </span>
                    <p>{project.teamLeaderBack}</p>
                    {copiedContact === project.teamLeaderBack && (
                      <span className={styles.copyNotification}>
                        Скопировано в буфер обмена.
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Project Manager */}
              {project.projectManager && (
                <div className={styles.section}>
                  <div
                    className={styles.contact}
                    onClick={() => copyToClipboard(project.projectManager!)}
                  >
                    <span className={styles.contactLabel}>
                      Project Manager -{" "}
                    </span>
                    <p>{project.projectManager}</p>
                    {copiedContact === project.projectManager && (
                      <span className={styles.copyNotification}>
                        Скопировано в буфер обмена.
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Даты */}
              <div className={styles.datesGrid}>
                <div className={styles.dateSection}>
                  <h4>Дата начала</h4>
                  <p>
                    {new Date(project.startDate).toLocaleDateString("ru-RU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                {project.endDate && (
                  <div className={styles.dateSection}>
                    <h4>Планируемое завершение</h4>
                    <p>
                      {new Date(project.endDate).toLocaleDateString("ru-RU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                )}
              </div>

              {/* Митинг */}
              {project.meetingTime && (
                <div className={styles.section}>
                  <div className={styles.meetingSection}>
                    <h4>Еженедельный митинг</h4>
                    <div className={styles.meetingInfo}>
                      <Video size={16} />
                      <span>{project.meetingTime}</span>
                    </div>
                    {project.meetingUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.meetingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Video size={16} />
                          Присоединиться к встрече
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Прогресс бэкенд */}
              <div className={styles.section}>
                <div className={styles.progressHeader}>
                  <span>Подключение backend</span>
                  <span className={styles.progressValue}>
                    {project.progressBackend}%
                  </span>
                </div>
                <div className="progress progress--lg">
                  <div
                    className="progress__indicator"
                    style={{ width: `${project.progressBackend}%` }}
                  />
                </div>
              </div>

              {/* Ссылки */}
              {(project.repository ||
                project.figmaUrl ||
                project.chat ||
                project.boards) && (
                <div className={styles.section}>
                  <h4>Ссылки</h4>
                  <div className={styles.links}>
                    {project.repository && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                          Репозиторий
                        </a>
                      </Button>
                    )}
                    {project.figmaUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Макет
                        </a>
                      </Button>
                    )}
                    {project.chat && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.chat}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Чат
                        </a>
                      </Button>
                    )}
                    {project.boards && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.boards}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
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
  );
};
