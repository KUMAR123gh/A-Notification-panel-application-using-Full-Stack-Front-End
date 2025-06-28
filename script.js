document.getElementById('mark-all').addEventListener('click', () => {
  const notifications = document.querySelectorAll('.notification.unread');
  notifications.forEach(n => n.classList.remove('unread'));
  document.getElementById('unread-count').textContent = '0';
});
document.querySelectorAll('.notification.unread').forEach(notification => {
  notification.addEventListener('click', function () {
    if (this.classList.contains('unread')) {
      this.classList.remove('unread');
      const countElem = document.getElementById('unread-count');
      let count = parseInt(countElem.textContent);
      countElem.textContent = Math.max(0, count - 1);
    }
  });
});
