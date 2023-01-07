<template>
  <div class="flex flex-col gap-6">
    <div class="flex gap-4">
      <div class="flex flex-col">
        <span>name</span>
        <span>language</span>
        <span>duration</span>
        <span>price</span>
      </div>
      <div class="flex flex-col">
        <span v-for="key,idx of Object.keys(detail)" :key="idx">: {{detail[key]}}</span>
      </div>
    </div>
    <button class="border border-gray-400 w-40" @click="gotoExercise">start now</button>
  </div>
</template>

<script>
import { doRequest, errorMessage } from "@/lib/request"
import { apiUrls } from "@/lib/request/urls"

export default {
  name: 'DetailPage',
  setup() {},
  data() {
    return {
      detail: {}
    };
  },
  mounted() {
    this.getCourseDetail()
  },
  methods: {
    async getCourseDetail() {
      const id = this.$route.params.id
      const payload = {
        url: apiUrls.courseDetail(id),
        method: 'get',
        data: {}
      }
      const response = await doRequest(payload)
      this.detail = {
        name: response.data.name,
        language: response.data.language,
        duration: response.data.duration,
        price: response.data.price,
      }
    },
    gotoExercise() {
      this.$router.push({path: '/exercise'})
    }
  }
};
</script>
