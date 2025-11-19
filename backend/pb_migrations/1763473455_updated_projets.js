/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
  collection.fields.addAt(30, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1624001186",
    "max": 0,
    "min": 0,
    "name": "contour_contexte",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // remove field
  collection.fields.removeById("text1624001186")

  return app.save(collection)
})
