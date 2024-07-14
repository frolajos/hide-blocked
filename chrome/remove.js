function deletor() {
  // Blocked not selected
  let parent = document.querySelector("div[aria-label='Friends']");
  parent && parent.childNodes[3] && parent.childNodes[3].remove();

  // Blocked selected
  let button = document.querySelector("div[aria-controls='blocked-tab'");
  button && button.remove();
}

deletor();
const interval = setInterval(deletor, 1000);
