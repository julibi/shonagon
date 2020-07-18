import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import FadeInSection from '../FadeInSection';
import './AboutPage.css';

const AboutPage = () => {
  return(
    <div className="container">
      <FadeInSection className="fadeInText">
        <h1>{"AboutPage"}</h1>
        <h2>{"Über das Projekt"}</h2>
      </FadeInSection>
      <FadeInSection className="fadeInText">
        <p>{"Shanghai Shônagon ist der Arbeitstitel meines Romanprojekts, das ich während meines Studiums des Literarischen Schreibens an der Universität Hildesheim geschrieben habe. Im Rahmen der Masterarbeit habe ich das Grundgerüst einer simplen App programmiert, die es ermöglicht, die Erzähleinheiten des Romans dynamisch nonlinear zu lesen - also eine nonlineare Storytelling-App."}</p>
      </FadeInSection>
      <FadeInSection className="fadeInText">
        <p>{"Unter nonlinearer Narration werden oft Romane verstanden, in denen Erzähleinheiten in nicht-chronomologischer Reihenfolge erfolgen, also in einer Reihenfolge, welche die erzählte Zeit nicht exakt abbildet. Ich meine mit nonlinear allerdings eine Erweiterung ihres herkömmlichen Begriffs und zwar eine Erzählweise, in der es keinerlei Fixierung einer Reihenfolge gibt. Die Reihenfolge ergibt sich dynamisch, zum eine Teil durch Zufall und zum anderen durch einen simplen Algorithmus – aber dazu kommen wir später."}</p>
      </FadeInSection>
      <FadeInSection className="fadeInText">
        <p>{"Ein nonlineares Werk, das mich fasziniert hat, ist Tristano, „ein“ Roman von Nanni Balestrini der 1964 erschienen ist. Balestrini selbst ging es vermutlich weniger um die Nonlinearität, sondern um die computergenerierte Zufallskombination von Text und der Technik der Montage als Gegenbewegung zum literarischen Etablissement. Er fragmentierte fremde Texte und durchmischte sie mithilfe des Computers."}</p>
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
        <p>{"Doch auch hier wirkt das Konzept der nonlinearen Erzählung in dem Körper des Buches gefangen. Dabei ist mit dem Web das nonlineare Medium aufgetreten, welches eine technische Nonlinearität endlich zulässt. Es hat das Potenzial den Roman aus seinem starren Format herauszulösen und ihm eine technische Dynamik einzuhauchen. Mich fasziniert die Vorstellung zu beobachten, in was er sich verwandeln kann. Nonlineare Erzählweise und ihren Reiz, wie er in Werken wie Tristano vorhanden ist, in einer Web-App zu erzeugen – das war das Ziel meiner Masterarbeit."}</p>
      </FadeInSection>
      <FadeInSection className="fadeInText">
        <p>{"Ich bin nicht von selbst auf die Idee gekommen meine Geschichte nonlinear aufzuarbeiten. Sie ist auch nicht neu. Eine große Inspiration war das Korsakow-Projekt (http://korsakow.com/). Ich wollte es mit Shanghai Shônagon ausprobieren, weil ich glaube, dass das Setting, der Rythmus der Geschichte und der Stil sich für ein solches systematisches Shuffling eignet. Ich habe dafür das Romanprojekt nicht umgeschrieben, damit es sich nonlinear besser lesen lässt. Zwei Gründe habe ich dafür: 1) Es ist ein Experiment. 2) Es wäre viel zu viel Arbeit (Fulltime job, hallo XD). Worum geht es dann eigentlich in dem Roman?"}
        </p>
      </FadeInSection>
      <FadeInSection className="fadeInText">
        <h2>{"Exposé von Shanghai Shônagon"}</h2>
      </FadeInSection>
      <FadeInSection className="fadeInText">
        <p>{"Das Romanprojekt ‚Shanghai Shônagon’ (ca. 46 000 Wörter) ist eine autobiographisch inspirierte Fiktion, die das Identitätssgeflecht einer Figur erforscht, die in zwei Kulturen aufgewachsen ist. Gail, eine Frau Anfang/Mitte 20 mit chinesischen Wurzeln, kommt für zwei Auslandssemester mit ihren beiden Freunden Evariste und David in Shanghai an. Evariste ist Gails halb- taiwanesischer Sandkastenfreund. David ist „ganz deutsch“ und was China betrifft ein unbeschriebenes Blatt. Gail ist von ihm besessen, was sie jedoch vor ihm verbirgt."}
        </p>
      </FadeInSection>
      <FadeInSection className="fadeInText">
        <p>{"Den Vorsatz, möglichst viel Mandarin zu lernen, verwerfen die drei schnell. Denn das 20-stöckige Massenwohnheim ist ein Vier-Sterne-Hotel für partywütige, junge Erwachsene aus aller Welt. Die drei driften schnell in eine englischsprechende Parallelgesellschaft von Expats und Austauschstudenten ab, die sich in exklusiven Clubs herumtreibt. "}</p>
      </FadeInSection>
      <FadeInSection className="fadeInText">
        <p>{"Die kurzen schnappschussartigen Kapitel mit „Instagram-Charakter“ erzeugen ein Mosaik, welches das Leben der drei Freunde im pulsierenden Shanghai zeigt. Es ist ein Alltag aus einem aktiven Nachtleben mit vielen flüchtigen Begegnungen, die Gail noch mehr vereinsamen lassen. Denn sie merkt schnell, dass sich die Wege der Freunde in Shanghai allmählich trennen. Evariste und David sind unvoreingenommen und dadurch frei. Sie nutzen die Gelegenheiten, die ihnen die Stadt bietet, verfolgen ihre persönlichen Interessen und Karrieren. Und Gail?"}
        </p>
      </FadeInSection>
      <FadeInSection className="fadeInText">
        <p>{"Obwohl sie zunächst von der pulsierenden Metropole beeindruckt ist, spürt sie keine klare Verbindung zu ihrer vermeintlichen „Blutsheimat“. Sie gefällt sich in der Rolle der Kultur Erklärenden gegenüber David. Dabei ist sie genervt von seiner eurozentrischen Perspektive auf die Umgebung und versucht die chinesische Kultur ihm gegenüber zu verteidigen. Andererseits ist sie angewidert von den Sitten der Chinesen und sucht Gelegenheiten sich von ihnen abzugrenzen. Dennoch wagt sie einige verhaltene Versuche auf Mandarin mit ihnen in Kontakt zu treten und zeigt sich anders als die sonst so kaltschnäuzige und bewertende Gail von einer verunsicherten und zurückhaltenden Seite. Auf dieser verwirrenden Suche nach kultureller Zugehörigkeit sieht Gail sich auf einmal mit Altlasten aus ihrer Kindheit konfrontiert: Rassismus, Ignoranz und diesem entgegengesetzten chinesischen Nationalstolz. Immer mehr wird klar, dass es für sie unmöglich ist, in Shanghai und der chinesischen Sprache zu Hause zu sein. Sie fühlt sich unverstanden und fragt sich, ob es ein Land auf der Welt gibt, in dem sie keine Ausländerin wäre."}
        </p>
      </FadeInSection>
      <FadeInSection className="fadeInText">
        <p>{"Die Inhalte der Kapitel widersprechen sich immer stärker. Die englische Sprache nimmt Überhand und die Figur Gail löst sich auf, bis sie in dem Text nicht mehr persönlich auftaucht. Ihre Stimme ist untergegangen in den alltäglichen Gesprächen des Shanghaier Stadtlebens. Ist ihre dissoziative Identität implodiert oder ist es ihr endlich gelungen das Gedankengefängnis eines kulturellen Binärsystems hinter sich zu lassen, um ein Leben als Individuum zu beginnen? "}
        </p>
      </FadeInSection>
      <FadeInSection className="fadeInText">
        <h2>{"Algorithmus"}</h2>
      </FadeInSection>
      <FadeInSection className="fadeInText">
        <p>{"Ok, jetzt wissen wir, worum es geht. Nun zur Frage, wie die App entscheidet, welches Kapitel sie als nächstes anzeigen soll. Die Datenstruktur ist simple. Jede der Kapitel wird wie folgt als JSON-Objekt abgespeichert."}</p><br />
        <div className="code">
          <p>{'"id": 1'}
          {'"title": "GailDavidEvariste"'}<br />
          {'"tags": ["Evariste", "David", "Gail", "Hotel"]'}<br />
          {'"text": "Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Nulla consequat massa quis enim. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Ut leo. Ut id nisl quis enim dignissim sagittis. Praesent venenatis metus at tortor pulvinar varius. Vestibulum fringilla pede sit amet augue..."'}</p>
        </div>
        <br />
        <p>{"Zunächst Fisher-Yates-Shuffle Algorithmus"}
        </p>
      </FadeInSection>
    </div>
  );
};

export default AboutPage;
