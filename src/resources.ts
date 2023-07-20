export const resources = [
  {
    name: 'Tokens',
    routes: [
      {
        name: 'Generate token',
        description: '',
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
    name: 'Sessions',
    routes: [
      {
        name: 'Create session',
        description: '',
        route: '/sessions',
        method: 'post',
        headers: [
          {
            name: 'authorization',
            type: 'bearer | undefined for orbit users',
            required: false,
          },
        ],
        params: [],
        body: [
          {
            name: 'email',
            type: 'string',
            required: true,
          },
          {
            name: 'password',
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
  {
    name: 'Users',
    routes: [
      {
        name: 'Get user',
        description: '',
        route: '/applications/:applicationId/users/:id',
        method: 'get',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
          {
            name: 'id',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Fetch users',
        description: '',
        route: '/applications/:applicationId/users',
        method: 'get',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Create user',
        description: '',
        route: '/applications/:applicationId/users',
        method: 'post',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
        ],
        body: [
          {
            name: 'name',
            type: 'string',
            required: true,
          },
          {
            name: 'email',
            type: 'string',
            required: true,
          },
          {
            name: 'phone',
            type: 'string',
            required: false,
          },
        ],
      },
      {
        name: 'Update user',
        description: '',
        route: '/applications/:applicationId/users/:id',
        method: 'put',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
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
            name: 'email',
            type: 'string',
            required: false,
          },
          {
            name: 'phone',
            type: 'string',
            required: false,
          },
        ],
      },
      {
        name: 'Delete user',
        description: '',
        route: '/applications/:applicationId/users/:id',
        method: 'delete',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
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
  {
    name: 'Email verification',
    routes: [
      {
        name: 'Verify email',
        description: '',
        route: '/sessions',
        method: 'post',
        headers: [
          {
            name: 'authorization',
            type: 'bearer (token sent by email)',
            required: false,
          },
        ],
        params: [],
        body: [
          {
            name: 'password',
            type: 'string',
            required: true,
          },
        ],
      },
    ],
  },
  {
    name: 'Credentials',
    routes: [
      {
        name: 'Get credential',
        description: '',
        route: '/applications/:applicationId/credentials/:id',
        method: 'get',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
          {
            name: 'id',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Fetch credentials',
        description: '',
        route: '/applications/:applicationId/credentials',
        method: 'get',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Create credential',
        description: '',
        route: '/applications/:applicationId/credentials',
        method: 'post',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Delete credential',
        description: '',
        route: '/applications/:applicationId/credentials/:id',
        method: 'delete',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
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
  {
    name: 'Roles',
    routes: [
      {
        name: 'Get role',
        description: '',
        route: '/applications/:applicationId/roles/:id',
        method: 'get',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
          {
            name: 'id',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Fetch roles',
        description: '',
        route: '/applications/:applicationId/roles',
        method: 'get',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Create role',
        description: '',
        route: '/applications/:applicationId/roles',
        method: 'post',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
        ],
        body: [
          {
            name: 'name',
            type: 'string',
            required: true,
          },
        ],
      },
      {
        name: 'Update role',
        description: '',
        route: '/applications/:applicationId/roles/:id',
        method: 'put',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
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
        ],
      },
      {
        name: 'Delete role',
        description: '',
        route: '/applications/:applicationId/roles/:id',
        method: 'delete',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
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
  {
    name: 'Permissions',
    routes: [
      {
        name: 'Get permission',
        description: '',
        route: '/applications/:applicationId/permissions/:id',
        method: 'get',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
          {
            name: 'id',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Fetch permissions',
        description: '',
        route: '/applications/:applicationId/permissions',
        method: 'get',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Create permission',
        description: '',
        route: '/applications/:applicationId/permissions',
        method: 'post',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
        ],
        body: [
          {
            name: 'name',
            type: 'string',
            required: true,
          },
        ],
      },
      {
        name: 'Update permission',
        description: '',
        route: '/applications/:applicationId/permissions/:id',
        method: 'put',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
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
        ],
      },
      {
        name: 'Delete permission',
        description: '',
        route: '/applications/:applicationId/permissions/:id',
        method: 'delete',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
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
  {
    name: 'Routes',
    routes: [
      {
        name: 'Get route',
        description: '',
        route: '/applications/:applicationId/routes/:id',
        method: 'get',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
          {
            name: 'id',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Fetch routes',
        description: '',
        route: '/applications/:applicationId/routes',
        method: 'get',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Create route',
        description: '',
        route: '/applications/:applicationId/routes',
        method: 'post',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
        ],
        body: [
          {
            name: 'route',
            type: 'string',
            required: true,
          },
          {
            name: 'description',
            type: 'string',
            required: false,
          },
        ],
      },
      {
        name: 'Update route',
        description: '',
        route: '/applications/:applicationId/routes/:id',
        method: 'put',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
          {
            name: 'id',
            type: 'number',
            required: true,
          },
        ],
        body: [
          {
            name: 'route',
            type: 'string',
            required: false,
          },
          {
            name: 'description',
            type: 'string',
            required: false,
          },
        ],
      },
      {
        name: 'Delete route',
        description: '',
        route: '/applications/:applicationId/routes/:id',
        method: 'delete',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'applicationId',
            type: 'number',
            required: true,
          },
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
  {
    name: 'Resources',
    routes: [
      {
        name: 'Get resource',
        description: '',
        route: '/permissions/:permissionId/resources/:id',
        method: 'get',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'permissionId',
            type: 'number',
            required: true,
          },
          {
            name: 'id',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Fetch resources',
        description: '',
        route: '/permissions/:permissionId/resources',
        method: 'get',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'permissionId',
            type: 'number',
            required: true,
          },
        ],
        body: [],
      },
      {
        name: 'Create resource',
        description: '',
        route: '/permissions/:permissionId/resources',
        method: 'post',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'permissionId',
            type: 'number',
            required: true,
          },
        ],
        body: [
          {
            name: 'routeId',
            type: 'number',
            required: true,
          },
          {
            name: 'methods',
            type: 'string[] (GET, POST, PUT, PATCH, DELETE)',
            required: true,
          },
        ],
      },
      {
        name: 'Update resource',
        description: '',
        route: '/permissions/:permissionId/resources/:id',
        method: 'put',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'permissionId',
            type: 'number',
            required: true,
          },
          {
            name: 'id',
            type: 'number',
            required: true,
          },
        ],
        body: [
          {
            name: 'methods',
            type: 'string[] (GET, POST, PUT, PATCH, DELETE)',
            required: false,
          },
        ],
      },
      {
        name: 'Delete resource',
        description: '',
        route: '/permissions/:permissionId/resources/:id',
        method: 'delete',
        headers: [
          {
            name: 'authorization',
            type: 'bearer',
            required: true,
          },
        ],
        params: [
          {
            name: 'permissionId',
            type: 'number',
            required: true,
          },
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
