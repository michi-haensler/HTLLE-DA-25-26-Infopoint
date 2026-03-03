\newpage
## Projektabschlussbericht

### Erfolgsmessung

#### Erreichung Leistungs-/Qualitätsziele

Die im Projektauftrag definierten Leistungs- und Qualitätsziele wurden im Wesentlichen erreicht. Das entwickelte Infopoint-System stellt alle geplanten Kernfunktionen bereit wie die Lehrersuchfunktion mit Echtzeit-Abfrage über die WebUntis-Schnittstelle, die Anzeige aktueller Schulneuigkeiten und Termine aus dem angebundenen CMS, einen interaktiven Lageplan, die Stundenpläne für Klassen und Labors sowie einen Instagram-Feed. Die Benutzeroberfläche wurde als reaktionsschnelle Webanwendung auf Touchscreen-Bedienung ausgelegt, läuft vollständig containerisiert über Docker und wurde erfolgreich auf einem Schulrechner mit Ubuntu Desktop in Betrieb genommen.

Eine Abweichung vom ursprünglichen Plan ergab sich bei der Hardwarebeschaffung. Die Evaluierung und Beschaffung dedizierter Infopoint-Hardware (All-in-One-Touchsystem) konnte aufgrund fehlenden Budgets seitens des Auftraggebers nicht realisiert werden. Das Projektteam reagierte darauf mit einer Hardwarestudie sowie einer konkreten Empfehlung für die optimale Konfiguration und setzte das System auf einem bereits vorhandenen Schul-PC um. Dadurch konnte die Funktionsfähigkeit der Lösung trotzdem vollständig demonstriert werden.

#### Erreichung Terminziele

Der Projektplan sah für die wesentlichen Entwicklungsmeilensteine folgende Termine vor:

| Meilenstein | Geplant | Tatsächlich | Abweichung |
|:---|:---|:---|:---|
| Recherche abgeschlossen | 19.09.2025 | 19.09.2025 | keine |
| Technologie-Auswahl & Mockups | 25.09.2025 | 25.09.2025 | keine |
| Rohversionen Front- & Backend | 13.10.2025 | 13.10.2025 | keine |
| CMS-Anbindung abgeschlossen | 20.10.2025 | Ende November 2025 | ~5 Wochen |
| Vereinigung Front- & Backend | 27.10.2025 | Anfang Dezember 2025 | ~5 Wochen |
| 1. Zwischenpräsentation | 10.11.2025 | 10.11.2025 | keine |
| Docker Deployment fertiggestellt | 23.12.2025 | 09.01.2026 | ~2 Wochen |
| Projektabschluss | 01.01.2026 | Ende Februar 2026 | ~8 Wochen |
| 2. Zwischenpräsentation | 23.02.2026 | 23.02.2026 | keine |
| Abgabe finale Korrekturversion | 06.03.2026 | 06.03.2026 | keine |

: Terminzielerreichung

Die hauptsächlichen Verzögerungen entstanden in zwei Phasen. Zum einen bereitete die Anbindung des CMS-Systems Cockpit über REST-Schnittstellen unvorhergesehene Schwierigkeiten, die einen Mehraufwand von mehreren Wochen verursachten. Zum anderen erwies sich die Integration der WebUntis-Schnittstelle für die Lehrersuchfunktion als aufwändiger als kalkuliert, da diese externe Schnittstelle umfangreiche Recherche und Tests erforderte – ein Risiko, das im Projektplan identifiziert, aber in seiner Tragweite unterschätzt wurde. Durch Anpassung des Zeitplans und Erhöhung des Arbeitsaufwands gelang es dem Team, den Rückstand bis Februar 2026 vollständig aufzuholen, sodass alle Abgabetermine eingehalten wurden.

#### Erreichung Kosten-/Aufwandsziele

| Kostenpunkt | Geplant | Tatsächlich | Abweichung |
|:---|---:|---:|:---|
| Personal (3 Personen) | 24.300,00 € | 24.300,00 € | keine |
| ChatGPT Plus | 23,00 € | 23,00 € | keine |
| DA-Binden | 50,00 € | 50,00 € | keine |
| Hardware | 0,00 € (Auftraggeber) | 0,00 € | keine |
| **Gesamt** | **24.373,00 €** | **24.373,00 €** | **keine** |

:Kostenzielerreichung

Das Budget wurde vollständig eingehalten. Da die Hardware vom Auftraggeber zu tragen gewesen wäre und aufgrund des fehlenden Budgets nicht beschafft wurde, entstanden diesbezüglich weder Mehrkosten noch Einsparungen für das Projektteam. Die Personalkosten entsprechen dem kalkulierten Stundenaufwand. Sonstige unvorhergesehene Kosten sind nicht angefallen.

### Reflexion / Lessons Learned

#### Teamarbeit

Die Zusammenarbeit im dreiköpfigen Team verlief durchgehend sehr gut und wurde in sämtlichen Statusberichten als „optimal" bewertet. Die frühzeitige und klare Aufteilung der Verantwortungsbereiche schuf eine solide Grundlage für effiziente, parallele Arbeit ohne wesentliche Über­schneidungen oder Doppelarbeit.

Als besonders förderlich erwies sich die konsequente Nutzung von GitHub Projects als gemeinsames Aufgabenmanagement-Tool. Issues, Meilensteine und eine Roadmap sorgten dafür, dass alle Teammitglieder jederzeit über den aktuellen Projektstand informiert waren. Regelmäßige Meetings und kurze informelle Abstimmungen halfen dabei, Probleme frühzeitig zu erkennen und gemeinsam zu lösen.

#### Projektmanagement

Als Projektmanagement-Methode wurde Scrumban eingesetzt. Dies ist eine Kombination aus den festen Sprint-Strukturen von Scrum und der kontinuierlichen Aufgabenverwaltung über ein Kanban-Board. Diese Hybridmethode hat sich für ein Diplomarbeitsprojekt dieser Größenordnung bewährt. Die Sprints ermöglichten eine realistische Fortschrittsplanung, während das Kanban-Board Flexibilität bei kurzfristigen Prioritätsänderungen bot.

Die identifizierten Projektrisiken, insbesondere die Schwierigkeiten mit der WebUntis-Schnittstelle und die mögliche Verzögerung im Zeitplan, haben sich im Projektverlauf tatsächlich materialisiert. Die vorhandenen Maßnahmen (ausreichend Puffer einplanen, frühzeitig mit der Schnittstelle auseinandersetzen) wurden teilweise erst als Reaktion ergriffen. Eine vorzeitige klärung bezüglich einer Lösung für die WebUntis-API hätte hier möglicherweise Verzögerungen vermeiden können. 

Die Transparenz durch laufende Statusberichte in der Projektdokumentation hat sich als wertvoll erwiesen, um Entscheidungen nachvollziehbar zu machen und den Betreuer stets informiert zu halten.

#### Sonstige Lernerfahrungen

Im Verlauf des Projekts konnten alle Teammitglieder ihr Wissen in relevanten Technologiebereichen erheblich vertiefen. Die Arbeit mit Spring Boot, React/TypeScript, Docker Compose und einer Headless-CMS-Lösung (Cockpit) vermittelte praxisnahe Erfahrungen, die weit über den schulischen Unterrichtstoff hinausgehen.

Das containerisierte Deployment mittels Docker und Docker Compose demonstrierte eindrücklich den praktischen Wert von Containerisierung. Die Fähigkeit, das gesamte System aus Frontend, Backend und CMS mit einem einzigen Befehl zu starten, vereinfacht sowohl den Entwicklungs- als auch den Betriebsprozess erheblich. Die Konfiguration des Kiosk-Modus unter Ubuntu und die Einrichtung des automatischen Systemstarts mit Repository-Synchronisierung verdeutlichten zudem die Relevanz von DevOps-Kenntnissen in realen Projekten.

Schließlich vermittelte die gesamte Projektarbeit ein realistisches Bild von der Komplexität professioneller Softwareentwicklung, das Abwägen technischer Entscheidungen unter Budget- und Zeitdruck, das Managen externer Abhängigkeiten und die Notwendigkeit iterativer Verbesserungen.

### Nachhaltigkeitsanalyse

Das Infopoint-Projekt der HTL Leoben leistet in mehrfacher Hinsicht einen Beitrag zu den 17 Sustainable Development Goals (SDGs).

#### SDG 4 – Hochwertige Bildung

Der Infopoint trägt unmittelbar zur Qualität des Lernumfelds an der HTL Leoben bei. Die zentrale, jederzeit verfügbare Bereitstellung schulrelevanter Informationen – Lehrpersonen-Aufenthaltsorte, Stundenpläne, Veranstaltungen, Neuigkeiten – verbessert den Informationsfluss für Schülerinnen und Schüler, Lehrkräfte und Besucherinnen und Besucher. Dies unterstützt einen reibungsloseren Schulbetrieb und ermöglicht es, Zeit, die bisher für die Suche nach Informationen aufgewendet wurde, für Lernaktivitäten zu nutzen.

#### SDG 9 – Industrie, Innovation und Infrastruktur

Das Projekt ist ein Beispiel für die digitale Modernisierung der Schulinfrastruktur. Durch den Einsatz moderner, quelloffener Technologien (React, Spring Boot, Cockpit CMS, Docker) wurde eine erweiterbare und wartbare Lösung entwickelt, die als Fundament für zukünftige digitale Dienste an der Schule dienen kann. Die konsequente Containerisierung garantiert dabei Portabilität und erleichtert eine eventuelle Skalierung auf weitere Standortgeräte.

#### SDG 12 – Nachhaltiger Konsum und Produktion

Ein explizit genannter Projekttreiber war die Reduktion papierbasierter Kommunikation. Informationen, die bisher als Aushänge gedruckt wurden (Stundenpläne, Veranstaltungshinweise, Lehrerpräsenz), werden nun digital bereitgestellt. Dies reduziert den Verbrauch von Papier und Druckertinte und leistet damit einen direkten Beitrag zur Ressourcenschonung im Schulalltag.