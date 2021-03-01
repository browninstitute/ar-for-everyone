var config = {
    style: 'mapbox://styles/jfs2118/ckkx8wkpu58s517rr4wvegkrq',
    accessToken: 'pk.eyJ1IjoiamZzMjExOCIsImEiOiJlMUQzd2YwIn0.WLb3PYDt2z-XttOLFcQlVQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    toptitle: 'AR for Everyone!',
    title: 'A Virtual Tour of the Businesses that Closed due to Covid-19 in New York City',
    // subtitle: '',
    byline: 'by <a href="https://brown.columbia.edu/portfolio/ziv-schneider/" target="_blank">Ziv Schneider</a>, <a href="https://brown.columbia.edu/portfolio/juan-francisco-saldarriaga-2/" target="_blank">Juan Francisco Saldarriaga</a>, and <a href="https://playdo.io/" target="_blank">Sukayna Aneja</a>, from <a href="https://brown.columbia.edu/" target="_blank">The Brown Institute for Media Innovation</a>',
    description: '<p>This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with our previous web mapping example. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p><p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'state2019',
            alignment: 'left',
            hidden: false,
            title: 'WARN 2019',
            image: '',
            description: 'In 2019 more than xx businesses submitted WARN notices to New York State\'s Department of Labor. XX percentage of those were located outside New York City. XX had xx, while xx had xx. New York had xx.',
            location: {
                center: [-75.724,41.858],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'warnData',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'warnData2019',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'warnData2019',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'state2020',
            alignment: 'left',
            hidden: false,
            title: 'WARN 2020',
            image: '',
            description: '2020 was, of course, a different beast. Mainly because of the pandemic, WARN notices increase xx fold, touching nearly every corner of the state. In north-west New York, Rochester and Buffalo saw an increase of xx percent, while Albany had more than xx.',
            location: {
                center: [-75.724,41.858],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'warnData',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'warnData2019',
                    opacity: 0,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'warnData2019',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'nycAllYears',
            alignment: 'left',
            hidden: false,
            title: 'WARN 2020 New York City',
            image: '',
            description: 'But the brunt of notices were issued by businesses in New York City.',
            location: {
                center: [-73.96,40.7],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'warnData',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'warnData2019',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'warnData2019',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'nyc2020',
            alignment: 'right',
            hidden: false,
            title: 'Building footprints',
            image: '',
            description: 'Add selected building footprints and remove points.',
            location: {
                center: [-73.97,40.75],
                zoom: 12.5,
                pitch: 55,
                bearing: -22
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nycHighlightBuildings',
            alignment: 'right',
            hidden: false,
            title: 'Our selected slice of the city',
            image: '',
            description: 'Highlight the selected buildings',
            location: {
                center: [-73.98,40.756],
                zoom: 16.25,
                pitch: 55,
                bearing: -45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
