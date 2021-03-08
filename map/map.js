var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
  full: "fully",
};

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = { duration: layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}

var story = document.getElementById("story");
var features = document.createElement("div");
features.setAttribute("id", "features");

var header = document.createElement("div");

if (config.toptitle) {
  var toptitle = document.createElement("h4");
  toptitle.innerText = config.toptitle;
  header.appendChild(toptitle);
}

if (config.title) {
  var titleText = document.createElement("h1");
  titleText.innerText = config.title;
  header.appendChild(titleText);
}

if (config.subtitle) {
  var subtitleText = document.createElement("h2");
  subtitleText.innerText = config.subtitle;
  header.appendChild(subtitleText);
}

if (config.byline) {
  var bylineText = document.createElement("p");
  bylineText.classList.add("byline");
  bylineText.innerHTML = config.byline;
  header.appendChild(bylineText);
}

if (config.description) {
  var descriptionText = document.createElement("p");
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}

if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
  var container = document.createElement("div");
  var chapter = document.createElement("div");

  if (record.title) {
    var title = document.createElement("h3");
    title.innerText = record.title;
    chapter.appendChild(title);
  }

  if (record.image) {
    var image = new Image();
    image.src = record.image;
    chapter.appendChild(image);
  }

  if (record.description) {
    var story = document.createElement("p");
    story.innerHTML = record.description;
    chapter.appendChild(story);
  }

  container.setAttribute("id", record.id);
  container.classList.add("step");
  if (idx === 0) {
    container.classList.add("active");
  }

  chapter.classList.add(config.theme);
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || "centered");
  if (record.hidden) {
    container.classList.add("hidden");
  }
  features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement("div");

if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=scrollytellingV2"
    : "?pluginName=scrollytellingV2";
  return {
    url: url + suffix,
  };
};

var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: config.chapters[0].location.zoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
  transformRequest: transformRequest,
});

if (config.showMarkers) {
  var marker = new mapboxgl.Marker({ color: config.markerColor });
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function () {
  if (config.use3dTerrain) {
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxzoom: 14,
    });
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
      id: "sky",
      type: "sky",
      paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
      },
    });
  }
  map.addLayer(
    {
      id: "warnData",
      type: "circle",
      source: {
        type: "geojson",
        data: "data/warnDataGoogle.geojson",
      },
      paint: {
        "circle-opacity": 0,
        "circle-stroke-opacity": 0,
        "circle-color": "lightgray",
        "circle-stroke-color": "black",
        "circle-stroke-width": 0.5,
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          4,
          14,
          6,
          18,
          12,
        ],
      },
    },
    "road-label"
  );
  map.addLayer(
    {
      id: "warnData2019",
      type: "circle",
      source: {
        type: "geojson",
        data: "data/warnDataGoogle2019.geojson",
      },
      paint: {
        "circle-opacity": 0,
        "circle-stroke-opacity": 0,
        "circle-color": "red",
        "circle-stroke-color": "black",
        "circle-stroke-width": 0.5,
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          4,
          14,
          6,
          18,
          12,
        ],
      },
    },
    "road-label"
  );
  map.addLayer(
    {
      id: "warnBuildings2020",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/warnBuildings2020.geojson",
      },
      paint: {
        "fill-opacity": 0,
        "fill-color": "gold",
        "fill-outline-color": "black",
      },
    },
    "road-label"
  );
  map.addLayer(
    {
      id: "warnBuildings2020extrusion",
      type: "fill-extrusion",
      source: {
        type: "geojson",
        data: "data/warnBuildings2020.geojson",
      },
      paint: {
        "fill-extrusion-opacity": 0,
        "fill-extrusion-height": ["*", 0.3048, ["get", "heightroof"]],
        "fill-extrusion-color": "gold",
      },
    },
    "road-label"
  );
  map.addLayer(
    {
      id: "nyState",
      type: "line",
      source: {
        type: "geojson",
        data: "data/newYorkStateBorder.geojson",
      },
      paint: {
        "line-dasharray": [1.5,1.5],
        "line-color": "darkgray",
        "line-opacity":1,
        "line-width": 1.5
      },
    },
    "road-label"
  );

  // setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
      offset: 0.5,
      progress: true,
    })
    .onStepEnter((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.add("active");
      map[chapter.mapAnimation || "flyTo"](chapter.location);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
      if (chapter.callback) {
        window[chapter.callback]();
      }
      if (chapter.rotateAnimation) {
        map.once("moveend", function () {
          const rotateNumber = map.getBearing();
          map.rotateTo(rotateNumber + 90, {
            duration: 24000,
            easing: function (t) {
              return t;
            },
          });
        });
      }
    })
    .onStepExit((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.remove("active");
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    });
});

// setup resize event
window.addEventListener("resize", scroller.resize);
