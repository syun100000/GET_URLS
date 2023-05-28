function saveUrls() {
  chrome.tabs.query({}, function(tabs) {
    const urls = tabs.map(tab => tab.url).join("\n");
    const blob = new Blob([urls], { type: "text/plain;charset=utf-8" });
    chrome.downloads.download({
      url: URL.createObjectURL(blob),
      filename: "URLS.TXT",
      saveAs: true
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const saveUrlsButton = document.getElementById("save-urls-button");
  saveUrlsButton.addEventListener("click", saveUrls);
});
