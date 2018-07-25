import DB from "../data/projects.json";

// Project interface
export const getAllProjects = () => {
  return DB.projects
}

export const getById = (id) => {
  return DB.projects.filter(project => project.id === parseInt(id, 10))[0]
}

// Category interface
export const getAllCategories = () => {
  return DB.projects.map(project => project.category)
}
export const getByCategory = (category) => {
  return DB.projects.filter(project => project.category === category)
}
