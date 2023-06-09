const DATA = {
    boards: [
        {
            boardTitle: 'Project Management',
            columns: [
                {
                    columnTitle: 'To Do',
                    color: 'red',
                    tasks: [
                        {
                            taskTitle: 'Implement User Authentication',
                            taskDescription: 'Implement a secure user authentication system using JWT.',
                            subtasks: [
                                {
                                    subtaskTitle: 'Research best authentication practices',
                                    done: true,
                                },
                                {
                                    subtaskTitle: 'Design database schema for users',
                                    done: false,
                                },
                            ],
                        },
                        {
                            taskTitle: 'Create Landing Page',
                            taskDescription: 'Design and develop an attractive landing page for the website.',
                            subtasks: [
                                {
                                    subtaskTitle: 'Gather inspiration from other websites',
                                    done: true,
                                },
                                {
                                    subtaskTitle: 'Design wireframes for the landing page',
                                    done: true,
                                },
                                {
                                    subtaskTitle: 'Code the HTML and CSS for the page',
                                    done: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    columnTitle: 'In Progress',
                    color: 'yellow',
                    tasks: [
                        {
                            taskTitle: 'Implement Data Persistence',
                            taskDescription: 'Set up a database connection and implement data persistence for the application.',
                            subtasks: [
                                {
                                    subtaskTitle: 'Choose a suitable database technology',
                                    done: true,
                                },
                                {
                                    subtaskTitle: 'Create database models and tables',
                                    done: true,
                                },
                                {
                                    subtaskTitle: 'Implement CRUD operations',
                                    done: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    columnTitle: 'Done',
                    color: 'green',
                    tasks: [
                        {
                            taskTitle: 'Deploy to Production',
                            taskDescription: 'Prepare the application for production deployment and deploy it to a live server.',
                            subtasks: [
                                {
                                    subtaskTitle: 'Set up production environment',
                                    done: true,
                                },
                                {
                                    subtaskTitle: 'Optimize application for performance',
                                    done: true,
                                },
                                {
                                    subtaskTitle: 'Configure domain and SSL certificate',
                                    done: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            boardTitle: 'Marketing Campaign',
            columns: [
                {
                    columnTitle: 'Ideas',
                    color: 'purple',
                    tasks: [
                        {
                            taskTitle: 'Social Media Strategy',
                            taskDescription: 'Create a comprehensive social media strategy for the marketing campaign.',
                            subtasks: [
                                {
                                    subtaskTitle: 'Identify target audience and platforms',
                                    done: false,
                                },
                                {
                                    subtaskTitle: 'Plan content calendar',
                                    done: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    columnTitle: 'Execution',
                    color: 'blue',
                    tasks: [
                        {
                            taskTitle: 'Create Engaging Content',
                            taskDescription: 'Develop creative and engaging content for social media posts and advertisements.',
                            subtasks: [
                                {
                                    subtaskTitle: 'Write catchy headlines and captions',
                                    done: false,
                                },
                                {
                                    subtaskTitle: 'Design eye-catching visuals',
                                    done: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    columnTitle: 'Analysis',
                    color: 'orange',
                    tasks: [
                        {
                            taskTitle: 'Track Campaign Metrics',
                            taskDescription: 'Monitor and analyze key metrics to measure the success of the marketing campaign.',
                            subtasks: [


                                {
                                    subtaskTitle: 'Set up tracking tools (Google Analytics)',
                                    done: false,
                                },
                                {
                                    subtaskTitle: 'Define KPIs and goals',
                                    done: false,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default DATA;