import React, {useState, useEffect, useRef} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import { useResizeDetector } from 'react-resize-detector';
import {FaMapMarkerAlt} from 'react-icons/fa'



function Map({long, lat, zoom, reference}) {
    const mapRef= useRef(null)
    const {height, width, ref } = useResizeDetector();
    const [viewport, setViewport] = useState({
        latitude: 45.866161,
        longitude: 25.788469,
        width: '100%',
        height: '100%',
        zoom: 14
    })
    useEffect(() => {
        mapRef.current.getMap().resize()

    }, [width, height])
    return (
        <div className='map' ref={ref}>
            <ReactMapGL {...viewport} ref={mapRef}
            mapboxApiAccessToken="pk.eyJ1IjoibWF6c2k3NyIsImEiOiJja292bmxlYnUwNndpMm90bTNuYzJsbmRlIn0.Oqli48u-MLSurQHVoVrLAw"
            mapStyle="mapbox://styles/mazsi77/ckot2doca0ftf17lk5yd1lko9"
            onViewportChange={viewport=>{setViewport(viewport)}} >
                <Marker latitude={45.866161} longitude={25.788469} >
                    <div className="marker">
                   <FaMapMarkerAlt />
                   </div>
      </Marker>
            </ReactMapGL>
        </div>
    )
}

export default Map
