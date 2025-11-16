/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
  collection.fields.addAt(21, new Field({
    "hidden": false,
    "id": "file2581348462",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "recherche_graphique_5",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(22, new Field({
    "hidden": false,
    "id": "file13963732",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "recherche_graphique_6",
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
  collection.fields.removeById("file2581348462")

  // remove field
  collection.fields.removeById("file13963732")

  return app.save(collection)
})
