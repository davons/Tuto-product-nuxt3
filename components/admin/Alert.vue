<template>
    <div
        v-if="display"
        class="rounded py-4 px-4 my-2 text-sm text-left"
        :class="variant"
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
    variant: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: ''
    },
});
</script>
