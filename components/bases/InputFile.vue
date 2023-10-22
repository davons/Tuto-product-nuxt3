<template>
    <div>
        <label 
            :for="id"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
        >
            {{ label }}
        </label>
        <input 
              :id="id"
              :name="name"
              type="file"
              accept="image/*"
              @change="handleChange($event)"
        />
        <p v-if="errorMessage" class="mt-2  text-red-500 text-xs italictext-red-600 dark:text-red-500">
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
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  }
});
const name = toRef(props, 'name');
const {value: inputValue, errorMessage, handleChange } = useField(name);
</script>

<style>
</style>