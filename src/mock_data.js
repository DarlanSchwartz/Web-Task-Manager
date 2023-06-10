import { v4 as uuidv4 } from 'uuid';

const DATA = {
    boards: [
        {
            id:uuidv4(),
            boardTitle: 'Project Management',
            columns: [
                {
                    columnTitle: 'To Do',
                    color: 'red',
                    id:uuidv4(),
                    tasks: [
                        {
                            id:uuidv4(),
                            taskTitle: 'Implement User Authentication',
                            taskDescription: 'Implement a secure user authentication system using JWT.',
                            subtasks: [
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Research best authentication practices',
                                    done: true,
                                },
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Design database schema for users',
                                    done: false,
                                },
                            ],
                        },
                        {
                            id:uuidv4(),
                            taskTitle: 'Create Landing Page',
                            taskDescription: 'Design and develop an attractive landing page for the website.',
                            subtasks: [
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Gather inspiration from other websites',
                                    done: true,
                                },
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Design wireframes for the landing page',
                                    done: true,
                                },
                                {
                                    id:uuidv4(),
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
                    id:uuidv4(),
                    tasks: [
                        {
                            id:uuidv4(),
                            taskTitle: 'Implement Data Persistence',
                            taskDescription: 'Set up a database connection and implement data persistence for the application.',
                            subtasks: [
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Choose a suitable database technology',
                                    done: true,
                                },
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Create database models and tables',
                                    done: true,
                                },
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Implement CRUD operations',
                                    done: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    id:uuidv4(),
                    columnTitle: 'Done',
                    color: 'green',
                    tasks: [
                        {
                            id:uuidv4(),
                            taskTitle: 'Deploy to Production',
                            taskDescription: 'Prepare the application for production deployment and deploy it to a live server.',
                            subtasks: [
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Set up production environment',
                                    done: true,
                                },
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Optimize application for performance',
                                    done: true,
                                },
                                {
                                    id:uuidv4(),
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
            id:uuidv4(),
            boardTitle: 'Marketing Campaign',
            columns: [
                {
                    id:uuidv4(),
                    columnTitle: 'Ideas',
                    color: 'purple',
                    tasks: [
                        {
                            id:uuidv4(),
                            taskTitle: 'Social Media Strategy',
                            taskDescription: 'Create a comprehensive social media strategy for the marketing campaign.',
                            subtasks: [
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Identify target audience and platforms',
                                    done: false,
                                },
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Plan content calendar',
                                    done: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    id:uuidv4(),
                    columnTitle: 'Execution',
                    color: 'blue',
                    tasks: [
                        {
                            id:uuidv4(),
                            taskTitle: 'Create Engaging Content',
                            taskDescription: 'Develop creative and engaging content for social media posts and advertisements.',
                            subtasks: [
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Write catchy headlines and captions',
                                    done: false,
                                },
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Design eye-catching visuals',
                                    done: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    
                    id:uuidv4(),
                    columnTitle: 'Analysis',
                    color: 'orange',
                    tasks: [
                        {
                            id:uuidv4(),
                            taskTitle: 'Track Campaign Metrics',
                            taskDescription: 'Monitor and analyze key metrics to measure the success of the marketing campaign.',
                            subtasks: [
                                {
                                    id:uuidv4(),
                                    subtaskTitle: 'Set up tracking tools (Google Analytics)',
                                    done: false,
                                },
                                {
                                    id:uuidv4(),
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