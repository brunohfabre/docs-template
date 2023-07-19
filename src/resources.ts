export const resources = [
  {
    name: 'Tokens',
    routes: [
      {
        name: 'Generate token',
        route: '/token',
        method: 'post',
        headers: [],
        params: [],
        body: [
          {
            name: 'assertion',
            type: 'string',
            required: true,
          },
        ],
      },
    ],
  },
  {
    name: 'Applications',
    routes: [
      {
        name: 'Get application',
        description: 'Get specific application',
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
        description: '',
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
        description: '',
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
        description: '',
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
        description: '',
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
