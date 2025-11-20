/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
  collection.fields.addAt(18, new Field({
    "hidden": false,
    "id": "file188799579",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "ancien_logo",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // remove field
  collection.fields.removeById("file188799579")

  return app.save(collection)
})
