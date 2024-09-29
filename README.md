# YouTube Embed React Project

This project is a simple React application that embeds a YouTube video and includes authentication using Auth0. It's built with Vite for fast development and optimized production builds.

## Project Structure

```
youtube-embed-project/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── LoginButton.jsx
│   │   └── YouTubeEmbed.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## Setup

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd youtube-embed-project
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Update Auth0 configuration:
   Open `src/App.jsx` and replace `YOUR_AUTH0_DOMAIN` and `YOUR_AUTH0_CLIENT_ID` with your actual Auth0 credentials.

4. Start the development server:
   ```
   npm run dev
   ```

## Building for Production

To create a production build:

```
npm run build
```

This will generate a `dist` folder with your compiled assets.

## Deploying to Cloudflare Pages

1. Push your code to a GitHub repository.

2. Log in to your Cloudflare account and go to the Pages section.

3. Click "Create a project" and select your GitHub repository.

4. Configure your build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`

5. Click "Save and Deploy"

Cloudflare Pages will now automatically deploy your site whenever you push changes to your GitHub repository.

## Customization

- To change the embedded YouTube video, update the `videoUrl` in `src/components/YouTubeEmbed.jsx`.
- To modify the header or add more pages, edit `src/components/Header.jsx` and update the routing in `src/App.jsx`.

## Contributing

Feel free to submit issues and pull requests for any improvements or bug fixes.

## License

This project is open source and available under the [MIT License](LICENSE).