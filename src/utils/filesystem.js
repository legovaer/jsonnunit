const {lstatSync, readdirSync, statSync} = require('fs')
const {join, basename} = require('path')
const fs = require('fs')

class FileSystem {
  static getAllFilesFromFolder(source) {
    var results = []

    if (!FileSystem.fileExists(source)) {
      throw new Error('Folder does not exist: ' + source)
    }

    readdirSync(source).forEach(function (file) {
      file = source + '/' + file
      var stat = statSync(file)

      if (stat && stat.isDirectory()) {
        results = results.concat(FileSystem.getAllFilesFromFolder(file))
      } else results.push(file)
    })

    return results
  }

  static removeDirectory(dir) {
    fs.rmdirSync(dir, {recursive: true})
  }

  static removeFile(file) {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file)
    }
  }

  static createDirIfNotExists(dir) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
  }

  static removeCWDFromPath(path, cwd) {
    return (path.replace(cwd, ''))
  }

  static writeToFile(contents, file, callback = undefined) {
    fs.writeFile(file, contents, {flag: 'wx'}, err => {
      if (err) throw err
      if (callback) {
        callback()
      }
    })
  }

  static getFileNameFromFullPath(path) {
    return basename(path)
  }

  /**
   * Tests if a given source path is a file and if the file exists.
   *
   * @param {string} source
   *   The path that needs to be checked.
   *
   * @returns {boolean}
   *   True if the file exists, false if not.
   */
  static fileExists(source) {
    return fs.existsSync(source)
  }

  /**
   * Check if a given source is a system directory.
   *
   * @param {string} source
   *   The path that needs to be checked.
   *
   * @returns {boolean}
   *   True if the given source is a system directory, false if not.
   */
  static isDirectory(source) {
    return lstatSync(source).isDirectory()
  }

  /**
   * Lists all system directories in a given source.
   *
   * @param {string} source
   *   The path where directories should be searched for.
   *
   * @returns {Array}
   *   An indexed array containing all system directories that have been found
   *   in the given source path.
   */
  static getDirectories(source) {
    return readdirSync(source).map(name => join(source, name)).filter(FileSystem.isDirectory)
  }

  /**
   * Extract the extension of a given source path.
   *
   * @param {string} source
   *   The path of a the file where the extension should be retrieved from.
   *
   * @returns {string}
   *   The file extension of the given source without the leading dot.
   */
  static getFileExtension(source) {
    return source.substring(source.lastIndexOf('.') + 1, source.length) || source
  }

  static removeFileExtension(filename) {
    return filename.split('.').slice(0, -1).join('.')
  }

  /**
   * Lists all files within a given path with a given file extension.
   *
   * @param {string} source
   *   The path where files with a given extension should be searched for.
   * @param {string} extension
   *   The extension (without the leading dot) that should be searched for.
   *
   * @returns {Array}
   *   An indexed array containing all the paths to the files that have been
   *   found in the given source directory that contain the given file
   *   extension.
   */
  static getFilesWithExtensionFromFolder(source, extension) {
    var files = FileSystem.getAllFilesFromFolder(source)
    var results = []

    files.forEach(function (file) {
      if (FileSystem.getFileExtension(file) === extension) {
        results.push(file)
      }
    })

    return results
  }
}

module.exports = FileSystem
