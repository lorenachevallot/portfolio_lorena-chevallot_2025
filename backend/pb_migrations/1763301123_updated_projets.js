/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
  collection.fields.addAt(18, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1234098716",
    "max": 0,
    "min": 0,
    "name": "refonte_texte",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(19, new Field({
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
  collection.fields.addAt(20, new Field({
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // remove field
  collection.fields.removeById("text1234098716")

  // remove field
  collection.fields.removeById("file725246457")

  // remove field
  collection.fields.removeById("file1839296356")

  return app.save(collection)
})
