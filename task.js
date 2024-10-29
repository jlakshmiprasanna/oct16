var arr = [
    {
        "id": 1,
        "title": "Titan",
        "price": 3585,
        "description": "A beautiful rose gold bracelet adorned with sparkling charms for a delicate and elegant look.",
        "category": "Watches",
        "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3e10e985/images/Titan/Catalog/1713BM02_1.jpg?sw=600&sh=600",
        "rating": {
            "rate": 4.7,
            "count": 150
        }
    },
    {
        "id": 2,
        "title": "Jaeger-LeCoultre",
        "price": 4999,
        "description": "A timeless silver bracelet featuring the infinity symbol, symbolizing eternal love and friendship.",
        "category": "Watches",
        "image": "https://www.borsheims.com/blog/wp-content/uploads/2022/05/jlc-watch.jpg",
        "rating": {
            "rate": 4.5,
            "count": 240
        }
    },
    {
        "id": 3,
        "title": "Omega",
        "price": 12000,
        "description": "A vibrant boho-style bracelet made of colorful beads and tassels, perfect for casual outfits.",
        "category": "Watches",
        "image": "https://www.borsheims.com/blog/wp-content/uploads/2022/05/omega-speedmaster-watch.jpg",
        "rating": {
            "rate": 4.3,
            "count": 320
        }
    },
    {
        "id": 4,
        "title": "TAG Heuer",
        "price": 14999,
        "description": "An exquisite set of gold-plated bangles designed to enhance any traditional outfit.",
        "category": "Watches",
        "image": "https://www.borsheims.com/blog/wp-content/uploads/2022/05/tag-watch.jpg",
        "rating": {
            "rate": 4.0,
            "count": 400
        }
    }
];

document.getElementById('id1').innerHTML = `
  <style>
      #id1 {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 20px;
      }
      .card {
          width: 18rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
      }
      .card img {
          width: 100%;
          height: auto;
      }
      .card-body {
          padding: 15px;
      }
  </style>
`;

var card = document.getElementById("id1");
var colors = [ "lavender", "lightpink", "cyan", "purple", "lightcoral"];

function fun1() {
    for (i = 0; i < arr.length; i++) {
        card.innerHTML += `
        <section class="popular-places" id="popular" style="text-align: center;">
            <small style="color: blue; font-size: 0.8rem; font-family: Verdana, Geneva, Tahoma, sans-serif;">Popular Watches</small>
            <p style="font-weight: 650;">Watches more...</p>
            <div class="container text-center" style="background-color: ${colors[i % colors.length]};">
                <div class="row">  
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="${arr[i].image}" class="card-img-top" alt="Bracelet Image" style="width: 250px; height: 350px;">
                            <div class="card-body">
                                <h5 class="card-title">${arr[i].title}</h5>
                                <a href="#" class="btn btn-primary">See More...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}