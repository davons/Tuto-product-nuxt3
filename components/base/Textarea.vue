<template>
    <div>
        <label 
            :for="id" 
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ label }}
        </label>
        <textarea 
            :id="id" 
            :name="name" 
            :placeholder="placeholder"
            :value="modelValue" 
            v-bind="$attrs"
            @input="emits('update:modelValue', $event.target?.value)"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        >
        </textarea>     
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  name: string
  label: string
  placeholder: string
  id: string
}>();
const emits = defineEmits(["update:modelValue"]);
</script>

<style>
</style>