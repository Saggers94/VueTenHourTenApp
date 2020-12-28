import { onMounted, onUnmounted } from "vue";

// This is a hook that we have created through the composition api

export default function useWindowEvent(eventName, handleEvent) {
  onMounted(() => {
    window.addEventListener(eventName, handleEvent);
  });

  onUnmounted(() => {
    window.removeEventListener(eventName, handleEvent);
  });
}
