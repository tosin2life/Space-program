const tabList = document.querySelector("[role='tablist']");
const tabs = document.querySelectorAll("[role='tab']");

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetAttribute = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image");

  console.log(targetImage);

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  // The one that is clicked, the hidden attribute is removed and then the hidden attribute is added to each of the rest of the tabs

  mainContainer.querySelectorAll('[role= "tabpanel"]').forEach((panel) => {
    panel.setAttribute("hidden", true);
  });

  mainContainer
    .querySelector([`#${targetAttribute}`])
    .removeAttribute("hidden");

  // picture
  mainContainer.querySelectorAll("picture").forEach((picture) => {
    picture.setAttribute("hidden", true);
  });
  mainContainer.querySelector([`#${targetImage}`]).removeAttribute("hidden");

  tabContainer
    .querySelector("[aria-selected='true']")
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);
}
