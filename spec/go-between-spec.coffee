request = require("request")

describe "goBetween", ->

  describe "POST /upload", ->
    describe "a url and file name are provided", ->
      it "saves an image to the public/images directory", ->

    describe "an image name is not provided", ->
      it "saves an image to the public/images directory and keeps the name of the remote file", ->

    describe "the upload is successful", ->
      it "returns the new remote url of the stored file", ->

    describe "the upload is not successful", ->
      it "returns a 500 status code and states that the upload was not successful", ->

  describe "GET /public/images", ->
    describe "the requested image exists", ->
      it "returns the image", ->

    describe "the requested image does not exist", ->
      it "returns a 404 status code and states that the image was not found", ->
