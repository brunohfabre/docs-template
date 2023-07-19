export const resources = [
  {
    name: 'Applications',
    description: 'Get specific application',
    routes: [
      {
        name: 'Get application',
        route: '/applications/:id',
        method: 'get',
        headers: [
          {
            name: 'Authorization',
            type: 'string',
            required: true,
          },
        ],
        params: [
          {
            name: 'id',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Fetch applications',
        route: '/applications',
        method: 'get',
        headers: [
          {
            name: 'Authorization',
            type: 'string',
            required: true,
          },
        ],
        params: [],
        body: [],
      },
      {
        name: 'Create application',
        route: '/applications',
        method: 'post',
        headers: [
          {
            name: 'Authorization',
            type: 'string',
            required: true,
          },
        ],
        params: [],
        body: [
          {
            name: 'name',
            type: 'string',
            required: true,
          },
          {
            name: 'description',
            type: 'string',
            required: false,
          },
          {
            name: 'callbackUrl',
            type: 'string',
            required: false,
          },
        ],
      },
      {
        name: 'Update application',
        route: '/applications/:id',
        method: 'put',
        headers: [
          {
            name: 'Authorization',
            type: 'string',
            required: true,
          },
        ],
        params: [
          {
            name: 'id',
            type: 'number',
            required: true,
          },
        ],
        body: [
          {
            name: 'name',
            type: 'string',
            required: false,
          },
          {
            name: 'description',
            type: 'string',
            required: false,
          },
          {
            name: 'callbackUrl',
            type: 'string',
            required: false,
          },
        ],
      },
      {
        name: 'Delete application',
        route: '/applications/:id',
        method: 'delete',
        headers: [
          {
            name: 'Authorization',
            type: 'string',
            required: true,
          },
        ],
        params: [
          {
            name: 'id',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
    ],
  },
]
