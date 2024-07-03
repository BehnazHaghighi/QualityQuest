document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    events: [
      {
        title: "Event 1",
        start: "2024-06-01",
      },
      {
        title: "Event 2",
        start: "2024-06-07",
        end: "2024-06-10",
      },
      {
        title: "Event 3",
        start: "2024-07-03",
        end: "2024-07-10",
        color:"#fe3535"
      },
    ],
  });

  calendar.render();
});
