console.log("Working...");

type IOBJ<T, U> = {
  [K in keyof T]: U;
};

let obj: IOBJ<any, any> = {
  id: 1,
  name: "Complex Object",
  metadata: {
    createdBy: "John Doe",
    createdAt: "2023-01-01",
    tags: ["nested", "object", "example"],
  },
  settings: {
    isEnabled: true,
    maxConnections: 100,
    timeouts: {
      default: 5000,
      max: 15000,
    },
  },
  data: [
    { id: 1, value: "Data Point 1" },
    { id: 2, value: "Data Point 2" },
    { id: 3, value: "Data Point 3" },
  ],
  status: "active",
  permissions: {
    read: true,
    write: false,
  },
  analytics: {
    visits: 1000,
    bounceRate: 0.25,
    demographics: {
      ageGroups: ["18-24", "25-34", "35-44"],
      interests: ["technology", "sports", "music"],
    },
  },
  notes: [
    { title: "Note 1", content: "Lorem ipsum dolor sit amet." },
    { title: "Note 2", content: "Consectetur adipiscing elit." },
  ],
};

const u: IOBJ<any, any> = {};

const t = Object.keys(obj)
  .sort((a, b) => a.localeCompare(b))
  .map((v) => {
    u[v] = obj[v];
  });

console.log(JSON.stringify(u, null, 4));
