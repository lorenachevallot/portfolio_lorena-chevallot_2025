/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // update collection data
  unmarshal({
    "name": "projets"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1728504295")

  // update collection data
  unmarshal({
    "name": "projet"
  }, collection)

  return app.save(collection)
})
