export default `
<div style="display:flex;gap: 5px">
  <span class="decrease-counter"><img src='${new URL(
    'minus.png',
    import.meta.url,
  )}' width="20"></span>
  <span class="counter-value">0</span>
  <span class="increase-counter"
    style="
      background-image: url(http://localhost:3000/src/plus.png);
      width:20px; height: 20px;
      background-size:contain"></span>
</div>`
