<template>
    <div>
        <div class="relative overflow-x-auto">
            <div class="flex items-center justify-between">
                <h1 class="text-3xl my-4">
                    {{ isEditing ? 'Modifier un product' : 'Créer un product' }}
                </h1>
            </div>
        </div>
        <Form
            @submit="onSubmit"
            :validation-schema="schema"
            :initial-values="formValues" 
            class="mt-6"
        >
            <div class="grid gap-4 mb-4 sm:grid-cols-2 text-left">
                <div class="sm:col-span-2">
                    <BasesInputText 
                        name="name"
                        type="text"
                        label="Nom"
                        id="name"
                        placeholder="Nom du produit"
                    />
                </div>
                <div>
                    <BasesInputText 
                        name="brand"
                        type="text"
                        label="Marque"
                        id="brand"
                        placeholder="Marque du produit"
                    />
                </div>
                <div>
                    <BasesInputText 
                        name="price"
                        type="number"
                        label="Prix"
                        id="price"
                        placeholder="0"
                    />
                </div>
                <div class="sm:col-span-2"> 
                    <BasesInputFile 
                        name="image"
                        label="Image"
                        id="image"
                    />   
                </div>
                <div class="sm:col-span-2">
                    <BasesTextarea name="description"/>                  
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <BasesButton 
                    type='submit'
                    variant="btn-primary"
                >
                    {{ isEditing ? 'Modifier' : 'Créer' }}
                </BasesButton>
                <BasesButton 
                    type='button'
                    variant="btn-danger"
                    v-if="isEditing"
                >
                    <IconTrash class="mr-1 -ml-1"/>
                    Supprimer
                </BasesButton>
            </div>
        </Form>
    </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as yup from 'yup';

const props = defineProps({
    item: {
        type: Object,
        default: null
    },
    isEditing: {
        type: Boolean,
        default: false
    }
});
const emits = defineEmits(['create-product', 'update-product'])

let formValues = ref({})

if (props.item) {
    formValues.value = {
        ...props.item,
    };
}

async function onSubmit(values, { resetForm }) {
   if (props.isEditing) {
      emits('update-product', values);
   } else {
      emits('create-product', values);
      resetForm()
   }
}

const schema = yup.object().shape({
            name: yup.string().required(),
            brand: yup.string().required(),
            price: yup.string().required(),
            image: !props.isEditing? yup.string().required() :'',
            description: yup.string().required()
        });

</script>