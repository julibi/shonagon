import React, { Fragment } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import classNames from 'classnames';
import FadeInSection from '../FadeInSection';
import './AboutPage.css';
import '../../assets/soulmate.JPG';

const AboutPage = () => {
  return(
    <div>
      <div className="menu">
        <ul className="list">
        <li className="listItem">
            <Link
              activeClass="activeLink"
              to="Aboutme"
              spy={true}
              smooth={true}
              duration={500}
            >
              {"Über mich"}
            </Link>
          </li>
          <li className="listItem">
          <Link
              activeClass="activeLink"
              to="Algorithmus"
              spy={true}
              smooth={true}
              duration={500}
            >
              {"Algorithmus"}
            </Link>
          </li>
          <li className="listItem">
            <Link
              activeClass="activeLink"
              to="Exposé"
              spy={true}
              smooth={true}
              duration={500}
            >
              {"Exposé Shanghai Shônagon"}
              </Link>
          </li>
          <li className="listItem">
            <Link
              activeClass="activeLink"
              to="Project"
              spy={true}
              smooth={true}
              duration={800}
            >
              {"Über das Projekt"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <div>
          <h1 className="title">{"About"}</h1>
          <br />
          <section
          title="Project"
          id="Project"
          >
            <h2 className="subTitle">{"Über das Projekt"}</h2>
            <FadeInSection className="fadeInText">
              <p>{"Shanghai Shônagon ist der Arbeitstitel meines Romanprojekts, das ich während meines Studiums des Literarischen Schreibens an der Universität Hildesheim geschrieben habe. Im Rahmen der Masterarbeit habe ich das Grundgerüst einer simplen App programmiert, die es ermöglicht, die Erzähleinheiten des Romans dynamisch nonlinear zu lesen - also "}<span className="boldified">{"eine nonlineare Storytelling-App."}</span></p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p>{"Unter nonlinearer Narration werden oft Romane verstanden, in denen Erzähleinheiten in nicht-chronologischer Reihenfolge erfolgen, also in einer Reihenfolge, welche die erzählte Zeit nicht exakt abbildet. Ich meine mit nonlinear allerdings eine Erweiterung ihres herkömmlichen Begriffs und zwar eine Erzählweise, in der es keinerlei Fixierung einer Reihenfolge gibt. Die Reihenfolge ergibt sich dynamisch, zum eine Teil durch Zufall und zum anderen durch einen simplen Algorithmus – aber dazu kommen wir später."}</p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p>{"Ein nonlineares Werk, das mich fasziniert hat, ist "}<span className="boldified">{"Tristano, „ein“ Roman von Nanni Balestrini der 1964 "}</span>{"erschienen ist. Balestrini selbst ging es vermutlich weniger um die Nonlinearität, sondern um die computergenerierte Zufallskombination von Text und der Technik der Montage als Gegenbewegung zum literarischen Etablissement. Er fragmentierte fremde Texte und durchmischte sie mithilfe des Computers."}</p>
              <br />
              <p>{"Zwar hat Ballestrini ein paar Hinweise auf seine eigene Biographie in dem Text verwoben, dennoch bleibt es schwer auszumachen, worum es in der Geschichte geht, wenn man denn überhaupt von einer Geschichte im herkömmlichen Sine sprechen kann. Jede Ausgabe von Tristano ist eine von 109.027.350432.000 möglichen Anordnung der Sätze. Die Ausgabe, die ich besitze, trägt die Nummer 7.615 und ist somit wie alle anderen Ausgaben einzigartig."}</p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p>{"Tristano hat bei der Lektüre einen besonderen Reiz, obwohl man ca. die ersten 20 Seiten im Dunkeln tappt, da sich kein Inhalt für den Leser erschließt. Ab und zu tritt ein „Ich“ auf, noch öfter ein „C“. Versuche „C“ zu identifizieren sind vergeblich, da es mal weiblich, männlich oder sachlich. Doch allmählich wird man vertrauter mit der „Geschichte“. Es handelt von einem Paar, das eine Affäre hat und sich im Hotel am Strand trifft. Es geht um Geldsorgen und Bestechung. Man mäandert durch den Alltag dieser beiden Nichtstuer. Sie liegen viel im Bett herum, spazieren an der Promenade, telefonieren und durchqueren Räume. Durchsetzt ist dieses Setting von – warum auch immer – Auszügen aus Berichten zu Urmenschfunden in Höhlen. Durch Zufall ergeben sich sprachliche Sequenzen, die Satzzusammenhänge erzeugen und gewisse Sätze in Tristano wiederholen sich immer wieder. Diese Wiederholungen und zufälligen Zusammenhänge verstärken das fast instinktive Bedürfnis den Text unbedingt verstehen und einen Zusammenhang herstellen zu wollen. Während dieser Drang einem vor Augen führt, wie schwer es ist einen gänzlich unkonventionellen Text zu verfassen und vor allem zu lesen, macht er auch den besonderen Reiz von Tristano aus."}
              </p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p>{"Narrativ betrachtet ist Tristano zwar nonlinear, doch das Konzept scheint seiner Zeit voraus zu sein: das Format des Buches lässt die technische Nonlinearität nicht zu. Es gibt noch heutzutage Versuche die Nonlinearität auf das Buch anzuwenden, so wie Francis Neniks 2012 veröffentlichtes XO. Dieses „Buch“ hat keinen Buchrücken, sondern die Seiten liegen lose in einer Schachtel. Seiten, die zusammengehören, weil sie einen Sinnabschnitt bilden, sind anstatt mit Seitenzahlen mit gleichen Symbolen markiert. Es kommt einem als Leser fast vor, als würde es einen auffordern, XO über Raum und Zeit verstreuen. Die Geschichte wird aus seiner Form – dem Buch – befreit wie eine Seele aus seinem Körper."}
              </p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p>{"Doch auch hier wirkt das Konzept der nonlinearen Erzählung in dem Körper des Buches gefangen. Dabei ist mit dem "}<span className="boldified"> {"Web das nonlineare Medium aufgetreten, welches eine technische Nonlinearität endlich zulässt. "}</span>{"Es hat das Potenzial den Roman aus seinem starren Format herauszulösen und ihm eine technische Dynamik einzuhauchen. Mich fasziniert die Vorstellung zu beobachten, in was er sich verwandeln kann. Nonlineare Erzählweise und ihren Reiz, wie er in Werken wie Tristano vorhanden ist, in einer Web-App zu erzeugen – das war das Ziel meiner Masterarbeit."}</p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p><span className="boldified">{"Ich bin nicht von selbst auf die Idee gekommen meine Geschichte nonlinear aufzuarbeiten. Sie ist auch nicht neu. "}</span>{"Eine große Inspiration war das "}<span className="boldified"><a href="http://korsakow.com/" target="_blank" rel="noopener noreferrer">{"Korsakow-Projekt. "}</a></span>{"Ich wollte es mit Shanghai Shônagon ausprobieren, weil ich glaube, dass das Setting, der Rythmus der Geschichte und der Stil sich für ein solches systematisches Shuffling eignet. Ich habe dafür das Romanprojekt nicht umgeschrieben, damit es sich nonlinear besser lesen lässt. Zwei Gründe habe ich dafür: 1) Es ist ein Experiment. 2) Es wäre viel zu viel Arbeit (Fulltime job, hallo). Worum geht es dann eigentlich in dem Roman?"}
              </p>
            </FadeInSection>
            <br />
            <br />
          </section>
          <section
            title="Exposé"
            id="Exposé"
          >
            <h2 className="subTitle">{"Exposé von Shanghai Shônagon"}</h2>
            <FadeInSection className="fadeInText">
              <p>{"Das Romanprojekt ‚Shanghai Shônagon’ (ca. 46 000 Wörter) ist eine "}<span className="boldified">{"autobiographisch inspirierte Fiktion"}</span>{", die das Identitätssgeflecht einer Figur erforscht, die in zwei Kulturen aufgewachsen ist. Gail, eine Frau Anfang/Mitte 20 mit chinesischen Wurzeln, kommt für zwei Auslandssemester mit ihren beiden Freunden Evariste und David in Shanghai an. Evariste ist Gails halb- taiwanesischer Sandkastenfreund. David ist „ganz deutsch“ und was China betrifft ein unbeschriebenes Blatt. Gail ist von ihm besessen, was sie jedoch vor ihm verbirgt."}
              </p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p>{"Den Vorsatz, möglichst viel Mandarin zu lernen, verwerfen die drei schnell. Denn das 20-stöckige Massenwohnheim ist ein Vier-Sterne-Hotel für partywütige, junge Erwachsene aus aller Welt. Die drei driften schnell in eine englischsprechende Parallelgesellschaft von Expats und Austauschstudenten ab, die sich in exklusiven Clubs herumtreibt. "}</p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p><span className="boldified">{"Die kurzen schnappschussartigen Kapitel mit „Instagram-Charakter“ erzeugen ein Mosaik, welches das Leben der drei Freunde im pulsierenden Shanghai zeigt."}</span>{"Es ist ein Alltag aus einem aktiven Nachtleben mit vielen flüchtigen Begegnungen, die Gail noch mehr vereinsamen lassen. Denn sie merkt schnell, dass sich die Wege der Freunde in Shanghai allmählich trennen. Evariste und David sind unvoreingenommen und dadurch frei. Sie nutzen die Gelegenheiten, die ihnen die Stadt bietet, verfolgen ihre persönlichen Interessen und Karrieren. Und Gail?"}
              </p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p>{"Obwohl sie zunächst von der pulsierenden Metropole beeindruckt ist, spürt sie keine klare Verbindung zu ihrer vermeintlichen „Blutsheimat“. Sie gefällt sich in der Rolle der Kultur Erklärenden gegenüber David. Dabei ist sie genervt von seiner eurozentrischen Perspektive auf die Umgebung und versucht die chinesische Kultur ihm gegenüber zu verteidigen. Andererseits ist sie angewidert von den Sitten der Chinesen und sucht Gelegenheiten sich von ihnen abzugrenzen. Dennoch wagt sie einige verhaltene Versuche auf Mandarin mit ihnen in Kontakt zu treten und zeigt sich anders als die sonst so kaltschnäuzige und bewertende Gail von einer verunsicherten und zurückhaltenden Seite. Auf dieser verwirrenden Suche nach kultureller Zugehörigkeit sieht Gail sich auf einmal mit Altlasten aus ihrer Kindheit konfrontiert: Rassismus, Ignoranz und diesem entgegengesetzten chinesischen Nationalstolz. Immer mehr wird klar, dass es für sie unmöglich ist, in Shanghai und der chinesischen Sprache zu Hause zu sein. Sie fühlt sich unverstanden und fragt sich, ob es ein Land auf der Welt gibt, in dem sie keine Ausländerin wäre."}
              </p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p>{"Die Inhalte der Kapitel widersprechen sich immer stärker. Die englische Sprache nimmt Überhand und die Figur Gail löst sich auf, bis sie in dem Text nicht mehr persönlich auftaucht. Ihre Stimme ist untergegangen in den alltäglichen Gesprächen des Shanghaier Stadtlebens. "}<span className="boldified">{"Ist ihre dissoziative Identität implodiert oder ist es ihr endlich gelungen das Gedankengefängnis eines kulturellen Binärsystems hinter sich zu lassen, um ein Leben als Individuum zu beginnen?"}</span>
              </p>
            </FadeInSection>
            <br />
            <br />
          </section>
          <section
            title="Algorithmus"
            id="Algorithmus"
          >
            <h2 className="subTitle">{"Algorithmus"}</h2>
            <FadeInSection className="fadeInText">
              <p>{"Ok, jetzt wissen wir, worum es geht. Nun zur Frage, wie die App entscheidet, welches Kapitel sie als nächstes anzeigen soll. Die Datenstruktur ist simpel. Jede der Kapitel wird wie folgt als JSON-Objekt abgespeichert."}</p>
              <div className="code">
                <p>{'"id": 1'}<br />
                  {'"title": "GailDavidEvariste"'}<br />
                  {'"tags": ["Evariste", "David", "Gail", "Hotel"]'}<br />
                  {'"text": "Lange bevor ich David kannte, kannte Evariste ihn vom Squash-Club...."'}</p>
              </div>
              <p>{"Es liegt auf der Hand einen Fisher-Yates-Shuffle Algorithmus anzuwenden..."}</p>
              <div className="code">
                <p>"chapters[Math.floor(Math.random()* chapters.length)]"</p>
              </div>
              <p>{"Aber es reizt mich über die reine Zufallsgenerierung hinauszugehen. "}<span className="boldified">{"Wie wäre es, wenn man inhaltlich zusammenhängende Kapitel miteinander verknüpfen könnte, in dem man jedem Text eine Art Subtext verleiht? "}</span>{"Der Leser würde sich weiterhin ahnungslos durch die Geschichte klicken, doch er würde schneller Zusammenhänge entdecken."}
              </p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p>{"Hier kommen die 'tags' ins Spiel, die man im JSON snippet sieht. Jedem Kapitel werden ein oder mehrere tags verliehen, die als inhaltliche Schlagwörter eine Art Subtext des Kapitels bilden. Insgesamt gibt es 15 solcher Tags: Evariste, David, Gail, Hotel, Rush Hour, Rauchen, Essen, Shanghai, Ailing, Kindheit, Party, Mandarin, Uni, Seo-Yeon, Hamburg. Es sind überwiegend Namen von Charakteren, Orten oder Aktivitäten. Ich hätte mich für weniger oberflächliche Tags entscheiden können, z.B. für emotionale. (Eifersucht, Freundschaft, Aufregung, Nostalgie etc.) Das würde vermutlich ein anderes Leseerlebnis erzeugen. Vielleicht ein Experiment für die Zukunft? Aber fürs Erste habe ich mich für diese Tags entschieden."}</p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p>{"Die erste Szene in unserem Beispiel ist also 'GailDavidEvariste'. "} <span className="boldified">{"Wenn die App entscheiden muss, welches Kapitel sie als nächstes anzeigt, wählt sie einen der vier Tags (Evariste, David, Gail, Hotel) willkürlich aus, z.B. Hotel. Anschließend filtert sie alle Kapitel nach denjenigen, die das 'Hotel'-tag haben. Das sind abzüglich des aktuellen Kapitels insgesamt 7. Aus diesen 7 wählt die App eins willkürlich aus und das ist das nächste Kapitel, das angezeigt wird."}</span>{" In jedem darauf folgenden Rendering eines Kapitels wiederholt sich die beschriebene Vorgang mit dem einzigen Unterschied, dass ein Kapitel auch darauf geprüft wird, ob es bereits angezeigt wurde. Denn es soll natürlich vermieden werden, dass ein Kapitel zwei Mal angezeigt wird."}</p>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <div className="code">
                <p>
                  {"const tag = tags[Math.floor(Math.random() * tags.length)];"}<br />
                  {"const candidates = SNUS.filter(snu => snu.tags.includes(tag) && !readSnus.includes(snu.id)); "}
                </p>
              </div>
            </FadeInSection>
            <FadeInSection className="fadeInText">
            <p>{"Einige Tags kommen wesentlich häufiger vor. Ein Kapitel, das mit vielen häufig vorkommendenden Tags versehen ist, kommt mit höherer Wahrscheinlichkeit früher vor. Ich habe mich im Grunde willkürlich für diesen Algorithmus entschieden. Auch wenn ich arroganterweise behaupten will, mich aus einem literarischen Instink heraus für ihn entschieden zu haben. Doch es gibt unendlich viele Möglichkeiten für einen Algorithmus, der den Kapitelflow bestimmt. Und es liegt auf der Hand, dass man ihn viel intelligenter gestalten könnte. Vielleicht könnte man ohne Tags arbeiten? Man könnte dem Leser ein wenig auf den Zahn fühlen, was seinen literarischen Geschmack angeht, indem man ihm nach zwei, drei Kapiteln ein paar Fragen beantworten lässt. Vielleicht steht der Leser nicht so auf Adjektive? Die Kapitel könnten auf Adjektivdichte untersucht und danach gefiltert werden. Die Kapitel haben unterschiedliche Stimmungen. Man könnte mithilfe von simplen NPU-Methoden die Stimmung ergründen und die Kapitel nach einem 'Stimmungsmuster' anzeigen, vielleicht sogar 'on the go' manipulieren. Nichts ist unmöglich. Das hier ist nur ein erster Wurf, ein kleines Experiment und ich freue mich, dass du bis hierhin gelesen hast. Danke." }
            </p>
          </FadeInSection>
          </section>
          <section
            title="Aboutme"
            id="Aboutme"
          >
            <h2 className="subTitle">{"Über mich"}</h2>
            <FadeInSection className="fadeInText">
              <div className="code">
                <p>{'"id": J. Yi'}<br />
                  {'"geboren": "1989"'}<br />
                  {'"uni": "Universität Heidelberg - Ostasienwissenschaften (Japanologie), Universität Hildesheim - Literarisches Schreiben"'}<br />
                  {'"beruf": "Frontend Developer bei XING"'}<br />
                  {'"schreib_mir": '} <a href="https://www.facebook.com/jly.aorta" target="_blank" rel="noopener noreferrer" className="styled-link">Facebook</a>
                  </p>
              </div>
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <img
                src={require('../../assets/soulmate.JPG')}
                alt="soulmate"
                className="soulmate"  
              />
            </FadeInSection>
            <FadeInSection className="fadeInText">
              <p>{"Cheers."}</p>
            </FadeInSection>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
