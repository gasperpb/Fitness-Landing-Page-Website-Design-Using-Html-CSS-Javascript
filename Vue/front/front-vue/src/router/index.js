import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';


const routes = [
  {
    path: '/',
    name: 'Create New Employee',
    component: ()=> import('../components/create-employee/CreateEmployeeComponent'),
  },
  {
    path: '/list-employee',
    name: 'List All Employee',
   
    component: () => import('../components/list-employee/ListEmployeeComponent')
  },
  {
    path: '/Edit-employee',
    name: 'Update Employee',
   
    component: () => import('../components/edit-employee/EditEmployeeComponent')
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.Base_url),
  routes,
});
router.beforeResolve((to, from,next)=> {
  if (to.name){
    NProgress.start();
  }
  next();
});
router.afterEach(()=>{});

export default router;
