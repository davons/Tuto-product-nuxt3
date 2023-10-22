<template>
    <div>
        <button 
            :disabled="disabled"
            :class="variant"
            class="btn"
            :type="type"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    type: {
        type: String as () => 'submit' | 'reset' | 'button',
        default: 'button' as const,
    },
    disabled: { 
        type: Boolean,
        default: false
    },
    variant: {
        type: String,
        default: ''
    }
});
</script>

<style>
</style>