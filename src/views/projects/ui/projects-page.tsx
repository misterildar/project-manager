import { projects } from "@/src/entities/project";
import { ProjectCard } from "@/src/widgets/project-card";
import styles from "./projects-page.module.scss";

export function ProjectsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Заголовок */}
        <div className={styles.header}>
          <h1 className={styles.title}>Фронтенд проекты в работе</h1>
        </div>

        {/* Сетка карточек */}
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
