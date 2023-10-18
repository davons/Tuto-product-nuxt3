<template>
    <div>
        <button 
            :type="type"
            :disabled="disabled"
            :class="variant"
            class="btn"
            v-bind="$attrs"
        >
            <slot />
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  type: 'submit';
  disabled: boolean;
  variant: string;
}>();
</script>

<style>
</style>