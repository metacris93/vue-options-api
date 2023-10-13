<template>
  <div>
    <button @click="toggle">Modal</button>
    <teleport to="body">
      <div v-show="show" class="modal">
        <h2>Titulo</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          explicabo distinctio aperiam temporibus, ab quam numquam debitis
          laudantium aliquid alias delectus consequuntur vel repudiandae
          perferendis placeat laborum doloribus at maiores!
        </p>
        <button @click="toggle">OK</button>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
