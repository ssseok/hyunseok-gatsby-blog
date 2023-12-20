export default {
  /**
   * basic Information
   */
  title: `hyun-seok.com`,
  description: `개발자 석이`,
  language: `ko`,
  siteUrl: `https://hyun-seok.com/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: `ssseok/hyunseok-gatsby-blog`, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `박현석`,
    nickname: `석이`,
    stack: ['Frontend', 'React', 'Typescript'],
    bio: {
      email: `luckseok1@gmail.com`,
      residence: 'Seoul, South Korea',
      // bachelorDegree: 'Kyunghee Univ. Computer Engineering (2018.03-2022.02)',
    },
    social: {
      github: `https://github.com/ssseok`,
      linkedIn: `https://www.linkedin.com/in/%ED%98%84%EC%84%9D-%EB%B0%95-a9179a243/`,
      resume: `https://docs.google.com/document/d/1RaFKfZ_nh5dd_-19pQ4yolYMSTvn8qMnZ9MML5vNhYw/edit`,
    },
    dropdown: {
      tistory: 'https://luckseok.tistory.com/',
      velog: 'https://velog.io/@ssseok',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'Featured1',
      category: 'featured1',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2023.05.01 - 2023.08.01',
      en: 'Supervic',
      kr: '슈퍼빅 (인턴)',
      info: 'Web front development',
      link: 'https://supervic.kr/',
    },
    {
      category: 'Activity',
      date: '2022.08 - 2023.02',
      en: 'Code States',
      kr: '코드스테이츠',
      info: 'Software Engineering Bootcamp Frontend 41기',
      link: 'https://www.codestates.com/',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Why Stay?',
      description: '슉박 목적에 따른 분류로 안성맞춤 숙박 업체',
      techStack: ['React', 'Redux-Toolkit', 'Styled-Components', 'React-Query'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: 'https://github.com/ssseok/Why-Stay?tab=readme-ov-file',
        demo: 'http://whystay.p-e.kr/',
        googlePlay: '',
        appStore: '',
      },
    },
  ],
};
