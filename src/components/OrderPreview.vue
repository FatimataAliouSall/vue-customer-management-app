<template>
    <div>
      <h2>Order Preview</h2>
      <p><strong>Date:</strong> {{ order.date }}</p>
      <p><strong>Customer:</strong> {{ order.customer }}</p>
      <p><strong>Delivery Address:</strong> {{ order.delivery_address }}</p>
      <p><strong>Tracking Number:</strong> {{ order.track_number }}</p>
      <p><strong>Status:</strong> {{ order.status }}</p>
  
      <h3>Order Details</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(detail, index) in orderDetails" :key="index">
            <td>{{ detail.product }}</td>
            <td>{{ detail.quantity }}</td>
            <td>{{ detail.price }}</td>
          </tr>
        </tbody>
      </table>
  
      <button @click="goBack">Back to Orders</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  
  const order = ref({});
  const orderDetails = ref([]);
  const orders = [
    { id: 1, date: "2024-07-26", customer: "John Doe", delivery_address: "4123 Main St", track_number: "TN001", status: "Delivered", details: [{ product: "Product A", quantity: 2, price: 100 }] },
    { id: 2, date: "2023-02-22", customer: "Jane Smith", delivery_address: "456 Oak St", track_number: "TN002", status: "Shipped", details: [{ product: "Product B", quantity: 3, price: 200 }] },
    { id: 3, date: "2022-04-27", customer: "Alice Martin", delivery_address: "789 Pine St", track_number: "TN003", status: "Processig", details: [{ product: "Product C", quantity: 32, price: 1000 }] },
  ];
  
  onMounted(() => {
    const id = parseInt(route.params.id);
    const existingOrder = orders.find(o => o.id === id);
    if (existingOrder) {
      order.value = { ...existingOrder };
      orderDetails.value = existingOrder.details; 
    }
  });
  
  const goBack = () => {
    router.push('/orders');
  };
  </script>
  