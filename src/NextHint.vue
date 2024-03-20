<template>

  <div ref="nexthintRef" class="vue-tab-complete-wrapper">
    <input
      v-model="resultQuery"
      type="text"
      class="vue-tab-complete-input"
      @keydown="onKeyDown"
      :placeholder="props.placeholder"
    >

    <div class="input-overlay">
      <span class="result-query">{{ resultQuery }}</span>
      <span class="result-suggest">
        {{ displayRelatedResult }}

        <span class="swiper" v-if="displayRelatedResult && browserWidth < 768">
          swipe 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>

        </span>
      </span>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, computed, ref } from 'vue'
import { useSwipe, useWindowSize } from '@vueuse/core'

interface Props {
  suggestions: Array<string>
  placeholder: string
}

const props = withDefaults(defineProps<Props>(), {
  suggestions: () => [],
  placeholder: ''
})

const emit = defineEmits(['change'])

const nexthintRef = ref(null)
const { width: browserWidth } = useWindowSize()
const { direction } = useSwipe(nexthintRef)

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

watch(direction, (newDirection) => {
  if (newDirection === 'right') {
    if(mostRelatedResult.value) {
      resultQuery.value = mostRelatedResult.value
    }
    
  }
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

      .swiper {
        position: relative;
        margin-left: .8rem; 
        font-size: .8rem;
        color: #cfd0d1; 

        svg {
          position:absolute;
          top: -2px;
          right: -60%;
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>