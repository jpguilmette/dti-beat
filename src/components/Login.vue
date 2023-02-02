<template>
    <div>
        <div class="inline-flex">
            <label for="username">Username:</label>
            <input id="username" type="text" v-model="username" />
        </div>
        <div class="inline-flex">
            <label for="password">Password:</label>
            <input id="password" type="password" v-model="password" />
        </div>
        <button
            type="button"
            class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            Login
        </button>
    </div>
</template>

<script lang="ts" setup>
    let username: string;
    let password: string;
</script>
