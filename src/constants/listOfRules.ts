const listOfRules: Array<{
  id: number
  question: string
  answers: Array<{ id: number; text: string }>
}> = [
  {
    id: 1,
    question: 'Hoeveel punten kan ik verdienen per wedstrijd?',
    answers: [
      {
        id: 1,
        text: 'Het aantal goals per team goed voorspeld: 2 punten (dus 2x2 punten te verdienen',
      },
      { id: 2, text: 'Een winner of gelijkspel goed voorspeld: 5 punten' },
      { id: 3, text: 'Een volledige uitslag goed voorspeld: 1 punt' },
      {
        id: 4,
        text: 'De punten tellen op, dus als de gehele uitslag goed is, voorspeld verdien je in totaal 10 punten.',
      },
    ],
  },
  {
    id: 2,
    question: 'Hoeveel totorondes worden er gespeeld?',
    answers: [
      {
        id: 1,
        text: 'Er worden in totaal 11 totorondes per seizoen gespeeld.',
      },
      { id: 2, text: 'Elke totoronde duurt 3 speelrondes.' },
      {
        id: 3,
        text: 'Behalve de laatste totoronde, die bestaat uit 4 speelrondes.',
      },
    ],
  },
  {
    id: 3,
    question: 'Wat is de totaaltoto?',
    answers: [
      {
        id: 1,
        text: 'Naast de reguliere totorondes, is er ook een Totaaltoto.',
      },
      {
        id: 2,
        text: 'Dit is een aparte toto dat bestaat uit alle 34 speelrondes.',
      },
      {
        id: 3,
        text: 'Degene die aan het eind de meeste punten heeft verdiend, wint de Totaaltoto.',
      },
    ],
  },
  {
    id: 4,
    question: 'Wanneer ben je de winnaar van de toto?',
    answers: [
      {
        id: 1,
        text: 'Na afloop van de laatste speelronde van een spel worden alle punten bij elkaar opgeteld.',
      },
      { id: 2, text: 'Degene met de meeste punten wint.' },
      {
        id: 3,
        text: 'Een spel heeft pas een winnaar als er minimaal 90% is gespeeld. Zodra bekend wordt wat er gebeurt met eventuele ontbrekende wedstrijden in een spel zullen we daarom bekijken of er wordt voldaan aan de 90%. Zo ja, dan keren we uit aan degene(n) die op dat moment bovenaan staan. Zo nee, dan blijft de inleg van dit spel staan voor een volgend spel.',
      },
    ],
  },
  {
    id: 5,
    question: 'Wat gebeurt er als ik mijn punten niet heb ingezet?',
    answers: [
      {
        id: 1,
        text: 'Wanneer een speler geen voorspelling heeft gedaan dan wordt er géén score genoteerd.',
      },
      {
        id: 2,
        text: 'Er zijn dan ook geen punten te behalen op deze wedstrijd.',
      },
    ],
  },
]

export default listOfRules
