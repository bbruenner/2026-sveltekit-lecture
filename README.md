# Fortbildung: Einstieg in Svelte und SvelteKit – Modul 1 (Präsenz, 3 h)

Folien und Code für den Präsenztermin. Der Tag beginnt „rückwärts“: Die Teilnehmer*innen
scannen einen QR-Code und stimmen mit 1–5 Sternen und einem Freitext ab. Danach bauen sie
genau diese App in neun Schritten selbst – ohne KI.

Die beiden Online-Termine bestehen aus je einem Kurzinput (Modul 2: Security, Modul 3: KI
beim Entwickeln) plus Arbeit an den eigenen Projekten. Dafür gibt es hier noch keine Folien.

## Folien bauen

Gleiche Mechanik wie beim HTML-Tutorium (Quelle: `sveltekit-tutorium.tex`):

| Befehl | Ergebnis in `PDF/` |
|---|---|
| `make student` | `sveltekit-tutorium-student.pdf` – ohne Lösungen (Austeilversion) |
| `make solution` | `sveltekit-tutorium-student-solution.pdf` – mit Lösungen |
| `make lecturer` | `sveltekit-tutorium-lecturer.pdf` – mit Lösungen, Ablaufplan und Moderationsfolien |
| `make` | alle drei |

`\begin{lecturer}…\end{lecturer}` erscheint nur in der Lecturer-Version,
`\begin{loesung}…\end{loesung}` in Solution und Lecturer.

## Code

| Ordner | Inhalt |
|---|---|
| `code/feedback-app/` | die fertige App, lauffähig (= Stand nach Schritt 9) |
| `code/schritte/NN-…/` | der fertige Stand **nach** jedem Schritt, zum Drüberkopieren |
| `code/schritte/zusatz-klasse/` | Variante von Schritt 5 mit State in einer Klasse |

| Nr. | Ordner | Thema | Neu oder geändert |
|---|---|---|---|
| 1 | `01-node` | Node.js: JSON-Datei schreiben | `stimmen.js` |
| 2 | `02-npm` | npm: Excel-Datei mit `exceljs` | `excel.js`, `package.json` |
| 3 | `03-projekt` | `npx sv create`, erste Seite | `+page.svelte`, `+layout.svelte`, `app.html` |
| 4 | `04-state` | `$state`, `onclick`, `{#each}` | `+page.svelte` |
| 5 | `05-komponente` | `$props`, `$bindable`, `bind:`, `$derived` | `lib/Sterne.svelte`, `+page.svelte` |
| 6 | `06-formular` | Form Action, Server-Code | `+page.server.js`, `lib/server/speicher.js`, `+page.svelte` |
| 7 | `07-ergebnis` | `load`, Rendering, `$effect` | `ergebnis/+page.server.js`, `ergebnis/+page.svelte` |
| 8 | `08-excel` | `exceljs` im Server-Code | `lib/server/speicher.js`, `+page.server.js` |
| 9 | `09-tunnel` | Cloudflare Tunnel, QR-Code | `vite.config.js`, `ergebnis/*` |

Die Ordner 03–09 enthalten jeweils alle Dateien, die sich vom frisch erzeugten Projekt
unterscheiden. Wer hängen bleibt, kopiert den Inhalt des Ordners über das eigene Projekt.
Ab Schritt 8 braucht das Projekt `npm install exceljs`, ab Schritt 9 zusätzlich `npm install qrcode`.

Das Projekt wurde erzeugt mit:

```bash
npx sv create feedback-app --template minimal --no-types --no-add-ons --install npm
```

## Die App am Präsenztag starten

```bash
cd code/feedback-app
```

```bash
npm install
```

```bash
npm run dev
```

In einem zweiten Terminal:

```bash
cloudflared tunnel --url http://localhost:5173
```

Am Beamer die **Tunnel-Adresse** mit `/ergebnis` öffnen (nicht `localhost` – der QR-Code zeigt
auf die Adresse, unter der die Seite aufgerufen wurde). Die Stimmen landen in
`code/feedback-app/data/stimmen.json` und `data/feedback.xlsx`. Für eine neue Runde den Ordner
`data/` löschen.

## Wenn du etwas änderst

- Die Lösungsfolien binden die Dateien aus `code/schritte/` über **Zeilenbereiche** ein
  (`\jsrange`, `\svelterange`, …). Wer dort Zeilen verschiebt, muss die Bereiche in
  `sveltekit-tutorium.tex` anpassen.
- Die Folienfläche des Themes fasst etwa 15 Textzeilen bzw. 17 Codezeilen in `\scriptsize`
  (20 mit den `…sm`-Stilen). `Overfull \vbox` im Log heißt: Die Folie läuft unten über.
- In `.svelte`-Dateien für die Folien kein `a < b` schreiben (lieber `b > a`), `\shorthandoff{"}`
  nicht entfernen, TikZ-Stile mit `#1` in der Präambel definieren.
- `make` ruft `latexmk` mit `-bibtex-` auf: Der Foliensatz hat keine Literaturliste.

## Stand der Technik (November 2026)

SvelteKit 3.3, Svelte 5.58, Vite 8, Node ab 22.17. Gegenüber älteren Anleitungen heißt es
`#lib` statt `$lib` (mit Dateiendung), die Einstellungen stehen in `vite.config.js` statt
`svelte.config.js`, und `refreshAll()` ersetzt `invalidateAll()`. Die Folie „Stolperstein:
veraltete Anleitungen“ fasst das für die Teilnehmer*innen zusammen.
