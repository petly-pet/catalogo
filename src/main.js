function showSection() {
    const sections = ["biofresh", "purina", "aaa"];
    const selected = document.getElementById("sectionSelector").value;

    sections.forEach(section => {
        document.getElementById(section).classList.add("hidden");
    });

    document.getElementById(selected).classList.remove("hidden");
}