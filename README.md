# Watchlist Backend

## Description

This is a simple API that allows you to create, update, delete and view watchlists. It also allows users to add and remove videos from watchlists as well.

## Installation

### With Docker

1. Clone the repository

```bash
git clone https://github.com/ankurgajurel/watchlist-backend
```

2. Run `docker-compose up` in the root directory of the project

```bash
cd watchlist-backend
docker compose up
```

### Without Docker

1. Clone the repository

```bash
git clone https://github.com/ankurgajurel/watchlist-backend
```

2. Install the dependencies

```bash
cd watchlist-backend
pnpm install
```

3. Create a `.env` file in the root directory of the project and add the following environment variables

```bash
cp .env.example .env
```

Now, edit the `.env` file and add the required environment variables

4. Start the server

```bash
pnpm start
```

## API Documentation

#### Endpoints

1. `POST /api/v1/watchlist` - Create a new watchlist

Request Body:

```json
{
  "name": "watchlistName"
}
```

2.  `GET /api/v1/watchlist` - Get all videos in a watchlist

Request Body:

```json
{
  "name": "watchListName"
}
```

3. `DELETE /api/v1/watchlist` - Delete a watchlist

Request Body:

```json
{
  "name": "watchlistName"
}
```

4.  `POST /api/v1/videos` - Add a video to a watchlist

Request Body:

```json
{
  "name": "videoName",
  "url": "videoUrl",
  "watchlistId": "watchListId",
}
```

5. `DELETE /api/v1/videos` - Remove a video from a watchlist

Request Body:

```json
{
  "name": "videoName",
  "watchlistId": "watchListId",
}
```

6. `GET /api/v1/watchlist/all` - Get all Watchlists with id and name