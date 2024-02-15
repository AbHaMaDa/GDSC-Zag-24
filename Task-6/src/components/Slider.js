



function Slider(){
    return(
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner h-50" >
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://miro.medium.com/v2/resize:fit:1400/1*SwFB1o_k1LGprN-XRUZQ8w.jpeg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://miro.medium.com/v2/resize:fit:1018/1*iAu65xDmvpVdBJgps6EDEw.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 " src="https://miro.medium.com/v2/resize:fit:1400/1*34GfkhLFydPjZWUde1EzRg.jpeg" alt="Third slide"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>

    )
}

export default Slider;