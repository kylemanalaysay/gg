import userState from './userState';
import projectsState from './projectsState';
import tasksState from './tasksState';
import membersState from './membersState';

const initialState = {
  ...userState,
  ...projectsState,
  ...tasksState,
  ...membersState,
};

export default initialState;