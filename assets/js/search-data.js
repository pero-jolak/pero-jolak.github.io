// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "I present all my papers here, arranged in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Repositories of the code and data for some of my papers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Here I list the courses I taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-learning",
          title: "learning",
          description: "Here, I document my learning, with updates added periodically.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/learning/";
          },
        },{id: "nav-reading",
          title: "reading",
          description: "Books I recommend.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reading/";
          },
        },{id: "news-new-paper-published-in-physical-review-e-response-to-an-external-field-of-a-generalized-langevin-equation-with-stochastic-resetting-of-the-memory-kernel",
          title: 'New paper published in Physical Review E: Response to an external field of...',
          description: "",
          section: "News",},{id: "news-new-preprint-business-cycle-synchronization-between-the-eu-and-western-balkan-candidate-economies-a-wavelet-analysis",
          title: 'New preprint: Business cycle synchronization between the EU and Western Balkan candidate economies:...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%65%74%61%72.%6A%6F%6C%61%6B@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-7384-8756", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=CWn3tBgAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
