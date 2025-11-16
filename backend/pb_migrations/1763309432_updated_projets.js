/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // update field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "file2662433911",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "recherche_graphique",
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

  // update field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "file2662433911",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "recherche_graphique_1",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
