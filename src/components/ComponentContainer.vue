<template>
  <div class="my-component vue">
    <h3>{{ headline }}</h3>
    <div class="component__container" ref="wrapperEl"></div>
    <button @click="startLibrary" v-if="!hasContent">
      Add library content
    </button>
    <button @click="stopLibrary" v-if="hasContent">
      Remove library content
    </button>
  </div>
</template>
<script>
import thirdPartyLibrary from "../modules/third-party-library";
import { mountComponent } from "../modules/mount-component.js";
import { MyOtherComponent } from "../modules/my-other-component.js";

export default {
  name: "ComponentContainer",
  data() {
    return {
      headline: "Hello from Component Container!",
      childComponent: null,
      // hasContent: false,
    };
  },
  computed: {
    hasContent() {
      return !!this.childComponent;
    },
  },
  methods: {
    startLibrary() {
      thirdPartyLibrary.init(this.$refs.wrapperEl).then(() => {
        const nestingContainerEl = this.$refs.wrapperEl.querySelector(".nesting-container");
        this.childComponent = mountComponent(MyOtherComponent, {
          element: nestingContainerEl,
        });
      });
      // .then(() => (this.hasContent = true));
    },
    stopLibrary() {
      if (this.hasContent) {
        // destroy our mounted vue component
        this.childComponent.destroy();
        this.childComponent = null;

        // clean up third party library
        thirdPartyLibrary.destroy(this.$refs.wrapperEl);
        // this.hasContent = false;
      }
    },
  },
  // don't forget to remove any elements and event listeners etc.
  // that were created by the third party library
  // before the vue component gets removed
  beforeUnmount() {
    console.log("beforeUnmount", this.$data, this.$el);
    this.stopLibrary();
  }
};
</script>
