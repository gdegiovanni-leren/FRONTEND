<script setup>


import { onMounted, ref } from 'vue';
import Navbar from '../components/Navbar.vue';

import { useAuthStore } from '../stores/AuthStore';
import axios from "axios";

//let addProduct = ref(false)
let comment = ref('')
const authStore = useAuthStore()

let selectedProduct = null

/*
async function getProduct(_id) {

    try{
    const URL = `${import.meta.env.VITE_BASE_URL}api/products/${_id}`;
    const response = await axios.get(URL);
    return await response.data;

    }catch(e){
        console.log(e)
        //TODO: HANDLE ERROR
    }

 return null
}
*/

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This enables smooth scrolling
    });
})

</script>

<template>
    <Navbar></Navbar>
    <div class="container mx-auto px-4 py-8">
        <div class="lg:flex">
            <!-- Shoe Image -->
            <div class="lg:w-1/2">
                <img  :src="j" alt="Shoe" class="w-full h-auto object-contain">
            </div>

            <!-- Shoe Details -->
            <div class="lg:w-1/2 lg:pl-8">
                <h1 class="text-2xl font-bold mb-4">asd</h1>
                <h2 class="text-1xl font-bold mb-4">ghj</h2>
                <h3 class="text-2xl font-bold mb-4">ghj</h3>


                <div>
                <a @click="authStore.onRecoveryPassword"
                    class="cursor-pointer flex items-center justify-center md:w-[412px] rounded-md bg-gray-900 px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>

                    {{ 'ecove my passod' }}</a>
                </div>


            </div>
        </div>

        <!-- Comment Section -->

    </div>

</template>