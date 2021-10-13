<script setup lang="ts">
defineProps<{
  issue_number: string
}>();
</script>

<template>
  <div>
    <div>POST {{ issue_number }}</div>
    <!-- TODO implement post's details page -->
    <div>this page isn't implemented now!</div>
  </div>
</template>