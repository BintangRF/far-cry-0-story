<template>
  <div class="flex flex-col min-h-screen bg-custom-mafia-black">
    <Navbar />
    <ScrollToTop />
    <main class="flex-1 mx-auto text-justify py-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>
