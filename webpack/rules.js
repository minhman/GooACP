const rule = [];

rule.push(
    require('./rules/css'),
    require('./rules/fonts'),
    require('./rules/images')
)

module.exports = rule;