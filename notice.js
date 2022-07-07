

function showNotification(){
  console.log("呼び出されてる");
  const n = new Notification("hello");
}

console.log("status :" + Notification.permission);
if(Notification.permission === "granted") {
  alert("we have a permission");
}else if (Notification.permission !== "denied") {
  Notification.requestPermission().then(
    permission => {
      if (permission === "granted") {
        showNotification();
      }
    }
  )
}




// const n = new Notification("test");
// document.addEventListener('visibilitychange', function() {
//   if (document.visibilityState === 'visible') {
//     // The tab has become visible so clear the now-stale Notification.
//     n.close();
//   }
// });

// (function() {
//   if ("Notification" in window) {
//     var permission = Notification.permission;

//     if (permission === "denied") {
//       return;
//     } else if (permission === "granted") {
//       return checkVersion();
//     }

//     Notification.requestPermission().then(function() {
//       checkVersion();
//     });
//   }
// })();

// function checkVersion() {
//   var latestVersion = document.querySelector(".js-currentVersion").textContent;
//   var currentVersion = localStorage.getItem("conciseVersion");
//   if (currentVersion === null || semverCompare(currentVersion, latestVersion) === -1) {
//     var notification = new Notification("Hello, world!");

//     localStorage.setItem("conciseVersion", latestVersion);
//   }
// }