function gotmsg(msg, sender, sendResponse) {
  console.log(msg);
  console.log(msg.speed);
  document.getElementsByTagName("video")[0].playbackRate = msg.speed;
}
chrome.runtime.onMessage.addListener(gotmsg);
