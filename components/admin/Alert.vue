<template>
    <div
        v-if="display"
        class="bg-green-100 rounded py-4 px-4 my-2 text-green-700 text-sm text-left"
        role="status"
    >
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
    display: {
        type: Boolean,
        default: false
    },
    message: {
        type: String,
        default: ''
    },
});
</script>
