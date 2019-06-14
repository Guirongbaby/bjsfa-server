const Mock = require('mockjs');
let data = Mock.mock({
  "permission|321": [{
    "id|+1": 1000,
    pId: 0,
    type: Mock.Random.pick(['menu', 'route']),
    des: '@cword(3)',
    status: 0,
    del: 0,
    subon: '2019-05-08 17:07:16',
    subby: 1001,
    "code|+1": 10000,
    url: ''
  }],
  "users": [{
    id: 1000,
    username: 'wyd',
    password: 'aicoder.com',
    del: false,
    active: true, //  激活
    avatar: 'http://192.168.1.130:8888/server/img/a1.png',
    name: "张三",
    school: '清华大学',
    mail: '',
    phone: '189222222',
    isTeacher: true
  }, {
    id: 1001,
    username: 'ngr',
    password: 'aicoder.com',
    del: false,
    active: true, //  激活
    avatar: 'http://192.168.1.130:8888/server/img/a1.png',
    name: "李思",
    school: '清华大学',
    mail: '',
    phone: '189222222',
    isTeacher: false
  }, {
    id: 1002,
    username: 'admin',
    password: 'aicoder.com',
    del: false,
    active: true, //  激活
    avatar: 'http://192.168.1.130:8888/server/img/a1.png',
    name: "李思",
    school: '清华大学',
    mail: 'Random.email()',
    phone: '189222222',
    isTeacher: true
  }, {
    id: 1003,
    username: 'admin1',
    password: 'aicoder.com',
    del: false,
    active: true, //  激活
    avatar: 'http://192.168.1.130:8888/server/img/a1.png',
    name: "李思",
    school: '清华大学',
    mail: 'Random.email()',
    phone: '189222222',
    isTeacher: true
  }],
  role: [{
    id: 5,
    pid: 0,
    name: '超级管理员',
    des: '超级管理员',
    subon: '2019-05-08 16:54:26',
    status: 0,
    del: 0
  },{
    id: 1,
    pid: 0,
    name: '管理员',
    des: '管理员',
    subon: '2019-05-08 16:54:26',
    status: 0,
    del: 0
  },{
    id: 2,
    pid: 0,
    name: '后台开发员',
    des: '后台开发员',
    subon: '2019-05-08 16:54:26',
    status: 0,
    del: 0
  },{
    id: 3,
    pid: 0,
    name: '教师',
    des: '教师',
    subon: '2019-05-08 16:54:26',
    status: 0,
    del: 0
  },{
    id: 4,
    pid: 0,
    name: '学生',
    des: '学生',
    subon: '2019-05-08 16:54:26',
    status: 0,
    del: 0
  }],
  user_role: [{
    id: 1,
    userId: 1003,
    roleId: 1,
    del: 0,
    subon: '2019-05-08 16:57:50'
  }, {
    id: 2,
    userId: 1002,
    roleId: 5,
    del: 0,
    subon: '2019-05-08 16:57:50'
  }, {
    id: 3,
    userId: 1000,
    roleId: 3,
    del: 0,
    subon: '2019-05-08 16:57:50'
  }, {
    id: 4,
    userId: 1001,
    roleId: 4,
    del: 0,
    subon: '2019-05-08 16:57:50'
  }],
  user_permission: [
    {
      id: 1,
      userId: 1002,
      permissionId: 2,
      del: 0,
      subOn: '2019-06-10 09:48:01'
    }
  ],
  role_permission: [{
    id: 1,
    roleId: 1,
    permissionId: 2,
    del: 0,
    subOn: '2019-06-10 09:49:23'
  }],
  menu: [{
    id: 1,
    order: 1,
    title: '学生管理',
    des: '学生管理',
    url: '/student',
    del: 0,
    status: 0,
    pid: 0,
    permissionId: 1
  }, {
    id: 2,
    order: 2,
    title: '教师管理',
    des: '教师管理',
    url: '/teacher',
    del: 0,
    status: 0,
    pid: 0,
    permissionId: 2
  },{
    id: 3,
    order: 3,
    title: '学生列表',
    des: '学生列表',
    url: '/student/list',
    del: 0,
    status: 0,
    pid: 1,
    permissionId: 3
  }, ],
  resource:[{
    id: 1,
    pid: 0,
    del: 0,
    status: 0,
    type: 'button',
    permissionCode: 6,
    permissionId: 6
  }]
});

// console.log(JSON.stringify(data));
module.exports = data;
