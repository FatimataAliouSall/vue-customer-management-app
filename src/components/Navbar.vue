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
            <router-link
              to="/customers"
              class="nav-link text-dark"
              active-class="active"
            >
              <i class="fas fa-users"></i> Customers
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/products"
              class="nav-link text-dark"
              active-class="active"
            >
              <i class="fas fa-boxes"></i> Products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/orders"
              class="nav-link text-dark"
              active-class="active"
            >
              <i class="fas fa-shopping-cart"></i> Orders
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>
.nav-link:hover {
  color: #007bff !important; 
}
</style>
