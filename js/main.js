document.addEventListener("DOMContentLoaded", () => {
    fetch("programs.json")
        .then(response => response.json())
        .then(programs => {
            const grid = document.getElementById("programGrid");
            programs.forEach(program => {
                const card = document.createElement("div");
                card.className = "program-card";
                card.innerHTML = `
          <img src="${program.icon}" alt="${program.name} 아이콘">
          <div class="program-title">${program.name}</div>
          <a href="${program.url}" class="download-btn" download>다운로드</a>
        `;
                grid.appendChild(card);
            });
        })
        .catch(err => {
            console.error("프로그램 목록을 불러오는 데 실패했습니다.", err);
        });
});
