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
  document.querySelectorAll(".current").forEach(hide);
  document.querySelectorAll(".previous").forEach(hide);
  document.querySelectorAll(".timeframe").forEach(deactivate);
};

const activateDaily = () => {
  reset();
  document.querySelectorAll(".daily").forEach(show);
  const dailyToggle = document.querySelector("#daily-toggle");
  activate(dailyToggle);
  return null;
};

const activateWeekly = () => {
  reset();
  document.querySelectorAll(".weekly").forEach(show);
  const weeklyToggle = document.querySelector("#weekly-toggle");
  activate(weeklyToggle);
  return null;
};

const activateMonthly = () => {
  reset();
  document.querySelectorAll(".monthly").forEach(show);
  const monthlyToggle = document.querySelector("#monthly-toggle");
  activate(monthlyToggle);
  return null;
};
