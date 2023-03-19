const { google } = require("googleapis");
const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API,
});

const list = [
  "Encapsulation",
  "Classes and Objects",
  "Classes",
  "Class structure",
  "class components",
  "Objects",
  /* "Object declaration",
  "Reference variables",
  "Constructors",
  "default Constructor",
  "Parameterized Constructors",
  "Constructor overloading",
  "this keyword and its uses",
  "arrays concept",
  "static modifier",
  "access modifiers",
  "Wrapper classes",
  "Methods",
  "getters and setters",
  "Method Overloading",
  "Command-line arguments", */
];

const Ucontroller = async (req, res) => {
  /*  const res_data = await youtube.search.list({
    part: "snippet",
    q: "Encapsulation",
    type: "video",
    maxResults: 1,
    chart: "mostPopular",
  }); */
  let res_list = [];
  for (let i = 0; i < list.length; i++) {
    res_list[i] = await youtube.search.list({
      part: "snippet",
      q: list[i],
      type: "video",
      maxResults: 1,
      chart: "mostPopular",
      channelId: "UC8butISFwT-Wl7EV0hUK0BQ",
    });
  }

  const vidlist = res_list.map((i) => ({
    id: i.data.items[0].id.videoId,
    q: i.config.params.q,
  }));

  res.send(vidlist);
};

module.exports = Ucontroller;
