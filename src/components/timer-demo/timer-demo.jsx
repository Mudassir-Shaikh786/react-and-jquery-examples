import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

export function TimerDemo(){

  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState(1);
  const [slideShowStatus, setSlideShowStatus] = useState("Slide Show - Paused");
  const [slideend, setSlideEnd]= useState("d-block bi bi-chevron-right btn fs-4");
  const [slidestart, setSlideStart]= useState("d-block bi bi-chevron-left btn fs-4");
  const thread = useRef(0);

  function loadProduct(url) {
      axios.get(url)
      .then(response => {
        setProduct(response.data);
      });
  }

  useEffect(()=> {
    loadProduct(`https://fakestoreapi.com/products/${productId}`);
    if (productId === 1) {
      setSlideStart('d-none');
      setSlideEnd('d-block bi bi-chevron-right btn fs-4');
    } else if (productId === 20) {
      setSlideStart('d-block bi bi-chevron-left btn fs-4');
      setSlideEnd('d-none');
      clearInterval(thread.current);
      setSlideShowStatus("Slide Show - Paused");
    } else {
      setSlideStart('d-block bi bi-chevron-left btn fs-4 text-primary');
      setSlideEnd('d-block bi bi-chevron-right btn fs-4 text-primary');
    }
  }, [productId]);

  function handleNextClick() {
    setProductId(function (next){
      return next +1 ;
    });
  }

  function handlePreviousClick() {
    setProductId(function (preview) {
      return preview - 1;
    });
  }

  function handlePlayClick() {
    thread.current = setInterval(handleNextClick, 5000); 
    setSlideShowStatus("Slide Show - Running");
  }

  function handlePauseClick() {
    clearInterval(thread.current);
    setSlideShowStatus("Slide Show - Paused");
  }

  function handleSeekBarChange(e) {
    setProductId(parseInt(e.target.value));
  }

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="card w-50 mt-4">
        <div className="card-header text-center">
          <div>{product.title}</div>
          <div className="fw-bold"> {slideShowStatus} </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-1 d-flex flex-column align-items-center justify-content-center">
              <button onClick={handlePreviousClick} className={slidestart} disabled={productId <= 1}></button>
            </div>
            <div className="col-10 position-relative">
              <div className="badge bg-danger position-absolute p-3 fs-5 top-0 end-0 rounded rounded-circle">
                ${product.price}
              </div>
              <img src={product.image} alt={product.title} width="100%" height="350" />
              <div>
                <input type="range" onChange={handleSeekBarChange} min="1" max="20" value={productId} className="form-range"/>
              </div>
            </div>
            <div className="col-1 d-flex flex-column align-items-center justify-content-center">
              <button className={slideend} onClick={handleNextClick} disabled={productId >= 20}></button>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <button onClick={handlePlayClick} className="btn btn-success bi bi-play"></button>
          <button onClick={handlePauseClick} className="btn btn-warning bi bi-pause ms-2"></button>
        </div>
      </div>
    </div>
  );
}