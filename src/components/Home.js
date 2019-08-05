import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ReactMapGL from 'react-map-gl';



class Home extends React.Component{
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
        zoom: 10
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
    }
    )
    axios.get(`https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=${this.state.viewport.latitude},${this.state.viewport.longitude},355&mode=retrieveAddresses&maxresults=1&gen=9&app_id=${process.env.HereAppId}&app_code=${process.env.HereAppCode}`)
      .then(res => this.setState({ here: res.data.Response.View[0].Result[0].Location.Address

      }))

      axios.get('https://example.com/getSomething', {
 headers: {
   Authorization: 'Bearer ' + token //the token is a variable which holds the token
 }
})

        "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist" -H "Authorization: Bearer {your access token}"
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

            />
          </div>
          <div className='column'>
            {this.state.viewport.longitude}<br/>
            {this.state.viewport.latitude}

            {this.state.here && <div>
              {`You're in ${this.state.here.City}`}
            </div>}
          </div>
        </div>
      </div>



    )
  }
}
export default Home
