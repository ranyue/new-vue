<template>
    <div class="nav-bar">
        <ul>
            <li v-for="navname in navnames">
                <a :href="navname.linkto">{{navname.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import './NavBar.scss'
    export default {
        props: ["navnames"]

    }
</script>