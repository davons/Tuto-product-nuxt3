<template>
    <div class="px-4 mx-auto max-w-screen-xl text-center py-3 lg:py-3">
        <AdminProductForm />
    </div>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

definePageMeta({
  layout: "admin",
});

const { values, errors, defineComponentBinds , handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required()
  }),
});

const name = defineComponentBinds('name');
const price = defineComponentBinds('price');
const  description = defineComponentBinds('description');

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

</script>

<style>
</style>