var expect = require('chai').expect
const FileSystem = require('../src/utils/filesystem')

describe('FileSystem Util', () => {
  describe('fileExists(source)', () => {
    it('Returns true if a file exists', () => {
      var PackageJsonExists = FileSystem.fileExists('package.json')
      expect(PackageJsonExists).to.equal(true)
    })
    it('Returns false if a file does not exists', () => {
      var FileDoesNotExists = FileSystem.fileExists('ackage.json')
      expect(FileDoesNotExists).to.equal(false)
    })
  })
  describe('Get file extension', () => {
    it('Returns json on package.json', () => {
      var extension = FileSystem.getFileExtension('package.json')
      expect(extension).to.equal('json')
    })
  })
  describe('removeFileExtension(filename)', () => {
    it('Returns package on package.json', () => {
      var filename = FileSystem.removeFileExtension('package.json')
      var filenameLongPath = FileSystem.removeFileExtension('/var/lib/nodejs/package.json')
      expect(filename).to.equal('package')
      expect(filenameLongPath).to.equal('/var/lib/nodejs/package')
    })
  })
  describe('Get directories', () => {
    it('Returns an array with directories inside this folder', () => {
      var result = FileSystem.getDirectories('.')
      expect(result).to.be.an('array')
      expect(result).to.include('src', 'tests')
    })
  })
  describe('Is directory', () => {
    it('Returns true if a given path is a directory, false if not', () => {
      var result = FileSystem.isDirectory('tests')
      expect(result).to.be.a('boolean')
      expect(result).to.equal(true)

      var falseResult = FileSystem.isDirectory('package.json')
      expect(falseResult).to.be.a('boolean')
      expect(falseResult).to.equal(false)
    })
  })
  describe('createDirIfNotExists(dir)', () => {
    it('Creates a new directory if the directory does not exist', () => {
      FileSystem.createDirIfNotExists('tmp')
      var result = FileSystem.fileExists('tmp')
      expect(result).to.be.a('boolean')
      expect(result).to.equal(true)
    })
    it('Does nothing if a directory already exists', () => {
      FileSystem.createDirIfNotExists('tmp')
      FileSystem.createDirIfNotExists('tmp')
      var result = FileSystem.fileExists('tmp')
      expect(result).to.be.a('boolean')
      expect(result).to.equal(true)
    })
  })
})
