const jobs = [
  {
    jobId: 0,
    clientId: 1,
    category: "housing",
    jobTitle: "House painting job",
    jobDescription: "I have a house that needed some painting job done.",
    jobDate: "2022-11-01",
    postCreated: "2022-07-15",
    applicants: [
      { id: 3, price: 250 },
      { id: 4, price: 300 },
    ],
    jobProvider: undefined,
    status: "searching",
  },
  {
    jobId: 1,
    clientId: 1,
    category: "employment",
    jobTitle: "employment advicing via zoom",
    jobDescription:
      "I am moving to Vancouver 3 months later. I would like to get some advice on finding a job in the health caring field here. We can chat over zoom. Please apply if you have experience in health care industry.",
    jobDate: "2022-08-22",
    postCreated: "2022-07-15",
    applicants: [{ id: 5, price: 10 }],
    jobProvider: 5,
    status: "completed",
  },
  {
    jobId: 2,
    clientId: 1,
    category: "transportation",
    jobTitle: "Need a ride from YVR airport to Richmond.",
    jobDescription:
      "I am arriving at Vancouver on 2022-10-25. I needed a ride from the airport to my house. There will be 6 languages. It will be nice if you can show me around the neightbourhood after arriving at my house.",
    jobDate: "2022-10-25",
    postCreated: "2022-07-15",
    applicants: [
      { id: 3, price: 80 },
      { id: 4, price: 130 },
    ],
    jobProvider: 3,
    status: "completed",
  },
  {
    jobId: 3,
    clientId: 2,
    category: "housing",
    jobTitle: "House inspecting",
    jobDescription:
      "I am moving to Vancouver 3 months later. I saw an apartment online and needed someone to check the condition and sending me some photos.",
    jobDate: "2022-09-12",
    postCreated: "2022-06-07",
    applicants: [
      { id: 3, price: 50 },
      { id: 4, price: 70 },
    ],
    jobProvider: 3,
    status: "searching",
  },
  {
    jobId: 4,
    clientId: 2,
    category: "generalTasks",
    jobTitle: "Shopping helper needed",
    jobDescription:
      "I have 2 2 years old kids that needed be to take care of. We needed someone to help us on our shopping trip buying necessary gloceries and small funiture.",
    jobDate: "2022-09-15",
    postCreated: "2022-09-01",
    applicants: [{ id: 5, price: 50 }],
    jobProvider: 5,
    status: "completed",
  },
  {
    jobId: 5,
    clientId: 1,
    category: "transportation",
    jobTitle: "funiture moving",
    jobDescription:
      "I ordered a dinning set just now. The company said the set will be ready on Dec 20. I need a ride to pick it up and drive back to my place.",
    jobDate: "2022-12-20",
    postCreated: "2022-09-15",
    applicants: [
      { id: 3, price: 75 },
      { id: 4, price: 90 },
    ],
    jobProvider: undefined,
    status: "searching",
  },
  {
    jobId: 6,
    clientId: 2,
    category: "housing",
    jobTitle: "Air conditioner installing",
    jobDescription: "I bought an air conditioner and needed installation.",
    jobDate: "2022-10-25",
    postCreated: "2022-10-01",
    applicants: [
      { id: 3, price: 120 },
      { id: 4, price: 170 },
    ],
    jobProvider: undefined,
    status: "searching",
  },
  {
    jobId: 7,
    clientId: 2,
    category: "transportation",
    jobTitle: "need a ride from Burnaby to Marpole",
    jobDescription: "I needed a ride from Burnaby to Marpole.",
    jobDate: "2022-10-19",
    postCreated: "2022-10-15",
    applicants: [{ id: 3, price: 50 }],
    jobProvider: undefined,
    status: "searching",
  },
  {
    jobId: 8,
    clientId: 2,
    category: "education",
    jobTitle: "Looking for daycares",
    jobDescription: "I need to visit daycares and take pictures of the facilities.",
    jobDate: "2022-10-19",
    postCreated: "2022-10-15",
    applicants: [],
    jobProvider: undefined,
    status: "searching",
  },
];
module.exports = jobs;
