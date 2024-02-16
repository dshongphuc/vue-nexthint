<template>
  <div class="vue-tab-complete-wrapper">
    <input
      v-model="resultQuery"
      type="text"
      class="vue-tab-complete-input"
      @keydown="onKeyDown"
      :placeholder="props.placeholder"
    >

    <div class="input-overlay">
      <span class="result-query">{{ resultQuery }}</span>
      <span class="result-suggest">{{ displayRelatedResult }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, computed, ref } from 'vue'

interface Props {
  suggestions: Array<string>
  placeholder: string
}

const props = withDefaults(defineProps<Props>(), {
  suggestions: () => [],
  placeholder: ''
})

const emit = defineEmits(['change'])

const resultQuery = ref('')

const mostRelatedResult = computed(() => {
  if (resultQuery.value === '') {
    return null
  }

  // find the most related reference, contains the query but in the beginning:
  const mostRelatedReference = props.suggestions.find((reference) => {
    return reference.toLowerCase().startsWith(resultQuery.value.toLowerCase())
  })

  return mostRelatedReference
})

const displayRelatedResult = computed(() => {
  if (resultQuery.value === '' || mostRelatedResult.value === null) {
    return null
  }

  return mostRelatedResult.value?.substring(resultQuery.value.length)
})

const onKeyDown = (event: any) => {
  if (event.key === 'Tab') {
    event.preventDefault()

    if(mostRelatedResult.value) {
      resultQuery.value = mostRelatedResult.value
    }
  }
}

watch(resultQuery, () => {
  emit('change', resultQuery.value)
})
</script>

<style lang="scss">
.vue-tab-complete-wrapper {
  position: relative;

  input {
    z-index: 10; 
    padding: 0.5rem; 
    padding-left: 14px;
    width: 100%; 
    height: 100%;
    color: #ffffff; 
    border-color: #CED7D0;
    caret-color: #63666c;
  }

  .input-overlay {
    position: absolute; 
    left: 0.75rem; 
    top: 50%;
    transform: translateY(-50%);

    .result-query {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem; 
      margin-left: 0.125rem; 
      color: #000000; 
    }

    .result-suggest {
      color: #9CA3AF; 
    }
  }
}
</style>