/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
  collection.fields.addAt(9, new Field({
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

  // add field
  collection.fields.addAt(10, new Field({
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

  // add field
  collection.fields.addAt(11, new Field({
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

  // add field
  collection.fields.addAt(12, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2496229593",
    "max": 0,
    "min": 0,
    "name": "titre_strat_1",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text230695267",
    "max": 0,
    "min": 0,
    "name": "titre_strat_2",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2059866613",
    "max": 0,
    "min": 0,
    "name": "titre_strat_3",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2529681368",
    "max": 0,
    "min": 0,
    "name": "texte_strat_1",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text265195106",
    "max": 0,
    "min": 0,
    "name": "texte_strat_2",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2026487540",
    "max": 0,
    "min": 0,
    "name": "texte_strat_3",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // remove field
  collection.fields.removeById("file3690467979")

  // remove field
  collection.fields.removeById("file1123107633")

  // remove field
  collection.fields.removeById("file905343911")

  // remove field
  collection.fields.removeById("text2496229593")

  // remove field
  collection.fields.removeById("text230695267")

  // remove field
  collection.fields.removeById("text2059866613")

  // remove field
  collection.fields.removeById("text2529681368")

  // remove field
  collection.fields.removeById("text265195106")

  // remove field
  collection.fields.removeById("text2026487540")

  return app.save(collection)
})
