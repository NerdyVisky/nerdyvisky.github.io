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
          description: "Peer-reviewed research contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my research and software contributions!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-trophy-won-1st-runners-up-award-with-a-cash-prize-of-1300-at-the-annual-threesis-academic-challenge-in-nyu-gsas-listen-to-my-3-minute-talk-on-the-curious-case-of-the-aging-ai-doctor-here",
          title: ':trophy: Won 1st Runners Up award with a cash prize of $1300 at...',
          description: "",
          section: "News",},{id: "news-confetti-ball-our-work-titled-synslidegen-ai-generated-lecture-slides-for-improving-slide-element-detection-and-retrieval-has-been-accepted-at-icdar-2025-as-an-oral-presentation-project-webpage",
          title: ':confetti_ball: Our work titled “SynSlideGen : AI-Generated Lecture Slides for Improving Slide Element...',
          description: "",
          section: "News",},{id: "news-confetti-ball-two-of-our-papers-have-been-accepted-at-the-acl-2026-multimodal-augmented-generation-via-multimodal-retrieval-workshop-know-more-here-see-you-in-san-diego-us",
          title: ':confetti_ball: Two of our papers have been accepted at the ACL 2026 Multimodal...',
          description: "",
          section: "News",},{id: "news-trophy-awarded-the-hedwig-kurzbart-master-s-fellowship-prize-comes-with-2500-prize-by-the-courant-institute-for-outstanding-academic-and-research-performance-as-a-masters-student-at-nyu",
          title: ':trophy: Awarded the Hedwig Kurzbart Master’s Fellowship Prize (comes with $2500 prize) by...',
          description: "",
          section: "News",},{id: "news-technologist-joined-google-as-a-software-engineer-in-mountain-view-to-work-on-ai-search-experience",
          title: ':technologist: Joined Google as a Software Engineer in Mountain View to work on...',
          description: "",
          section: "News",},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-clinicalml-a-medically-interpretable-ml-pipeline-for-clinical-outcome-prediction-using-mimic-iii-discharge-summaries",
          title: 'ClinicalML - A medically interpretable ML pipeline for clinical outcome prediction using MIMIC-III...',
          description: "ClinicalML is an interpretable machine learning pipeline for predicting ICU patient outcomes—mortality and length of stay—using admission-time clinical notes. It extracts disease and drug entities, reduces dimensionality with BioClinicalBERT embeddings, and applies traditional ML models. ClinicalML performs comparably to BERT-based models while offering greater transparency and clinical trust.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clinicalML/";
            },},{id: "projects-towards-synthetic-data-augmentation-for-lecture-slide-understanding",
          title: 'Towards synthetic data augmentation for Lecture Slide Understanding',
          description: "SynSlideGen is a synthetic data generation pipeline that creates realistic, annotated lecture slides through an LLM-powered generation pipeline. Designed to support tasks like slide element detection and retrieval, it leverages structured text to generate diverse layouts and semantic content. SynSlideGen addresses the scarcity of annotated educational data through scalable automation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/synslidegen/";
            },},{id: "projects-do-retrieval-heads-speak-the-same-language",
          title: 'Do retrieval heads speak the same language?',
          description: "This project analyzes retrieval heads in multilingual LLMs using Needle-in-a-Haystack tasks across English, German, and Chinese. We find that strong retrieval heads are largely language-agnostic and critical for performance. Masking them leads to significant accuracy drops, offering insights for optimizing KV caching and multilingual model efficiency.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Multilingual_Retrieval_Heads/";
            },},{id: "projects-attention-aware-dpo-for-reducing-hallucinations-in-multi-image-qa",
          title: 'Attention-Aware DPO for Reducing Hallucinations in Multi-Image QA',
          description: "We introduce an attention-aware, multi-image augmented preference alignment method that improves accuracy by 8.5%, and further enhance inference-time alignment through adaptive attention scaling, yielding a 10% performance gain over the base model.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AttnDPO/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%74%32%33%36%39@%6E%79%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/NerdyVisky", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/vishvesh106", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/vntrivedi/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=lV89RVIAAAAJ", "_blank");
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
