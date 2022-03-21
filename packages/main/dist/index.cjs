"use strict";
var require$$1 = require("electron");
var require$$1$1 = require("path");
require("url");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
const isSingleInstance = require$$1.app.requestSingleInstanceLock();
if (!isSingleInstance) {
  require$$1.app.quit();
  process.exit(0);
}
require$$1.app.disableHardwareAcceleration();
{
  require$$1.app.whenReady().then(() => Promise.resolve().then(function() {
    return /* @__PURE__ */ _interopNamespace(require("electron-devtools-installer"));
  })).then(({ default: installExtension, VUEJS3_DEVTOOLS }) => installExtension(VUEJS3_DEVTOOLS, {
    loadExtensionOptions: {
      allowFileAccess: true
    }
  })).catch((e) => console.error("Failed install extension:", e));
}
let mainWindow = null;
const createWindow = async () => {
  mainWindow = new require$$1.BrowserWindow({
    show: false,
    webPreferences: {
      nativeWindowOpen: true,
      preload: require$$1$1.join(__dirname, "../../preload/dist/index.cjs")
    }
  });
  mainWindow.on("ready-to-show", () => {
    mainWindow == null ? void 0 : mainWindow.show();
    {
      mainWindow == null ? void 0 : mainWindow.webContents.openDevTools();
    }
  });
  const pageUrl = "http://localhost:3000/";
  await mainWindow.loadURL(pageUrl);
};
require$$1.app.on("second-instance", () => {
  if (mainWindow) {
    if (mainWindow.isMinimized())
      mainWindow.restore();
    mainWindow.focus();
  }
});
require$$1.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    require$$1.app.quit();
  }
});
require$$1.app.whenReady().then(createWindow).catch((e) => console.error("Failed create window:", e));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93IH0gZnJvbSAnZWxlY3Ryb24nXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IFVSTCB9IGZyb20gJ3VybCdcblxuY29uc3QgaXNTaW5nbGVJbnN0YW5jZSA9IGFwcC5yZXF1ZXN0U2luZ2xlSW5zdGFuY2VMb2NrKClcblxuaWYgKCFpc1NpbmdsZUluc3RhbmNlKSB7XG4gIGFwcC5xdWl0KClcbiAgcHJvY2Vzcy5leGl0KDApXG59XG5cbmFwcC5kaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24oKVxuXG4vLyBJbnN0YWxsIFwiVnVlLmpzIGRldnRvb2xzXCJcbmlmIChpbXBvcnQubWV0YS5lbnYuTU9ERSA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBhcHBcbiAgICAud2hlblJlYWR5KClcbiAgICAudGhlbigoKSA9PiBpbXBvcnQoJ2VsZWN0cm9uLWRldnRvb2xzLWluc3RhbGxlcicpKVxuICAgIC50aGVuKCh7IGRlZmF1bHQ6IGluc3RhbGxFeHRlbnNpb24sIFZVRUpTM19ERVZUT09MUyB9KSA9PlxuICAgICAgaW5zdGFsbEV4dGVuc2lvbihWVUVKUzNfREVWVE9PTFMsIHtcbiAgICAgICAgbG9hZEV4dGVuc2lvbk9wdGlvbnM6IHtcbiAgICAgICAgICBhbGxvd0ZpbGVBY2Nlc3M6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG4gICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKCdGYWlsZWQgaW5zdGFsbCBleHRlbnNpb246JywgZSkpXG59XG5cbmxldCBtYWluV2luZG93OiBCcm93c2VyV2luZG93IHwgbnVsbCA9IG51bGxcblxuY29uc3QgY3JlYXRlV2luZG93ID0gYXN5bmMgKCkgPT4ge1xuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIHNob3c6IGZhbHNlLCAvLyBVc2UgJ3JlYWR5LXRvLXNob3cnIGV2ZW50IHRvIHNob3cgd2luZG93XG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgIG5hdGl2ZVdpbmRvd09wZW46IHRydWUsXG4gICAgICBwcmVsb2FkOiBqb2luKF9fZGlybmFtZSwgJy4uLy4uL3ByZWxvYWQvZGlzdC9pbmRleC5janMnKVxuICAgIH1cbiAgfSlcblxuICAvKipcbiAgICogSWYgeW91IGluc3RhbGwgYHNob3c6IHRydWVgIHRoZW4gaXQgY2FuIGNhdXNlIGlzc3VlcyB3aGVuIHRyeWluZyB0byBjbG9zZSB0aGUgd2luZG93LlxuICAgKiBVc2UgYHNob3c6IGZhbHNlYCBhbmQgbGlzdGVuZXIgZXZlbnRzIGByZWFkeS10by1zaG93YCB0byBmaXggdGhlc2UgaXNzdWVzLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGVjdHJvbi9lbGVjdHJvbi9pc3N1ZXMvMjUwMTJcbiAgICovXG4gIG1haW5XaW5kb3cub24oJ3JlYWR5LXRvLXNob3cnLCAoKSA9PiB7XG4gICAgbWFpbldpbmRvdz8uc2hvdygpXG5cbiAgICBpZiAoaW1wb3J0Lm1ldGEuZW52Lk1PREUgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIG1haW5XaW5kb3c/LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpXG4gICAgfVxuICB9KVxuXG4gIC8qKlxuICAgKiBVUkwgZm9yIG1haW4gd2luZG93LlxuICAgKiBWaXRlIGRldiBzZXJ2ZXIgZm9yIGRldmVsb3BtZW50LlxuICAgKiBgZmlsZTovLy4uL3JlbmRlcmVyL2luZGV4Lmh0bWxgIGZvciBwcm9kdWN0aW9uIGFuZCB0ZXN0XG4gICAqL1xuICBjb25zdCBwYWdlVXJsID1cbiAgICBpbXBvcnQubWV0YS5lbnYuTU9ERSA9PT0gJ2RldmVsb3BtZW50JyAmJlxuICAgIGltcG9ydC5tZXRhLmVudi5WSVRFX0RFVl9TRVJWRVJfVVJMICE9PSB1bmRlZmluZWRcbiAgICAgID8gaW1wb3J0Lm1ldGEuZW52LlZJVEVfREVWX1NFUlZFUl9VUkxcbiAgICAgIDogbmV3IFVSTCgnLi4vcmVuZGVyZXIvZGlzdC9pbmRleC5odG1sJywgJ2ZpbGU6Ly8nICsgX19kaXJuYW1lKS50b1N0cmluZygpXG5cbiAgYXdhaXQgbWFpbldpbmRvdy5sb2FkVVJMKHBhZ2VVcmwpXG59XG5cbmFwcC5vbignc2Vjb25kLWluc3RhbmNlJywgKCkgPT4ge1xuICAvLyBTb21lb25lIHRyaWVkIHRvIHJ1biBhIHNlY29uZCBpbnN0YW5jZSwgd2Ugc2hvdWxkIGZvY3VzIG91ciB3aW5kb3cuXG4gIGlmIChtYWluV2luZG93KSB7XG4gICAgaWYgKG1haW5XaW5kb3cuaXNNaW5pbWl6ZWQoKSkgbWFpbldpbmRvdy5yZXN0b3JlKClcbiAgICBtYWluV2luZG93LmZvY3VzKClcbiAgfVxufSlcblxuYXBwLm9uKCd3aW5kb3ctYWxsLWNsb3NlZCcsICgpID0+IHtcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG4gICAgYXBwLnF1aXQoKVxuICB9XG59KVxuXG5hcHBcbiAgLndoZW5SZWFkeSgpXG4gIC50aGVuKGNyZWF0ZVdpbmRvdylcbiAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKCdGYWlsZWQgY3JlYXRlIHdpbmRvdzonLCBlKSlcblxuLy8gQXV0by11cGRhdGVzXG5pZiAoaW1wb3J0Lm1ldGEuZW52LlBST0QpIHtcbiAgYXBwXG4gICAgLndoZW5SZWFkeSgpXG4gICAgLnRoZW4oKCkgPT4gaW1wb3J0KCdlbGVjdHJvbi11cGRhdGVyJykpXG4gICAgLnRoZW4oKHsgYXV0b1VwZGF0ZXIgfSkgPT4gYXV0b1VwZGF0ZXIuY2hlY2tGb3JVcGRhdGVzQW5kTm90aWZ5KCkpXG4gICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKCdGYWlsZWQgY2hlY2sgdXBkYXRlczonLCBlKSlcbn1cbiJdLCJuYW1lcyI6WyJhcHAiLCJCcm93c2VyV2luZG93Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsTUFBTSxtQkFBbUJBLFdBQUFBLElBQUk7QUFFN0IsSUFBSSxDQUFDLGtCQUFrQjtBQUNyQkEsYUFBQSxJQUFJLEtBQUs7QUFDVCxVQUFRLEtBQUssQ0FBQztBQUNoQjtBQUVBQSxXQUFBLElBQUksNEJBQTRCO0FBR1k7QUFDMUNBLGFBQUFBLElBQ0csVUFBVSxFQUNWLEtBQUssTUFBTSxRQUFBLFFBQUEsRUFBQSxLQUFBLFdBQUE7QUFBQSxXQUFBLGtDQUFBLFFBQU8sNkJBQThCLENBQUE7QUFBQSxFQUFBLENBQUEsQ0FBQSxFQUNoRCxLQUFLLENBQUMsRUFBRSxTQUFTLGtCQUFrQixzQkFDbEMsaUJBQWlCLGlCQUFpQjtBQUFBLElBQ2hDLHNCQUFzQjtBQUFBLE1BQ3BCLGlCQUFpQjtBQUFBLElBQ25CO0FBQUEsRUFBQSxDQUNELENBQ0gsRUFDQyxNQUFNLENBQUMsTUFBTSxRQUFRLE1BQU0sNkJBQTZCLENBQUMsQ0FBQztBQUMvRDtBQUVBLElBQUksYUFBbUM7QUFFdkMsTUFBTSxlQUFlLFlBQVk7QUFDL0IsZUFBYSxJQUFJQyxXQUFBQSxjQUFjO0FBQUEsSUFDN0IsTUFBTTtBQUFBLElBQ04sZ0JBQWdCO0FBQUEsTUFDZCxrQkFBa0I7QUFBQSxNQUNsQixTQUFTQyxhQUFBQSxLQUFLLFdBQVcsOEJBQThCO0FBQUEsSUFDekQ7QUFBQSxFQUFBLENBQ0Q7QUFRVSxhQUFBLEdBQUcsaUJBQWlCLE1BQU07QUFDbkMsNkNBQVk7QUFFZ0M7QUFDMUMsK0NBQVksWUFBWTtBQUFBLElBQzFCO0FBQUEsRUFBQSxDQUNEO0FBT0QsUUFBTSxVQUdBO0FBR0EsUUFBQSxXQUFXLFFBQVEsT0FBTztBQUNsQztBQUVBRixXQUFBQSxJQUFJLEdBQUcsbUJBQW1CLE1BQU07QUFFOUIsTUFBSSxZQUFZO0FBQ2QsUUFBSSxXQUFXLFlBQVk7QUFBRyxpQkFBVyxRQUFRO0FBQ2pELGVBQVcsTUFBTTtBQUFBLEVBQ25CO0FBQ0YsQ0FBQztBQUVEQSxXQUFBQSxJQUFJLEdBQUcscUJBQXFCLE1BQU07QUFDNUIsTUFBQSxRQUFRLGFBQWEsVUFBVTtBQUNqQ0EsZUFBQSxJQUFJLEtBQUs7QUFBQSxFQUNYO0FBQ0YsQ0FBQztBQUVEQSxXQUFBLElBQ0csVUFBVSxFQUNWLEtBQUssWUFBWSxFQUNqQixNQUFNLENBQUMsTUFBTSxRQUFRLE1BQU0seUJBQXlCLENBQUMsQ0FBQzsifQ==
