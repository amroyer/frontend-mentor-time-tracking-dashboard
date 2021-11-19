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

const activateDaily = () => {
  document.querySelectorAll(".current").forEach(hide);
  document.querySelectorAll(".previous").forEach(hide);
  document.querySelectorAll(".daily").forEach(show);
  document.querySelectorAll(".timeframe").forEach(deactivate);
  const dailyToggle = document.querySelector("#daily-toggle");
  activate(dailyToggle);
  return null;
};

const activateWeekly = () => {
  document.querySelectorAll(".current").forEach(hide);
  document.querySelectorAll(".previous").forEach(hide);
  document.querySelectorAll(".weekly").forEach(show);
  document.querySelectorAll(".timeframe").forEach(deactivate);
  const weeklyToggle = document.querySelector("#weekly-toggle");
  activate(weeklyToggle);
  return null;
};

const activateMonthly = () => {
  document.querySelectorAll(".current").forEach(hide);
  document.querySelectorAll(".previous").forEach(hide);
  document.querySelectorAll(".monthly").forEach(show);
  document.querySelectorAll(".timeframe").forEach(deactivate);
  const monthlyToggle = document.querySelector("#monthly-toggle");
  activate(monthlyToggle);
  return null;
};
