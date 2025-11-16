/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file3834550803",
    "maxSelect": 1,
    "maxSize": 99999999999999,
    "mimeTypes": [],
    "name": "logo",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file1569786175",
    "maxSelect": 1,
    "maxSize": 9999999999999,
    "mimeTypes": [],
    "name": "previsualisation",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file3690467979",
    "maxSelect": 1,
    "maxSize": 1000000000000000,
    "mimeTypes": [],
    "name": "logo_strat_1",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file1123107633",
    "maxSelect": 1,
    "maxSize": 999999999999,
    "mimeTypes": [],
    "name": "logo_strat_2",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "file905343911",
    "maxSelect": 1,
    "maxSize": 999999999,
    "mimeTypes": [],
    "name": "logo_strat_3",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "file2662433911",
    "maxSelect": 99,
    "maxSize": 10000000001,
    "mimeTypes": [],
    "name": "recherche_graphique",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(22, new Field({
    "hidden": false,
    "id": "file838954320",
    "maxSelect": 1,
    "maxSize": 99999999999,
    "mimeTypes": [],
    "name": "moodboard",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(24, new Field({
    "hidden": false,
    "id": "file2138120681",
    "maxSelect": 1,
    "maxSize": 100000000001,
    "mimeTypes": [],
    "name": "livrable_image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(25, new Field({
    "hidden": false,
    "id": "file135512448",
    "maxSelect": 99,
    "maxSize": 9999999999999,
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

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file3834550803",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "logo",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file1569786175",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "previsualisation",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file3690467979",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "logo_strat_1",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file1123107633",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "logo_strat_2",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "file905343911",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "logo_strat_3",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

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

  // update field
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

  // update field
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

  // update field
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
})
