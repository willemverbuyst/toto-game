export interface Answer {
  order: number
  text: string
}

export interface Rule {
  Id: number
  question: string
  answers: Answer[]
}

export interface Rules {
  rules: Rule[]
}
