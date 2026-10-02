# Mandi Fast Ledger – APK build

Web app lives in `www/index.html`. It works fully offline: weights are typed on the quick-entry keypad (the slip photo shows as a reference). The Gemini API key is OPTIONAL and only enables the AI auto-read shortcut. Wrapped with Capacitor 8 (needs Node 22+, Android Studio 2025.2.1+ / JDK 21).

## Option A – local (Android Studio)
    npm install
    npm run android:setup      # creates android/, adds camera permission, syncs
    npm run open               # opens Android Studio -> Build > Build APK(s)
APK: android/app/build/outputs/apk/debug/app-debug.apk

## Option B – no local setup (GitHub)
Push this folder to a GitHub repo -> Actions tab -> "Build debug APK" -> download the artifact.

## After editing www/index.html
    npm run sync   (then rebuild)

## Notes
- Data (ledger + scanned entries + API key) is stored in the app's WebView localStorage. It survives app restarts and updates
  signed with the same key, but is wiped by "Clear data" / uninstall. Use the CSV exports as backup.
- CSV export opens the Android share sheet (Filesystem + Share plugins).
- Debug APK is for personal installs; for Play Store you need a signed release build.
