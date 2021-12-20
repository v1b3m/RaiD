const titles = [
  "How Do I Get Started?",
  "How do I digitise my radiographs?",
  "Can I access previous results?",
  "What is your policy on data and privacy?",
];

const data = new Array(4).fill(null).map((_, idx) => ({
  title: titles[idx],
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\
  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
  aliquip ex ea commodo consequat.",
}));

export { data };
