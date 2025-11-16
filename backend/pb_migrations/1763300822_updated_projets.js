/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file832986430",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "prerefonte",
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
  collection.fields.removeById("file832986430")

  return app.save(collection)
})
