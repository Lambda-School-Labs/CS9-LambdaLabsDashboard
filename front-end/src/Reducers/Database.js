const initialState = {
	projects: [],
	classes: [
    {
      _id: 'alskdjf',
      name: 'CS9',
      projects: ['Labs Dashboard', 'Hello', 'Goodbye']
    },
    {
      _id: 'alskdjf',
      name: 'CS10',
      projects: ['Labs Dashboard', 'Hello', 'Goodbye']
    },
    {
      _id: 'alskdjf',
      name: 'CS11',
      projects: ['Labs Dashboard', 'Hello', 'Goodbye']
    },
    {
      _id: 'alskdjf',
      name: 'CS9',
      projects: ['Labs Dashboard', 'Hello', 'Goodbye']
    },
    {
      _id: 'alskdjf',
      name: 'CS10',
      projects: ['Labs Dashboard', 'Hello', 'Goodbye']
    },
    {
      _id: 'alskdjf',
      name: 'CS11',
      projects: ['Labs Dashboard', 'Hello', 'Goodbye']
    }
  ], 
	createError: false
}

export default (state=initialState, action) => {
	switch(action.type) {
		case 'CREATE_PROJECT':
			return Object.assign({}, state, { projects: [...state.projects, action.newProject ] });
		case 'CREATE_CLASS':
			return Object.assign({}, state, { classes: [...state.classes, action.newClass ] });
		case 'UPDATE_CLASS_PAYLOAD':
			return Object.assign({}, state, { classes: action.classes });
		default:
			return state;
	}
}