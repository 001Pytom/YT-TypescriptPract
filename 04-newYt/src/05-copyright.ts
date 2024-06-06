const year = document.getElementById("year") as HTMLDivElement;
const thisYear: string = new Date().getFullYear().toString();

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
