const core = require('@actions/core')

module.exports = Object.assign(conventionalCommitsConfig, {
    recommendedBumpOpts: Object.assign(conventionalCommitsConfig.recommendedBumpOpts, {
      whatBump: (commits) => {
        let level = 2
        let breakings = 0
        let features = 0
  
        core.info(`The commits in what Bump "${commits}"`)
        console.log("what bump called")
  
        return {
          level: level,
          reason: breakings === 1
            ? `There is ${breakings} BREAKING CHANGE and ${features} features`
            : `There are ${breakings} BREAKING CHANGES and ${features} features`
        }
      }
    })
  })