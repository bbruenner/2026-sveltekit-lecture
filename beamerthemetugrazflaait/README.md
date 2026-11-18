# beamerthemetugrazflaait — assets & conversion notes

This folder holds the TU Graz beamer theme plus the FLAAIT additions and all
logo assets that travel with the template.

## Contents

| File                              | What it is                                       |
| --------------------------------- | ------------------------------------------------ |
| `beamerthemetugraz2018.sty`       | TU Graz beamer theme                             |
| `flaait-template.sty`             | FLAAIT additions (packages, helpers, license box)|
| `logo.pdf`                        | TU Graz logo (used by the theme)                 |
| `CC-BY.svg` / `CC-BY.pdf`         | Creative Commons BY 4.0 icon                     |
| `flaait.svg` / `flaait.pdf`       | FLAAIT brand logo                                |
| `background_*.png`                | Title-page backgrounds (4:3 and 16:9)            |
| `institute/`                      | Institute logos (e.g. `ISDS.pdf`)                |

For each vector logo the `.svg` is the **source of truth** and the `.pdf` is
the build artefact that LaTeX embeds. Keep both in sync.

## Why PDF instead of `\includesvg`?

The `svg` LaTeX package needs `-shell-escape` and a working Inkscape on every
machine that compiles the deck. Pre-converting to PDF removes both
requirements: `pdflatex presentation.tex` is enough, no shell-escape, no
Inkscape on the build host.

## Re-creating the PDFs from the SVGs

Run **once after editing an SVG**. Three equivalent options:

### A) cairosvg (Python, recommended — smallest output)

```bash
pip3 install cairosvg
python3 -c "import cairosvg; cairosvg.svg2pdf(url='CC-BY.svg',  write_to='CC-BY.pdf')"
python3 -c "import cairosvg; cairosvg.svg2pdf(url='flaait.svg', write_to='flaait.pdf')"
```

Or convert everything in the folder in one go:

```bash
for f in *.svg; do
  python3 -c "import cairosvg; cairosvg.svg2pdf(url='$f', write_to='${f%.svg}.pdf')"
done
```

### B) Inkscape

```bash
inkscape CC-BY.svg  --export-type=pdf --export-filename=CC-BY.pdf
inkscape flaait.svg --export-type=pdf --export-filename=flaait.pdf
```

Add `--export-text-to-path` if the target machine might not have the original
fonts; expect a slightly larger PDF.

### C) librsvg / rsvg-convert

```bash
rsvg-convert -f pdf -o CC-BY.pdf  CC-BY.svg
rsvg-convert -f pdf -o flaait.pdf flaait.svg
```

## Size hints

cairosvg typically produces the smallest PDFs for simple logos
(`CC-BY.pdf` ≈ 2.6 KB, `flaait.pdf` ≈ 16 KB). Inkscape with
`--export-text-to-path` is larger but self-contained (no font dependency).
For raster logos or photos, stick to JPG (photos) or PNG (UI mock-ups).

## How the assets are referenced from LaTeX

`flaait-template.sty` sets:

```latex
\graphicspath{{./}{figures/}{beamerthemetugrazflaait/}}
```

so `\includegraphics{CC-BY}` and `\includegraphics{flaait}` work without
spelling out the folder. The theme's `\additionallogo{…}` macro accepts the
same short name, e.g.:

```latex
\additionallogo{flaait}
```

puts the FLAAIT logo bottom-right on the title page and in the footer.
