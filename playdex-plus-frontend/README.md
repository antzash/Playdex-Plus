# Playdex-Plus

Playdex-Plus is an interactive platform designed for gamers to explore, manage, and share their favorite games. It provides a comprehensive view of games, allowing users to add games to their playlists, explore friends' playlists, and manage their own game collection.

## Features

- **Game Exploration**: Users can browse through a vast collection of games, view detailed information, and manage their playlists.
- **User Authentication**: Secure user registration and login system.
- **Role-Based Access Control**: Different user roles with varying levels of access.
- **Dynamic Game Data**: Fetches game data from an external API and displays it in a user-friendly format.
- **Responsive Design**: Optimized for various screen sizes, ensuring a seamless user experience across devices.

## Env Variables:

MONGODB_URI=mongodb://127.0.0.1:27017/acme
PORT=5001
VITE_APP_API_KEY=6473ecf3a1234e8c8dd26ad6d2794e6e
MONGODB_URI=mongodb://localhost:27017/acme
VITE_SERVER=http://127.0.0.1:5001

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js with Express, MongoDB
- **Authentication**: JWT
- **APIs**: External game data API from RAWG.io

## Getting Started

### Deployed App

The app is currently in development and does not have a deployed version. However, you can clone the repository and run it locally.

### Public Board Planning

The project's planning and progress can be tracked on the [project board](https://github.com/yourusername/Playdex-Plus/projects/1).

## Next Steps

Future enhancements for Playdex-Plus include:

- **Sharing Playlists via Link**: Allow users to share their playlists with others via a unique link.
- **Comments on Friends' Playlists**: Enable users to comment on their friends' playlists, fostering a community around game sharing.
- **Adding Games Manually**: Provide an option for users to manually add games to their playlists if they are not available in the database.

## Acknowledgments

- The game data API for providing the game information.
- The React and Node.js communities for their extensive resources and support.
- RAWG.io for the External API
