document.addEventListener("DOMContentLoaded", function() {
    const calendarBody = document.querySelector("#calendar tbody");
    const monthYearElement = document.getElementById("month-year");
    const today = new Date();
    let selectedDate = today;

    function renderCalendar() {
      const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
      const lastDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
      const daysInMonth = lastDayOfMonth.getDate();

      let dateCounter = 1;
      calendarBody.innerHTML = '';

      for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
          const cell = document.createElement("td");

          if ((i === 0 && j < firstDayOfMonth.getDay()) || dateCounter > daysInMonth) {
            cell.textContent = "";
          } else {
            cell.textContent = dateCounter;
            cell.addEventListener("click", () => {
              setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), dateCounter));
            });

            if (selectedDate.getDate() === dateCounter && selectedDate.getMonth() === firstDayOfMonth.getMonth()) {
              cell.classList.add("selected");
            }

            dateCounter++;
          }

          row.appendChild(cell);
        }

        calendarBody.appendChild(row);
      }

      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const currentMonthYear = monthNames[selectedDate.getMonth()] + " " + selectedDate.getFullYear();
      monthYearElement.textContent = currentMonthYear;
    }

    function setSelectedDate(date) {
      selectedDate = date;
      renderCalendar();
    }

    renderCalendar();
  });