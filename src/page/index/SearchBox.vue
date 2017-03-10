<template>
    <div class="search">
        <input type="text" :placeholder="holdName">
        <button><slot></slot></button>
    </div>
</template>

<script>
    import './SearchBox.scss'
    export default {
        props: ['holdName']
    }
</script>