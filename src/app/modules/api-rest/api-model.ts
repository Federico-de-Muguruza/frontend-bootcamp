export interface Project {
  id: number,
  name: string,
  members: Array<string>
  description: string,
  icon: string
}

export interface Epic {
  id: number,
  project: string,
  name: string,
  description: string,
  icon: string
}

export interface Story {
  id: number,
  assignedTo: Array<string>,
  points: number,
  status: string,
  name: string,
  description: string,
  epic: string,
  created: string
}

export interface Task {
  done: boolean,
  id: number,
  name: string,
  description: string,
  story: string,
  created: string,
  due: string  
}

export interface User {
  _id: string,
  username: string,
  name: {
    first: string,
    last: string
  },
  token: string
}

