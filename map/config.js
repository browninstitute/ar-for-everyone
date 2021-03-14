/* TODO:

## Introduction

* Write "preface" to story: this is part of... supported by a grant from...
* Write introduction to story: pandemic and WARN data

## Chapter 1 (New York State WARN data for 2019)

* How many businesses submitted WARN notices in 2019
* Ranging from (small business to very large)
* Geographic coverage
* Add legend

## Chapter 2 (New York State WARN data for 2020)

* However, 2020 was different.
* X number submitted WARN notices
* Add line graph with number of WARN notices by week
* Add legend

### Chapter 3 ()

*/

var config = {
  style: "mapbox://styles/jfs2118/ckkx8wkpu58s517rr4wvegkrq",
  accessToken:
    "pk.eyJ1IjoiamZzMjExOCIsImEiOiJlMUQzd2YwIn0.WLb3PYDt2z-XttOLFcQlVQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  toptitle: "AR for Everyone!",
  title:
    "A Virtual Tour of the Businesses that Closed due to Covid-19 in New York City",
  // subtitle: '',
  byline:
    'A project by <a href="https://brown.columbia.edu/portfolio/ziv-schneider/" target="_blank">Ziv Schneider</a>, <a href="https://brown.columbia.edu/portfolio/juan-francisco-saldarriaga-2/" target="_blank">Juan Francisco Saldarriaga</a>, and <a href="https://playdo.io/" target="_blank">Sukayna Aneja</a>, from <a href="https://brown.columbia.edu/" target="_blank">The Brown Institute for Media Innovation</a>.',
  description:
    '<p><i>This story is part of the <a href="" target="_blank">AR For Everyone! Experiencing Augmented Reality News Stories in the Browser</a> project, which explores and documents the development of browser-based, marker-less AR elements in news articles. AR For Everyone! is funded in part through the <a href="https://journalists.org/programs/journalism-360/challenge/2020-winners/" target="_blank">2020 Journalism 360 Challenge</a>, an initiative by the Online News Association and the Knight Foundation.</i></p><p>By some estimates xx% of businesses have closed due to the Covid-19 pandemic. In New York City alone, xx restaurants have shut their doors. To explore and visualize the impact of the pandemic on the economic life of the city we <a href="" target="_blank">scraped</a> the <a href="https://labor.ny.gov/app/warn/default.asp" target="_blank">Worker Adjustment and Retraining Notification (WARN)</a> data for 2019 and 2020, and <a href="" target="_blank">geocoded</a> its results.</p><p>The Worker Adjustment and Retaining Notification Act of 1988 requires all businesses with 100 or more employees to submit a 60-day advance notification of plant closings or mass layoffs. However, in the case of "unforeseeable business circumstances", such as the Covid-19 pandemic, the 60-day advance period can be waived. Nevertheless, this dataset can help us grasp the extent and range of economic devastation brought on by the pandemic.</p><p>Note that in New York State only businesses with 50 or more employees are required to submit WARN notices, and therefore this data cannot account for the hundreds of small businesses affected by the pandemic.</p><p style="text-align: center;">Scroll to continue<br>▼</p>',
  footer: "Source: source citations, etc.",
  chapters: [
    {
      id: "state2019",
      alignment: "left",
      hidden: false,
      title: "WARN 2019",
      image: "",
      description:
        "In 2019 more than xx businesses submitted WARN notices to New York State's Department of Labor. XX percentage of those were located outside New York City. XX had xx, while xx had xx. New York had xx.",
      location: {
        center: [-75.724, 42.85],
        zoom: 6.55,
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
      title: "WARN 2020",
      image: "",
      description:
        "2020 was, of course, a different beast. Mainly because of the pandemic, WARN notices increase xx fold, touching nearly every corner of the state. In north-west New York, Rochester and Buffalo saw an increase of xx percent, while Albany had more than xx.",
      location: {
        center: [-75.724, 42.85],
        zoom: 6.55,
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
      title: "WARN 2020 New York City",
      image: "",
      description:
        "But the brunt of notices were issued by businesses in New York City.",
      location: {
        center: [-73.96, 40.7],
        zoom: 10,
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
      title: "Building footprints",
      image: "",
      description: "Add selected building footprints and remove points.",
      location: {
        center: [-73.97, 40.75],
        zoom: 12.5,
        pitch: 55,
        bearing: -22,
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
      ],
      onChapterExit: [],
    },
    {
      id: "nycHighlightBuildings",
      alignment: "right",
      hidden: false,
      title: "Our selected slice of the city",
      image: "",
      description: "Highlight the selected buildings",
      location: {
        center: [-73.98, 40.756],
        zoom: 16.25,
        pitch: 55,
        bearing: -45,
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
      ],
      onChapterExit: [],
    },
  ],
};
