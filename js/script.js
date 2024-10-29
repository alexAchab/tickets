function generateTickets() {
    const container = document.getElementById("tickets-container");
    const template = document.getElementById("ticket-template");
    const ticketCountDisplay = document.getElementById("ticket-count");

    const ticketCount = prompt("Ajoutez plus de tickets à imprimer");

    if (!ticketCount || isNaN(ticketCount) || ticketCount <= 0) {
        return;
    }

    container.querySelectorAll(".generated-ticket").forEach(ticket => ticket.remove());

    const totalTickets = parseInt(ticketCount) + 1;
    ticketCountDisplay.textContent = `Tickets générés : ${totalTickets}`;

    for (let i = 0; i < ticketCount; i++) {
        const newTicket = template.cloneNode(true);
        newTicket.removeAttribute("id");
        newTicket.classList.add("generated-ticket");
        container.appendChild(newTicket);
    }
}