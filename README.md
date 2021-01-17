# gatsby-source-note

Source plugin for pulling posts from [note](https://note.com/)

## Install

```bash
yarn add gatsby-source-note
```

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-note`,
      options: {
        // note ID
        creator: `info`,
      },
    },
  ],
}
```

## Note

However, this plugin uses an unofficial API so, I recommend that you use it for private use.
