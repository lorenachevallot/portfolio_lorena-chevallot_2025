/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
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

  // add field
  collection.fields.addAt(18, new Field({
    "hidden": false,
    "id": "file129553869",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "recherche_graphique_2",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(19, new Field({
    "hidden": false,
    "id": "file1891624283",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "recherche_graphique_3",
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
    "id": "file4007358712",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "recherche_graphique_4",
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
  collection.fields.removeById("file2662433911")

  // remove field
  collection.fields.removeById("file129553869")

  // remove field
  collection.fields.removeById("file1891624283")

  // remove field
  collection.fields.removeById("file4007358712")

  return app.save(collection)
})
