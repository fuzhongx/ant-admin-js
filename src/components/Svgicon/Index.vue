<template>
    <svg :class="svgClass" aria-hidden="true" @click="svgClick">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
import { reactive,computed } from 'vue'
export default {
    props: {
    iconName: {
      type: String,
      required: true
    }
  },
  computed: {
    svgClass() {
      return `icon icon-${this.iconName}`;
    },
    iconName() {
      return `#icon-${this.iconName}`;
    }
  }
    
}
</script>

<style  scoped>
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>