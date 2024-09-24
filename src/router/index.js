import { createRouter, createWebHistory } from 'vue-router';
import CustomerList from '@/components/CustomerList.vue';
import CustomerForm from '@/components/CustomerForm.vue';
import ProductList from '@/components/ProductList.vue';  
import ProductForm from '@/components/ProductForm.vue';  
import OrderList from '@/components/OrderList.vue';     
import OrderForm from '@/components/OrderForm.vue';  
import OrderPreview from '@/components/OrderPreview.vue';    

const routes = [

  { path: '/', redirect: '/customers' },

  // Routes pour Customers
  { 
    path: '/customers', 
    component: CustomerList,
    name: 'customerList'
  },
  { 
    path: '/customers/new', 
    component: CustomerForm,
    name: 'customerNew'
  },
  { 
    path: '/customers/:id', 
    component: CustomerForm, 
    name: 'customerEdit'
  },

  // Routes pour Products
  { 
    path: '/products', 
    component: ProductList,
    name: 'productList'
  },
  { 
    path: '/products/new', 
    component: ProductForm,
    name: 'productNew'
  },
  { 
    path: '/products/:id', 
    component: ProductForm,
    name: 'productEdit'
  },

  // Routes pour Orders
  { 
    path: '/orders', 
    component: OrderList,
    name: 'orderList'
  },
  { 
    path: '/orders/new', 
    component: OrderForm,
    name: 'orderNew'
  },
  { 
    path: '/orders/:id/edit', 
    component: OrderForm,
    name: 'orderEdit'
  },
  { 
    path: '/orders/:id/preview', 
    component: OrderPreview,
    name: 'orderPreview'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
