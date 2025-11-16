/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // remove field
  collection.fields.removeById("file725246457")

  // remove field
  collection.fields.removeById("file1839296356")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "file725246457",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "refonte_logo_avant",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "hidden": false,
    "id": "file1839296356",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "refonte_logo_apres",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
