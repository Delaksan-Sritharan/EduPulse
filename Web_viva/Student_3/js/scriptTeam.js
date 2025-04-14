document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll(".team-member");

    members.forEach(member => {
        member.addEventListener("mouseenter", () => {
            member.querySelector(".details").style.display = "block";
        });

        member.addEventListener("mouseleave", () => {
            member.querySelector(".details").style.display = "none";
        });

        // Make it work for keyboard navigation
        member.addEventListener("focus", () => {
            member.querySelector(".details").style.display = "block";
        });

        member.addEventListener("blur", () => {
            member.querySelector(".details").style.display = "none";
        });
    });
});
