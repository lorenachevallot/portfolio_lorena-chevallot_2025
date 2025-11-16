/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // add field
  collection.fields.addAt(20, new Field({
    "hidden": false,
    "id": "json3411203195",
    "maxSize": 0,
    "name": "couleurs",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(21, new Field({
    "hidden": false,
    "id": "json1812708919",
    "maxSize": 0,
    "name": "typo",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // remove field
  collection.fields.removeById("json3411203195")

  // remove field
  collection.fields.removeById("json1812708919")

  return app.save(collection)
})
