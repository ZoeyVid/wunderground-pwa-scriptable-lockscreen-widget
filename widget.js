// Version: 0.0.0
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: umbrella;
// Insert here your station id (https://www.wunderground.com/member/devices)
let stationID = ""

// Insert your Wunderground api key here (https://www.wunderground.com/member/api-keys)
let apiKey = ""

let loadedJSON = await new Request("https://api.weather.com/v2/pws/observations/current?stationId=" + stationID + "&format=json&units=m&numericPrecision=decimal&apiKey=" + apiKey).loadJSON()

let widget = new ListWidget()
let widgetHeadline = widget.addText(String(loadedJSON.observations[0].neighborhood))
widgetHeadline.font = Font.headline()
widget.addText(String(loadedJSON.observations[0].metric.temp) + "℃")
widget.addText(String(loadedJSON.observations[0].metric.precipTotal) + "L")
Script.setWidget(widget)
widget.presentSmall()
