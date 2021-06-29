window.addEventListener('load', e => {

  const viewer = document.querySelector('model-viewer')
  const hotspots = []
  const annotationTriggers = document.querySelectorAll('.annotation__category')

  viewer.addEventListener('load', e => {
  })


  function addAnnotation(data, index) {
    const hotspot = document.createElement('button')
    hotspot.classList.add('hotspot')
    hotspot.dataset.category = data.category
    hotspot.slot = `hotspot-${index}`
    hotspot.dataset.position = data.position

    const normalParts = data.normal.split(' ')
    hotspot.dataset.normal = `${normalParts[2]} ${normalParts[1]} ${normalParts[0]}`
    hotspot.addEventListener('click', () => selectHotspot(hotspot, index))
    const label = document.createElement('div')
    label.classList.add('annotation')
    label.innerHTML = `
      <div class='annotation__section'>
      <p class='annotation__title'> Business name </p>
      <p class='annotation__text'> ${data.name} </p>
      </div>
      <div class='annotation__section'>
      <p class='annotation__title'> People affected </p>
      <p class='annotation__text'> ${data.count} </p>
      </div>
      <div class='annotation__section'>
      <p class='annotation__title'> Notice date </p>
      <p class='annotation__text'> ${data.date} </p>
      </div>
    `
    hotspot.appendChild(label)
    viewer.appendChild(hotspot)
    hotspots.push(hotspot)
  }

  function selectHotspot(hotspot, index) {
    hotspots.forEach( (el, i) => {
      if(el.classList.contains('visible') && index !== i) {
        el.classList.remove('visible') 
      }
      if(index === i) {
        if(hotspot.classList.contains('visible')) {
          hotspot.classList.remove('visible')
          highlightCategory('')
        } else {
          hotspot.classList.add('visible')
          highlightCategory(hotspot.dataset.category)
        }
      }
    })
  }

  function selectCategory(category) {
    hotspots.forEach( el => {
      if(el.dataset.category === category) {
        el.classList.add('visible')
      } else {
        el.classList.remove('visible')
      }
    })
  }

  function highlightCategory(category) {
    annotationTriggers.forEach( el => {
      if(el.dataset.category === category) {
        el.classList.add('selected')
      } else {
        el.classList.remove('selected')
      }
    })
  }

  annotationTriggers.forEach( el => {
    el.addEventListener('click', () => {
      if(el.classList.contains('selected')) {
        selectCategory('')
        highlightCategory('')
      } else {
        selectCategory(el.dataset.category)
        highlightCategory(el.dataset.category)
      }
    })
  })

  annotationData.forEach(addAnnotation)
  // addAnnotation(annotationData[0], 0)
})