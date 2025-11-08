export default function Blog() {
  return (
    <div className="container py-4">
      
      <div id="blogCarousel" className="carousel slide" data-bs-ride="carousel">
        
        {/* Indicadores */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#blogCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#blogCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#blogCarousel" data-bs-slide-to="2"></button>
        </div>
        
        {/* Imágenes del carrusel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/promo1.png" className="d-block w-100" alt="Blog 1" style={{height: "600px", objectFit: "cover"}} />
          </div>
          <div className="carousel-item">
            <img src="/img/promo2.png" className="d-block w-100" alt="Blog 2" style={{height: "600px", objectFit: "cover"}} />
          </div>
          <div className="carousel-item">
            <img src="/img/promo3.png" className="d-block w-100" alt="Blog 3" style={{height: "600px", objectFit: "cover"}} />
          </div>
        </div>
        
        {/* Controles anterior/siguiente */}
        <button className="carousel-control-prev" type="button" data-bs-target="#blogCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#blogCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      
     
    </div>
  );
}


