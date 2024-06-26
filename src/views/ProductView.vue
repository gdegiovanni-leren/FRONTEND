<script setup>


import { onMounted, ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import { useProductStore } from '../stores/ProductsStore';
import { useRoute } from 'vue-router';
import { useAuthStore } from '../stores/AuthStore';
import { io } from "socket.io-client";

let addProduct = ref(false)
let comment = ref('')
const store = useProductStore()

const route = useRoute()
const productId = route.params.productId

let selectedProduct = null

//FIXME
try{
selectedProduct = store.products.payload.filter(element => element._id === String(productId))
}catch(e){
    console.log('products array not found, redirecting to home..')
    window.location.href = '/'
}

const authStore = useAuthStore()

/* SOCKETS */

const URL = `${import.meta.env.VITE_BASE_URL}`
console.log('trying to connect socket to', URL)
const socket = io(URL);
socket.on("connect", () => {
  console.log('connected')
});

socket.on("disconnect", () => {
  console.log('disconected')
});

socket.on('incoming_messages', messages => {
  console.log(selectedProduct[0])
  if(selectedProduct && selectedProduct[0]._id == messages._id){
    selectedProduct[0].comments = messages.comments
  }
})


async function addComment(_id) {

   const data = {
    product_id: _id,
    username: authStore.user.username,
    comment: comment.value
   }
   socket.emit('add_comment', data)
}


async function addToCart(_id){
  const result = await store.addToCart(selectedProduct[0]._id)
  if(result == true)  addProduct.value = true
}


onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This enables smooth scrolling
    });
})

</script>

<template>
    <Navbar></Navbar>
    <div v-if="selectedProduct" class="container mx-auto px-4 py-8">
        <div class="lg:flex">
            <!-- Shoe Image -->
            <div class="lg:w-1/2">
                <img  :src="selectedProduct[0].thumbnails ? selectedProduct[0].thumbnails[0] : '' " alt="Shoe" class="w-full h-auto object-contain">
            </div>

            <!-- Shoe Details -->
            <div class="lg:w-1/2 lg:pl-8">
                <h1 class="text-2xl font-bold mb-4">{{ selectedProduct[0].title }}</h1>
                <h2 class="text-1xl font-bold mb-4">{{ selectedProduct[0].description }}</h2>
                <h3 class="text-2xl font-bold mb-4">{{ selectedProduct[0].code }}</h3>

                <!-- Size Selector -->
                <div class="mb-4">
                    <label for="size" class="text-lg font-medium">Select Size:</label>
                    <select id="size"
                        class="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="7">39</option>
                        <option value="8">40</option>
                        <option value="9">41</option>
                        <option value="10">42</option>
                    </select>
                </div>

                <!-- Stock -->
                <p class="font-bold text-2xl mb-4">${{ selectedProduct[0].price }}</p>
                <p class="text-gray-600 text-2xl mt-2 mb-4">STOCK: <span class="font-bold">{{ selectedProduct[0].stock }}</span></p>

                <div v-if="(authStore.user.role == 'user' || authStore.user.role == 'premium') && parseInt(selectedProduct[0].stock) > 0">
                        <a @click="addToCart(selectedProduct[0]._id)"
                            :class="addProduct ? 'bg-green-600 disabled-link' : ''"
                            class="cursor-pointer flex items-center justify-center md:w-[412px] rounded-md bg-gray-900 px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>

                            {{ !addProduct ? 'Add to Cart' : 'Added to Cart'  }}
                        </a>
                </div>

                <div v-if="parseInt(selectedProduct[0].stock) <= 0" >
                <a
                    class=" disabled-link cursor-pointer flex items-center justify-center md:w-[412px] rounded-md bg-gray-900 px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>

                    {{ 'OUT OF STOCK' }}</a>
                </div>

            </div>
        </div>

        <!-- Comment Section -->
        <div class="mt-8">
            <h2 class="text-xl font-bold mb-4">Comments</h2>
            <div class="bg-white rounded shadow p-4">
                <!-- Single Comment -->
                <div v-for="comments in selectedProduct[0].comments" class="mb-4">
                    <h3 class="text-lg font-medium">{{ comments.user }}</h3>
                    <p class="text-gray-600 mb-2">{{ comments.text }}</p>
                    <p class="text-gray-500 text-sm">Posted on {{ comments.createdAt }}</p>
                </div>

                <!-- Comment Form -->
                    <form class="mt-4" @submit.prevent="addComment(selectedProduct[0]._id)">
                        <h3 class="text-lg font-medium mb-2">Leave a Comment</h3>
                        <textarea required v-model="comment" class="w-full h-24 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2
                            focus:ring-blue-500 rounded resize-none" placeholder="Write your comment here..."></textarea>
                        <div  v-if="authStore.user.role == 'user' || authStore.user.role == 'premium' " >
                           <button type="submit" class="mt-4 bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                        </div>
                    </form>

            </div>
        </div>
    </div>

</template>