/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
  collection.fields.addAt(25, new Field({
    "hidden": false,
    "id": "file135512448",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "mockups",
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
  collection.fields.removeById("file135512448")

  return app.save(collection)
})
