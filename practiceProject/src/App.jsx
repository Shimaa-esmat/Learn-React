import { useState } from 'react';

import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {


  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });

  function handleAddTask(text){
    setProjectsState(prevState =>{
      const taskId = Math.random()
      const newTask = {
        text,
        id:taskId,
        projectId:prevState.selectedProjectId
      }
      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks]
      }
    })

  }

  function handledeleteTask(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=> task.id !== id
      )
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }


  function handleCancelAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState =>{
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id:projectId
      }
      return {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects,newProject]
      }
    })
  }

  function handelSelectProjec(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handledeleteProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project)=> project.id !== prevState.selectedProjectId
      )
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  console.log(projectsState)
  let content = <SelectedProject 
  onDelete={handledeleteProject}
  project={selectedProject}
  onAddTask={handleAddTask}
  onDeleteTask={handledeleteTask}
  tasks={projectsState.tasks}
  />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
      onStartAddProject={handleStartAddProject} 
      projects={projectsState.projects}
        onSelectProject={handelSelectProjec}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
