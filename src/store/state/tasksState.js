const tasksState = {
    tasks: [
      {
        id: 1,
        projectId: 1,
        title: 'Dashboard Design',
        members: [
          {
            name: 'Kyle Manalaysay',
            photo:
              'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          },
          {
            name: 'Chester Perez',
            photo:
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          },
          {
            name: 'Reywin Pascual',
            photo:
              'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
          },
        ],
        progress: 15,
      },
      {
        id: 2,
        projectId: 1,
        title: 'Mobile App Design',
        members: [
          {
            name: 'Kyle Manalaysay',
            photo:
              'https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          },
          {
            name: 'Ryan Peralta',
            photo:
              'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          },
          {
            name: 'Sarah Veloroso',
            photo:
              'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
          },
        ],
        progress: 100,

      },
    ],
    selectedTask: {},
  };
  
  export default tasksState;