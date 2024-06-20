const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <table>
      <tr>
        <th>Key</th>
        <th>Key Code</th>
        <th>Code</th>
      </tr>
      <tr>
        <td class="key">${e.key === ' ' ? 'Space' : e.key}</td>
        <td class="key">${e.keyCode}</td>
        <td class="key">${e.code}</td>
      </tr>
    </table>
    `;
});
