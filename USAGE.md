# 📘 Verwendung des Diplomarbeitentemplates (da-template)

Dieses Repository enthält ein LaTeX-Template für Diplomarbeiten an der HTL Leoben. Diese Anleitung erklärt Schritt für Schritt, wie Sie das Template **als Vorlage nutzen** und **automatisch eine PDF-Datei** über GitHub Actions erzeugen können.
Es ist dazu keine lokale Installation notwendig - solange das Repository öffentlich sichtbar ist. Sollten Sie eine lokale Instalaltion wünschen oder genauere Informationen benötigen wie der Buildprozess erfolgt dann können Sie das im [da-base-template](Diplomarbeit/da-base-template/README.md) nachlesen.

---

## 🚀 Schritt 1: Repository kopieren (nicht forken!)

Um das Template für die eigene Diplomarbeit zu verwenden, **erstellen Sie ein neues Repository** auf GitHub unter Verwendung **dieses Templates**:

1. Öffnen Sie: [https://github.com/HTL-Leoben/da-template](https://github.com/HTL-Leoben/da-template)
2. Klicken Sie auf den grünen Button **"Use this template"**
3. Wählen Sie **"Create a new repository"**
4. Vergeben Sie einen passenden Namen (z. B. `da-2526-namederarbeit`)
5. Wählen Sie, ob das Repository **privat** oder **öffentlich** sein soll – je nachdem, ob Sie Ihre Arbeit teilen möchten. Bei sichtbarkeit "privat" müssen Sie die Arbeit auf Ihrem eigenen Rechner bauen.

---

## 🛠️ Schritt 2: Inhalte bearbeiten

Die Inhalte können Sie entweder direkt in github bearbeiten, oder auch auf Ihrer lokalen Kopie die Sie mittels folgendem Befehl erzeugen:

 ```bash
 git clone https://github.com/IhrBenutzername/da-2526-namederarbeit.git
 ```

Im Verzeichnis `Diplomarbeit` liegen dann die *.md Dateien zur Bearbeitung - welche dann zu einem PDF kompiliert werden. Es steht ihnen frei parallel dazu noch Ordner für den Quellcode oder andere Artifakte zu erstellen. 

### Einmaliges einrichten

Das Deckblatt, die eidesstattliche Erklärung und einige andere Teile der Arbeit werden mit Informationen aus der [metadata.yaml](Diplomarbeit/metadata.yaml) befüllt. Bearbeiten Sie diese Datei und füllen Sie die Daten zu Ihrer Diplomarbeit hier ein.

- [ ] DA Titel gleich wie im Diplomarbeitenportal ?
- [ ] Namen aller Gruppenmitglieder korrekt ?
- [ ] (Sub-)thema jedes Gruppenmitgliedes genau so wie im Diplomarbeitenportal ?
- [ ] Namen und Titel der Betreuer korrekt ?
- [ ] Befüllen Sie die Dateien "HTL_DA_Doku*.docx", erstellen Sie davon jeweils ein PDF und verlinken Sie es korrekt unter `Diplomatbeitsvereinbarung Englisch` sowie `Diplomatbeitsvereinbarung Deutsch`
- [ ] Kommentieren Sie anderen Dateien die in den Appendix kommen aus, weil sie nur der Illustration dienen und im Rahemn der Arbeit dann durch Ohre eigenen ersetzt werdn

Die Kurzfassung auf Deutsch und Englisch erstellen Sie auch in dieser Datei. Sie gibt einen kompakten Überblick über die gesamte Arbeit. Sie ist typischerweise eine halbe bis eine Seite lang (meist max. 250 Wörter) und folgt einer klaren Struktur und enthält keine Bilder.
Wenn Sie das erledigt haben, können Sie damit beginnen die *.md Dateien zu bearbeiten und mit sinnvollem Inhalt zu befüllen. Jeder Schüler muss seinen Teil in einer eigenen Datei haben und pflegen. Es muss zuerst ein Theorieteil und dann der Praxisteil folgen. Entfernen Sie die Inhalte aus den Ausarbeitunngen und erzeugen Sie Ihren Teil der Diplomarbeit indem Sie beginnen eine sinnvolle Kapitelstruktur zu erzeugen und selbige zu befüllen.



### Hinweise zur Diplomarbeit

* Die Reihenfolge der Kapitel und die Inhalte sind vorgegeben. Ändern Sie diese nicht.
* Wenn das Template auf einmal aufhört PDFs zu produzieren, dann liegt es an Ihrem Input. Die Wiederherstellung einer älteren Version und das anschließend schrittweise Einfügen der Änderungen ziegt solche Fheler im ALlgemeinen schnell auf.
* Alle Dateien enthalten bereits Überschriften und Beispiele. Lesen Sie sich die Dateien durch und ersetzen Sie die erklärenden Texte mit Ihrem Inhalt.


## ⚙️Schritt 3: GitHub Actions verwenden
Das Repository enthält eine vorkonfigurierte GitHub Action, die Ihre Diplomarbeit automatisch kompiliert und als PDF-Datei bereitstellt.

Bei jedem Push in den main-Branch:

* Wird automatisch ein LaTeX-Compiler in GitHub gestartet
* Die Diplomarbeit wird kompiliert
* Die PDF-Datei steht unter "Actions" → Letzter Commit → Artifacts zum Download bereit

Damit können Sie jederzeit einen Gesamtstand der Diplomarbeit herunterladen.
