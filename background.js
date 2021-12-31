console.log("background running");
window.word = "test";
function receiver(request, sender, sendResponse) {
  console.log(request);
  window.word = request.text;
}
chrome.runtime.onMessage.addListener(receiver);
