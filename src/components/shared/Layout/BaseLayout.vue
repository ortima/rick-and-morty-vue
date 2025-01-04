<template>
  <header class="container bg-secondary py-2">
    <slot name="header" />
  </header>

  <main>
    <slot />
  </main>

  <footer class="container bg-secondary py-2">
    <slot name="footer" />
  </footer>
</template>
