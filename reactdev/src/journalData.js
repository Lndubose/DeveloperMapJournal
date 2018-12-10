export const journalData = [
  {
    mainImage: '../images/week1/MainImage.PNG',
    contributionGraph: '../images/week1/ContributionGraph.PNG',
    excerpt:
      'This week was the beginning of our adventure the develop Developer Heat Maps. The challenges of this week consisted of creating a design for our website and getting our maps API to run. We used MapBox because of its really beautiful looks as our main page for the website. For our backend, we used firebase as out database which was a new challenge for us. However, with all the challenges we faced, we accomplished way more. We already have our map running, filter locations working, and already have a sign in for users functional.',
    FrontTasks: [
      {
        title: 'Setup Frontend',
        gitTitle: 'Add Component tree',
        githubUrl:
          'https://github.com/Lambda-School-Labs/Labs8-DeveloperMap/pull/1',
        trelloTitle: 'Github Setup',
        trelloUrl: 'https://trello.com/c/7zByhcEK/21-github-setup-frontend',
      },
      {
        title: 'Build Map',
        gitTitle: 'Map Functional',
        githubUrl:
          'https://github.com/Lambda-School-Labs/Labs8-DeveloperMap/pull/3',
        trelloTitle: 'Build Map',
        trelloUrl: 'https://trello.com/c/hnFNnnmb/23-build-map',
      },
      {
        title: 'Sign In and Sign Up',
        gitTitle: 'Sign In and Up Modal Style',
        githubUrl:
          'https://github.com/Lambda-School-Labs/Labs8-DeveloperMap/pull/6',
        trelloTitle: 'Sign In and Sign Up Modal',
        trelloUrl: 'https://trello.com/c/3AYIdrAj/27-signin-and-signup-modal',
      },
      {
        title: 'Deploy Frontend',
        gitTitle: 'Deployment',
        githubUrl:
          'https://github.com/Lambda-School-Labs/Labs8-DeveloperMap/pull/15',
        trelloTitle: 'Deployed Frontend',
        trelloUrl: 'https://trello.com/c/lKqFwL4k/29-deployed-frontend',
      },
    ],
    BackTasks: [
      {
        title: 'Documentation Backend',
        gitTitle: 'Add Documentation of Backend',
        githubUrl:
          'https://github.com/Lambda-School-Labs/Labs8-DeveloperMap/pull/17',
        trelloTitle: 'Backend Documentation',
        trelloUrl: 'https://trello.com/c/kC50vSqa/30-backend-documenation',
      },
    ],
    choseTicket: {
      title: '',
      body:
        'For the basis of our website, we need a working map. So I took on the task to get our map up and running for the site. We looked at many different options. First, we thought about using google maps. Google maps has great documentation and the features, like clustering, would have made our website even more enjoyable to use. However, the pricing for google maps was very steep. Recently they upped their prices where you only get 28,000 refreshes and then you paid $7 per 1,000 refreshes. The limited refreshes for our main page of the site turned us away from google maps. However, this gave us a bigger opportunity to learn a map API that could be better than google maps. \n We looked into MapBox and ArcGIS. ArcGIS was recommended to us by another member of Lambda School that works with them. We looked into it and I asked some questions about the site from the Lambda member. ArcGIS would have been a good option but we weren’t sold on it because the looks of the map were bland. So we decided to use MapBox. MapBox is used in apps like snapchat and twitter. They have a beautiful map look and an easy way to style their maps using their studio, plus the pricing is way better. The only downside was the documentation is not written for React for the version we are using. However, it does have React native documentation and module bundler documentation. So I had to do some research to learn the best way to get the map running. All in all, there was a little headache but after reading the documentation and finding some articles about it, I was able to have a map running on the landing page. I am personally really happy with the overall look of the map. We then have added a navigation bar and search filter later in the week. I am personally really excited about using mapbox and I can’t wait to add our markers to the project next week.',
      images: [
        {
          alt: 'Map View',
          url: './images/MainImage.PNG',
        },
        {
          alt: 'Map Studio',
          url: './images/MapboxStudio.PNG',
        },
        {
          alt: 'Map Code',
          url: './image/LandingCode.PNG',
        },
      ],
    },
    reflection:
      'Right away I was excited about the team. I already had prior experience working with all of the guys by having peer reviews together or working with them as PMs. We also are all super motivated to do well and were ready to go after Friday. On Monday it was a little slow since we did not have a trello board or our github yet. This was the day that I helped solidify the team. Since we had nothing to do, I started to work on our Figma Developer Map. Figma is a website that lets you design pages that your can use to create a web page. So, I started to do the basic framework or our modals and the landing page. The rest of the team then joined me while I worked because they felt motivated to work because I was working. I think right away this showed that the team all wants to work hard and does not want to be the weak chain in the group. This became more apparent as the week went continued. I think all of us have imposter syndrome with this project and feel like we are not working as hard as others. I have definitely felt the same and we did talk about this a bit with the group. However, I think the best thing is that we keep motivating each other and when someone feels like they are not helping, we should show each other examples how they have been a huge help. \n The only thing that I think can cause friction with our group is stress. We are constantly on discord talking all day and we chat and make jokes. I think this could eventually cause friction if one of us is stressed and accidentally lashes out but is really just stressed about other things. I personally am hyper aware of this and I have been constantly trying to make sure this does not happen. Do I think I have done this yet? I am not sure. I think the hardest part with just hearing voices on the web is that we never know what other people think because we can’t see their body language. Luckily, my group has been very open with each other and we did talk about the possibility of friction. We did agree that we all need to talk to each other to make sure that there will be no friction in our group.',
  },
];

// Tasks pulled
// {
//   title: "",
//   gitTitle: "",
//   githubUrl: "",
//   trelloTitle: "",
//   trelloUrl: ""
// }
