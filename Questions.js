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
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAflBMVEX///+8AC23AAC7ACe7ACm4ABW5ABu4ABC6ACO5ABm7ACi4ABO6ACL46u3sx83NYXG3AAfnvcL14OTiqLH78fPKVGbEOE/9+PnGQFbjrbX35OjnuL/x09jsxszpv8XfoarSc4HXhZHAHj3CK0bbkJvQanm/DzbUeYbemqS/FjiKuKh1AAADpUlEQVR4nO3diXaiMBSA4QJCUFxwQ63WurTavv8LDtSZozZxipiQE/p/D+Dh3hOTS8jy9AQAAAAAAAAAAAAAAAAAAAqT3uplPRwO1y+r3sT2w1g3679usiBMRRIWEpGGQbZ57f/WzMz6272fRN1Oy7vU6nSjxN9v+zPbD1i74aAtutfZuMpMV7QHS9sPWafVMUnim/n4Jw6Tzcr2o9ZkPfe7PybkpOtna9uPW4PlTgQlM1IIxK7pf6H+TtzuRNRaYte3/dgG9ab+vRn5yoo/7dl+dFM+xM8dq1qcfth+eCN6WVIxI4Uka2BTWST3dK2yQCxsh6DbMX0oI4V0YzsIrWbz9sMp8bx21qB6v/dZtkj7v/izMZ3KKHqsKzkLopHtYPQYJVWKErWWaERSRqG+lORJCRuQlF6kMyV5UiLn+5SZ19GaEi//PddHn6xqOX9bnNkO6jHvkfaUeF70bjusRywer15V0rHtwKp79o2kxPP8Z9uhVbbXVat9F+xth1bVW2goJZ4XvtkOrhpj/5yC72bpNjf1zykEc9vhVbEUBlPiecLF6XxPb03/XetgO8D7jc11sCehe0VKbLaZ5A0lth3ivRamm0neUFybtN6ZbiZ5Q9nZDvI+fTMvOtdSt76ZDvRPEcjige0w7zGpo5nkDcWlNV5jHZ9zftZ2aTg2WtafuVTgT0y+/V3y3fnzLM0XJyehOy8973WMOoXYnZlZw69/Zy3PdqhlPdczEhdSVyZma+tOHOpQtnpWVpTR3doOtqRpPdVJIZ7aDrakQ11drEOzbXVVbAXfdrDl1DjsODPwrMxO2F8TbuzcWNc3FOeDsRv7Nhb1TBSctN2YlK1p8uRvTtyYQhmbWIdzS0ROyEmDckJ/ImHckVGfyKhjZbzvKPBeLGP+RMY8m4z5WBnz9jK+7yjwHVDG92IZ6wpkrD9RYJ2SjPVsMtY9KrA+VsY6agXW28vYl6HA/h0Z+7wUDM+2OTPDdsnwvtHUnVedC+wvlpndh+7MZNI1zitQ4FwLGeefKJg6J8e5CvbSxsh5ShvbYT2Gc7dks4PufrZzcP18Ns7xU+G8RwWt54ImjUgJ58cqcc6wAudRq+g4t/xoOwjdlnddHSILnDx87Afcg6DywH0Zopn3ZTxxr4oa9++ocE+TCvd5qayOYbl7345u7LrQ5Ot+wNtH33d+3f2AJ8U9kuLmPZIvzarjy7t13+hvzccZ99ICAAAAAAAAAAAAAAAAACD7A+PaSTdtOrdEAAAAAElFTkSuQmCC',
    alt: 'Japanese flag'
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
    icon: 'hdata:image/png;base64,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ttps://www.google.com/search?q=taiwan+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiExrjgkbfjAhVKB50JHbztBQ0Q_AUIECgB&biw=1119&bih=618#imgrc=xA4B0bEO-JaNRM:',
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

