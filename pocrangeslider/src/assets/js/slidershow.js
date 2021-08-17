function MyRangeSlider(msg) {
  console.log(msg);
  d3.json('https://gist.githubusercontent.com/bumbeishvili/a0ab3299b4e4eb1557085317b9136ec1/raw/ba488da953d2fa0e64ff2469a209c520fd408055/dateData.json')
    .then(data => {
      var v = new RangeSlider()
        .container('.chart-container')
        .svgWidth(window.innerWidth - 20)
        .svgHeight(100)
        .data(data)
        .accessor(d => new Date(d))
        .onBrush(d => {
          d3.select('.range').html(`range is [` + d.range[0].toLocaleDateString('en') + ', ' + d.range[1].toLocaleDateString('en') + `]`)
          d3.select('.data').html(`selected data length - ` + d.data.length)
        })
        .render()
    })
}
