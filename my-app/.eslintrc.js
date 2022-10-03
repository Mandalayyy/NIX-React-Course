module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "eslint:recommended",
        "plugin:json/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "consistent-return": 2,
        "indent": [1, 2],
        "no-else-return": 1,
        "semi": [1, "always"],
        "space-unary-ops": 2
    }
}
