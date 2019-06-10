export default (m) => {
    return `<div class="notification fixed-bottom alert alert-${m.style} fade show" role="alert">
      <h4>${m.text}</h4>
    </div>`
  }