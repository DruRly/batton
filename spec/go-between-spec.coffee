request = require("request")
fs      = require("fs")

describe "goBetween", ->
  url     = "http://lh3.ggpht.com/zjnnvZZdGfB6zDiluJzoP44dgxn-s_5IzAQpRvhPa1rGpLi2WaaId2VCyWl2B0Mac_ZgZdUIKuR45Iz-iy7WscxCePSsbEgvTBQlf_bE"

  describe "POST /upload", ->
    describe "a url and file name are provided", ->
      it "saves an image to the public/images directory", ->
        request.post("http://localhost:80/upload",
          url: url
          imageName: "test.jpg"
        )
        fs.exists "../public/images/test.jpg", (exists) ->
          expect(exists).toBe(true)

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
