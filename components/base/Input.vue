<template>
    <div>
        <label 
            :for="id" 
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ label }}
        </label>
        <input 
            :type="type" 
            :name="name" 
            :id="id" 
            :value="modelValue" 
            @input="emits('update:modelValue', $event.target?.value)"
            :placeholder="placeholder"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: {
    type: string;
    required: true;
  },
  name: string
  label: string
  placeholder: string
  type: string
  id: string
}>();
const emits = defineEmits(["update:modelValue"]);
</script>

<style>
</style>