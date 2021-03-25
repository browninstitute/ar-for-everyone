/*

TODO:

*/


let toptitleDiv = '<p class="code tl f6 mw6 center mb3">AR for Everyone!</p>';
let titleDiv = '<p class="avenir tl f2 mw6 center mt2 mb2">A Virtual Tour of the Businesses that Closed due to COVID-19 in New York City</p>';
let bylineDiv = '<p class="code tl f6 mw6 center mt3 lh-copy">A project by <a class="link underline black hover-red" href="https://brown.columbia.edu/portfolio/ziv-schneider/" target="_blank">Ziv Schneider</a>, <a class="link underline black hover-red" href="https://brown.columbia.edu/portfolio/juan-francisco-saldarriaga-2/" target="_blank">Juan Francisco Saldarriaga</a>, and <a class="link underline black hover-red" href="https://playdo.io/" target="_blank">Sukanya Aneja</a>, from <a class="link underline black hover-red" href="https://brown.columbia.edu/" target="_blank">The Brown Institute for Media Innovation</a>.</p>';

let descriptionDiv =
  '<p class="avenir tl f5 i mw6 center mt4 lh-copy">This story is part of the <a class="link underline black hover-red" href="" target="_blank">AR For Everyone! Experiencing Augmented Reality News Stories in the Browser</a> project, which explores and documents the development of browser-based, marker-less AR elements in news articles. AR For Everyone! is funded in part through the <a class="link underline black hover-red" href="https://journalists.org/programs/journalism-360/challenge/2020-winners/" target="_blank">2020 Journalism 360 Challenge</a>, an initiative by the Online News Association and the Knight Foundation.</p>' +
  '<p class="avenir tl f5 f4-ns mw6 center mt4 lh-copy">By some estimates xx% of businesses have closed due to the COVID-19 pandemic. In New York City alone, xx restaurants have shut their doors. To explore and visualize the impact of the pandemic on the economic life of the city we <a class="link underline black hover-red" href="" target="_blank">scraped</a> the <a class="link underline black hover-red" href="https://labor.ny.gov/app/warn/default.asp" target="_blank">Worker Adjustment and Retraining Notification (WARN)</a> data for 2019 and 2020, and <a class="link underline black hover-red" href="" target="_blank">geocoded</a> its results.</p>' +
  '<p class="avenir tl f5 f4-ns mw6 center mt4 lh-copy">The Worker Adjustment and Retaining Notification Act of 1988 requires all businesses with 100 or more employees to submit a 60-day advance notification of plant closings or mass layoffs. However, in the case of "unforeseeable business circumstances", such as the COVID-19 pandemic, the 60-day advance period can be waived. Nevertheless, this dataset can help us grasp the extent and range of economic devastation brought on by the pandemic.</p>' +
  '<p class="avenir tl f5 f4-ns mw6 center mt4 lh-copy">Note that in New York State only businesses with 50 or more employees are required to submit WARN notices, and therefore this data cannot account for the hundreds of small businesses affected by the pandemic.</p>' +
  '<p class="avenir tc f5 f4-ns mw6 center mt4 lh-copy">Scroll to continue<br>▼</p>';

let divChapter1 =
  '<div class="ph4 pt3 pb4"><p class="avenir tl f4">WARN NOTICES IN 2019</p>' +
  '<p class="code tl lh-copy f6">In 2019 more than 300 WARN notices were submitted New York State\'s Department of Labor, with almost 50% percent of those located outside New York City. In the north-west of the state, more than 50 notices came from Rochester, Buffalo, or Syracuse, while in the east more than 40 came from Long Island. New York accounted for more than 170 of the notices for the year.</p>' +
  '<svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#a9a9a9" /></svg><p class="dib v-mid code tl lh-copy f7 pl1 mv2">Location of WARN notices (2019)</p>' +
  '</div>';

let divChapter2 =
  '<div class="ph4 pt3 pb4"><p class="avenir tl f4">2020 AND THE PANDEMIC</p>' +
  '<p class="code tl lh-copy f6">2020 was, of course, a different kind of year. Mainly because of the COVID-19 pandemic, WARN notices in the state of New York increase almost 7-fold, with more than 2,300 notices being filed and coming from nearly every corner of the state.<br><br>The number of WARN notices from the region around Rochester, Buffalo and Syracuse increased by more than 300%, while the ones from Long Island increased by more than 500%. The number of notices coming from Albany and its surroundings, which in 2019 numbered only 7, went up to 50 notices.</p>' +
  '<svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#ffd700" /></svg><p class="dib v-mid code tl lh-copy f7 pl1 mv2">Location of WARN notices (2020)</p>' +
  '<p class="code tl lh-copy f7 mb0 mt3">Number of Notices Submitted per Week</p>' +
  '<img src="./img/noticesPerWeek.svg" class="w-100 pt0" alt="Graph of number of notices per week">' +
  '</div>';

let divChapter3 =
  '<div class="ph4 pt3 pb4"><p class="avenir tl f4">2020 WARN NOTICES IN NEW YORK CITY</p>' +
  '<p class="code tl lh-copy f6">But the of course the brunt of WARN notices for 2020 were issued by businesses in New York City. From 170 notices in 2019, the city jumped to more than 1,500, a 8-fold increase. And according to these notices submitted to the state, more than XX people where layed off in New York City during the course of 2020.</p>' +
  '<p class="code tl lh-copy f7 mt4">Location of WARN notices</p>' +
  '<svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#a9a9a9" /></svg><p class="dib v-mid code tl lh-copy f7 pl1 mv0">2019</p><br>' +
  '<svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#ffd700" /></svg><p class="dib v-mid code tl lh-copy f7 pl1 mv2">2020</p>' +
  "</div>";

let divChapter4 =
  '<div class="ph4 pt3 pb4"><p class="avenir tl f4">(placeholder) Building footprints</p>' +
  '<p class="code tl lh-copy f6">(placeholder) But the of course the brunt of WARN notices for 2020 were issued by businesses in New York City. From 170 notices in 2019, the city jumped to more than 1,500, a 8-fold increase. And according to these notices submitted to the state, more than XX people where layed off in New York City during the course of 2020.</p></div>';

let divChapter5 =
  '<div class="ph4 pt3 pb4"><p class="avenir tl f4">(placeholder) Our selected slice of the city</p>' +
  '<p class="code tl lh-copy f6">(placeholder) Highlight the selected buildings</p></div>';

var config = {
  style: "mapbox://styles/jfs2118/ckkx8wkpu58s517rr4wvegkrq",
  accessToken:
    "pk.eyJ1IjoiamZzMjExOCIsImEiOiJlMUQzd2YwIn0.WLb3PYDt2z-XttOLFcQlVQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  toptitle: toptitleDiv,
  title: titleDiv,
  // subtitle: '',
  byline: bylineDiv,
  description: descriptionDiv,
  footer: "Source: source citations, etc.",
  chapters: [
    {
      id: "state2019",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter1,
      location: {
        center: [-75.724, 42.85],
        zoom: 6.25,
        zoomSmall: 5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "warnData",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "warnData2019",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "nyState",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "warnData2019",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "state2020",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-75.724, 42.85],
        zoom: 6.25,
        zoomSmall: 5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "warnData",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "warnData2019",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "nyState",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "warnData2019",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "nyState",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "nycAllYears",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-73.96, 40.7],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "warnData",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "warnData2019",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "warnBuildings2020extrusion",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "warnBuildingsLabels",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "warnData2019",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "warnData",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "nyc2020",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-73.974, 40.745],
        zoom: 12.5,
        zoomSmall: 12,
        pitch: 55,
        bearing: -30,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "warnBuildings2020extrusion",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "warnBuildingsLabels",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "warnBuildings2020extrusion",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "nycHighlightBuildings",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-73.98, 40.756],
        zoom: 16.25,
        zoomSmall: 14,
        pitch: 55,
        bearing: -45,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "warnBuildingsOverpass",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "warnBuildingsLabels",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "otherBuildingsOverpass",
          opacity: 0.5,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "warnBuildingsOverpass",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "otherBuildingsOverpass",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "warnBuildingsLabels",
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ],
};
