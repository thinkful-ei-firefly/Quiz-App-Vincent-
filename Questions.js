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
    icon: 'https://www.google.com/search?q=taiwan+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiExrjgkbfjAhVKB50JHbztBQ0Q_AUIECgB&biw=1119&bih=618#imgrc=xA4B0bEO-JaNRM:',
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
    icon: 'https://www.google.com/search?q=china+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiQ99DWkbfjAhUXOs0KHTFzAlMQ_AUIECgB&biw=1119&bih=618#imgrc=GeCanEo9fwa3RM:',
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
    icon: 'https://www.google.com/search?q=south+korea+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjxsvbJkbfjAhVJVc0KHSlfD_oQ_AUIECgB&biw=1119&bih=618#imgrc=0qMmZI1yU3orzM:',
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
    icon: 'https://www.google.com/search?q=canada+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj0q-_CkbfjAhUXHc0KHYzMBr0Q_AUIECgB&biw=1119&bih=618#imgrc=8BbVkRiS5q_auM:',
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
    icon: 'https://www.google.com/search?q=uk+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwimxZSpkbfjAhXaLc0KHcmcCocQ_AUIECgB&biw=1119&bih=618#imgrc=loDVUIgaAvTIPM:',
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
    icon: 'https://www.google.com/search?q=france+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwioipqbkbfjAhWVUs0KHRERDtAQ_AUIECgB&biw=1119&bih=618#imgrc=bAY4pm1ktOuMLM:',
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
    icon: 'https://www.google.com/search?q=italian+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi7r_2OkbfjAhWJG80KHcxMDsEQ_AUIECgB&biw=1119&bih=618#imgrc=hDjjQN_rnzImoM:',
    alt: 'Italian flag'
  }
];

