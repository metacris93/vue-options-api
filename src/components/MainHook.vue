<template>
  <div class="container">
    <button @click="showText = !showText">Toggle Text</button>
    <h1 v-if="showText">Hello World</h1>
    <br />
    <button @click="add">Agregar</button>
    <button @click="remove">Eliminar</button>
    <ul class="list">
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MainHook",
  data() {
    return {
      list: [],
      row: 1,
      showText: false,
    };
  },
  methods: {
    add() {
      this.list.push(`Elemento ${this.row++}`);
    },
    remove() {
      if (this.row <= 0) return;
      this.list.pop();
      this.row--;
    },
  },
  beforeCreate() {
    console.log("beforeCreate", this.$data, this.$el);
  },
  created() {
    console.log("created", this.$data, this.$el);
  },
  beforeMount() {
    console.log("beforeMount", this.$data, this.$el);
  },
  mounted() {
    console.log("mounted", this.$data, this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.$data, this.$el);
  },
  updated() {
    console.log("updated", this.$data, this.$el);
  },
  beforeUnmount() {
    console.log("beforeUnmount", this.$data, this.$el);
  },
  unmounted() {
    console.log("unmounted", this.$data, this.$el);
  },
  errorCaptured: (err, vm, info) => {
    console.log("errorCaptured");
    console.log(err, vm, info);
  },
};
</script>
