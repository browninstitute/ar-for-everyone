
const pane = new Tweakpane()
const mv = document.querySelector('model-viewer')
const hotspots = document.querySelectorAll('.hotspot')

const images = {
  street: './assets/test_streetView.jpg',
  creek: './assets/whipple_creek_regional_park_04_1k.hdr',
  pillars: './assets/pillars_1k.hdr',
  musichall: './assets/music_hall_01_1k.hdr',
}

const params = {
  skybox: '',
  environment: '',
  exposure: 1,
  shadow_intensity: 0,
  shadow_softness: 0,
  theta: 0,
  phi: 70,
  radius: 80,
}

const orbit = {
  theta: 0,
  phi: 70,
  radius: 80,
}

let playing, startTime


function addHotspotEvents() {
  mv.addEventListener('click', event => {
    if (event.target.classList.contains('hotspot')) {
      mv.cameraTarget = event.target.dataset.position
      // mv.cameraOrbit = event.target.dataset.orbit
      const orbitParts = event.target.dataset.orbit.split(' ')
      orbit.theta = parseFloat(orbitParts[0])
      orbit.phi = parseFloat(orbitParts[1])
      orbit.radius = parseFloat(orbitParts[2])
      setOrbit()
    }
  })
}

function addPane() {
  const lighting = pane.addFolder({title: 'Lighting'})
  lighting.addInput(params, 'skybox', { options: {
    none: '',
    ...images
  }})
  .on('change', (val) => mv.skyboxImage = val)

  lighting.addInput(params, 'environment', {
    options: {
      none: '',
      neutral: 'neutral',
      ...images
    }
  })
  .on('change', (val) => mv.environmentImage = val)

  lighting.addInput(params, 'shadow_intensity', { min: 0, max: 10, step: 0.1 }).on('change', (val) => mv.shadowIntensity = val)
  lighting.addInput(params, 'shadow_softness', { min: 0, max: 10, step: 0.1 }).on('change', (val) => mv.shadowSoftness = val)
  
  const camera = pane.addFolder({ title: 'Camera' })
  camera.addInput(params, 'theta', { min: 0, max: 360, step: 1 }).on('change', (val) => {
    orbit.theta = val
    setOrbit()
  })
  camera.addInput(params, 'phi', { min: 0, max: 180, step: 1 }).on('change', (val) => {
    orbit.phi = val
    setOrbit()
  })
  camera.addInput(params, 'radius', { min: 50, max: 100, step: 1 }).on('change', (val) => {
    orbit.radius = val
    setOrbit()
  })
  camera.addButton({ title: 'Play/Pause animation' }).on('click', () => playing = !playing)
  camera.addButton({ title: 'Recenter target' }).on('click', () => mv.cameraTarget = '0 0 0')
}

function setOrbit() {
  mv.cameraOrbit = `${orbit.theta}deg ${orbit.phi}deg ${orbit.radius}%`
}

function animate(t) {
  if(startTime === undefined) startTime = t
  const delta = (t - startTime) * 0.0001
  if (playing) {
    orbit.radius += 0.1 * Math.sign(Math.sin(t * 0.001))
    orbit.theta += delta*0.1
    setOrbit()
  }
  window.requestAnimationFrame(animate)
}

mv.addEventListener('load', () => {
  setOrbit()
  addPane()
  addHotspotEvents()
  animate()
  mv.environmentImage= ''
})

