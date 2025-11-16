/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
  collection.fields.addAt(22, new Field({
    "hidden": false,
    "id": "file838954320",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "moodboard",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(23, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1353548632",
    "max": 0,
    "min": 0,
    "name": "livrable_texte",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(24, new Field({
    "hidden": false,
    "id": "file2138120681",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "livrable_image",
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
  collection.fields.removeById("file838954320")

  // remove field
  collection.fields.removeById("text1353548632")

  // remove field
  collection.fields.removeById("file2138120681")

  return app.save(collection)
})
