<template>
  <router-link to="/modify_shutter">
    <div class="flex flex-col space-y-2 text-center">
      <h3 class="font-bold text-xl">Shutter</h3>
      <div>{{shutter.value}}</div>
    </div>
  </router-link>
</template>

<script>
import { useShutterStore } from './Store'

export default {
  name: 'ShutterMainMenu',

  setup() {
    return { shutter: useShutterStore().shutter }
  },
}
</script>
