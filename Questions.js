'use strict'

const STORE= [
  {
    question: 'What is the capital of Japan?',
    answers: [
      'Osaka',
      'Kyoto',
      'Fukuoka',
      'Tokyo'
    ],
  correctAnswer: 'Tokyo',
    icon: 'data:image/jpeg;base64,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'
    alt 'japanese flag'
  },
  {
    question: 'What is the capital of Taiwan?',
    answers: [
      'Hsinchu',
      'Taipei',
      'Kaohsiung',
      'Tainan'
    ],
  correctAnswer: 'Taipei',
    icon: 'hdata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAolBMVEXtHSQqMIb////7HBqSJ1cRMY3yHR4bMImSJ18oLoUmLIQXH38fJoIbIoAlK4QqMYYTHH719frp6vPd3uzi4+4ADnsQGX3X2OfLzN+vsc8RGn7v8PcFEnu/wdmdn8Srrc1na6RfY6B0d65JTZY8QY9WWpwyOI0ACXpPVJmKjbqSlL5ITJLDxdymqMtsb6h+gbA2PIuMKGO8I0MAAHeChbN5e62C7d6MAAAG3UlEQVR4nO2caXPqNhRAa3XV6gXvK8Y2OAQIbeH//7XKCwSeX4Kd104R3PMJGIaMz1xd6V5J+Um7E37/47ef7oX/28UJcDIEnAwBJ0PAyRBwMgScDAEnQ8DJkEdzgvGP/8aDOcHl8sd/5MGcGC+5ACfXOPaag5MriEABfXYnmFy95Tvkkassi78wlNR2Qqr6aqjQAJnFpQXMFkSbitpORGUXF1Lw0kPoYFx8QLMgfjInGp/ZNdXPivIIoeRdAnZSdJyecxV3Eq6RVZ6fmr4ghCxxSiiYpsh6nZ5QFHfCaoTsU07RnUA6MXPWK3FThHwxfWGruBOM5Wix9r2UWL5BaN3PxjKGENp+YWpW3IlmJM1wqVopTdBI/G42jrfNmzl7PicyZUjsNqe06UQaKkkzcNo3pjZ9Klbeiaja8RI1OYX6rRO04xqOs/Zl4ui3f+PRnBB91j68XVBSWJ2Tras56+7li3H7Jx7OiWYE3dNHFXt9q4qyKHYLxrooQaj6QjpR0Ym4qmj4oouTrBLCcBtCjslL0n46219+FY+cl9VzgutXwd+fTmhNkKw1yqle5LvjYl6VjFOj2sjPg/NyDgvG9ap8UCci9/x1bcS097LyUFK41K1Tv8sn5ix5Yy6N3yz01jrBmLvuchd42X5UoKjnROPzCJlWcnwllMmFu5umnPN8Y6ILrFSnvExqIQOEs+V87UUmSti4db6CTjSjm39NPzuWlMoo4PsAfcvsEDKuCVfk66SbmgIxsvRR0YlG5/2sa0bey5LQyhsokaSMiDqwT/EzNkoUdaIZr9HpydeM5ub3lCC0Eay0T28CNnpFq6YTGSm9lE3Mc+v7SmRouPzkKyHjewaKOjlFil0y/UMlzfCJuxoocCfUPao60Yw2UlLqDtPrO2bFWaMsIFNKQWWdaLS2kE358YNk0uGF9CCVOJOqY3WdaEZuprHhf6YEoQXdWwGe1jBQ2InG84IXnytBvhA7PrGHorATTBg20htOrFcxel2iuhPCKCtLIuwbTprtnnpJ+ZRWtZJOBI1xnm7sA62jW04CJ/a94FCELicjvSjnhMiavzgGltnsWhi7T2edBs9ZNb0U00vzknE2RotaTohBpY9TdRPVxuGWEmTF8anpFm3SXA9v7wsq5YSU29nFYImK8OWmkyjsNjU6TMtf3AwVpZxgrT4E3nm4mIU70Ynlb3flYzmR2ZXT5XyddFrMKny76cSOnX7szLJjzemI8lgxJ1pzpMRwwnLbNBqP4Udtgnd8Z+WjaJYshBOPnJHVcyLRsaCsPm6PvPykKO7Yxjxb53KFQrSx219KOmkRzGDnrb+P2ckvUfEsNaAsjQk93lAyKwlnE/dHFXaCWbCj+o2EkhkiqSYeVVLXSbNNnqyM7FMlZkFz06ropEhR1glm27aPVnxaBaZxs58c1ZMiRVUnuFt1JMz4LKPM9l2Dxa74hEhR1QnvGifmgsYfN2TNnPNN+8qaEilqOsHOSUS0ZDj5SMkipP05lOZ41+hIUdIJDt/baxtdiM33lbxRlp/fWfXo034qOsHnczhe8rbUhAjT78zIs8KVS7U69fskHI2OFAWdNKejm2dMDlWzZBcF4XQ+2DFOSx7X+7ZFuUhnXaSMPMilnhOsJcj2X4rYaU+g6KuNXYV8lW/eSx/TTpcxJ2l7EhQT5q7YPPNMNPK+k3pO2CJ7K2TNj/uR4ETIWtOQ8mqd+Z4985J0sXd5XPrn48O6JriB8/W2GFX3qOdEI/Sy29wdFLYOhayVQ4NzTg2DCb1qU45/8UUsh9G4P6Cgk2tOs621kAWwE8exExNNBF3StcYFxqM54X23IBOi8jdBliVeFoq8n2x2X7kdqLoT0p+6CQTBei/ixdCbDfZ29nGf0AlbtKMkoKS/jyCp5PRCu0jxntFJ1yvIwiZv9MeHu4PCtG1LXt8OfBIntFmsbbsjN2LZDaMuh3SRcvhCQlHcidg3EuJudtFX7Wq2vwEoc4qUkjzfnSaeX5xo1NvdrffhQvMIecunu/sWJmj79/mpWZNQZu9VDS9ss3q2O5JYt4KLm1zkVebV7GKqoVW0nn6DR20nYr5dXaxUMZMLuPwyq9I8ezYnuLz+HzA0RdH+ajnPCn1yQlHbifbN87ICJd8cu3nCO5LXYMP8yoXih3aixcnxKzcAH9oJ332pO/DQTuD/bv1HgJMh4GQIOBkCToaAkyHgZAg4GQJOhtyTk1/vhT/vx8kv98Jf9+Pk53vhfpQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8W/wDNXGvcFPt6p0AAAAASUVORK5CYII=ttps://www.google.com/search?q=taiwan+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiExrjgkbfjAhVKB50JHbztBQ0Q_AUIECgB&biw=1119&bih=618#imgrc=xA4B0bEO-JaNRM:',
    alt: 'Taiwan flag'
  },
  {
    question: 'What is the capital of China?',
    answers: [
      'Beijing',
      'Shanghai',
      'Shenzhen',
      'Nanjing'
    ],
    correctAnswer: "Beijing",
    icon: 'https://i.ytimg.com/vi/M82sotj1JAc/maxresdefault.jpg',
    alt: 'China flag'
  },
  {
    question: 'What is the capital of South Korea?',
    answers: [
      'Busan',
      'Incheon',
      'Seoul',
      'Gimpo',
    ],
    correctAnswer: 'Seoul',
    icon: 'hhttps://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svgttps://www.google.com/sehttps://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svgarch?q=south+korea+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjxsvbJkbfjAhVJVc0KHSlfD_oQ_AUIECgB&biw=1119&bih=618#imgrc=0qMmZI1yU3orzM:',
    alt: 'South Korea flag'
  },
  {
    question: 'What is the capital of Canada?',
    answers: [
      'Ottawa',
      'Toronto',
      'Montreal',
      'Ontario'
    ],
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svghttps://wwhttps://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svgw.google.com/search?q=canada+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj0q-_CkbfjAhUXHc0KHYzMBr0Q_AUIECgB&biw=1119&bih=618#imgrc=8BbVkRiS5q_auM:',
    alt: 'Canda flag'
  },
  {
    question: 'What is the capital of Australia?',
    answers: [
      'Canberra',
      'Sydney',
      'Melbourne',
      'Perth',
    ],
    correctAnswer: 'Canberra',
    icon: 'https://www.google.com/search?q=australia+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi3hJS6kbfjAhVFHc0KHZKLC-4Q_AUIECgB&biw=1119&bih=618#imgrc=gRsR_oXneAtsCM:',
    alt: 'Australia Flag'
  },
  {
    question: 'What is the capital of Mexico?',
    answers: [
      'Guadalajara',
      'Puebla',
      'Cancún',
      'Mexico City'
    ],
    correctAnswer: 'Mexico City',
    icon: 'https://www.google.com/search?q=mexico+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwio56uxkbfjAhXQZc0KHV08AGYQ_AUIECgB&biw=1119&bih=618#imgrc=s-kixUN_bpy9zM:',
    alt: 'Mexico flag'
  },
  {
    question: 'What is the capital of the United Kingdom?',
    answers: [
      'Liverpool',
      'Bristol',
      'London',
      'Glasgow'
    ],
    correctAnswer: 'London',
    icon: 'https://www.google.com/search?q=uk+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwimxZSpkbfjAhXaLc0KHcmcCocQ_AUIECgBhttps://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png&biw=1119&bih=618#imgrc=loDVUIgaAvTIPM:',
    alt: 'United Kingdom Flag'
  },
  {
    question: 'What is the capital of France?',
    answers: [
      'Nice',
      'Paris',
      'Lyon',
      'Toulouse',
    ],
    correctAnswer: 'Paris',
    icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.pnghttps://www.google.com/search?q=france+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwioipqbkbfjAhWVUs0KHRERDtAQ_AUIECgB&biw=1119&bih=618#imgrc=bAY4pm1ktOuMLM:',
    alt: 'French Flag'
  },
  {
    question: 'What is the capital of Italy?',
    answers: [
      'Florence',
      'Venice',
      'Milan',
      'Rome'
    ],
    correctAnswer: 'Rome',
    icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.pnghttps://www.google.com/search?q=italian+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi7r_2OkbfjAhWJG80KHcxMDsEQ_AUIECgB&biw=1119&bih=618#imgrc=hDjjQN_rnzImoM:',
    alt: 'Italian flag'
  }
];

