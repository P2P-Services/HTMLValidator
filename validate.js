chrome.action.onClicked.addListener((tab) => {
  // send it off to the validator and open result in new tab
  chrome.tabs.create({
    url: "https://validator.w3.org/nu/?showsource=yes&showimagereport=yes&doc="+tab.url
  });
});
