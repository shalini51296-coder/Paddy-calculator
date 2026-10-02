// Adds the CAMERA permission so <input capture="environment"> (LIVE CAMERA button) works inside the APK.
const fs = require('fs');
const path = 'android/app/src/main/AndroidManifest.xml';
let xml = fs.readFileSync(path, 'utf8');
const add = [];
if (!xml.includes('android.permission.CAMERA')) add.push('    <uses-permission android:name="android.permission.CAMERA" />');
if (!xml.includes('android.hardware.camera"')) add.push('    <uses-feature android:name="android.hardware.camera" android:required="false" />');
if (add.length) {
  xml = xml.replace('</manifest>', add.join('\n') + '\n</manifest>');
  fs.writeFileSync(path, xml);
}
console.log(add.length ? 'AndroidManifest patched: camera permission added' : 'AndroidManifest already patched');
