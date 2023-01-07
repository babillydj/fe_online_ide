<template>
  <div class="flex p-4 gap-4 w-full h-full max-w-6xl">
    <div class="w-1/2 h-full flex flex-col gap-4">
      <span>Type Python code below</span>
      <div class="flex-grow border border-gray-400">
        <codemirror
            v-model="code"
            placeholder="Code goes here..."
            :style="{height: '100%'}"
            :autofocus="true"
            :indent-with-tab="true"
            :tab-size="2"
            :extensions="extensions"
            @ready="handleReady"
        />
      </div>
    </div>
    <div class="w-1/2 flex flex-col items-start gap-4">
      <span>Output</span>
      <div class="card border border-gray-400 w-full h-1/2 whitespace-pre-wrap">
        {{output}}
      </div>
      <button class="border border-gray-400" @click="runcode">run</button>
    </div>

  </div>
</template>
<script>
import { defineComponent, ref, shallowRef } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { python } from '@codemirror/lang-python'


import { doRequest, errorMessage } from "@/lib/request"
import { apiUrls } from "@/lib/request/urls"

export default defineComponent({
  name:'ExercisePage',
  components: {
    Codemirror
  },
  setup() {
    const code = ref(`print('Hello, world!')`)
    const extensions = [python()]

    // Codemirror EditorView instance ref
    const view = shallowRef()
    const handleReady = (payload) => {
      view.value = payload.view
    }

    const output = ref('Hello, World')
    const runcode = async () => {
      const payload = {
        url: apiUrls.runner,
        method: 'post',
        data: {
          code: code.value
        }
      }
      const response = await doRequest(payload)
      output.value = response.data.data.output
    }

    return {
      code,
      output,
      extensions,
      runcode,
      handleReady,
      log: console.log
    }
  }
})
</script>

<style lang="scss" scoped>
  img {
    height: 8em;
  }
</style>
