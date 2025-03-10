function searchSections() {
    const searchQuery = document.getElementById("searchBox").value.toLowerCase();
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        const text = section.innerText.toLowerCase();
        section.style.display = text.includes(searchQuery) ? "block" : "none";
    });
}