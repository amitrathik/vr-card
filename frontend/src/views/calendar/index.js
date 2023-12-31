const Calendar = () => {
    return `<div id="busyCalendar" class="calendar-busy">
        <div class="calendar-today" style="background-image: url('img/uploads/rs-calendar-cover.jpg')">
            <div class="valign-outer">
                <div class="valign-middle">
                    <div class="valign-inner">
                        <div class="date">
                            <span class="day"></span>
                            <span class="month"></span>
                        </div>
                        <div class="week-day"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="calendar-cont">
            <div class="calendar-header">
                <div class="calendar-nav">
                    <span class="active-date"><span class="active-month"></span><span
                            class="active-year"></span></span>
                    <a class="calendar-prev ripple-centered" title="Prev"><i class="rsicon rsicon-chevron_left"></i></a>
                    <a class="calendar-next ripple-centered" title="Next"><i
                            class="rsicon rsicon-chevron_right"></i></a>
                </div>
            </div>

            <table class="calendar-body">
                <thead class="calendar-thead"></thead>
                <tbody class="calendar-tbody"></tbody>
            </table>
            <div class="calendar-busy-note">Sorry. I'm not available on those days</div>
        </div>
    </div>`;
}

export default Calendar;