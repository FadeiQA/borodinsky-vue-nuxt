<template>
  <a class="button" :href="to" :class="classButton" @click.prevent="handleClick">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    types: {
      type: Array,
      default: () => []
    },
    to: {
      type: String,
      default: ''
    }
  },
  computed: {
    classButton() {
      return this.types.length ? this.types.map((a) => `button_${a}`) : ''
    },
  },
  methods : {
    handleClick() {
      if (this.to) {
        return this.$router.push(this.to)
      }
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">

.button {
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  color: inherit;
  box-sizing: border-box;

  &_black {
    color: white;
    background: black;
    min-width: 140px;
    padding: 10px 33px;
  }

  &_long {
    display: block;
    width: 100%;
  }

  &_disabled {
    pointer-events: none;
    opacity: .5;
  }

  &_white-hover:hover {
    background: white;
    color: black;
  }

  &_brown-hover:hover {
    background: #663d15;
  }
}
</style>
