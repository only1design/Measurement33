function bindNicescroll() {
  
  // Wishlist nicescroll
  $('.wishlist-box').niceScroll({
    cursorcolor:'#ff8e32',
    cursorwidth:'6px',
    autohidemode:'leave',
    cursoropacitymin: 0.3,
    horizrailenabled: false,
    spacebarenabled: false,
    touchbehavior: true
  });
  
  // Cart nicescroll
  $('.cart-box').niceScroll({
    cursorcolor:'#ff8e32',
    cursorwidth:'6px',
    autohidemode:'leave',
    cursoropacitymin: 0.3,
    horizrailenabled: false,
    spacebarenabled: false,
    touchbehavior: true
  }); 
}

export default bindNicescroll;