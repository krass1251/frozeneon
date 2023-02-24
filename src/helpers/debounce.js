export default function debounce(func, wait) {
  let timeout;
  console.log('debounce');

  return function executedFunction(...args) {
    console.log('executedFunction');
    const later = () => {
      timeout = null;
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
