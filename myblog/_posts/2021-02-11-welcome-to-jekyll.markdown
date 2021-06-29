---
layout: post
title:  "How to Use Model Viewer"
categories: Tutorial
---

## Introduction

[Model viewer](https://modelviewer.dev/) is a javascript library by Google that makes it easy to add 3d content on a website. It uses custom HTML tags to do this so embedding a model is similar to adding an image or video to a webpage:

```HTML
<model-viewer src="path/to/3dmodel.glb" alt="A 3D model"></model-viewer>
```

model-viewer takes care of framing the model on all screen sizes, i.e. it's responsive by default. Doing this with other 3d frameworks can often involve several lines of javascript code. It also allows for animated models, using environment images for lighting, annotations, camera controls, AR and more — a lot of which can be controlled directly through HTML parameters.

```html
<model-viewer
	camera-controls
	skybox-image="path/to/skyboxImage.jpg"
	alt="A 3D model"
	src="path/to/3dmodel.glb">
</model-viewer>
```

**Some useful links:**

- [A presentation introducing model-viewer from Google's DevXR team (2019)](https://www.youtube.com/watch?v=lsScEabNutA)
- [Examples](https://modelviewer.dev/examples/) and [documentation](https://modelviewer.dev/docs/)
- [Release page with info on the newest features added](https://github.com/google/model-viewer/releases)
- [model-viewer twitter account for more examples and updates](https://twitter.com/modelviewer)
- [model-viewer editor for creating HTML snippets through an interface](https://modelviewer.dev/editor/)

## Device compatibility

The web standards for AR are still a work in progress, and constantly changing, as is browser support. model-viewer gets around this by using operating-system specific 'AR viewing apps' that integrate seamlessly with the browser experience. There are 3 modes available:

- `webxr` for browsers that support the current `WebXR` spec (Chrome 86+ on Android)
- `quick-look` for iOS devices
- `scene-viewer` for Android devices

It's important to note that QuickLook and SceneViewer are native apps. Once AR mode is launched through these apps, any custom javascript code from the webpage will no longer be able to run. The functionality and UX are determined by the apps, and features such as annotations do not work in these modes.




## Preparing a model

model-viewer accepts only `.gltf` or `.glb` models. (`.gltf` models often have textures stored as separate files. It's important to to keep them in the same relative location to the `.gltf`). For displaying a model in AR on iOS, one also needs to provide a `.usdz` version of the model.

Here are some tools that can help with converting a model to these formats :

- Models uploaded to [Sketchfab](https://help.sketchfab.com/hc/en-us/articles/360046421631-glTF-and-USDZ) are automatically converted to a variety of formats that can then be downloaded
- The [three.js editor](https://threejs.org/editor/) allows you to drag a model into it, and then export in a variety of formats
- Command lines tools for [gltf→usdz](https://github.com/google/usd_from_gltf), [fbx→gltf](https://github.com/facebookincubator/FBX2glTF) and [obj→gltf](https://github.com/CesiumGS/obj2gltf)
- [Apple Reality Convertor](https://developer.apple.com/news/?id=01132020a) for USDZ conversion (only for mac os 10.15.4+)
- [GLTF to GLB online conversion tool](https://sbtron.github.io/makeglb/)


\\
**Note on 3d model feature support:**

QuickLook (on iOS devices) does not support all features part of the `.gltf` spec. When converting a model to `.usdz`, some of these features could be emulated, while some will not work at all. See [here](https://help.sketchfab.com/hc/en-us/articles/360046421631-glTF-and-USDZ) for a list of `.usdz` limitations from Sketchfab, and a [more detailed list](https://github.com/google/usd_from_gltf#compatibility) along with emulations possible through the Google command line tool.

## Enabling AR

There are a few attributes that need to be included in the HTML tag for a model to work in AR:

```html
<model-viewer
	src="path/to/3dmodel.glb"
	ios-src="path/to/USDZmodel.usdz"
	ar
	ar-mode="webxr scene-viewer quick-look"
	alt="A 3D model that works in AR">
</model-viewer>
```

See [here](https://modelviewer.dev/examples/augmentedreality/) for more examples. The object can also be placed on a wall instead of the floor, and the AR button can be customized. It's important to note that the AR button will only be displayed on devices that support AR, so while developing on a laptop/desktop this button will not appear.

If `quick-look` is specified in the `ar-mode` list, but no `.usdz` model is provided, one will be generated on the fly. This is a new feature however, and might not produce desired results.

**Note about scale:**

The only options for pre-setting scale (`ar-scale`) in AR mode are `auto` and `fixed` - auto allows the model to be resized by pinching, whereas fixed always renders the model at 100% scale. The `gltf` format's scale is set in *meters* — so a model of scale 1 will render fairly large in AR mode — keep this unit in mind while preparing the model.

## Camera

model-viewer comes with default camera controls for rotation and zoom, the ability to set the camera orbit and target, auto-rotate, field of view and more. The camera works on a spherical coordinate system, set by a radius, and inclination and azimuth angles. Interact with [this demo](https://browninstitute.github.io/ar-for-everyone/interactive-demo) to see how these values affect the camera (+ play around with different lighting settings). See here for more [examples](https://modelviewer.dev/examples/stagingandcameras/) and [documentation](https://modelviewer.dev/docs/#stagingandcameras).

## Annotations

model-viewer lets you add annotations to the model by specifying its position and normal. Annotations can be styled through CSS, and can be set to be 'always visible' or occluded depending on the rotation of the model. Annotation ('hotspot') locations can be selected through the [model-viewer editor](https://modelviewer.dev/editor/) (generates an HTML snippet and allows for entering label text), or on [this](https://modelviewer.dev/examples/tester.html) page (displays position and normal values).

Here is how an annotation is plugged into the model-viewer HTML:

```html
<model-viewer src="scene.glb" camera-controls>
    <button
			class="Hotspot"
			slot="hotspot-1"
			data-position="0.08125757912266225m 0.01903929367409709m 0.048820624535711885m"
			data-normal="-0.004757698885123861m 7.089523799901993e-11m -0.9999886820866116m"
			data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Here is a label for the annotation</div>
    </button>
</model-viewer>
```

**Note:** Annotations currently work only in the browser and in WebXR mode for AR (Chrome 83+ on Android).

## Using model-viewer with React / bundling tools

model-viewer might not always play well with frameworks like React and javascript bundling tools. Often a solution is to include the non-module version of model-viewer (or specify paths to both):

```jsx
<script
	type="module"
  src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
/>
<script
  nomodule
  src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
/>
```

You can also use an `import` statement like so:

```jsx
import "@google/model-viewer/dist/model-viewer-legacy"
```
