import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ReactMapGL from 'react-map-gl';



class Login extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: '',
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    }
    this.displayLocationInfo = this.displayLocationInfo.bind(this)

  }
  displayLocationInfo(position) {
    this.setState({
      viewport: {
        ...this.state.viewport,
        longitude: position.coords.longitude,
        latitude: position.coords.latitude

      }
    })


  }


  componentDidMount(){
    console.log(this)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo)
    }



  }

  render() {

    console.log(this.state)
    return (
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <ReactMapGL
              {...this.state.viewport}
              onViewportChange={(viewport) => this.setState({viewport})}
            />
          </div>
          <div className='column'>
            {this.state.viewport.longitude}<br/>
            {this.state.viewport.latitude}
          </div>
        </div>
      </div>



    )
  }
}
export default Login
