<template>
    <div>
        <label 
            :for="id" 
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ label }}
        </label>
        <input 
            :name="name" 
            :type="type" 
            :id="id" 
            :value="inputValue"
            @input="handleChange"
            @blur="handleBlur"
            :placeholder="placeholder"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        />
        <p v-if="errorMessage" class="mt-2 text-red-500 text-xs italictext-red-600 dark:text-red-500">
          {{ errorMessage }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
});
const name = toRef(props, 'name');
const {value: inputValue, errorMessage, handleBlur, handleChange } = useField(name, undefined, {initialValue: props.value, });
</script>

<style>
</style>