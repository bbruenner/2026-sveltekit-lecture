# ---------------------------------------------------------------------------
#  Foliensatz "Einstieg in Svelte und SvelteKit" (Modul 1, Präsenz) -- drei Versionen aus einer Quelle
#
#    make            alle drei PDFs
#    make student    ohne Lösungen, ohne Vortragsfolien  (Austeilversion)
#    make solution   mit Lösungen, ohne Vortragsfolien
#    make lecturer   mit Lösungen und Vortragsfolien
#    make clean      Hilfsdateien löschen
#    make distclean  alles in PDF/ löschen
# ---------------------------------------------------------------------------
MAIN    := sveltekit-tutorium
OUTDIR  := PDF
LATEXMK := latexmk -pdf -bibtex- -interaction=nonstopmode -halt-on-error -outdir=$(OUTDIR)

.PHONY: all student solution lecturer clean distclean

all: student solution lecturer

student:
	$(LATEXMK) -jobname=$(MAIN)-student $(MAIN).tex
	@echo ">> $(OUTDIR)/$(MAIN)-student.pdf   (ohne Lösungen)"

solution:
	$(LATEXMK) -jobname=$(MAIN)-student-solution -usepretex='\def\SOLUTION{}' $(MAIN).tex
	@echo ">> $(OUTDIR)/$(MAIN)-student-solution.pdf   (mit Lösungen)"

lecturer:
	$(LATEXMK) -jobname=$(MAIN)-lecturer -usepretex='\def\LECTURER{}' $(MAIN).tex
	@echo ">> $(OUTDIR)/$(MAIN)-lecturer.pdf   (mit Lösungen + Vortragsfolien)"

clean:
	latexmk -c -outdir=$(OUTDIR) -jobname=$(MAIN)-student          $(MAIN).tex
	latexmk -c -outdir=$(OUTDIR) -jobname=$(MAIN)-student-solution $(MAIN).tex
	latexmk -c -outdir=$(OUTDIR) -jobname=$(MAIN)-lecturer         $(MAIN).tex

distclean:
	rm -rf $(OUTDIR)
