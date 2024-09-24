


<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink
              :class="['nav-link text-dark', { active: activeRoute === '/customers' }]"
              to="/customers"
              @click="setActiveRoute('/customers')"
            >
              <i class="fas fa-users"></i> Customers
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :class="['nav-link text-dark', { active: activeRoute === '/products' }]"
              to="/products"
              @click="setActiveRoute('/products')"
            >
              <i class="fas fa-boxes"></i> Products
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :class="['nav-link text-dark', { active: activeRoute === '/orders' }]"
              to="/orders"
              @click="setActiveRoute('/orders')"
            >
              <i class="fas fa-shopping-cart"></i> Orders
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const activeRoute = ref(""); 
const route = useRoute(); 

const setActiveRoute = (path) => {
  activeRoute.value = path;
};

activeRoute.value = route.path;
</script>

<style scoped>
.nav-link.active {
  color: #007bff !important;
}

.nav-link:hover {
  color: #007bff !important;
}
</style>

