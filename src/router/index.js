import { createRouter, createWebHistory } from 'vue-router';
import CustomerList from '@/components/CustomerList.vue';
import CustomerForm from '@/components/CustomerForm.vue';
import ProductList from '@/components/ProductList.vue';  
import ProductForm from '@/components/ProductForm.vue';  
import OrderList from '@/components/OrderList.vue';     
import OrderForm from '@/components/OrderForm.vue';  
import OrderPreview from '@/components/OrderPreview.vue';    

const routes = [
  { path: '/customers', component: CustomerList },
  { path: '/customers/new', component: CustomerForm },
  { path: '/customers/:id', component: CustomerForm },
  
  // Routes pour Products
  { path: '/products', component: ProductList },
  { path: '/products/new', component: ProductForm },
  { path: '/products/:id', component: ProductForm },
  
  // Routes pour Orders
  { path: '/orders', component: OrderList },
  { path: '/orders/new', component: OrderForm },
  { path: '/orders/:id', component: OrderForm },
  { path: '/order-form/:id?', component: OrderForm, name: 'orderForm' },
  { path: '/orders/:id/preview', component: OrderPreview }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
