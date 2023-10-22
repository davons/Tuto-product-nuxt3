<template>
    <div>
        <label 
            :for="id" 
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ label }}
        </label>
        <textarea 
            :id="id" 
            v-model="inputValue"
            @input="handleChange"
            :placeholder="placeholder"
            rows="5"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        >
        </textarea> 
        <p v-if="errorMessage" class="mt-2 text-red-500 text-xs italictext-red-600 dark:text-red-500">
          {{ errorMessage }}
        </p>    
    </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  value: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
});
const name = toRef(props, 'name');
const {value: inputValue, errorMessage, handleChange } = useField(name, undefined, {initialValue: props.value });
</script>

<style>
</style>