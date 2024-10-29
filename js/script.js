function generateTickets() {
    const container = document.getElementById("tickets-container");
    const template = document.getElementById("ticket-template");
    const ticketCountDisplay = document.getElementById("ticket-count");

    const ticketCount = prompt("Combien de tickets souhaitez-vous imprimer ?");

    if (!ticketCount || isNaN(ticketCount) || ticketCount <= 0) {
        return;
    }

    container.querySelectorAll(".generated-ticket").forEach(ticket => ticket.remove());

    const totalTickets = parseInt(ticketCount);
    ticketCountDisplay.textContent = `Tickets générés : ${totalTickets}`;

    for (let i = 0; i < totalTickets - 1; i++) {
        const newTicket = template.cloneNode(true);
        newTicket.removeAttribute("id");
        newTicket.classList.add("generated-ticket");
        container.appendChild(newTicket);
    }
}
