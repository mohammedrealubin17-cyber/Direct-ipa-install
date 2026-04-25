const params = new URLSearchParams(window.location.search);
const app = params.get("app");

const appName = document.getElementById("appName");
const installLink = document.getElementById("installLink");

// Example manifests (you must host these yourself)
const apps = {
  testapp: {
    name: "My Test App",
    manifest: "itms-services://?action=download-manifest&url=https://yourserver.com/testapp.plist"
  },
  another: {
    name: "Another App",
    manifest: "itms-services://?action=download-manifest&url=https://yourserver.com/another.plist"
  }
};

if (apps[app]) {
  appName.innerText = apps[app].name;
  installLink.href = apps[app].manifest;
}
