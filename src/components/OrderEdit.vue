<template>
    <div>
      <h2>Edit Order</h2>
  
      <form @submit.prevent="updateOrder">
       
        <div class="mb-3">
          <label for="date" class="form-label"><strong>Date:</strong></label>
          <input type="date" id="date" v-model="order.date" class="form-control" />
        </div>
  
        
        <div class="mb-3">
          <label for="customer" class="form-label"><strong>Customer:</strong></label>
          <input type="text" id="customer" v-model="order.customer" class="form-control" />
        </div>
  
        
        <div class="mb-3">
          <label for="delivery_address" class="form-label"><strong>Delivery Address:</strong></label>
          <input type="text" id="delivery_address" v-model="order.delivery_address" class="form-control" />
        </div>
  
       
        <div class="mb-3">
          <label for="track_number" class="form-label"><strong>Tracking Number:</strong></label>
          <input type="text" id="track_number" v-model="order.track_number" class="form-control" />
        </div>
  
        <div class="mb-3">
          <label for="status" class="form-label"><strong>Status:</strong></label>
          <input type="text" id="status" v-model="order.status" class="form-control" />
        </div>
  
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
              <td><input type="text" v-model="detail.product" class="form-control" /></td>
              <td><input type="number" v-model="detail.quantity" class="form-control" /></td>
              <td><input type="number" v-model="detail.price" class="form-control" /></td>
            </tr>
          </tbody>
        </table>
  
        
        <button type="submit" class="btn btn-success mt-3">Save Changes</button>
  
        <button @click="goBack" type="button" class="btn btn-secondary mt-3">Cancel</button>
      </form>
    </div>
  </template>


<script setup>
import { ref, onMounted } from 'vue';
import {  useRouter } from 'vue-router';

const router = useRouter();  

const order = ref({});  
const orderDetails = ref([]);  


const orders = [
  { id: 1, date: "2024-07-26", customer: "John Doe", delivery_address: "4123 Main St", track_number: "TN001", status: "Delivered", details: [{ product: "Product A", quantity: 2, price: 100 }] },
  { id: 2, date: "2023-02-22", customer: "Jane Smith", delivery_address: "456 Oak St", track_number: "TN002", status: "Shipped", details: [{ product: "Product B", quantity: 3, price: 200 }] },
  { id: 3, date: "2022-04-27", customer: "Alice Martin", delivery_address: "789 Pine St", track_number: "TN003", status: "Processing", details: [{ product: "Product C", quantity: 32, price: 1000 }] },
];


onMounted(() => {
  const id = parseInt(route.params.id); 
  const existingOrder = orders.find(o => o.id === id);
  if (existingOrder) {
    order.value = { ...existingOrder };
    orderDetails.value = [...existingOrder.details];
  }
});

const goBack = () => {
  router.push('/orders');
};

const updateOrder = () => {
  console.log("Order updated:", order.value, orderDetails.value);
  goBack();
};
</script>
