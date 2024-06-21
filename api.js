async function getProducts(category, min, max) {
    const response = await fetch(`/api/inventory?category=${category}&page=1`);
    const result = await response.json();
    // console.log(result);
  
    let totalItems = result['data'].filter((item)=>(item.price>min && item.price<max)).length;
    const totalPages = result['total_pages'];
  
  if( totalPages > 1) {
    for(let i=2; i<=totalPages; i++ ) {
      const response = await fetch(`/api/inventory?category=${category}&page=${i}`);
    const result = await response.json();
  
    totalItems += result['data'].filter((item)=>(item.price>min && item.price<max)).length;
    }
  }
  
    console.log('totalItems', totalItems);

}

getProducts('accessories',3000,4000); 
