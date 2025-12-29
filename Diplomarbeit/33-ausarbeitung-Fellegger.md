# 1. Einführung in den Frontend-Teil

## 1.1 Frontend-spezifische Ausgangssituation und Problemstellung

Im Rahmen des Gesamtprojekts „Digitaler Infopoint“ kommt dem Frontend eine
zentrale Rolle zu, da es die Schnittstelle zwischen den bereitgestellten
Informationen und den Benutzerinnen und Benutzern darstellt. Unabhängig von
der Qualität der zugrunde liegenden Daten oder der verwendeten Hardware
entscheidet die Benutzeroberfläche darüber, ob Informationen schnell,
verständlich und effizient wahrgenommen werden können.

Viele bestehende digitale Anzeigesysteme im schulischen Umfeld sind aus
Frontend-Sicht unzureichend gestaltet. Häufig sind Oberflächen statisch,
unübersichtlich oder schlecht wartbar. Inhalte werden fest im Quellcode
hinterlegt oder können nur mit technischem Aufwand geändert werden. Dies führt
dazu, dass Informationen entweder nicht aktuell sind oder Anpassungen nur mit
Zeitverzögerung erfolgen können (vgl. @mdn_learn).

Ein weiteres Problem stellt die mangelnde Benutzerfreundlichkeit dar. Gerade
bei Infopoints, die auf großen Displays im öffentlichen Raum eingesetzt
werden, sind klare Strukturen, gute Lesbarkeit und eine intuitive Navigation
entscheidend. Ungeeignete Schriftgrößen, geringe Kontraste oder überladene
Layouts erschweren die schnelle Informationsaufnahme und mindern den Nutzen
des Systems erheblich (vgl. @nng_usability).

Aus Frontend-Sicht besteht zudem die Herausforderung, unterschiedliche
Inhaltstypen wie Texte, Bilder, Lagepläne oder Stundenpläne einheitlich und
konsistent darzustellen. Ohne ein durchdachtes Komponenten- und
Designkonzept führt dies schnell zu inkonsistenten Oberflächen und schwer
wartbarem Code. Eine moderne Frontend-Architektur ist daher notwendig, um eine
skalierbare, erweiterbare und langfristig wartbare Lösung zu ermöglichen.

Diese Ausgangssituation verdeutlicht die Notwendigkeit eines modernen,
komponentenbasierten Frontends, das dynamische Inhalte aus einem
Content-Management-System verarbeitet, eine klare Benutzerführung bietet und
gleichzeitig den Wartungsaufwand reduziert.

## 1.2 Zielsetzung des Frontend-Systems

Die Zielsetzung des Frontend-Systems besteht darin, eine benutzerfreundliche,
übersichtliche und technisch wartbare Benutzeroberfläche für den digitalen
Infopoint bereitzustellen. Das Frontend fungiert dabei als zentrale
Schnittstelle zwischen den im Hintergrund verwalteten Inhalten und den
Endnutzerinnen und Endnutzern und hat somit maßgeblichen Einfluss auf die
Nutzbarkeit des Gesamtsystems.

Ein wesentliches Ziel ist die klare und intuitive Darstellung von
Informationen. Inhalte wie Neuigkeiten, Termine, Lagepläne oder Stundenpläne
sollen so aufbereitet werden, dass sie auf großen Displays schnell erfasst
werden können. Dabei liegt der Fokus auf einer klaren Strukturierung, gut
lesbarer Typografie und einer konsistenten visuellen Gestaltung, um die
Informationsaufnahme zu erleichtern (vgl. @nng_usability).

Darüber hinaus soll das Frontend dynamische Inhalte verarbeiten können, die
über ein Content-Management-System bereitgestellt werden. Die Inhalte dürfen
nicht statisch im Quellcode hinterlegt sein, sondern müssen zur Laufzeit
geladen und dargestellt werden. Dieses Ziel stellt sicher, dass Aktualisierungen
ohne Änderungen am Frontend-Code möglich sind und der Wartungsaufwand reduziert
wird (vgl. @contentful_headless).

Ein weiteres Ziel des Frontend-Systems ist die technische Wartbarkeit und
Erweiterbarkeit. Durch eine komponentenbasierte Architektur sollen
wiederverwendbare UI-Bausteine geschaffen werden, die eine konsistente
Gestaltung ermöglichen und zukünftige Erweiterungen erleichtern. Neue Seiten
oder Funktionen sollen mit möglichst geringem Aufwand integrierbar sein (vgl.
@react_docs).

Zusätzlich spielt die Performance des Frontends eine zentrale Rolle. Kurze
Ladezeiten, flüssige Übergänge und ein responsives Verhalten sollen eine
angenehme Benutzererfahrung gewährleisten. Insbesondere bei einem öffentlich
zugänglichen Infopoint ist eine stabile und zuverlässige Darstellung der
Inhalte essenziell (vgl. @webdev_performance).

Zusammenfassend verfolgt das Frontend-System das Ziel, eine moderne,
benutzerzentrierte und langfristig wartbare Oberfläche bereitzustellen, die
den Informationszugang im schulischen Umfeld effizient unterstützt und den
Gesamtnutzen des digitalen Infopoints wesentlich erhöht.

## 1.3 Anforderungen an die Web-Oberfläche

Die Web-Oberfläche des digitalen Infopoints muss sowohl funktionale als auch
nicht-funktionale Anforderungen erfüllen, um den Einsatz im schulischen Umfeld
zu ermöglichen. Eine zentrale Anforderung ist die klare und übersichtliche
Darstellung von Informationen. Da der Infopoint in öffentlich zugänglichen
Bereichen eingesetzt wird, müssen Inhalte schnell erfassbar sein, ohne dass
eine aktive Interaktion oder längere Beschäftigung mit der Oberfläche
erforderlich ist.

Ein wesentlicher Aspekt stellt die Lesbarkeit dar. Schriftgrößen, Kontraste und
Abstände müssen so gewählt werden, dass Informationen auch aus größerer
Entfernung gut erkennbar sind. Eine konsistente Typografie sowie ein
reduziertes, ruhiges Layout tragen wesentlich dazu bei, die visuelle
Wahrnehmung zu unterstützen und eine Überforderung der Benutzerinnen und
Benutzer zu vermeiden (vgl. @nng_usability).

Darüber hinaus muss die Web-Oberfläche dynamisch auf unterschiedliche
Inhaltstypen reagieren können. Texte, Bilder, Lagepläne oder Stundenpläne
werden aus einem Content-Management-System geladen und müssen einheitlich
dargestellt werden. Die Oberfläche darf dabei nicht von festen Inhalten im
Quellcode abhängig sein, sondern muss flexibel auf Änderungen reagieren können
(vgl. @contentful_headless).

Auch die Performance ist eine zentrale Anforderung an das Frontend. Die
Web-Oberfläche soll kurze Ladezeiten aufweisen und flüssig reagieren, um eine
durchgehend angenehme Benutzererfahrung zu gewährleisten. Insbesondere bei
bildlastigen Inhalten ist auf eine effiziente Darstellung zu achten, da lange
Ladezeiten die Akzeptanz des Systems negativ beeinflussen können (vgl.
@webdev_performance).

Zusätzlich spielt die Wartbarkeit des Frontends eine entscheidende Rolle. Die
Web-Oberfläche soll auf einer klaren Komponentenstruktur basieren, sodass
wiederverwendbare UI-Elemente entstehen. Diese Struktur erleichtert nicht nur
die Weiterentwicklung, sondern stellt auch sicher, dass Design- und
Funktionsanpassungen konsistent umgesetzt werden können (vgl. @react_docs).

Zusammenfassend ergeben sich für die Web-Oberfläche Anforderungen an
Übersichtlichkeit, Lesbarkeit, Dynamik, Performance und Wartbarkeit, die
gemeinsam die Grundlage für ein benutzerfreundliches und zukunftssicheres
Frontend des digitalen Infopoints bilden.