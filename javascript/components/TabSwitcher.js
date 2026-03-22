export function openTab(event, tabName) {
    // Hide all tab contents
    const tabcontent = document.querySelectorAll(".tabcontent");
    tabcontent.forEach(content => {
        content.style.display = "none";
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll(".tablinks");
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    // Show selected tab content
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = "block";
    }

    // Add active class to clicked tab
    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }
}
