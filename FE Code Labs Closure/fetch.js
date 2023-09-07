function outerFunction(url) {
  fetch('url').then(() => {
    console.log(url)
  }) 
 }
 
const newFunction = outerFunction('outside')
newFunction('inner')
