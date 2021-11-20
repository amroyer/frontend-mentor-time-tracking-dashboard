const daily = document.querySelectorAll(".daily");
const dailyToggle = document.querySelector("#daily-toggle");
const weekly = document.querySelectorAll(".weekly");
const weeklyToggle = document.querySelector("#weekly-toggle");
const monthly = document.querySelectorAll(".monthly");
const monthlyToggle = document.querySelector("#monthly-toggle");
const timeframe = document.querySelectorAll(".timeframe");
const current = document.querySelectorAll(".current");
const previous = document.querySelectorAll(".previous");

const hide = (elem) => {
  elem.classList.remove("visible");
};

const show = (elem) => {
  elem.classList.add("visible");
};

const deactivate = (elem) => {
  elem.classList.remove("active");
};

const activate = (elem) => {
  elem.classList.add("active");
};

const reset = () => {
  current.forEach(hide);
  previous.forEach(hide);
  timeframe.forEach(deactivate);
};

const activateDaily = () => {
  reset();
  daily.forEach(show);
  activate(dailyToggle);
  return false;
};

const activateWeekly = () => {
  reset();
  weekly.forEach(show);
  activate(weeklyToggle);
  return false;
};

const activateMonthly = () => {
  reset();
  monthly.forEach(show);
  activate(monthlyToggle);
  return false;
};
