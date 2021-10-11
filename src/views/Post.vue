<script setup lang="ts">
defineProps<{
    issue_number: string
}>();
</script>

<template>POST {{ issue_number }}</template>