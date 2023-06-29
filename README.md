# React Movie Search App

This is a simple movie search application built with React. It allows users to search for movies by entering a movie name and displays the search results. The data is fetched from an external API and displayed in a user-friendly manner.

https://classy-toffee-fc5bbf.netlify.app/

## Features

- Real-time movie search
- Display movie title, stars, and release year
- Responsive design


## Usage

- Enter a movie name in the search input and click the "Search" button.
- The application will fetch movie data from the API and display the search results.
- If no movies are found, a message will be displayed.

## API Usage
The client-side of this application interacts with an API endpoint to generate the summaries. The API endpoint can be configured by updating the url variable in the fetchData function in App.js.

#### Please note that the API endpoint may have a rate limit, and if the application is not working, it could be due to exceeding the API rate limit. In such cases, please wait for the rate limit to reset or consider upgrading to a higher rate limit plan.

## Dependencies

- React
- axios
- Express
- cors

## API Key

This application uses the RapidAPI service to fetch movie data. You need to provide an API key to make requests to the API. Please make sure to set the `VITE_KEY` environment variable in your development environment or production server. You can obtain an API key from the RapidAPI website.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or questions, you can reach me at bashar.subh@gmail.com.

