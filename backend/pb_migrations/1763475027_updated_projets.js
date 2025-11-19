/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
  collection.fields.addAt(31, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text747214426",
    "max": 0,
    "min": 0,
    "name": "contour_logo_final",
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
  collection.fields.removeById("text747214426")

  return app.save(collection)
})
