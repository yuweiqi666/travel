const currentCity = require('./public/mock/currentCity.json')
const icons = require('./public/mock/icons.json')
const imgsRun = require('./public/mock/imgRun.json')
const recommandList = require('./public/mock/recommandList.json')
module.exports = {
  devServer: {
    before (app) {
      app.get('/currentCity', (req, res) => {
        res.json({
          errno: 0,
          data: currentCity
        })
      })
      app.get('/iconList', (req, res) => {
        res.json({
          errno: 0,
          data: icons
        })
      })
      app.get('/imgsRun', (req, res) => {
        res.json({
          errno: 0,
          data: imgsRun
        })
      })
      app.get('/recommandList', (req, res) => {
        res.json({
          errno: 0,
          data: recommandList
        })
      })
    }
  }
}
