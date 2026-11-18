# Feedback-App

Abstimmung mit 1–5 Sternen und einem Freitext. Die fertige App aus der Fortbildung
„Einstieg in Svelte und SvelteKit“ (Stand nach Schritt 9).

## Starten

```bash
npm install
```

```bash
npm run dev
```

- Abstimmen: <http://localhost:5173>
- Ergebnis mit QR-Code: <http://localhost:5173/ergebnis>

Ins Internet (zweites Terminal):

```bash
cloudflared tunnel --url http://localhost:5173
```

Die Ergebnis-Seite dann über die Tunnel-Adresse öffnen, damit der QR-Code dorthin zeigt.

## Wo was liegt

| Datei | Aufgabe |
|---|---|
| `src/lib/Sterne.svelte` | fünf Sterne zum Anklicken |
| `src/routes/+page.svelte` | das Formular |
| `src/routes/+page.server.js` | Stimme prüfen und speichern lassen |
| `src/lib/server/speicher.js` | JSON lesen/schreiben, Excel erzeugen |
| `src/routes/ergebnis/+page.server.js` | Durchschnitt und QR-Code |
| `src/routes/ergebnis/+page.svelte` | Ergebnis anzeigen, alle 2 Sekunden auffrischen |
| `vite.config.js` | erlaubt den Tunnel-Hostnamen |

## Daten

Jede Stimme wird an `data/stimmen.json` angehängt, danach wird `data/feedback.xlsx` neu
erzeugt. Für eine neue Runde den Ordner `data/` löschen.

Die Frage steht direkt in `src/routes/+page.svelte`.
